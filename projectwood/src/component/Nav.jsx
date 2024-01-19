import React from "react"

function Nav() {
  return (
    <div style={{ backgroundColor: "black", height: "100px" }}>
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
        <li class="nav-item">
          <a
            class="nav-link text-white "
            style={{ fontWeight: "bold" }}
            href="#"
          >
            Link
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link text-white"
            style={{ fontWeight: "bold" }}
            href="#"
          >
            Link
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Nav
