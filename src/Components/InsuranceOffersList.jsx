import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  caseOneInsuranceStatus,
  caseTwoInsuranceStatus,
  fetchInsuranceDataCaseOne,
  fetchInsuranceDataCaseTwo
} from "../features/insurance/insuranceSlice";

const InsuranceOffersList = () => {
  const dispatch = useDispatch();
  const caseOneStatus = useSelector(caseOneInsuranceStatus);
  const caseTwoStatus = useSelector(caseTwoInsuranceStatus);

  // fetch insurance offers for case 1 and case 2
  useEffect(() => {
    if (caseOneStatus === "idle") {
      dispatch(fetchInsuranceDataCaseOne("/case1"));
    }

    if (caseTwoStatus === "idle") {
        dispatch(fetchInsuranceDataCaseTwo("/case2"));
      }

  }, [dispatch, caseOneStatus, caseTwoStatus]);

  return <div>selamlar</div>;
};

export default InsuranceOffersList;
