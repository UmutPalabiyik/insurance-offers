import { useState } from "react";
import { useSelector } from "react-redux";
import BasicSpinner from "./BasicSpinner";
import { MdDoubleArrow } from "react-icons/md";

const IndividualOffers = () => {
  const { individualOffersCount, individualOffersCountStatus } = useSelector(
    (state) => state.insurance
  );
  const [showOffers, setShowOffers] = useState(false);
  const handleShowOffers = () => {
    setShowOffers(!showOffers);
    console.log("al sana offers ==>", showOffers);
  };

  return (
    <div className={`individual-offers ${showOffers ? "individual-offers__show" : "" }`}>
      {individualOffersCountStatus === "loading" ? (
        <BasicSpinner />
      ) : (
        <div className="individual-offers__title" onClick={handleShowOffers}>
          <span className="individual-offers__title-text">
            See {individualOffersCount} special offers for you
          </span>
          <MdDoubleArrow className="individual-offers__title-icon" />
        </div>
      )}
      <div className="individual-offers__list">

      </div>
    </div>
  );
};

export default IndividualOffers;
