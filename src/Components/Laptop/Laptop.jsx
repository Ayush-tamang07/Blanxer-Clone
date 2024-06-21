import './Laptop.css'
function Laptop(){
    return(
        <>
        <h1 className='tagline'>
            <div className='tagline-text first'>The Platform to</div>
            <div className='tagline-text second'>SCALE🚀</div>
            <div className='tagline-text third'>your Online Business</div>
            </h1>
            <div className='tagline-text fourth'>Blanxer is the platform to run a successful online business in Nepal.</div>
            <div className="sw-button">
                <button className='first-button'>Start For Free</button>
                <button className='second-button'>Watch a video</button>
            </div>

            <div class="image-container">
                <img src="https://www.blanxer.com/images/laptop_dashboard.webp" alt="laptop" width="1068" class="laptop"/>
            </div>

        </>
    );
}
export default Laptop;