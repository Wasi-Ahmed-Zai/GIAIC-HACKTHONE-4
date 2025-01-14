import Discount_Item from "@/components/HomePage/Discount-Item/Discount_Item";
import { Featured_Products } from "@/components/HomePage/Featured_Products/Featured_Products";
import { Hero } from "@/components/HomePage/Hero/Hero";
import { Leatest_Products } from "@/components/HomePage/Leatest Products/Leatest_Products";
import Leatest_Blog from "@/components/HomePage/Leatest-Blog/Leatest_Blog";
import { Top_Categories } from "@/components/HomePage/Top-Categories/Top_Categories";
import { Trending_Products } from "@/components/HomePage/Trending-Products/Trending_Products";
import Unique_Feature from "@/components/HomePage/Unique_Feature/Unique_Feature";
import What_Shopex_Offer from "@/components/HomePage/WhatShopex/What_Shopex_Offer";

export default function Home (){
    return(
        <div>
            {/* Hero */}
            <Hero/>
            {/* Featured_Products  */}
            <Featured_Products />
            
            <Leatest_Products />
            {/* What Shopex Offer! */}
            <What_Shopex_Offer/>

            <Unique_Feature />

            <Trending_Products/>
            <Discount_Item />

            <Top_Categories />

            <Leatest_Blog />
             
        </div>
    )
}