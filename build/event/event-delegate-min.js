YUI.add("event-delegate",function(A){(function(){var G=A.Lang,E={},D=function(I){try{if(I&&3==I.nodeType){return I.parentNode;}}catch(H){}return I;},C=function(J,P,K){var Q=D((P.target||P.srcElement)),L=E[J],S,M,H,O,I,R,N;for(S in L){if(L.hasOwnProperty(S)){M=L[S];H=A.Selector.query(S,K);O=H.length;if(O>0){N=H.length-1;do{I=H[N];if(I===Q||A.DOM.contains(I,Q)){if(!R){R=new A.DOMEventFacade(P,K);R.container=R.currentTarget;}R.currentTarget=A.Node.get(I);A.fire(M,R);}}while(N--);}}}},B=function(J,I,H){A.Event._attach([J,function(K){C(I,(K||window.event),H);},H],{facade:false});},F=A.cached(function(H){return H.replace(/[|,:]/g,"~");});A.Env.evt.plugins.delegate={on:function(M,O,J,H,Q){if(!Q){return false;}var N=(G.isString(J)?J:A.stamp(J)),K="delegate:"+N+H+F(Q),I=H+N,P=A.Array(arguments,0,true),L;if(!(I in E)){if(G.isString(J)){L=A.Selector.query(J);}else{L=A.Node.getDOMNode(J);}if(G.isArray(L)){A.Array.each(L,function(R){B(H,I,R);});}else{B(H,I,L);}E[I]={};}E[I][Q]=K;P[0]=K;P.splice(2,3);return A.on.apply(A,P);}};})();},"@VERSION@");