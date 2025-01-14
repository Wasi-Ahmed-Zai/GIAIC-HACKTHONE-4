import { HiOutlineEnvelope  } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { RiUser3Line  } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
export const Navabar = () => {
    return (
        <div>
            <div className="bg-[#7E33E0] text-white w-full h-[44px]  ">
                <div className="wrapper h-full flex-center-between ">
                    <div className="Navbar-top-font  flex-center-between w-[30%]">
                        <span className="flex-center-between h-full gap-[20px] Navbar-top-font ">< HiOutlineEnvelope /> mhhasanul@gmail.com</span>
                        <span className="flex-center-between h-full gap-[20px] Navbar-top-font  ml-[80px]"><FiPhoneCall /> (12345)67890</span>
                    </div>


                    <div className="Navbar-top-font flex-center-between w-[30%] h-full">
                        <span><a href="" className="flex-center-center h-full gap-[5px]">English<IoIosArrowDown className="size-5" /> </a></span>
                        <span><a href="" className="flex-center-center h-full gap-[5px]">USD <IoIosArrowDown className="size-5" /></a></span>
                        <span><a href="" className="flex-center-center h-full gap-[5px]">Login <RiUser3Line  className="size-5"/> </a></span>
                        <span><a href="" className="flex-center-center h-full gap-[5px]">Wishlist <FaRegHeart/></a></span>
                        <span><a href=""><FiShoppingCart  className="size-6"/></a></span>
                    </div>

                </div>
            </div>
            <div className="wrapper border- flex-center-between h-[40px] mt-[19px]">
                <div className="w-[98px] h-[full]">
                    <h1 className="font-bold text-[34px]">Hekto</h1>
                </div>
                <div className="flex-center-between w-[482px] h-full list-none font-normal text-[#151875] ">
                    <li className="hover:text-[#FB2E86]"><a href="http://localhost:3000/">Home</a></li>
                    <li className="hover:text-[#FB2E86]"><a href="/Pages">Pages</a></li>
                    <li className="hover:text-[#FB2E86]"><a href="/Products">Products</a></li>
                    <li className="hover:text-[#FB2E86]"><a href="/Blog">Blog </a></li>
                    <li className="hover:text-[#FB2E86]"><a href="/Shop">Shop</a></li>
                    <li className="hover:text-[#FB2E86]"><a href="/Contact">Contact</a></li>
                </div>
                <div className="w-[317px] h-full border border-[#E7E6EF] flex-center-between ">
                    <input type="text" className=" w-[266px] h-full p-[10px] box-border text-[20px] outline-none" />
                    <button className="w-[51px] h-full flex-center-center bg-[#FB2E86] text-white">

                        <CiSearch className="size-6 font-extrabold" />
                    </button>
                </div>
            </div>
        </div>
    )
}
