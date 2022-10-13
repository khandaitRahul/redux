import React from "react";

const User = ({ data }) => {
    return (
        <div className="App">
            <h1>User Component</h1>
            <h5>{data.name}</h5>
            <h5>{data.id}</h5>
        </div>
    )
}
export default User;