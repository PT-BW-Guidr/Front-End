import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { axiosWithAuth } from "./Utilities/Utilities";
import {connect} from 'react-redux';
// Form for creating trip

const Flex= styled.div`
display: flex;
flex-flow: column wrap;
justify-content: center;
margin: 1% 35%;
`
const CreateTrip = props => {

    const [newTrip, setNewTrip] = useState(props.trip);

    const [id, setId] = useState(props.user.userid);




      const handleChanges = event => {
       
        setNewTrip({...newTrip,  [event.target.name]: event.target.value });
    
      };


    const submitForm = event => {
        event.preventDefault();
        axiosWithAuth()
       .post(`https://guidr1.herokuapp.com/api/trips`,{
         user_id: id,
         title: newTrip.title,
         description: newTrip.description,
         is_private: props.trip.is_private,
         is_professional: false,
         duration: newTrip.duration,
         distance: newTrip.distance,
         date: Date(),
         trip_type: newTrip.trip_type         
       })
       .then(response => {
         console.log(response.data);
          setNewTrip(newTrip);
       })
       .catch(error => console.log(error)); 
        
        setNewTrip(props.trip); 
      };

  return (
  <div>
    <h1>your trip here</h1>
    <form onSubmit={submitForm}>
        <Flex>
<label htmlFor="title">Trip Title</label>
      <input
        type="text"
        placeholder="trip title"
        id="title"
        name="title"        
        onChange={handleChanges}
      />

<label htmlFor="description">Description</label>
      <input
        type="text"
        placeholder="description"
        id="description"
        name="description"        
        onChange={handleChanges}
      />

<label htmlFor="duration">Duration</label>
      <input
        type="text"
        placeholder="duration"
        id="duration"
        name="duration"        
        onChange={handleChanges}
      />

<label htmlFor="distance">Distance</label>
      <input
        type="text"
        placeholder="distance"
        id="distance"
        name="distance"        
        onChange={handleChanges}
      />

<label htmlFor="trip_type">Type of trip</label>
      <input
         id="trip_type"
         name="trip_type"
         placeholder="trip type"          
         onChange={handleChanges}
      />
        <button type="submit">Create Trip</button>
        </Flex>
      </form>

      
      </div>
  );
};

const mapStateToProps = state =>{
  return {
      user: state.token,
      profile: state.profile,
      trip: state.trip
  }
}

export default connect(
  mapStateToProps,
  {}
) (CreateTrip);
