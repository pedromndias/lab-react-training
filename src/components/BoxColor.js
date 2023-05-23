function BoxColor(props) {
    const {r, g, b} = props;
    let rgbColor = `rgb(${r},${g},${b})`
    // To convert to Hexadecimal we need to pass each value to string with base of 16 (hexadecimal):
    let hexColor = "#"+r.toString(16)+g.toString(16)+b.toString(16)
    // console.log(hexColor);
    return (
        <div className="box-color-div" style={{backgroundColor: rgbColor}}>
            <h4>{rgbColor}</h4>
            <h4>{hexColor}</h4>
        </div>
    )
}

export default BoxColor