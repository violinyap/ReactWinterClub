import React from 'react';

export const Card = (props) => {
    
        return(
            <div style={{
                width: '30vw', height: '200px',
                borderRadius: 10,
                backgroundColor: props.color, color:'white', alignItems: 'center',
                textAlign: 'center',
                flex: 1,
                margin:10,
            }}>
                <p>Hello!</p>
                <p>I am {props.name}</p>
                <p>and this is my first react website!</p>
            </div>
        )
    
}