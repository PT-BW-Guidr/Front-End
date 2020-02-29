import React, {useState} from 'react';
import CreateProfile from './createprofile';
import PublicProfile from "./guideprofile";


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

    <CreateProfile addNewMember={addNewMember}/>
    <PublicProfile member={member}/>
          
    </div>
  );
}

export default ProfilePage;
