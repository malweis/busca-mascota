import Link from "next/link"
import Dogo from "public/images/img/perrosinbg.png"
import five from "public/images/img/paw-five.jpg"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { CardPrincipal } from "@/components/CardPrincipal"
import { Images } from "@/components/Images"
import { CardLista } from "@/components/CardLista"

export default function IndexPage() {
  return (
    <section className=" grid items-center  pb-8 pt-6 md:py-10">
      <div className="w-full flex bg-red-500 items-end">
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
      <div className="w-full flex bg-red-500 items-end">
        
        <div className=" w-full h-full p-9 flex-1 flex justify-center ">
          <CardLista />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-[500px] mb-4 ">
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
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}
