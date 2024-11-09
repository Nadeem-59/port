import Image from "next/image";



export default function Home() {
  return (
            
           <div id="mainpage">
                <div id="image1">
                  <Image 
                  src="/images/double.png"
                  alt="profilepicture"
                  width={300} 
                  height={250}
                  
                   />
                </div>

                <div id="paragraph1">
                  <p><b>Hello! I am Mustabshira Khalid,My Education is graduate plus B.ED. My journey in technology began with a curiosity about how the web works, which gradually turned into a passion for coding and building projects. I am particularly interested in front-end development, where I love bringing creative designs to life</b>.</p>
                  
                  
                </div>
           </div>
  );
}