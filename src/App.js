import Headers from './Components/Header/Headers';
import Videos from './Components/VideoReviews/Videos';
import Premium from './Components/PremiuimAstro/Premium';
import Wheel from './Components/AstroWheel/Wheel';
import Reviews from './Components/Reviews/Reviews';
import Footer from './Components/Footer/Footer';
import extra from './assets/extension.svg'
import extra1 from './assets/extrabg.svg'
import './App.css';

function App() {
  return (
    <div className="App">
        <div > 
        <Headers />
         <Videos />
        <Premium />
        <img src={extra} alt='extra' style={{width:"90.40%"}}/>
        <Wheel />
        <Reviews />
        <img src={extra1} alt='extra1' style={{width:"90.7%",marginTop:"0"}}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
