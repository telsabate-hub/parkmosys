import '../styles/searchParking.css';
import Dropdown from './Dropdown';

function SearchParking(){
    return (
        <>
            <section className='search-section'>
                <div className='section-title'>
                    <h2 className="section-title-content">Check Availability</h2>
                </div>
                <div className='section-content'>
                    <select>
                        <option value="">Select Mall</option>
                        <option value="feliz">Ayala Malls Feliz</option>
                        <option value="eastwood">Eastwood Mall</option>
                        <option value="podium">Podium</option>
                        <option value="sm_marikina">SM Marikina</option>
                        <option value="sm_megammall">SM Megamall</option>
                        <option value="sm_north">SM North Edsa</option>
                    </select>
                    <div>
                        <p>Enter After:</p>
                        <p>Today, 6:30pm</p>
                    </div>
                    <button>SEARCH</button>
                    <Dropdown defaultValue='Select Mall...' width='214px' itemsList={["Option 1", "Option 2"]}/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </section>
        </>
    );
}

export default SearchParking;