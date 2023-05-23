// Let's import the data from the json:
import { useState } from 'react';
import profiles from '../data/berlin.json';
console.log(profiles);



function FaceBook() {
    // Let's create an array with all the student's countries:
    let countryArr = []
    profiles.forEach(el => {
        if (!countryArr.includes(el.country)) {
            countryArr.push(el.country)
        }
    })
    // console.log(countryArr);
    
    // Let's create state for the students cards:
    const [studentCardBG, setStudentCardBG] = useState("")

    // Let's create handleSelectCountry:
    const handleSelectCountry = (el) => {
        // console.log(el);
        // And set the bg state:
        setStudentCardBG(el)
    }

  return (
    <div>
        <div className='country-btn-container'>
            {/* Let's create a button for each country: */}
            {countryArr.map((el, index) => {
                return (
                    <button key={index} onClick={() => {
                        handleSelectCountry(el)
                    }}>{el}</button>
                )
            })}
        </div>
        {/* Let's map over each element of our json: */}
        {profiles.map(el => {
            // Let's destructure each object's properties:
            const {country, firstName, img, isStudent, lastName} = el
            // And let's compare the background state with the current country (only for the students):
            let bgColor
            if (studentCardBG === el.country && el.isStudent) {
                bgColor = "lightblue"
            }
            return (
                <div className="facebook-card" style={{backgroundColor: bgColor}}>
                    <div className="facebook-card-img">
                        <img src={img} alt="person" />
                    </div>
                    <div className="facebook-card-body">
                        <p><strong>First name: </strong>{firstName}</p>
                        <p><strong>Last name: </strong>{lastName}</p>
                        <p><strong>Country: </strong>{country}</p>
                        <p><strong>Type: </strong>{isStudent? "Student" : "Teacher"}</p>
                        
                    </div>
                </div>
            )
        })}
        {/* 
            
            
         */}
    </div>
  )
}

export default FaceBook