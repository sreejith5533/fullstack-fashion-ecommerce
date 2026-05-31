function Map() {
  return (
    <div className="map-div mt-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3915.8577445494675!2d76.99103429979228!3d11.04929050248454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAyJzU2LjMiTiA3NsKwNTknMjMuMCJF!5e0!3m2!1sen!2sin!4v1778645324816!5m2!1sen!2sin"
        height="300"
        style={{ border: "1px solid black" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
