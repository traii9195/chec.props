import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Voyage = (props) => {
    const Photo = props.Photo;
    const  Fullname = props.Fullname;
    const Job = props.Job;
    const Country = props.Country;
    const Influencer = props.Influencer;
    const a=(props) =>{
      alert(`My name is  ${props.Fullname}                                                
      
      
      
      
      
      
      click OK to go the next `)
    }
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Photo} />
        <Card.Body>
          <Card.Title>{ Fullname}</Card.Title>
          <Card.Text>
            {Job}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{Country}</ListGroup.Item>
          <ListGroup.Item>{Influencer}</ListGroup.Item>
        
        </ListGroup>
        <Button   onClick={()=>a(props)} variant="primary">Go somewhere</Button>
      </Card>
    );
  
}

export default Voyage
