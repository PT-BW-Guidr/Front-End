import React from "react";

const GuideProfile = props => {
  return (
    <div>
      {props.member.map(person => (
        <div  key={person.id}>
            <h1>Title:{person.title}</h1>
          <h2>Tagline:{person.tagline}</h2>
      <p>Guide specialty:{person.guideSpecialty}</p>
      <p>age:{person.age}</p>
      <p>Years experience:{person.yearsExperience}</p>
        </div>
      ))}
    </div>
  );
};

export default GuideProfile;
