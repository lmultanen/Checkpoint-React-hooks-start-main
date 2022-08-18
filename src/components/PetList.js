import React from 'react';
import SinglePet from './SinglePet';
import { useState } from 'react';

const cody = {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
};

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList(props) {
  const [selection, setSelection] = useState('all');

  return (
    <>
      <select onChange={event => {
        console.log(event.target.value)
        setSelection(event.target.value)}}>
        <option>all</option>
        <option>cats</option>
        <option>dogs</option>
      </select>
      <div className="pet-list">
            {props.pets.filter(pet => {
              if (selection === 'all') {
                return pet
              } else {
                let singular = selection.slice(0,-1);
                return pet.species === singular
              }
            }).map((pet,idx) => 
              <SinglePet pet={pet} key={idx}/>
            )}
      </div>
    </>
  )
}

//selection filter working, adoption status not persisting...

export default PetList;

