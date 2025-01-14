import style from "@/app/Contact/page.module.css"
import { Banner } from "@/components/Design-Parts/Banner/Banner"
import Sort_By from "@/components/Design-Parts/Sort_By/Sort_By"
import { View_list } from "@/components/Design-Parts/View-list/View_list"

export default function page() {
  const GridPrice = "$26.00"
  const GridOldPrice = " $52.00"
  const Grid = [
    { id: 1, img: "images/Home-images/54.png", GridTitle: "Accumsan tincidunt", GridOldPrice: GridOldPrice, GridPrice: GridPrice },
    { id: 2, img: "images/Home-images/55.png", GridTitle: "In nulla", GridOldPrice: GridOldPrice, GridPrice: GridPrice },
    { id: 3, img: "images/Home-images/56.png", GridTitle: "Vel sem", GridOldPrice: GridOldPrice, GridPrice: GridPrice },
    { id: 4, img: "images/Home-images/57.png", GridTitle: "Porttitor cum", GridOldPrice: GridOldPrice, GridPrice: GridPrice },
    { id: 5, img: "images/Home-images/58.png", GridTitle: "Nunc in", GridOldPrice: GridOldPrice, GridPrice: GridPrice },
    { id: 6, img: "images/Home-images/59.png", GridTitle: "Vitae facilisis", GridOldPrice: GridOldPrice, GridPrice: GridPrice },
    { id: 7, img: "images/Home-images/60.png", GridTitle: "Curabitur lectus", GridOldPrice: GridOldPrice, GridPrice: GridPrice },

  ]
  return (
    <div>
      <div>
        <Banner
          h1={"Shop List"}
          span1={"Home"}
          span2={".Page"}
          span3={" .Shop List"}
        >
        </Banner>
      </div>
      <Sort_By />
      <div>
        {
          Grid.map((Grid) => (
            <div key={Grid.id}>
              <View_list
                h2={Grid.GridTitle}
                span1={Grid.GridPrice}
                span2={Grid.GridPrice}
                img={Grid.img}
              >
              </View_list>
            </div>
          ))

        }

      </div>

      <div className="w-[900px] h-[90px] mx-auto mt-[80px]">
        <img src="images/Home-images/30.png" alt="" />
      </div>
    </div>
  )
}
