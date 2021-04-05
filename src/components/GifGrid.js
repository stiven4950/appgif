import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({ category }) => {
    
    // Los dos puntos indican de qué manera se llamará ahora la variable es como hacer as
    const {data:images, loading} = useFetchGifs(category);
    
    return (
        <div className="card-grid">
            <h3 style={{'display':'block', 'width':'100%'}}>{category}</h3>
            {loading && <p className="animate__animated animate__flash">Cargando</p>}
            {images.map(img=>(
                <GifGridItem
                    key={img.id}
                    { ...img }
                />
            ))}
        </div>
    )
}

export default GifGrid;
