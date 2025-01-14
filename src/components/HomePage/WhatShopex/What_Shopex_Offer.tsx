import React from 'react'

const What_Shopex_Offer = () => {

  const Shop =[
    {
      id:  1,
      img : "images/icons/1.png",
      title:  "24/7 Support",
      para:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."

    },
    {
      id:  2,
      img : "images/icons/2.png",
      title:  "24/7 Support",
      para:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."

    },
    {
      id:  3,
      img : "images/icons/3.png",
      title:  "24/7 Support",
      para:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."

    },
    {
      id:  4,
      img : "images/icons/4.png",
      title:  "24/7 Support",
      para:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."

    },
  ]
  return (
    <section>
    <div className='text-center mb-10'>
       <h1 className="Heading">What Shopex Offer!</h1>
    </div>

    <div className='wrapper grid grid-cols-4 '>
      {Shop.map((iteams)=>(
        <div key={iteams.id} className='w-[270px] h-[320px] flex-center-center flex-col shadow-xl rounded-[5px]'>
          <div>
            <img src={iteams.img}
             alt={iteams.title} />
          </div>
          <div className='text-center mt-[30px] '>
            <h3 className='text-[#151875] text-[22px] font-bold'>{iteams.title}</h3>
            <p className='text-[#1A0B5B4D] w-[80%] mx-auto mt-[20px]'>{iteams.para}</p>
          </div>
        </div>
      ))}
    </div>
    </section>
  )
}

export default What_Shopex_Offer