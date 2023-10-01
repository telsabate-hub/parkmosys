import { ChangeEvent, useRef, useState } from 'react';
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
    const searchBoxRef = useRef<HTMLInputElement>(null);

    const showList = (): void => {
        const elem = inputBoxRef.current;

        elem?.classList.toggle("open");

        let list = elem?.nextElementSibling as HTMLElement;

        if( list?.style.maxHeight ) {
            list.style.removeProperty( 'max-height' );
            list.style.removeProperty( 'box-shadow' );
        } else {
            list.style.maxHeight = list.scrollHeight + "px";
            list.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.15),0 1px 3px 1px rgba(0, 0, 0, 0.1)";
        }

        //Reset the search box value
        const searchBox = document.getElementById('search') as HTMLInputElement;
        searchBox.value = "";
        searchBox.dispatchEvent( new Event('input', {bubbles: true}) );
    }

    const selectItem = (e: ChangeEvent): void => {
        const inputBoxElem: HTMLInputElement = inputBoxRef.current as HTMLInputElement;
        const elem: HTMLElement = e.target as HTMLElement;

        inputBoxElem.innerHTML = elem.nextElementSibling?.innerHTML as string;
        inputBoxElem.click();
    }

    const search = (): void =>{
        const labelElems = document.querySelectorAll('label');
        const str = searchBoxRef.current?.value.toLowerCase() as string;

        labelElems.forEach((item) => {
            const val = item.querySelector('.name')?.innerHTML.toLocaleLowerCase();

            if(!val?.includes(str)){
                item.style.display = "none";
            } else {
                item.style.display = "flex";
            }
        })
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
                    <div className='search-box'>
                        <input
                            type="search"
                            name=""
                            id="search"
                            placeholder="Search Options"
                            ref={searchBoxRef}
                            onInput={search}
                        />
                        {props.itemsList.map((element, index) => {
                            return (
                                <div key={'item' + index}>
                                    <input type='radio' name='drop1' id={'id' + index} className='radio' onChange={selectItem}/>
                                    <label htmlFor={'id' + index}>
                                        <span className='name'>{element}</span>
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dropdown;