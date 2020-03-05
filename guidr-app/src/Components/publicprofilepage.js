import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import { axiosWithAuth } from './Utilities/Utilities';
import {connect} from 'react-redux';
import PublicProfile from "./privateprofile"


const ProfileCard = styled.div`
  
  width:30%;
  height: 300px;
  background: white;
  border-radius: 30px;
  border: 4px ridge darkblue;
  margin-bottom: 20px;
  justify-content:center;
`

const Title = styled.h2`
text-shadow: 1px 1px 2px lightblue, 0 0 1em blue, 0 0 0.2em blue;

`
const Info = styled.h4`
margin-bottom:10px;

`



const Flex=styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
margin: 5% 0;
`

const PublicProfilePage = () => {

    const [memberData, setMember] = useState([]);
   
    


  useEffect(() => {
      
   //axiosWithAuth allows the .get to recieve data due to authorization needed   
        axiosWithAuth()
          .get('https://guidr1.herokuapp.com/api/profiles')
          .then(response => {
            console.log(response.data);
          
              setMember(response.data);
          })
          .catch(error => console.log(error));
      }, []);

      console.log(memberData);
 
  return (    
    <div>
      <h2>Our wonderfull guides!</h2>

     
      <Flex>
     
          
      
          {memberData.map(item => {
          
            return <PublicProfile
            key={item.id} 
            profile_title = {item.title}
            tagline= {item.tagline}
            guide_specialty= {item.guide_specialty}
            age= {item.age}
            years_experience= {item.years_experience}
            />;
          })}
        </Flex>

     
    </div>
  );
}



export default PublicProfilePage;
