import React, {useState, useEffect} from 'react';
<<<<<<< HEAD
=======
import axios from "axios";
import PublicProfile from "./publicprofile";
>>>>>>> 9ce19fd01f45a30dbb13a1400d6f3914a71e6052
import styled from "styled-components";
import { axiosWithAuth } from './Utilities/Utilities';
import {connect} from 'react-redux';


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
    const [count, setCount] = useState(1);
    const addOne = () => setCount(count + 1);
    const subtractOne = () => setCount(count - 1);
    const userId = "tom"; 


  useEffect(() => {
      
   //axiosWithAuth allows the .get to recieve data due to authorization needed   
        axiosWithAuth()
           .get(`https://guidr1.herokuapp.com/api/profiles/public/${count}`)
          .then(response => {
            console.log(response.data);
          
              //  setMember(response.data);
          })
          .catch(error => console.log(error));
      }, [count]);

      console.log(memberData);
 
  return (    
    <div>
      <h2>Our wonderfull guides!</h2>
      <button onClick={subtractOne}>last guide</button>
      <button onClick={addOne}>next guide</button>
     
      <Flex>
     
          
          <ProfileCard>
          <Title>{memberData.title}</Title>
          <Info>{userId}</Info>
          <Info>tagline: {memberData.tagline}</Info>
          <Info>Specialty: {memberData.guide_specialty}</Info>
          <Info>age: {memberData.age}</Info>
    <Info>Years Experience: {memberData.years_experience}</Info>
          </ProfileCard>
      
        </Flex>

     
    </div>
  );
}



export default PublicProfilePage;
