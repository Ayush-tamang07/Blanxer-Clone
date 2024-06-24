import "./FAQ.css";
function FAQ() {
  return (
    <>
      <div className="faq-container">
        <div className="faq-header">
          <h1>FAQs</h1>
          <p>
            Hi, if you have any questions not answered in the FAQ, please email
            us at <br /> <span className="email">contact@blanxer.com</span>
          </p>
        </div>
        <div className="center">
          <button className="faq-button">
            <div>
              <div className="question">Can I upgrade my plan later on?</div>
              <div></div>
            </div>
          </button>
          <button className="faq-button">
            <div>
              <div className="question">
                Can I use my own domain with Blanxer?
              </div>
              <div></div>
            </div>
          </button>
          <button className="faq-button">
            <div>
              <div className="question">Can I accept online payments?</div>
              <div></div>
            </div>
          </button>
          <button className="faq-button">
            <div>
              <div className="question">What is Blanxer Pay?</div>
              <div></div>
            </div>
          </button>
          <button className="faq-button">
            <div>
              <div className="question">
                What is the payment service fee for using Blanxer Pay to receive
                customer payments?
              </div>
              <div></div>
            </div>
          </button>
          <button className="faq-button">
            <div>
              <div className="question">
                Can I use my own Merchant key for esewa and Fonepay?
              </div>
              <div></div>
            </div>
          </button>
          <button className="faq-button">
            <div>
              <div className="question">
                What happen once the subscription plan ends?
              </div>
              <div></div>
            </div>
          </button>
          <button className="faq-button">
            <div>
              <div className="question">
                What does SMS Order Conformation with tracking link Integration
                mean?
              </div>
              <div></div>
            </div>
          </button>
        </div>
      </div>

      <div className="more-btn">
      <button className="btn show-more">Show More</button>
      </div>
      <div class="parent-container">
        <div class="growth-partner">
          <h1>
            We’re not just an e-commerce platform, we are <br />
            your growth partner.
          </h1>
          <button class="btn-start-for-free">Start for free</button>
        </div>
      </div>
    </>
  );
}

export default FAQ;
