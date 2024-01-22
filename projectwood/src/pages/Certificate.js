import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import Form from "@/component/form"
import Sample from "@/component/sample"
import Diplome from "@/component/diplome"
import Footer from "@/component/footer"
import Nav from "@/component/Nav"

function Product() {
  return (
    <>
      {/* calling the carousel */}

      <div style={{ backgroundColor: "#BA8C63", textAlign: "center" }}>
        {/* the logo image */}

        {/* rendering the pages */}
        <div>
          <Nav />

          <Diplome />
          <Sample />
          <Form />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Product
