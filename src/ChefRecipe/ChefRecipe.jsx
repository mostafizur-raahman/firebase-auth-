import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';

const ChefRecipe = ({ rec }) => {
    console.log(rec);
    const [isDisabled, setIsDisabled] = useState(false);

    const notify = () => {
        toast('Favoroit chef success.');
    }
    const handleCombinedClick = () => {
        notify();
        setIsDisabled(true);
    }

    return (

        <div>
            <div className="card w-96 h-full glass bg-yellow-400">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{rec.name}</h2>
                    <p className='text-xl font-semibold underline'>ingredients:</p>
                    {
                        rec.ingredients.map(i => <li>{i}</li>)
                    }
                    <p className='text-xl font-bold'>Method:</p>
                    {
                        rec.method
                    }
                    <h1 className='text-3xl flex gap-2 items-center '><FaStar className='text-red-500 ' />{rec.rating}</h1>

                </div>
                <button onClick={handleCombinedClick} className='text-2xl font-mono font-bold btn btn-outline' disabled={isDisabled}>Favorite</button>
            </div>


        </div>
    );
};

export default ChefRecipe;