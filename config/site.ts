export type SiteConfig = typeof siteConfig
import { Icons } from "@/components/icons"


export const siteConfig = {
  name: "Busca Mascota",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
      icon: Icons.casa,
    },
    {
      title: "Publicar Mascota",
      href: "/publicar-mascota",
      icon: Icons.pata,
    },
    {
      title: "Buscar Mascota",
      href: "/buscar-mascota",
      icon: Icons.lupa,
    },
    {
      title: "Colaborar",
      href: "/colaborar",
      icon: Icons.manos,
    },
    {
      title: "Adopciones",
      href: "/adopciones",
      icon: Icons.donar,
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/OscarGonzalez97/buscamascota",
    docs: "https://ui.shadcn.com",
  },
}
