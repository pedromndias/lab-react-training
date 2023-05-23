function Random(props) {
    const {min, max} = props
    // Create a random number:
    let randomNum = Math.floor(Math.random() * max) + min
  return (
    
    <div className="random-div">
        <p>Random value between {min} and {max} ={">"} {randomNum}</p>
        {/* Note the ={">"} so the code does not show a warning on invalid character */}
    </div>
  )
}

export default Random