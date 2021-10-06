import React from 'react';

function helm (){
    return(
        <div className="page-body">
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
        </div>
    )
}

export default helm;