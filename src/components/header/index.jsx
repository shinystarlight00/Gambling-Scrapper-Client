import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";
import Dropdown from '../dropdown';
import { setDate } from '../../store/reducers/dateReducer';
import './header.scss';

import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

export default function Header({
    title,
}) {
    const dispatch = useDispatch();
    const date = useSelector(state => state.date);

    const [calendarVisible, setCalendarVisible] = useState(false);
    const [quickDateModal, setQuickDateModal] = useState(false);
    const [quickDate, setQuickDate] = useState("All time");

    useEffect(() => {
        const now = new Date();

        function getUpcomingSunday() {
            const date = now;
            const today = date.getDate();
            const currentDay = date.getDay();
            const newDate = date.setDate(today - currentDay + 7);
            return new Date(newDate);
        }

        function getLastSunday() {
            const date = now;
            const today = date.getDate();
            const currentDay = date.getDay();
            const newDate = date.setDate(today - (currentDay || 7));
            return new Date(newDate);
        }

        function getToday() {
            const date = now;
            date.setHours(0, 0, 0, 0);
            return date;
        }

        function getYesterday() {
            const date = now;
            const yesterday = new Date(date);
            yesterday.setDate(date.getDate() - 1);
            yesterday.setHours(0, 0, 0, 0);
            return yesterday;
        }

        switch(quickDate) {
            case "All time":
                dispatch(setDate({
                    start: moment("2023-10-25").toDate(),
                    end: now,
                }));
                break;

            case "Yesterday":
                dispatch(setDate({
                    start: getYesterday(),
                    end: getToday()
                }));
                break;

            case "Today":
                dispatch(setDate({
                    start: getToday(),
                    end: now,
                }));
                break;

            case "This week":
                dispatch(setDate({
                    start: getLastSunday(),
                    end: getUpcomingSunday()
                }));
                break;

            case "This month":
                dispatch(setDate({
                    start: new Date(now.getFullYear(), now.getMonth(), 1),
                    end: new Date(now.getFullYear(), now.getMonth() + 1, 0)
                }));
                break;

            case "Last month":
                dispatch(setDate({
                    start: new Date(now.getFullYear(), now.getMonth() - 1, 1),
                    end: new Date(now.getFullYear(), now.getMonth(), 0)
                }));
                break;
        }
    }, [quickDate])

    return (
        <header>
            <h1>{title}</h1>

            <div className="right">
                <div
                    className="calendar-container"
                    onClick={e => {
                        if (!document.querySelector(".react-datepicker")?.contains(e.target) || !document.querySelector(".react-datepicker"))
                            setCalendarVisible(!calendarVisible);
                    }}
                >
                    <div className="start">
                        <span>{date.start?.toLocaleString("en-GB")?.split(",")?.[0] || "-"}</span>
                    </div>
                    <div className="end">
                        <span>{date.end?.toLocaleString("en-GB")?.split(",")?.[0] || "-"}</span>
                        <img src="/images/icons/calendar.svg" />
                    </div>

                    {calendarVisible && (
                        <div className="calendar-bg">
                            <DatePicker
                                selected={date.start}
                                onChange={d => {
                                    const [start, end] = d;
                                    dispatch(setDate({ start, end }));
                                }}
                                startDate={date.start}
                                endDate={date.end}
                                maxDate={new Date(new Date().getTime() /*+ 1000 * 60 * 60 * 24*/ )}
                                minDate={new Date("2023.10.25")}
                                selectsRange
                                inline
                            />
                        </div>
                    )}
                </div>

                <div className="selection-container">
                    <button onClick={() => setQuickDateModal(true)}>
                        {quickDate}
                        <img src="/images/icons/up.svg" className={"arrow " + (quickDateModal ? "up" : "down")} />
                    </button>
                    <div>
                        <Dropdown
                            items={["Yesterday", "Today", "This week", "This month", "Last month", "All time"]}
                            click={e => setQuickDate(e.target.innerText)}
                            visible={quickDateModal}
                            setVisible={setQuickDateModal}
                            selected={quickDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}