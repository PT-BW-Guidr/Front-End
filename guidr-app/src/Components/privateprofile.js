import React, { useEffect, useState } from "react";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from "./Utilities/Utilities";
import Axios from "axios";



// should display private profile to edit
const PrivateProfile = (props) => {

  const id = props.user.userid;

  console.log(id);

  const [user, setUser] = useState(props.profile);

  useEffect(()=>{
    axiosWithAuth()
    .get(`https://guidr1.herokuapp.com/api/users/${id}`)
    .then(res =>{
      console.log(res.data);
      setUser(res.data);
      console.log(user);
    })
    .catch(error => console.log(error));

  },[])

  
  
  
  return (
    <div>
        your profile here.      
      <div  key={user.id}>
        <h1>Title: {user.title}</h1>
        <h2>Tagline: {user.tagline}</h2>
        <p>Guide specialty: {user.guideSpecialty}</p>
        <p>age: {user.age}</p>
        <p>Years experience: {user.yearsExperience}</p>
      </div>
      
      <Link to = '/edits'><button>Edit Profile</button></Link>
    </div>
  );
};

const mapStateToProps = state =>{
  return {
      user: state.token,
      profile: state.profile
  }
}

export default connect(
  mapStateToProps,
  {}
) (PrivateProfile);

