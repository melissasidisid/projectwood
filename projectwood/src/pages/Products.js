import React from "react"
import { useState, useEffect } from "react"
import Product from "../component/product"
export default function Products() {
  const [imageIndex, setImageIndex] = useState(0)
  const images = [
    "/unsalon.png",
    "/meuble.png",
    "/livingroom.png",
    "/kitchen2.png",
    "/kitchen.png",
  ]
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 1000)
    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, [])
  return (
    <div className="bg-[#BA8C63]">
      <div className="mx-10 xl:mx-20 flex-col">
        <div className="py-3 text-4xl text-center rounded-b-3xl border-b-2 border-x-2 border-solid border-red-500">
          OUR PRODUCTS
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          <Product
            img={"/unsalon.png"}
            title={"Salon"}
            date={"12-12-2033"}
            desc={
              "Enhance your salon space with our meticulously crafted wooden furniture. From sleek coffee tables to cozy lounge chairs, our salon collection offers a perfect blend of comfort and style. Immerse yourself in the warmth of natural wood, creating a welcoming and inviting atmosphere for gatherings and relaxation."
            }
          />
          <Product
            img="/meuble.png"
            title="Meuble"
            date={"12-12-2033"}
            desc={
              "Explore our exclusive meubles collection, where functionality meets aesthetic appeal. Each piece is a testament to the artistry of wood craftsmanship, bringing a touch of sophistication to your living spaces. From chic bookshelves to versatile storage solutions, our meubles seamlessly integrate into your home, offering both practicality and design."
            }
          />
          <Product
            img="/livingroom.png"
            title="Livin groom"
            date={"12-12-2033"}
            desc={
              "Elevate your living room with our handcrafted wooden accents, designed to transform ordinary spaces into extraordinary ones. Embrace the beauty of nature with our unique coffee tables, sideboards, and decorative shelves. Imbue your living room with a sense of warmth and character that only high-quality wood products can provide."
            }
          />
          <Product
            img="/kitchen2.png"
            title="kitchen"
            date={"12-12-2033"}
            desc={
              "Revolutionize your kitchen aesthetics with our range of wooden essentials. From elegant dining tables to functional storage solutions, our kitchen collection combines style and utility. Experience the joy of cooking and dining in a space adorned with the timeless beauty of wood, creating a harmonious blend of functionality and visual appeal."
            }
          />
          <Product
            img="/kitchen.png"
            title="kitchen"
            date={"12-12-2033"}
            desc={
              "Revolutionize your kitchen aesthetics with our range of wooden essentials. From elegant dining tables to functional storage solutions, our kitchen collection combines style and utility. Experience the joy of cooking and dining in a space adorned with the timeless beauty of wood, creating a harmonious blend of functionality and visual appeal."
            }
          />
        </div>
        <div className="py-3 text-4xl text-center rounded-t-3xl border-t-2 border-x-2 border-solid border-red-500">
          CONTACT US
        </div>
      </div>

      {/**About */}
      <div className="flex flex-col md:flex-row mx-10 xl:mx-20 space-x-0 md:space-x-6 space-y-2 md:space-y-0 items-center justify-center">
        <div className="flex p-1 sm:p-4 md:w-1/2 md:h-2/5">
          <img
            className="w-full h-full sm:rounded-3xl"
            src={images[imageIndex]}
          />
        </div>
        <div className="flex flex-col md:w-1/2 space-y-4 md:space-y-6 ">
          <div className="py-3 text-4xl text-center rounded-b-3xl border-b-2 border-x-2 border-solid border-red-500">
            About
          </div>
          <p className="text-center text-s ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            inventore consequuntur quae corporis, ipsam iusto dolores, debitis
            quos officiis cupiditate quisquam, error dolor explicabo non
            incidunt rem voluptas aperiam ullam?
          </p>
          <div className="py-3 text-4xl text-center rounded-t-3xl border-t-2 border-x-2 border-solid border-red-500">
            Learn more
          </div>
        </div>
      </div>

      {/**footer */}
      <div className="px-4 sm:px-10 py-5 divide-y-2 divide-red-500 bg-[#002545] bg-opacity-20 text-white">
        <div className=" grid grid-cols-2 space-y-4 sm:grid-cols-3 lg:grid-cols-4 text-xs sm:text-s lg:text-xl divide-x-2 divide-red-500">
          <div className="  flex items-center justify-center space-x-1 sm:space-x-4 ">
            {" "}
            <div className="w-5 h-5 md:w-10 md:h-10 flex">
              <img className="w-full h-full" src="/footer/mail.svg" />
            </div>{" "}
            <div className="flex">woods@gmail.com</div>
          </div>
          <div className="  flex items-center justify-center space-x-1 sm:space-x-4 ">
            {" "}
            <div className="w-5 h-5 md:w-10 md:h-10 flex">
              <img className="w-full h-full" src="/footer/location.svg" />
            </div>{" "}
            <p className="flex"> Algiers, Algeria</p>
          </div>
          <div className="  flex items-center justify-center space-x-1 sm:space-x-4 ">
            {" "}
            <div className="w-5 h-5 md:w-10 md:h-10 flex">
              <img className="w-full h-full" src="/footer/phone.svg" />
            </div>{" "}
            <p className="flex"></p>
          </div>
          <div className="  flex items-center justify-center space-x-1 sm:space-x-4 ">
            {" "}
            <div className="w-5 h-5 md:w-10 md:h-10 flex">
              <img className="w-full h-full" src="/footer/calendar.svg" />
            </div>{" "}
            <div className="flex">Mon - Sat : 8:00 - 20:00</div>
          </div>
        </div>

        <div className=" p-4 border-x-2 border-red-500 flex items-center justify-center space-x-10">
          <div className="w-6 h-6 md:w-10 md:h-10 flex ">
            <img className="w-full h-full" src="/footer/facebook.svg" />
          </div>
          <div className="w-6 h-6 md:w-10 md:h-10 flex ">
            <img className="w-full h-full" src="/footer/linkedin.svg" />
          </div>
          <div className="w-6 h-6 md:w-10 md:h-10 flex ">
            <img className="w-full h-full" src="/footer/youtube.svg" />
          </div>
        </div>
      </div>
    </div>
  )
}
