import ModuleBuscar from '@/components/ModuleBuscar'
import dynamic from 'next/dynamic'
import React from 'react'
const DynamicMap=  dynamic(() => import('../../components/LeafetMap'),{ssr:false})

function page() {
  return (
    <div className='w-full grid h-screen items-center '>
        <div className='justify-self-center'>
            <ModuleBuscar/></div>
           
        <div className='w-9/12 h-full'><DynamicMap/></div>
    </div>
  )
}

export default page