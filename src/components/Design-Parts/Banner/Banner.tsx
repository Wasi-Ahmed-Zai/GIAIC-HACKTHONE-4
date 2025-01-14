import style from "@/components/Design-Parts/Banner/Banner.module.css"
import { ReactNode } from "react"
interface BannerProps {
    h1:  string;
    span1: string;
    span2: string;
    span3: string;
  }
  
export const Banner = ({h1, span1, span2, span3 } : BannerProps) => {
  return (
    
    <div>
        <div className={style.Banner}>
            <div className="wrapper">
                <div className={style.Banner_Text}>
                    <h1>{h1}</h1>
                    <div className={style.Banner_Bottom_Text}>


                        <span>{span1}</span>
                        <span>{span2}</span>
                        <span className={style.Banner_Bottom_Text_underline}>{span3}</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
