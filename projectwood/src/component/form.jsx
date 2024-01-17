import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function Form() {
  return (
    <>
      <form
        action="https://formsubmit.co/your@email.com"
        method="POST"
        style={{ marginTop: '40px', backgroundColor: ' #BA8C63' }}
      >
        <div className="mb-3">
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
        <div className="mb-3">
          <label className="form-label">weare hearing you!</label>
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
