import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { handleAsc, handleDesc } from '../utils/OrderArr'

function DisplayTable({ filterData }) {
  const [tvalues, setTvalues] = useState([])

  const tabelCol = ['PLANET NAME', 'HOST NAME', 'DISCOVERY METHOD', 'DISCOVERY YEAR', 'DISCOVERY FACILITY'];
  const sortArr = (str, sort, filterData) => {
    if (sort === 'desc') {
      const results = handleDesc(str, filterData)
      setTvalues(results)
    }
    else if (sort === 'asc') {
      const results = handleAsc(str, filterData)
      setTvalues(results)
    }
    setTvalues(filterData)

  }
  useEffect(() => {
    sortArr('', '', filterData)
  }, [tvalues, filterData])

  return (
    <>
      {tvalues.length ? <Container className='mx-5'>
        <Row>
          {tabelCol.map((rows) => {
            return (
              <Col className='font-weight-bold'>
                <h6>{rows}
                  <p className='mt-2'>
                    <button className='fa-sm border-0 bg-white' onClick={() => sortArr(`${rows}`, "desc", tvalues)}> <i className="fa-solid fa-sort-down"></i></button>
                    <button className='fa-sm border-0  bg-white' onClick={() => sortArr(`${rows}`, "asc", tvalues)}> <i className="fa-solid fa-sort-up"></i></button>
                  </p>
                </h6>
              </Col>
            );
          })}
        </Row>
        {tvalues?.map((value, index) => {
          return (
            <Row key={index} style={{paddingRight:"4%"}}>
              <Col className='py-0 fs-6'>{value.planet_name}</Col>
              <Col className='fs-6'>{value.host_name}</Col>
              <Col className='fs-6'>{value.discovery_method}</Col>
              <Col className='fs-6'>{value.discovery_year}</Col>
              <Col className='fs-6' >{value.discovery_facility}</Col>
              <hr />
            </Row>
          );
        })}
      </Container>
        : <Container>
          <Row className='text-center' style={{ padding: "15% 0%" }}>
            <p className='font-weight-bold'> Exoplanets are planets outside the solar Sytem.</p>
            <p> Her you can query NASA's exoplanet Archive and find the one you love the most</p>
          </Row>
        </Container>
      }
    </>
  )
}

export default DisplayTable