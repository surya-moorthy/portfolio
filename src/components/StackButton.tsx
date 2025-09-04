import React from 'react'

type Button = {
    name : string,
    // logo : string
}

export default function StackButton({button} : {button : Button}) {
  return (
    <div className='px-4 py-3 flex justify-center gap-3 shadow-xl rounded-sm hover:shadow-2xl hover:scale-110'>
           <p className='text-xl font-bold'>
              {button.name}
           </p>
    </div>
  )
}
