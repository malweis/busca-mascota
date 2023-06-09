import { ReactNode } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface AvatarDemoProps {
  fallback: ReactNode
  src: string
  alt: string
}

export function AvatarDemo({ fallback, src, alt }: AvatarDemoProps) {
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} className="w-" />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  )
}
