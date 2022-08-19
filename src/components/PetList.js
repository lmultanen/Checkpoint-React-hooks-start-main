import React from 'react';
import SinglePet from './SinglePet';
import { useState } from 'react';

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList(props) {
  const [selection, setSelection] = useState('all');

  return (
    <>
      <select onChange={event => {
        setSelection(event.target.value)
        console.log('logging state after change', selection)}}>
        <option>all</option>
        <option>cats</option>
        <option>dogs</option>
      </select>
      <div className="pet-list">
        {props.pets.map((pet,idx) => 
              <SinglePet pet={pet} key={idx} 
              visible={
                selection === 'all' ? true : (selection.slice(0,-1) === pet.species)
              }/>
            )}
      </div>
    </>
  )
}

export default PetList;