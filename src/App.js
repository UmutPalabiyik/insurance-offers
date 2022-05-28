import  InsuranceOffersList  from './Components/InsuranceOffersList';
import IndividualOffers from './Components/IndividualOffers';
import "./Styles/main.scss"
import "./App.scss"

function App() {
  return (
    <div className="app">
      <div className='hero-container'>
        <InsuranceOffersList />
        <IndividualOffers />
      </div>

    </div>
  );
}

export default App;
