function IdCard(props) {
    const {lastName, firstName, gender, height, birth, picture} = props
    // console.log(birth);
  return (
    <div className="id-card">
        <div className="id-card-img">
            <img src={picture} alt="person" />
        </div>
        <div className="id-card-body">
            <p><strong>First name: </strong>{firstName}</p>
            <p><strong>Last name: </strong>{lastName}</p>
            <p><strong>Gender: </strong>{gender}</p>
            <p><strong>Height: </strong>{height}</p>
            <p><strong>Birth: </strong>{birth.toLocaleString()}</p>
        </div>
    </div>
  )
}

export default IdCard