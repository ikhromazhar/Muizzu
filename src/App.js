import './App.css';
import NavigasiBar from "./Component/NavigasiBar"
import IntroWeb from "./Component/IntroWeb"
import Magic from "./Component/Magic"
import SuperHero from "./Component/SuperHero"
import Indo from "./Component/Indo"

import "./Style/landingPage.css"

function App() {
 return (
  <div className="parallax">
    <div className="myBG">
     <NavigasiBar/>
     <IntroWeb/>
    </div>
     <div className="Magic">
       <Magic/>
     </div>
     <div className="SuperHero">
       <SuperHero/>
     </div>
     <div className="Indonesia">
       <Indo/>
     </div>
  </div>
  )
}
export default App;