import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
let arr = ['helllo', 'helllo', '13', '13', 'hoelelele', 'bootstrap'];
let newSet = new Set(arr)
console.log(newSet);
function SearchBar() {
  return (
    <Container >
      <Row style={{ margin: "4% 8%" }} className='search-container text-center'>
        <Col>
          <Form.Select>
            <option>Host Name</option>
            <option value="1">One</option>
          </Form.Select>
        </Col>

        <Col>
          <Form.Select>
            <option>Discovery Method</option>
            <option value="1">One</option>
          </Form.Select>
        </Col>
        <Col>

          <Form.Select>
            <option>Discovery Year</option>
            <option value="1">One</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select>
            <option>Discovery Facility</option>
            <option value="1">One</option>
          </Form.Select>
        </Col>
        <Col className='text-start'>
          <button className='btn-lg px-3 py-1 mx-3 rounded border-0 text-white' style={{ backgroundColor: "#3495eb" }}> Search </button>
          <button className='btn-lg px-3 py-1 rounded border-0 text-white' style={{ backgroundColor: "#3495eb" }}> Clear </button>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchBar