import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from "axios";
//form to create profile

const Flex= styled.div`
display: flex;
flex-flow: column wrap;
justify-content: center;
align-content:space evenly;
margin: 0 35%;
`

function CreateProfile () {

    const [newMember, setNewMember] = useState({
        profile_title: "", 
        tagline: "",
        guide_specialty:"",
        age:"",
        yearsExperience:"",
        trip_type:"", 
    });

    useEffect(() => {
      
      
      axios
         .post('https://guidr1.herokuapp.com/api/profiles/')
        .then(response => {
          console.log(response);
        
            setNewMember(response.results);
        })
        .catch(error => console.log(error));
    }, [newMember]);



      const handleChanges = event => {
       
        setNewMember({...newMember,  [event.target.name]: event.target.value });
    
      };

      const submitForm = event => {
        console.log('submitting');
        event.preventDefault(); 
        setNewMember(newMember);
        setNewMember({ profile_title: "", tagline: "" , guide_specialty:"", age:"", years_experience:"" }); 
      };
    



    return (

      <div>
        <h2>Enter Profile info to get started!</h2>
        <form onSubmit={submitForm}>
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
        <input
          id="age"
          name="age"
          placeholder="Age"
          value={newMember.age}
           onChange={handleChanges}
        />

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

  export default CreateProfile;