import React from 'react';

function SinglePet(props) {
  // basically checking to see if property doesn't exist or already false
  const [status, setStatus] = React.useState(false);
  // !props.pet.status ? false : props.pet.status)
  // props.pet.status = status;
  // let visible = true;
  // const [visible, setVisible] = React.useState(true);

  // making sure not props not null; need to add the loading screen when fetch in progress
  // if (!(props.pet.selected === 'all') && !props) {
  //   setVisible(props.pet.species === props.pet.selected.slice(0,-1))
  //   console.log(props.pet.species, visible)
  // }
  // hidden={!props.pet.visible}
  // style={props.pet.visible? '' : 'visibility:hidden'}
  return (
    <div className={(status ? 'single-pet adopted': 'single-pet')+ (props.pet.visible ? '':' hidden')} >
      <p>Pet Name: {props.pet.name}</p>
      <p>Description: {props.pet.description}</p>
      <p>Species: {props.pet.species}</p>
      <button onClick={()=>setStatus(!status)}>Toggle Status</button>
      <p>Status: {status? "Adopted":"Available"}</p>
      <p>Visible: {props.pet.visible}</p>
    </div>
  );
}

export default SinglePet;
