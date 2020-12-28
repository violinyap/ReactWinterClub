import React from 'react';

export default function Card(props){
    
        return(
            <div style={{
                width: '30vw',
                borderRadius: 10,
                backgroundColor: props.color, color:'white', alignItems: 'center',
                textAlign: 'center',
                padding: 20,
                flex: 1,
                margin:10,
            }}>
                <p>My travel plan #1</p>
                <h2>I want to go to {props.city}</h2>
                <br/>
                <h6>days left to go</h6>
                <h1>{props.daysLeft}</h1>
            </div>
        )
    
}