import React from 'react';
import './Home.css'
import { Link, useLoaderData } from 'react-router-dom';
import { FaBrain, FaOpencart, FaPalette, FaUser } from 'react-icons/fa';
const Home = () => {
    const allData = useLoaderData();
    const { id, chefName, chefPicture, yearsOfExperience, numRecipes, likes } = allData;
    console.log(allData);
    return (
        <div>
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
                                    <h2 className="card-title flex"> <FaUser />{data?.chefName}</h2>
                                    <p className='flex items-center gap-2'><FaBrain /> Expericnce: {data?.yearsOfExperience}yrs</p>
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
            {/* extra sections */}
            <div className='flex  px-10 py-5'>
                <div className=' px-10 py-5'>
                    <h1 className='text-5xl font-bold'>Menues</h1>
                    <hr className='w-[100px] text-4xl border-2' />
                    <div>
                        <div className='mb-4 mt-3'>
                            <h1 className='flex items-start text-3xl gap-5 font-bold'> <FaOpencart className='text-5xl' />Dinner Menu</h1>
                            <p className='text-2xl ml-10 '>Browse our traditional menus or  <br /> let us create
                                something new for you.</p>
                        </div>
                        <div className='mb-4 mt-3'>
                            <h1 className='flex items-start text-3xl gap-5 font-bold'> <FaOpencart className='text-5xl' />Brunch Menu</h1>
                            <p className='text-2xl ml-10'>Savor the stuffed French toast with <br /> warm syrup or delight in a classic eggs benedict with rich hollandaise.</p>
                        </div>
                        <div className='mb-4 mt-3'>
                            <h1 className='flex items-start text-3xl gap-5 font-bold'> <FaOpencart className='text-5xl' /> Vegan & Gluten Free Menu</h1>
                            <p className='text-2xl ml-10'>100% vegan, vegetarian & gluten free <br /> cuisine from our kitchen to your table.</p>
                        </div>
                    </div>

                </div>
                <div>
                    <img src="https://i.ibb.co/Jt2cCD1/xx.png" className='bg-white mt-10' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;