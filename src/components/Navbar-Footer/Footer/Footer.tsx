import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import style from "@/components/Navbar-Footer/Footer/Footer.module.css"
export const Footer = () => {
    return (
        <footer className={style.Footer}>
            <div className="wrapper mx-auto">
                <div className={style.Footer_Top}>
                    <div className={style.Footer_Top_first}>
                        <h1 className="font-bold text-[44px]">Hekto</h1>
                        <div className={style.Footer_Top_first_Search}>
                            <input type="text" placeholder="Enter Email Address" />
                            <button>Sign Up</button>
                        </div>
                        <div className={style.Footer_Top_first_Text}>
                            <span>Contact Info</span>
                            <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                        </div>
                    </div>
                    <div className={style.Footer_Top_Text}>
                        <h2>Catagories</h2>
                        <li>Laptops & Computers</li>
                        <li>Cameras & Photography</li>
                        <li>Smart Phones & Tablets</li>
                        <li>Video Games & Consoles</li>
                        <li>Waterproof Headphones</li>
                    </div>
                    <div className={style.Footer_Top_Text}>
                        <h2>Customer Care</h2>
                        <li>My Account</li>
                        <li>Discount</li>
                        <li>Returns</li>
                        <li>Orders History</li>
                        <li>Order Tracking</li>
                    </div>
                    <div className={style.Footer_Top_Text}>
                        <h2>Pages</h2>
                        <li>Blog</li>
                        <li>Browse the Shop</li>
                        <li>Pre-Built Pages</li>
                        <li>Visual Composer Elements</li>
                        <li>WooCommerce Pages</li>
                    </div>
                </div>
            </div>
            <div className={style.Footer_Bottom}>
                <div className="w-[1177px] mx-auto flex-center-between ">

                    <div className={style.Footer_Bottom_One}>
                           <span>© Webecy - All Rights Reserved</span>
                    </div>
                    <div className={style.Footer_Bottom_Two}>
                        <span><RiFacebookCircleFill/></span>
                        <img src="images/icons/7.png" alt="" />
                        <span> <AiFillTwitterCircle/></span>
                    </div>
                </div>
            </div>

        </footer>
    )
}
