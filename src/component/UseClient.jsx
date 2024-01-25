"use client"
import { useEffect } from "react"

function UseClient() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, [])
  return null
}
export default UseClient
