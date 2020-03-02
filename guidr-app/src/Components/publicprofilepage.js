import React, {useState, useEffect} from 'react';
import axios from "axios";
import PublicProfile from "./publicprofile";
import styled from "styled-components";

// should display all profiles




const Flex=styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
margin: 5% 0;
`

const PublicProfilePage = () => {

    const [memberData, setMember] = useState([
        {
          id: Date.now(),
          profile_title:"adventure man!",
          tagline:"gonna send it!",
          guide_specialty:"mushrooms!",
          age:"over9000",
          years_experience:"over9000"
    
        }
      ]);

  useEffect(() => {
      
      
        axios
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
          profile_title = {item.profile_title}
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

