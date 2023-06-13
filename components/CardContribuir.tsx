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


export function CardContribuir() {
  return (
    <Card className="w-[400px] ">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Contribuir con el código en Github</CardTitle>
        <CardDescription>
        Puedes colaborar a mejorar el sitio creando un merge request al repositorio con alguna característica nueva o puedes descargar el código y realizar otra implementación.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
      
       
        <div className="grid items-center">
        
          <Button variant="outline">
            Colaborar en   <Icons.gitHub className="h-5 w-5  ml-4" />
          </Button>
        </div>
      </CardContent>
  
    </Card>
  )
}