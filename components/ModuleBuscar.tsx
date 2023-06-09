"use client"
import React from 'react'
import { ComboboxDemo } from './ComboBox'
import { DatePickerDemo } from './Calendar'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'

function ModuleBuscar() {

    const tipos = [
        { label: "Perdido", value: "perdido" },
        { label: "Avistado", value:"avistado" },
        { label: "Retenido", value: "retenido" },
        { label: "Otro", value: "otro" },
        
      ] 

      const especies = [
        { label: "Perro", value: "perro" },
        { label: "Gato", value:"gato" },
        { label: "Otro", value: "otro" },
        
      ] 
      
  
  return (
    <div className='bg-yellow-400 w-full flex flex-col gap-4 rounded-lg p-4 '>
        <div className='flex gap-8'>
             <Label htmlFor='tipoReporte'> Tipo de reporte:  <ComboboxDemo  frameworks={tipos}/></Label>
             <Label htmlFor='Desde'> Fecha Ult. ves visto: <DatePickerDemo/> </Label>
             <Label htmlFor='Desda'> a <DatePickerDemo/> </Label>
        </div>
        <div className='flex  gap-8'>
        <Label htmlFor='Especie'> Especie: </Label> <ComboboxDemo frameworks={especies}/>
        <Label htmlFor='Pais'> Pais:    </Label><Input  className='w-4/12' name='pais'/>
        <Label htmlFor='Ciudad'> </Label>Ciudad:   <Input  className='w-4/12' name='ciudad'/>
        <Button variant={'outline'}> Buscar</Button>
        </div>
    </div>
  )
}

export default ModuleBuscar