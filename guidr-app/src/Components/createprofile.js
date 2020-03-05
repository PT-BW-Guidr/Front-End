import React, {useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import {connect} from 'react-redux';
import { axiosWithAuth } from './Utilities/Utilities';
import { useForm } from "react-hook-form";
//form to create profile

const Flex= styled.div`
display: flex;
flex-flow: column wrap;
justify-content: center;
align-content:space evenly;
margin: 0 35%;
`

function CreateProfile (props) {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

    const [newMember, setNewMember] = useState(props.profile);
    
    const id = props.user.userid;

    console.log(id);




      const handleChanges = event => {
       
        setNewMember({...newMember,  [event.target.name]: event.target.value });
    
      };

      const submitForm = event => {
        console.log('submitting');
        event.preventDefault();
               
        axiosWithAuth()
        .post(`https://guidr1.herokuapp.com/api/profiles/${id}`, newMember)
       .then(response => {
         console.log(response);
       
           setNewMember(response.results);
       })
       .catch(error => console.log(error)); 
       setNewMember(props.profile);
      };
    



    return (

      <div>
        <h2>Enter Profile info to get started!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
      <Flex>
        
        <label htmlFor="profile_title">Title</label>
        <input
          type="text"
          placeholder="Title"
          id="profile_title"
          name="profile_title"
          value={newMember.profile_title}
           onChange={handleChanges}
        />
       
      
        <label htmlFor="tagline">Tagline</label>
        <input
          id="tagline"
          name="tagline"
          placeholder="Tagline"
          value={newMember.tagline}
           onChange={handleChanges}
        />

<       label htmlFor="guide_specialty">Guide Specialty</label>
        <input
          id="guide_specialty"
          name="guide_specialty"
          placeholder="Guide Specialty"
          value={newMember.guide_specialty}
           onChange={handleChanges}
        />

        <label htmlFor="age">age</label>
        <input type="text" placeholder="age" name="age" id="age" ref= { register({max: 99, min: 18})} />
   

         <label htmlFor="yearsExperience">years experience</label>
        <input
          id="yearsExperience"
          name="yearsExperience"
          placeholder="Years Experience"
          value={newMember.years_experience}
           onChange={handleChanges}
        />



        <button type="submit">Create Profile</button>
        </Flex>
      </form>
      </div>
    );
    
  }

  const mapStateToProps = state =>{
    return{
      profile: state.profile,
      user: state.token
    }
  }

  export default connect(
    mapStateToProps,
    {}
) (CreateProfile);
 