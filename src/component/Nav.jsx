import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import Link from "next/link"

function Nav() {
  return (
    <div className="bg-[#BA8C63]">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <Link
            className="nav-link text-white "
            style={{ fontWeight: "bold" }}
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-light"
            href="/Certificate"
            style={{ fontWeight: "bold" }}
          >
            Diplomat
          </Link>
        </li>
        <li class="nav-item">
          <Link
            class="nav-link text-white"
            style={{ fontWeight: "bold" }}
            href="/Products"
          >
            Products
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
