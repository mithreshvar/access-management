// import React from 'react'

import { useLoaderData, useParams } from "react-router-dom";

const UserDetail = () => {
    //get the id from the URL
    const { id } = useParams();
    const user = useLoaderData();
    console.log(user)
  return (
    <div>UserDetail of {id}</div>
  )
}

export default UserDetail