import style from "@/components/HomePage/Leatest-Blog/Leatest_Blog.module.css"
const Leatest_Blog = () => {

    const blogtitle = "Top essential trends in 2021"
    const blogpara = "More off this less hello samlande lied much  over tightly circa horse taped mightly"
    const blogdate = "21 August,2020"
    const blogname = "Surfauxion"
    const blogReadmore = "Read More"

    const Blog = [
        { id: 1, img: "images/Home-images/31.png", title: blogtitle, blogpar: blogpara, blogdate: blogdate, blogname: blogname, blogReadmore: blogReadmore, },
        { id: 2, img: "images/Home-images/32.png", title: blogtitle, blogpar: blogpara, blogdate: blogdate, blogname: blogname, blogReadmore: blogReadmore, },
        { id: 3, img: "images/Home-images/33.png", title: blogtitle, blogpar: blogpara, blogdate: blogdate, blogname: blogname, blogReadmore: blogReadmore, },
    ]

    return (
        <section>
            <div className='text-center mb-10 '>
                <h1 className="Heading">Latest Blog</h1>
            </div>
            <div className="wrapper mx-auto grid grid-cols-3">
                {Blog.map((Blog) => (
                    <div key={Blog.id} className={`${style.Blog_card} shadow-xl`}>
                        <div className={style.Blog_card_image}>
                            <img src={Blog.img}
                                alt={Blog.blogname} />
                        </div>

                        <div className={style.Blog_card_Text}>
                            
                            <div className={style.Blog_card_Text_Top}>
                                <span className="flex-center-center gap-[8px] flex-row ">
                                    <span><img src="images/icons/6.png" alt="" /></span>
                                    <span>{Blog.blogname}</span>
                                </span>
                                <span className="flex-center-center gap-[8px] flex-row ">
                                    <span><img src="images/icons/5.png" alt="" /></span>
                                    <span> {Blog.blogdate}</span>
                                </span>
                            </div>
                            <div className={style.Blog_card_Text_Bottom}>
                                <h2>{Blog.title}</h2>
                                <div>
                                    <p>{Blog.blogpar}</p>
                                </div>
                                <span>{Blog.blogReadmore}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Leatest_Blog