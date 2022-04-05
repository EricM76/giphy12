import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {


  useFetchGifs(category);

  return (
    <>
    <h3>{category}</h3>
    {/* aplicar loading... */}
    <div className='row'>
    {/* aquí van las tarjetas mapeadas */}
    </div>
    </>
  )
}

