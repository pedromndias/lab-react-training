import { useState } from "react"

function ClickablePicture(props) {
    const {img, imgClicked} = props

    // Let's create state for the image:
    const [image, setImage] = useState(img)

    // Let's create the handleChangeImage function:
    const handleChangeImage = () => {
        if (image === img) {
            setImage(imgClicked)
        } else {
            setImage(img)
        }
    }

  return (
    <div className="clickable-picture">
        <img src={image} alt="" onClick={handleChangeImage}/>
    </div>
  )
}

export default ClickablePicture