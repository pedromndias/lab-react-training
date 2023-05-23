import { useState } from "react"
import emptyDice from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

function Dice() {
    // Let's define state for the image:
    const [image, setImage] = useState(emptyDice)

    // Let's create the handleChangeDice:
    const handleChangeDice = () => {
        // console.log("Trying to change the dice");
        // Generate a randomNum for the dice:
        let randomNum = Math.floor(Math.random() * 6) + 1
        console.log(randomNum);
        // And update the image state:
        if (randomNum === 1) {
            setImage(dice1)
        } else if (randomNum === 2) {
            setImage(dice2) 
        } else if (randomNum === 3) {
            setImage(dice3)
        } else if (randomNum === 4) {
            setImage(dice4)
        } else if (randomNum === 5) {
            setImage(dice5)
        } else if (randomNum === 6) {
            setImage(dice6)
        } 
        // todo there must be a DRY way to write the code above!
    }
  return (
    <div className="dice-container">
        <img src={image} alt="dice" onClick={handleChangeDice}/>
    </div>
  )
}

export default Dice