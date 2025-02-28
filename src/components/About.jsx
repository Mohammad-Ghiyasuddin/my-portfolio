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
            <p className="text-xl mt-20">I am a DevOps Engineer with strong expertise in AWS, GCP, Linux, Docker, Networking, CI/CD, Git, GitHub, Prometheus, and Grafana.
               I hold a degree in Computer Science and Engineering (CSE), class of 2024, and have worked extensively in cloud infrastructure, server management, CI/CD automation, serverless architectures, monitoring, and cost optimization.
               With hands-on experience in designing and deploying scalable cloud solutions, I specialize in optimizing system performance, ensuring seamless deployments, 
               and maintaining high availability.

              I am also a Cloud Architect and Cloud DevOps Certified Professional, continuously exploring innovative cloud technologies to enhance operational efficiency.
            </p>
            <br/>

            <p className="text-xl">
              I am also a working in community building of google crowdsource 
              and i love to creating videos .I have a YouTube Channel where i
              make videos of tech programme and cloud devops (5.8k+ subs).
            </p>
        </div>
    </div>
  );
};

export default About;
