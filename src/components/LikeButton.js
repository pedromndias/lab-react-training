import { useState } from "react"

function LikeButton() {
    
    let colors = ['purple','blue','green','yellow','orange','red']
    // Create state for the color:
    const [bgColor, setBgColor] = useState("purple")
    // Create state for the likes:
    const [totalLikes, setTotalLikes] = useState(0)

    // Let's implement the handleLike function:
    const handleLike = () => {
        // generate random color:
        let randomNum = Math.floor(Math.random() * colors.length)
        // And set it as the bg of the button:
        setBgColor(colors[randomNum])

        // Increment the number of likes:
        setTotalLikes(totalLikes + 1)
    }

  return (
    <div>
        {/* Create a button that changes likes and background color. Note the "s if the likes are not 1." */}
        <button onClick={handleLike} style={{backgroundColor: bgColor}} className="like-btn">{totalLikes} Like{totalLikes !== 1 && "s"}</button>
    </div>
  )
}

export default LikeButton