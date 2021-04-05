import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(["One Punch"]);

    /* const handleAdd = ()=>{
        //setCategories([...categories, 'Hunter hunterX']);
        //setCategories(['Hunter hunterX',...categories]);

        setCategories(cats=>[...cats, 'Hunter hunterX']);
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={setCategories} />

            <ol>
                {categories.map((item)=>(
                    <GifGrid
                        key={item}
                        category={item}
                    />
                ))}
            </ol>
        </>
    );
}

export default GifExpertApp;