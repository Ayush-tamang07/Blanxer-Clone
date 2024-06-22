import './Feature.css'
function Feature(){
    return(
        <>
        {/* first */}
            <div className='feature-container'>
                <div className='feature-content'>
                    <div className='feature-item'>
                        <img className='feature-icon' src="https://www.blanxer.com/svg/ResponseTimeIcon.svg" alt="icon" width={46} />
                        <div className='feature-title'>Super Fast Response Time</div>
                    </div>
                    <div className='feature-description'>
                        Blanxer is all about speed and performance.
                    </div>
                    <div className='feature-highlight'>
                        Seeing your website performance will make your jaw drop and your eyes pop!🚀
                    </div>
                </div>

                <div className='feature-image'>
                    <img src="https://www.blanxer.com/images/Response.webp" alt="image" width={690} />
                </div>
            </div>

            {/* second */}
            <div className='feature-container'>
            <div className='feature-image'>
                    <img src="https://www.blanxer.com/images/Editor.webp" alt="image" width={690} />
                </div>

                <div className='feature-content'>
                    <div className='feature-item'>
                        <img className='feature-icon' src="https://www.blanxer.com/svg/order_management_icon.svg" alt="icon" width={30} />
                        <div className='feature-title'>Website Customization</div>
                    </div>
                    <div className='feature-description'>
                    Customize your website how ever you want.
                    </div>
                    <div className='feature-highlight'>
                    Impress us with your web design skills and make us shine brighter than a brand new pair of shoes! 🥹
                    </div>
                </div>

            </div>
            {/* third */}
            <div className='feature-container'>
                <div className='feature-content'>
                    <div className='feature-item'>
                        <img className='feature-icon' src="https://www.blanxer.com/svg/order_management_icon.svg" alt="icon" width={30} />
                        <div className='feature-title'>Online Payment</div>
                    </div>
                    <div className='feature-description'>
                    Online Payment Gateway Integration
                    </div>
                    <div className='feature-highlight'>
                    Integrate your own payment gateways and receive payment directly through your website.
                    </div>
                </div>
                <div className='feature-image'>
                    <img src="https://www.blanxer.com/images/online_payment.webp" alt="image" width={690} />
                </div>
            </div>
            {/* fourth */}
            <div className='feature-container'>
            <div className='feature-image'>
                    <img src="https://www.blanxer.com/images/webcustomization.webp" alt="image" width={690} />
                </div>
                <div className='feature-content'>
                    <div className='feature-item'>
                        <img className='feature-icon' src="https://www.blanxer.com/svg/order_management_icon.svg" alt="icon" width={30} />
                        <div className='feature-title'>Sales & Analytics</div>
                    </div>
                    <div className='feature-description'>
                    Receive Orders directly from your website!
                    </div>
                    <div className='feature-highlight'>
                    Promote your website, Educate your customers. Trust me! Your Customers are smarter than you think!
                    </div>
                </div>
            </div>
            {/* fifth */}
            <div className='feature-container'>

                <div className='feature-content'>
                    <div className='feature-item'>
                        <img className='feature-icon' src="https://www.blanxer.com/svg/order_management_icon.svg" alt="icon" width={30} />
                        <div className='feature-title'>Domain Name</div>
                    </div>
                    <div className='feature-description'>
                    Connect your Own Domain!
                    </div>
                    <div className='feature-highlight'>
                    Your website is like a house, and your domain is the address. If you didn’t get it.
                    </div>
                    <div className='research'>Go do some <span className='re'>Research</span> 😜</div>
                </div>
                <div className='feature-image'>
                    <img src="https://www.blanxer.com/images/domain.webp" alt="image" width={690} />
                </div>
            </div>
        </>
    );
}
export default Feature;
