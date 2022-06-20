const Card = (props) => {
  return (
    <div className="card mb-3" style={{maxHeight: "250px"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={`https://robohash.org/${props.firstName}?set=set2`} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.firstName} {props.lastName}</h5>
            <p className="card-text">
             {props.job}
            </p>
            <p className="card-text">
              <small className="text-muted">{props.date}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Card 