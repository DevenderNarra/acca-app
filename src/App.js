
import Header from './components/Header'
import BecomeAcca from './components/BecomeAcca'
import WhyChooseUs from './components/WhyChooseUs'
import Eligibility from './components/Eligibility'
import LearnAcca from './components/LearnAcca'
import PlacementAssistance from './components/PlacementAssistance'
import KickStartOfCarrer from './components/KickStartOfCarrer'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <BecomeAcca/>
      <WhyChooseUs/>
      <Eligibility/>
      <LearnAcca/>
      <PlacementAssistance/>
      <KickStartOfCarrer/>
    </div>
  );
}

export default App;
