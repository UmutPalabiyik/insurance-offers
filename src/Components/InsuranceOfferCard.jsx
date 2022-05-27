const InsuranceOfferCard = ({ offerData }) => {
  const {
    Cash,
    FirmName,
    ImagePath,
    ProductDesc,
    QuotaInfo,
    SaleClosed,
    popoverContent,
  } = offerData;
  
  return (
    <div className="offer-card">
      <div className="offer-card__container">
        <div className="offer-card__company-info">
          <div className="offer-card__image">
            <img src={ImagePath} alt={FirmName} />
          </div>
          <div className="offer-card__product-info">
            <div className="offer-card__description">{ProductDesc}</div>
            <div className="offer-card__company-name">
                {FirmName}
                {popoverContent && <span className="offer-card__popover">?</span>}
                </div>
          </div>
        </div>

        <div className="offer-card__purchase-info">
          <div className="offer-card__price-info">
            {QuotaInfo.HasDiscount && (
              <div className="offer-card__discounted-price-container">
                <span className="offer-card__cash-text">Peşin</span>
                <div className="offer-card__discounted-price">
                  {QuotaInfo.PremiumWithDiscount} TL
                </div>
              </div>
            )}

            <div className="offer-card__price">{Cash} TL</div>
          </div>
          <button className="offer-card__buying-btn">Satın Al</button>
        </div>
      </div>
    </div>
  );
};

export default InsuranceOfferCard;
