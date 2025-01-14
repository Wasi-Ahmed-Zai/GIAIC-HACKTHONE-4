import style from "@/components/Design-Parts/Sort_By/Sort_By.module.css"
import { IoChevronDown } from "react-icons/io5";
import { HiViewGrid } from "react-icons/hi";
import { FaList } from "react-icons/fa";
const Sort_By = () => {
  return (
        <section className={`${style.Sort} wrapper mx-auto my-[7%]`}>
                 <div className={style.Sort_left}>
                    <h2>Ecommerce Acceories & Fashion item </h2>
                    <span>About 9,620 results (0.62 seconds)</span>
                 </div>
                 <div className={style.Sort_right}>
                    <div className={style.Sort_right_one}>
                        <span>Per Page:</span>
                        <input />
                    </div>
                    <div className={style.Sort_right_two}>
                        <span>Sort By:</span>
                        <span >
                        Best Match
                        <i><IoChevronDown /> </i>
                        </span>
                    </div>
                    <div className={style.Sort_right_three}>
                        <span>View:</span>
                        <span><HiViewGrid /></span>
                        <span><FaList /></span>
                        <input type="text" />
                    </div>
                 </div>
        </section>
  )
}

export default Sort_By