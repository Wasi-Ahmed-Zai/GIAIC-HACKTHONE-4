"Use client"
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaRegHeart, FaSearchPlus } from "react-icons/fa";
import style from "@/components/HomePage/Featured_Products/Featured_Products.module.css"
export const Featured_Products = () => {

  const Products = [
    {
      id: 1,
      img: "images/Home-images/3.png",
      title: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00"
    },
    {
      id: 2,
      img: "images/Home-images/4.png",
      title: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00"
    },
    {
      id: 3,
      img: "images/Home-images/5.png",
      title: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00"
    },
    {
      id: 4,
      img: "images/Home-images/6.png",
      title: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00"
    }
  ]

  return (
    <section className=" wrapper mx-auto py-16">
      {/* Heading */}
      <div className="Heading text-center mb-10">
        <h1>Featured Products</h1>
      </div>

      {/* Card */}

      <div className="wrapper grid lg:grid-cols-4  mx-auto ">
        {Products.map((items) => (
          <div key={items.id} className="w-[270px] h-[391px] rounded-[10px]  shadow-lg">
            <div className={`${style.cart_t } w-full h-[240px] rounded-t-[10px] bg-[#F6F7FB] `}>
              <div className={style.icons}>
                <PiShoppingCartSimpleBold className={style.icon}/>
                <FaRegHeart className={style.icon}/>
                <FaSearchPlus className={style.icon}/>
              </div>
              <div className="h-full flex-center-center flex-col">
                <img src={items.img}
                  alt={items.title}
                  className="w-[150px] h-[150px]  object-contain"
                />
                <div className={style.detail}>
                <span>View Detail</span>
                </div>
              </div>
            </div>
            <div className={`${style.card_b }  w-full h-[151px] rounded-b-[10px] mx-auto text-center
             py-4 leading-10 hover:bg-[#00009D] `}>
              <h1 className="font-bold text-[#FB2E86] text-[18px]">{items.title}</h1>
              <div className="text-center w-[20%] mx-auto flex items-center justify-between">
                <span className="w-[14px] h-[4px] rounded-[10px] bg-[#05E6B7]"></span>
                <span className="w-[14px] h-[4px] rounded-[10px] bg-[#F701A8]"></span>
                <span className={`${style.spann} w-[14px] h-[4px] rounded-[10px] bg-[#00009D]`}></span>
              </div>
              <div className={style.p}>
                <p >{items.code}</p>
                <p >{items.price}</p>
              </div>
            </div>
          </div>

        ))}
      </div>

    </section>
  )
}
