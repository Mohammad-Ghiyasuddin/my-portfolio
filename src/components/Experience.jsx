import React from "react" ;

import linux from '../assest/linux.png' ;
import cicd from '../assest/cicd.png';
import docker from '../assest/docker.png';
import prometheus from '../assest/prometheus.png' ;
import grafana from '../assest/grafana.png';
import mysql from '../assest/mysql.png';
import python  from '../assest/python.png' ;
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
                    src:cicd,
                    title:'CI/CD',
                    style: 'shadow-blue-600'
                 },
                 {
                    id:3,
                    src:docker,
                    title:'Docker',
                    style: 'shadow-blue-500'
                 },
                 {
                    id:4,
                    src:prometheus,
                    title:'Prometheus',
                    style: 'shadow-sky-400'
                 },
                 {
                    id:5,
                    src:grafana,
                    title:'Grafana',
                    style: 'shadow-yellow-500'
                 },
                 
                 {
                  id:6,
                  src:mysql,
                  title:'MySql',
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
                    src:python,
                    title:'Python',
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