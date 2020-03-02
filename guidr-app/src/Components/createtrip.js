import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

// Form for creating trip

const Flex= styled.div`
display: flex;
flex-flow: column wrap;
justify-content: center;
margin: 1% 35%;
`
const CreateTrip = () => {

    const [newTrip, setNewTrip] = useState({
        trip_title: "",
        description:"",
        duration:"",
        distance:"",
        trip_type:"", 
    
    });

    useEffect(() => {
      
      
      axios
         .post('https://guidr1.herokuapp.com/api/trips/')
        .then(response => {
          console.log(response);
        
        })
        .catch(error => console.log(error));
    }, [newTrip]);


      const handleChanges = event => {
       
        setNewTrip({...newTrip,  [event.target.name]: event.target.value });
    
      };


    const submitForm = event => {
        event.preventDefault(); 
        setNewTrip(newTrip);
        setNewTrip({ trip_title: "", description:'', duration:'',distance:'',trip_type:''}); 
      };

  return (
  <div>
    <h1>your trip here</h1>
    <form onSubmit={submitForm}>
        <Flex>
<label htmlFor="trip_title">Trip Title</label>
      <input
        type="text"
        placeholder="trip title"
        id="trip_title"
        name="trip_title"
        value={newTrip.trip_title}
        onChange={handleChanges}
      />

<label htmlFor="description">Description</label>
      <input
        type="text"
        placeholder="description"
        id="description"
        name="description"
        value={newTrip.description}
        onChange={handleChanges}
      />

<label htmlFor="duration">Duration</label>
      <input
        type="text"
        placeholder="duration"
        id="duration"
        name="duration"
        value={newTrip.duration}
        onChange={handleChanges}
      />

<label htmlFor="distance">Distance</label>
      <input
        type="text"
        placeholder="distance"
        id="distance"
        name="distance"
        value={newTrip.distance}
        onChange={handleChanges}
      />

<label htmlFor="trip_type">Type of trip</label>
        <input
          id="trip_type"
          name="trip_type"
          placeholder="trip type"
          value={newTrip.trip_type}
        onChange={handleChanges}
        />
        <button type="submit">Create Trip</button>
        </Flex>
      </form>

      
      </div>
  );
};

export default CreateTrip;
