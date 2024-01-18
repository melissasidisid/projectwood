import React from 'react'

function Nav() {
  return (
    <div style={{backgroundColor:'black'}}>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a
            class="nav-link active text-white"
            style={{ fontWeight: 'bold' }}
            aria-current="page"
            href="/"
          >
            Home
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link text-white "
            style={{ fontWeight: 'bold' }}
            href="#"
          >
            Link
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link text-white"
            style={{ fontWeight: 'bold' }}
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
