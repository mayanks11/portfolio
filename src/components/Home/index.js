import React, {Suspense} from "react";
import {Link} from"react-router-dom";
import {OrbitControls} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./M";
import Rotate from "./Model";

import './index.scss';
function Home(){
    
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1> Hi, <br/> I'm
                <Canvas className="canvas">
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[-2, 5, 2]} intensity ={1} />
                <Suspense>
                <Model/>
                
                </Suspense>
            </Canvas><p className="name">ayank Srivastava <br/> Web Developer</p>
               </h1>
                <br/>
                <h2>Full Stack Developer</h2>
                <Link to ="/contact" className='flat-button'>Contact Me</Link>
            </div>

            <div className="rotate-logo">
            <Canvas className="canvas">
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[-2, 5, 2]} intensity ={1} />
                <Suspense>
                <Rotate/>
                
                </Suspense>
            </Canvas>
            </div>
            
        </div>

    )
}
export default Home;