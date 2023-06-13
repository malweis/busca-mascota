"use client"
import dynamic from 'next/dynamic'
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarPlus, Check, ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"
  const DynamicMap=  dynamic(() => import('../components/LeafetMap'),{ssr:false})
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Label } from "@radix-ui/react-label"



const tipos = [
  { label: "Perdido", value: "per" },
  { label: "Avistado", value:"avi" },
  { label: "Retenido", value: "ret" },
  { label: "Otro", value: "ot" },
  
] as const

const especies = [
    { label: "Perro", value: "perr" },
    { label: "Gato", value:"gat" },
    { label: "otro", value: "otro" },
  
    
  ] as const
  const sexos = [
    { label: "Macho", value: "macho" },
    { label: "Hembra", value:"hembra" },
  
    
  ] as const
  
  

const accountFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  dls: z.date({
    required_error: "A date of birth is required.",
  }),

  tipo_reporte: z.string({
    required_error: "Por favor coloque un tipo al reporte .",
  }),
  titulo_reporte: z.string({
    required_error: "Por favor coloque un titulo al reporte .",
  }),
  desc: z.string({
    required_error: "Ppr favor coloque una descripcion al reporte",
  }),

  nombre_contacto: z.string({
    required_error: "Please select a language.",
  }),
  tel_contacto: z.string({
    required_error: "Please select a language.",
  }),
  especie: z.string({
    required_error: "Please select a language.",
  }),
  sexo: z.string({
    required_error: "Please select a language.",
  }),
  edad: z.number({
    required_error: "Please select a language.",
  }),
  resumen_ubicacion: z.string({
    required_error: "Please select a language.",
  }),
  
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
})

type AccountFormValues = z.infer<typeof accountFormSchema>

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
}

export function FormMascota() {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  })

  function onSubmit(data: AccountFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className=" grid gap-6 bg-white rounded-lg w-9/12 p-8">
      
        <div className='mapContainer bg-red-600'><DynamicMap/></div>
     
      <FormField
          control={form.control}
          name="tipo_reporte"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Tipo de reporte*</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                                    {field.value
                ? tipos.find((tipo) => tipo.value === field.value)?.label
                : "Tipo de reporte"}

                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Buscar tipo de reporte" />
                    <CommandEmpty>No se encontro tipo de reporte</CommandEmpty>
                    <CommandGroup>
                      {tipos.map((tipo) => (
                        <CommandItem
                          value={tipo.value}
                          key={tipo.value}
                          onSelect={(value) => {
                            form.setValue("tipo_reporte", value)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              tipo.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {tipo.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
              
               <span className="text-sm font-bold leading-none">  Perdido: </span> Si perdiste o alguien perdió su mascota y quieres reportarla como perdida. <br/>
              <span className="text-sm font-bold leading-none">  Avistado: </span> Si viste una mascota que parecía perdida, pero no pudiste retenerla.<br/>
              <span className="text-sm font-bold leading-none">  Retenido: </span> Si encontraste una mascota y pudiste retenerla o sabes de alguien que la tiene retenida.<br/>
             <span className="text-sm font-bold leading-none">  Otro: </span> Otro tipo de reporte.<br/>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="titulo_reporte"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título de reporte *:</FormLabel>
              <FormControl>
                <Input placeholder="Ejemplo: Perro con collar en san vicente" {...field} />
              </FormControl>
              <FormDescription>
                Ponle un titulo a tu reporte para que las personas puedan verlo mejor
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="desc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción de reporte *:</FormLabel>
              <FormControl>
                <Input placeholder="Ejemplo: Encontré un perro con collar en san vicente, creo que es una mezcla de caniche, no pude retenerlo" {...field} />
              </FormControl>
              <FormDescription>
                Ponle un titulo a tu reporte para que las personas puedan verlo mejor
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="desc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Foto*:</FormLabel>
              <FormControl>
                <Label>
                    <Input type="file">
                        
                    </Input>
                </Label>
              </FormControl>
              <FormDescription>
              Se necesita una imagen de la mascota para evitar confusiones y que sea más sencillo reconocerla
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="nombre_contacto"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de Contacto *:</FormLabel>
              <FormControl>
                <Input placeholder="Ejemplo: Juan Irala" {...field} />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="especie"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Especie*:</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                                    {field.value
                ? especies.find((especie) => especie.value === field.value)?.label
                : "Especie"}

                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Buscar especie" />
                    <CommandEmpty>No se encontro especie</CommandEmpty>
                    <CommandGroup>
                      {especies.map((especie) => (
                        <CommandItem
                          value={especie.value}
                          key={especie.value}
                          onSelect={(value) => {
                            form.setValue("especie", value)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              especie.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {especie.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
          
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="edad"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Edad Aproximada*:</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
    <FormField
          control={form.control}
          name="sexo"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Sexo*:</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                                    {field.value
                ? sexos.find((sexo) => sexo.value === field.value)?.label
                : "Sexo"}

                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Buscar especie" />
                    <CommandEmpty>No se encontro especie</CommandEmpty>
                    <CommandGroup>
                      {sexos.map((sexo) => (
                        <CommandItem
                          value={sexo.value}
                          key={sexo.value}
                          onSelect={(value) => {
                            form.setValue("sexo", value)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              sexo.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {sexo.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
          
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="resumen_ubicacion"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resumen de la ubicacion*:</FormLabel>
              <FormControl>
                <Input placeholder="Zona TTE. Martinez, fuerte olimpo, Alto Paraguay etc..." {...field} />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dls"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Ultimo dia visto* :</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Escoja una fecha</span>
                      )}
                      <CalendarPlus className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
       
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" variant={"secondary"}>Enviar peticion</Button>
      </form>
    </Form>
  )
}