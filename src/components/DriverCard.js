function DriverCard(props) {
    // Let's destructure the props object:
    const {name, rating, img, car : {model, licensePlate}} = props;
    // Let's transform the rating in a star:
    let roundRating = Math.round(rating);
    let ratingStars = ["☆", "☆", "☆", "☆", "☆"]
    for (let i = 0; i < roundRating; i++) {
        ratingStars[i] = "★"
    }

  return (
    <div className="drivers-license">
        <img src={img} alt="driver" />
        <div className="driver-info">
            <h3>{name}</h3>
            <p className="driver-info-stars">{ratingStars}</p>
            <p>{model} - {licensePlate}</p>
        </div>
    </div>
  )
}

export default DriverCard