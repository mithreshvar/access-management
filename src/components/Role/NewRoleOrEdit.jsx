// import React from 'react'

import { useLoaderData, useParams } from "react-router-dom";

const NewRoleOrEdit = () => {
    const { id } = useParams();
    //get current route like last part of the URL
    const route = window.location.pathname.split("/").pop();
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