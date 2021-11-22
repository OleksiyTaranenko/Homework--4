import React, { useEffect, useState } from "react";

function UserName() {
    const [name, setName] = useState('');

    const uName = () => {
        setName(prompt("What is your name?"));
    }

    useEffect(uName, []);

    localStorage.setItem("names", JSON.stringify(name));

    JSON.parse(localStorage.getItem("names"));    

    return(
    <>
        <h1>{name} Todo List</h1>
    </>
    )
}

export default UserName;