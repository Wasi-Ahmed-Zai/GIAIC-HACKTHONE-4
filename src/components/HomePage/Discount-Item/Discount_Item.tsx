import style from "@/components/HomePage/Discount-Item/Discount_Item.module.css"
const Discount_Item = () => {
    return (
        <div>
            <div className=" text-center mb-10 mt-[70px]">
                <h1 className="Heading">Discount Item</h1>
                <div className="w-[30%] mx-auto flex-center-between mt-[20px] text-[18px] font-normal text-[#151875]">
                    <span className="underline text-[#FB2E86]">Wood Chair</span>
                    <span>Plastic Chair</span>
                    <span>Sofa Colletion</span>
                </div>
            </div>

            <div className={`${style.Discount} wrapper mx-auto`}>
                <div className={style.Discount_Text}>
                    <h1 >
                        20% Discount Of All Products
                    </h1>
                    <p >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Eu eget feugiat habitasse nec, bibendum condimentum.
                    </p>
                    <div className="flex-center-between ">
                        <div>
                            <p >
                                Material expose like metals
                            </p>
                            <p >
                                Simple neutral colours.
                            </p>
                        </div>
                        <div>
                            <p >
                                Clear lines and geomatric figures
                            </p>
                            <p >
                                Material expose like metals
                            </p>
                        </div>
                    </div>
                    <button >
                    Shop Now
                    </button>
                </div>

                <div>
                    <img src="images/Home-images/24.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Discount_Item