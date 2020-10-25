import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data: Images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__fadeIn'>{category}</h3>
            {loading && <p>loading</p>}
            <div className="card-grid">
                {
                    Images.map( img => (
                        <GifGridItem
                            key={img.id}
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    );
};

export default GifGrid;