import React from "react"
import Link from "next/link"

function Sample() {
  return (
    <>
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          textAlign: "center",
          backgroundColor: "#BA8C63",
        }}
      >
        <img
          src="/unsalon.png"
          style={{ width: "25%" }}
          alt="no picture"
          className="rounded"
        />
        <img
          src="/livingroom.png"
          style={{ width: "25%" }}
          alt="no picture"
          className="rounded"
        />
        <img
          src="/kitchen2.png"
          style={{ width: "25%" }}
          alt="no picture"
          className="rounded"
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <Link href="/Products" className="product-button">
          <button type="button" className="btn btn-secondary">
            see more
          </button>
        </Link>
      </div>
    </>
  )
}

export default Sample
