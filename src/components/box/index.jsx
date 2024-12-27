import './box.scss';

export default function Box({
    value = 0,
    name,
    slug,
    set = null,
    info = null
}) {
    return (
        <div className="databox">
            <span className="data-val">{value}</span>
            <h3 style={info ? { cursor: "pointer" } : undefined}>
                {name}
                {info && (
                    <div className="infobox">
                        <img src="/images/icons/info.svg" />
                        <span>{info}</span>
                    </div>
                )}
            </h3>
            {set ? <a onClick={() => set({ title: name, id: slug })}>View over time <img src="/images/icons/next.svg" /></a> : <a style={{ cursor: "default" }}></a>}
        </div>
    )
}