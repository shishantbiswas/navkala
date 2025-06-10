import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <Analytics />
      <section className="relative **:transition-all duration-200 **:text-white">
        <div className=" bg-black w-[100vw] -z-10 top-0 right-0 h-[100vh] fixed  !duration-0 !transition-none">
          <img className="w-full blur-[2px] object-cover object-top opacity-20 h-[100vh] !duration-0 !transition-none"
            alt=""
            src={"/bg.webp"}
          />
        </div>
        <div className=" flex flex-col items-center justify-center">
          <div className="  bg-black/50 p-2 min-[500px]:p-4  min-[500px]:my-8 rounded-xl  relative min-h-screen md:h-fit">
            <Navbar />
            <Seperator className="my-5 md:mb-12 h-0.5 w-[85%]" />
            <Products />
          </div>
        </div>
      </section>
    </>
  );
}

function Seperator({ className }: { className?: string }) {
  return (
    <div
      className={`bg-white/30 relative justify-self-center rounded-full z-50 ${className ?? ""
        }`}
    ></div>
  );
}

function Products() {
  return (
    <div className="">
      <h1 className="uppercase text-center">Products</h1>
      <div className="grid md:px-6 md:gap-4 grid-cols-2 ">
        <Product src="/aashon.webp" />
        <Product src="/9.webp" />
        <Product src="/16.webp" />
        <Product src="/1.webp" />
      </div>
    </div>
  );
}

function Product({ src, title }: { title?: string; src: string }) {
  return (
    <div className="flex flex-col p-4 md:aspect-auto  rounded-2xl items-center gap-8 ">
      <img
        src={src}
        className="min-[500px]:size-[120px] sm:size-[150px] aspect-square  rounded-2xl"
        alt={title}
      />
      {title && <h3 className="text-3xl md:text-xl">{title}</h3>}
    </div>
  );
}

function Navbar() {
  return (
    <div className="my-4 flex items-center-safe px-8 justify-between">
      <div>
        <img
          className="size-[140px] aspect-square object-cover rounded-full  !duration-0 !transition-none"
          src={"/icon.webp"}
        />
      </div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="uppercase text-center">SHOP NOW</h1>
        <Seperator className="h-0.5 mt-0.5  w-[70%]"/>
        <div className="flex min-[500px]:flex-col mt-2 gap-2 items-center justify-center">
          <a
            href="https://wa.me/c/917701871656"
            target="_blank"
            className="py-2 w-full flex px-4 gap-2 bg-[#25D366] items-center justify-center hover:text-white text-sm rounded-full text-nowrap capitalize text-white font-medium md:w-fit z-50 scale-80 max-[500px]:aspect-square"
          >
            <FaWhatsapp size={25} />
            <p className="min-[500px]:block hidden ">WhatsApp</p>
          </a>
          <a
            href="https://www.instagram.com/navkala_bsws/"
            target="_blank"
            className="py-2 w-full flex px-4 gap-2 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white p-4  items-center justify-center hover:text-white text-sm rounded-full text-nowrap capitalize font-medium md:w-fit  z-50 scale-80 max-[500px]:aspect-square"
          >
            <FaInstagram size={25} />
            <p className="min-[500px]:block hidden">Instagram</p>
          </a>
        </div>
      </div>

    </div>
  );
}
