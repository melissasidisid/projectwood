import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import Form from "@/component/form"
import Sample from "@/component/sample"
import Carousel from "@/component/carousel"
import Diplome from "@/component/diplome"

function Product() {
  return (
    <>
      {/* calling the carousel */}

      <div style={{ backgroundColor: "#BA8C63", textAlign: "center" }}>
        {/* the logo image */}

        {/* rendering the pages */}
        <div>
          <Diplome />
          <Sample />
          <Form />
        </div>
      </div>
    </>
  )
}

export default Product
