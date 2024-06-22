import "./Plan.css";
function Plan() {
  // const card = {h1}
  return (
    <>
      <div className="plan-heading">
        Premium plan for your business <br />
        starting as low as <span className="price"> NPR 29/day.</span>
      </div>
      <div className="discount-offer">
        Save 25% on our yearly subscription as an early adopter with our
        discount offer
      </div>
      <div className="three-plans">
        <div className="free">
          <div>
            <h3 className="free-plan-title">Free</h3>
            <p className="free-plan-subtitle">For Learners</p>
            <h1 className="free-plan-prices">NPR 0 /mo</h1>
            <button className="btn start-free">Start for free</button>
          </div>
          <div className="list">
            <div className="list-item">Upto 15 products</div>
            <div className="list-item">Basic Analytics</div>
            <div className="list-item">5 Basic Plugins</div>
            <div className="list-item">Order Management</div>
            <div className="list-item">Inventory Management</div>
            <div className="list-item">Basic Website Customization</div>
            <div className="list-item">Default Blanxer Website Theme</div>
            </div>
        </div>


        <div className="premium">
          <div>
            <h3 className="premium-plan-title">Premium</h3>
            <p className="premium-plan-subtitle">
              For Small Businesses and Influencers
            </p>
            <h1 className="premium-plan-price">NPR 1167 /mo</h1>
            <p>Rs 3499 Quarterly Billing</p>
            <button className="btn get-started    ">Get Started</button>
          </div>
          <div className="list">
            
                <div className="list-item">Upto 1000 Products (Got More? Ping us)</div>
                <div className="list-item">5 Store User</div>
                <div className="list-item">Custom Domain Integration</div>
                <div className="list-item">Website Customization</div>
                <div className="list-item">Online Payment Integration</div>
                <div className="list-item">Blanxer Payment Fulfillment</div>
                <div className="list-item">Website SEO</div>
                <div className="list-item">Customers Data Management</div>
                <div className="list-item">Bulk Upload & Media Manager</div>
                <div className="list-item">All available Plugin Integrations</div>
                <div className="list-item">Custom Favicon Icon</div>
                <div className="list-item">Customer Support</div>
                <div className="list-item">Discounts Codes</div>
                <div className="list-item">Custom Checkout Fields</div>
                <div className="list-item">Logistics Integration - Aramex (Beta & Limited Access)</div>
          </div>
        </div>


        <div className="platinum">
          <div>
            <h3 className="platinum-plan-title">platinum</h3>
            <p className="platinum-plan-subtitle">
              Big D2C Brands, and growing businesses
            </p>
            <h1 className="platinum-plan-price">NPR 3267 /mo</h1>
            <p>Rs 9800 Quarterly Billing</p>
            <button className="btn get-started">Get Started</button>
          </div>
          <div className="list">
            <div className="list-item">Everything in Premium</div>
            <div className="list-item">10 Staff Store account</div>
            <div className="list-item">1 Dedicated Expert for Store Management</div>
            <div className="list-item">99% website uptime guaranteed Customer Support </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Plan;
