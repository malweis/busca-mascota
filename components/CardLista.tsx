import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const notifications = [
  {
    title: "Personas que han perdido su mascota y desean publicar un reporte o buscar su mascota.",
  },
  {
    title: "Personas que han encontrado o avistado una mascota que parecía perdida y desean publicar un reporte.",
  },

]

type CardProps = React.ComponentProps<typeof Card>

export function CardLista({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>¿Quien puede usar este sitio?</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
       
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
             
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
      Todo con el fin de que estas puedan reencontrarse con sus dueños.

      </CardFooter>
    </Card>
  )
}
