import "./about.css";

function About () {
    return (

        <div className="container-md about" id="index-container"> 
            <div className="col-8 m-5 p-3">
                <div className="span4">
                        <h2>About Me</h2>
                        <div className="float-left">
                            <img className="portrait m-3" src={window.location.origin + `/Images/IMG_8135.jpeg`} alt="Ry smiling" id="profilePic"></img>
                        </div>  
                    <p>I have an unhealthy obsession with jigsaw puzzles and puzzle video games. Simultaneously calming and invigorating, they have always been a nice repose from the daily grind. Coding gives me that same feeling. </p>
                    <p>I will finish a full stack MERN coding bootcamp in December and i am ready to start this next chapter in my new career. While working in a fulltime bootcamp that has been very thourough and as hands-on as possible i am looking forward to the next step.</p> 
                </div>
                    <a href="https://linkedin.com/in/ryan-hull-94003144" target="_blank"><h3>Linked In</h3></a>
                    <a href={window.location.origin + `/assets/resume.pdf`} target="_blank"><h3>Resume</h3></a>
                    <h3>Ryandelonhull@gmail.com</h3>
            </div> 
        </div>

)
}

export default About