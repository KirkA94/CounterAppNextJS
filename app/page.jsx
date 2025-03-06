"use client";


import { useState } from "react"
import Form from "./components/Form"
import Table from "./components/Table"


function HomePage(){

    const [newFavLink, setNewFavLink] = useState({})

function handleNewFavLink(favLink){


    console.log(favLink)

    setNewFavLink(favLink)
}


    return (
        <div>
            <h1>FavLinks</h1>

  <Form sumbitFavLink={handleNewFavLink} />

  <Table data={newFavLink}/>



            </div>
    
)
}


export default HomePage