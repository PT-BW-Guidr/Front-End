import React from "react";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';



// should display private profile to edit
const PrivateProfile = (props) => {

  
  
  return (
    <div>
        your profile here.
      {props.user.map(person => (
      <div  key={person.id}>
        <h1>Title: {person.title}</h1>
        <h2>Tagline: {person.tagline}</h2>
        <p>Guide specialty: {person.guideSpecialty}</p>
        <p>age: {person.age}</p>
        <p>Years experience: {person.yearsExperience}</p>
      </div>
      ))}
      <Link to = '/edits'><button>Edit Profile</button></Link>
    </div>
  );
};

const mapStateToProps = state =>{
  return {
      user: state.profile
  }
}

export default connect(
  mapStateToProps,
  {}
) (PrivateProfile);

