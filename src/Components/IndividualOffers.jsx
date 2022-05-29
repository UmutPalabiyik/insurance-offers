import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BasicSpinner from "./BasicSpinner";
import { MdDoubleArrow } from "react-icons/md";
import axios from "../axios";
import InsuranceOfferCard from "./InsuranceOfferCard";

const IndividualOffers = () => {
  const [individualOffersList, setIndividualOffersList] = useState([]);
  const [individiualLoader, setIndividiualLoader] = useState(true);
  const [showOffers, setShowOffers] = useState(false);
  const { individualOffersCount, individualOffersCountStatus } = useSelector(
    (state) => state.insurance
  );
  const handleShowOffers = () => {
    setShowOffers(!showOffers);
  };

  useEffect(() => {
    const fetchIndividualOffers = async () => {
      if (individualOffersCountStatus === "succeeded") {
        setIndividiualLoader(true);
        console.log("individual loader", individiualLoader)
        for (let i = 0; i < individualOffersCount; i++) {
          const response = await axios.get("/case3");
          setIndividualOffersList((previuesValue) => [
            ...previuesValue,
            response.data,
          ]);
        }
        setIndividiualLoader(false);
      }
    };

    fetchIndividualOffers();
  }, [individualOffersCountStatus, individualOffersCount]);

  const sortedIndividualOffersList = individualOffersList.sort((a, b) => a.Cash - b.Cash);
  console.log("sortedIndividualOffersList", sortedIndividualOffersList);

  return (
    <div
      className={`individual-offers ${
        showOffers ? "individual-offers__show" : ""
      }`}
    >
      {individualOffersCountStatus === "loading" ? (
        <div className="individual-offers__spinner"><BasicSpinner /></div>
      ) : (
        <div className="individual-offers__title" onClick={handleShowOffers}>
          <span className="individual-offers__title-text">
            See {individualOffersCount} special offers for you
          </span>
          <MdDoubleArrow className="individual-offers__title-icon" />
        </div>
      )}
      <div className="individual-offers__list">
        <div className="individual-offers__list-container">
          {sortedIndividualOffersList.map((offerData, key) => {
            return <InsuranceOfferCard individualOffer={true} offerData={offerData} key={key} />;
          })}
          {individiualLoader && (
            <div className="individual-offers__spinner">
              <BasicSpinner />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndividualOffers;
