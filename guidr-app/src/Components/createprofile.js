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
margin: 10px 30%;
padding:10px;
background:linear-gradient(to top, #987277, #1552C6);
`

function CreateProfile (props) {
  const { register, handleSubmit, errors } = useForm();
    const [newMember, setNewMember] = useState([props.profile]);
    
    const id = props.profile.id;
    console.log(props)
    console.log(id);
    console.log("new member",newMember);
    




      const handleChanges = event => {
        
        setNewMember({ ...newMember, [event.target.name]: event.target.value });
        
    
      };
      // console.log({
      //   user_id: id,
      //   title: newMember.title,
      //   tagline: newMember.tagline,
      //   guide_specialty: newMember.guide_specialty,
      //   age: newMember.age,
      //   years_experience: newMember.years_experience,
      //   public_url: `/public/${id}`,
      //   avatar_url:''
      // });

      const submitForm = (event) => {
        console.log('submitting');
            // event.preventDefault(); 
      
        axiosWithAuth()
        .post(`https://guidr1.herokuapp.com/api/profiles/`,{
          user_id: id,
          title: newMember.title,
          tagline: newMember.tagline,
          guide_specialty: newMember.guide_specialty,
          age: newMember.age,
          years_experience: newMember.years_experience,
          public_url: `/public/${id}`,
          avatar_url:''

        })
        
       .then(response => {
         console.log(response);
         
            setNewMember(props.user);
       })
       .catch(error => console.log(error));
       
       setNewMember(props.profile);
      };
    



    return (

      <div>
        <h2>Enter Profile info to get started!</h2>
        {/* <form onSubmit= {submitForm}> */}
        <form onSubmit= {handleSubmit(submitForm)}>
      <Flex>
        
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
           id="title"
          name="title"
           value={newMember.title}
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
          ref= { register({required: "required", pattern:{message:"required input"}})} 
          />
 
          {errors.age && errors.age.message}
        

         <label htmlFor="years_experience">years experience</label>
        <input
           id="years_experience"
          name="years_experience"
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
 
// import React, {useState, useEffect} from 'react';
// import styled from "styled-components";
// import axios from "axios";
// import {connect} from 'react-redux';
// import { axiosWithAuth } from './Utilities/Utilities';
// //form to create profile

// const Flex= styled.div`
// display: flex;
// flex-flow: column wrap;
// justify-content: center;
// align-content:space evenly;
// margin: 2% 35%;
// `

// function CreateProfile (props) {

//     const [newMember, setNewMember] = useState({});
    
//     const id = props.user.userid;

//     console.log(id);
//     console.log(newMember);
//     console.log(props.profile);




//       const handleChanges = event => {
       
//         setNewMember({...newMember,  [event.target.name]: event.target.value });
        
    
//       };
//       console.log({
//         user_id: id,
//         title: newMember.title,
//         tagline: newMember.tagline,
//         guide_specialty: newMember.guide_specialty,
//         age: newMember.age,
//         years_experience: newMember.years_experience,
//         public_url: `/public/${id}`,
//         avatar_url:''
//       });

//       const submitForm = event => {
//         console.log('submitting');
//         event.preventDefault(); 
      
//         axiosWithAuth()
//         .post(`https://guidr1.herokuapp.com/api/profiles/`,{
//           user_id: id,
//           title: newMember.title,
//           tagline: newMember.tagline,
//           guide_specialty: newMember.guide_specialty,
//           age: newMember.age,
//           years_experience: newMember.years_experience,
//           public_url: `/public/${id}`,
//           avatar_url:''
//         })
        
//        .then(response => {
//          console.log(response);
       
//           //  setNewMember(props.profile);
//        })
//        .catch(error => console.log(error)); 
//        setNewMember(props.profile);
//       };
    



//     return (

//       <div>
//         <h1>Enter Profile info to get started!</h1>
//         <form onSubmit={submitForm}>
//       <Flex>
        
//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           placeholder="Title"
//           id="title"
//           name="title"
//           onChange={handleChanges}
//         />
       
      
//         <label htmlFor="tagline">Tagline</label>
//         <input
//           id="tagline"
//           name="tagline"
//           placeholder="Tagline"
//           onChange={handleChanges}
//         />

// <       label htmlFor="guide_specialty">Guide Specialty</label>
//         <input
//           id="guide_specialty"
//           name="guide_specialty"
//           placeholder="Guide Specialty"
//           onChange={handleChanges}
//         />

//         <label htmlFor="age">age</label>
//         <input
//           id="age"
//           name="age"
//           placeholder="Age"
//           onChange={handleChanges}
//         />

//          <label htmlFor="years_experience">years experience</label>
//         <input
//           id="years_experience"
//           name="years_experience"
//           placeholder="Years Experience"
//           onChange={handleChanges}
//         />



//         <button type="submit">Create Profile</button>
//         </Flex>
//       </form>
//       </div>
//     );
    
//   }

//   const mapStateToProps = state =>{
//     return{
//       profile: state.profile,
//       user: state.token
//     }
//   }

//   export default connect(
//     mapStateToProps,
//     {}
// ) (CreateProfile);
 