import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b 
       from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col 
            justify-center w-full h-full">
            <div className="pb-8">
               <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className="text-xl mt-20">I am Mohammad Ghiyasuddin a second year undergraduate
                CSE student in Motihari College Of Engineering Motihari.
                I am Passionate towards working in developer field and Cloud Enthusiasts ,i love 
                to work in technology like CSS, Bootstrap, Tailwind, Javascript,
                API, React, Git Github, AWS AND Google Cloud.
            </p>
            <br/>

            <p className="text-xl">
              I am also a working in community building of google crowdsource 
              and i love to creating videos .I have a YouTube Channel where i
              make videos of tech programme and coding (2.4k+ subs).
            </p>
        </div>
    </div>
  );
};

export default About;
