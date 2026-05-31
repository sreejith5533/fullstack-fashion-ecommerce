function FaqQuestions() {
  return (
    <div className="faq-questions mt-5">
      <div className="faq-heading-div mb-4">
        <p>ASSISTANCE</p>
        <h5>Frequently Asked Questions</h5>
      </div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is your shipping policy?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                We process and ship orders within 1–2 business days. Standard
                delivery usually takes 3–7 business days depending on your
                location. Shipping charges, if applicable, will be shown during
                checkout.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How do I track my order?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                Once your order is shipped, you will receive a confirmation
                email with a tracking number and tracking link. You can use it
                to check your delivery status anytime.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What is your return process?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                We accept returns within 7 days of delivery for eligible
                products. Items must be unused, in original packaging, and in
                good condition. Contact our support team to initiate a return
                request.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsefour"
              aria-expanded="false"
              aria-controls="collapsefour"
            >
              Do you offer cash on delivery?
            </button>
          </h2>
          <div
            id="collapsefour"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                Yes, cash on delivery is available for selected locations.
                Availability will be shown at checkout based on your delivery
                address.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsefive"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What payment methods do you accept?
            </button>
          </h2>
          <div
            id="collapsefive"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                We accept credit/debit cards, UPI, net banking, and secure
                online payment methods for a smooth checkout experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqQuestions;
