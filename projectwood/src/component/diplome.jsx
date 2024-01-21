"use client"
import React, { useState } from "react"
import Nav from "./Nav"
import Image from "next/image"
import "bootstrap/dist/css/bootstrap.css"

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
          <Image
            width={400}
            height={400}
            src="/diplome1.png"
            alt="no picture"
            className="rounded hover:rounded-full"
          />
          <button data-toggle="modal" data-target="#myModal">
            view
          </button>
          {/* <!-- Modal --> */}
          <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
              {/* <!-- Modal content--> */}
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                  <h4 class="modal-title">Modal Header</h4>
                </div>
                <div class="modal-body">
                  <p>Some text in the modal.</p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

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

          <Image
            width={400}
            height={400}
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
          <Image
            width={400}
            height={400}
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
          <Image
            width={400}
            height={400}
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
          <Image
            width={400}
            height={400}
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
          <Image
            width={400}
            height={400}
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
