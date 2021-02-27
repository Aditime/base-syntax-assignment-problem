import React from 'react';

const UserInput = (props) =>{
    return (
<div>
<input type = "text" onChange={props.Changed} value = {props.name}></input> 
</div>
        )
};

export default UserInput;