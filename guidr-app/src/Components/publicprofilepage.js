import React, {useState, useEffect} from 'react';

import PublicProfile from "./publicprofile";
import styled from "styled-components";
import { axiosWithAuth } from './Utilities/Utilities';
import {connect} from 'react-redux';

// should display all profiles




const Flex=styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
margin: 5% 0;
`

const PublicProfilePage = props => {

    const [memberData, setMember] = useState([props.user]);

    //props.user passes in the state object from guideReducer.js

  useEffect(() => {
      
   //axiosWithAuth allows the .get to recieve data due to authorization needed   
        axiosWithAuth()
           .get('https://guidr1.herokuapp.com/api/profiles/public/')
          .then(response => {
            console.log(response);
          
               setMember(response.results);
          })
          .catch(error => console.log(error));
      }, []);

      console.log(memberData);
 
  return (
    
    <div>
      <h1>Our wonderfull guides!</h1>
      <Flex>
      {memberData.map(item => {
          
          return <PublicProfile
          key={item.id} 
          profile_title = {item.title}
          tagline= {item.tagline}
          guide_specialty= {item.guideSpecialty}
          age= {item.age}
      years_experience= {item.yearsExperience}
          />;
        })}
        </Flex>

     
    </div>
  );
}

const mapStateToProps = state =>{
  return {
      user: state.profile
  }
}


export default connect(
  mapStateToProps,
  {}
) (PublicProfilePage);

