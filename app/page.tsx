"use client"

import Link from "next/link"
import Avatar from "public/images/img/3perrosyyo.jpg"
import five from "public/images/img/paw-five.jpg"
import Dogo from "public/images/img/perrosinbg.png"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { AvatarDemo } from "@/components/Avatar"
import { CardColaborar } from "@/components/CardColaborar"
import { CardLista } from "@/components/CardLista"
import { CardPrincipal } from "@/components/CardPrincipal"
import { Images } from "@/components/Images"
import { Icons } from "@/components/icons"

export default function IndexPage() {
  return (
    <section className=" grid items-center  ">
      <div className="w-full flex items-end">
        <div className="flex-1 flex justify-center">
          <div className="w-[300px] ">
            <Images
              src={Dogo}
              alt="Photo by Drew Beamer"
              aspectRatio={1 / 1}
              fill
              className="rounded-md object-cover w-[400px] h-[400px] "
            />
          </div>
        </div>
        <div className=" w-full h-full p-9 flex-1 flex justify-center ">
          <CardPrincipal />
        </div>
      </div>
      <div className="w-full flex bg-accent items-center justify-center">
        <div className=" w-full h-full p-9 flex-1 flex justify-center ">
          <CardLista className="bg-secondary" />
        </div>
        <div className="flex-1 flex items-center  h-full justify-center">
          <div className="w-[500px] flex   ">
            <Images
              src={five}
              alt="Photo by Drew Beamer"
              aspectRatio={16 / 9}
              fill
              className="rounded-md object-cover w-[400px] h-[400px]  "
            />
          </div>
        </div>
      </div>
      <div className="w-full flex  items-end">
        <div className=" w-full h-full p-9 flex-1 flex justify-center ">
          <CardColaborar />
        </div>
      </div>

     
    </section>
  )
}
