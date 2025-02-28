import React from "react" ;

import linux from '../assest/linux.png' ;
import css from '../assest/css.png';
import bootstrap from '../assest/bootstrap.png';
import tailwind from '../assest/tailwind.png' ;
import javascript from '../assest/javascript.png';
import react from '../assest/react.png';
import code  from '../assest/c++.png' ;
import aws from '../assest/aws.png';
import gcp from '../assest/gcp.png';

const Experience = () => {
        
        const techs = [

                 {
                    id:1,
                    src:linux,
                    title:'Linux',
                    style: 'shadow-orange-500'
                 },
                 {
                    id:2,
                    src:css,
                    title:'css',
                    style: 'shadow-blue-500'
                 },
                 {
                    id:3,
                    src:bootstrap,
                    title:'Bootstrap',
                    style: 'shadow-blue-500'
                 },
                 {
                    id:4,
                    src:tailwind,
                    title:'Tailwind',
                    style: 'shadow-sky-400'
                 },
                 {
                    id:5,
                    src:javascript,
                    title:'Javascript',
                    style: 'shadow-yellow-500'
                 },
                 
                 {
                  id:6,
                  src:react,
                  title:'React',
                  style: 'shadow-blue-600'
               },
                 {
                    id:7,
                    src:aws,
                    title:'AWS',
                    style: 'shadow-orange-500'
                 },
                 {
                    id:8,
                    src:gcp,
                    title:'Google Cloud',
                    style: 'shadow-yellow-500'
                 },
                 {
                    id:9,
                    src:code,
                    title:'C++',
                    style: 'shadow-blue-500'
                 },
                
        ];

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 
       to-black w-full md:h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col 
         justify-center w-full h-full text-white">
           
            <div >
                <p className="text-4xl font-bold border-b-4 
                 border-gray-500 p-2 inline">Experience</p>
                <p className="py-6">These are the technologies I've worked with</p>
            </div>

            <div className="w-full  grid grid-cols-2 sm:grid-cols-3 gap-8 
             text-center py-8 px-12 sm:px-0">
               
               
               {

                   techs.map(({id, src, title, style})  => (
                      
                     <div key={id}
                     className={`shadow-md hover:scale-105 duration-500 
                     py-2 rounded-lg ${style}`}
                     >
                        <img src={src} alt="" className="w-20 mx-auto"/>
                        <p className="mt-4">{title}</p>
                    </div>

                   ))

               }
               
              
            </div>
        </div>
    </div>
  );
};

export default Experience ;