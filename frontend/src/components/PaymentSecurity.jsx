function PaymentSecurity() {
  return (
    <div className="col-12">
      <div id="payment" className="payment-security card">
        <div className="heading-div">
          <i className="fa-solid fa-shield"></i>
          <h4>Payment Security</h4>
        </div>
        <p className="text">
          The security of your data is important to us. We implement
          industry-standard encryption for all financial transactions. We do not
          store your credit card information on our servers; all payments are
          processed through secure, PCI-compliant third-party gateways.
        </p>
      </div>
    </div>
  );
}

export default PaymentSecurity;
