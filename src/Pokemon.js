import React from 'react'
import { useEffect, useState } from 'react';
import './Pokemon.css'
import piplup from "./images/piplup.png"


export default function Pokemon() {
    let [poke, setPoke] = useState(null)
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/piplup/")
          .then((response) => response.json())
          .then((data) => setPoke(data))
      },[])

      
    // const fetchData = () =>{
    //     fetch("https://pokeapi.co/api/v2/pokemon/piplup)/")
    //     .then((response) => {
    //         if (!response.ok) {
    //           throw new Error(`HTTP error: ${response.status}`);
    //         }
    //         return response.json();
    //       })
    //     .then((data)=>{
    //         console.log(data);
    //     })
    // }
    // useEffect(()=>fetchData(),[])
  return (
    
    <div className="poke">
        <h1>{!poke ? null : poke.name}</h1>
        <img src={piplup}/>

        {/* <img src="./images/piplup.png" alt="piplup" height="200px" width="200px"/> */}
        <p> {!poke ? null : poke.id}</p>
     {/* <p> {!poke ? null : poke.types.type.name}</p> */}
     {/* first ability is the local ability name, second is the one in the API */}
        {!poke ? null: poke.abilities.map((ability)=>{return <p>{ability.ability.name}</p>})}

   
    </div>
  )
}
