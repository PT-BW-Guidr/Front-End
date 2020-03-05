import React from "react";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const ProfileCard = styled.div`
  display:flex;
  width:30%;
  height: 300px;
  background: white;
  border-radius: 30px;
  border: 4px ridge darkblue;
  margin-bottom: 20px;
  justify-content:center;
`

const Title = styled.h2`
text-shadow: 1px 1px 2px lightblue, 0 0 1em blue, 0 0 0.2em blue;

`
const Info = styled.h4`
margin-bottom:10px;
`

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

