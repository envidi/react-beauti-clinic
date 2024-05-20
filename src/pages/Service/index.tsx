import BeautyConsultation from "./Component/BeautyConsultation";
import BeautyProduct from "./Component/BeautyProduct";
import FAQService from "./Component/FAQService";
import OurService from "./Component/OurService";
import SkinTreatment from "./Component/SkinTreatment";
import Treatment from "./Component/Treatment";

function Service() {
  return (
    <div>
      <OurService />
      <BeautyConsultation/>
      <SkinTreatment/>
      <BeautyProduct/>
      <Treatment/>
      <FAQService/>
    </div>
  );
}

export default Service;
