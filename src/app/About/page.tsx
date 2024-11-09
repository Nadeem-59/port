import Image from "next/image";




const About = () =>{

    return(
            <div id="mainabout">
                <div id="paragraph2">
                <p><b>Hello! I am Mustabshira Khalid,My Education is graduate plus B.ED. My journey in technology began with a curiosity about how the web works, which gradually turned into a passion for coding and building projects. I am particularly interested in front-end development, where I love bringing creative designs to life.</b></p>

                <p id="a">Currently, I am doing course of Web Development Meta Verse 3.0 I am learned  HTML, CSS,JavaScript and TypeSript, and now  learning  Next.js and Tailwind CSS to create Responsive Projects and websites also.</p>

                <p id="b">I am committed to growing as a developer and constantly challenging myself to learn new skills. With each project, I strive to create a better user experience and design. I am always open to collaboration and look forward to connecting with others who share a passion for tech and innovation.</p>
                </div>

                <div id="image2">
                    <Image src="/images/headphone.jpg"
                     alt="profilepicture"
                     width={250}
                     height={250}
                     /> 
                </div>
            </div>
    )
}
export default About;