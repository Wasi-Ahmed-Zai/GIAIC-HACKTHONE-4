import style from "@/components/HomePage/Top-Categories/Top_Categories.module.css"
import React from 'react'

export const Top_Categories = () => {
     
    const title = "Mini LCW Chair"
    const Price = "$56.00"
    const Top_Categor =[
        {id: 1, img: "images/Home-images/25.png", title: title, Price:Price},
        {id: 2, img: "images/Home-images/26.png", title: title, Price:Price},
        {id: 3, img: "images/Home-images/27.png", title: title, Price:Price},
        {id: 4, img: "images/Home-images/28.png", title: title, Price:Price},
    ]
  return (
    <div>
           <div className='text-center mb-10 mt-[50px]'>
                <h1 className="Heading">Top Catedories</h1>
            </div>

            <div className='wrapper mx-auto grid grid-cols-4'>
                {Top_Categor.map((Top_Categor)=>(
                    <div key={Top_Categor.id} className={style.Top_Categor }>
                        <div  className={`${style.Top_Categor_image} shadow-lg` }>
                            <img src={Top_Categor.img}
                             alt={Top_Categor.title} />
                             <div className={style.Top_Categor_image_button}>
                                <span>View Shop</span>
                             </div>
                        </div>
                        <div className={style.Top_Categor_Text}>
                            <h3> {Top_Categor.title}</h3>
                            <p>{Top_Categor.Price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={style.Get_Latest}>
                <img src="images/Home-images/29.png" alt="" />
                <div className={style.Get_Latest_Text}>
                    <h1>Get Leatest Update By Subscribe <br />
                    0ur Newslater</h1>
                    <button>Shop Now</button>
                </div>
            </div>


            <div className={style.icon}>
                <img src="images/Home-images/30.png" alt="" />
            </div>
    </div>
  )
}
