"Use client"
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaRegHeart, FaSearchPlus } from "react-icons/fa";
import style from "@/components/HomePage/Leatest Products/Leatest_Products.module.css"

export const Leatest_Products = () => {
    const Latest_Products = [
        {
            id: 1,
            img: "images/Home-images/7.png",
            title: "Comfort Handy Craft",
            oldprice: "$42.00",
            price: "$65.00"
        },
        {
            id: 2,
            img: "images/Home-images/8.png",
            title: "Comfort Handy Craft",
            oldprice: "$42.00",
            price: "$65.00"
        },
        {
            id: 3,
            img: "images/Home-images/9.png",
            title: "Comfort Handy Craft",
            oldprice: "$42.00",
            price: "$65.00"
        },
        {
            id: 4,
            img: "images/Home-images/10.png",
            title: "Comfort Handy Craft",
            oldprice: "$42.00",
            price: "$65.00"
        },
        {
            id: 5,
            img: "images/Home-images/11.png",
            title: "Comfort Handy Craft",
            oldprice: "$42.00",
            price: "$65.00"
        },
        {
            id: 6,
            img: "images/Home-images/12.png",
            title: "Comfort Handy Craft",
            oldprice: "$42.00",
            price: "$65.00"
        },
    ]
    return (
        <section>
            {/* Heading */}
            <div className=" text-center mb-10">
                <h1 className="Heading">Latest Products</h1>
                <div className="w-[500px] mx-auto flex-center-between mt-[20px] text-[18px] font-normal text-[#151875]">
                    <span className="underline text-[]">New Arrival</span>
                    <span>Best Seller</span>
                    <span>Featured</span>
                    <span>Special Offer</span>
                </div>
            </div>

            {/* Card */}
            <div className='wrapper grid grid-cols-3 '>
                {Latest_Products.map((iteams) => (
                    <div key={iteams.id} className={`${style.Latest_card}  shadow-lg` }>

                        <div className={style.Latest_card_Top}>
                            <div className={style.icons}>
                                <span>
                                    <PiShoppingCartSimpleBold />
                                </span>
                                <span>
                                    <FaRegHeart />

                                </span>
                                <span>
                                    <FaSearchPlus />

                                </span>
                            </div>
                            <div >
                                <img src={iteams.img}
                                    alt={iteams.title}
                                    className="w-[200px] h-[200px] object-contain" />
                            </div>
                        </div>
                        <div className={style.Latest_card_Bottom}>
                            <h3>{iteams.title}</h3>
                            <div className={style.Latest_card_Bottom_Price}>
                                <p>{iteams.oldprice}</p>
                                <span>{iteams.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
