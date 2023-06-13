"use client"
import { CardCompatir } from '@/components/CardCompartir'
import { CardContribuir } from '@/components/CardContribuir'
import { CardDonar } from '@/components/CardDonar'

import React from 'react'

function page() {
  return (
    <div className='w-full grid bg-background  h-screen '>
        <div className='grid gap-4 justify-self-center w-9/12 mt-4'>
            <h2 className='text-2xl text-center text-white'>¡Puedes colaborar de distintas formas con este proyecto!</h2>
            <div className=' flex gap-8 justify-around'>
              <CardContribuir/>
              <CardCompatir/>
            </div>
            <div className='w-full p-8'>
                <CardDonar/>
            </div>

        </div>
    </div>
  )
}

export default page