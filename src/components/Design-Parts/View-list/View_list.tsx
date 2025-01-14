"use client"
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaRegHeart, FaSearchPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import style from "@/components/Design-Parts/View-list/View_list.module.css"
interface BannerProps {
  h2: string;
  span1: string;
  span2: string;
  img: string;
}

export const View_list = ({h2, img, span1, span2} : BannerProps) => {
  return (
    <div className="wrapper ">
      <div>
      <div className={style.View}>
        <div className={style.View_image}>
          <img src={img} alt={h2} />
        </div>
        <div className={style.View_Text}>
          <div className={style.View_Title}>
            <h2>{h2}</h2>
            <div className={style.Circle}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={style.View_Price_Riview}>
            <div className={style.Price}>
              <span>{span1}</span>
              <span>{span2}</span>
            </div>
            <div className="flex gap-[5px] text-[#FFC416]">
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar className="text-[#B2B2B2]"/>
              
            </div>
          </div>
          <div className={style.View_Text_Icons}>
            <p>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Magna  in est<br />iscing in
              phasellus non in justo.</p>
            <div className={style.icons}>
              <span>
                <PiShoppingCartSimpleBold />
              </span>
              <span>
                <FaSearchPlus />
              </span>
              <span>
                <FaRegHeart />
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

