import React from "react"
import "bootstrap/dist/css/bootstrap.css"

function Bnav() {
  return (
    <div>
      {/* this navbar is only for the home page */}
      <ul
        // this allow us to maintain the navbar in the middle of the page
        className="nav nav-pills"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "auto",

          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
        }}
      >
        {/* the navbar */}
        <div>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a
                className="nav-link text-white "
                style={{ fontWeight: "bold" }}
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light"
                href="/Certificate"
                style={{ fontWeight: "bold" }}
              >
                Diplomat
              </a>
            </li>
            <li class="nav-item">
              <a
                className="nav-link text-white"
                style={{ fontWeight: "bold" }}
                href="/Products"
              >
                Products
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  )
}

export default Bnav
