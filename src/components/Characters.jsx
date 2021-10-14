import React from "react";

const Characters = ({ characters = [] }) => {
    
    return (
        <div>
            {characters.map((perChar) => (
                <div>

                    <img src={perChar.image} style={{minWidth: "200px"}}/>
                    <h5>Name : {perChar.name}</h5>
                    <p>Type : {perChar.species}</p>
                    
                </div>
            ))}
        </div>
    )
}

export default Characters;