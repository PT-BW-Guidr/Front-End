import React, {useEffect, useState} from 'react';
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PrivateTrip from './privatetrip'
import { axiosWithAuth } from './Utilities/Utilities';
import styled from "styled-components"


const Tripdiv = styled.div`
margin-bottom: 20px;
justify-content:center;
margin: 2% 22%;
padding:20px;

`


 const PrivateTrips = (props)=>{

    const [Trips, setTrip] = useState(props.user);

    
    useEffect(() => {
      
        axiosWithAuth()
           .get('https://guidr1.herokuapp.com/api/trips/')
          .then(response => {
            console.log(response);
          
            setTrip(response.results);
          })
          .catch(error => console.log(error));
      }, []);
  
    return (
    <div>
        <Tripdiv>
      {Trips.map(item => {
          return <PrivateTrip
          key={item.id} 
          title = {item.title}
          description= {item.description}
          duration= {item.duration}
          distance= {item.distance}
      trip_type= {item.trip_type}
          />;
        })}
        </Tripdiv>

        
    <Link to ='./createtrip'>Add a trip</Link>
   
</div>
)

}

const mapStateToProps = state =>{
  return {
      user: state.profile
  }
}


export default connect(
  mapStateToProps,
  {}
) (PrivateTrips);