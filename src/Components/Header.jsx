import React from 'react'
import { Container, Row } from 'react-bootstrap'

function Header() {
    return (
        <Container fluid className='border mb-0 bg-dark text-white'>
            <Row >
                <p className='text-center pt-5 '>NASA Exoplanet Query</p>
            </Row>
        </Container>
    )
}

export default Header