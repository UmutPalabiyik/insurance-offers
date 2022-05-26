import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  apiOneInsuranceOffers,
  apiOneStatus,
  apiTwoStatus,
  fetchApiOneInsuranceOffers,
  fetchApiTwoInsuranceOffers,
} from "../features/insurance/insuranceSlice";

// component imports
import InsuranceOfferCard from "./InsuranceOfferCard";

const InsuranceOffersList = () => {
  const dispatch = useDispatch();
  const apiOneStatusValue = useSelector(apiOneStatus);
  const apiTwoStatusValue = useSelector(apiTwoStatus);
  const apiOneData = useSelector(apiOneInsuranceOffers);

  // fetch insurance offers for case 1 and case 2
  useEffect(() => {
    if (apiOneStatusValue === "idle") {
      dispatch(fetchApiOneInsuranceOffers("/case1"));
    }

    if (apiTwoStatusValue === "idle") {
      dispatch(fetchApiTwoInsuranceOffers("/case2"));
    }
  }, [dispatch, apiOneStatusValue, apiTwoStatusValue]);

  return (
    <div className="offers">
      <div className="offers__api-one">
      {apiOneData.map((offerData, key) => {
        return <InsuranceOfferCard  offerData={offerData} key={key} />
      })}
      </div>
      <div className="offers__api-two">
      </div>
    </div>
  );
};

export default InsuranceOffersList;
