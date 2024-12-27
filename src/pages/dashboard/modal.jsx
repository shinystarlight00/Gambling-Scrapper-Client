import { useState, useEffect } from "react";
import { useDispatch } from "react-redux"
import DatePicker from "react-datepicker";
import moment from 'moment';
import Dropdown from '../../components/dropdown';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { formatNumber } from "../../helpers/format";
import { setDate } from '../../store/reducers/dateReducer';

export default function Modal({
    title,
    id,
    set,
    web,
    date,

    /// Custom
    // RustyPot
    estimatedData=null,
    setEstimatedData=null,
    estimatedPercent=null,
    setEstimatedProfit=null,
    setEstimatedPercent=null,
    prevEstimatedPercent=null,
    setPrevEstimatedPercent=null,
}) {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [focusBar, setFocusBar] = useState(null);
    const [intervalType, setIntervalType] = useState("hours");
    const [calendarVisible, setCalendarVisible] = useState(false);

    // Estimated Profit
    const [estimatedProfitDropdown, setEstimatedProfitDropdown] = useState(false);
    const [EP_calculatedOnce, setEP_calculatedOnce] = useState(false);

    useEffect(() => {
        if (date?.start && date?.end) {
            setLoading(true);

            fetch(process.env.REACT_APP_API + `/datas/${web}/${id}/?start=${date.start}&end=${date.end}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    "access-token": localStorage.getItem("access_token")
                }
            })
                .then(data => data.json())
                .then(data => {
                    if (data?.data) {
                        setData(data.data);
                        setIntervalType(data.intervalType);
                    }
                    setLoading(false);
                });
        }
    }, [date]);

    // Change on estimated percent (this calculation can be done on frontend)
    useEffect(() => {
        if (id == "estimatedProfit" && EP_calculatedOnce) {
            const newData = [];
            let total = 0;

            (estimatedData || data).forEach(d => {
                d.value = d.value * estimatedPercent / prevEstimatedPercent;
                total += d.value;
                newData.push(d);
            })

            setData(newData);
            setEstimatedData(newData);
            setEstimatedProfit(total);
            setPrevEstimatedPercent(estimatedPercent);
        }

        setEP_calculatedOnce(true);
    }, [estimatedPercent])

    function close(e) {
        if (e.currentTarget == e.target) set(false);
    }

    return (
        <div id="modal" onClick={close}>
            <div className="container" style={loading ? { display: "flex", alignItems: "center", justifyContent: "center" } : undefined}>
                <header>
                    <h1>{title}</h1>

                    <div className="right">

                        {/* Estimated Profit */}
                        {id == "estimatedProfit" && (
                            <div className="selection-container estimatedProfit">
                                <button onClick={() => setEstimatedProfitDropdown(true)}>
                                    {estimatedPercent}%
                                    <img src="/images/icons/up.svg" className={"arrow " + (estimatedProfitDropdown ? "up" : "down")} />
                                </button>
                                <div>
                                    <Dropdown
                                        items={["5%", "6%", "7%", "8%", "9%", "10%"]}
                                        click={e => setEstimatedPercent(parseInt(e.target.innerText.slice(0, -1)))}
                                        visible={estimatedProfitDropdown}
                                        setVisible={setEstimatedProfitDropdown}
                                        selected={estimatedPercent + "%"}
                                    />
                                </div>
                            </div>
                        )}

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
                    </div>
                </header>

                <img className="close" src="/images/icons/close.svg" onClick={() => set(false)} />

                {loading ? (
                    <div className="loader">
                        <img src="/images/loader.svg" />
                    </div>
                ) : (
                    <div className="body">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={(estimatedData || data)}
                                margin={{
                                    top: 5,
                                    bottom: 5,
                                }}
                                onMouseMove={state => {
                                    if (state.isTooltipActive)
                                        return setFocusBar(state.activeTooltipIndex);
                                    return setFocusBar(null);
                                }}
                            >
                                <CartesianGrid
                                    vertical={false}
                                    strokeDasharray="6 6"
                                    color="#575761"
                                    opacity={0.3}
                                />
                                <Tooltip
                                    cursor={{ fill: 'transparent' }}
                                    content={({ payload }) => {
                                        return (
                                            <div className="custom-tooltip">
                                                <span className="value">
                                                    {(
                                                        id?.toLowerCase()?.includes("wager") ||
                                                        id?.toLowerCase()?.includes("profit") ||
                                                        id?.toLowerCase()?.includes("payout") ||
                                                        id?.toLowerCase()?.includes("biggest")
                                                    )
                                                        ? "$"
                                                        : ""
                                                    }
                                                    {formatNumber(payload?.[0]?.payload?.value || 0)}
                                                    {(id?.toLowerCase()?.includes("percentage"))
                                                        ? "%"
                                                        : ""
                                                    }
                                                </span>
                                                <span className="date">{moment(payload?.[0]?.payload?.date).format("YYYY/MM/DD")}</span>
                                            </div>
                                        )
                                    }}
                                />
                                <XAxis
                                    dataKey="date"
                                    tickLine={false}
                                    axisLine={false}
                                    height={50}
                                    dy={20}
                                    dx={0}
                                    style={{
                                        fontFamily: "Space Grotesk",
                                        fontWeight: 700,
                                    }}
                                    tickFormatter={tick =>
                                        intervalType == "month"
                                            ? moment(tick).subtract(1, "month").startOf("month").format('YYYY/MM')
                                            : intervalType == "hour"
                                                ? moment(tick).format("MM/DD HH:MM")
                                                : moment(tick).format('MM/DD')
                                    }
                                    interval="preserveStart"
                                />
                                <YAxis
                                    dataKey="value"
                                    tickLine={false}
                                    axisLine={false}
                                    orientation="right"
                                    style={{
                                        fontFamily: "Space Grotesk",
                                        fontWeight: 700
                                    }}
                                    tickFormatter={tick => {
                                        tick = tick >= 1_000_000
                                            ? parseInt(tick / 10_000) / 100 + "m"
                                            : tick >= 1_000
                                                ? parseInt(tick / 100) / 10 + "k"
                                                : (id?.toLowerCase()?.includes("percentage"))
                                                    ? tick + "%"
                                                    : tick

                                        if (id == "flashGiveawayPayout") tick = "$" + tick;
                                        return tick;
                                    }}
                                />

                                <Bar
                                    dataKey="value"
                                    maxBarSize={25}
                                    radius={[5, 5, 5, 5]}
                                >
                                    {data.map((e, i) => {
                                        return (
                                            <Cell
                                                key={`cell-${i}`}
                                                fill={focusBar != i ? '#474953' : '#FCB336'}
                                            />
                                        )
                                    })}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>
        </div>
    )
}
