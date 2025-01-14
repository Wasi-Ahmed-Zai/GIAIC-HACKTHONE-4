import { Banner } from "@/components/Design-Parts/Banner/Banner";
import style from "@/app/Products/page.module.css"
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
export default function Products() {
    return (
        <section>
            <div>
                <Banner
                    h1={"Product Details"}
                    span1={"Home "}
                    span2={".Pages"}
                    span3={".Product Details"}
                >
                </Banner>
            </div>
            <div className={style.Products}>
                <div className={`${style.Products_First_Container} wrapper mx-auto`}>
                    <div className={style.Products_images}>
                        <div className={style.Products_image_list}>
                            <div>
                                <img src="images/Home-images/60.png" alt="" />
                            </div>
                            <div>
                                <img src="images/Home-images/61.png" alt="" />
                            </div>
                            <div>
                                <img src="images/Home-images/62.png" alt="" />
                            </div>
                        </div>
                        <div className={style.Products_image_row}>
                            <img src="images/Home-images/63.png" alt="" />
                        </div>
                    </div>
                    <div className={style.Products_Text}>
                        <h1>Playwood arm chair</h1>
                        <span className="flex items-center text-[12px] gap-[5px] text-[#FFC416]">
                            <FaStar /> <FaStar /> <FaStar /> < FaStar /> <FaStar />
                            <span className="text-black  text-[14px]">
                                (22)
                            </span>
                        </span>
                        <span>
                            <span>$32.00</span>
                            <span>$32.00</span>
                        </span>
                        <span >
                            <span>Color</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris tellus porttitor purus, et volutpat sit.</span>
                        </span>
                        <span>
                            <span>Add To cart</span>
                            <span><FaRegHeart /></span>
                        </span>
                        <span>
                            <span>Categories:</span>
                            <span>Tags</span>
                            <span>
                                <span>Share</span>
                                <span>

                                </span>
                            </span>
                        </span>
                    </div>
                </div>
                <div className="w-full h-[650px] bg-[#F9F8FE]">
                    <div className={`${style.Products_Second_Container} wrapper py-[70px] mx-auto`}>
                        <div className={style.Products_Headings}>
                            <h2>Description</h2>
                            <h2>Additional Info</h2>
                            <h2>Reviews</h2>
                            <h2>Video</h2>
                        </div>
                        <div className={style.Products_Paragrapa}>
                            <h2>Varius tempor.</h2>
                            <p>
                                Aliquam dis vulputate vulputate integer sagittis.
                               Faucibus dolor ornare faucibus vel sed et eleifend
                               habitasse amet. Montes, mauris varius ac est bibendum.
                               <br />
                               Scelerisque a, risus ac ante. Velit consectetur neque, 
                               elit, aliquet. Non varius proin sed urna, egestas consequat 
                               laoreet diam tincidunt. Magna eget faucibus 
                               <br />
                               cras justo, tortor
                               sed donec tempus. Imperdiet consequat, quis diam arcu,
                               nulla lobortis justo netus dis. Eu in fringilla vulputate
                                nunc nec. Dui, massa viverr .
                                </p>
                        </div>
                        <div className={style.Products_Paragrapa}>
                            <h2>Varius tempor.</h2>
                            <p>
                                Aliquam dis vulputate vulputate integer sagittis.
                               Faucibus dolor ornare faucibus vel sed et eleifend
                               habitasse amet. Montes, mauris varius ac est bibendum.
                               <br />
                               Scelerisque a, risus ac ante. Velit consectetur neque, 
                               elit, aliquet. Non varius proin sed urna, egestas consequat 
                               laoreet diam tincidunt. Magna eget faucibus 
                               <br />
                               cras justo, tortor
                               sed donec tempus. Imperdiet consequat, quis diam arcu,
                               nulla lobortis justo netus dis. Eu in fringilla vulputate
                                nunc nec. Dui, massa viverr .
                                </p>
                        </div>

                    </div>
                </div>
                <div></div>
            </div>
            <div className="w-[900px] h-[90px] mx-auto mt-[80px]">
                <img src="images/Home-images/30.png" alt="" />
            </div>

        </section>
    )
}