import React from 'react'

const RightCardContent = (props) => {
  return (
  <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
                <h2 className='bg-white rounded-full font-semibold h-12 w-12 text-xl flex justify-center items-center'>{props.id+1}</h2>
                 <div>
                    <p className='text-shadow-2xs text-lg leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas nam, fugiat laudantium neque enim?</p>
                    <div className='flex justify-between'>
                        <button style={{backgroundColor:props.color}} className='text-white font-semibold px-8 py-2 rounded-full'>{props.tag}</button>
                        <button className='text-white font-semibold px-4 py-2 rounded-full'><i class="ri-arrow-right-line"></i></button>
                    </div>
                 </div>
            </div>  
  )
}

export default RightCardContent