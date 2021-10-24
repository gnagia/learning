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
    
        <div className="scrollblock block-one">
            <h2>setup</h2>
            <p><Link to="https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/">Install kubectl </Link></p>
            <p><Link to="#">Install virtualbox</Link></p>
            <p><Link to="https://minikube.sigs.k8s.io/docs/start/">Install minikube</Link></p>
        </div>
    
        <div className="scrollblock block-two">
            <h2>Objects</h2>
            <div style={{display:'flex', flexDirection:'row'}}>
                <p>Pods</p>
                <p>Deployment</p>
                <p>Service</p>
                <p>Replica Set</p>
            </div>
        </div>
    
        <div className="scrollblock block-three">
            <h2>pods</h2>
            <p>Smallest unit, contains containers, it deploys single instance of an application</p>
            <i><h6 style={{textAlign:"left"}}>
                <ul>apiVersion: v1</ul>
                <ul>kind: Pod</ul>
                <ul>metadata:
                    <li className="single">name:</li>
                    <li className="single">labels:</li>
                    <li className="double">key1:value1</li>
                    <li className="double">key2:value2</li>
                </ul>
                <ul>spec:
                    <li className="single">containers:</li>
                    <li className="double">- name:</li>
                    <li className="double"> &nbsp;&nbsp;&nbsp;image:</li>
                </ul>
            </h6></i>
            <p>Create a Pod: <code>kubectl create -f (pod-name).yml</code></p>
            <p>Check status of running pods: <code>kubectl get pods</code></p>
            <p>All Details of pod: <code>kubectl describe pod (pod-name)</code></p>
            <p>Few Details of pod: <code>kubectl get pods  -o wide</code></p>
        </div>
    
        <div className="scrollblock block-four">
            <h2>deployment</h2>
            <p>Rolling updates, undo changes, pause and resume changes </p>
            <p className="meta"> If we create Deployment object, it will by default create replicaSet which by default creates Pods</p>
            <i><h6 style={{textAlign:"left"}}>
                <ul>apiVersion: apps/v1</ul>
                <ul>kind: Deployment</ul>
                <ul>metadata:
                    <li className="single">name:</li>
                    <li className="single">labels:</li>
                    <li className="double">key1:value1</li>
                    <li className="double">key2:value2</li>
                </ul>
                <ul>spec:
                    <li className="single">replicas:</li>
                    <li className="single">selector:</li>
                    <li className="double">matchLables:</li>
                    <li className="triple">type:</li>
                    <li className="single">template:</li>
                    <li className="double">metadata:</li>
                    <p className="meta triple" style={{color:'white'}}>(copy metadata from pod object)</p> 
                </ul>
            </h6></i>
            <p>Create a Deployment: <code>kubectl create -f (deployment-name).yml</code></p>
            <p>Check status of running deployment: <code>kubectl get deployment</code></p>
            <p>Rollback: <code>kubectl rollout status deployment/(deployment-name)</code> </p>
            <p>History: <code>kubectl rollout history deployment/(deployment-name)</code> </p>
            <p>Update: <code>kubectl apply -f (deployment-name).yml</code> </p>
        </div>
    
        <div className="scrollblock block-five">
            <h2>Service</h2>
            <p>Resposible for exposing pod to other cluster and externally. It group pods with a shared IP</p>
            <i><h6 style={{textAlign:"left"}}>
                <ul>apiVersion: v1</ul>
                <ul>kind: Service</ul>
                <ul>metadata:
                    <li className="single">name:</li>
                </ul>
                <ul>spec:
                    <li className="single">type:</li>
                    <li className="single">ports:</li>
                    <li className="double">- &nbsp;&nbsp;&nbsp;targetPort:</li>
                    <li className="double">&nbsp;&nbsp;&nbsp;&nbsp; port:</li>
                    <li className="double">&nbsp;&nbsp;&nbsp;&nbsp; nodePort:</li>
                    <li className="single">selector:</li>
                    <li className="double">app:</li>
                    <li className="double">type:</li>
                </ul>
                <div className="meta">selector is labels of pod</div>
                <div className="meta">type: NodePort/ClusterIP/LoadBalancer</div>
                <div className="meta">targetPort is port of POD</div>
                <div className="meta">port is port of service</div>
                <div className="meta">nodePort is port exposed to external world between 30000-32767</div>

            </h6></i>
            <p>Create a Service: <code>kubectl create -f (service-name).yml</code></p>
            <p>Check status of running services : <code>kubectl get services</code></p>
            <p>Alternate : <code>kubectl expose deployment (app-name) --p=(port-number) --type=(ClusterIP/NodePort/LoadBalancer)</code></p>
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