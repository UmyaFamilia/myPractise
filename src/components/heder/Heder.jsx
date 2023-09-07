export const Heder = ({ fuckYou }) => {
  return (
    <div className="card">
      <div className="card-header">Featured</div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <button className="btn btn-primary" onClick={fuckYou}>
          showModal
        </button>
      </div>
    </div>
  );
};
