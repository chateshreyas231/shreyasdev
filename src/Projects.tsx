import React, { useEffect, useState } from 'react';
import './Projects.css';
import { BsArrowUpRight } from "react-icons/bs";
import S1 from '../src/components/images/S1.png';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [messageText, setMessageText] = useState("");

    useEffect(() => {
        // Check if the page has been reloaded in this session
        if (sessionStorage.getItem("isReloaded") !== "true") {
            setTimeout(() => {
                // Reload the page
                window.location.reload();
                // Set a flag in sessionStorage to indicate the page has been reloaded
                sessionStorage.setItem("isReloaded", "true");
            }, 2000); // 2000 milliseconds = 2 seconds
        }
    }, []);
    
    return (
        <div className='backgroundpro'>
               
            <div className='header-pro'> 
                <div className='header-sub'><Link className='ex-back' to="/me">*</Link> </div>
                <div className='header-sub'>Projects</div>
                <div className='header-sub'><div className='loader'></div></div>
            </div>
            
       
       <div className='project-list'>
        <div className='project'>
            <div className='project-headings'>CIRCLES <Link className='bottom-subpro'to={'https://github.com/chateshreyas231/Circles'}><BsArrowUpRight /></Link></div>
            <div className='project-description'>A Social networking app which makes you engage and connect with all the pople you have met in you lifetime!
            <br/><br/>
            Built Using: React Native, Redux, Reouter, Expo-client, Node JS, Typescript, AWS S3, RDS, Amplify, Cognito</div>
        </div>

        <div className='project' >        
            <div className='project-headings'>UWM HELPDESK CHATBOT <Link className='bottom-subpro'to={'https://github.com/chateshreyas231/HelpDeskChatbot'}><BsArrowUpRight /></Link></div>
            <div className='project-description'>A Chatbot which helped students to connect with university 
            reagarding thier account issues, reducing the resolution time.
            <br/>
            <br/>Built Using: React, Redux, Typescript, Huggingface, AWS, NodeJS</div>
        </div>

        <div className='project' >        
            <div className='project-headings'>ANGRYBIRDS VR <Link className='bottom-subpro'to={''}><BsArrowUpRight /></Link></div>
            <div className='project-description'>A Virtual Reality AngryBirds game using Unity 3D, Translational and Rotational movements, Locomotion technique and RayCasting ops.
            <br/>
            <br/>Built Using: Unity 3D, C# Scripts, Oculus Headset 2 Meta</div>
        </div>
        <div className='project' >        
            <div className='project-headings'>IMAGE PROCESSING FOR SNAPSHOT PROJECTION OPTICAL TOMOGRAPHY<Link className='bottom-subpro'to={''}><BsArrowUpRight /></Link></div>
            <div className='project-description'>Optimized the MATLAB Code for processing images used for background
subtraction and median filter by writing code in C language.
which reduced time consumption for processing 100,000 images and providing output
back to MATLAB program
            <br/>
            <br/>Built Using: C, Matlab, CIPS</div>
        </div>

        <div className='project'>
            <div className='project-headings'>BIGSCREEN <Link className='bottom-subpro'to={'https://github.com/chateshreyas231/The-Big-Screen'}><BsArrowUpRight /></Link></div>
            <div className='project-description'>A movie app which buffers and renders all the lateset movies using TheMovieDB API
            <br/>
            <br/>Built Using: ReactJS, Router, Javascript, Firebase, OAuth, TheMovieDB API </div>
            
        </div>
        <div className='project'>
            <div className='project-headings'>FB SOCIAL NETWORKING APP <Link className='bottom-subpro'to={'https://github.com/chateshreyas231/fb-clone'}><BsArrowUpRight /></Link></div>
            <div className='project-description'>A social Netowrking clone and a chat application
            <br/>
            <br/>Built Using: ReactJS, Router, Javascript, Firebase,<br/> OAuth, Google User Auth, Facebook News Feed API, Live Status Updates</div>
            </div>

        <div className='project'>
            <div className='project-headings'>TWITTER SENTIMENT ANALYSIS FOR UKRAINE RUSSIA WAR<Link className='bottom-subpro'to={''}><BsArrowUpRight /></Link></div>
            <div className='project-description'>This project detected sentiment for all twitter posts using latest kaggle dataset.
                IDevelopment done to get all the necessary EDA’s based on location of the tweet to
                detect the type of sentiment and the location from which the particular tweet was
                posted
                <br/>
            <br/>Built Using: Python, TensorFlow, Keras, NLP, Anaconda</div>
            </div>
        <div className='project'>
            <div className='project-headings'>AMAZON SHOPIFY <Link className='bottom-subpro'to={'https://github.com/chateshreyas231/amazon-clone'}><BsArrowUpRight /></Link></div>
            <div className='project-description'>A hobby project to build the Shopping Webiste integrating authentication, and payment methods using stripe
            <br/>
            <br/>Built Using: ReactJs, User Authentication, Login, Logout, Product Cart, Firebase, Stripe Payment API, Real Time Order History</div>
            </div>
            <div className='project'>
            <div className='project-headings'>ELECTRICITY THEFT DETECTOR <Link className='bottom-subpro'to={'https://github.com/chateshreyas231/Electricity-Theft-Detection'}><BsArrowUpRight /></Link></div>
            <div className='project-description'>A system that detects theft by recognizing patterns according to seasons.
where the deployed model can send the automatic e-mail notification to electricity provider
admin if theft is detected at user’s place.
<br/><br/>Built Using: Anaconda, Spyder, Python Tkinter, Numpy, Pandas, Google Colud Vision API,<br/> Matplot Lib, Seaborn, SciKit Learn, Tensorflow
</div>
            </div>
        <div className='project'>
            <div className='project-headings'>GOOGLE STOCK PRICE PREDICATION <Link className='bottom-subpro'to={'https://github.com/chateshreyas231/Google-Stock-Price-Prediction-Deep-Learning'}><BsArrowUpRight /></Link></div>
            <div className='project-description'>A deep learning backend, in which I analyzed 5 yr. dataset for prediction of stock prices of current year.
            <br /><br />Built Using:
            Recurrent Neural Networks, LSTM, scikit-learn, MatPlot Lib,<br /> Keras,TensorFlow, Training And Testing, Visualizations, Jupyter NoteBook</div>
            </div>
        <div className='project'>
            <div className='project-headings'>ELECTION WINNER PREDICTOR <Link className='bottom-subpro'to={'https://github.com/chateshreyas231/Election-Prediction-using-machine-Learning'}><BsArrowUpRight /></Link></div>
            <div className='project-description'>An academic project where a model was deployed to predict the election winner following the trends and peoples prefrences along the years in past.<br /><br />Built Using:
             Jupyter Notebook, Python, Numpy, Pandas, Matplot Lib, Seaborn, SciKit Learn</div>
            </div>
        <div className='project'>
            <div className='project-headings'>FACE MASK DETECTOR <Link className='bottom-subpro'to={'https://github.com/chateshreyas231/Face-Mask-Detection'}><BsArrowUpRight /></Link></div>
            <div className='project-description'>A Face mask detector system implemented at a local company to detect if the face mask is ON for saftey and security purpose at the location. A basic monitoring system for security gaurds.
            <br /><br />Built Using: Python, Numpy, Keras,<br /> Seaborn, Tensorflow, SciKit Learn</div>
            </div>

       </div>

        </div>

    );
};

export default Projects;
