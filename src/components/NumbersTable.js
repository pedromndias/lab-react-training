function NumbersTable(props) {
    const {limit} = props
    // Let's create an array of numbers with length = limit:
    let numArray = []
    for (let i = 1; i <= limit; i++) {
        numArray.push(i)
    }
  return (
    <div className="square-numbers-container">
        {
            numArray.map(el => {
                // Let's code a conditional for the even numbers (background-color will be red)
                let bgColor = ""
                if (el % 2 === 0) {
                    bgColor = "red"
                }
                return (
                    <div className="square-numbers" key={el} style={{backgroundColor: bgColor}}>{el}</div>
                )
            })
        }
    </div>
  )
}

export default NumbersTable