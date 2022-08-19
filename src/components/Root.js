import React, { useState } from 'react';
import PetList from './PetList';

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import axios from 'axios';
import { useEffect } from 'react';

const Root = () => {
  const [petList, setPetList] = useState([]);

  // const {id} = React.useParams();

  useEffect(() => {
    async function getPets() {
      try {
        const {data} = await axios.get('/api/pets');
        setPetList(data);
      } catch (err) {
        console.error("something went wrong fetching pets", err)
      }
    }
    getPets();
  },[])

  if (petList.length === 0) {
    return <>Loading...</>
  }

  return (
    <>
      <h1>Adoption Center</h1>
      <PetList pets={petList} />
    </>
  )
}

export default Root;
