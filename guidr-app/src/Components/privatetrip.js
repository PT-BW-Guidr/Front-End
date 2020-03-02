import React from 'react';
import styled from "styled-components";
//should display the trips of specific guide without ability to edit

const Info = styled.h4`
margin-bottom:10px;
`
 
        const PublicTrips = props => {

            return (
              
               
                  <div>
                  <Info>{props.title}</Info>
                  <Info>description:{props.description}</Info>
                  <Info>duration:{props.duration}</Info>
                  <Info>distance:{props.distance}</Info>
            <Info>Trip type{props.trip_type}</Info>
                  </div>
               
              );
        
        }
        
        export default PublicTrips;

