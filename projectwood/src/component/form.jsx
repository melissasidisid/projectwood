import React from "react"
import "bootstrap/dist/css/bootstrap.css"

function Form() {
  return (
    <>
      <div className="d-flex">
        <form
          action="https://formsubmit.co/your@email.com"
          method="POST"
          style={{
            marginTop: "40px",
            backgroundColor: " #BA8C63",
            textAlign: "center",
            width: "50%",
          }}
        >
          <div
            className="mb-3"
            style={{ marginRight: "10px", marginLeft: "10px" }}
          >
            <label for="Input" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="Input"
              placeholder="name@example.com"
            />
          </div>
          <div
            className="mb-3"
            style={{ marginRight: "10px", marginLeft: "10px" }}
          >
            <label className="form-label">want to hear from you!</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="we are hearing you"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-secondary">
            Send
          </button>
        </form>
        <div
          style={{
            width: "50%",
            border: "3px solid white",
            borderBottom: "none",
          }}
          className="rounded mt-3"
        >
          <h1 className="mt-12">About us</h1>
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
        </div>
      </div>
    </>
  )
}

export default Form
