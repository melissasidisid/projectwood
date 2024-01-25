import React from "react"
import { useEffect, useState } from "react"

// Définir une constante pour le tableau d'images
const IMAGES = [
  "/unsalon.png",
  "/meuble.png",
  "/livingroom.png",
  "/kitchen2.png",
  "/kitchen.png",
]

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
  }, 1000)

  return (
    <>
      <div className="flex p-1 sm:p-4 md:w-1/2 md:h-2/5 mt-10">
        <img
          className="w-full h-full sm:rounded-3xl"
          style={{ width: "100%", borderRadius: "80px" }}
          src={IMAGES[imageIndex]}
          alt="no picture"
        />
      </div>
    </>
  )
}

export default Diplome
