import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Form from '@/component/form'
import Sample from '@/component/sample'
import Carousel from '@/component/carousel'
import Diplome from '@/component/diplome'

function Product() {
  return (
    <>
      {/* calling the carousel */}
      <Carousel />

      <div style={{backgroundColor:'black'}}>
        {/* the logo image */}
        <img
          src="/logo.png"
          style={{
            display: 'block',
            marginLeft: 'auto',
            width: '100%',
            height: '200px',
          }}
          alt="no picture"
        />
        {/* rendering the pages */}
        <div className='dark'>
          <Diplome />

          <Sample />
          <Form />
        </div>
      </div>
    </>
  )
}

export default Product
