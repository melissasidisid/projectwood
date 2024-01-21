import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function Bnav() {
  return (
    <div>
      {/* this navbar is only for the home page */}
      <ul
        // this allow us to maintain the navbar in the middle of the page
        className="nav nav-pills"
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: 'auto',

          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
        }}
      >
        {/* the navbar */}
        <li className="nav-item dropdown bg-transparent">
          <a
            className="nav-link dropdown-toggle text-dark "
            style={{ fontWeight: 'bold' }}
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            sociam medias
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                style={{ fontWeight: 'bold' }}
              >
                Another action
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                style={{ fontWeight: 'bold' }}
              >
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                className="dropdown-item"
                href="/Products"
                style={{ fontWeight: 'bold' }}
              >
                Our Products
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-dark"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            style={{ fontWeight: 'bold' }}
          >
            our products
          </a>
          
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-black"
            href="/Certificate"
            style={{ fontWeight: 'bold' }}
          >
            Diplomat
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-dark"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            style={{ fontWeight: 'bold' }}
          >
            know more
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Bnav
