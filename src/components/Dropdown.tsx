import { ChangeEvent, KeyboardEvent, useRef } from 'react';
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

    const toggleVisibility = (): void => {
        const elem = inputBoxRef.current;

        elem?.classList.toggle("open");

        if( elem?.classList.contains("open") ){
            showList();
        } else {
            hideList();
        }
    }

    const showList = (): void => {
        const elem = inputBoxRef.current;
        const firstItem = document.getElementById('id0');
        const firstLabel: HTMLLabelElement = firstItem?.nextElementSibling as HTMLLabelElement;

        let list = elem?.nextElementSibling as HTMLElement;

        list.style.maxHeight = list.scrollHeight + "px";
        list.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.15),0 1px 3px 1px rgba(0, 0, 0, 0.1)";

        // firstLabel.focus();
        firstLabel.classList.add('highlight');
        // document.getElementById('preview')?.blur();
        document.getElementById('search')?.focus();
    }

    const hideList = (): void => {
        const elem = inputBoxRef.current;
        let list = elem?.nextElementSibling as HTMLElement;

        list.style.removeProperty( 'max-height' );
        list.style.removeProperty( 'box-shadow' );

        //Reset the search box value
        const searchBox = document.getElementById('search') as HTMLInputElement;
        searchBox.value = "";
        searchBox.dispatchEvent( new Event('input', {bubbles: true}) );

        document.getElementById('preview')?.focus();
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

    const keyUpListener = (e: KeyboardEvent): void => {
        const key: string = e.key;
        // console.log(`key: ${key}`)
        if( key == "Enter" ){
            showList();
        } else if( key == "Escape" || key == "Tab" ){
            hideList();
        }
    }

    const itemsListKeyUpListener = (e: KeyboardEvent): void => {
        const key: string = e.key;

        if( key == "Escape" || key == "Enter" ){
            hideList();
        } else if( key == "ArrowDown" ){
            
        }
    }

    const searchKeyUpListener = (e: KeyboardEvent): void => {
        const key: string = e.key;

        if( key == "Escape" ){
            hideList();
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
                    onClick={toggleVisibility}
                    onKeyUp={keyUpListener}
                    tabIndex={0}
                >
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
                            onKeyUp={searchKeyUpListener}
                        />
                        <div className='items-list' tabIndex={0} onKeyUp={itemsListKeyUpListener}>
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
            </div>
        </>
    );
}

export default Dropdown;