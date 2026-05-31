function Cookies() {
  return (
    <div className="col-12">
      <div id="cookies" className="cookies card">
        <div className="heading-div">
          <i className="fa-solid fa-cookie-bite"></i>
          <h4>Cookies</h4>
        </div>
        <p className="text">
          StoreFront uses cookies and similar tracking technologies to track the
          activity on our Service and hold certain information. Cookies are
          files with a small amount of data which may include an anonymous
          unique identifier.
        </p>
        <ul>
          <li>
            <p>Essential cookies for site functionality</p>
          </li>
          <li>
            <p>Preference cookies to remember your settings</p>
          </li>
          <li>
            <p>Analytics cookies to understand user behavior</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cookies;
