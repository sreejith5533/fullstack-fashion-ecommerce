import Cookies from "./Cookies";
import InformationCollection from "./InformationCollection";
import PaymentSecurity from "./PaymentSecurity";
import UserDataProtection from "./UserDataProtection";
import ThirdPartyServices from "./ThirdPartyServices";
function PrivacyContents(){
  return(
    <div className="row g-4 privacy-contents">
      <InformationCollection />
      <Cookies />
      <PaymentSecurity />
      <UserDataProtection />
      <ThirdPartyServices />
    </div>
  )
}


export default PrivacyContents