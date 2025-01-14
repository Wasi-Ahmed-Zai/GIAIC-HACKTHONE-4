import style from "@/app/Shop/page.module.css"
import { Banner } from "@/components/Design-Parts/Banner/Banner"
import Sort_By from "@/components/Design-Parts/Sort_By/Sort_By"
import { View_list } from "@/components/Design-Parts/View-list/View_list"
import { FaCheck } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

export default function page() {
    const SidbarPrice = "$26.00";
    const SidbarOldPrice = "$52.00";
    const Sidbar = [
        { id: 1, img: "images/Home-images/46.png", SidbarTitle: "Dictum morbi", SidbarOldPrice: SidbarOldPrice, SidbarPrice: SidbarPrice, },
        { id: 2, img: "images/Home-images/47.png", SidbarTitle: "Sodales sit", SidbarOldPrice: SidbarOldPrice, SidbarPrice: SidbarPrice, },
        { id: 3, img: "images/Home-images/48.png", SidbarTitle: "Nibh varius", SidbarOldPrice: SidbarOldPrice, SidbarPrice: SidbarPrice, },
        { id: 4, img: "images/Home-images/49.png", SidbarTitle: "Mauris quis", SidbarOldPrice: SidbarOldPrice, SidbarPrice: SidbarPrice, },
        { id: 5, img: "images/Home-images/51.png", SidbarTitle: "Morbi sagittis", SidbarOldPrice: SidbarOldPrice, SidbarPrice: SidbarPrice, },
        { id: 6, img: "images/Home-images/52.png", SidbarTitle: "Ultricies venenatis", SidbarOldPrice: SidbarOldPrice, SidbarPrice: SidbarPrice, },
        { id: 7, img: "images/Home-images/53.png", SidbarTitle: "Scelerisque dignissim", SidbarOldPrice: SidbarOldPrice, SidbarPrice: SidbarPrice, },
    ]
    return (
        <section>
            <Banner
                h1={"Shop Left Sidebar"}
                span1={"Home"}
                span2={".pages"}
                span3={".Shop Left Sidebar"}>

            </Banner>
            <Sort_By />
            <div className="wrapper flex justify-between">
                <div className={style.Sidbar}>
                    <div className={style.Sidbar_One}>
                        <h3>Product Brand</h3>
                        <div className={style.Sidbar_Text}>
                            <span>
                                <span>
                                    <FaCheck />
                                </span>
                                <span>
                                    <li>Coaster Furniture</li>

                                </span>
                            </span>
                            <span>
                                <span>
                                    <FaCheck />
                                </span>
                                <span>
                                    <li>Fusion Dot High Fashion</li>

                                </span>
                            </span>
                            <span>
                                <span>
                                    <FaCheck />
                                </span>
                                <span>
                                    <li>Unique Furnitture Restor</li>

                                </span>
                            </span>
                            <span>
                                <span>
                                    <FaCheck />
                                </span>
                                <span>
                                    <li>Dream Furnitture Flipping</li>
                                </span>
                            </span>
                            <span>
                                <span>
                                    <FaCheck />
                                </span>
                                <span>
                                    <li>Young Repurposed</li>

                                </span>
                            </span>
                            <span>
                                <span>
                                    <FaCheck />
                                </span>
                                <span>
                                    <li>Green DIY furniture</li>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={style.Sidbar_Two}>
                        <h3>Discount Offer</h3>
                        <div className={style.Sidbar_Text}>
                            <span>
                                <span>
                                    <FaCheck />

                                </span>
                                <span>
                                    <li>20% Cashback</li>

                                </span>
                            </span>
                            <span>
                                <span>
                                    <FaCheck />

                                </span>
                                <span>
                                    <li>5% Cashback Offer</li>

                                </span>
                            </span>
                            <span>
                                <span>
                                    <FaCheck />

                                </span>
                                <span>
                                    <li>25% Discount Offer</li>

                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={style.Sidbar_Three}>
                        <h3>Rating Item</h3>
                        <div className={style.Sidbar_Text}>
                            <span>
                                <span>
                                    <FaCheck />
                                </span>
                                <span className="flex items-center   gap-[5px] text-[#FFC416]">
                                    <FaStar /> <FaStar /> <FaStar /> < FaStar />
                                    <FaStar className="text-[#B2B2B2] " />
                                    <span className="text-black mb-[8px] text-[15px]">
                                        (2341)
                                    </span>
                                </span>
                            </span>

                            <span>
                                <span>
                                    <FaCheck />
                                </span>
                                <span className="flex items-center  gap-[5px] text-[#FFC416]">
                                    <FaStar /> <FaStar /> <FaStar />
                                    <FaStar className="text-[#B2B2B2]" />
                                    <FaStar className="text-[#B2B2B2]" />
                                    <span className="text-black mb-[8px] text-[15px]">

                                        (1726)
                                    </span>
                                </span>
                            </span>

                            <span>
                                <span>
                                    <FaCheck />
                                </span>
                                <span className="flex items-center  gap-[5px] text-[#FFC416]">
                                    <FaStar /> <FaStar />
                                    <FaStar className="text-[#B2B2B2]" />
                                    <FaStar className="text-[#B2B2B2]" />
                                    <FaStar className="text-[#B2B2B2]" />
                                    <span className="text-black mb-[8px] text-[15px]">
                                        (258)
                                    </span>
                                </span>
                            </span>

                            <span>
                                <span>
                                    <FaCheck />
                                </span>
                                <span className="flex items-center  gap-[5px] text-[#FFC416]">
                                    <FaStar /> <FaStar />
                                    <FaStar className="text-[#B2B2B2]" />
                                    <FaStar className="text-[#B2B2B2]" />
                                    <FaStar className="text-[#B2B2B2]" />
                                    <span className="text-black mb-[8px] text-[15px]">
                                        (25)
                                    </span>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={style.Sidbar_Four}>
                        <h3>Categories</h3>
                        <div className={style.Sidbar_Text}>
                            <span>
                                <span>
                                    <FaCheck />
                                </span>
                                <span>
                                    <li>Prestashop</li>

                                </span>
                            </span>
                            <span>
                                <span>
                                    <FaCheck />

                                </span>
                                <span>
                                    <li>Magento</li>

                                </span>
                            </span>
                            <span>
                                <span>
                                    <FaCheck />

                                </span>
                                <span>
                                    <li>Bigcommerce</li>

                                </span>
                            </span>
                            <span>
                                <span>
                                    <FaCheck />

                                </span>
                                <span>
                                    <li>osCommerce</li>

                                </span>
                            </span>
                            <span>
                                <span>
                                    <FaCheck />

                                </span>
                                <span>
                                    <li>3dcart</li>

                                </span>
                            </span>
                            <span>
                                <span>
                                    <FaCheck />

                                </span>
                                <span>
                                    <li>Bags</li>

                                </span>
                            </span>
                            <span>
                                <span>
                                    <FaCheck className="hidden" />
                                </span>
                                <span>
                                    <li>Accessories</li>

                                </span>
                            </span>
                            <span>
                                <span>
                                    <FaCheck className="hidden" />
                                </span>
                                <span>
                                    <li>Jewellery</li>

                                </span>
                            </span>
                            <span>
                                <span>
                                    <FaCheck />

                                </span>
                                <span>
                                    <li>Watches</li>

                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={style.Sidbar_Five}>
                        <h3>Price Filter</h3>
                        <div className={style.Sidbar_Text}>
                            <span>
                                <span>

                                    <FaCheck />
                                </span>
                                <span>
                                    <li>$0.00 - $150.00</li>
                                </span>
                            </span>
                            <span>
                                <span>
                                    <FaCheck />
                                </span>
                                <span>
                                    <li>$150.00 - $350.00</li>
                                </span>
                            </span>
                            <span>
                                <span>
                                    <FaCheck />
                                </span>
                                <span>
                                    <li>$150.00 - $504.00</li>
                                </span>
                            </span>
                            <span>
                                <span>
                                    <FaCheck />
                                </span>
                                <span>
                                    <li>$450.00 +</li>
                                </span>
                            </span>
                            <span>
                                <input type="text" placeholder="$10.00 - 20000$" />

                                <IoSearchOutline />

                            </span>
                        </div>
                    </div>
                    <div className={style.Sidbar_Six}>
                        <h3>Filter By Color</h3>
                        <div className={style.Sidbar_Text}>
                            <div>
                                <span>
                                    <span className={`${style.circle} bg-[#5E37FF]`}></span>
                                    <li>Blue</li>
                                </span>
                                <span>
                                    <span className={`${style.circle} bg-[#33D221]`}></span>
                                    <li>Green</li>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <span className={`${style.circle} bg-[#FF9437]`}></span>
                                    <li>Orange</li>
                                </span>
                                <span>
                                    <span className={`${style.circle} bg-[#E248FF]`}></span>
                                    <li>Purple</li>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <span className={`${style.circle} bg-[#FFBF95]`}></span>
                                    <li>Brown</li>
                                </span>
                                <span>
                                    <span className={`${style.circle} bg-[#26CBFF]`}></span>
                                    <li>Sky</li>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        Sidbar.map((Sidbar) => (
                            <div key={Sidbar.id}>
                                <View_list
                                    h2={Sidbar.SidbarTitle}
                                    span1={Sidbar.SidbarPrice}
                                    span2={Sidbar.SidbarOldPrice}
                                    img={Sidbar.img}
                                >
                                </View_list>

                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-[900px] h-[90px] mx-auto mt-[80px]">
                <img src="images/Home-images/30.png" alt="" />
            </div>
        </section>
    )
}