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

  // instead of filtering the list, maybe pass in the value to SinglePet

  // maybe try writing a function here that takes in a parameter (would be species)
  // and then passing that to each SinglePet component

  return (
    <>
      <select onChange={event => {
        setSelection(event.target.value)}}>
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

//selection filter working, adoption status not persisting...
//might want to initialize a hidden={something} when making each SinglePet
//instead of filtering.

//then, go back in and modify the SinglePet.js file to hide/show based on that value

export default PetList;

// .filter(pet => {
//   if (selection === 'all') {
//     return pet
//   } else {
//     let singular = selection.slice(0,-1);
//     return pet.species === singular
//   }
// })

// div className="pet-list">
//             {props.pets.filter(pet => {
//               if (selection === 'all') {
//                 return pet
//               } else {
//                 let singular = selection.slice(0,-1);
//                 return pet.species === singular
//               }
//             }).map((pet,idx) => 
//               <SinglePet pet={pet} key={idx}/>
//             )}
//       </div>

      // <div className="pet-list">
      //       {props.pets.map((pet,idx) => 
      //         <SinglePet pet={pet} key={idx} selected={selection}/>
      //       )}
      // </div>