import React from 'react';

function SinglePet(props) {
  const [status, setStatus] = React.useState(false);

  return ( props.visible ?
    <div className={(status ? 'single-pet adopted': 'single-pet')} >
      <p>Pet Name: {props.pet.name}</p>
      <p>Description: {props.pet.description}</p>
      <p>Species: {props.pet.species}</p>
      <button onClick={()=>setStatus(!status)}>Toggle Status</button>
      <p>Status: {status? "Adopted":"Available"}</p>
      <p>Visible: {props.pet.visible}</p>
    </div> :
    <></>
  );
}

export default SinglePet;
