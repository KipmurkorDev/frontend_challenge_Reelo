import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function DisplayTable() {
  return (
    <Container  className='mx-5'> 
    {<Row> 
    <Col>
    <h6>PLANET NAME</h6>
    </Col>
    <Col>
    <h6>HOST NAME</h6>
    </Col>
    <Col>
    <h6>DISCOVERY METHOD</h6>
    </Col>
    <Col>
    <h6>DISCOVERY YEAR</h6>
    </Col>
    <Col>
    <h6>DISCOVERY FACILITY</h6>
    </Col>
    </Row>
    } 
    </Container>
  )
}

export default DisplayTable