import React from "react";
import axios from "axios";


// should display private profile to edit
const PrivateProfile = (props) => {

  
  return (
    <div>
        your profile here.
      {/* {props.map(person => (
        <div  key={person.id}>
            <h1>Title:{person.profile_title}</h1>
          <h2>Tagline:{person.tagline}</h2>
      <p>Guide specialty:{person.guide_specialty}</p>
      <p>age:{person.age}</p>
      <p>Years experience:{person.years_experience}</p>
        </div>
      ))} */}
    </div>
  );
};

export default PrivateProfile;
