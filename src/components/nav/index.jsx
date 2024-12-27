import { toast } from 'react-toastify';
import './nav.scss';

export default function Nav({
    web,
    set
}) {

    function logout() {
        localStorage.removeItem("access_token");
        window.location.reload();
    }

    // Restart the Python script
    function restart() {
        if (window.confirm("You're going to restart Python script, are you sure?")) {
            fetch(process.env.REACT_APP_API + "/script/restart", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    "access-token": localStorage.getItem("access_token")
                }
            })
            .then(data => data.json())
            .then(data => {
                if (data.status) return toast.success("Script restarted successfully");
                else return toast.error("Script could not be restarted");
            });
        }
    }

    return (
        <nav>
            <div className="sites">
                <a onClick={() => set("RustyPot")} className={web == "RustyPot" ? "active" : undefined}>
                    <img className="trapezoid" src="/images/icons/trapezoid.svg" />
                    <img className="icon" src="/images/icons/sites/rustypot.png" />
                    RustyPot
                </a>
                <a onClick={() => set("BanditCamp")} className={web == "BanditCamp" ? "active" : undefined}>
                    <img className="trapezoid" src="/images/icons/trapezoid.svg" />
                    <img className="icon" src="/images/icons/sites/banditcamp.png" />
                    BanditCamp
                </a>
                <a onClick={() => set("RustClash")} className={web == "RustClash" ? "active" : undefined}>
                    <img className="trapezoid" src="/images/icons/trapezoid.svg" />
                    <img className="icon" src="/images/icons/sites/rustclash.png" />
                    RustClash
                </a>
                <a onClick={() => set("Howl")} className={web == "Howl" ? "active" : undefined}>
                    <img className="trapezoid" src="/images/icons/trapezoid.svg" />
                    <img className="icon" src="/images/icons/sites/howl.png" />
                    Howl
                </a>
                <a onClick={() => set("RustMagic")} className={web == "RustMagic" ? "active" : undefined}>
                    <img className="trapezoid" src="/images/icons/trapezoid.svg" />
                    <img className="icon" src="/images/icons/sites/rustmagic.png" />
                    RustMagic
                </a>
            </div>
            <div className="toolbar">
                <img onClick={restart} src="/images/icons/restart.svg" />
                <img src="/images/icons/settings.svg" />
                <img onClick={logout} src="/images/icons/logout.svg" />
            </div>
        </nav>
    )
}