import React from "react";
import qrcodeScanner from '../assest/portfolio/qrcodeScanner.jpg';
import cssmySite from '../assest/portfolio/cssmySite.jpg';
import shopsite from '../assest/portfolio/shopsite.jpg';
import styleform from '../assest/portfolio/styleform.jpg';
import loginform from '../assest/portfolio/loginform.jpg';
import webZoo from '../assest/portfolio/webZoo.jpg';

const Portfolio = () => {
    
    
    const portfolios = [

        {
            id: 1,
            src:qrcodeScanner ,

        },
        {
            id: 2,
            src:cssmySite ,

        },
        {
            id: 3,
            src:shopsite ,
            

        },
        {
            id: 4,
            src:styleform ,

        },
        {
            id: 5,
            src:loginform,

        },
        {
            id: 6,
            src:webZoo ,

        },

    ]
    
    
    return (

    <div name="portfolio" className="bg-gradient-to-b from-black 
        to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col 
          justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check ot some of my work right here</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {
                    portfolios.map(({id,src}) => (

                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} alt="" 
                    className="rounded-md duration-200 hover:scale-105"/>
                    <div className="flex items-center justify-center">
                        < button className ="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                        < button className ="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                        <a href="https://github.com/Mohammad-Ghiyasuddin">Code</a></button>
                    </div>
                </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
};

export default Portfolio ;