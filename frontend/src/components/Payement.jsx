import '../styles/payment.css';

function Payment(){
  return(
    <div className="payment-div">
      <div className="heading-pay">
        <div className="nbr">2</div>
        <h4>Payment Method</h4>
      </div>
      <div className="row payment-row">
        <div className="credit-card">
          <i className="fa-solid fa-credit-card"></i>
          <p>Credit Card</p>
          <input type="radio" name="payment" id="payment" />
        </div>
        <div className='paypal'>
          <i className="fa-brands fa-cc-paypal"></i>
          <p>PayPal</p>
          <input type="radio" name="payment" id="payment" />
        </div>
      </div>
    </div>
  )
}

export default Payment