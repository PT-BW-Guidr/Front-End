import React, {useState} from 'react';



function CreateProfile (props) {

    const [newMember, setNewMember] = useState({
        title: "", 
        tagline: "",
        guideSpecialty:"",
        age:"",
        yearsExperience:"" 
    });

      const handleChanges = event => {
       
        setNewMember({...newMember,  [event.target.name]: event.target.value });
    
      };

      const submitForm = event => {
        console.log('submitting');
        event.preventDefault(); 
        props.addNewMember(newMember);
        setNewMember({ title: "", tagline: "" , guideSpecialty:"", age:"", yearsExperience:"" }); 
      };
    



    return (
        <form onSubmit={submitForm}>
      
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="title"
          id="title"
          name="title"
          value={newMember.title}
           onChange={handleChanges}
        />
       
        <label htmlFor="tagline">tagline</label>
        <input
          id="tagline"
          name="tagline"
          placeholder="tagline"
          value={newMember.tagline}
           onChange={handleChanges}
        />

<       label htmlFor="guideSpecialty">Guide Specialty</label>
        <input
          id="guideSpecialty"
          name="guideSpecialty"
          placeholder="guideSpecialty"
          value={newMember.guideSpecialty}
           onChange={handleChanges}
        />

        <label htmlFor="age">age</label>
        <input
          id="age"
          name="age"
          placeholder="age"
          value={newMember.age}
           onChange={handleChanges}
        />

         <label htmlFor="yearsExperience">years experience</label>
        <input
          id="yearsExperience"
          name="yearsExperience"
          placeholder="yearsExperience"
          value={newMember.yearsExperience}
           onChange={handleChanges}
        />

        <button type="submit">Create Profile</button>
      </form>
    );
    
  }

  export default CreateProfile;