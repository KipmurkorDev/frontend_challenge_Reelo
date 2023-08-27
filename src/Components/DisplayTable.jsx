import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
function DisplayTable({ filterData }) {
  const tabelCol = ['PLANET NAME', 'HOST NAME', 'DISCOVERY METHOD', 'DISCOVERY YEAR', 'DISCOVERY FACILITY'];
  return (
    <>
  { filterData.length? <Container className='mx-5'>
     <Row>
        {tabelCol.map((rows) => {
          return (
            <Col className='font-weight-bold'><h6>{rows}<p> hello<FontAwesomeIcon incon={faSortDown}/> <FontAwesomeIcon incon={faSortUp}/> </p></h6></Col>
            
          );
        })}
      </Row>
      <FontAwesomeIcon incon={faSortDown}/>
      {filterData?.map((value, index) => {
        return (
          <Row key={index} className=''>
            <Col className='py-0 fs-6'>{value.planet_name}</Col>
            <Col className='fs-6'>{value.host_name}</Col>
            <Col className='fs-6'>{value.discovery_method}</Col>
            <Col className='fs-6'>{value.discovery_year}</Col>
            <Col className='fs-6' >{value.discovery_facility}</Col>
            <hr/>
          </Row>
        );
      })}
    </Container>
    :<Container>
    <Row className='text-center' style={{padding:"15% 0%"}}>
    <p className='font-weight-bold'> Exoplanets are planets outside the solar Sytem.</p>
    <p> Her you can query NASA's exoplanet Archive and find the one you love the most</p>
    </Row>
 </Container>
    }
    </>
  )
}

export default DisplayTable