import "./Insight.css";
function Insight() {
  return (
    <>
      <div className="insight">
        Why should you use Blanxer for your e- <br />
        commerce business?
      </div>
      <div className="container">

        <div className="col-one">
            <img src="https://www.blanxer.com/svg/sad_emoji.svg" alt="emoji" className="emoji"/>
            <div className="offer">Without Blanxer.com</div>

          <div className="bullet">
            <img src="https://www.blanxer.com/wrong_emoji.svg" alt="icon" />
            Your business doesn’t have a website
          </div>
          <div className="bullet">
            <img src="https://www.blanxer.com/wrong_emoji.svg" alt="icon" />
            YoYou use excel or google sheet for order management
          </div>
          <div className="bullet">
            <img src="https://www.blanxer.com/wrong_emoji.svg" alt="icon" />
            You’ll have to ask for payment to every customer manually
          </div>
          <div className="bullet">
            <img src="https://www.blanxer.com/wrong_emoji.svg" alt="icon" />
            You don’t have Real time sales and revenue insights
          </div>
          <div className="bullet">
            <img src="https://www.blanxer.com/wrong_emoji.svg" alt="icon" />
            Your customer won’t be able to track their orders
          </div>
          
        </div>


        <div className="col-two">
            <img src="https://www.blanxer.com/svg/happy_emoji.svg" alt="emoji" className="emoji"/>
            <div className="offer">With Blanxer.com</div>
        
            <div class="bullet">
                <img src="https://www.blanxer.com/svg/right_emoji.svg" alt="right" />
                You can Build a Fully Functional e-commerce Website
            </div>
            <div class="bullet">
                <img src="https://www.blanxer.com/svg/right_emoji.svg" alt="right" />
                Proper Order Management with SMS Order Confirmation & Tracking
            </div>
            <div class="bullet">
            <img src="https://www.blanxer.com/svg/right_emoji.svg" alt="right" />
                You can receive Online Payments from your Website

            </div>
            <div class="bullet">
                <img src="https://www.blanxer.com/svg/right_emoji.svg" alt="right" />
                You can track Real time sales and revenue insights
            </div>
            <div class="bullet">
            <img src="https://www.blanxer.com/svg/right_emoji.svg" alt="right" />

                Your customer will be able to track their orders
            </div>
        </div>
      </div>
      <div className='promo-message'>We have Everything you need!</div>

    </>
  );
}
export default Insight;
