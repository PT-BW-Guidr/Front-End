import React, {useState} from 'react';
import styled from "styled-components";
//form to create profile

const Flex= styled.div`
display: flex;
flex-flow: column wrap;
justify-content: center;
margin: 5% 40%;
`

function CreateProfile (props) {

    const [newMember, setNewMember] = useState({
        profile_title: "", 
        tagline: "",
        guide_specialty:"",
        age:"",
        yearsExperience:"",
        trip_type:"", 
    });

      const handleChanges = event => {
       
        setNewMember({...newMember,  [event.target.name]: event.target.value });
    
      };

      const submitForm = event => {
        console.log('submitting');
        event.preventDefault(); 
        props.addNewMember(newMember);
        setNewMember({ profile_title: "", tagline: "" , guide_specialty:"", age:"", years_experience:"" }); 
      };
    



    return (

      <div>
        <h1>Enter Profile info to get started!</h1>
        <form onSubmit={submitForm}>
      <Flex>
        
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          id="title"
          name="title"
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

<       label htmlFor="guideSpecialty">Guide Specialty</label>
        <input
          id="guideSpecialty"
          name="guideSpecialty"
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