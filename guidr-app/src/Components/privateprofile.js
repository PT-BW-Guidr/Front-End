import React, { useEffect, useState } from "react";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from "./Utilities/Utilities";
import Axios from "axios";
import styled from "styled-components"

const Flex= styled.div`
display: flex;
flex-flow: column wrap;
justify-content: center;
margin: 2% 22%;
padding:20px;
background:linear-gradient(to bottom, #747185 , #B7AAB3);
border-radius:10px;
`
const Trip = styled.div`
margin-bottom: 1%;
justify-content:center;
background:linear-gradient(to bottom, #747185 , #B7AAB3);
border-radius:10px;
`

// should display private profile to edit
const PrivateProfile = (props) => {

  const id = props.user.userid;

  console.log(id);

  const [user, setUser] = useState([{}]);

  useEffect(()=>{
    axiosWithAuth()
    .get(`https://guidr1.herokuapp.com/api/users/data/${id}`)
    .then(res =>{
      console.log(res.data);
      setUser(res.data);
      
    })
    .catch(error => console.log(error));

  },[])

  
  console.log(user);
  
  return (
    <div>
        {user.map(users=>{

          return(
          <Flex  >
           
            <h1>{users.profile_title}</h1>
            <div>
            <h2>Tagline</h2>
            <p>{users.tagline}</p>
            </div>
            <p>Guide specialty: {users.guide_specialty}</p>
            <p>age: {users.age}</p>
            <p>Years experience: {users.years_experience}</p>
            <Trip>
              <h2>Trips!</h2>
          <p> {users.trips_title}</p>
          <p>Trip Description: {users.description}</p>
            <p>Trip Duration: {users.duration}</p>
            <p>Trip Distance: {users.distance}</p>
            <p>Trip Date: {users.date}</p>
            </Trip>
          </Flex>
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
