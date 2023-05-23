function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
    // Create variables for the logos and card numbers:
    let visaLogo = "https://1000marcas.net/wp-content/uploads/2019/12/VISA-Logo.png";
    let masterCardLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png"
    // Transform the card number to hide the first 12 digits:
    let cardNumberString = number.toString()
    // console.log(cardNumberString);
    let cardNumberHidden = ""
    for (let i = 0; i < cardNumberString.length; i++) {
        if (i < 12) {
            if (i === 3 || i === 7 || i === 11) {
                cardNumberHidden += "⏺ "
            }
            else {
                cardNumberHidden += "⏺"
            }  
        } else {
            cardNumberHidden += cardNumberString[i]
        }
    }
    // console.log(cardNumberHidden);
    // Slice the year:
    let year = expirationYear.toString().slice(2)
    // console.log(year);
    let month = expirationMonth.toString()
    
  return (

    <div className="credit-card" style={{backgroundColor: bgColor, color: color}}>
        <img src={type==="Visa" ? visaLogo : masterCardLogo} alt="type-logo" />
        <p className="card-number">{cardNumberHidden}</p>
        <div className="bank-info">
            <section className="bank-info-section">
                <p>Expires {month}/{year}</p>
                <p>{bank}</p>
            </section>
            <p>{owner}</p>
        </div>
    </div>
  )
}

export default CreditCard