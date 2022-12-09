import { useState,useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

// import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FaUser,FaEnvelope,FaMap } from 'react-icons/fa';
function Trainees() {
    const [trainees, setTrainees] = useState([]);
    
      useEffect(() => {
      fetch("https://homefitback-production-9d5d.up.railway.app/trainees")
          .then((r) => r.json())
          .then(setTrainees);
        }, []);

  return (
    <>
    <div className="container">
    <h3 className='text-center text-primary rounded-0'>Registered Trainees</h3> <hr></hr>

    {trainees.length > 0 ? (
       trainees.map((trainee) => (
  <>
    <Card style={{padding:"20px",border:"2px solid #8A2BE2",borderRadius:"0px",backgroundColor:"#e7e1fa",color:"#000",margin:"10px"}}>
      <h5 className="font-weight-bold"> <FaUser /> {trainee.name} </h5>
      <h6><FaEnvelope /> {trainee.email}   &nbsp; &nbsp; | <span> <FaMap /> Jamhuri Phase1</span></h6>
      </Card>

  </>
       ))):(

  <div className={'alert alert-primary rounded-0'}>No registered Trainees</div>

   )}
    
  </div>
  </>
  );

}

export default Trainees