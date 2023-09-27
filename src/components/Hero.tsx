import '../styles/hero.css';

function Hero(){
    return (
        <>
            <section id='hero-content'>
                <h2>Reserve Your Mall Parking Space</h2>
                <p>Skip the lines and reserve a mall parking space or check available parking space of a mall near you.</p>
                <div className='buttonsDiv'>
                    <a href='#' id='reserve-link'>Reserve</a>
                    <a href='#' id='search-link'>Search Parking</a>
                </div>
            </section>
        </>
    );
}

export default Hero;