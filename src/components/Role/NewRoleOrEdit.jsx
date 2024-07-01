// import React from 'react'

import { useLoaderData, useParams } from "react-router-dom";

const NewRoleOrEdit = ({ route = 'roles' }) => {
    const { id } = useParams();
    if (route === "new") {
        return (
        <div>New Role</div>
    );
    } else {

        if (!user) {
            return (
            <div>Role not found {route}</div>
        );
        }else{
            return (
            <div>Edit {id}</div>
        )
        }
    }
}

export default NewRoleOrEdit