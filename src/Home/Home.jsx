import React from 'react';
import './Home.css'
import { Link, useLoaderData } from 'react-router-dom';
const Home = () => {
    const allData = useLoaderData();
    const { id, chefName, chefPicture, yearsOfExperience, numRecipes, likes } = allData;
    console.log(allData);
    return (
        <div className='img'>
            <div>
                <h1 className='text-center text-white text-3xl p-10 '>The executive chef is the head of the kitchen and is responsible for managing all aspects of the kitchen, including menu creation, <span className='text-4xl text-yellow-300'>recipe development</span>, <span className='text-4xl text-pink-500'>food preparation</span>, kitchen staff supervision, and <span className='text-blue-600 font-bold font-mono text-4xl'>food safety and sanitation.</span></h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 w-full gap-5 lg:pl-12'>
                {
                    allData?.map(data =>
                        <div key={data.id} className="card w-96 bg-base-100 shadow-xl mt-10 mb-5">
                            <figure className="px-10 pt-10">
                                <img src={data?.chefPicture} alt="Shoes" className="rounded-xl w-[200px] h-[150px]  " />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{data?.chefName}</h2>
                                <p>Expericnce : {data?.yearsOfExperience}yrs</p>
                                <p>Number of Recipe : {data?.numRecipes}</p>
                                <p> {data?.likes} Likes</p>
                                <div className="card-actions">
                                    <Link className="btn btn-primary" to={`/chefDetails/${data.id}`}>View Recipe</Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Home;