function MissionVision() {
  return (
    <div className="mission-vision">
      <h4 className="mv-heading">The Foundation of Our Purpose</h4>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="rocket-div">
            <div className="rocket-box">
              <i className="fa-solid fa-rocket"></i>
            </div>
            <h5>Our Mission</h5>
            <p className="mission-text">
              To curate a world where beauty and utility coexist perfectly,
              providing our community with high-quality essentials that elevate
              the everyday experience without complicating it.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="eye-div">
            <div className="eye-box">
              <i className="fa-solid fa-eye"></i>
            </div>
            <h5>Our Vision</h5>
            <p className="vision-text">
              To become the global benchmark for luxury minimalism, fostering a
              movement that values longevity over trends and intentionality over
              consumption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
