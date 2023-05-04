import React from 'react';
import { FaBookReader, FaBrain, FaHeart, FaUser } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const data = useLoaderData();


    const { chefPicture, bio, chefName, yearsOfExperience, numRecipes, likes, recipes } = data;

    return (
        <div>
            <div>
                <div className='flex gap-5 mx-10'>
                    <img className='w-[400px] h-[400px] rounded-full' src={chefPicture} alt="" />
                    <div>
                        <h1 className='mt-20 text-5xl font-mono font-bold'>{bio}</h1>
                        <h1 className='text-2xl mt-4 font-semibold flex items-center gap-4'><FaUser></FaUser> {chefName}</h1>
                        <h1 className='text-2xl mt-2 font-semibold flex items-center gap-4'> <FaBrain></FaBrain> {yearsOfExperience} yrs</h1>
                        <h1 className='text-2xl mt-2 font-semibold flex items-center gap-4'><FaBookReader></FaBookReader> {numRecipes} recipe</h1>
                        <h1 className='text-2xl mt-2 font-semibold flex items-center gap-3'> <FaHeart className='text-red-500'></FaHeart> {likes}</h1>
                    </div>
                </div>

                <div className='flex justify-between mx-10 mt-10 mb-10'>
                    {
                        recipes?.map(rec =>
                            <div>
                                <div className="card w-96 glass">
                                    <div className="card-body">
                                        <h2 className="card-title">{rec.name}</h2>
                                        <p>How to park your car at your garage?</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Learn now!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Details;