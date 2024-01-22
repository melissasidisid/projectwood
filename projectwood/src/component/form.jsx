import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import Link from "next/link"
import Diplome from "./diplome"
function Form() {
  return (
    <>
      <div
        className="d-flex m-auto"
        style={{
          width: "80%",
          marginTop: "200px",
          border: "1px solid white",
          borderRadius: "40px",
          borderLeft: "none",
          borderRight: "none",
        }}
      >
        <Diplome />
        <div
          style={{
            width: "50%",
          }}
          className="rounded mt-3"
        >
          <h1
            className="mt-12 rounded"
            style={{
              width: "100%",
              border: "2px solid white",
              borderTop: "none",
            }}
          >
            About us
          </h1>
          <p>
            We are Woody, a company specialized in making and selling trendy and
            cozy wooden furniture. We offer you quality products, with a modern
            and authentic design, suitable for all interior styles. Whether you
            are looking for a table, a chair, a sofa, or a bookshelf, you will
            find what you need on our website. Our furniture is made of recycled
            wood, giving them a vintage and eco-friendly touch. You can also
            customize your order according to your preferences and needs. Woody
            is more than just a furniture store, it is a lifestyle. Join us and
            discover our cozy world.
          </p>
          <h1
            className="rounded"
            style={{
              width: "100%",
              border: "2px solid white",
              borderBottom: "none",
            }}
          >
            <Link
              href="/Products"
              className="text-black"
              style={{ textDecoration: "none", marginTop: "0px" }}
            >
              See Our products
            </Link>
          </h1>
        </div>
      </div>
    </>
  )
}

export default Form
