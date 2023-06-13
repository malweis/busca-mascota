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
        <div className='flex items-center gap-8'>
             <Label htmlFor='tipoReporte'> Tipo de reporte: </Label> <ComboboxDemo  frameworks={tipos}/>
             <Label htmlFor='Desde'> </Label>  Fecha ult. vez visto: <DatePickerDemo/>
             <Label htmlFor='Desda'> a  </Label> <DatePickerDemo/>
        </div>
        <div className='flex items-center gap-8'>
        <Label htmlFor='Especie'> Especie: </Label> <ComboboxDemo  frameworks={especies}/>
        <Label htmlFor='Pais'> Pais:    </Label><Input  className='w-4/12 bg-white' name='pais'/>
        <Label htmlFor='Ciudad'> </Label>Ciudad:   <Input  className='w-4/12 bg-white' name='ciudad'/>
        <Button variant={'secondary'}> Buscar</Button>
        </div>
    </div>
  )
}

export default ModuleBuscar