import React from 'react';

// Input: liked: boolean
// Output: onClick

const Like = props => {
    let classes = "fa fa-heart";
    classes += !props.liked ? "-o" : ""
    // Raise a custom event: onClick
    return <i 
            onClick={props.onClick} 
            style={{cursor: "pointer"}} 
            className={classes} 
            aria-hidden="true" 
        />;
}
 
export default Like;