import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicSpinner from "./BasicSpinner";
import {
  apiOneInsuranceOffers,
  apiTwoInsuranceOffers,
  apiOneStatus,
  apiTwoStatus,
  fetchApiOneInsuranceOffers,
  fetchApiTwoInsuranceOffers,
  fetchIndividualOffersCount,
  individualOffersCountStatus
} from "../features/insurance/insuranceSlice";

// component imports
import InsuranceOfferCard from "./InsuranceOfferCard";

const InsuranceOffersList = () => {
  const dispatch = useDispatch();

  //Selectors
  const apiOneStatusValue = useSelector(apiOneStatus);
  const apiTwoStatusValue = useSelector(apiTwoStatus);
  const apiOneData = useSelector(apiOneInsuranceOffers);
  const apiTwoData = useSelector(apiTwoInsuranceOffers);
  const individualOffersCountStatusValue = useSelector(individualOffersCountStatus)

  // fetch insurance offers for case 1 and case 2
  useEffect(() => {
    if (apiOneStatusValue === "idle") {
      dispatch(fetchApiOneInsuranceOffers("/case1"));
    }

    if (apiTwoStatusValue === "idle") {
      dispatch(fetchApiTwoInsuranceOffers("/case2"));
    }

    if(individualOffersCountStatusValue === "idle"){
      dispatch(fetchIndividualOffersCount("get_offer_count"))
    }

  }, [dispatch, apiOneStatusValue, apiTwoStatusValue, individualOffersCountStatusValue]);

  return (
    <div className="offers">
      {apiOneStatusValue === "loading" ? (
        <BasicSpinner />
      ) : (
        <div className="offers__list">
          {apiOneData.map((offerData, key) => {
            return <InsuranceOfferCard offerData={offerData} key={key} />;
          })}
        </div>
      )}

      {apiTwoStatusValue === "loading" ? (
        <BasicSpinner />
      ) : (
        <div className="offers__list">
          {apiTwoData.map((offerData, key) => {
            return <InsuranceOfferCard offerData={offerData} key={key} />;
          })}
        </div>
      )}
    </div>
  );
};

export default InsuranceOffersList;
