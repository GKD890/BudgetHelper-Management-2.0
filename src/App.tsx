import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { INavbar } from './components/navbar'
import { Col, Container, Row } from 'react-bootstrap'
import background from './assets/bg-unsplash.jpg'

function App() {

  return (
    <div className='w-100 h-100 .bg-indigo.bg-accent-4'>
      <INavbar />
      <Container className='mb-4 w-100 ' >
      <Row>

      <Col className='header w-50 test-justify p-5'>
        <h1 className='text-light'> Welcom to Budget Helper Mangement System</h1>
        <Row className='text-light m-4'>Learn more</Row>
      </Col>
      
      <Col className='w-50 '>
        <img  src={background} className="img-fluid" alt="bg"></img>
      </Col>

      </Row>
 
      </Container>
    </div>
  )
}

export default App
