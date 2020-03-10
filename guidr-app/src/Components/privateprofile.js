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
const Prof = styled.div`
border-bottom: black 2px solid;
`
// should display private profile to edit
const PrivateProfile = (props) => {

  const id = props.user.userid;

  console.log(id);

  const [user, setUser] = useState([{}]);
  const [profilee,setProfile] = useState(['']);
  const [tagline,setTagline] = useState(['']);
  const [guideSpecialty,setSpecialty] = useState(['']);
  const [age,setAge] = useState(['']);
  const [experience,setExperience] = useState(['']);

  useEffect(()=>{
    axiosWithAuth()
    .get(`https://guidr1.herokuapp.com/api/users/data/${id}`)
    .then(res =>{
      console.log(res.data[0]);
      setUser(res.data);
      setProfile(res.data[0].profile_title)
      setTagline(res.data[0].tagline)
      setSpecialty(res.data[0].guide_specialty)
      setAge(res.data[0].age)
      setExperience(res.data[0].years_experience)
      
    })
    .catch(error => console.log(error));

  },[])

  
  console.log(user);
  console.log(profilee);
  
  return (
    <Flex>
     <Prof>
       <h1>{profilee}</h1>
       <h2>{tagline}</h2>
       <p>Guide specialty: {guideSpecialty}</p>
       <p>age: {age}</p>
       <p>Years experience: {experience}</p> 
       </Prof>
           
           
         
            

<h1>Trips!</h1>
        {user.map(users=>{

          return(
          <div>
           
           
            <Trip>
          <h2> {users.trips_title}</h2>
          <p>Trip Description: {users.description}</p>
            <p>Trip Duration: {users.duration}</p>
            <p>Trip Distance: {users.distance}</p>
            <p>Trip Date: {users.date}</p>
            </Trip>
          </div>
          )
          
        })}     
      <Link to = '/edits'><button>Edit Profile</button></Link>
    </Flex>
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
