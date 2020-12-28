import React from 'react'
import {Nav,Navbar, NavDropdown, Button, Form, FormControl, Card} from 'react-bootstrap'
import TravelCard from '../components/TravelCard';
import BaliPict from '../img/bali.jpg';

export default class Travel extends React.Component {

    city = ['Bali', 'Jogja', 'Manado']
    daysLeft = [20, 30, 55]
    today =new Date();

    componentDidMount(){
        console.log(new Date());
    }
    state = {
        color : "lightpink",

    }

    render(){
        return(
            <div>
                <div>
                <Navbar variant="light" style = {{backgroundColor: 'pink'}}>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
                </div>
              
                <div>
                    <div style={{width: '100vw', height: '50vh', backgroundColor: 'lightblue',display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <div style={{width: '90%', height: '90%',backgroundColor: 'white',padding: 50, color:'grey'}}>
                            <h1>Hello!</h1>
                            <h1>Welcome to my first React Website.</h1>
                            <h3>Let's see my travel plan down below. </h3>
                            <br/>
                            <h4 style={{textAlign:'right'}}>Today is </h4>
                            <h6 style={{textAlign:'right'}}>{String(this.today)}</h6>
                        <Button onClick={()=>{this.setState({color: 'darkblue'})}} variant="primary">Dark Blue</Button>
                        <Button onClick={()=>{this.setState({color: 'red'})}} style={{margin:10, backgroundColor:'red'}}>Red</Button>
                        </div>
                    </div>
                    <div style={{width: '100vw', height: '50vh', backgroundColor: 'lightblue',display:'flex', justifyContent:'center', alignItems:'center'}}>
        
                        <TravelCard color={this.state.color} city={"Malang"} daysLeft={89}/>
                        <div style={{
                            width: '30vw',
                            borderRadius: 10,
                            backgroundColor: 'lightcoral', color:'white', alignItems: 'center',
                            textAlign: 'center',
                            padding: 20,
                            flex: 1,
                            margin:10,
                        }}>
                            <p>My travel plan #1</p>
                            <h2>I want to go to {this.city[0]}</h2>
                            <br/>
                            <h6>days left to go</h6>
                            <h1>{this.daysLeft[0]}</h1>
                        </div>
                    </div>
                    <div style={{width: '100vw', height: '50vh', backgroundColor: 'lightblue',display:'flex', justifyContent:'center', alignItems:'center'}}>
                        {this.city.map((city, index)=>
                             <TravelCard color={this.state.color} city={city} daysLeft={this.daysLeft[index]}/>
                        )}
                    </div>
                    <div style={{width: '100vw', backgroundColor: 'lightblue',display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={BaliPict} />
                    <Card.Body>
                        <Card.Title>Bali</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>
        )
    }
}