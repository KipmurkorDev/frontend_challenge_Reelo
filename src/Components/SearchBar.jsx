import React, {useState} from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { uniqueValues, filterData } from '../utils/searchValues'

function SearchBar({ data, setFilterData}) {
  const results = uniqueValues(data)
  const [values, setValues]=useState({
    host_name:"",
    discovery_method:"",
    discovery_year:0,
    discovery_facility:""

  })

  const handleSubmit=()=>{
    const results=filterData(values, data);
    setFilterData(results)
  }
  const handleDelete=()=>{
    setFilterData([])
  }
  return (
    <Container >
      <Row style={{ margin: "4% 8%" }} className='search-container text-center'>
        <Col>
        <Form.Select
          as="select"
          value={values.host_name}
          onChange={e => {setValues({...values, host_name:e.target.value,})
           }}>
            <option>Host Name</option>
            {results.hostName.map((item) => {
              return (
                <option value={item} >{item}</option>
              )
            })
            }
          </Form.Select>
        </Col>

        <Col>
        <Form.Select
          as="select"
          value={values.discovery_method}
          onChange={e => {setValues({...values, discovery_method:e.target.value,})
           }}>            
           <option>Discovery Method</option>
            {results.method.map((item) => {
              return (
                <option >{item}</option>
              )
            })
            }
          </Form.Select>
        </Col>
        <Col>

        <Form.Select
          as="select"
          value={values.discovery_year}
          onChange={e => {setValues({...values, discovery_year:e.target.value,})
           }}>           
            <option>Discovery Year</option>
            {results.year.map((item) => {
              return (
                <option >{item}</option>
              )
            })
            }
          </Form.Select>
        </Col>
        <Col>
        <Form.Select
          as="select"
          value={values.discovery_facility}
          onChange={e => {setValues({...values, discovery_facility:e.target.value,})
           }}>               
           <option>Discovery Facility</option>
            {results.facility.map((item) => {
              return (
                <option >{item}</option>
              )
            })
            }
          </Form.Select>
        </Col>
        <Col className='text-start'>
          <button className='btn-lg px-3 py-1 mx-3 rounded border-0 text-white' style={{ backgroundColor: "#3495eb" }} onClick={handleSubmit}> Search </button>
          <button className='btn-lg px-3 py-1 rounded border-0 text-white' style={{backgroundColor: "#3495eb" }} onClick={handleDelete}> Clear </button>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchBar