"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "./icons"


export function CardCompatir() {
  return (
    <Card className="w-[400px] ">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Compartiendo la página</CardTitle>
        <CardDescription>
        Puedes colaborar dando a conocer la página con familiares, amigos, conocidos o en las redes sociales! Dando a conocer una comunidad que se compromete con esta causa.

Mientras más personas conozcan Busca Mascota, más mascotras podrán reencontrarse con sus dueños!
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
      
       
      
      </CardContent>
  
    </Card>
  )
}