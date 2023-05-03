import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const data = useLoaderData();
    console.log("details -----------", data);
    const { chefPicture, bio } = data;
    return (
        <div>
            <img className='w-[400px] h-[400px]' src={chefPicture} alt="" />

        </div>
    );
};

export default Details;