(window.webpackJsonpLearning=window.webpackJsonpLearning||[]).push([[0],{18:function(e,a,l){e.exports=l.p+"static/media/arrow.222c6d8e.png"},21:function(e,a,l){e.exports=l(36)},26:function(e,a,l){},27:function(e,a,l){},28:function(e,a,l){},34:function(e,a,l){},35:function(e,a,l){},36:function(e,a,l){"use strict";l.r(a);var t=l(0),n=l.n(t),c=l(13),r=l.n(c),m=l(3),o=(l(26),l(14)),s=l(15),i=l(20),u=l(19),p=l(1),d=(l(27),l(28),function(){return n.a.createElement("div",{className:"body"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"box"},n.a.createElement("div",{className:"content"},n.a.createElement("h2",null,"01"),n.a.createElement("h3",null,"Kubernetes"),n.a.createElement("p",null,"Container Orchestration tool"),n.a.createElement(m.b,{className:"option",to:"/kubernetes"},"Read More1"))),n.a.createElement("div",{className:"box"},n.a.createElement("div",{className:"content"},n.a.createElement("h2",null,"02"),n.a.createElement("h3",null,"Docker"),n.a.createElement("p",null,"Containerization."),n.a.createElement(m.b,{className:"option",to:"/docker"},"Read More2"))),n.a.createElement("div",{className:"box"},n.a.createElement("div",{className:"content"},n.a.createElement("h2",null,"03"),n.a.createElement("h3",null,"Helm"),n.a.createElement("p",null,"yet to discover."),n.a.createElement(m.b,{className:"option",to:"/helm"},"Read More3")))))}),E=l(18),b=l.n(E);l(34);var h=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"scrollblock"},n.a.createElement("h1",null,"Kubernetes - the simple guide"),n.a.createElement("p",null,"just a simple guide for getting started with kubernetes."),n.a.createElement("p",{className:"meta"}," by ",n.a.createElement(m.b,{to:"#"},"Guneet Singh Nagia ")),n.a.createElement("div",null,n.a.createElement("img",{src:b.a,alt:"down"}))),n.a.createElement("div",{className:"scrollblock block-setup"},n.a.createElement("h2",null,"setup"),n.a.createElement("p",null,n.a.createElement(m.b,{to:"#"},"Install minikube ")),n.a.createElement("p",null,n.a.createElement(m.b,{to:"#"},"Install virtualbox")),n.a.createElement("p",null,n.a.createElement(m.b,{to:"#"},"Install minikube"))),n.a.createElement("div",{className:"scrollblock block-object"},n.a.createElement("h2",null,"objects"),n.a.createElement("p",null,"Pods"),n.a.createElement("p",null,"Deployment"),n.a.createElement("p",null,"Service"),n.a.createElement("p",null,"Volume")),n.a.createElement("div",{className:"scrollblock block-pods"},n.a.createElement("h2",null,"pods"),n.a.createElement("p",null,"Smallest unit"),n.a.createElement("p",null,"Check status of running pods : ",n.a.createElement("div",{className:"code"},"kubectl get pods"))),n.a.createElement("div",{className:"scrollblock block-deployment"},n.a.createElement("h2",null,"deployment"),n.a.createElement("p",null,"Smallest unit")),n.a.createElement("div",{className:"scrollblock block-service"},n.a.createElement("h2",null,"Service"),n.a.createElement("p",null,"Resposible for exposing pod to other cluster and externally. It group pods with a shared IP"),n.a.createElement("div",{className:"code"},"kubectl expose deployment (app-name) --p=(port-number) --type=(ClusterIP/NodePort/LoadBalancer)"),n.a.createElement("p",null,"Check status of running services : ",n.a.createElement("div",{className:"code"},"kubectl get services")),n.a.createElement("p",null,"For minikube (local machine), external ip is not provided by default, so run ",n.a.createElement("div",{className:"code"},"minikube service (app-name)")," ")),n.a.createElement("div",{className:"scrollblock block-object"},n.a.createElement("h2",null,"helm"),n.a.createElement("p",null,"Helm is package manager for kubernetes"),n.a.createElement("p",null,"Package yaml file and distribute them in public and private repositories"),n.a.createElement("p",null,"Helm chart - bundle of yaml files, create your own helm charts with helm - push them to helm repository - download and use existing ones"),n.a.createElement("p",null,"Templating engine"),n.a.createElement("p",null,"in ci/cd, use template file and replace value in real time"),n.a.createElement("p",null,"different environment"),n.a.createElement("p",null,"(chart-name) - (Chart.yaml) : meta info about chart (values.yaml) : values for template files (charts) : chart dependencies (templates) : actual template files"),n.a.createElement("div",{className:"code"},"helm install (chartname)"),n.a.createElement("p",null,"Release managment"),n.a.createElement("p",null)),n.a.createElement("div",{className:"scrollblock block-pod"},n.a.createElement("h2",null,"miscellaneous commands"),n.a.createElement("p",{className:"meta"},"manual scaling ",n.a.createElement("div",{className:"code"},"kubectl scale deployment/(app-name) --replica=(number)")),n.a.createElement("p",{className:"meta"},"history of deployment ",n.a.createElement("div",{className:"code"},"kubectl rollout history deployment/(app-name)")),n.a.createElement("p",{className:"meta"},"rollback to last ",n.a.createElement("div",{className:"code"},"kubectl rollout undo deployment/(app-name)")),n.a.createElement("p",{className:"meta"},"rollout to particular older version ",n.a.createElement("div",{className:"code"},"kubectl rollout undo deployment/(app-name) --to-revision=(number)"))))};var k=function(){return n.a.createElement("h1",null,"coming shortly")};l(35);var v=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"scrollblock"},n.a.createElement("h1",null,"Docker - the simple guide"),n.a.createElement("p",null,"just a simple guide for getting started with docker."),n.a.createElement("p",{className:"meta"},"by ",n.a.createElement(m.b,{to:"#"},"Guneet Singh Nagia")),n.a.createElement("div",null,n.a.createElement("img",{src:"img/arrow.png",alt:"down"}))),n.a.createElement("div",{className:"scrollblock block-setup"},n.a.createElement("h2",null,"build image"),n.a.createElement("br",null),n.a.createElement("code",null,"docker build -t (app-name) .")),n.a.createElement("div",{className:"scrollblock block-object"},n.a.createElement("h2",null,"push image to docker hub"),n.a.createElement("p",null,"If not logged in :",n.a.createElement("code",null,"docker login")),n.a.createElement("p",null,n.a.createElement("code",null,"docker tag (app-name) (dockerid)/(app-name)")),n.a.createElement("p",null,n.a.createElement("code",null,"docker push (dockerid)/(app-name)"))),n.a.createElement("div",{className:"scrollblock block-pods"},n.a.createElement("h2",null,"deploy in aws"),n.a.createElement("p",null,"Smallest unit")),n.a.createElement("div",{className:"scrollblock block-deployment"},n.a.createElement("h2",null,"deploy in aws"),n.a.createElement("p",null,"Smallest unit")))},N=function(e){Object(i.a)(l,e);var a=Object(u.a)(l);function l(){return Object(o.a)(this,l),a.apply(this,arguments)}return Object(s.a)(l,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(p.c,null,n.a.createElement(p.a,{path:"/",exact:!0,component:d}),n.a.createElement(p.a,{path:"/kubernetes",component:h}),n.a.createElement(p.a,{exact:!0,path:"/docker",component:v}),n.a.createElement(p.a,{exact:!0,path:"/helm",component:k})))}}]),l}(n.a.Component);r.a.render(n.a.createElement(m.a,null,n.a.createElement(N,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.1cbd2bca.chunk.js.map