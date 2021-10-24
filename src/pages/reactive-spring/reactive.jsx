import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../img/arrow.png';
import './reactive.css';

function Reactive (){
    return(
        <div className="page-body">
            <div className="scrollblock">
            <h1>Spring 5 - the simple guide</h1>
            <p>just a simple guide for getting started with reactive spring.</p>
            <p className="meta"> by <Link to="http://gnagia.github.io/">Guneet Singh Nagia </Link></p>
            <div><img src={arrow} alt="down" /></div>
        </div>
    
        <div className="scrollblock block-one">
            <h2>setup/dependencies</h2>
            <p><Link to="#">Java 9+</Link></p>
            <p><Link to="#">webflux</Link></p>
        </div>
    
        <div className="scrollblock block-two">
            <h2>Publisher</h2>
            <p> ----- mono -----</p>
            <div className="meta">Publisher with 0 or 1 element in data stream</div>
            <p><code>Mono.just</code> Create a new Mono that emits the specified item</p>
            <p><code>Mono block</code> Subscribe to this Mono and block indefinitely until a next signal is received</p>
            <p><code>Mono subscribe</code> Subscribe a Consumer to this Mono that will consume all the sequence</p>
            <p><code>Mono map+subscribe</code> Transforms the item emitted by this Mono by applying a synchronous function to it</p>
            
            <br />
            <p> ----- flux -----</p>
            <div className="meta">Publisher with 0 or many element in data stream</div>
            <p><code>flux.just</code> Create a new Mono that emits the specified item</p>
            <p><code>flux filter+next</code> Filtering</p>
            <p><code>single + doOnError + onErrorReturn</code> Error Handling</p>
            <p><code>StepVerifier.create</code> Step Verifier</p>
            <p><code>Flux.generate(SynchronousSink) + delay element</code> Generate streaming event</p>
        </div>

        <div className="scrollblock block-deployment">
            <h2>spring web client</h2>
            <p>Replacement of RestTemplate </p>
            <p><code>webclient.get().uri("...").retrieve().bodyToMono(...class)</code></p>
        </div>
    
       

      </div>
    )

    }

export default Reactive;