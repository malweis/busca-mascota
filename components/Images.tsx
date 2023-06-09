import Image, { ImageProps, StaticImageData } from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface AspectRatioDemoProps extends Omit<ImageProps, "src" | "alt"> {
  src: StaticImageData
  alt: string
  aspectRatio: number
}

export function Images({ src, alt, aspectRatio, ...imageProps }: AspectRatioDemoProps) {
  return (
    <AspectRatio ratio={aspectRatio} >
      <Image
        src={src}
        alt={alt}
        {...imageProps} // Pass the remaining imageProps to the Image component
      />
    </AspectRatio>
  )
}
