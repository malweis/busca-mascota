"use client"
import Link from 'next/link'
import React from 'react'
import { Icons } from './icons'
import { siteConfig } from '@/config/site'
import { buttonVariants } from './ui/button'
import { AvatarDemo } from './Avatar'

function SiteFooter() {
  return (
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
              href={"https://oscargonzalez.work/"}
              className={"text-blue-600"}
            >
              Oscar Gonzales
            </Link>
          </p>
        </div>
        <AvatarDemo
          fallback={"OG"}
          src={"https://i.imgur.com/DGFtuvl.jpeg"}
          alt={"Oscar con perros"}
        />
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
            href={"/"}
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
            className={buttonVariants({ variant: "outline" })}
          >
            <Icons.facebook className="h-4 w-4" />{" "}
          </Link>
          <Link
            href={"/"}
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
            className={buttonVariants({ variant: "outline" })}
          >
            <Icons.email className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
    <h4 className="text-lg text-center mb-4 font-medium leading-none">
      Copyright © Busca Mascota | Pictures made by{" "}
      <Link
        target="_blank"
        rel="noreferrer"
        href={siteConfig.links.github}
        className={"text-blue-500"}
      >
        Freepik
      </Link>
    </h4>
  </div>
  )
}

export default SiteFooter