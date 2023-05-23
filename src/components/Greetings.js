function Greetings(props) {
    // Let's destructure props:
    const {lang} = props;
    let greetWord = ""
    if (lang === "de") {
        greetWord = "Hallo"
    } else if (lang === "fr") {
        greetWord = "Bonjour"
    } else if (lang === "es") {
        greetWord = "Hola"
    } else if (lang === "en") {
        greetWord = "Hello"
    }
  return (
    <div className="greetings-div">
        {/* Let's use props.children to access the text with the names */}
        <h2>{greetWord} {props.children}</h2>
    </div>
  )
}

export default Greetings