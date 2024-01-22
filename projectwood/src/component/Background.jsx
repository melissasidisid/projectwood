import React from "react"
import { useEffect, useState } from "react"
import Bnav from "./Bnav"

// Définir une constante pour le tableau d'images
const IMAGES = ["/im.png", "/image N1.png", "/img.png"]

// Créer un hook personnalisé pour gérer l'intervalle
function useInterval(callback, delay) {
  const savedCallback = React.useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

// Utiliser un nom de composant en majuscule
function Diplome() {
  const [imageIndex, setImageIndex] = useState(0)

  // Utiliser le hook personnalisé pour gérer l'intervalle
  useInterval(() => {
    setImageIndex((prevIndex) => (prevIndex + 1) % IMAGES.length)
  }, 3000)

  return (
    <>
      <div className="w-full-screen">
        <img
          className="w-full h-full"
          src={IMAGES[imageIndex]}
          alt="no picture"
        />
        <Bnav />
      </div>
    </>
  )
}

export default Diplome
