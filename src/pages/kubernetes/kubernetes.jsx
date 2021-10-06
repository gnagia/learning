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
        </div>
    
        <div className="scrollblock block-pods">
            <h2>pods</h2>
            <p>Smallest unit</p>
            <p>Check status of running pods : <div className="code">kubectl get pods</div></p>
        </div>
    
        <div className="scrollblock block-deployment">
            <h2>deployment</h2>
            <p>Smallest unit</p>
        </div>
    
        <div className="scrollblock block-service">
            <h2>Service</h2>
            <p>Resposible for exposing pod to other cluster and externally. It group pods with a shared IP</p>
            <div className="code">kubectl expose deployment (app-name) --p=(port-number) --type=(ClusterIP/NodePort/LoadBalancer)</div>
            <p>Check status of running services : <div className="code">kubectl get services</div></p>
            <p>For minikube (local machine), external ip is not provided by default, so run <div className="code">minikube service (app-name)</div> </p>
        </div>
    
        <div className="scrollblock block-object">
            <h2>helm</h2>
            <p>Helm is package manager for kubernetes</p>
            <p>Package yaml file and distribute them in public and private repositories</p>
            <p>Helm chart - bundle of yaml files, create your own helm charts with helm - push them to helm repository - download and use existing ones</p>
            <p>Templating engine</p>
            <p>in ci/cd, use template file and replace value in real time</p>
            <p>different environment</p>
            <p>(chart-name) -
            (Chart.yaml) : meta info about chart
            (values.yaml) : values for template files
            (charts) : chart dependencies
            (templates) : actual template files
            </p>
            <div className="code">helm install (chartname)</div>
            <p>Release managment</p>
            <p></p>
        </div>
    
        <div className="scrollblock block-pod">
            <h2>miscellaneous commands</h2>
            <p className="meta">manual scaling <div className="code">kubectl scale deployment/(app-name) --replica=(number)</div></p>
            <p className="meta">history of deployment <div className="code">kubectl rollout history deployment/(app-name)</div></p>
            <p className="meta">rollback to last <div className="code">kubectl rollout undo deployment/(app-name)</div></p>
            <p className="meta">rollout to particular older version <div className="code">kubectl rollout undo deployment/(app-name) --to-revision=(number)</div></p>
        </div>
      </div>
    )

    }

export default Kubernetes;