import ModuleBuscar from '@/components/ModuleBuscar'
import dynamic from 'next/dynamic'
import React from 'react'
const DynamicMap=  dynamic(() => import('../../components/LeafetMap'),{ssr:false})

function page() {
  return (
    <div className='w-full grid  grid-rows-3 h-screen items-center '>
        <div className='justify-self-center row-start-1 row-end-2'>
            <ModuleBuscar/></div>
           
        <div className='w-full h-full p-8 row-start-2 row-end-4'><DynamicMap /></div>
    </div>
  )
}

export default page