import './ModePopup'

function ModePopup() {
  return (
    <>
      <div className="popup col-6 position-absolute top-90 start-50 translate-middle rounded-5 bg-white">
        <button className='row col-12 py-2'>Easy</button>
        <button className='row col-12 py-2'>Normal</button>
        <button className='row col-12 py-2'>Hard</button>
      </div>
    </>
  );
}
export default ModePopup
