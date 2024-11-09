import Image from "next/image";


const Project = () =>{
    return(
        <div>
            <div id="projectheading">
                <h1>My Projects</h1>
            </div>
            <div id="mainimage">
                <div id="image3">
                    <Image src="/images/book.jpg"alt="project1"
                    width={250}
                    height={250}/>
                    <p>Project 1</p> 
                    
              </div>
                <div id="image4">
                  <Image src="/images/watches.jpg" alt="project2"
                    width={250}
                    height={250}/>
                  <p>Project 2</p>
                  
                </div>
                <div id="image5">
                    <Image src="/images/coffeeproject.jpg" alt="project3"width={250}
                    height={250} />
                    <p>Project 3</p>
                

                </div>
            </div>
        </div>
    )
}

export default Project;