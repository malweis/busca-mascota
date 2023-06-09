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


export function CardColaborar() {
  return (
    <Card className="w-[400px] ">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Colabora con el sitio</CardTitle>
        <CardDescription>
        Si deseas contribuir de manera voluntaria, puedes hacerlo para ayudar a mantener este sitio activo y funcionando constantemente. Tu donación es muy valiosa.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
      
       
        <div className="flex justify-center">
       
          <Button variant="outline">
           Colaborar
          </Button>
        </div>
      </CardContent>
  
    </Card>
  )
}