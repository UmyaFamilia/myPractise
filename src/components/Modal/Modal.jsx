export const Modal = ({ fuckYou }) => {
  return (
    <div
      className="modal-dilog"
      style={{
        width: '300px',
      }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={fuckYou}
          ></button>
        </div>
        <div className="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={fuckYou}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
