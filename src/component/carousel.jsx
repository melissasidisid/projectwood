import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'


function carousel() {
  return (
    <>
    {/* the carousel that will be rendered in the diplome page */}

      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/kitchen.png"
              className="d-block w-100 "
              style={{ height: '200px' }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="livingroom.png"
              className="d-block w-100"
              style={{ height: '200px' }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/meuble.png"
              className="d-block w-100"
              style={{ height: '200px' }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default carousel
