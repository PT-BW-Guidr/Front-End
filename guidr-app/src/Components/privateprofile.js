import React, { useEffect, useState } from "react";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from "./Utilities/Utilities";


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

