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
                    <p>I will finish a coding bootcamp in December and ready to start my career. While working in a fulltime bootcamp that has been very thourough and as hands-on as possible i am looking forward to the next step.</p> 
                </div>
                    <a href="https://github.com/ryandelonhull"><h3>Github Repository</h3></a>
                    <a href="https://docs.google.com/document/d/1fNzXuV-SX1jWznRq_PfvUiTrBcpfL71i1Lid91G-icQ/edit?usp=sharing"><h3>Resume</h3></a>
            </div> 
        </div>

)
}

export default About