import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  caseOneInsuranceData,
  caseOneInsuranceStatus,
  caseTwoInsuranceStatus,
  fetchInsuranceDataCaseOne,
  fetchInsuranceDataCaseTwo
} from "../features/insurance/insuranceSlice";

// component imports
import InsuranceOfferCard from "./InsuranceOfferCard";

const InsuranceOffersList = () => {
  const dispatch = useDispatch();
  const caseOneStatus = useSelector(caseOneInsuranceStatus);
  const caseTwoStatus = useSelector(caseTwoInsuranceStatus);
  const caseOneData = useSelector(caseOneInsuranceData);

  // fetch insurance offers for case 1 and case 2
  useEffect(() => {
    if (caseOneStatus === "idle") {
      dispatch(fetchInsuranceDataCaseOne("/case1"));
    }

    if (caseTwoStatus === "idle") {
        dispatch(fetchInsuranceDataCaseTwo("/case2"));
      }

  }, [dispatch, caseOneStatus, caseTwoStatus]);

  return <div className="insurance-offers">
    {
      caseOneData.map((insurence, key) => {
        return(
          <div key={key}>
            {insurence.FirmName}
          </div>
      
        )
      })
    }
  </div>;
};

export default InsuranceOffersList;
