import React, {useEffect, useState} from 'react';
import { Link} from 'react-router-dom';
import axios from "axios";
import PrivateTrip from './privatetrip'




 const PrivateTrips = ()=>{

    const [Trips, setTrip] = useState({
        trip_title: "",
        description:"",
        duration:"",
        distance:"",
        trip_type:"" 

    
    });

    
    useEffect(() => {
      
        axios
           .get('https://guidr1.herokuapp.com/api/trips/')
          .then(response => {
            console.log(response);
          
            setTrip(response.results);
          })
          .catch(error => console.log(error));
      }, []);
  
    return (
    <div>
        <div>
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
        </div>

        
    <Link to ='./createtrip'>Add a trip</Link>
   
</div>
)

}
export default PrivateTrips;