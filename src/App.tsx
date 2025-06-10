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
          <div className="  bg-black/50 p-8  md:my-8 rounded-xl  relative h-screen overflow-hidden md:h-fit">
            {/* <div className="flex items-center justify-center">
              <img
                src="/icon.webp"
                className="absolute top-0 right-0 h-full w-full object-cover blur-2xl opacity-30"
              />
            </div> */}

            {/* <div className="mt-12 text-white flex flex-col gap-6">
              <h1 className=" uppercase text-center text-3xl">
                Donation and contribution
              </h1>
              <div className=" flex gap-4 justify-center">
                <a
                  href="https://paypal.me/stynbsws"
                  target="_blank"
                  className="py-2 flex px-4 gap-2 items-center bg-white/10 hover:bg-[#003087] text-xl rounded-md text-nowrap capitalize text-white font-medium w-fit"
                >
                  <FaPaypal size={20} />
                  <p>PayPal</p>
                </a>
                <a
                  href="https://paypal.me/stynbsws"
                  target="_blank"
                  className="py-2 flex px-4 gap-2 items-center hover:bg-[#FFDD00] hover:text-black bg-white/10 text-xl rounded-md text-nowrap capitalize text-white font-medium w-fit"
                >
                  <SiBuymeacoffee size={20} />
                  <p>BuyMeACoffee</p>
                </a>
                <a
                  href="https://paypal.me/stynbsws"
                  target="_blank"
                  className="py-2 flex px-4 gap-2 items-center hover:bg-[#FF5E5B] bg-white/10 text-xl rounded-md text-nowrap capitalize text-white font-medium w-fit"
                >
                  <SiKofi size={20} />
                  <p>Kofi</p>
                </a>
                <a
                  href="https://paypal.me/stynbsws"
                  target="_blank"
                  className="py-2 flex px-4 gap-2 items-center hover:bg-[#20336B] bg-white/10 text-xl rounded-md text-nowrap capitalize text-white font-medium w-fit"
                >
                  <SiPaytm size={20} />
                  <p>Paytm</p>
                </a>
              </div>
            </div> */}
            {/* <div className="mt-12 text-white flex flex-col gap-6 ">
              <h1 className=" uppercase text-center text-3xl">
                Connet to community
              </h1>
              <div className=" flex gap-4 justify-center">
                <a
                  href="https://paypal.me/stynbsws"
                  target="_blank"
                  className="py-2 flex px-4 gap-2 hover:bg-[#5865F2] items-center bg-white/10 text-xl rounded-md text-nowrap capitalize text-white font-medium w-fit"
                >
                  <FaDiscord size={20} />
                  <p>Discord</p>
                </a>
                <a
                  href="https://paypal.me/stynbsws"
                  target="_blank"
                  className="py-2 flex px-4 gap-2  hover:bg-[#FF4500]  items-center bg-white/10 text-xl rounded-md text-nowrap capitalize text-white font-medium w-fit"
                >
                  <FaReddit size={20} />
                  <p>Reddit</p>
                </a>
              </div>
            </div> */}
            <Navbar />
            <Seperator className="mt-12 mb-8 md:mb-12"/>
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
      className={`h-1  w-[90%] relative justify-self-center rounded-full bg-white/30 z-50 ${
        className ?? ""
      }`}
    ></div>
  );
}

function Products() {
  return (
    <div>
      <h1 className="uppercase text-center text-3xl">Products</h1>
      <div className="grid md:px-6 md:gap-4 min-[500px]:grid-cols-2 ">
        {/* <Product src="/kapda.webp" title="Vanity Fair Italy" />
        <Product src="/nela-kapda.webp" title="Vanity Fair Italy" /> */}
        <Product src="/chakri.webp"  />
        <Product src="/9.webp"  />
        <Product src="/16.webp"  />
        <Product src="/1.webp"  />
      
        {/* <Product src="/9.webp" title="Vanity Fair Italy" />
        <Product src="/9.webp" title="Vanity Fair Italy" /> */}
      </div>
    </div>
  );
}

function Product({ src, title }: { title?: string; src: string }) {
  return (
    <div className="flex flex-col p-12  md:aspect-auto  rounded-2xl items-center gap-8  hover:bg-white/20">
      <img
        src={src}
        className="md:size-[140px] aspect-square  rounded-2xl"
        alt={title}
      />
      {title && <h3 className="text-3xl md:text-xl">{title}</h3>}
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex items-center px-8 justify-between">
      <div>
        <img
          className="size-[100px] aspect-square object-cover rounded-full  !duration-0 !transition-none"
          src={"/icon.webp"}
        />
      </div>
      <div className="mt-4 flex flex-col  gap-4 items-center justify-center">
        <a
          href="https://wa.me/c/917701871656"
          target="_blank"
          className="py-2 w-full flex px-4 gap-2 bg-[#25D366] items-center justify-center hover:text-white text-xl rounded-full text-nowrap capitalize text-white font-medium md:w-fit z-50 scale-90"
        >
          <FaWhatsapp size={25} />
          <p>WhatsApp</p>
        </a>
        <a
          href="https://www.instagram.com/navkala_bsws/"
          target="_blank"
          className="py-2 w-full flex px-4 gap-2 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white p-4  items-center justify-center hover:text-white text-xl rounded-full text-nowrap capitalize  font-medium md:w-fit  z-50 scale-90"
        >
          <FaInstagram size={25} />
          <p>Instagram</p>
        </a>
      </div>
    </div>
  );
}
