import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../img/arrow.png';
import './styles.css';

function Kubernetes (){
    return(
        <div className="page-body">
            <div className="scrollblock">
            <h1>Kubernetes - the simple guide</h1>
            <p>just a simple guide for getting started with kubernetes.</p>
            <p className="meta"> by <Link to="http://gnagia.github.io/">Guneet Singh Nagia </Link></p>
            <div><img src={arrow} alt="down" /></div>
        </div>
    
        <div className="scrollblock block-setup">
            <h2>setup</h2>
            <p><Link to="#">Install minikube </Link></p>
            <p><Link to="#">Install virtualbox</Link></p>
            <p><Link to="#">Install minikube</Link></p>
        </div>
    
        <div className="scrollblock block-object">
            <h2>objects</h2>
            <p>Pods</p>
            <p>Deployment</p>
            <p>Service</p>
            <p>Volume</p>
            <p>Network</p>
        </div>
    
        <div className="scrollblock block-pods">
            <h2>pods</h2>
            <p>Smallest unit</p>
            <p>Check status of running pods : <code>kubectl get pods</code></p>
        </div>
    
        <div className="scrollblock block-deployment">
            <h2>deployment</h2>
            <p>Control pods</p>
        </div>
    
        <div className="scrollblock block-service">
            <h2>Service</h2>
            <p>Resposible for exposing pod to other cluster and externally. It group pods with a shared IP</p>
            <code>kubectl expose deployment (app-name) --p=(port-number) --type=(ClusterIP/NodePort/LoadBalancer)</code>
            <p>Check status of running services : <code>kubectl get services</code></p>
            <p>For minikube (local machine), external ip is not provided by default, so run <code>minikube service (app-name)</code> </p>
        </div>
    
        <div className="scrollblock block-pod">
            <h2>miscellaneous commands</h2>
            <p className="meta">manual scaling <code>kubectl scale deployment/(app-name) --replica=(number)</code></p>
            <p className="meta">history of deployment <code>kubectl rollout history deployment/(app-name)</code></p>
            <p className="meta">rollback to last <code>kubectl rollout undo deployment/(app-name)</code></p>
            <p className="meta">rollout to particular older version <code>kubectl rollout undo deployment/(app-name) --to-revision=(number)</code></p>
        </div>

        <div className="scrollblock block-pods">
            <h2>config.yml</h2>
            <code>kubectl apply -f config.yml</code>
        </div>


      </div>
    )

    }

export default Kubernetes;