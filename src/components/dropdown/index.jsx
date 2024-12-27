import { useRef } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import './dropdown.scss';

function Item({ item, set, click, selected }) {
    return (
        <div
            className={"item " + (selected == item ? "active" : "")}
            onClick={e => {
                click(e);
                set(false);
            }}
        >
            {item}
        </div>
    )
}

export default function Dropdown({ items, click, visible, setVisible, selected = null }) {

    const wrapperRef = useRef(null);

    useOutsideClick(wrapperRef, () => setVisible(false));

    if (!visible) return <></>
    return (
        <div className="selection" ref={wrapperRef}>
            <div className="body">
                { items.map((item, i) => {
                    return <Item key={i} item={item} set={setVisible} click={click} selected={selected} />
                })}
            </div>
        </div>
    )
}