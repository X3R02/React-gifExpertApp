import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ul>
                {
                    categories.map(c => (
                        <GifGrid 
                            key={c}
                            category={c}
                        />
                    ))
                }
            </ul>

        </>
    );
};

export default GifExpertApp;