import React from 'react'
import{Col,Container,Row} from 'react-bootstrap'
import "./Footer.css"

function Footer() {

    return (
    <div>
    <Container>
        <Row>
            <Col className='text-center py-3'>copyright &copy; EpicDrop</Col>
        </Row>
    </Container>
    </div>
  )
}

export default Footer