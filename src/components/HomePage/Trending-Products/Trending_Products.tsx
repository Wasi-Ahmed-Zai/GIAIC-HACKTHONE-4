import style from "@/components/HomePage/Trending-Products/Trending_Products.module.css"
export const Trending_Products = () => {

    const Trending_Product = [
        {
            id: 1,
            img: "images/Home-images/14.png",
            title: "Cantilever chair",
            oldprice: " $26.00 ",
            price: " $42.00"
        },
        {
            id: 2,
            img: "images/Home-images/15.png",
            title: "Cantilever chair",
            oldprice: " $26.00 ",
            price: " $42.00"
        },
        {
            id: 3,
            img: "images/Home-images/16.png",
            title: "Cantilever chair",
            oldprice: " $26.00 ",
            price: " $42.00"
        },
        {
            id: 4,
            img: "images/Home-images/17.png",
            title: "Cantilever chair",
            oldprice: " $26.00 ",
            price: " $42.00"
        },
    ]

    const Product = [
        { id: 1, img: "images/Home-images/18.png", title: "23% off in all products", text: "Shop Now" },
        { id: 2, img: "images/Home-images/19.png ", title: "23% off in all products", text: "View Collection" },

    ]

    const miniProducts = [
        { id: 1, img: "images/Home-images/20.png", title: "Executive Seat chair", price: "$32.00" },
        { id: 2, img: "images/Home-images/21.png", title: "Executive Seat chair", price: "$32.00" },
        { id: 3, img: "images/Home-images/23.png", title: "Executive Seat chair", price: "$32.00" },
    ]
    return (
        <section>
            <div className='text-center mb-10 mt-[60px]'>
                <h1 className="Heading">Trending Products</h1>
            </div>

            <div className="wrapper mx-auto ">
                <div className="grid grid-cols-4">
                    {Trending_Product.map((Trending_Product) => (
                        <div key={Trending_Product.id} className={`${style.Trending_Product_card} shadow-lg `}>
                            <div className={style.Trending_Product_card_Top}>
                                <div>
                                    <img src={Trending_Product.img}
                                        alt={Trending_Product.title} />
                                </div>
                            </div>
                            <div className={style.Trending_Product_card_Botton}>
                                <h3>{Trending_Product.title}</h3>
                                <div className={style.Trending_Product_card_Botton_Price}>
                                    <span>{Trending_Product.oldprice}</span>
                                    <span>{Trending_Product.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="wrapper  flex-center-between  mt-[30px]  ">
                        {Product.map((Product)=>(
                            <div key={Product.id} className={style.Product_card}>
                                <div className={style.Product_card_text}>
                                    <h3>{Product.title}</h3>
                                    <p>{Product.text}</p>
                                </div>
                                <div className={style.Product_card_img}>
                                    <img src={Product.img} 
                                    alt={Product.title} />
                                </div>
                            </div>
                        ))}
                    <div className={style.miniProducts}>
                    {miniProducts.map((miniProducts)=>(
                        <div key={miniProducts.id} className={style.miniProducts_Card}>
                                <div className={style.miniProducts_Card_image}>
                                    <img src={miniProducts.img}
                                     alt={miniProducts.title} />
                                </div>
                                <div className={style.miniProducts_Card_text}>
                                      <h3>{miniProducts.title}</h3>
                                      <p>
                                        {miniProducts.price}
                                      </p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>


        </section>
    )
}
