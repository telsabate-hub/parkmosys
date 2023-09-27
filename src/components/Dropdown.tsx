import { MouseEvent } from 'react';
import '../styles/dropdown.css'

interface DropdownContent {
    title?: string;
    height?: string;
    defaultValue?: string;
}

function Dropdown(props: DropdownContent){
    const showList = (e: MouseEvent) => {
        const elem = e.target as Element;

        elem.classList.toggle("open");
    }

    return (
        <>
            <div className="dropdown">
                <div className='title'>{props.title}</div>
                <div className='input-box' id='preview' style={{height: props.height || "40px"}} data-custom-msg={props.defaultValue} onClick={showList}></div>
            </div>
        </>
    );
}

export default Dropdown;