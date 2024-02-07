import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  BlueButton,
  WhiteButton,
} from "./components/Button/Button";

function App() {
  return (
    <>
      <div className="warper">
        <div className="frame container col-lg-4 col-md-12 col-sm-12">
          <div className="nav row p-3 align-items-center">
            <a className="col text-start">
              <i className="fa-solid fa-arrow-left fs-4 text-white"></i>
            </a>
            <a className="col text-end">
              <i className="fa-regular fa-circle-question fs-2 text-white"></i>
            </a>
          </div>

          <div className="row d-flex justify-content-center align-items-center">
            <div className="row justify-content-center">
              <h1 className="logo col-4 text-center bg-white rounded-4 d-flex justify-content-center align-items-center bolder">10</h1>
            </div>
            <div className="col-12 text-center fs-1 fw-light text-white">
              <span className="ten fw-bold">TEN</span> Answer
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="row justify-content-center m-2">
              <BlueButton textValue="เล่นต่อ" />
            </div>
            <div className="row justify-content-center m-2">
              <WhiteButton textValue="เริ่มเกมใหม่" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
