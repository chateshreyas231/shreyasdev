import React from 'react';
import './Experience.css'
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Experience = () => {
    return (
        <>
        <div className='bodone'>    
        <div> 
               <div className='header'> 
               <div className='header-sub'>
               <Link className='ex-back' to="/me">*</Link> 
               </div>
                    <div className='header-sub'>Experience</div>
                    <div className='header-sub'><div className='play'></div></div>
                    
                    
                </div>
                <div className='ex-list'>
                    <div className='ex'>
                        <div className='ex-headings'>VOLKSWAGEN IT SERVICES, INDIA <BsArrowUpRight /></div>
                        <div className='ex-description'>Software Engineer
                        <br/><br/>
                        Aug 2021 - Aug 2022</div>
                    </div>
                    <div className='ex' >        
                        <div className='ex-headings'>VIBRANT MIND TECHNOLOGIES<BsArrowUpRight /></div>
                        <div className='ex-description'>Software Developer Intern/Co-op
                        <br/>
                        <br/>Sept 2019 - July 2021</div>
                    </div>
                </div >
        </div> 
        <div>
             <div className='header'>Education </div>
                <div className='ex-list'>

                <div className='ex' >        
                    <div className='ex-headings'>University Of Wisconsin Milwaukee, USA<BsArrowUpRight /></div>
                    <div className='ex-headings-course'>Masters of Science in Computer Science</div>
                    <div className='ex-description'>Relevant Coursework : </div>
                    <div className='ex-description-course'>COMPSCI 552G Adv Object-Oriented Programmg</div>
                    <div className='ex-description-course'>COMPSCI 711 Introduction to Machine Learni</div>
                    <div className='ex-description-course'>COMPSCI 720 Cmputatnl Models Decision Mkng</div>
                    <div className='ex-description-course'>COMPSCI 723 Natural Language Processing</div>
                    <div className='ex-description-course'>COMPSCI 725 Robot Motion Planning</div>
                    <div className='ex-description-course'>COMPSCI 743 Intelligent User Interfaces</div>
                    <div className='ex-description-course'>COMPSCI 790 Adv Topics in Computer Science (Introduction to Research Computing)</div>
                    <div className='ex-description-course'>COMPSCI 790 Adv Topics in Computer Science (Immersive Technologies and 3D User Interfaces)</div>
                    <div className='ex-description-course'><br/>GPA: 3.4/4</div>
                </div>
                <div className='ex' >        
                    <div className='ex-headings'>Savitribai Phule Pune University, Pune, India<BsArrowUpRight /></div>
                    <div className='ex-headings-course'>Bachelors of Engineering in Information Technology</div>
                    <div className='ex-description'>Relevant Coursework : </div>
                    <div className='ex-description-course'>110003 Fundamentals of Programming</div>
                    <div className='ex-description-course'>214441 Computer Organization and Architecture</div>
                    <div className='ex-description-course'>214442 Cmputatnl Models Decision Mkng</div>
                    <div className='ex-description-course'>214445 Problem Solving and Object Oriented Programming</div>
                    <div className='ex-description-course'>214452 Data Structure and Files</div>
                    <div className='ex-description-course'>314441 Theory of Computation</div>
                    <div className='ex-description-course'>314442 Database Management systems</div>
                    <div className='ex-description-course'>314452 Design Analysis and Algorithm </div>
                    <div className='ex-description-course'>314453 Colud Computing</div>
                    <div className='ex-description-course'>314454 Data Science and Big Data Analytics</div>
                    <div className='ex-description-course'>414453 Informationa and Cybersecurity</div>
                    <div className='ex-description-course'>414454 Machine Learning</div>
                    <div className='ex-description-course'>414455 Software Design</div>
                    <div className='ex-description-course'>414456E Buisness Analytics</div>
                    <div className='ex-description-course'><br/>GPA: 8.2/10</div>
                    <br/>
                </div>
                </div>
       
                 </div>
                 
        <div className='game'>
          <div className="game__foreground">
                <div className="foreground__mario"></div>
                <div className="mario-ground"></div>
            </div>
          </div>
          </div>


       </>
        
    );
};

export default Experience;
