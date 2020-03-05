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

    const [newTrip, setNewTrip] = useState({});

    const [id, setId] = useState(props.user.userid);


<<<<<<< HEAD
    useEffect(() => {
      
      
      axios
         .post('https://guidr1.herokuapp.com/api/trips/')
        .then(response => {
          console.log(response);
        
        })
        .catch(error => console.log(error));
    }, []);
=======
>>>>>>> 9ce19fd01f45a30dbb13a1400d6f3914a71e6052


      const handleChanges = event => {
       
        setNewTrip({...newTrip,  [event.target.name]: event.target.value });
    
      };


    const submitForm = event => {
        event.preventDefault();
        axiosWithAuth()
       .post(`https://guidr1.herokuapp.com/api/trips/${id}`)
       .then(response => {
         console.log(response);
          setNewTrip(newTrip);
       })
       .catch(error => console.log(error)); 
        
        setNewTrip({ trip_title: "", description:'', duration:'',distance:'',trip_type:''}); 
      };

  return (
  <div>
    <h2>your trip here</h2>
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
       <label>keep private? :<span>    </span> 
          <input
            name="is_private"
            type="checkbox"
            checked={newTrip.is_private}
            onChange={handleChanges} />
            </label>  

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
