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
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          <img src="/diplome1.png" style={{ width: "40%" }} alt="no picture" />
          <p style={{ marginTop: "50px", color: "white" }}>
            membership certification{" "}
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
            ministery of commerce{" "}
          </p>
          <img src="/diplome2.png" style={{ width: "40%" }} alt="no picture" />
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
          <img src="/diplome3.png" style={{ width: "40%" }} alt="no picture" />
          <p style={{ marginTop: "50px", color: "white" }}>QR CODE</p>
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
            generale authority of zakat and Tax
          </p>
          <img src="/diplome4.png" style={{ width: "40%" }} alt="no picture" />
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
          <img src="/diplome6.png" style={{ width: "40%" }} alt="no picture" />
          <p style={{ marginTop: "100px", color: "white" }}>
            saoudian certification{" "}
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
