import React, { useEffect, useState } from "react";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from "./Utilities/Utilities";
import Axios from "axios";



// should display private profile to edit
const PrivateProfile = (props) => {

  const id = props.user.userid;

  console.log(id);

  const [user, setUser] = useState([{}]);

  useEffect(()=>{
    axiosWithAuth()
    .get(`https://guidr1.herokuapp.com/api/users/3`)
    .then(res =>{
      console.log(res.data);
      setUser(res.data);
      
    })
    .catch(error => console.log(error));

  },[id])

  
  console.log(user);
  
  return (
    <div>
        {user.map(users=>{

          return(
          <div  key={users.id}>
            <h1>Title: {users.profile_title}</h1>
            <h2>Tagline: {users.tagline}</h2>
            <p>Guide specialty: {users.guide_specialty}</p>
            <p>age: {users.age}</p>
            <p>Years experience: {users.years_experience}</p>
          </div>
          )
          
        })}     
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
