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
          display: "flex",
          flexWrap: "wrap",
          marginTop: "200px",
          border: "1px solid white",
          borderRadius: "40px",
          borderLeft: "none",
          justifyContent: "center",

          borderRight: "none",
        }}
      >
        <Diplome />
        <div className="flex flex-col md:w-1/2 space-y-4 md:space-y-6 ">
          <div className="py-3 text-4xl text-center rounded-b-3xl border-b-2 border-x-2 border-solid border-white-500">
            About
          </div>
          <p className="text-center text-s">
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
          <div className="py-3 text-4xl text-center rounded-t-3xl border-t-2 border-x-2 border-solid border-white-500">
            <Link href="/Certificate" className="text-black no-underline">
              Our Diplomes
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form
