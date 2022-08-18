import React from 'react';

function SinglePet(props) {
  const [status, setStatus] = React.useState(false);

  return (
    <div className={status ? 'single-pet adopted': 'single-pet'}>
      <p>Pet Name: {props.pet.name}</p>
      <p>Description: {props.pet.description}</p>
      <p>Species: {props.pet.species}</p>
      <button onClick={()=>setStatus(!status)}>Toggle Status</button>
      <p>Status: {status? "Adopted":"Available"}</p>
    </div>
  );
}

export default SinglePet;
