import React from 'react';

export default class NavBar extends React.Component {
    
    render(){
        return(
            <div style={{width: '100vw', height: '50px', display:'flex', backgroundColor: 'black', color:'white', alignItems: 'center',}}>
                <div style={{justifySelf:'flex-start',alignSelf:'center',  flex: 3}}>
                    Logo
                </div>
                
                <div style={{justifySelf:'flex-end',justifyItems:'right', alignSelf:'center', flex:1}}>
                    <a>Hello</a>
                    <a href="https://www.facebook.com">Facebook</a>
                </div>
            </div>
        )
    }
}