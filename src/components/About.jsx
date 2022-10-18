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
            <p className="text-xl mt-20">I am Mohammad Ghiyasuddin a third year undergraduate
                CSE student in Motihari College Of Engineering Motihari.
                I am Passionate towards working in developer field ,i love 
                to work in technology like CSS, Bootstrap, Tailwind, Javascript,
                API, React, Git Github, AWS AND Google Cloud.
            </p>
            <br/>

            <p className="text-xl">
              I have also a community of google crowdsource in which i am the lead person
              of the community and i am also working in creating videos of tech programme 
              and coding on YouTube (2.3k+ subs).
            </p>
        </div>
    </div>
  );
};

export default About;