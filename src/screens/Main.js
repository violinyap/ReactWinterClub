import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {Card} from '../components/Card';


let  names= ["May", "Agus", "Toni"]
export default class Main extends React.Component {

    state = {
        color: 'magenta',
        name: 'Jason',
    }

    changeName = (newName) =>{
        this.setState({name: newName});
    }

    changeColor = (color) =>{
        this.setState({color})
    }

    render(){
        return(
            <div style={{justifyContent:'center', alignItems:'center'}}>
                <NavBar/>
                <div style={{justifyContent:'center', display:'flex'}}>
                    <button onClick={()=>{this.changeColor('lightblue')}}>Biru Muda</button>
                    <button onClick={()=>{this.changeColor('pink')}}>Pink</button>
                    <button onClick={()=>{this.changeName('Lisa')}}>Lisa</button>
                    <button onClick={()=>{this.changeName('Herman')}}>Herman</button>
                </div>
                <Card color={this.state.color} name={this.state.name}/>
                <div style={{display:'flex'}}>
                    <Card color='red' name={names[0]}/>
                    <Card color='yellow' name={names[1]}/>
                    <Card color='green'  name={names[2]}/>
                    {names.map((nama)=>
                        <Card color='purple'  name={nama}/>
                    )}
                      {names.map((nama)=>
                        <Card color='purple'  name={nama}/>
                    )}
                </div>
             
                {names.map((nama)=>
                    <Card color='pink'  name={nama}/>
                 )}
                <Footer style={{margin: 0}}/>
            </div>
        )
    }
}