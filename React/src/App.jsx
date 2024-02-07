import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  BlueButton,
  WhiteButton,
} from "./components/Button/Button";
import Logo from "./components/Logo/Logo";
import TopNav from "./components/TopNav/TopNav";
import ModePopup from "./components/ModePopup/ModePopup";

function App() {
  return (
    <>
      <div className="warper">
        <div className="frame position-relative container col-lg-4 col-md-8 col-sm-12 ">
          <TopNav/>
          <Logo/>
          
          <div className="row justify-content-center h-30">
            <div className="row col-6 justify-content-center m-2 mb-3">
              <BlueButton textValue="เล่นต่อ" />
            </div>
            
            <div className="row col-6 justify-content-center m-2">
              <WhiteButton textValue="เริ่มเกมใหม่" />
            </div>
          </div>

          <ModePopup/>
        </div>
      </div>
    </>
  );
}

export default App;
