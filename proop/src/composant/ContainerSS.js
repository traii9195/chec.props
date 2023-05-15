import React from 'react'
import Voyage from './Voyage'
import apis from '../data/Api'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
const ContainerSS = () => { 
  return ( 
    <div>
      <Container>
        <Row>
           {apis.map(({Photo, Job, Fullname,Country,Influencer})=>
            <Col>
<Voyage
Photo={Photo} 
Job={ Job}
Fullname={ Fullname}
Country={Country}
Influencer={Influencer}
 />
           </Col>
           )}
        </Row>

      </Container>
    </div>
  )
}

export default ContainerSS
