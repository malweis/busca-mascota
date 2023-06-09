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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"

export function CardPrincipal() {
  return (
    <Card className="w-[400px] ">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">¿Que es busca Mascota?</CardTitle>
        <CardDescription>
        Es una plataforma open-source, para que mascotas perdidas puedan reencontrarse con sus dueños.
        Puedes publicar tu mascota sin costo! Y también será publicado en las redes oficiales de Busca Mascota automáticamente.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
      
       
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
            Buscar mi mascota
          </Button>
          <Button variant="outline">
            Publicar mascota
          </Button>
        </div>
      </CardContent>
  
    </Card>
  )
}