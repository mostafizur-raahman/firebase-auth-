import React from 'react';
import './Home.css'
import { Link, useLoaderData } from 'react-router-dom';
import { FaBrain, FaOpencart, FaPalette, FaUser } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
const Home = () => {
    const allData = useLoaderData();
    const { id, chefName, chefPicture, yearsOfExperience, numRecipes, likes } = allData;
    console.log(allData);
    return (
        <LazyLoad>
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
                                        <LazyLoad><img src={data?.chefPicture} alt="Shoes" className="rounded-xl w-[200px] h-[150px]  " /></LazyLoad>
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
                <div className='lg:flex grid px-10 py-5'>
                    <div className=' px-10 py-5'>
                        <h1 className='text-5xl font-bold ml-10 font-mono'>Menues</h1>
                        <hr className='w-[100px] text-4xl border-2 border-pink-400 mt-1 ' />
                        <div>
                            <div className='mb-4 mt-3'>
                                <h1 className='font-mono flex items-start text-3xl gap-5 font-bold'> <FaOpencart className='text-5xl text-yellow-500 ' />Dinner Menu</h1>
                                <p className='text-2xl ml-10 '>Browse our traditional menus or  <br /> let us create
                                    something new for you.</p>
                            </div>
                            <div className='mb-4 mt-3'>
                                <h1 className='font-mono flex items-start text-3xl gap-5 font-bold'> <FaOpencart className='font-mono text-5xl text-sky-500' />Brunch Menu</h1>
                                <p className='text-2xl ml-10'>Savor the stuffed French toast with <br /> warm syrup or delight in a classic eggs benedict with rich hollandaise.</p>
                            </div>
                            <div className='mb-4 mt-3'>
                                <h1 className=' font-mono flex items-start text-3xl gap-5 font-bold'> <FaOpencart className='text-5xl text-red-500' /> Vegan & Gluten Free Menu</h1>
                                <p className='text-2xl ml-10'>100% vegan, vegetarian & gluten free <br /> cuisine from our kitchen to your table.</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <img src="https://i.ibb.co/Jt2cCD1/xx.png" className='bg-white mt-10' alt="" />
                    </div>
                </div>
                {/* customer feedback */}
                <div>
                    <h1 className='text-center text-4xl font-bold'>What Customers Are Saying <br />
                        <span className='text-primary'> About Us</span></h1>

                    <hr className='border-2 border-yellow-400 w-[200px] mx-auto' />
                    <h1 className='text-center mt-5 text-xl '>We pride ourselves on what our happy
                        clients say.</h1>
                    <div className='gird lg:flex justify-between mx-10 my-10'>
                        <div>
                            <img src="https://i.ibb.co/Bjn4CqJ/1.jpg" className='mx-auto w-[100px] h-[100px] rounded-full' alt="" />
                            <h1 className='mt-4 text-center text-2xl font-semibold'>Abdul Kobir</h1>
                            <p className='p-2'>"I recently had the pleasure of dining at this restaurant and the food was absolutely amazing. The flavors were so vibrant and every dish was expertly crafted. I highly recommend the lobster risotto - it was easily the best dish I've had in a long time."</p>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/j3TgyBr/2.jpg" className='mx-auto w-[100px] h-[100px] rounded-full' alt="" />
                            <h1 className='mt-4 text-center text-2xl font-semibold'>Abdul Kobir</h1>
                            <p className='p-2'>"I ordered takeout from this restaurant and was blown away by the quality of the food. Everything arrived fresh and hot, and the flavors were incredible. I especially loved the spicy tuna roll and the crispy shrimp tempura. I will definitely be ordering from here again!"</p>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/f0bxNpW/3.jpg" className='mx-auto w-[100px] h-[100px] rounded-full' alt="" />
                            <h1 className=' mt-4 text-center text-2xl font-semibold'>Abdul Kobir</h1>
                            <p className='p-2'>"I visited this café for brunch and was pleasantly surprised by the variety of options on the menu. I ended up ordering the avocado toast and it was delicious - the bread was perfectly toasted and the avocado was creamy and flavorful. The coffee was also top-notch. I highly recommend this place!"</p>
                        </div>
                    </div>
                </div>
            </div >
        </LazyLoad>
    );
};

export default Home;