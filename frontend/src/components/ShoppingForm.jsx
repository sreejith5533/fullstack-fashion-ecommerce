import '../styles/shoppingform.css';
function ShoppingForm() {
  return (
    <div className="shopping-form-div">
      <div className="heading-div">
        <div className="nbr">1</div>
        <h4>Shipping Information</h4>
      </div>
      <form className='form mt-3' method='post'>
        <div className="row">
          <div className="col-md-6">
            <div>
              <label className="form-label" htmlFor="username">First Name:</label>
              <input type="text" id="username" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <label className="form-label" htmlFor="username">First Name:</label>
              <input type="text" id="username" className="form-control" />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <label className="form-label" htmlFor="username">Street Address:</label>
          <input type="text" id="username" className="form-control" placeholder="123 Luxury Avenue" />
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <div>
              <label htmlFor="city" className='form-label'>City:</label>
              <input type="text" id="city" className="form-control" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="state-province">
              <label htmlFor="state" className="form-label">State/Province</label>
              <input type="text"  placeholder="NY" className="form-control"/>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <label htmlFor="zip" className='form-label'>Postel Code:</label>
              <input type="text" id="zip" className="form-control" />
            </div>
          </div>
        </div>
        <div className='mt-3'>
          <label htmlFor="p-number">Phone Number:</label>
          <input type="text" id="p-number" className="form-control" />
        </div>
        <div className='check-box mt-2'>
          <input type="checkbox" className='checkbox' required/>
          <p>Billing address is the same as shipping</p>
        </div>
      </form>
    </div>
  );
}

export default ShoppingForm;