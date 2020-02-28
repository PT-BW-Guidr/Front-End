import React, {useState} from 'react';
import Profile from './profile';
import GuideProfile from "./guideprofile"


function ProfilePage() {
  const [member, setMember] = useState([
    {
      id: Date.now(),
      title:"adventure man!",
      tagline:"gonna send it!",
      guideSpecialty:"mushrooms!",
      age:"over9000",
      yearsExperience:"over9000"

    }
  ]);
  
console.log(member);
  const addNewMember = people => {
    const newMember = {
      id: Date.now(),
      title: people.title,
      tagline: people.tagline,
      guideSpecialty: people.guideSpecialty,
      age: people.age,
      yearsExperience: people.yearsExperience,
    };

    setMember([...member, newMember]);
  };

  return (
    <div >

    <Profile addNewMember={addNewMember}/>
    <GuideProfile member={member}/>
          
    </div>
  );
}

export default ProfilePage;
