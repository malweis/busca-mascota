"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Icons } from "./icons"

const notifications = [
  {
    title: "Pagar el alojamiento y la memoria en Google Cloud.",
  },
  {
    title: "Pagar el dominio buscamascota.org.",
  },
  {
    title: "Pagar el certificado SSL (candado de sitio seguro).",
  },

  {
    title:
      "Pagar actualizaciones, mantenimiento y publicidades de las publicaciones.",
  },
]

export function CardDonar() {
  return (
    <Card className="w-full ">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">
          Puedes donar para que el sitio siga activo
        </CardTitle>
        <CardDescription>
          Busca Mascota actualmente se encuentra alojado en Google Cloud con la
          tarjeta de crédito del autor de la web, esto tiene un costo mensual
          que depende de la cantidad de uso que tenga Busca Mascota. <br />
          <br />
          Si buscamos que este sitio siga activo y funcionando siempre puedes
          colaborar monetariamente para la causa, contribuyendo a que también el
          sitio se encuentre con constantes mejoras, actualizaciones, solución
          de problemas y soporte.
          <br />
          <br />
          La prioridad de estas donaciones será la siguiente:
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-blue-600" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        A continuación se dejará posibles medios para contribuir.
        <div className="flex w-full gap-4 text-xl">
          <div className="flex-1">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Caja de Ahorro Vision Banco</AccordionTrigger>
                  <AccordionContent>
                    <span className="font-bold">Cuenta nro.: 4189747 <br/> Oscar Gonzalez<br/> CI: 4648960<br/></span>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
          </div>

          <div className="flex-1">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Giros Claro</AccordionTrigger>
                  <AccordionContent>
                  <span className="font-bold">0986747136 (Claro)</span>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
