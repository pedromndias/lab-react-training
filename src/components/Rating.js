function Rating(props) {
    // Let's get the props.children, transform it to a number and round it:
    const {children} = props
    let finalRating = Math.round(Number(children))
    // console.log(finalRating);

    // Let's transform the stars with full or empty:
    let fullStar = "★"
    let ratingStars = ["☆", "☆", "☆", "☆", "☆"]
    for (let i = 0; i < finalRating; i++) {
        ratingStars[i] = fullStar
    }
  return (
    <div>
        <p>{ratingStars}</p>
    </div>
  )
}

export default Rating