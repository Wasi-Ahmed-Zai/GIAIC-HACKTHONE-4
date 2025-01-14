import { Banner } from "@/components/Design-Parts/Banner/Banner"
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaRegHeart, FaSearchPlus } from "react-icons/fa";
import style from "@/app/Pages/pages.module.css"
import Sort_By from "@/components/Design-Parts/Sort_By/Sort_By"
export default function page() {
    const GridPrice = "$26.00 "
    const GridOldPrice = " $42.00"
    const Grid = [
        { id: 1, img: "images/Home-images/34.png", GridTitle: "Vel elit euismod", GridOldPrice: GridOldPrice, GridPrice: GridPrice },
        { id: 2, img: "images/Home-images/35.png", GridTitle: "Ultricies condimentum imperdiet", GridOldPrice: GridOldPrice, GridPrice: GridPrice },
        { id: 3, img: "images/Home-images/36.png", GridTitle: "Vitae suspendisse sed", GridOldPrice: GridOldPrice, GridPrice: GridPrice },
        { id: 4, img: "images/Home-images/37.png", GridTitle: "Sed at fermentum", GridOldPrice: GridOldPrice, GridPrice: GridPrice },
        { id: 5, img: "images/Home-images/38.png", GridTitle: "Fusce pellentesque at", GridOldPrice: GridOldPrice, GridPrice: GridPrice },
        { id: 6, img: "images/Home-images/39.png", GridTitle: "Vestibulum magna laoreet", GridOldPrice: GridOldPrice, GridPrice: GridPrice },
        { id: 7, img: "images/Home-images/40.png", GridTitle: "Sollicitudin amet orci", GridOldPrice: GridOldPrice, GridPrice: GridPrice },
        { id: 8, img: "images/Home-images/41.png", GridTitle: "Ultrices mauris sit", GridOldPrice: GridOldPrice, GridPrice: GridPrice },
        { id: 9, img: "images/Home-images/42.png", GridTitle: "Pellentesque condimentum ac", GridOldPrice: GridOldPrice, GridPrice: GridPrice },
        { id: 10, img: "images/Home-images/43.png", GridTitle: "Cras scelerisque velit", GridOldPrice: GridOldPrice, GridPrice: GridPrice },
        { id: 11, img: "images/Home-images/44.png", GridTitle: "Lectus vulputate faucibus", GridOldPrice: GridOldPrice, GridPrice: GridPrice },
        { id: 12, img: "images/Home-images/45.png", GridTitle: "Purus risus, ut", GridOldPrice: GridOldPrice, GridPrice: GridPrice },

    ]
    return (
        <section>
            <Banner
                h1={"Shop Grid Default"}
                span1={"Home"}
                span2={".Page"}
                span3={" .Shop Grid default"}
            >
            </Banner>
            <Sort_By />
            <div className="wrapper mx-auto grid grid-cols-4 mt-[10%]">
                {Grid.map((Grid) => (
                    <div key={Grid.id} className={style.Grid_Card}>
                        <div className={style.Grid_Card_Top}>
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
                            <div className="w-[170px] h-[170px] ">
                            <img src={Grid.img}
                                alt={Grid.GridTitle} />
                                </div>
                        </div>
                        <div className={style.Grid_Card_Bottom}>
                            <span>{Grid.GridTitle}</span>
                            <div className={style.Grid_Card_Bottom_Circle}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className={style.Grid_Card_Bottom_Text}>
                                <span>{Grid.GridPrice}</span>
                                <span>{Grid.GridOldPrice}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-[900px] h-[90px] mx-auto mt-[80px]">
                <img src="images/Home-images/30.png" alt="" />
            </div>
        </section>
    )
}