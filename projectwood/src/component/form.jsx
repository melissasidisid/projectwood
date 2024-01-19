import React from "react"
import "bootstrap/dist/css/bootstrap.css"

function Form() {
  return (
    <>
      <form
        action="https://formsubmit.co/your@email.com"
        method="POST"
        style={{
          marginTop: "40px",
          backgroundColor: " #BA8C63",
          textAlign: "center",
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
    </>
  )
}

export default Form
