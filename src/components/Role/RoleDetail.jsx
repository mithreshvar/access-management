import React from 'react'
import { useParams } from 'react-router-dom';

const RoleDetail = () => {
    const { id } = useParams();
  return (
    <div>RoleDetail of {id}</div>
  )
}

export default RoleDetail