YUI.add("event-mouseenter",function(F){var A=F.Lang.isString,C=function(J,G,I,K,H){if(!J.compareTo(G)&&!J.contains(G)){K.container=K.currentTarget;K.currentTarget=J;F.fire(I,K);}},D=function(L,I,H){var G=L.relatedTarget,K=L.currentTarget,J=L.target;if(H){K.queryAll(H).some(function(M){var N;if(M.compareTo(J)||M.contains(J)){C(M,G,I,L,H);N=true;}return N;});}else{C(K,G,I,L);}},E=F.cached(function(G){return G.replace(/[|,:]/g,"~");}),B={on:function(L,K,J,H){var G=(L==="mouseenter")?"mouseover":"mouseout",M=L+":"+(A(J)?J:F.stamp(J))+G,I=F.Array(arguments,0,true),N;if(A(H)){N=H;M=M+E(N);}if(!F.getEvent(M)){F.on(G,function(O){D(O,M,N);},J);}I[0]=M;if(N){I.splice(2,2);}else{I.splice(2,1);}return F.on.apply(F,I);}};F.Env.evt.plugins.mouseenter=B;F.Env.evt.plugins.mouseleave=B;},"@VERSION@");