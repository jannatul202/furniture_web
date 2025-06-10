import React from 'react'

const Tooltip = ({position='bottom', colors=['bg-red-500','bg-green-500','bg-blue-500' ]}) => {
    const positionClass={
        bottom:{
            tooltip:'bottom-full left-1/2 transform -translate-x-1/2 mb-3',
            arrow:'left-1/2 transform -translate-x-1/2 -bottom-2'
        }
    }
  return (
    <div className='relative group'>
        <button className='relative bg-white/25 p-2 rounded-full border-1 border-white text-xl cursor-pointer'>
            <div className={`hidden absolute p-2 space-x-1
            rounded-lg bg-white/25 shadow-md group-hover:flex ${positionClass[position].tooltip}`}>

                {
                    colors.map((color, index)=>(
                        <div key={index} className={`size-6 p-2 ${color}  rounded-full border-2 border-white/25`}></div>
                    ))
                }
                {/* hover tooltip bosx */}
                <div className={`absolute
                w-0 h-0 border-l-transparent border-r-transparent border-t-8
                border-l-8 border-r-8 border-t-white/35 ${positionClass[position].arrow}`}>
            </div>
            </div>
        </button>
    </div>
  )
}

export default Tooltip