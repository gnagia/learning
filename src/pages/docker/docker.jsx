import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../img/arrow.png';
import './styles-docker.css';

function Docker (){
    return(
        <div className="page-body">
            <div className="scrollblock">
            <h1>Docker - the simple guide</h1>
            <p>just a simple guide for getting started with docker.</p>
            <p className="meta">
                by <Link to="http://gnagia.github.io/">Guneet Singh Nagia</Link> 
            </p>
            <div><img src={arrow} alt="down" /></div>
            </div>

            <div className="scrollblock block-setup">
                <h2>Image</h2>
                <p>First Create DockerFile</p>
                <p>Create image : <code>docker build -t (image-name) .</code></p>
                <p>List images : <code>docker images</code> </p>
                <p>Delete image : <code>docker rmi (image-name)</code></p>
                
            </div>

            <div className="scrollblock block-object">
                <h2>Run Image as Container</h2>
                <p>Create Container : <code>docker push (dockerid)/(app-name)</code></p>
            </div>

            <div className="scrollblock block-deployment">
            <h2>push image to docker hub</h2>
            <p>If not logged in :
            <code>docker login</code></p>
            <p><code>docker tag (app-name) (dockerid)/(app-name)</code></p>
            <p><code>docker push (dockerid)/(app-name)</code></p>
            </div>

            <div className="scrollblock block-pods">
            <h2>deploy in aws</h2>
            <p>Smallest unit</p>
            </div>

            <div className="scrollblock block-deployment">
            <h2>deploy in aws</h2>
            <p>Smallest unit</p>
            </div>
        </div>
    )
    }

export default Docker;