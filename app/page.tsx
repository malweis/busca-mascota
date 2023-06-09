import Link from "next/link"
import five from "public/images/img/paw-five.jpg"
import Dogo from "public/images/img/perrosinbg.png"
import Avatar from "public/images/img/3perrosyyo.jpg"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { CardColaborar } from "@/components/CardColaborar"
import { CardLista } from "@/components/CardLista"
import { CardPrincipal } from "@/components/CardPrincipal"
import { Images } from "@/components/Images"
import { AvatarDemo } from "@/components/Avatar"
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

      <div className="bg-card">
        <div className="w-full flex  justify-evenly  pt-5 pb-5 items-center g">
          <div className="flex flex-col justify-center items-center">
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-none">
              Sitio creado y administrado por
              </h4>
              <p className="text-sm text-muted-foreground text-center">
              <Link
            target="_blank"
            rel="noreferrer"
            href={'https://oscargonzalez.work/'}
            className={'text-blue-600'}
          >
            Oscar Gonzales
          </Link>
              </p>
            </div>
            <AvatarDemo fallback={'OG'} src={"https://i.imgur.com/DGFtuvl.jpeg"} alt={"Oscar con perros"}/>
          </div>
          <div>
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            Termino de uso
          </Link>
          </div>
          <div>
          <h4 className="text-lg text-center mb-4 font-medium leading-none">
              Contacto
              </h4>
          <div className="flex gap-4">
            <Link
              href={'/'}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
             <Icons.twitter className="h-4 w-4" />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={buttonVariants({ variant: "outline" }) }
            >
                  <Icons.facebook className="h-4 w-4" />        </Link>
            <Link
              href={'/'}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
               <Icons.instagram className="h-4 w-4" />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={buttonVariants({ variant: "outline" }) }
            >
               <Icons.email className="h-4 w-4" />
            </Link>
          </div>
          </div>
        </div>
        <h4 className="text-lg text-center mb-4 font-medium leading-none">
      Copyright © Busca Mascota
Pictures made by   <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={'text-blue-500'}
          >
             Freepik
          </Link>
            </h4>
      </div>
     
     
    </section>
  )
}
