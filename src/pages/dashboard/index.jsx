import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import Modal from "./modal";

// Style
import './dashboard.scss';
import '../../components/header/header.scss';

// Sites
import BanditCamp from "./sites/BanditCamp";
import RustClash from "./sites/RustClash";
import RustMagic from "./sites/RustMagic";
import RustyPot from "./sites/RustyPot";
import Howl from "./sites/Howl";

export default function Dashboard() {

    const web = useSelector(state => state.web);
    const date = useSelector(state => state.date);

    const [id, setID] = useState(null); // Statistic ID
    const [stats, setStats] = useState({});
    const [loading, setLoading] = useState(true);
    const [fetched, setFetched] = useState({});

    // RustyPot Custom States
    const [estimatedData, setEstimatedData] = useState(null);
    const [estimatedProfit, setEstimatedProfit] = useState(0)
    const [estimatedPercent, setEstimatedPercent] = useState(5);
    const [prevEstimatedPercent, setPrevEstimatedPercent] = useState(5);

    function statReplacement(data_og) {
        if (data_og) {
            setStats(data_og);

            // Custom
            if (web === "RustyPot") setEstimatedProfit(data_og?.estimatedProfit || 0);
        }
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);

        if (web) {
            fetch(process.env.REACT_APP_API + `/stats/${web}?start=${date.start}&end=${date.end}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    "access-token": localStorage.getItem("access_token")
                }
            })
                .then(data => data.json())
                .then(data => {
                    statReplacement(data?.stats);
                    let obj = { ...fetched }
                    obj[web] = data?.stats;
                    setFetched(obj);
                });
        }
    }, [date]);

    useEffect(() => {
        if (!Object.keys(fetched).includes(web)) {
            fetch(process.env.REACT_APP_API + `/stats/${web}?start=${date.start}&end=${date.end}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    "access-token": localStorage.getItem("access_token")
                }
            })
                .then(data => data.json())
                .then(data => {
                    statReplacement(data?.stats);
                    let obj = { ...fetched }
                    obj[web] = data?.stats;
                    setFetched(obj);
                });
        } else statReplacement(fetched[web]);
    }, [web])

    return (
        <div id="dashboard" className={web?.toLowerCase()}>
            {loading ? (
                <div className="loader">
                    <img src="/images/loader.svg" alt="Loaeder" />
                </div>
            ) : (
                <>
                    { web === "RustyPot" && <RustyPot stats={stats} setID={setID} estimatedProfit={estimatedProfit} /> }
                    { web === "BanditCamp" && <BanditCamp stats={stats} setID={setID} /> }
                    { web === "RustClash" && <RustClash stats={stats} setID={setID} /> }
                    { web === "RustMagic" && <RustMagic stats={stats} setID={setID} /> }
                    { web === "Howl" && <Howl stats={stats} setID={setID} /> }
                </>
            )}

            {/* Chart Modal */}
            {id && (
                <Modal
                    title={id?.title}
                    id={id?.id}
                    set={setID}
                    date={date}
                    web={web}

                    // Estimated Data
                    estimatedData={estimatedData}
                    setEstimatedData={setEstimatedData}
                    estimatedPercent={estimatedPercent}
                    setEstimatedProfit={setEstimatedProfit}
                    setEstimatedPercent={setEstimatedPercent}
                    prevEstimatedPercent={prevEstimatedPercent}
                    setPrevEstimatedPercent={setPrevEstimatedPercent}
                />
            )}
        </div>
    )
}