import { useRef, useState } from 'react';
import '../styles/dropdown.css'

interface DropdownContent {
    title?: string;
    width?: string;
    height?: string;
    defaultValue?: string;
    itemsList: Array<string>;
}

function Dropdown(props: DropdownContent){
    const inputBoxRef = useRef<HTMLInputElement>(null);
    const searchBoxRef = useRef<HTMLDivElement>(null);
    const [itemsList, setItemsList] = useState();
    let itemCtr = 0;

    // setItemsList(props.itemsList);
    
    const addItem = (val: string): void => {
        itemCtr++;
        
        const radioInput = document.createElement('input');
        radioInput.type = "radio";
        radioInput.classList.add('radio');
        radioInput.id = "id" + itemCtr;
        
        const label = document.createElement('label');
        const span = document.createElement('span');
        label.htmlFor = radioInput.id;
        label.appendChild(span);
        span.classList.add('name');
        span.innerHTML = val;
        
        console.log(`searchBoxRef.current: ${searchBoxRef.current}`)

        searchBoxRef.current?.appendChild(radioInput);
        searchBoxRef.current?.appendChild(label);
    }
    
    const buildContent = (): void => {
        console.log(`itemsList: ${props.itemsList}`)
        for( let i=0; i < props.itemsList.length; i++ ){
            addItem( props.itemsList[i] );
        }
    }

    const showList = (): void => {
        const elem = inputBoxRef.current;

        elem?.classList.toggle("open");

        let list = elem?.nextElementSibling as HTMLElement;

        if( list?.style.maxHeight) {
            list.style.removeProperty( 'max-height' );
            list.style.removeProperty( 'box-shadow' );
        } else {
            list.style.maxHeight = list.scrollHeight + "px";
            list.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.15),0 1px 3px 1px rgba(0, 0, 0, 0.1)";
        }
    }

    return (
        <>
            <div className="dropdown" style={{width: props.width || "100%"}}>
                <div className='title'>{props.title}</div>
                <div 
                    className='input-box' 
                    id='preview' 
                    ref={inputBoxRef}
                    style={{height: props.height || "40px"}} 
                    data-custom-msg={props.defaultValue} 
                    onClick={showList}>
                </div>
                <div className='list'>
                    <div className='search-box' ref={searchBoxRef}>
                        <input
                            type="search"
                            name=""
                            id="search"
                            placeholder="Search Options"
                            // onkeyup="search(this)"
                        />
                        <input type='radio' id='id11' className='radio'/>
                        <label htmlFor='id11'>
                            <span className='name'>Ayala Malls Feliz</span>
                        </label>

                        <input type='radio' id='id12' className='radio'/>
                        <label htmlFor='id12'>
                            <span className='name'>Eastwood Mall</span>
                        </label>
                    </div>
                </div>
            </div>
            {/* {buildContent()} */}
        </>
    );
}

export default Dropdown;