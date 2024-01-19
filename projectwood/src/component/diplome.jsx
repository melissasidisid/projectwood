import React from "react"
import Nav from "./Nav"

function Diplomes() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      {/* the header part */}
      <div
        className="content"
        style={{
          backgroundImage: "linear-gradient( black, #BA8C63)",
          width: "100%",
          marginTop: "-100px",
        }}
      >
        <span
          style={{
            marginTop: "100px",
            textAlign: "center",
            marginBottom: "200px",
          }}
        >
          <h1
            style={{ textAlign: "center", color: "white", marginTop: "100px" }}
          >
            Arabien Paoneer Factory for industry
          </h1>
          <h1
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            مصنع العربية رلرائد للصناعة
          </h1>
          <h2
            className="text-white"
            style={{ marginTop: "100px", marginBottom: "100px" }}
          >
            {/* diplomat part */}
            Our Diplomat
          </h2>
        </span>
        <div
          className="container"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <img
            src="/diplome1.png"
            style={{ width: "40%" }}
            alt="no picture"
            className="rounded"
          />
          <p style={{ marginTop: "50px", color: "white" }}>
            this certification prouves our membership in E.service and el
            charkia
          </p>
        </div>
        <div
          className="container"
          style={{
            width: "100%",
            height: "fit-content",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ marginTop: "50px", color: "white" }}>
            ministery of commerce: this document prouves that we have recieved
            our certification from the ministery{" "}
          </p>

          <img
            src="/diplome2.png"
            style={{ width: "40%" }}
            alt="no picture"
            className="rounded"
          />
        </div>
        <div
          className="container"
          style={{
            width: "100%",
            height: "fit-content",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            src="/diplome3.png"
            style={{ width: "40%" }}
            alt="no picture "
            className="rounded"
          />
          <p style={{ marginTop: "50px", color: "white" }}>
            QR CODE: this is our QR code{" "}
          </p>
        </div>
        <div
          className="container"
          style={{
            width: "100%",
            height: "fit-content",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ marginTop: "100px", color: "white" }}>
            generale authority of zakat and Tax: rhis document prouves that we
            paye our taxes and we give our zakat
          </p>
          <img
            src="/diplome4.png"
            style={{ width: "40%" }}
            alt="no picture"
            className="rounded"
          />
        </div>
        <div
          className="container"
          style={{
            width: "100%",
            height: "fit-content",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            src="/diplome6.png"
            style={{ width: "40%" }}
            alt="no picture"
            className="rounded"
          />
          <p style={{ marginTop: "100px", color: "white" }}>
            saoudian arabia certification
          </p>
        </div>
        <div
          className="container"
          style={{
            width: "100%",
            height: "fit-content",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ marginTop: "100px", color: "white" }}>certification</p>
          <img
            src="/diplome7.png"
            style={{ width: "40%", marginBottom: "100px" }}
            alt="no picture"
            className="rounded"
          />
        </div>
        <span>
          {/* introduction to the product sample */}
          <h1 style={{ textAlign: "center" }}>Our Product</h1>
        </span>
      </div>
    </>
  )
}

export default Diplomes
