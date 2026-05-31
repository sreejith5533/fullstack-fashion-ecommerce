import PrivayHeading from "../components/PrivacyHeading";
import "../styles/privacy.css";
import TableContents from "../components/TableContents";
import PrivacyContents from "../components/PrivacyContents";


function Privacy() {
  return (
    <div>
      <PrivayHeading />
      <div className="row g-3 mt-4">
        <div className="col-md-4">
          <TableContents />
        </div>
        <div className="col-md-8">
          <PrivacyContents />
        </div>
      </div>
    </div>
  );
}

export default Privacy;
