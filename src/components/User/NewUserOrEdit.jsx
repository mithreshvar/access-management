// import React from 'react'

import { useLoaderData, useParams } from "react-router-dom";

const NewUser = ({ route = 'users' }) => {
    const user = useLoaderData();
    const { id } = useParams();
    if (route === "new") {
        return (
        <div>New User</div>
    );
    } else {

        if (!user) {
            return (
            <div>User not found {route}</div>
        );
        }else{
            return (
            <div>Edit {id}</div>
        )
        }
    }
}

export default NewUser