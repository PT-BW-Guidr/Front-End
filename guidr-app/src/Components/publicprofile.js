import React from "react";


//public profile card


import styled from "styled-components";

const ProfileCard = styled.div`
  display:flex;
  width:30%;
  height: 300px;
  background: white;
  border-radius: 30px;
  border: 4px ridge darkblue;
  margin-bottom: 20px;
  justify-content:center;
`

const Title = styled.h2`
text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;

`
const Info = styled.h4`
margin-bottom:10px;

`

const PublicProfile = props => {

    return (
      
        <ProfileCard>
          <div>
          <Title>{props.profile_title}</Title>
          <Info>tagline:{props.tagline}</Info>
          <Info>Specialty:{props.guide_specialty}</Info>
          <Info>age:{props.age}</Info>
    <Info>Years Experience:{props.years_experience}</Info>
          </div>
        </ProfileCard>
      );

}

export default PublicProfile;
