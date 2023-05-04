import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';

const Blog = () => {
    const [loader, setLoader] = useState(false);
    const downloadPDF = () => {
        const capture = document.querySelector('.pdf');
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            doc.save('blog.pdf');

        })

    }
    return (
        <div className=' bg-sky-500 p-4 '>
            <button onClick={downloadPDF} className='flex gap-3 items-center btn mx-10 my-5'> <FaDownload></FaDownload> DownloadPDF</button>
            <div className='pdf mx-10'>
                <div className='mb-3 mt-3'>
                    <h1 className='text-3xl font-bold'>i.Tell us the differences between uncontrolled and controlled components.</h1>
                    <p className='text-xl p-1'>Controlled components depend on the parent component for state and behavior, while uncontrolled components manage their own state and behavior..</p>
                </div>
                <div className='mb-3 mt-3'>
                    <h1 className='text-3xl font-bold'>ii.How to validate React props using PropTypes?</h1>
                    <p className='text-xl p-1'>PropTypes is a built-in typechecking mechanism in React used to validate the props passed to a component, ensuring the correct type of props are received.</p>
                </div>
                <div className='mb-3 mt-3'>
                    <h1 className='text-3xl font-bold'>iii.Tell us the difference between nodejs and express js.</h1>
                    <p className='text-xl p-1'>Node.js is a JavaScript runtime environment, while Express.js is a web application framework built on top of Node.js.</p>
                </div>
                <div className='mb-3 mt-3'>
                    <h1 className='text-3xl font-bold'>iv.What is a custom hook, and why will you create a custom hook?</h1>
                    <p className='text-xl p-1'>A custom hook is a reusable function in React that allows you to share logic between components, and it is created to avoid code duplication and improve code reusability.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;