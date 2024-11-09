import Image from "next/image";


const Skills = () =>{
    return(
             <div>
           <div id="mainskills">
                <h1>Skills</h1>
           </div>
          

            <div id="first" >
                
           
         </div>
          <div id="imagesection1">
           <div id="image6">
              <Image src="/images/h.PNG" alt="html-logo"
              width={250}
              height={250} />
              <h1>HTML</h1>
           
             
           </div>
            
           <div id="image7">
              <Image src="/images/c.PNG" alt="css-logo" width={250}
               height={250} />
              <h1>CSS</h1>
             
             </div>
             <div id="image8">
              <Image src="/images/js.png" alt="javascript-logo"
               height={250} width={250} />
              <h1>Javascript</h1>
            </div>
           </div>
             <div id="mainskills2">
                
                </div>
             <div id="imagesection2">
                <div id="image9">
                 <Image src="/images/next.png" alt="nextjs"width={250} height={250} />
                 <h1>Nextjs</h1>
                </div>
               
                <div id="image10">
                 <Image src="/images/tailwind.png" alt="csstailwind"
                 height={250}
                 width={250} />
                 <h1>CSS Tailwind</h1>
                </div>
             </div>

             <div>

             </div>
           </div>
       
 )
}

export default Skills;