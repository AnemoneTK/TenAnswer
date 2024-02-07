import "./Button.css";
import "bootstrap/dist/css/bootstrap.css";

function WhiteButton(props) {
  return (
    <>
        <button className="WhiteButton text-center fs-3 rounded-pill fw-bold col-12 py-1">
          {props.textValue}
        </button>
    </>
  );
}

function BlackButton(props) {
  return (
    <>
      <button className="BlackButton text-center fs-3 rounded-pill fw-bold col-12 py-1">
          {props.textValue}
        </button>
    </>
  );
}
function BlueButton(props) {
  return (
    <>
      <button className="BlueButton text-center fs-3 rounded-pill fw-bold col-12 py-1">
          {props.textValue}
        </button>
    </>
  );
}
export { WhiteButton, BlackButton, BlueButton };
