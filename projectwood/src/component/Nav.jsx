import React from "react"
import "bootstrap/dist/css/bootstrap.css"

function Nav() {
  return (
    <div className="bg-[#BA8C63]">
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
            class="nav-link text-white"
            style={{ fontWeight: "bold" }}
            href="/Products"
          >
            Products
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Nav
