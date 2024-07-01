// import React from 'react'

import { useParams } from "react-router-dom";

const UserDetail = () => {
    //get the id from the URL
    const { id } = useParams();
  return (
    <div>UserDetail of {id}</div>
  )
}

export default UserDetail