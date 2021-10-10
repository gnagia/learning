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

            <div className="scrollblock block-one">
                <h2>Image</h2>
                <p>First Create DockerFile</p>
                <p>Create image : <code>docker build -t (image-name) .</code></p>
                <p>List images : <code>docker images</code> </p>
                <p>Delete image : <code>docker rmi (image-name)/docker prune</code></p>
                <p>Analyze image : <code>docker image inspect</code></p>
                
            </div>

            <div className="scrollblock block-two">
                <h2>Container</h2>
                <p>Next is to run image as container, we can run as much containers we need from an image</p>
                <p>Create Container : <code>docker run -d -p (port1:port2) --name (container-name) (dockerid)/(image-name)</code></p>
                <p>List Containers : <code>docker ps -a</code></p>
                <p>Stop Container : docker stop (container-name)</p>
                <p>Delete Container : docker rm (container-name)</p>
                <p>Logs of a Container : docker logs -f (container-name)</p>
            </div>

            <div className="scrollblock block-deployment">
            <h2>push image to docker hub</h2>
            <p>If not logged in :
            <code>docker login</code></p>
            <p><code>docker tag (app-name) (dockerid)/(app-name)</code></p>
            <p><code>docker push (dockerid)/(app-name)</code></p>
            </div>

            <div className="scrollblock block-deployment">
            <h2>docker network</h2>
            <p>1) container to web, by default it is established.</p>
            <p>2) container to Local DB, replace `localhost` in url with <code>host.docker.internal</code> or <code>docker.for.mac.host.internal</code></p>
            <p>3) container to container communication
                <div>Option 1 : Hardcode IPs</div>
                <code>docker container inspect (conatiner-name)</code>. Then Copy the `IPAddress` under `NetworkSettings`. Then replace localhost with ipaddress of container .
                <div>Option 2: Use network</div>
                <div>Create Network <code>docker network create (network-name)</code></div>
                <div>List Networks <code>docker network ls </code></div>
                <div>Run container within network <code>docker run --network (network-name) ...</code></div>
                <div>Replace localhost with container name and no need to publish port, as containers can interact freely with other container within network.</div>
            </p>
            </div>

            <div className="scrollblock block-pods">
            <h2>deploy in cloud</h2>
            <p>AWS : connect to EC2, where </p>
            </div>
        </div>
    )
    }

export default Docker;