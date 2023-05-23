import { useState } from "react"

function Carousel(props) {
    // Let's destructure the props
    const {images} = props
    // Let's create state for the images:
    const [imageIndex, setImageIndex] = useState(0)

    // Let's create the handleMoveLeft function:
    const handleMoveLeft = () => {
        // We need to go back on the indexes of the images array.
        // If we are on the first index (0) we need to return the last one (images.length-1)
        if (imageIndex === 0) {
            // console.log("We are on the first image");
            setImageIndex(images.length -1)
        } else {
            setImageIndex(imageIndex - 1)
        }
    }

    // Let's implement the handleMoveRight function:
    const handleMoveRight = () => {
        // We need to move forward on the indexes of the images array.
        // If we are on the last index (images.length -1) we need to return the first one (0)
        if (imageIndex === images.length -1) {
            // console.log("We are on the last picture");
            setImageIndex(0)
        } else {
            setImageIndex(imageIndex + 1)
        }
    }

  return (
    <div className="carousel">
        <button onClick={handleMoveLeft}>Left</button>
        <img src={images[imageIndex]} alt="person" />
        <button onClick={handleMoveRight}>Right</button>
    </div>
  )
}

export default Carousel