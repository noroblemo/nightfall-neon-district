(()=>{var Wm=Object.create;var Wc=Object.defineProperty;var Xm=Object.getOwnPropertyDescriptor;var qm=Object.getOwnPropertyNames;var Ym=Object.getPrototypeOf,$m=Object.prototype.hasOwnProperty;var Zm=i=>{throw TypeError(i)};var xt=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var vd=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},ia=(i,e)=>{for(var t in e)Wc(i,t,{get:e[t],enumerable:!0})},Jm=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of qm(e))!$m.call(i,s)&&s!==t&&Wc(i,s,{get:()=>e[s],enumerable:!(n=Xm(e,s))||n.enumerable});return i};var Sd=(i,e,t)=>(t=i!=null?Wm(Ym(i)):{},Jm(e||!i||!i.__esModule?Wc(t,"default",{value:i,enumerable:!0}):t,i));var Ur=(i,e,t)=>e.has(i)?Zm("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t);function Km(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function jm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uf(){let i=Zr("canvas");return i.style.display="block",i}function Jr(...i){let e="THREE."+i.shift();nr?nr("log",e,...i):console.log(e,...i)}function Of(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $e(...i){i=Of(i);let e="THREE."+i.shift();if(nr)nr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ke(...i){i=Of(i);let e="THREE."+i.shift();if(nr)nr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function us(...i){let e=i.join(" ");e in Md||(Md[e]=!0,$e(...i))}function Bf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Ms(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function Qm(i,e){return(i%e+e)%e}function qc(i,e,t){return(1-t)*i+t*e}function kf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function zf(i,e){if(e.constructor===Float32Array)return i;let t=Kl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Hf(i,e){if(e.constructor===Float32Array)return i;let t=Kl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}function e0(){let i={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ct&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(s.r=Qs(s.r),s.g=Qs(s.g),s.b=Qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?$r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Yr]:{primaries:e,whitePoint:n,transfer:$r,toXYZ:Ed,fromXYZ:Td,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:Ed,fromXYZ:Td,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),i}function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Zc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}function jc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function oh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ls.fromArray(i,r);let a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=e.dot(ls),c=t.dot(ls),h=n.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function Nd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Ms()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}function fa(i,e,t,n,s,r){$s.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Hr.x=r*$s.x-s*$s.y,Hr.y=s*$s.x+r*$s.y):Hr.copy($s),i.copy(e),i.x+=Hr.x,i.y+=Hr.y,i.applyMatrix4(Vf)}function g0(i,e,t,n,s,r,o,a){let l;if(e.side===ln?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Zi,a),l===null)return null;Sa.copy(a),Sa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Sa);return c<t.near||c>t.far?null:{distance:c,point:Sa.clone(),object:i}}function Ma(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,xa),i.getVertexPosition(l,ya),i.getVertexPosition(c,_a);let h=g0(i,e,t,n,xa,ya,_a,kd);if(h){let u=new P;Si.getBarycoord(kd,xa,ya,_a,u),s&&(h.uv=Si.getInterpolatedAttribute(s,a,l,c,u,new Fe)),r&&(h.uv1=Si.getInterpolatedAttribute(r,a,l,c,u,new Fe)),o&&(h.normal=Si.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new P,materialIndex:0};Si.getNormal(xa,ya,_a,d.normal),h.face=d,h.barycoord=u}return h}function wa(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if($a.fromBufferAttribute(a,s),Za.fromBufferAttribute(a,r),t.distanceSqToSegment($a,Za,fh,Wd)>n)return;fh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(fh);if(!(c<e.near||c>e.far))return{distance:c,point:Wd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}function $d(i,e,t,n,s,r,o){let a=_h.distanceSqToPoint(i);if(a<t){let l=new P;_h.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function bs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Zd(s))s.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Zd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function gn(i){let e={};for(let t=0;t<i.length;t++){let n=bs(i[t]);for(let s in n)e[s]=n[s]}return e}function Zd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}function Js(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ra(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Wf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function M0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function b0(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Wf(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=M0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}function Jd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Kd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function E0(){this._document.hidden===!1&&this.reset()}function Xh(i,e,t,n){let s=D0(n);switch(t){case Uh:return i*e;case gl:return i*e/s.components*s.byteLength;case xl:return i*e/s.components*s.byteLength;case Ki:return i*e*2/s.components*s.byteLength;case yl:return i*e*2/s.components*s.byteLength;case Oh:return i*e*3/s.components*s.byteLength;case qn:return i*e*4/s.components*s.byteLength;case _l:return i*e*4/s.components*s.byteLength;case To:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Co:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sl:case bl:return Math.max(i,16)*Math.max(e,8)/4;case vl:case Ml:return Math.max(i,8)*Math.max(e,8)/2;case El:case Tl:case Cl:case Al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wl:case Ro:case Rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case kl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wl:case Xl:case ql:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Yl:case $l:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Po:case Zl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function D0(i){switch(i){case An:case Ih:return{byteLength:1,components:1};case mr:case Lh:case tn:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case Xn:case fl:case Fn:return{byteLength:4,components:1};case Dh:case Nh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var nf,Eh,sf,xo,rf,dr,Zi,ln,Bt,Ci,Ji,lt,Th,wh,of,ys,af,lf,cf,hf,uf,df,ff,pf,Ch,Ah,mf,gf,xf,yf,_f,vf,Sf,Mf,bf,Na,Ua,Oa,er,Ba,Fa,ka,za,Rh,Ef,Tf,ai,yo,_o,vo,_s,So,Mo,bo,Ph,vs,fr,pr,ul,ei,Qn,Ha,an,wf,Eo,vn,dl,Ai,An,Ih,Lh,mr,fl,Xn,Fn,tn,pl,ml,Ss,Dh,Nh,Uh,Oh,qn,bi,Ri,gl,xl,Ki,yl,_l,To,wo,Co,Ao,vl,Sl,Ml,bl,El,Tl,wl,Cl,Al,Ro,Rl,Pl,Il,Ll,Dl,Nl,Ul,Ol,Bl,Fl,kl,zl,Hl,Gl,Vl,Wl,Xl,ql,Yl,$l,Po,Zl,qr,Ga,La,mh,gh,xh,yh,Cf,Jl,Af,Yn,Qt,Yr,$r,Ct,Da,Rf,Pf,If,Lf,Bh,Df,Nf,Fh,kh,zh,Hh,Bn,tr,Md,nr,Ff,ti,dn,Xc,Va,qh,Fe,ni,Yh,P,Yc,bd,$h,et,$c,Ed,Td,pt,Us,Wa,t0,ir,n0,Jc,Sn,Zh,Ht,Xa,qt,Kr,qa,hl,Pt,Os,zn,i0,s0,Oi,sa,Pn,wd,Cd,Ei,jr,r0,Ad,Bs,gi,ra,Or,o0,a0,Rd,Pd,Id,Ld,l0,Fs,Kc,Yt,Dt,c0,sr,Gf,Bi,oa,Ne,fn,Qr,eo,Hn,xi,Qc,yi,ks,zs,Dd,eh,th,nh,ih,sh,rh,Si,ii,_i,Gn,aa,Hs,Gs,Vs,Fi,ki,as,Br,la,ca,ls,Jt,ha,h0,Ut,to,no,ot,u0,Fr,ah,si,d0,On,lh,Ws,In,kr,on,At,io,_n,rr,ch,f0,p0,Vn,m0,Wn,Tn,Xs,zr,qs,Ys,$s,Hr,Vf,ua,Gr,da,Ud,hh,Od,Ln,vi,uh,pa,ma,or,at,Bd,cs,ga,Fd,xa,ya,_a,dh,va,kd,Sa,ee,so,ar,Zs,zd,ba,Hd,x0,Vr,Wr,wn,hs,y0,Ea,Hi,Gd,Ya,lr,$a,Za,Vd,Xr,Ta,fh,Wd,Ja,Xd,qd,ds,Gi,Yd,_h,Ca,Aa,ri,ro,Vi,Ti,oo,ao,Ze,wi,fs,Gt,ps,lo,Wi,ms,en,Xi,mn,Cn,Pi,v0,S0,Vt,cr,Tt,hr,Ka,ja,qi,Qa,el,tl,nl,Dn,Yi,il,sl,rl,co,$i,ol,al,Xf,ll,gs,ho,ph,jd,Qd,uo,Pa,Ia,jn,fo,zi,ef,tf,pn,vh,oi,xs,Sh,po,mo,Ks,js,ur,cl,go,Vh,T0,Wh,w0,C0,A0,R0,P0,I0,L0,Mh,kt,Kv,Jh,bh,Kh=xt(()=>{nf=0,Eh=1,sf=2,xo=1,rf=2,dr=3,Zi=0,ln=1,Bt=2,Ci=0,Ji=1,lt=2,Th=3,wh=4,of=5,ys=100,af=101,lf=102,cf=103,hf=104,uf=200,df=201,ff=202,pf=203,Ch=204,Ah=205,mf=206,gf=207,xf=208,yf=209,_f=210,vf=211,Sf=212,Mf=213,bf=214,Na=0,Ua=1,Oa=2,er=3,Ba=4,Fa=5,ka=6,za=7,Rh=0,Ef=1,Tf=2,ai=0,yo=1,_o=2,vo=3,_s=4,So=5,Mo=6,bo=7,Ph=300,vs=301,fr=302,pr=303,ul=304,ei=1e3,Qn=1001,Ha=1002,an=1003,wf=1004,Eo=1005,vn=1006,dl=1007,Ai=1008,An=1009,Ih=1010,Lh=1011,mr=1012,fl=1013,Xn=1014,Fn=1015,tn=1016,pl=1017,ml=1018,Ss=1020,Dh=35902,Nh=35899,Uh=1021,Oh=1022,qn=1023,bi=1026,Ri=1027,gl=1028,xl=1029,Ki=1030,yl=1031,_l=1033,To=33776,wo=33777,Co=33778,Ao=33779,vl=35840,Sl=35841,Ml=35842,bl=35843,El=36196,Tl=37492,wl=37496,Cl=37488,Al=37489,Ro=37490,Rl=37491,Pl=37808,Il=37809,Ll=37810,Dl=37811,Nl=37812,Ul=37813,Ol=37814,Bl=37815,Fl=37816,kl=37817,zl=37818,Hl=37819,Gl=37820,Vl=37821,Wl=36492,Xl=36494,ql=36495,Yl=36283,$l=36284,Po=36285,Zl=36286,qr=2300,Ga=2301,La=2302,mh=2303,gh=2400,xh=2401,yh=2402,Cf=3200,Jl=0,Af=1,Yn="",Qt="srgb",Yr="srgb-linear",$r="linear",Ct="srgb",Da=7680,Rf=519,Pf=512,If=513,Lf=514,Bh=515,Df=516,Nf=517,Fh=518,kh=519,zh=35044,Hh="300 es",Bn=2e3,tr=2001;Md={},nr=null;Ff={[Na]:Na,[Oa]:ka,[Ba]:Ba,[er]:Fa,[Ua]:Ua,[ka]:Oa,[za]:za,[Fa]:er},ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=Math.PI/180,Va=180/Math.PI;qh=class qh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qh.prototype.isVector2=!0;Fe=qh,ni=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],y=r[o+3];if(u!==y||l!==d||c!==f||h!==m){let g=l*d+c*f+h*m+u*y;g<0&&(d=-d,f=-f,m=-m,y=-y,g=-g);let p=1-a;if(g<.9995){let _=Math.acos(g),T=Math.sin(_);p=Math.sin(p*_)/T,a=Math.sin(a*_)/T,l=l*p+d*a,c=c*p+f*a,h=h*p+m*a,u=u*p+y*a}else{l=l*p+d*a,c=c*p+f*a,h=h*p+m*a,u=u*p+y*a;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Yh=class Yh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yh.prototype.isVector3=!0;P=Yh,Yc=new P,bd=new ni,$h=class $h{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],y=s[0],g=s[3],p=s[6],_=s[1],T=s[4],S=s[7],w=s[2],E=s[5],x=s[8];return r[0]=o*y+a*_+l*w,r[3]=o*g+a*T+l*E,r[6]=o*p+a*S+l*x,r[1]=c*y+h*_+u*w,r[4]=c*g+h*T+u*E,r[7]=c*p+h*S+u*x,r[2]=d*y+f*_+m*w,r[5]=d*g+f*T+m*E,r[8]=d*p+f*S+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=u*y,e[1]=(s*c-h*n)*y,e[2]=(a*n-s*o)*y,e[3]=d*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($c.makeScale(e,t)),this}rotate(e){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($c.makeRotation(-e)),this}translate(e,t){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$h.prototype.isMatrix3=!0;et=$h,$c=new et,Ed=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Td=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pt=e0();Wa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Us===void 0&&(Us=Zr("canvas")),Us.width=e.width,Us.height=e.height;let s=Us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Us}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},t0=0,ir=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Ms(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zc(s[o].image)):r.push(Zc(s[o]))}else r=Zc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};n0=0,Jc=new P,Sn=class i extends ti{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Qn,s=Qn,r=vn,o=Ai,a=qn,l=An,c=i.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Ms(),this.name="",this.source=new ir(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Jc).x}get height(){return this.source.getSize(Jc).y}get depth(){return this.source.getSize(Jc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ei:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case Ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ei:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case Ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Ph;Sn.DEFAULT_ANISOTROPY=1;Zh=class Zh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,S=(f+1)/2,w=(p+1)/2,E=(h+d)/4,x=(u+y)/4,b=(m+g)/4;return T>S&&T>w?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=E/n,r=x/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=b/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=x/r,s=b/r),this.set(n,s,r,t),this}let _=Math.sqrt((g-m)*(g-m)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-y)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zh.prototype.isVector4=!0;Ht=Zh,Xa=class extends ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Sn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ir(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends Xa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Kr=class extends Sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},qa=class extends Sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},hl=class hl{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,m,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,m,y,g)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,m,y,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),o=1/Os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,m=a*h,y=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-y*c,t[9]=-a*l,t[2]=y-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,y=c*u;t[0]=d+y*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,y=c*u;t[0]=d-y*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,m=a*h,y=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,m=a*l,y=a*c;t[0]=l*h,t[4]=y-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-y*u}else if(e.order==="XZY"){let d=o*l,f=o*c,m=a*l,y=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(i0,e,s0)}lookAt(e,t,n){let s=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Oi.crossVectors(n,Pn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Oi.crossVectors(n,Pn)),Oi.normalize(),sa.crossVectors(Pn,Oi),s[0]=Oi.x,s[4]=sa.x,s[8]=Pn.x,s[1]=Oi.y,s[5]=sa.y,s[9]=Pn.y,s[2]=Oi.z,s[6]=sa.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],y=n[6],g=n[10],p=n[14],_=n[3],T=n[7],S=n[11],w=n[15],E=s[0],x=s[4],b=s[8],I=s[12],A=s[1],U=s[5],B=s[9],k=s[13],R=s[2],z=s[6],q=s[10],Y=s[14],se=s[3],X=s[7],ne=s[11],re=s[15];return r[0]=o*E+a*A+l*R+c*se,r[4]=o*x+a*U+l*z+c*X,r[8]=o*b+a*B+l*q+c*ne,r[12]=o*I+a*k+l*Y+c*re,r[1]=h*E+u*A+d*R+f*se,r[5]=h*x+u*U+d*z+f*X,r[9]=h*b+u*B+d*q+f*ne,r[13]=h*I+u*k+d*Y+f*re,r[2]=m*E+y*A+g*R+p*se,r[6]=m*x+y*U+g*z+p*X,r[10]=m*b+y*B+g*q+p*ne,r[14]=m*I+y*k+g*Y+p*re,r[3]=_*E+T*A+S*R+w*se,r[7]=_*x+T*U+S*z+w*X,r[11]=_*b+T*B+S*q+w*ne,r[15]=_*I+T*k+S*Y+w*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],y=e[7],g=e[11],p=e[15],_=l*f-c*d,T=a*f-c*u,S=a*d-l*u,w=o*f-c*h,E=o*d-l*h,x=o*u-a*h;return t*(y*_-g*T+p*S)-n*(m*_-g*w+p*E)+s*(m*T-y*w+p*x)-r*(m*S-y*E+g*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],y=e[13],g=e[14],p=e[15],_=t*a-n*o,T=t*l-s*o,S=t*c-r*o,w=n*l-s*a,E=n*c-r*a,x=s*c-r*l,b=h*y-u*m,I=h*g-d*m,A=h*p-f*m,U=u*g-d*y,B=u*p-f*y,k=d*p-f*g,R=_*k-T*B+S*U+w*A-E*I+x*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/R;return e[0]=(a*k-l*B+c*U)*z,e[1]=(s*B-n*k-r*U)*z,e[2]=(y*x-g*E+p*w)*z,e[3]=(d*E-u*x-f*w)*z,e[4]=(l*A-o*k-c*I)*z,e[5]=(t*k-s*A+r*I)*z,e[6]=(g*S-m*x-p*T)*z,e[7]=(h*x-d*S+f*T)*z,e[8]=(o*B-a*A+c*b)*z,e[9]=(n*A-t*B-r*b)*z,e[10]=(m*E-y*S+p*_)*z,e[11]=(u*S-h*E-f*_)*z,e[12]=(a*I-o*U-l*b)*z,e[13]=(t*U-n*I+s*b)*z,e[14]=(y*T-m*w-g*_)*z,e[15]=(h*w-u*T+d*_)*z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,y=o*h,g=o*u,p=a*u,_=l*c,T=l*h,S=l*u,w=n.x,E=n.y,x=n.z;return s[0]=(1-(y+p))*w,s[1]=(f+S)*w,s[2]=(m-T)*w,s[3]=0,s[4]=(f-S)*E,s[5]=(1-(d+p))*E,s[6]=(g+_)*E,s[7]=0,s[8]=(m+T)*x,s[9]=(g-_)*x,s[10]=(1-(d+y))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Os.set(s[0],s[1],s[2]).length(),a=Os.set(s[4],s[5],s[6]).length(),l=Os.set(s[8],s[9],s[10]).length();r<0&&(o=-o),zn.copy(this);let c=1/o,h=1/a,u=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,t.setFromRotationMatrix(zn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Bn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,y;if(l)m=r/(o-r),y=o*r/(o-r);else if(a===Bn)m=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===tr)m=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Bn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,y;if(l)m=1/(o-r),y=o/(o-r);else if(a===Bn)m=-2/(o-r),y=-(o+r)/(o-r);else if(a===tr)m=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};hl.prototype.isMatrix4=!0;Pt=hl,Os=new P,zn=new Pt,i0=new P(0,0,0),s0=new P(1,1,1),Oi=new P,sa=new P,Pn=new P,wd=new Pt,Cd=new ni,Ei=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cd.setFromEuler(this),this.setFromQuaternion(Cd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ei.DEFAULT_ORDER="XYZ";jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},r0=0,Ad=new P,Bs=new ni,gi=new Pt,ra=new P,Or=new P,o0=new P,a0=new ni,Rd=new P(1,0,0),Pd=new P(0,1,0),Id=new P(0,0,1),Ld={type:"added"},l0={type:"removed"},Fs={type:"childadded",child:null},Kc={type:"childremoved",child:null},Yt=class i extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Ei,n=new ni,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pt},normalMatrix:{value:new et}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(Rd,e)}rotateY(e){return this.rotateOnAxis(Pd,e)}rotateZ(e){return this.rotateOnAxis(Id,e)}translateOnAxis(e,t){return Ad.copy(e).applyQuaternion(this.quaternion),this.position.add(Ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rd,e)}translateY(e){return this.translateOnAxis(Pd,e)}translateZ(e){return this.translateOnAxis(Id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ra.copy(e):ra.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Or,ra,this.up):gi.lookAt(ra,Or,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(gi),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ld),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(l0),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ld),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,o0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,a0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Yt.DEFAULT_UP=new P(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Dt=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},c0={type:"move"},sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(c0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},oa={h:0,s:0,l:0};Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=Qm(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=jc(o,r,e+1/3),this.g=jc(o,r,e),this.b=jc(o,r,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=Qt){function n(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){let n=Gf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return pt.workingToColorSpace(fn.copy(this),e),Math.round(gt(fn.r*255,0,255))*65536+Math.round(gt(fn.g*255,0,255))*256+Math.round(gt(fn.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(fn.copy(this),t);let n=fn.r,s=fn.g,r=fn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Qt){pt.workingToColorSpace(fn.copy(this),e);let t=fn.r,n=fn.g,s=fn.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(oa);let n=qc(Bi.h,oa.h,t),s=qc(Bi.s,oa.s,t),r=qc(Bi.l,oa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new Ne;Ne.NAMES=Gf;Qr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},eo=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hn=new P,xi=new P,Qc=new P,yi=new P,ks=new P,zs=new P,Dd=new P,eh=new P,th=new P,nh=new P,ih=new Ht,sh=new Ht,rh=new Ht,Si=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hn.subVectors(e,t),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Hn.subVectors(s,t),xi.subVectors(n,t),Qc.subVectors(e,t);let o=Hn.dot(Hn),a=Hn.dot(xi),l=Hn.dot(Qc),c=xi.dot(xi),h=xi.dot(Qc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return ih.setScalar(0),sh.setScalar(0),rh.setScalar(0),ih.fromBufferAttribute(e,t),sh.fromBufferAttribute(e,n),rh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ih,r.x),o.addScaledVector(sh,r.y),o.addScaledVector(rh,r.z),o}static isFrontFacing(e,t,n,s){return Hn.subVectors(n,t),xi.subVectors(e,t),Hn.cross(xi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Hn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ks.subVectors(s,n),zs.subVectors(r,n),eh.subVectors(e,n);let l=ks.dot(eh),c=zs.dot(eh);if(l<=0&&c<=0)return t.copy(n);th.subVectors(e,s);let h=ks.dot(th),u=zs.dot(th);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(ks,o);nh.subVectors(e,r);let f=ks.dot(nh),m=zs.dot(nh);if(m>=0&&f<=m)return t.copy(r);let y=f*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(zs,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Dd.subVectors(r,s),a=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(Dd,a);let p=1/(g+y+d);return o=y*p,a=d*p,t.copy(n).addScaledVector(ks,o).addScaledVector(zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ii=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),la.subVectors(this.max,Br),Hs.subVectors(e.a,Br),Gs.subVectors(e.b,Br),Vs.subVectors(e.c,Br),Fi.subVectors(Gs,Hs),ki.subVectors(Vs,Gs),as.subVectors(Hs,Vs);let t=[0,-Fi.z,Fi.y,0,-ki.z,ki.y,0,-as.z,as.y,Fi.z,0,-Fi.x,ki.z,0,-ki.x,as.z,0,-as.x,-Fi.y,Fi.x,0,-ki.y,ki.x,0,-as.y,as.x,0];return!oh(t,Hs,Gs,Vs,la)||(t=[1,0,0,0,1,0,0,0,1],!oh(t,Hs,Gs,Vs,la))?!1:(ca.crossVectors(Fi,ki),t=[ca.x,ca.y,ca.z],oh(t,Hs,Gs,Vs,la))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_i=[new P,new P,new P,new P,new P,new P,new P,new P],Gn=new P,aa=new ii,Hs=new P,Gs=new P,Vs=new P,Fi=new P,ki=new P,as=new P,Br=new P,la=new P,ca=new P,ls=new P;Jt=new P,ha=new Fe,h0=0,Ut=class extends ti{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:h0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zh,this.updateRanges=[],this.gpuType=Fn,this.version=0,this._normalizationScale=e!==void 0?Kl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hf(e,this.array)}},to=class extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}},no=class extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ot=class extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},u0=new ii,Fr=new P,ah=new P,si=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):u0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);let t=Fr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Fr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(ah)),this.expandByPoint(Fr.copy(e.center).sub(ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},d0=0,On=new Pt,lh=new Yt,Ws=new P,In=new ii,kr=new ii,on=new P,At=class i extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Km(e)?no:to)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return lh.lookAt(e),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ot(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];kr.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(In.min,kr.min),In.expandByPoint(on),on.addVectors(In.max,kr.max),In.expandByPoint(on)):(In.expandByPoint(kr.min),In.expandByPoint(kr.max))}In.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)on.fromBufferAttribute(a,c),l&&(Ws.fromBufferAttribute(e,c),on.add(Ws)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ut(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)a[I]=new P,l[I]=new P;let h=new P,u=new P,d=new P,f=new Fe,m=new Fe,y=new Fe,g=new P,p=new P;function _(I,A,U){c[I]=c[A]=c[U]=1,h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,U),f.fromBufferAttribute(r,I),m.fromBufferAttribute(r,A),y.fromBufferAttribute(r,U),u.sub(h),d.sub(h),m.sub(f),y.sub(f);let B=1/(m.x*y.y-y.x*m.y);isFinite(B)&&(g.copy(u).multiplyScalar(y.y).addScaledVector(d,-m.y).multiplyScalar(B),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-y.x).multiplyScalar(B),a[I].add(g),a[A].add(g),a[U].add(g),l[I].add(p),l[A].add(p),l[U].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,A=T.length;I<A;++I){let U=T[I],B=U.start,k=U.count;for(let R=B,z=B+k;R<z;R+=3)_(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let S=new P,w=new P,E=new P,x=new P;function b(I){E.fromBufferAttribute(s,I),x.copy(E);let A=a[I];S.copy(A),S.sub(E.multiplyScalar(E.dot(A))).normalize(),w.crossVectors(x,A);let B=w.dot(l[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,B)}for(let I=0,A=n.count;I<A;++I)c[I]&&b(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Ut(d,h,u)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},io=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zh,this.updateRanges=[],this.version=0,this.uuid=Ms()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Nd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Nd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};_n=new P,rr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Kl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Jr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Jr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hf(e,this.data.array)}},ch=new P,f0=new P,p0=new et,Vn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ch.subVectors(n,t).cross(f0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(ch),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||p0.getNormalMatrix(e),s=this.coplanarPoint(ch).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},m0=0,Wn=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Ms(),this.name="",this.type="Material",this.blending=Ji,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=Ah,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Da,this.stencilZFail=Da,this.stencilZPass=Da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Vn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Tn=class extends Wn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zr=new P,qs=new P,Ys=new P,$s=new Fe,Hr=new Fe,Vf=new Pt,ua=new P,Gr=new P,da=new P,Ud=new Fe,hh=new Fe,Od=new Fe,Ln=class extends Yt{constructor(e=new Tn){if(super(),this.isSprite=!0,this.type="Sprite",Xs===void 0){Xs=new At;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new io(t,5);Xs.setIndex([0,1,2,0,2,3]),Xs.setAttribute("position",new rr(n,3,0,!1)),Xs.setAttribute("uv",new rr(n,2,3,!1))}this.geometry=Xs,this.material=e,this.center=new Fe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),Vf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ys.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-Ys.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;fa(ua.set(-.5,-.5,0),Ys,o,qs,s,r),fa(Gr.set(.5,-.5,0),Ys,o,qs,s,r),fa(da.set(.5,.5,0),Ys,o,qs,s,r),Ud.set(0,0),hh.set(1,0),Od.set(1,1);let a=e.ray.intersectTriangle(ua,Gr,da,!1,zr);if(a===null&&(fa(Gr.set(-.5,.5,0),Ys,o,qs,s,r),hh.set(0,1),a=e.ray.intersectTriangle(ua,da,Gr,!1,zr),a===null))return;let l=e.ray.origin.distanceTo(zr);l<e.near||l>e.far||t.push({distance:l,point:zr.clone(),uv:Si.getInterpolation(zr,ua,Gr,da,Ud,hh,Od,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};vi=new P,uh=new P,pa=new P,ma=new P,or=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){uh.copy(e).add(t).multiplyScalar(.5),pa.copy(t).sub(e).normalize(),ma.copy(this.origin).sub(uh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(pa),a=ma.dot(this.direction),l=-ma.dot(pa),c=ma.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(uh).addScaledVector(pa,d),f}intersectSphere(e,t){if(e.radius<0)return null;vi.subVectors(e.center,this.origin);let n=vi.dot(this.direction),s=vi.dot(vi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,m=t.x-o.x,y=t.y-o.y,g=t.z-o.z,p=n.x-o.x,_=n.y-o.y,T=n.z-o.z,S=Math.abs(l),w=Math.abs(c),E=Math.abs(h),x,b,I,A,U,B,k,R,z,q,Y,se;if(S>=w&&S>=E?(I=l,B=u,z=m,se=p,l>=0?(x=c,b=h,A=d,U=f,k=y,R=g,q=_,Y=T):(x=h,b=c,A=f,U=d,k=g,R=y,q=T,Y=_)):w>=E?(I=c,B=d,z=y,se=_,c>=0?(x=h,b=l,A=f,U=u,k=g,R=m,q=T,Y=p):(x=l,b=h,A=u,U=f,k=m,R=g,q=p,Y=T)):(I=h,B=f,z=g,se=T,h>=0?(x=l,b=c,A=u,U=d,k=m,R=y,q=p,Y=_):(x=c,b=l,A=d,U=u,k=y,R=m,q=_,Y=p)),I===0)return null;let X=x/I,ne=b/I,re=1/I,De=A-X*B,Ue=U-ne*B,K=k-X*z,be=R-ne*z,Ie=q-X*se,He=Y-ne*se,ve=Ie*be-He*K,Ye=De*He-Ue*Ie,Rt=K*Ue-be*De;if(s){if(ve<0||Ye<0||Rt<0)return null}else if((ve<0||Ye<0||Rt<0)&&(ve>0||Ye>0||Rt>0))return null;let Ve=ve+Ye+Rt;if(Ve===0)return null;let tt=re*(ve*B+Ye*z+Rt*se);return(Ve>0?tt<0:tt>0)?null:this.at(tt/Ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class extends Wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bd=new Pt,cs=new or,ga=new si,Fd=new P,xa=new P,ya=new P,_a=new P,dh=new P,va=new P,kd=new P,Sa=new P,ee=class extends Yt{constructor(e=new At,t=new at){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(dh.fromBufferAttribute(u,e),o?va.addScaledVector(dh,h):va.addScaledVector(dh.sub(t),h))}t.add(va)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(ga.containsPoint(cs.origin)===!1&&(cs.intersectSphere(ga,Fd)===null||cs.origin.distanceToSquared(Fd)>(e.far-e.near)**2))&&(Bd.copy(r).invert(),cs.copy(e.ray).applyMatrix4(Bd),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){let g=d[m],p=o[g.materialIndex],_=Math.max(g.start,f.start),T=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let S=_,w=T;S<w;S+=3){let E=a.getX(S),x=a.getX(S+1),b=a.getX(S+2);s=Ma(this,p,e,n,c,h,u,E,x,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let _=a.getX(g),T=a.getX(g+1),S=a.getX(g+2);s=Ma(this,o,e,n,c,h,u,_,T,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){let g=d[m],p=o[g.materialIndex],_=Math.max(g.start,f.start),T=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let S=_,w=T;S<w;S+=3){let E=S,x=S+1,b=S+2;s=Ma(this,p,e,n,c,h,u,E,x,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let _=g,T=g+1,S=g+2;s=Ma(this,o,e,n,c,h,u,_,T,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};so=class extends Sn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=an,h=an,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ar=class extends Ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Zs=new Pt,zd=new Pt,ba=[],Hd=new ii,x0=new Pt,Vr=new ee,Wr=new si,wn=class extends ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ar(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,x0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zs),Hd.copy(e.boundingBox).applyMatrix4(Zs),this.boundingBox.union(Hd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zs),Wr.copy(e.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(Wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(n),e.ray.intersectsSphere(Wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zs),zd.multiplyMatrices(n,Zs),Vr.matrixWorld=zd,Vr.raycast(e,ba);for(let o=0,a=ba.length;o<a;o++){let l=ba[o];l.instanceId=r,l.object=this,t.push(l)}ba.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new so(new Float32Array(s*this.count),s,this.count,gl,Fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hs=new si,y0=new Fe(.5,.5),Ea=new P,Hi=class{constructor(e=new Vn,t=new Vn,n=new Vn,s=new Vn,r=new Vn,o=new Vn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],y=r[9],g=r[10],p=r[11],_=r[12],T=r[13],S=r[14],w=r[15];if(s[0].setComponents(c-o,f-h,p-m,w-_).normalize(),s[1].setComponents(c+o,f+h,p+m,w+_).normalize(),s[2].setComponents(c+a,f+u,p+y,w+T).normalize(),s[3].setComponents(c-a,f-u,p-y,w-T).normalize(),n)s[4].setComponents(l,d,g,S).normalize(),s[5].setComponents(c-l,f-d,p-g,w-S).normalize();else if(s[4].setComponents(c-l,f-d,p-g,w-S).normalize(),t===Bn)s[5].setComponents(c+l,f+d,p+g,w+S).normalize();else if(t===tr)s[5].setComponents(l,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);let t=y0.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ea.x=s.normal.x>0?e.max.x:e.min.x,Ea.y=s.normal.y>0?e.max.y:e.min.y,Ea.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Gd=new Pt,Ya=class i{constructor(){this.coordinateSystem=Bn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Gd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Hi),n[s].setFromProjectionMatrix(Gd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Hi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}},lr=class extends Wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$a=new P,Za=new P,Vd=new Pt,Xr=new or,Ta=new si,fh=new P,Wd=new P,Ja=class extends Yt{constructor(e=new At,t=new lr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)$a.fromBufferAttribute(t,s-1),Za.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=$a.distanceTo(Za);e.setAttribute("lineDistance",new ot(n,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,e.ray.intersectsSphere(Ta)===!1)return;Vd.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(Vd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let y=f,g=m-1;y<g;y+=c){let p=h.getX(y),_=h.getX(y+1),T=wa(this,e,Xr,l,p,_,y);T&&t.push(T)}if(this.isLineLoop){let y=h.getX(m-1),g=h.getX(f),p=wa(this,e,Xr,l,y,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let y=f,g=m-1;y<g;y+=c){let p=wa(this,e,Xr,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=wa(this,e,Xr,l,m-1,f,m-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Xd=new P,qd=new P,ds=class extends Ja{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Xd.fromBufferAttribute(t,s),qd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xd.distanceTo(qd);e.setAttribute("lineDistance",new ot(n,1))}else $e("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Gi=class extends Wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Yd=new Pt,_h=new or,Ca=new si,Aa=new P,ri=class extends Yt{constructor(e=new At,t=new Gi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(s),Ca.radius+=r,e.ray.intersectsSphere(Ca)===!1)return;Yd.copy(s).invert(),_h.copy(e.ray).applyMatrix4(Yd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,y=f;m<y;m++){let g=c.getX(m);Aa.fromBufferAttribute(u,g),$d(Aa,g,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,y=f;m<y;m++)Aa.fromBufferAttribute(u,m),$d(Aa,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};ro=class extends Sn{constructor(e=[],t=vs,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vi=class extends Sn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ti=class extends Sn{constructor(e,t,n=Xn,s,r,o,a=an,l=an,c,h=bi,u=1){if(h!==bi&&h!==Ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ir(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},oo=class extends Ti{constructor(e,t=Xn,n=vs,s,r,o=an,a=an,l,c=bi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ao=class extends Sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ze=class i extends At{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(u,2));function m(y,g,p,_,T,S,w,E,x,b,I){let A=S/x,U=w/b,B=S/2,k=w/2,R=E/2,z=x+1,q=b+1,Y=0,se=0,X=new P;for(let ne=0;ne<q;ne++){let re=ne*U-k;for(let De=0;De<z;De++){let Ue=De*A-B;X[y]=Ue*_,X[g]=re*T,X[p]=R,c.push(X.x,X.y,X.z),X[y]=0,X[g]=0,X[p]=E>0?1:-1,h.push(X.x,X.y,X.z),u.push(De/x),u.push(1-ne/b),Y+=1}}for(let ne=0;ne<b;ne++)for(let re=0;re<x;re++){let De=d+re+z*ne,Ue=d+re+z*(ne+1),K=d+(re+1)+z*(ne+1),be=d+(re+1)+z*ne;l.push(De,Ue,be),l.push(Ue,K,be),se+=6}a.addGroup(f,se,I),f+=se,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},wi=class i extends At{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+r,y=s+1,g=new P,p=new P;for(let _=0;_<=m;_++){let T=0,S=0,w=0,E=0;if(_<=n){let I=_/n,A=I*Math.PI/2;S=-h-e*Math.cos(A),w=e*Math.sin(A),E=-e*Math.cos(A),T=I*u}else if(_<=n+r){let I=(_-n)/r;S=-h+I*t,w=e,E=0,T=u+I*d}else{let I=(_-n-r)/n,A=I*Math.PI/2;S=h+e*Math.sin(A),w=e*Math.cos(A),E=e*Math.sin(A),T=u+d+I*u}let x=Math.max(0,Math.min(1,T/f)),b=0;_===0?b=.5/s:_===m&&(b=-.5/s);for(let I=0;I<=s;I++){let A=I/s,U=A*Math.PI*2,B=Math.sin(U),k=Math.cos(U);p.x=-w*k,p.y=S,p.z=w*B,a.push(p.x,p.y,p.z),g.set(-w*k,E,w*B),g.normalize(),l.push(g.x,g.y,g.z),c.push(A+b,x)}if(_>0){let I=(_-1)*y;for(let A=0;A<s;A++){let U=I+A,B=I+A+1,k=_*y+A,R=_*y+A+1;o.push(U,B,k),o.push(B,R,k)}}}this.setIndex(o),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},fs=class i extends At{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,h=new Fe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(a,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gt=class i extends At{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,y=[],g=n/2,p=0;_(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(f,2));function _(){let S=new P,w=new P,E=0,x=(t-e)/n;for(let b=0;b<=r;b++){let I=[],A=b/r,U=A*(t-e)+e;for(let B=0;B<=s;B++){let k=B/s,R=k*l+a,z=Math.sin(R),q=Math.cos(R);w.x=U*z,w.y=-A*n+g,w.z=U*q,u.push(w.x,w.y,w.z),S.set(z,x,q).normalize(),d.push(S.x,S.y,S.z),f.push(k,1-A),I.push(m++)}y.push(I)}for(let b=0;b<s;b++)for(let I=0;I<r;I++){let A=y[I][b],U=y[I+1][b],B=y[I+1][b+1],k=y[I][b+1];(e>0||I!==0)&&(h.push(A,U,k),E+=3),(t>0||I!==r-1)&&(h.push(U,B,k),E+=3)}c.addGroup(p,E,0),p+=E}function T(S){let w=m,E=new Fe,x=new P,b=0,I=S===!0?e:t,A=S===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,g*A,0),d.push(0,A,0),f.push(.5,.5),m++;let U=m;for(let B=0;B<=s;B++){let R=B/s*l+a,z=Math.cos(R),q=Math.sin(R);x.x=I*q,x.y=g*A,x.z=I*z,u.push(x.x,x.y,x.z),d.push(0,A,0),E.x=z*.5+.5,E.y=q*.5*A+.5,f.push(E.x,E.y),m++}for(let B=0;B<s;B++){let k=w+B,R=U+B;S===!0?h.push(R,R+1,k):h.push(R+1,R,k),b+=3}c.addGroup(p,b,S===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ps=class i extends Gt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},lo=class i extends At{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let T=new P,S=new P,w=new P;for(let E=0;E<t.length;E+=3)f(t[E+0],T),f(t[E+1],S),f(t[E+2],w),l(T,S,w,_)}function l(_,T,S,w){let E=w+1,x=[];for(let b=0;b<=E;b++){x[b]=[];let I=_.clone().lerp(S,b/E),A=T.clone().lerp(S,b/E),U=E-b;for(let B=0;B<=U;B++)B===0&&b===E?x[b][B]=I:x[b][B]=I.clone().lerp(A,B/U)}for(let b=0;b<E;b++)for(let I=0;I<2*(E-b)-1;I++){let A=Math.floor(I/2);I%2===0?(d(x[b][A+1]),d(x[b+1][A]),d(x[b][A])):(d(x[b][A+1]),d(x[b+1][A+1]),d(x[b+1][A]))}}function c(_){let T=new P;for(let S=0;S<r.length;S+=3)T.x=r[S+0],T.y=r[S+1],T.z=r[S+2],T.normalize().multiplyScalar(_),r[S+0]=T.x,r[S+1]=T.y,r[S+2]=T.z}function h(){let _=new P;for(let T=0;T<r.length;T+=3){_.x=r[T+0],_.y=r[T+1],_.z=r[T+2];let S=g(_)/2/Math.PI+.5,w=p(_)/Math.PI+.5;o.push(S,1-w)}m(),u()}function u(){for(let _=0;_<o.length;_+=6){let T=o[_+0],S=o[_+2],w=o[_+4],E=Math.max(T,S,w),x=Math.min(T,S,w);E>.9&&x<.1&&(T<.2&&(o[_+0]+=1),S<.2&&(o[_+2]+=1),w<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,T){let S=_*3;T.x=e[S+0],T.y=e[S+1],T.z=e[S+2]}function m(){let _=new P,T=new P,S=new P,w=new P,E=new Fe,x=new Fe,b=new Fe;for(let I=0,A=0;I<r.length;I+=9,A+=6){_.set(r[I+0],r[I+1],r[I+2]),T.set(r[I+3],r[I+4],r[I+5]),S.set(r[I+6],r[I+7],r[I+8]),E.set(o[A+0],o[A+1]),x.set(o[A+2],o[A+3]),b.set(o[A+4],o[A+5]),w.copy(_).add(T).add(S).divideScalar(3);let U=g(w);y(E,A+0,_,U),y(x,A+2,T,U),y(b,A+4,S,U)}}function y(_,T,S,w){w<0&&_.x===1&&(o[T]=_.x-1),S.x===0&&S.z===0&&(o[T]=w/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Wi=class i extends lo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ms=class i extends lo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},en=class i extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],y=[],g=[];for(let p=0;p<h;p++){let _=p*d-o;for(let T=0;T<c;T++){let S=T*u-r;m.push(S,-_,0),y.push(0,0,1),g.push(T/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let T=_+c*p,S=_+c*(p+1),w=_+1+c*(p+1),E=_+1+c*p;f.push(T,S,E),f.push(S,w,E)}this.setIndex(f),this.setAttribute("position",new ot(m,3)),this.setAttribute("normal",new ot(y,3)),this.setAttribute("uv",new ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Xi=class i extends At{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new P,m=new Fe;for(let y=0;y<=s;y++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let y=0;y<s;y++){let g=y*(n+1);for(let p=0;p<n;p++){let _=p+g,T=_,S=_+n+1,w=_+n+2,E=_+1;a.push(T,S,E),a.push(S,w,E)}}this.setIndex(a),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},mn=class i extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,d=new P,f=[],m=[],y=[],g=[];for(let p=0;p<=n;p++){let _=[],T=p/n,S=o+T*a,w=e*Math.cos(S),E=Math.sqrt(e*e-w*w),x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){let I=b/t,A=s+I*r;u.x=-E*Math.cos(A),u.y=w,u.z=E*Math.sin(A),m.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),g.push(I+x,1-T),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let T=h[p][_+1],S=h[p][_],w=h[p+1][_],E=h[p+1][_+1];(p!==0||o>0)&&f.push(T,S,E),(p!==n-1||l<Math.PI)&&f.push(S,w,E)}this.setIndex(f),this.setAttribute("position",new ot(m,3)),this.setAttribute("normal",new ot(y,3)),this.setAttribute("uv",new ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Cn=class i extends At{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new P,f=new P,m=new P;for(let y=0;y<=n;y++){let g=o+y/n*a;for(let p=0;p<=s;p++){let _=p/s*r;f.x=(e+t*Math.cos(g))*Math.cos(_),f.y=(e+t*Math.cos(g))*Math.sin(_),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(p/s),u.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=s;g++){let p=(s+1)*y+g-1,_=(s+1)*(y-1)+g-1,T=(s+1)*(y-1)+g,S=(s+1)*y+g;l.push(p,_,S),l.push(_,T,S)}this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};Pi={clone:bs,merge:gn},v0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vt=class extends Wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v0,this.fragmentShader=S0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=_0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ht().fromArray(s.value);break;case"m3":this.uniforms[n].value=new et().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Pt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},cr=class extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Tt=class extends Wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jl,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hr=class extends Tt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return us('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){us('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ka=class extends Wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ja=class extends Wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};qi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qa=class extends qi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gh,endingEnd:gh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case xh:r=e,a=2*t-n;break;case yh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xh:o=e,l=2*n-t;break;case yh:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),y=m*m,g=y*m,p=-d*g+2*d*y-d*m,_=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*m+1,T=(-1-f)*g+(1.5+f)*y+.5*m,S=f*g-f*y;for(let w=0;w!==a;++w)r[w]=p*o[h+w]+_*o[c+w]+T*o[l+w]+S*o[u+w];return r}},el=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},tl=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},nl=class extends qi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(s-t),y=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*y+o[l+g]*m;return r}let d=a*2,f=e-1;for(let m=0;m!==a;++m){let y=o[c+m],g=o[l+m],p=f*d+m*2,_=u[p],T=u[p+1],S=e*d+m*2,w=h[S],E=h[S+1],x=b0(n,t,_,w,s);r[m]=Wf(x,y,T,E,g)}return r}};Dn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Js(t,this.TimeBufferType),this.values=Js(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Js(e.times,Array),values:Js(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ra(e.settings)&&(n.settings={inTangents:Js(e.settings.inTangents,Array),outTangents:Js(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new nl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qr:t=this.InterpolantFactoryMethodDiscrete;break;case Ga:t=this.InterpolantFactoryMethodLinear;break;case La:t=this.InterpolantFactoryMethodSmooth;break;case mh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $e("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return Ga;case this.InterpolantFactoryMethodSmooth:return La;case this.InterpolantFactoryMethodBezier:return mh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Ra(this.settings)&&(Jd(this.settings.inTangents,e),Jd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ra(this.settings)&&(Kd(this.settings.inTangents,e),Kd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ke("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ke("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&jm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ke("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===La,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let y=t[u+m];if(y!==t[d+m]||y!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ra(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Ga;Yi=class extends Dn{constructor(e,t,n){super(e,t,n)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=qr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;il=class extends Dn{constructor(e,t,n,s){super(e,t,n,s)}};il.prototype.ValueTypeName="color";sl=class extends Dn{constructor(e,t,n,s){super(e,t,n,s)}};sl.prototype.ValueTypeName="number";rl=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)ni.slerpFlat(r,0,o,c-a,o,c,l);return r}},co=class extends Dn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new rl(this.times,this.values,this.getValueSize(),e)}};co.prototype.ValueTypeName="quaternion";co.prototype.InterpolantFactoryMethodSmooth=void 0;$i=class extends Dn{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=qr;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;ol=class extends Dn{constructor(e,t,n,s){super(e,t,n,s)}};ol.prototype.ValueTypeName="vector";al=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xf=new al,ll=class{constructor(e){this.manager=e!==void 0?e:Xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ll.DEFAULT_MATERIAL_NAME="__DEFAULT";gs=class extends Yt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ho=class extends gs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ph=new Pt,jd=new P,Qd=new P,uo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hi,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;jd.setFromMatrixPosition(e.matrixWorld),t.position.copy(jd),Qd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){ph.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ph,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===tr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(ph)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Pa=new P,Ia=new ni,jn=new P,fo=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pa,Ia,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,Ia,jn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Pa,Ia,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,Ia,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zi=new P,ef=new Fe,tf=new Fe,pn=class extends fo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(Xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,ef,tf),t.subVectors(tf,ef)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vh=class extends uo{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0}},oi=class extends gs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},xs=class extends fo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Sh=class extends uo{constructor(){super(new xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},po=class extends gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Sh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},mo=class extends gs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Ks=-90,js=1,ur=class extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(Ks,js,e,t);s.layers=this.layers,this.add(s);let r=new pn(Ks,js,e,t);r.layers=this.layers,this.add(r);let o=new pn(Ks,js,e,t);o.layers=this.layers,this.add(o);let a=new pn(Ks,js,e,t);a.layers=this.layers,this.add(a);let l=new pn(Ks,js,e,t);l.layers=this.layers,this.add(l);let c=new pn(Ks,js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},cl=class extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},go=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=E0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};Vh="\\[\\]\\.:\\/",T0=new RegExp("["+Vh+"]","g"),Wh="[^"+Vh+"]",w0="[^"+Vh.replace("\\.","")+"]",C0=/((?:WC+[\/:])*)/.source.replace("WC",Wh),A0=/(WCOD+)?/.source.replace("WCOD",w0),R0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wh),P0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wh),I0=new RegExp("^"+C0+A0+R0+P0+"$"),L0=["material","materials","bones","map"],Mh=class{constructor(e,t,n){let s=n||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},kt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(T0,"")}static parseTrackName(e){let t=I0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);L0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=Mh;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Kv=new Float32Array(1),Jh=class Jh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Jh.prototype.isMatrix2=!0;bh=Jh;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function fp(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function k0(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],y=u[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let y=u[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function vy(i,e,t,n,s,r){let o=new Ne(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let T=_.isScene===!0?_.background:null;if(T&&T.isTexture){let S=_.backgroundBlurriness>0;T=e.get(T,S)}return T}function m(_){let T=!1,S=f(_);S===null?g(o,a):S&&S.isColor&&(g(S,1),T=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(_,T){let S=f(T);S&&S.isCubeTexture?(c===void 0&&(c=new ee(new Ze(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:bs(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_y.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(pp),c.material.toneMapped=pt.getTransfer(S.colorSpace)!==Ct,(h!==S||u!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ee(new en(2,2),new Vt({name:"BackgroundMaterial",uniforms:bs(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=pt.getTransfer(S.colorSpace)!==Ct,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,T){_.getRGB(jl,Gh(i)),t.buffers.color.setClear(jl.r,jl.g,jl.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,T=1){o.set(_),a=T,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:m,addToRenderList:y,dispose:p}}function Sy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(U,B,k,R,z){let q=!1,Y=u(U,R,k,B);r!==Y&&(r=Y,c(r.object)),q=f(U,R,k,z),q&&m(U,R,k,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(U,B,k,R),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function u(U,B,k,R){let z=R.wireframe===!0,q=n[B.id];q===void 0&&(q={},n[B.id]=q);let Y=U.isInstancedMesh===!0?U.id:0,se=q[Y];se===void 0&&(se={},q[Y]=se);let X=se[k.id];X===void 0&&(X={},se[k.id]=X);let ne=X[z];return ne===void 0&&(ne=d(l()),X[z]=ne),ne}function d(U){let B=[],k=[],R=[];for(let z=0;z<t;z++)B[z]=0,k[z]=0,R[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:k,attributeDivisors:R,object:U,attributes:{},index:null}}function f(U,B,k,R){let z=r.attributes,q=B.attributes,Y=0,se=k.getAttributes();for(let X in se)if(se[X].location>=0){let re=z[X],De=q[X];if(De===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(De=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(De=U.instanceColor)),re===void 0||re.attribute!==De||De&&re.data!==De.data)return!0;Y++}return r.attributesNum!==Y||r.index!==R}function m(U,B,k,R){let z={},q=B.attributes,Y=0,se=k.getAttributes();for(let X in se)if(se[X].location>=0){let re=q[X];re===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(re=U.instanceColor));let De={};De.attribute=re,re&&re.data&&(De.data=re.data),z[X]=De,Y++}r.attributes=z,r.attributesNum=Y,r.index=R}function y(){let U=r.newAttributes;for(let B=0,k=U.length;B<k;B++)U[B]=0}function g(U){p(U,0)}function p(U,B){let k=r.newAttributes,R=r.enabledAttributes,z=r.attributeDivisors;k[U]=1,R[U]===0&&(i.enableVertexAttribArray(U),R[U]=1),z[U]!==B&&(i.vertexAttribDivisor(U,B),z[U]=B)}function _(){let U=r.newAttributes,B=r.enabledAttributes;for(let k=0,R=B.length;k<R;k++)B[k]!==U[k]&&(i.disableVertexAttribArray(k),B[k]=0)}function T(U,B,k,R,z,q,Y){Y===!0?i.vertexAttribIPointer(U,B,k,z,q):i.vertexAttribPointer(U,B,k,R,z,q)}function S(U,B,k,R){y();let z=R.attributes,q=k.getAttributes(),Y=B.defaultAttributeValues;for(let se in q){let X=q[se];if(X.location>=0){let ne=z[se];if(ne===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(ne=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(ne=U.instanceColor)),ne!==void 0){let re=ne.normalized,De=ne.itemSize,Ue=e.get(ne);if(Ue===void 0)continue;let K=Ue.buffer,be=Ue.type,Ie=Ue.bytesPerElement,He=be===i.INT||be===i.UNSIGNED_INT||ne.gpuType===fl;if(ne.isInterleavedBufferAttribute){let ve=ne.data,Ye=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,Rt=ne.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Ve=0;Ve<X.locationSize;Ve++)p(X.location+Ve,ve.meshPerAttribute);U.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ve=0;Ve<X.locationSize;Ve++)g(X.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Ve=0;Ve<X.locationSize;Ve++)T(X.location+Ve,De/X.locationSize,be,re,Ye*Ie,(Rt+De/X.locationSize*Ve)*Ie,He)}else{if(ne.isInstancedBufferAttribute){for(let ve=0;ve<X.locationSize;ve++)p(X.location+ve,ne.meshPerAttribute);U.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ve=0;ve<X.locationSize;ve++)g(X.location+ve);i.bindBuffer(i.ARRAY_BUFFER,K);for(let ve=0;ve<X.locationSize;ve++)T(X.location+ve,De/X.locationSize,be,re,De*Ie,De/X.locationSize*ve*Ie,He)}}else if(Y!==void 0){let re=Y[se];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(X.location,re);break;case 3:i.vertexAttrib3fv(X.location,re);break;case 4:i.vertexAttrib4fv(X.location,re);break;default:i.vertexAttrib1fv(X.location,re)}}}}_()}function w(){I();for(let U in n){let B=n[U];for(let k in B){let R=B[k];for(let z in R){let q=R[z];for(let Y in q)h(q[Y].object),delete q[Y];delete R[z]}}delete n[U]}}function E(U){if(n[U.id]===void 0)return;let B=n[U.id];for(let k in B){let R=B[k];for(let z in R){let q=R[z];for(let Y in q)h(q[Y].object),delete q[Y];delete R[z]}}delete n[U.id]}function x(U){for(let B in n){let k=n[B];for(let R in k){let z=k[R];if(z[U.id]===void 0)continue;let q=z[U.id];for(let Y in q)h(q[Y].object),delete q[Y];delete z[U.id]}}}function b(U){for(let B in n){let k=n[B],R=U.isInstancedMesh===!0?U.id:0,z=k[R];if(z!==void 0){for(let q in z){let Y=z[q];for(let se in Y)h(Y[se].object),delete Y[se];delete z[q]}delete k[R],Object.keys(k).length===0&&delete n[B]}}}function I(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:g,disableUnusedAttributes:_}}function My(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function by(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==qn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==An&&x!==Fn&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&($e("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&$e("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:T,maxFragmentUniforms:S,maxSamples:w,samples:E}}function Ey(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Vn,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let _=r?0:n,T=_*4,S=p.clippingState||null;l.value=S,S=h(m,d,T,f);for(let w=0;w!==T;++w)S[w]=t[w];p.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let y=u!==null?u.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let p=f+y*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,S=f;T!==y;++T,S+=4)o.copy(u[T]).applyMatrix4(_,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function Yf(i,e,t){return new Do(i,{minFilter:Ai,generateMipmaps:e,type:tn,colorSpace:Yr,depthBuffer:t})}function No(i,e,t){return new Vt({name:i,uniforms:e,vertexShader:ht.cube_vert,fragmentShader:t,side:ln,blending:Ci,depthTest:!1,depthWrite:!1})}function Py(){return No("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${mp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Iy(){return No("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:gp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ly(){return No("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${wy}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function $f(){return No("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Zf(){return No("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Dy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===pr||f===ul)if(e.has(d)){let m=e.get(d).texture;return a(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let y=new Do(m.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",c),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,m=f===pr||f===ul,y=f===vs||f===fr;if(m||y){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new xr(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let _=d.image;return m&&_&&_.height>0||y&&_&&l(_)?(n===null&&(n=new xr(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function a(d,f){return f===pr?d.mapping=vs:f===ul&&(d.mapping=fr),d}function l(d){let f=0,m=6;for(let y=0;y<m;y++)d[y]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Ny(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&us("WebGLRenderer: "+n+" extension not supported."),s}}}function Uy(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let y=r.get(m);y&&(e.remove(y),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function h(m){let y=m.attributes;for(let g in y)e.update(y[g],i.ARRAY_BUFFER)}function u(m){let y=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let _=y!==null?y.array.length:g.array.length/3-1,T=g.count>=65535?no:to,S=new T(Math.ceil(_/3)*6,1),w=S.array;if(y!==null){let x=y.array;p=y.version;for(let b=0,I=0;b<_;b+=3){let A=x[b+0],U=x[b+1],B=x[b+2];w[I++]=A,w[I++]=U,w[I++]=U,w[I++]=B,w[I++]=B,w[I++]=A}}else{p=g.version;for(let x=0,b=0;x<_;x+=3){let I=x+0,A=x+1,U=x+2;w[b++]=I,w[b++]=A,w[b++]=A,w[b++]=U,w[b++]=U,w[b++]=I}}S.version=p;let E=r.get(m);E&&e.remove(E),r.set(m,S)}function d(m){let y=r.get(m);if(y){let g=m.index;g!==null&&y.version<g.version&&u(m)}else u(m);return r.get(m)}function f(){for(let m in s){let y=s[m].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Oy(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let y=0;for(let g=0;g<f;g++)y+=d[g];t.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function By(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ke("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Fy(i,e,t){let n=new WeakMap,s=new Ht;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let I=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],T=0;f===!0&&(T=1),m===!0&&(T=2),y===!0&&(T=3);let S=a.attributes.position.count*T,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let E=new Float32Array(S*w*4*u),x=new Kr(E,S,w,u);x.type=Fn,x.needsUpdate=!0;let b=T*4;for(let A=0;A<u;A++){let U=g[A],B=p[A],k=_[A],R=S*w*4*A;for(let z=0;z<U.count;z++){let q=z*b;f===!0&&(s.fromBufferAttribute(U,z),E[R+q+0]=s.x,E[R+q+1]=s.y,E[R+q+2]=s.z,E[R+q+3]=0),m===!0&&(s.fromBufferAttribute(B,z),E[R+q+4]=s.x,E[R+q+5]=s.y,E[R+q+6]=s.z,E[R+q+7]=0),y===!0&&(s.fromBufferAttribute(k,z),E[R+q+8]=s.x,E[R+q+9]=s.y,E[R+q+10]=s.z,E[R+q+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new Fe(S,w)},n.set(a,d),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ky(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}function Hy(i,e,t,n,s,r){let o=new qt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new At;h.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ot([0,2,0,0,2,0],2));let u=new cr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ee(h,u),f=new xs(-1,1,1,-1,0,1),m=null,y=null,g=!1,p,_=null,T=[],S=!1;this.setSize=function(w,E){o.setSize(w,E),a!==null&&a.setSize(w,E),l!==null&&l.setSize(w,E);for(let x=0;x<T.length;x++){let b=T[x];b.setSize&&b.setSize(w,E)}},this.setEffects=function(w){T=w,S=T.length>0&&T[0].isRenderPass===!0;let E=o.width,x=o.height;T.length>0&&a===null&&(a=new qt(E,x,{type:tn,depthBuffer:!1,stencilBuffer:!1}),l=new qt(E,x,{type:tn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&T.some(I=>I.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Ti(E,x),r===!0&&(c.format=Ri,c.type=Ss)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let I=0;I<T.length;I++){let A=T[I];A.setSize&&A.setSize(E,x),b&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(w,E){if(g||w.toneMapping===ai&&T.length===0)return!1;if(_=E,E!==null){let x=E.width,b=E.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return S===!1&&w.setRenderTarget(o),p=w.toneMapping,w.toneMapping=ai,!0},this.hasRenderPass=function(){return S},this.end=function(w,E){w.toneMapping=p,g=!0;let x=o,b=a;for(let I=0;I<T.length;I++){let A=T[I];A.enabled!==!1&&(A.render(w,b,x,E),A.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(m!==w.outputColorSpace||y!==w.toneMapping){m=w.outputColorSpace,y=w.toneMapping,u.defines={},pt.getTransfer(m)===Ct&&(u.defines.SRGB_TRANSFER="");let I=zy[y];I&&(u.defines[I]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(_),w.render(d,f),_=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}function yr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Jf[s];if(r===void 0&&(r=new Float32Array(s),Jf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function tc(i,e){let t=Kf[e];t===void 0&&(t=new Int32Array(e),Kf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),sn(t,e)}}function Wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),sn(t,e)}}function Xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),sn(t,e)}}function qy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;ep.set(n),i.uniformMatrix2fv(this.addr,!1,ep),sn(t,n)}}function Yy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Qf.set(n),i.uniformMatrix3fv(this.addr,!1,Qf),sn(t,n)}}function $y(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;jf.set(n),i.uniformMatrix4fv(this.addr,!1,jf),sn(t,n)}}function Zy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),sn(t,e)}}function Ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),sn(t,e)}}function jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),sn(t,e)}}function Qy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),sn(t,e)}}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),sn(t,e)}}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),sn(t,e)}}function nc(i){return i.version===0&&(i.compareFunction=kh,i.needsUpdate=!0),i}function i_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=nc(yp):r=xp,t.setTexture2D(e||r,s)}function s_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Sp,s)}function r_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=nc(_p):r=Mp,t.setTextureCube(e||r,s)}function o_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vp,s)}function a_(i){switch(i){case 5126:return Gy;case 35664:return Vy;case 35665:return Wy;case 35666:return Xy;case 35674:return qy;case 35675:return Yy;case 35676:return $y;case 5124:case 35670:return Zy;case 35667:case 35671:return Jy;case 35668:case 35672:return Ky;case 35669:case 35673:return jy;case 5125:return Qy;case 36294:return e_;case 36295:return t_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return o_}}function l_(i,e){i.uniform1fv(this.addr,e)}function c_(i,e){let t=yr(e,this.size,2);i.uniform2fv(this.addr,t)}function h_(i,e){let t=yr(e,this.size,3);i.uniform3fv(this.addr,t)}function u_(i,e){let t=yr(e,this.size,4);i.uniform4fv(this.addr,t)}function d_(i,e){let t=yr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function f_(i,e){let t=yr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function p_(i,e){let t=yr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function m_(i,e){i.uniform1iv(this.addr,e)}function g_(i,e){i.uniform2iv(this.addr,e)}function x_(i,e){i.uniform3iv(this.addr,e)}function y_(i,e){i.uniform4iv(this.addr,e)}function __(i,e){i.uniform1uiv(this.addr,e)}function v_(i,e){i.uniform2uiv(this.addr,e)}function S_(i,e){i.uniform3uiv(this.addr,e)}function M_(i,e){i.uniform4uiv(this.addr,e)}function b_(i,e,t){let n=this.cache,s=e.length,r=tc(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=nc(yp):o=xp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function E_(i,e,t){let n=this.cache,s=e.length,r=tc(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Sp,r[o])}function T_(i,e,t){let n=this.cache,s=e.length,r=tc(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=nc(_p):o=Mp;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function w_(i,e,t){let n=this.cache,s=e.length,r=tc(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||vp,r[o])}function C_(i){switch(i){case 5126:return l_;case 35664:return c_;case 35665:return h_;case 35666:return u_;case 35674:return d_;case 35675:return f_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return x_;case 35669:case 35673:return y_;case 5125:return __;case 36294:return v_;case 36295:return S_;case 36296:return M_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return w_}}function tp(i,e){i.seq.push(e),i.map[e.id]=e}function A_(i,e,t){let n=i.name,s=n.length;for(jh.lastIndex=0;;){let r=jh.exec(n),o=jh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){tp(t,c===void 0?new eu(a,i,e):new tu(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new nu(a),tp(t,u)),t=u}}}function np(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function I_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function L_(i){pt._getMatrix(ip,pt.workingColorSpace,i);let e=`mat3( ${ip.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case $r:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function sp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+I_(i.getShaderSource(e),a)}else return r}function D_(i,e){let t=L_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function U_(i,e){let t=N_[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function O_(){pt.getLuminanceCoefficients(Ql);let i=Ql.x.toFixed(4),e=Ql.y.toFixed(4),t=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function F_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function k_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Lo(i){return i!==""}function rp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function op(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function iu(i){return i.replace(z_,H_)}function H_(i,e){let t=ht[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return iu(t)}function ap(i){return i.replace(G_,V_)}function V_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function X_(i){return W_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Y_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":q_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Z_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":$_[i.combine]||"ENVMAP_BLENDING_NONE"}function J_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=X_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Y_(t),u=Z_(t),d=B_(t),f=F_(r),m=s.createProgram(),y,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Lo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Lo).join(`
`),g.length>0&&(g+=`
`)):(y=[lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),g=[lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?ht.tonemapping_pars_fragment:"",t.toneMapping!==ai?U_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,D_("linearToOutputTexel",t.outputColorSpace),O_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lo).join(`
`)),o=iu(o),o=rp(o,t),o=op(o,t),a=iu(a),a=rp(a,t),a=op(a,t),o=ap(o),a=ap(a),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===Hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=p+y+o,T=p+g+a,S=np(s,s.VERTEX_SHADER,_),w=np(s,s.FRAGMENT_SHADER,T);s.attachShader(m,S),s.attachShader(m,w),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function E(A){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(m)||"",B=s.getShaderInfoLog(S)||"",k=s.getShaderInfoLog(w)||"",R=U.trim(),z=B.trim(),q=k.trim(),Y=!0,se=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,S,w);else{let X=sp(s,S,"vertex"),ne=sp(s,w,"fragment");Ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+R+`
`+X+`
`+ne)}else R!==""?$e("WebGLProgram: Program Info Log:",R):(z===""||q==="")&&(se=!1);se&&(A.diagnostics={runnable:Y,programLog:R,vertexShader:{log:z,prefix:y},fragmentShader:{log:q,prefix:g}})}s.deleteShader(S),s.deleteShader(w),x=new gr(s,m),b=k_(s,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(m,R_)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=w,this}function j_(i){return i===Ki||i===Ro||i===Po}function Q_(i,e,t,n,s,r){let o=new jr,a=new su,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,b,I,A,U,B){let k=A.fog,R=U.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=e.get(x.envMap||z,q),se=d[x.type],X=n.precision;x.precision!==null&&(X=n.getMaxPrecision(x.precision),X!==x.precision&&$e("WebGLProgram.getParameters:",x.precision,"not supported, using",X,"instead."));let ne=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,re=ne!==void 0?ne.length:0,De=0;R.morphAttributes.position!==void 0&&(De=1),R.morphAttributes.normal!==void 0&&(De=2),R.morphAttributes.color!==void 0&&(De=3);let Ue,K,be,Ie;if(se){let Me=ci[se];Ue=Me.vertexShader,K=Me.fragmentShader}else{Ue=x.vertexShader,K=x.fragmentShader;let Me=a.getVertexShaderStage(x),wt=a.getFragmentShaderStage(x);a.update(x,Me,wt),be=Me.id,Ie=wt.id}let He=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ye=U.isInstancedMesh===!0,Rt=U.isBatchedMesh===!0,Ve=!!x.map,tt=!!x.matcap,je=!!Y,Be=je&&Y.isPMREMTexture===!0,Qe=!!x.aoMap,_t=!!x.lightMap,It=!!x.bumpMap&&x.wireframe===!1,it=!!x.normalMap,zt=!!x.displacementMap,vt=!!x.emissiveMap,Lt=!!x.metalnessMap,$t=!!x.roughnessMap,jt=x.anisotropy>0,L=x.clearcoat>0,Xt=x.diffuseRoughness>0,Ot=x.dispersion>0,Ft=x.retroreflectivity>0,Se=x.iridescence>0,Wt=x.sheen>0,qe=x.transmission>0,Je=jt&&!!x.anisotropyMap,C=L&&!!x.clearcoatMap,v=L&&!!x.clearcoatNormalMap,G=L&&!!x.clearcoatRoughnessMap,ae=Xt&&!!x.diffuseRoughnessMap,ie=Se&&!!x.iridescenceMap,fe=Se&&!!x.iridescenceThicknessMap,ye=Wt&&!!x.sheenColorMap,j=Wt&&!!x.sheenRoughnessMap,Q=!!x.specularMap,de=!!x.specularColorMap,D=!!x.specularIntensityMap,te=qe&&!!x.transmissionMap,J=qe&&!!x.thicknessMap,ge=!!x.gradientMap,ue=!!x.alphaMap,pe=x.alphaTest>0,ze=!!x.alphaHash,rt=!!x.extensions,ce=ai;x.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(ce=i.toneMapping);let Ge=Be?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,st={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:Ue,fragmentShader:K,defines:x.defines,customVertexShaderID:be,customFragmentShaderID:Ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:X,batching:Rt,batchingColor:Rt&&U._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&U.instanceColor!==null,instancingMorph:Ye&&U.morphTexture!==null,outputColorSpace:He===null?i.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ve,matcap:tt,envMap:je,envMapMode:je&&Y.mapping,envMapPMREM:Be,envMapMaxLod:Be?Ge.length-1:null,envMapSize:Be?Ge[0].width:null,aoMap:Qe,lightMap:_t,bumpMap:It,normalMap:it,displacementMap:zt,emissiveMap:vt,normalMapObjectSpace:it&&x.normalMapType===Af,normalMapTangentSpace:it&&x.normalMapType===Jl,packedNormalMap:it&&x.normalMapType===Jl&&j_(x.normalMap.format),metalnessMap:Lt,roughnessMap:$t,anisotropy:jt,anisotropyMap:Je,clearcoat:L,clearcoatMap:C,clearcoatNormalMap:v,clearcoatRoughnessMap:G,diffuseRoughness:Xt,diffuseRoughnessMap:ae,dispersion:Ot,retroreflection:Ft,iridescence:Se,iridescenceMap:ie,iridescenceThicknessMap:fe,sheen:Wt,sheenColorMap:ye,sheenRoughnessMap:j,specularMap:Q,specularColorMap:de,specularIntensityMap:D,transmission:qe,transmissionMap:te,thicknessMap:J,gradientMap:ge,opaque:x.transparent===!1&&x.blending===Ji&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:pe,alphaHash:ze,combine:x.combine,mapUv:Ve&&f(x.map.channel),aoMapUv:Qe&&f(x.aoMap.channel),lightMapUv:_t&&f(x.lightMap.channel),bumpMapUv:It&&f(x.bumpMap.channel),normalMapUv:it&&f(x.normalMap.channel),displacementMapUv:zt&&f(x.displacementMap.channel),emissiveMapUv:vt&&f(x.emissiveMap.channel),metalnessMapUv:Lt&&f(x.metalnessMap.channel),roughnessMapUv:$t&&f(x.roughnessMap.channel),anisotropyMapUv:Je&&f(x.anisotropyMap.channel),clearcoatMapUv:C&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:j&&f(x.sheenRoughnessMap.channel),specularMapUv:Q&&f(x.specularMap.channel),specularColorMapUv:de&&f(x.specularColorMap.channel),specularIntensityMapUv:D&&f(x.specularIntensityMap.channel),transmissionMapUv:te&&f(x.transmissionMap.channel),thicknessMapUv:J&&f(x.thicknessMap.channel),alphaMapUv:ue&&f(x.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(it||jt),vertexNormals:!!R.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!R.attributes.uv&&(Ve||ue),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||R.attributes.normal===void 0&&it===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:De,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.filter(Me=>Me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:Ve&&x.map.isVideoTexture===!0&&pt.getTransfer(x.map.colorSpace)===Ct,decodeVideoTextureEmissive:vt&&x.emissiveMap.isVideoTexture===!0&&pt.getTransfer(x.emissiveMap.colorSpace)===Ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Bt,flipSided:x.side===ln,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:rt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&x.extensions.multiDraw===!0||Rt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function y(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)b.push(I),b.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(g(b,x),p(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function g(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function p(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function _(x){let b=d[x.type],I;if(b){let A=ci[b];I=Pi.clone(A.uniforms)}else I=x.uniforms;return I}function T(x,b){let I=h.get(b);return I!==void 0?++I.usedTimes:(I=new J_(i,b,x,s),c.push(I),h.set(b,I)),I}function S(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function E(){a.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:_,acquireProgram:T,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:E}}function ev(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function tv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function cp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,y,g,p){let _=i[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:g,group:p},i[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=m,_.materialVariant=o(d),_.groupOrder=y,_.renderOrder=d.renderOrder,_.z=g,_.group=p),e++,_}function l(d,f,m,y,g,p,_){_.reversedDepth===!0&&(g=-g);let T=a(d,f,m,y,g,p);m.transmission>0?n.push(T):m.transparent===!0?s.push(T):t.push(T)}function c(d,f,m,y,g,p){let _=a(d,f,m,y,g,p);m.transmission>0?n.unshift(_):m.transparent===!0?s.unshift(_):t.unshift(_)}function h(d,f){t.length>1&&t.sort(d||tv),n.length>1&&n.sort(f||cp),s.length>1&&s.sort(f||cp)}function u(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function nv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new hp,i.set(n,[o])):s>=r.length?(o=new hp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function iv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Ne};break;case"SpotLight":t={position:new P,direction:new P,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function sv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function ov(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function av(i){let e=new iv,t=sv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new Pt,o=new Pt;function a(c){let h=0,u=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,m=0,y=0,g=0,p=0,_=0,T=0,S=0,w=0,E=0,x=0,b=0,I=0,A=0;c.sort(ov);for(let B=0,k=c.length;B<k;B++){let R=c[B],z=R.color,q=R.intensity,Y=R.distance,se=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ki?se=R.shadow.map.texture:se=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=z.r*q,u+=z.g*q,d+=z.b*q;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],q);A++}else if(R.isSunLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let ne=R.shadow,re=t.get(R);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),n.sunShadow[m]=re,n.sunShadowMap[m]=se;let De=ne.getViewportCount();for(let Ue=0;Ue<De;Ue++)n.sunShadowMatrix[y+Ue]=ne.getMatrix(Ue),n.sunShadowCascade[y+Ue]=ne._cascadeData[Ue];y+=De,m++}n.sun[f]=X,f++}else if(R.isDirectionalLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let ne=R.shadow,re=t.get(R);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,n.directionalShadow[g]=re,n.directionalShadowMap[g]=se,n.directionalShadowMatrix[g]=R.shadow.matrix,w++}n.directional[g]=X,g++}else if(R.isSpotLight){let X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(z).multiplyScalar(q),X.distance=Y,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[_]=X;let ne=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,ne.updateMatrices(R),R.castShadow&&I++),n.spotLightMatrix[_]=ne.matrix,R.castShadow){let re=t.get(R);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,n.spotShadow[_]=re,n.spotShadowMap[_]=se,x++}_++}else if(R.isRectAreaLight){let X=e.get(R);X.color.copy(z).multiplyScalar(q),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[T]=X,T++}else if(R.isPointLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){let ne=R.shadow,re=t.get(R);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,re.shadowCameraNear=ne.camera.near,re.shadowCameraFar=ne.camera.far,n.pointShadow[p]=re,n.pointShadowMap[p]=se,n.pointShadowMatrix[p]=R.shadow.matrix,E++}n.point[p]=X,p++}else if(R.isHemisphereLight){let X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(q),X.groundColor.copy(R.groundColor).multiplyScalar(q),n.hemi[S]=X,S++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.sunLength!==f||U.directionalLength!==g||U.pointLength!==p||U.spotLength!==_||U.rectAreaLength!==T||U.hemiLength!==S||U.numSunShadows!==m||U.numDirectionalShadows!==w||U.numPointShadows!==E||U.numSpotShadows!==x||U.numSpotMaps!==b||U.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=g,n.spot.length=_,n.rectArea.length=T,n.point.length=p,n.hemi.length=S,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-I,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=A,U.sunLength=f,U.directionalLength=g,U.pointLength=p,U.spotLength=_,U.rectAreaLength=T,U.hemiLength=S,U.numSunShadows=m,U.numDirectionalShadows=w,U.numPointShadows=E,U.numSpotShadows=x,U.numSpotMaps=b,U.numLightProbes=A,n.version=rv++)}function l(c,h){let u=0,d=0,f=0,m=0,y=0,g=0,p=h.matrixWorldInverse;for(let _=0,T=c.length;_<T;_++){let S=c[_];if(S.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),u++}else if(S.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(S.isSpotLight){let w=n.spot[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),m++}else if(S.isRectAreaLight){let w=n.rectArea[y];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function up(i){let e=new av(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function lv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new up(i),e.set(s,[a])):r>=o.length?(a=new up(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function fv(i,e,t){let n=new Hi,s=new Fe,r=new Fe,o=new Ht,a=new Ka,l=new ja,c={},h=t.maxTextureSize,u={[Zi]:ln,[ln]:Zi,[Bt]:Bt},d=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:cv,fragmentShader:hv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new At;m.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ee(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xo;let p=this.type;this.render=function(E,x,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===rf&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xo);let I=i.getRenderTarget(),A=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Ci),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let k=p!==this.type;k&&x.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(z=>z.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,z=E.length;R<z;R++){let q=E[R],Y=q.shadow;if(Y===void 0){$e("WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let se=Y.getFrameExtents();s.multiply(se),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,Y.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=X,Y.map===null||k===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===dr){if(q.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new qt(s.x,s.y,{format:Ki,type:tn,minFilter:vn,magFilter:vn,generateMipmaps:!1}),Y.map.texture.name=q.name+".shadowMap",Y.map.depthTexture=new Ti(s.x,s.y,Fn),Y.map.depthTexture.name=q.name+".shadowMapDepth",Y.map.depthTexture.format=bi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=an,Y.map.depthTexture.magFilter=an}else q.isPointLight?(Y.map=new Do(s.x),Y.map.depthTexture=new oo(s.x,Xn)):(Y.map=new qt(s.x,s.y),Y.map.depthTexture=new Ti(s.x,s.y,Xn)),Y.map.depthTexture.name=q.name+".shadowMap",Y.map.depthTexture.format=bi,this.type===xo?(Y.map.depthTexture.compareFunction=X?Fh:Bh,Y.map.depthTexture.minFilter=vn,Y.map.depthTexture.magFilter=vn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=an,Y.map.depthTexture.magFilter=an);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let ne=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();q.isPointLight!==!0&&Y.updateMatrices(q,b);let re=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:b.layers;for(let De=0;De<ne;De++){let Ue=Y.getCamera(De);if(q.isPointLight){let K=Y.camera,be=Y.matrix,Ie=q.distance||K.far;Ie!==K.far&&(K.far=Ie,K.updateProjectionMatrix()),Io.setFromMatrixPosition(q.matrixWorld),K.position.copy(Io),Qh.copy(K.position),Qh.add(uv[De]),K.up.copy(dv[De]),K.lookAt(Qh),K.updateMatrixWorld(),be.makeTranslation(-Io.x,-Io.y,-Io.z),dp.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(dp,K.coordinateSystem,K.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,De),i.clear();else{De===0&&(i.setRenderTarget(Y.map),i.clear());let K=Y.getViewport(De);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),B.viewport(o)}n=Y.getFrustum(De),S(x,b,Ue,q,re,this.type)}Y.isPointLightShadow!==!0&&this.type===dr&&_(Y,b),Y.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(I,A,U)};function _(E,x){let b=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new qt(s.x,s.y,{format:Ki,type:tn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(x,null,b,d,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(x,null,b,f,y,null)}function T(E,x,b,I){let A=null,U=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)A=U;else if(A=b.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let B=A.uuid,k=x.uuid,R=c[B];R===void 0&&(R={},c[B]=R);let z=R[k];z===void 0&&(z=A.clone(),R[k]=z,x.addEventListener("dispose",w)),A=z}if(A.visible=x.visible,A.wireframe=x.wireframe,I===dr?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:u[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let B=i.properties.get(A);B.light=b}return A}function S(E,x,b,I,A,U){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&U===dr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let R=e.update(E),z=E.material;if(Array.isArray(z)){let q=R.groups;for(let Y=0,se=q.length;Y<se;Y++){let X=q[Y],ne=z[X.materialIndex];if(ne&&ne.visible){let re=T(E,ne,I,U);E.onBeforeShadow(i,E,x,b,R,re,X),i.renderBufferDirect(b,null,R,re,E,X),E.onAfterShadow(i,E,x,b,R,re,X)}}}else if(z.visible){let q=T(E,z,I,U);E.onBeforeShadow(i,E,x,b,R,q,null),i.renderBufferDirect(b,null,R,q,E,null),E.onAfterShadow(i,E,x,b,R,q,null)}}let k=E.children;for(let R=0,z=k.length;R<z;R++)S(k[R],x,b,I,A,U)}function w(E){E.target.removeEventListener("dispose",w);for(let b in c){let I=c[b],A=E.target.uuid;A in I&&(I[A].dispose(),delete I[A])}}}function pv(i,e){function t(){let D=!1,te=new Ht,J=null,ge=new Ht(0,0,0,0);return{setMask:function(ue){J!==ue&&!D&&(i.colorMask(ue,ue,ue,ue),J=ue)},setLocked:function(ue){D=ue},setClear:function(ue,pe,ze,rt,ce){ce===!0&&(ue*=rt,pe*=rt,ze*=rt),te.set(ue,pe,ze,rt),ge.equals(te)===!1&&(i.clearColor(ue,pe,ze,rt),ge.copy(te))},reset:function(){D=!1,J=null,ge.set(-1,0,0,0)}}}function n(){let D=!1,te=!1,J=null,ge=null,ue=null;return{setReversed:function(pe){if(te!==pe){let ze=e.get("EXT_clip_control");pe?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),te=pe;let rt=ue;ue=null,this.setClear(rt)}},getReversed:function(){return te},setTest:function(pe){pe?ve(i.DEPTH_TEST):Ye(i.DEPTH_TEST)},setMask:function(pe){J!==pe&&!D&&(i.depthMask(pe),J=pe)},setFunc:function(pe){if(te&&(pe=Ff[pe]),ge!==pe){switch(pe){case Na:i.depthFunc(i.NEVER);break;case Ua:i.depthFunc(i.ALWAYS);break;case Oa:i.depthFunc(i.LESS);break;case er:i.depthFunc(i.LEQUAL);break;case Ba:i.depthFunc(i.EQUAL);break;case Fa:i.depthFunc(i.GEQUAL);break;case ka:i.depthFunc(i.GREATER);break;case za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=pe}},setLocked:function(pe){D=pe},setClear:function(pe){ue!==pe&&(ue=pe,te&&(pe=1-pe),i.clearDepth(pe))},reset:function(){D=!1,J=null,ge=null,ue=null,te=!1}}}function s(){let D=!1,te=null,J=null,ge=null,ue=null,pe=null,ze=null,rt=null,ce=null;return{setTest:function(Ge){D||(Ge?ve(i.STENCIL_TEST):Ye(i.STENCIL_TEST))},setMask:function(Ge){te!==Ge&&!D&&(i.stencilMask(Ge),te=Ge)},setFunc:function(Ge,st,Me){(J!==Ge||ge!==st||ue!==Me)&&(i.stencilFunc(Ge,st,Me),J=Ge,ge=st,ue=Me)},setOp:function(Ge,st,Me){(pe!==Ge||ze!==st||rt!==Me)&&(i.stencilOp(Ge,st,Me),pe=Ge,ze=st,rt=Me)},setLocked:function(Ge){D=Ge},setClear:function(Ge){ce!==Ge&&(i.clearStencil(Ge),ce=Ge)},reset:function(){D=!1,te=null,J=null,ge=null,ue=null,pe=null,ze=null,rt=null,ce=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],y=null,g=!1,p=null,_=null,T=null,S=null,w=null,E=null,x=null,b=new Ne(0,0,0),I=0,A=!1,U=null,B=null,k=null,R=null,z=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,se=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=se>=1):X.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=se>=2);let ne=null,re={},De=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),K=new Ht().fromArray(De),be=new Ht().fromArray(Ue);function Ie(D,te,J,ge){let ue=new Uint8Array(4),pe=i.createTexture();i.bindTexture(D,pe),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<J;ze++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(te+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return pe}let He={};He[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),He[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),He[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),He[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(i.DEPTH_TEST),o.setFunc(er),It(!1),it(Eh),ve(i.CULL_FACE),Qe(Ci);function ve(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ye(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Rt(D,te){return d[D]!==te?(i.bindFramebuffer(D,te),d[D]=te,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=te),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=te),!0):!1}function Ve(D,te){let J=m,ge=!1;if(D){J=f.get(te),J===void 0&&(J=[],f.set(te,J));let ue=D.textures;if(J.length!==ue.length||J[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,ze=ue.length;pe<ze;pe++)J[pe]=i.COLOR_ATTACHMENT0+pe;J.length=ue.length,ge=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ge=!0);ge&&i.drawBuffers(J)}function tt(D){return y!==D?(i.useProgram(D),y=D,!0):!1}let je={[ys]:i.FUNC_ADD,[af]:i.FUNC_SUBTRACT,[lf]:i.FUNC_REVERSE_SUBTRACT};je[cf]=i.MIN,je[hf]=i.MAX;let Be={[uf]:i.ZERO,[df]:i.ONE,[ff]:i.SRC_COLOR,[Ch]:i.SRC_ALPHA,[_f]:i.SRC_ALPHA_SATURATE,[xf]:i.DST_COLOR,[mf]:i.DST_ALPHA,[pf]:i.ONE_MINUS_SRC_COLOR,[Ah]:i.ONE_MINUS_SRC_ALPHA,[yf]:i.ONE_MINUS_DST_COLOR,[gf]:i.ONE_MINUS_DST_ALPHA,[vf]:i.CONSTANT_COLOR,[Sf]:i.ONE_MINUS_CONSTANT_COLOR,[Mf]:i.CONSTANT_ALPHA,[bf]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(D,te,J,ge,ue,pe,ze,rt,ce,Ge){if(D===Ci){g===!0&&(Ye(i.BLEND),g=!1);return}if(g===!1&&(ve(i.BLEND),g=!0),D!==of){if(D!==p||Ge!==A){if((_!==ys||w!==ys)&&(i.blendEquation(i.FUNC_ADD),_=ys,w=ys),Ge)switch(D){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lt:i.blendFunc(i.ONE,i.ONE);break;case Th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",D);break}else switch(D){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Th:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wh:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",D);break}T=null,S=null,E=null,x=null,b.set(0,0,0),I=0,p=D,A=Ge}return}ue=ue||te,pe=pe||J,ze=ze||ge,(te!==_||ue!==w)&&(i.blendEquationSeparate(je[te],je[ue]),_=te,w=ue),(J!==T||ge!==S||pe!==E||ze!==x)&&(i.blendFuncSeparate(Be[J],Be[ge],Be[pe],Be[ze]),T=J,S=ge,E=pe,x=ze),(rt.equals(b)===!1||ce!==I)&&(i.blendColor(rt.r,rt.g,rt.b,ce),b.copy(rt),I=ce),p=D,A=!1}function _t(D,te){D.side===Bt?Ye(i.CULL_FACE):ve(i.CULL_FACE);let J=D.side===ln;te&&(J=!J),It(J),D.blending===Ji&&D.transparent===!1?Qe(Ci):Qe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let ge=D.stencilWrite;a.setTest(ge),ge&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),vt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):Ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function It(D){U!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),U=D)}function it(D){D!==nf?(ve(i.CULL_FACE),D!==B&&(D===Eh?i.cullFace(i.BACK):D===sf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ye(i.CULL_FACE),B=D}function zt(D){D!==k&&(Y&&i.lineWidth(D),k=D)}function vt(D,te,J){D?(ve(i.POLYGON_OFFSET_FILL),(R!==te||z!==J)&&(R=te,z=J,o.getReversed()&&(te=-te,J=-J),i.polygonOffset(te,J))):Ye(i.POLYGON_OFFSET_FILL)}function Lt(D){D?ve(i.SCISSOR_TEST):Ye(i.SCISSOR_TEST)}function $t(D){D===void 0&&(D=i.TEXTURE0+q-1),ne!==D&&(i.activeTexture(D),ne=D)}function jt(D,te,J){J===void 0&&(ne===null?J=i.TEXTURE0+q-1:J=ne);let ge=re[J];ge===void 0&&(ge={type:void 0,texture:void 0},re[J]=ge),(ge.type!==D||ge.texture!==te)&&(ne!==J&&(i.activeTexture(J),ne=J),i.bindTexture(D,te||He[D]),ge.type=D,ge.texture=te)}function L(){let D=re[ne];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Xt(){try{i.compressedTexImage2D(...arguments)}catch(D){Ke("WebGLState:",D)}}function Ot(){try{i.compressedTexImage3D(...arguments)}catch(D){Ke("WebGLState:",D)}}function Ft(){try{i.texSubImage2D(...arguments)}catch(D){Ke("WebGLState:",D)}}function Se(){try{i.texSubImage3D(...arguments)}catch(D){Ke("WebGLState:",D)}}function Wt(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ke("WebGLState:",D)}}function qe(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ke("WebGLState:",D)}}function Je(){try{i.texStorage2D(...arguments)}catch(D){Ke("WebGLState:",D)}}function C(){try{i.texStorage3D(...arguments)}catch(D){Ke("WebGLState:",D)}}function v(){try{i.texImage2D(...arguments)}catch(D){Ke("WebGLState:",D)}}function G(){try{i.texImage3D(...arguments)}catch(D){Ke("WebGLState:",D)}}function ae(D){return u[D]!==void 0?u[D]:i.getParameter(D)}function ie(D,te){u[D]!==te&&(i.pixelStorei(D,te),u[D]=te)}function fe(D){K.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),K.copy(D))}function ye(D){be.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),be.copy(D))}function j(D,te){let J=c.get(te);J===void 0&&(J=new WeakMap,c.set(te,J));let ge=J.get(D);ge===void 0&&(ge=i.getUniformBlockIndex(te,D.name),i.uniformBlockBinding(te,ge,ge),J.set(D,ge))}function Q(D,te,J){let ue=c.get(te).get(D);l[ue]!==J&&(i.bindBufferBase(i.UNIFORM_BUFFER,ue,J),l[ue]=J)}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ne=null,re={},d={},l={},f=new WeakMap,m=[],y=null,g=!1,p=null,_=null,T=null,S=null,w=null,E=null,x=null,b=new Ne(0,0,0),I=0,A=!1,U=null,B=null,k=null,R=null,z=null,K.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ve,disable:Ye,bindFramebuffer:Rt,drawBuffers:Ve,useProgram:tt,setBlending:Qe,setMaterial:_t,setFlipSided:It,setCullFace:it,setLineWidth:zt,setPolygonOffset:vt,setScissorTest:Lt,activeTexture:$t,bindTexture:jt,unbindTexture:L,compressedTexImage2D:Xt,compressedTexImage3D:Ot,texImage2D:v,texImage3D:G,pixelStorei:ie,getParameter:ae,updateUBOMapping:j,uniformBlockBinding:Q,texStorage2D:Je,texStorage3D:C,texSubImage2D:Ft,texSubImage3D:Se,compressedTexSubImage2D:Wt,compressedTexSubImage3D:qe,scissor:fe,viewport:ye,reset:de}}function mv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,h=new WeakMap,u=new Set,d,f=new WeakMap,m=new Set,y=new FinalizationRegistry(C=>m.delete(C)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,v){return g?new OffscreenCanvas(C,v):Zr("canvas")}function _(C,v,G){let ae=1,ie=Je(C);if((ie.width>G||ie.height>G)&&(ae=G/Math.max(ie.width,ie.height)),ae<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let fe=Math.floor(ae*ie.width),ye=Math.floor(ae*ie.height);d===void 0&&(d=p(fe,ye));let j=v?p(fe,ye):d;return j.width=fe,j.height=ye,j.getContext("2d").drawImage(C,0,0,fe,ye),$e("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+fe+"x"+ye+")."),j}else return"data"in C&&$e("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function T(C){return C.generateMipmaps}function S(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(C,v,G,ae,ie,fe=!1){if(C!==null){if(i[C]!==void 0)return i[C];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ye;ae&&(ye=e.get("EXT_texture_norm16"),ye||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=v;if(v===i.RED&&(G===i.FLOAT&&(j=i.R32F),G===i.HALF_FLOAT&&(j=i.R16F),G===i.UNSIGNED_BYTE&&(j=i.R8),G===i.UNSIGNED_SHORT&&ye&&(j=ye.R16_EXT),G===i.SHORT&&ye&&(j=ye.R16_SNORM_EXT)),v===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.R8UI),G===i.UNSIGNED_SHORT&&(j=i.R16UI),G===i.UNSIGNED_INT&&(j=i.R32UI),G===i.BYTE&&(j=i.R8I),G===i.SHORT&&(j=i.R16I),G===i.INT&&(j=i.R32I)),v===i.RG&&(G===i.FLOAT&&(j=i.RG32F),G===i.HALF_FLOAT&&(j=i.RG16F),G===i.UNSIGNED_BYTE&&(j=i.RG8),G===i.UNSIGNED_SHORT&&ye&&(j=ye.RG16_EXT),G===i.SHORT&&ye&&(j=ye.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RG8UI),G===i.UNSIGNED_SHORT&&(j=i.RG16UI),G===i.UNSIGNED_INT&&(j=i.RG32UI),G===i.BYTE&&(j=i.RG8I),G===i.SHORT&&(j=i.RG16I),G===i.INT&&(j=i.RG32I)),v===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGB8UI),G===i.UNSIGNED_SHORT&&(j=i.RGB16UI),G===i.UNSIGNED_INT&&(j=i.RGB32UI),G===i.BYTE&&(j=i.RGB8I),G===i.SHORT&&(j=i.RGB16I),G===i.INT&&(j=i.RGB32I)),v===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),G===i.UNSIGNED_INT&&(j=i.RGBA32UI),G===i.BYTE&&(j=i.RGBA8I),G===i.SHORT&&(j=i.RGBA16I),G===i.INT&&(j=i.RGBA32I)),v===i.RGB&&(G===i.UNSIGNED_SHORT&&ye&&(j=ye.RGB16_EXT),G===i.SHORT&&ye&&(j=ye.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),v===i.RGBA){let Q=fe?$r:pt.getTransfer(ie);G===i.FLOAT&&(j=i.RGBA32F),G===i.HALF_FLOAT&&(j=i.RGBA16F),G===i.UNSIGNED_BYTE&&(j=Q===Ct?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&ye&&(j=ye.RGBA16_EXT),G===i.SHORT&&ye&&(j=ye.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(C,v){let G;return C?v===null||v===Xn||v===Ss?G=i.DEPTH24_STENCIL8:v===Fn?G=i.DEPTH32F_STENCIL8:v===mr&&(G=i.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Xn||v===Ss?G=i.DEPTH_COMPONENT24:v===Fn?G=i.DEPTH_COMPONENT32F:v===mr&&(G=i.DEPTH_COMPONENT16),G}function b(C,v){return T(C)===!0||C.isFramebufferTexture&&C.minFilter!==an&&C.minFilter!==vn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function I(C){let v=new WeakRef(C);n.get(C).__ref=v,m.add(v),y.register(C,v,v)}function A(C){let v=n.get(C).__ref;v!==void 0&&(m.delete(v),y.unregister(v))}function U(C){k(C.target)}function B(C){R(C.target)}function k(C){C.removeEventListener("dispose",U),A(C),q(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function R(C){C.removeEventListener("dispose",B),A(C),se(C)}function z(){for(let C of m){let v=C.deref();v!==void 0&&(v.isRenderTarget===!0?R(v):k(v))}m.clear(),u.clear()}function q(C){let v=n.get(C);if(v.__webglInit===void 0)return;let G=C.source,ae=f.get(G);if(ae){let ie=ae[v.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&Y(C),Object.keys(ae).length===0&&f.delete(G)}n.remove(C)}function Y(C){let v=n.get(C);i.deleteTexture(v.__webglTexture);let G=C.source,ae=f.get(G);delete ae[v.__cacheKey],o.memory.textures--}function se(C){let v=n.get(C);v.__depthDisposeCallback&&v.__depthDisposeCallback();let G=C.depthTexture;if(G&&G.renderTarget===C&&k(G),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(v.__webglFramebuffer[ie]))for(let fe=0;fe<v.__webglFramebuffer[ie].length;fe++)i.deleteFramebuffer(v.__webglFramebuffer[ie][fe]);else i.deleteFramebuffer(v.__webglFramebuffer[ie]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ie])}else{if(Array.isArray(v.__webglFramebuffer))for(let ie=0;ie<v.__webglFramebuffer.length;ie++)i.deleteFramebuffer(v.__webglFramebuffer[ie]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ie=0;ie<v.__webglColorRenderbuffer.length;ie++)v.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ie]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let ae=C.textures;for(let ie=0,fe=ae.length;ie<fe;ie++){let ye=n.get(ae[ie]);ye.__webglTexture&&(i.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(ae[ie])}n.remove(C)}let X=0;function ne(){X=0}function re(){return X}function De(C){X=C}function Ue(){let C=X;return C>=s.maxTextures&&$e("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,C}function K(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.mipmapsAutoUpdate),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function be(C,v){let G=n.get(C);if(C.isVideoTexture&&Wt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){let ae=C.image;if(ae===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(G,C,v);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+v)}function Ie(C,v){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){_t(G,C,v);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+v)}function He(C,v){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){_t(G,C,v);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+v)}function ve(C,v){let G=n.get(C);if(C.version>0&&G.__version!==C.version){It(G,C,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+v)}let Ye={[ei]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},Rt={[an]:i.NEAREST,[wf]:i.NEAREST_MIPMAP_NEAREST,[Eo]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[dl]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},Ve={[Pf]:i.NEVER,[kh]:i.ALWAYS,[If]:i.LESS,[Bh]:i.LEQUAL,[Lf]:i.EQUAL,[Fh]:i.GEQUAL,[Df]:i.GREATER,[Nf]:i.NOTEQUAL};function tt(C,v){if(v.type===Fn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===vn||v.magFilter===dl||v.magFilter===Eo||v.magFilter===Ai||v.minFilter===vn||v.minFilter===dl||v.minFilter===Eo||v.minFilter===Ai)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Ye[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Ye[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Ye[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Rt[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Rt[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===an||v.minFilter!==Eo&&v.minFilter!==Ai||v.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function je(C,v){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",U),I(v));let ae=v.source,ie=f.get(ae);ie===void 0&&(ie={},f.set(ae,ie));let fe=K(v);if(fe!==C.__cacheKey){ie[fe]===void 0&&(ie[fe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[fe].usedTimes++;let ye=ie[C.__cacheKey];ye!==void 0&&(ie[C.__cacheKey].usedTimes--,ye.usedTimes===0&&Y(v)),C.__cacheKey=fe,C.__webglTexture=ie[fe].texture}return G}function Be(C,v,G){return Math.floor(Math.floor(C/G)/v)}function Qe(C,v,G,ae){let fe=C.updateRanges;if(fe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,G,ae,v.data);else{fe.sort((D,te)=>D.start-te.start);let ye=0;for(let D=1;D<fe.length;D++){let te=fe[ye],J=fe[D],ge=te.start+te.count,ue=Be(J.start,v.width,4),pe=Be(te.start,v.width,4);J.start<=ge+1&&ue===pe&&Be(J.start+J.count-1,v.width,4)===ue?te.count=Math.max(te.count,J.start+J.count-te.start):(++ye,fe[ye]=J)}fe.length=ye+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),de=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let D=0,te=fe.length;D<te;D++){let J=fe[D],ge=Math.floor(J.start/4),ue=Math.ceil(J.count/4),pe=ge%v.width,ze=Math.floor(ge/v.width),rt=ue,ce=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,ze),t.texSubImage2D(i.TEXTURE_2D,0,pe,ze,rt,ce,G,ae,v.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function _t(C,v,G){let ae=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ae=i.TEXTURE_3D);let ie=je(C,v),fe=v.source;t.bindTexture(ae,C.__webglTexture,i.TEXTURE0+G);let ye=n.get(fe);if(fe.version!==ye.__version||ie===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ce=pt.getPrimaries(pt.workingColorSpace),Ge=v.colorSpace===Yn?null:pt.getPrimaries(v.colorSpace),st=v.colorSpace===Yn||ce===Ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let Q=_(v.image,!1,s.maxTextureSize);Q=qe(v,Q);let de=r.convert(v.format,v.colorSpace),D=r.convert(v.type),te=E(v.internalFormat,de,D,v.normalized,v.colorSpace,v.isVideoTexture);tt(ae,v);let J,ge=v.mipmaps,ue=v.isVideoTexture!==!0,pe=ye.__version===void 0||ie===!0,ze=fe.dataReady,rt=b(v,Q);if(v.isDepthTexture)te=x(v.format===Ri,v.type),pe&&(ue?t.texStorage2D(i.TEXTURE_2D,1,te,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,te,Q.width,Q.height,0,de,D,null));else if(v.isDataTexture)if(ge.length>0){ue&&pe&&t.texStorage2D(i.TEXTURE_2D,rt,te,ge[0].width,ge[0].height);for(let ce=0,Ge=ge.length;ce<Ge;ce++)J=ge[ce],ue?ze&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,J.width,J.height,de,D,J.data):t.texImage2D(i.TEXTURE_2D,ce,te,J.width,J.height,0,de,D,J.data);v.generateMipmaps=!1}else ue?(pe&&t.texStorage2D(i.TEXTURE_2D,rt,te,Q.width,Q.height),ze&&Qe(v,Q,de,D)):t.texImage2D(i.TEXTURE_2D,0,te,Q.width,Q.height,0,de,D,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ue&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,rt,te,ge[0].width,ge[0].height,Q.depth);for(let ce=0,Ge=ge.length;ce<Ge;ce++)if(J=ge[ce],v.format!==qn)if(de!==null)if(ue){if(ze)if(v.layerUpdates.size>0){let st=Xh(J.width,J.height,v.format,v.type);for(let Me of v.layerUpdates){let wt=J.data.subarray(Me*st/J.data.BYTES_PER_ELEMENT,(Me+1)*st/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,Me,J.width,J.height,1,de,wt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,J.width,J.height,Q.depth,de,J.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,te,J.width,J.height,Q.depth,0,J.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?ze&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,J.width,J.height,Q.depth,de,D,J.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,te,J.width,J.height,Q.depth,0,de,D,J.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ue&&pe&&t.texStorage2D(i.TEXTURE_2D,rt,te,ge[0].width,ge[0].height);for(let ce=0,Ge=ge.length;ce<Ge;ce++)J=ge[ce],v.format!==qn?de!==null?ue?ze&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,J.width,J.height,de,J.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,te,J.width,J.height,0,J.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?ze&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,J.width,J.height,de,D,J.data):t.texImage2D(i.TEXTURE_2D,ce,te,J.width,J.height,0,de,D,J.data)}else if(v.isDataArrayTexture)if(ue){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,rt,te,Q.width,Q.height,Q.depth),ze)if(v.layerUpdates.size>0){let ce=Xh(Q.width,Q.height,v.format,v.type);for(let Ge of v.layerUpdates){let st=Q.data.subarray(Ge*ce/Q.data.BYTES_PER_ELEMENT,(Ge+1)*ce/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ge,Q.width,Q.height,1,de,D,st)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,de,D,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,te,Q.width,Q.height,Q.depth,0,de,D,Q.data);else if(v.isData3DTexture)ue?(pe&&t.texStorage3D(i.TEXTURE_3D,rt,te,Q.width,Q.height,Q.depth),ze&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,de,D,Q.data)):t.texImage3D(i.TEXTURE_3D,0,te,Q.width,Q.height,Q.depth,0,de,D,Q.data);else if(v.isFramebufferTexture){if(pe)if(ue)t.texStorage2D(i.TEXTURE_2D,rt,te,Q.width,Q.height);else{let ce=Q.width,Ge=Q.height;for(let st=0;st<rt;st++)t.texImage2D(i.TEXTURE_2D,st,te,ce,Ge,0,de,D,null),ce>>=1,Ge>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ce=i.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),Q.parentNode!==ce){ce.appendChild(Q),u.add(v),ce.onpaint=Ge=>{let st=Ge.changedElements;for(let Me of u)st.includes(Me.image)&&(Me.needsUpdate=!0)},ce.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let st=i.RGBA,Me=i.RGBA,wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,st,Me,wt,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ge.length>0){if(ue&&pe){let ce=Je(ge[0]);t.texStorage2D(i.TEXTURE_2D,rt,te,ce.width,ce.height)}for(let ce=0,Ge=ge.length;ce<Ge;ce++)J=ge[ce],ue?ze&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,de,D,J):t.texImage2D(i.TEXTURE_2D,ce,te,de,D,J);v.generateMipmaps=!1}else if(ue){if(pe){let ce=Je(Q);t.texStorage2D(i.TEXTURE_2D,rt,te,ce.width,ce.height)}ze&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,D,Q)}else t.texImage2D(i.TEXTURE_2D,0,te,de,D,Q);T(v)&&v.mipmapsAutoUpdate===!0&&S(ae),ye.__version=fe.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function It(C,v,G){if(v.image.length!==6)return;let ae=je(C,v),ie=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+G);let fe=n.get(ie);if(ie.version!==fe.__version||ae===!0){t.activeTexture(i.TEXTURE0+G);let ye=pt.getPrimaries(pt.workingColorSpace),j=v.colorSpace===Yn?null:pt.getPrimaries(v.colorSpace),Q=v.colorSpace===Yn||ye===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let de=v.isCompressedTexture||v.image[0].isCompressedTexture,D=v.image[0]&&v.image[0].isDataTexture,te=[];for(let Me=0;Me<6;Me++)!de&&!D?te[Me]=_(v.image[Me],!0,s.maxCubemapSize):te[Me]=D?v.image[Me].image:v.image[Me],te[Me]=qe(v,te[Me]);let J=te[0],ge=r.convert(v.format,v.colorSpace),ue=r.convert(v.type),pe=E(v.internalFormat,ge,ue,v.normalized,v.colorSpace),ze=v.isVideoTexture!==!0,rt=fe.__version===void 0||ae===!0,ce=ie.dataReady,Ge=b(v,J);tt(i.TEXTURE_CUBE_MAP,v);let st;if(v.isDepthTexture){if(pe=x(v.format===Ri,v.type),rt)if(ze)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,pe,J.width,J.height);else for(let Me=0;Me<6;Me++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,pe,J.width,J.height,0,ge,ue,null)}else if(de){ze&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,pe,J.width,J.height);for(let Me=0;Me<6;Me++){st=te[Me].mipmaps;for(let wt=0;wt<st.length;wt++){let Zt=st[wt];v.format!==qn?ge!==null?ze?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,wt,0,0,Zt.width,Zt.height,ge,Zt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,wt,pe,Zt.width,Zt.height,0,Zt.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,wt,0,0,Zt.width,Zt.height,ge,ue,Zt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,wt,pe,Zt.width,Zt.height,0,ge,ue,Zt.data)}}}else{if(st=v.mipmaps,ze&&rt){st.length>0&&Ge++;let Me=Je(te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,pe,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(D){ze?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,te[Me].width,te[Me].height,ge,ue,te[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,pe,te[Me].width,te[Me].height,0,ge,ue,te[Me].data);for(let wt=0;wt<st.length;wt++){let Zn=st[wt].image[Me].image;ze?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,wt+1,0,0,Zn.width,Zn.height,ge,ue,Zn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,wt+1,pe,Zn.width,Zn.height,0,ge,ue,Zn.data)}}else{ze?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ge,ue,te[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,pe,ge,ue,te[Me]);for(let wt=0;wt<st.length;wt++){let Zt=st[wt];ze?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,wt+1,0,0,ge,ue,Zt.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,wt+1,pe,ge,ue,Zt.image[Me])}}}T(v)&&v.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),fe.__version=ie.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function it(C,v,G,ae,ie,fe){let ye=r.convert(G.format,G.colorSpace),j=r.convert(G.type),Q=E(G.internalFormat,ye,j,G.normalized,G.colorSpace),de=n.get(v),D=n.get(G);if(D.__renderTarget=v,!de.__hasExternalTextures){let te=Math.max(1,v.width>>fe),J=Math.max(1,v.height>>fe);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,fe,Q,te,J,v.depth,0,ye,j,null):t.texImage2D(ie,fe,Q,te,J,0,ye,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Se(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,ie,D.__webglTexture,0,Ft(v)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,ie,D.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(C,v,G){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){let ae=v.depthTexture,ie=ae&&ae.isDepthTexture?ae.type:null,fe=x(v.stencilBuffer,ie),ye=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Se(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft(v),fe,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft(v),fe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,fe,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,C)}else{let ae=v.textures;for(let ie=0;ie<ae.length;ie++){let fe=ae[ie],ye=r.convert(fe.format,fe.colorSpace),j=r.convert(fe.type),Q=E(fe.internalFormat,ye,j,fe.normalized,fe.colorSpace);Se(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft(v),Q,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft(v),Q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Q,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(C,v,G){let ae=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(v.depthTexture);ie.__renderTarget=v;let fe=ae?v.depthTexture.image[0]:v.depthTexture.image;(!ie.__webglTexture||fe.width!==v.width||fe.height!==v.height)&&(fe.width=v.width,fe.height=v.height,v.depthTexture.needsUpdate=!0),ae?ve(v.depthTexture,0):be(v.depthTexture,0);let ye=ie.__webglTexture,j=Ft(v),Q=ae?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,de=v.depthTexture.format===Ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===bi)Se(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,Q,ye,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,de,Q,ye,0);else if(v.depthTexture.format===Ri)Se(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,Q,ye,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,de,Q,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Lt(C){let v=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let ae=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ae){let ie=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ae.removeEventListener("dispose",ie)};ae.addEventListener("dispose",ie),v.__depthDisposeCallback=ie}v.__boundDepthTexture=ae}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(G)for(let ae=0;ae<6;ae++)vt(v.__webglFramebuffer[ae],C,ae);else C.texture.mipmaps.length>0?vt(v.__webglFramebuffer[0],C,0):vt(v.__webglFramebuffer,C,0);else if(G){v.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ae]),v.__webglDepthbuffer[ae]===void 0)v.__webglDepthbuffer[ae]=i.createRenderbuffer(),zt(v.__webglDepthbuffer[ae],C,!1);else{let ie=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=v.__webglDepthbuffer[ae];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,fe)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),zt(v.__webglDepthbuffer,C,!1);else{let ie=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,fe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(C,v,G){let ae=n.get(C);v!==void 0&&it(ae.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Lt(C)}function jt(C){let v=C.texture,G=n.get(C),ae=n.get(v);C.addEventListener("dispose",B),I(C);let ie=C.textures,fe=C.isWebGLCubeRenderTarget===!0,ye=ie.length>1;if(ye||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=v.version,o.memory.textures++),fe){G.__webglFramebuffer=[];for(let j=0;j<6;j++)if(v.mipmaps.length>0){G.__webglFramebuffer[j]=[];for(let Q=0;Q<v.mipmaps.length;Q++)G.__webglFramebuffer[j][Q]=i.createFramebuffer()}else G.__webglFramebuffer[j]=i.createFramebuffer()}else{if(v.mipmaps.length>0){G.__webglFramebuffer=[];for(let j=0;j<v.mipmaps.length;j++)G.__webglFramebuffer[j]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ye)for(let j=0,Q=ie.length;j<Q;j++){let de=n.get(ie[j]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Se(C)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let j=0;j<ie.length;j++){let Q=ie[j];G.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[j]);let de=r.convert(Q.format,Q.colorSpace),D=r.convert(Q.type),te=E(Q.internalFormat,de,D,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),J=Ft(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,te,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,G.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),tt(i.TEXTURE_CUBE_MAP,v);for(let j=0;j<6;j++)if(v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)it(G.__webglFramebuffer[j][Q],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q);else it(G.__webglFramebuffer[j],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);T(v)?S(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(ye){for(let j=0,Q=ie.length;j<Q;j++){let de=ie[j],D=n.get(de),te=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(te=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,D.__webglTexture),tt(te,de),it(G.__webglFramebuffer,C,de,i.COLOR_ATTACHMENT0+j,te,0),T(de)&&S(te)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,ae.__webglTexture),tt(j,v),v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)it(G.__webglFramebuffer[Q],C,v,i.COLOR_ATTACHMENT0,j,Q);else it(G.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,j,0);T(v)?S(j):v.mipmaps.length>0&&i.texParameteri(j,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&Lt(C)}function L(C){let v=C.textures;for(let G=0,ae=v.length;G<ae;G++){let ie=v[G];if(T(ie)&&ie.mipmapsAutoUpdate===!0){let fe=w(C),ye=n.get(ie).__webglTexture;t.bindTexture(fe,ye),S(fe),t.unbindTexture()}}}let Xt=[];function Ot(C){if(C.samples>0){if(Se(C)===!1){let v=C.textures,G=C.width,ae=C.height,ie=i.COLOR_BUFFER_BIT,fe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(C),j=v.length>1;if(j)for(let de=0;de<v.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let de=0;de<v.length;de++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[de]);let D=n.get(v[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,G,ae,0,0,G,ae,ie,i.NEAREST),l===!0&&(Xt.length=0,Xt.push(i.COLOR_ATTACHMENT0+de),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Xt.push(fe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let de=0;de<v.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,ye.__webglColorRenderbuffer[de]);let D=n.get(v[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,D,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ft(C){return Math.min(s.maxSamples,C.samples)}function Se(C){let v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Wt(C){let v=o.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function qe(C,v){let G=C.colorSpace,ae=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Yr&&G!==Yn&&(pt.getTransfer(G)===Ct?(ae!==qn||ie!==An)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",G)),v}function Je(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Ue,this.resetTextureUnits=ne,this.getTextureUnits=re,this.setTextureUnits=De,this.setTexture2D=be,this.setTexture2DArray=Ie,this.setTexture3D=He,this.setTextureCube=ve,this.rebindTextures=$t,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Se,this.dispose=z}function gv(i,e){function t(n,s=Yn){let r,o=pt.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ih)return i.BYTE;if(n===Lh)return i.SHORT;if(n===mr)return i.UNSIGNED_SHORT;if(n===fl)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===tn)return i.HALF_FLOAT;if(n===Uh)return i.ALPHA;if(n===Oh)return i.RGB;if(n===qn)return i.RGBA;if(n===bi)return i.DEPTH_COMPONENT;if(n===Ri)return i.DEPTH_STENCIL;if(n===gl)return i.RED;if(n===xl)return i.RED_INTEGER;if(n===Ki)return i.RG;if(n===yl)return i.RG_INTEGER;if(n===_l)return i.RGBA_INTEGER;if(n===To||n===wo||n===Co||n===Ao)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vl||n===Sl||n===Ml||n===bl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===El||n===Tl||n===wl||n===Cl||n===Al||n===Ro||n===Rl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===El||n===Tl)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Cl)return r.COMPRESSED_R11_EAC;if(n===Al)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ro)return r.COMPRESSED_RG11_EAC;if(n===Rl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pl||n===Il||n===Ll||n===Dl||n===Nl||n===Ul||n===Ol||n===Bl||n===Fl||n===kl||n===zl||n===Hl||n===Gl||n===Vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Il)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ll)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ul)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wl||n===Xl||n===ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wl)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yl||n===$l||n===Po||n===Zl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function vv(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Gh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,_,T,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,S)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,_,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ln&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ln&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=e.get(p),T=_.envMap,S=_.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(_v.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(bp),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=T*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,_){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let _=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Sv(i,e,t,n){let s={},r={};function o(_,T){let S=T.program;n.uniformBlockBinding(_,S,s[_.id])}function a(_,T){let S=s[_.id];S===void 0&&(m(_),S=l(_),s[_.id]=S,_.addEventListener("dispose",g));let w=T.program;n.updateUBOMapping(_,w);let E=e.render.frame;r[_.id]!==E&&(c(_),r[_.id]=E)}function l(_){let T=i.createBuffer(),S=_.__size,w=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,S,w),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function c(_){let T=s[_.id],S=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let E=0,x=S.length;E<x;E++){let b=S[E];if(Array.isArray(b))for(let I=0,A=b.length;I<A;I++)h(b[I],E,I,w);else h(b,E,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,T,S,w){if(d(_,T,S,w)===!0){let E=_.__offset,x=_.value;if(Array.isArray(x)){let b=0;for(let I=0;I<x.length;I++){let A=x[I],U=y(A,!0);u(A,_.__data,b),b+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,_.__data)}}function u(_,T,S){typeof _=="number"||typeof _=="boolean"?T[S]=_:_.isMatrix3?(T[S]=_.elements[0],T[S+1]=_.elements[1],T[S+2]=_.elements[2],T[S+3]=0,T[S+4]=_.elements[3],T[S+5]=_.elements[4],T[S+6]=_.elements[5],T[S+7]=0,T[S+8]=_.elements[6],T[S+9]=_.elements[7],T[S+10]=_.elements[8],T[S+11]=0):ArrayBuffer.isView(_)?T.set(_.subarray(0,T.length-S),S):_.toArray(T,S)}function d(_,T,S,w){let E=_.value,x=T+"_"+S;if(Array.isArray(E)){w[x]===void 0&&(w[x]=[]);let b=w[x],I=!1;for(let A=0;A<E.length;A++)f(E[A],b,A)===!0&&(I=!0);return I}return f(E,w,x)}function f(_,T,S){if(T[S]===void 0)return typeof _=="number"||typeof _=="boolean"?T[S]=_:ArrayBuffer.isView(_)?T[S]=_.slice():T[S]=_.clone(),!0;{let w=T[S];if(typeof _=="number"||typeof _=="boolean"){if(w!==_)return T[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(w.equals(_)===!1)return w.copy(_),!0}}return!1}function m(_){let T=_.uniforms,S=0,w=16;for(let x=0,b=T.length;x<b;x++){let I=Array.isArray(T[x])?T[x]:[T[x]];for(let A=0,U=I.length;A<U;A++){let B=I[A],k=Array.isArray(B.value)?B.value:[B.value],R=Array.isArray(T[x])||Array.isArray(B.value),z=S;for(let Y=0,se=k.length;Y<se;Y++){let X=k[Y],ne=y(X,R),re=S%w,De=re%ne.boundary,Ue=re+De;S+=De,Ue!==0&&w-Ue<ne.storage&&(S+=w-Ue),Y===0&&(z=S),S+=ne.storage}let q=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new q((S-z)/Float32Array.BYTES_PER_ELEMENT),B.__offset=z}}let E=S%w;return E>0&&(S+=w-E),_.__size=S,_.__cache={},this}function y(_,T){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=16,S.storage=48):_.isMatrix4?(S.boundary=16,S.storage=64):_.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",_),T===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function g(_){let T=_.target;T.removeEventListener("dispose",g),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:p}}function bv(){return li===null&&(li=new so(Mv,16,16,Ki,tn),li.name="DFG_LUT",li.minFilter=vn,li.magFilter=vn,li.wrapS=Qn,li.wrapT=Qn,li.generateMipmaps=!1,li.needsUpdate=!0),li}var z0,H0,G0,V0,W0,X0,q0,Y0,$0,Z0,J0,K0,j0,Q0,eg,tg,ng,ig,sg,rg,og,ag,lg,cg,hg,ug,dg,fg,pg,mg,gg,xg,yg,_g,vg,Sg,Mg,bg,Eg,Tg,wg,Cg,Ag,Rg,Pg,Ig,Lg,Dg,Ng,Ug,Og,Bg,Fg,kg,zg,Hg,Gg,Vg,Wg,Xg,qg,Yg,$g,Zg,Jg,Kg,jg,Qg,ex,tx,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,dx,fx,px,mx,gx,xx,yx,_x,vx,Sx,Mx,bx,Ex,Tx,wx,Cx,Ax,Rx,Px,Ix,Lx,Dx,Nx,Ux,Ox,Bx,Fx,kx,zx,Hx,Gx,Vx,Wx,Xx,qx,Yx,$x,Zx,Jx,Kx,jx,Qx,ey,ty,ny,iy,sy,ry,oy,ay,ly,cy,hy,uy,dy,fy,py,my,gy,xy,yy,ht,we,ci,jl,_y,pp,Do,qf,Ty,wy,mp,gp,Cy,Ay,Ry,xr,zy,xp,yp,_p,vp,Sp,Mp,Jf,Kf,jf,Qf,ep,eu,tu,nu,jh,gr,R_,P_,ip,N_,Ql,z_,G_,W_,q_,$_,K_,su,ru,rv,cv,hv,uv,dv,dp,Io,Qh,xv,yv,ou,au,_v,bp,Mv,li,ec,cn=xt(()=>{Kh();Kh();z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,G0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,V0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Z0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Q0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,cg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mg="gl_FragColor = linearToOutputTexel( gl_FragColor );",gg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ig=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Og=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,px=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ex=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ax=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$x=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ny=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ry=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ay=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ly=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,my=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:z0,alphahash_pars_fragment:H0,alphamap_fragment:G0,alphamap_pars_fragment:V0,alphatest_fragment:W0,alphatest_pars_fragment:X0,aomap_fragment:q0,aomap_pars_fragment:Y0,batching_pars_vertex:$0,batching_vertex:Z0,begin_vertex:J0,beginnormal_vertex:K0,bsdfs:j0,iridescence_fragment:Q0,bumpmap_pars_fragment:eg,clipping_planes_fragment:tg,clipping_planes_pars_fragment:ng,clipping_planes_pars_vertex:ig,clipping_planes_vertex:sg,color_fragment:rg,color_pars_fragment:og,color_pars_vertex:ag,color_vertex:lg,common:cg,defaultnormal_vertex:hg,displacementmap_pars_vertex:ug,displacementmap_vertex:dg,emissivemap_fragment:fg,emissivemap_pars_fragment:pg,colorspace_fragment:mg,colorspace_pars_fragment:gg,envmap_fragment:xg,envmap_common_pars_fragment:yg,envmap_pars_fragment:_g,envmap_pars_vertex:vg,envmap_physical_pars_fragment:Ig,envmap_vertex:Sg,fog_vertex:Mg,fog_pars_vertex:bg,fog_fragment:Eg,fog_pars_fragment:Tg,gradientmap_pars_fragment:wg,lightmap_pars_fragment:Cg,lights_lambert_fragment:Ag,lights_lambert_pars_fragment:Rg,lights_pars_begin:Pg,lights_toon_fragment:Lg,lights_toon_pars_fragment:Dg,lights_phong_fragment:Ng,lights_phong_pars_fragment:Ug,lights_physical_fragment:Og,lights_physical_pars_fragment:Bg,lights_fragment_begin:Fg,lights_fragment_maps:kg,lights_fragment_end:zg,lightprobes_pars_fragment:Hg,logdepthbuf_fragment:Gg,logdepthbuf_pars_fragment:Vg,logdepthbuf_pars_vertex:Wg,logdepthbuf_vertex:Xg,map_fragment:qg,map_pars_fragment:Yg,map_particle_fragment:$g,map_particle_pars_fragment:Zg,metalnessmap_fragment:Jg,metalnessmap_pars_fragment:Kg,morphinstance_vertex:jg,morphcolor_vertex:Qg,morphnormal_vertex:ex,morphtarget_pars_vertex:tx,morphtarget_vertex:nx,normal_fragment_begin:ix,normal_fragment_maps:sx,normal_pars_fragment:rx,normal_pars_vertex:ox,normal_vertex:ax,normalmap_pars_fragment:lx,clearcoat_normal_fragment_begin:cx,clearcoat_normal_fragment_maps:hx,clearcoat_pars_fragment:ux,iridescence_pars_fragment:dx,opaque_fragment:fx,packing:px,premultiplied_alpha_fragment:mx,project_vertex:gx,dithering_fragment:xx,dithering_pars_fragment:yx,roughnessmap_fragment:_x,roughnessmap_pars_fragment:vx,shadowmap_pars_fragment:Sx,shadowmap_pars_vertex:Mx,shadowmap_vertex:bx,shadowmask_pars_fragment:Ex,skinbase_vertex:Tx,skinning_pars_vertex:wx,skinning_vertex:Cx,skinnormal_vertex:Ax,specularmap_fragment:Rx,specularmap_pars_fragment:Px,tonemapping_fragment:Ix,tonemapping_pars_fragment:Lx,transmission_fragment:Dx,transmission_pars_fragment:Nx,uv_pars_fragment:Ux,uv_pars_vertex:Ox,uv_vertex:Bx,worldpos_vertex:Fx,background_vert:kx,background_frag:zx,backgroundCube_vert:Hx,backgroundCube_frag:Gx,cube_vert:Vx,cube_frag:Wx,depth_vert:Xx,depth_frag:qx,distance_vert:Yx,distance_frag:$x,equirect_vert:Zx,equirect_frag:Jx,linedashed_vert:Kx,linedashed_frag:jx,meshbasic_vert:Qx,meshbasic_frag:ey,meshlambert_vert:ty,meshlambert_frag:ny,meshmatcap_vert:iy,meshmatcap_frag:sy,meshnormal_vert:ry,meshnormal_frag:oy,meshphong_vert:ay,meshphong_frag:ly,meshphysical_vert:cy,meshphysical_frag:hy,meshtoon_vert:uy,meshtoon_frag:dy,points_vert:fy,points_frag:py,shadow_vert:my,shadow_frag:gy,sprite_vert:xy,sprite_frag:yy},we={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},ci={basic:{uniforms:gn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:gn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:gn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:gn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:gn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:gn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:gn([we.points,we.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:gn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:gn([we.common,we.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:gn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:gn([we.sprite,we.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:gn([we.common,we.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:gn([we.lights,we.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};ci.physical={uniforms:gn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};jl={r:0,b:0,g:0},_y=new Pt,pp=new et;pp.set(-1,0,0,0,1,0,0,0,1);Do=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ro(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ze(5,5,5),r=new Vt({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Ci});r.uniforms.tEquirect.value=t;let o=new ee(s,r),a=t.minFilter;return t.minFilter===Ai&&(t.minFilter=vn),new ur(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},qf=256,Ty=3,wy=20,mp=256,gp=16,Cy=3,Ay=new P,Ry=new Ne,xr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ur(1,10,null),this._boxMesh=new ee(new Ze(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Ay}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(Ry));let g=new ur(n,s,h);return g.position.copy(a),g.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=m,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(qf,kf(e))}_fromTexture(e,t){e.mapping===vs||e.mapping===fr?this._setSize(e.image.length===0?qf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Yf(e,!1,!1),n=Math.log2(e)-Ty;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Yf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===vs||e.mapping===fr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=$f()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Py(),this._integrationMaterial=Iy());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/gp);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Cy)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(mp*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ly());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};zy={[yo]:"LINEAR_TONE_MAPPING",[_o]:"REINHARD_TONE_MAPPING",[vo]:"CINEON_TONE_MAPPING",[_s]:"ACES_FILMIC_TONE_MAPPING",[Mo]:"AGX_TONE_MAPPING",[bo]:"NEUTRAL_TONE_MAPPING",[So]:"CUSTOM_TONE_MAPPING"};xp=new Sn,yp=new Ti(1,1),_p=new oo(1),vp=new Kr,Sp=new qa,Mp=new ro,Jf=[],Kf=[],jf=new Float32Array(16),Qf=new Float32Array(9),ep=new Float32Array(4);eu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=a_(t.type)}},tu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=C_(t.type)}},nu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},jh=/(\w+)(\])?(\[|\.)?/g;gr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);A_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};R_=37297,P_=0;ip=new et;N_={[yo]:"Linear",[_o]:"Reinhard",[vo]:"Cineon",[_s]:"ACESFilmic",[Mo]:"AgX",[bo]:"Neutral",[So]:"Custom"};Ql=new P;z_=/^[ \t]*#include +<([\w\d./]+)>/gm;G_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;W_={[xo]:"SHADOWMAP_TYPE_PCF",[dr]:"SHADOWMAP_TYPE_VSM"};q_={[fr]:"ENVMAP_MODE_REFRACTION"};$_={[Rh]:"ENVMAP_BLENDING_MULTIPLY",[Ef]:"ENVMAP_BLENDING_MIX",[Tf]:"ENVMAP_BLENDING_ADD"};K_=0,su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ru(e),t.set(e,n)),n}},ru=class{constructor(e){this.id=K_++,this.code=e,this.usedTimes=0}};rv=0;cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,uv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],dv=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],dp=new Pt,Io=new P,Qh=new P;xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ou=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ao(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Vt({vertexShader:xv,fragmentShader:yv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ee(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},au=class extends ti{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,y=typeof XRWebGLBinding<"u",g=new ou,p={},_=t.getContextAttributes(),T=null,S=null,w=[],E=[],x=new Fe,b=null,I=null,A=new pn;A.viewport=new Ht;let U=new pn;U.viewport=new Ht;let B=[A,U],k=new cl,R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let be=w[K];return be===void 0&&(be=new sr,w[K]=be),be.getTargetRaySpace()},this.getControllerGrip=function(K){let be=w[K];return be===void 0&&(be=new sr,w[K]=be),be.getGripSpace()},this.getHand=function(K){let be=w[K];return be===void 0&&(be=new sr,w[K]=be),be.getHandSpace()};function q(K){let be=E.indexOf(K.inputSource);if(be===-1)return;let Ie=w[be];Ie!==void 0&&(Ie.update(K.inputSource,K.frame,c||o),Ie.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",se);for(let K=0;K<w.length;K++){let be=E[K];be!==null&&(E[K]=null,w[K].disconnect(be))}R=null,z=null,g.reset();for(let K in p)delete p[K];if(e.setRenderTarget(T),f=null,d=null,u=null,s=null,S=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),I!==null){let K=I.camera;K.fov=I.fov,K.zoom=I.zoom,K.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",se),_.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,He=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=_.stencil?Ri:bi,He=_.stencil?Ss:Xn);let Ye={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ye),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new qt(d.textureWidth,d.textureHeight,{format:qn,type:An,depthTexture:new Ti(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ie={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new qt(f.framebufferWidth,f.framebufferHeight,{format:qn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ue.setContext(s),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function se(K){for(let be=0;be<K.removed.length;be++){let Ie=K.removed[be],He=E.indexOf(Ie);He>=0&&(E[He]=null,w[He].disconnect(Ie))}for(let be=0;be<K.added.length;be++){let Ie=K.added[be],He=E.indexOf(Ie);if(He===-1){for(let Ye=0;Ye<w.length;Ye++)if(Ye>=E.length){E.push(Ie),He=Ye;break}else if(E[Ye]===null){E[Ye]=Ie,He=Ye;break}if(He===-1)break}let ve=w[He];ve&&ve.connect(Ie)}}function X(K,be){be===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(be.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let be=K.near,Ie=K.far;g.texture!==null&&(g.depthNear>0&&(be=g.depthNear),g.depthFar>0&&(Ie=g.depthFar)),k.near=U.near=A.near=be,k.far=U.far=A.far=Ie,(R!==k.near||z!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),R=k.near,z=k.far),k.layers.mask=K.layers.mask|6,A.layers.mask=k.layers.mask&-5,U.layers.mask=k.layers.mask&-3;let He=K.parent,ve=k.cameras;X(k,He);for(let Ye=0;Ye<ve.length;Ye++)X(ve[Ye],He);k.projectionMatrix.copy(A.projectionMatrix),k.projectionMatrixInverse.copy(A.projectionMatrixInverse),I===null&&K.isPerspectiveCamera&&(I={camera:K,fov:K.fov,zoom:K.zoom}),ne(K,k,He)};function ne(K,be,Ie){Ie===null?K.matrix.copy(be.matrixWorld):(K.matrix.copy(Ie.matrixWorld),K.matrix.invert(),K.matrix.multiply(be.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(be.projectionMatrix),K.projectionMatrixInverse.copy(be.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Va*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(K){return p[K]};let re=null;function De(K,be){if(h=be.getViewerPose(c||o),m=be,h!==null){let Ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let He=!1;Ie.length!==k.cameras.length&&(k.cameras.length=0,He=!0);for(let Ve=0;Ve<Ie.length;Ve++){let tt=Ie[Ve],je=null;if(f!==null)je=f.getViewport(tt);else{let Qe=u.getViewSubImage(d,tt);je=Qe.viewport,Ve===0&&(e.setRenderTargetTextures(S,Qe.colorTexture,Qe.depthStencilTexture),e.setRenderTarget(S))}let Be=B[Ve];Be===void 0&&(Be=new pn,Be.layers.enable(Ve),Be.viewport=new Ht,B[Ve]=Be),Be.matrix.fromArray(tt.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(tt.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(je.x,je.y,je.width,je.height),Ve===0&&(k.matrix.copy(Be.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),He===!0&&k.cameras.push(Be)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let Ve=u.getDepthInformation(Ie[0]);Ve&&Ve.isValid&&Ve.texture&&g.init(Ve,s.renderState)}if(ve&&ve.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let Ve=0;Ve<Ie.length;Ve++){let tt=Ie[Ve].camera;if(tt){let je=p[tt];je||(je=new ao,p[tt]=je);let Be=u.getCameraImage(tt);je.sourceTexture=Be}}}}for(let Ie=0;Ie<w.length;Ie++){let He=E[Ie],ve=w[Ie];He!==null&&ve!==void 0&&ve.update(He,be,c||o)}re&&re(K,be),be.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:be}),m=null}let Ue=new fp;Ue.setAnimationLoop(De),this.setAnimationLoop=function(K){re=K},this.dispose=function(){}}},_v=new Pt,bp=new et;bp.set(-1,0,0,0,1,0,0,0,1);Mv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),li=null;ec=class{constructor(e={}){let{canvas:t=Uf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=An}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let y=f,g=new Set([_l,yl,xl]),p=new Set([An,Xn,mr,Ss,pl,ml]),_=new Uint32Array(4),T=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},w=null,E=null,x=[],b=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,U=!1,B=null,k=null,R=null,z=null;this._outputColorSpace=Qt;let q=0,Y=0,se=null,X=-1,ne=null,re=new Ht,De=new Ht,Ue=null,K=new Ne(0),be=0,Ie=t.width,He=t.height,ve=1,Ye=null,Rt=null,Ve=new Ht(0,0,Ie,He),tt=new Ht(0,0,Ie,He),je=!1,Be=new Hi,Qe=new Ya,_t=!1,It=!1,it=new Pt,zt=new P,vt=new Ht,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function jt(){return se===null?ve:1}let L=n;function Xt(M,O){return t.getContext(M,O)}let Ot,Ft,Se,Wt,qe,Je,C,v,G,ae,ie,fe,ye,j,Q,de,D,te,J,ge,ue,pe,ze;try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Me,!1),L===null){let O="webgl2";if(L=Xt(O,M),L===null)throw Xt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}rt()}catch(M){throw t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ke("WebGLRenderer: "+M.message),M}function rt(){Ot=new Ny(L),Ot.init(),ue=new gv(L,Ot),Ft=new by(L,Ot,e,ue),Se=new pv(L,Ot),Ft.reversedDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),k=L.createFramebuffer(),R=L.createFramebuffer(),z=L.createFramebuffer(),Wt=new By(L),qe=new ev,Je=new mv(L,Ot,Se,qe,Ft,ue,Wt),C=new Dy(A),v=new k0(L),pe=new Sy(L,v),G=new Uy(L,v,Wt,pe),ae=new ky(L,G,v,pe,Wt),te=new Fy(L,Ft,Je),Q=new Ey(qe),ie=new Q_(A,C,Ot,Ft,pe,Q),fe=new vv(A,qe),ye=new nv,j=new lv(Ot),D=new vy(A,C,Se,ae,m,l),de=new fv(A,ae,Ft),ze=new Sv(L,Wt,Ft,Se),J=new My(L,Ot,Wt),ge=new Oy(L,Ot,Wt),Wt.programs=ie.programs,A.capabilities=Ft,A.extensions=Ot,A.properties=qe,A.renderLists=ye,A.shadowMap=de,A.state=Se,A.info=Wt}y!==An&&(I=new Hy(y,t.width,t.height,a,s,r));let ce=new au(A,L);this.xr=ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let M=Ot.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Ot.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(M){M!==void 0&&(ve=M,this.setSize(Ie,He,!1))},this.getSize=function(M){return M.set(Ie,He)},this.setSize=function(M,O,$=!0){if(ce.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=M,He=O,t.width=Math.floor(M*ve),t.height=Math.floor(O*ve),$===!0&&(t.style.width=M+"px",t.style.height=O+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(Ie*ve,He*ve).floor()},this.setDrawingBufferSize=function(M,O,$){Ie=M,He=O,ve=$,t.width=Math.floor(M*$),t.height=Math.floor(O*$),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(y===An){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(re)},this.getViewport=function(M){return M.copy(Ve)},this.setViewport=function(M,O,$,H){M.isVector4?Ve.set(M.x,M.y,M.z,M.w):Ve.set(M,O,$,H),Se.viewport(re.copy(Ve).multiplyScalar(jt()).round())},this.getScissor=function(M){return M.copy(tt)},this.setScissor=function(M,O,$,H){M.isVector4?tt.set(M.x,M.y,M.z,M.w):tt.set(M,O,$,H),Se.scissor(De.copy(tt).multiplyScalar(jt()).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(M){Se.setScissorTest(je=M)},this.setOpaqueSort=function(M){Ye=M},this.setTransparentSort=function(M){Rt=M},this.getClearColor=function(M){return M.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,$=!0){let H=0;if(M){let V=!1;if(se!==null){let _e=se.texture.format;V=g.has(_e)}if(V){let _e=se.texture.type,Ae=p.has(_e),me=D.getClearColor(),Te=D.getClearAlpha(),Oe=me.r,xe=me.g,dt=me.b;Ae?(_[0]=Oe,_[1]=xe,_[2]=dt,_[3]=Te,L.clearBufferuiv(L.COLOR,0,_)):(T[0]=Oe,T[1]=xe,T[2]=dt,T[3]=Te,L.clearBufferiv(L.COLOR,0,T))}else H|=L.COLOR_BUFFER_BIT}O&&(H|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),B=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),D.dispose(),ye.dispose(),j.dispose(),Je.dispose(),qe.dispose(),C.dispose(),ae.dispose(),G.dispose(),pe.dispose(),ze.dispose(),ie.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ea),ce.removeEventListener("sessionend",Di),Jn.stop()};function Ge(M){M.preventDefault(),Jr("WebGLRenderer: Context Lost."),U=!0}function st(){Jr("WebGLRenderer: Context Restored."),U=!1;let M=Wt.autoReset,O=de.enabled,$=de.autoUpdate,H=de.needsUpdate,V=de.type;rt(),Wt.autoReset=M,de.enabled=O,de.autoUpdate=$,de.needsUpdate=H,de.type=V}function Me(M){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function wt(M){let O=M.target;O.removeEventListener("dispose",wt),Zt(O)}function Zt(M){Zn(M),qe.remove(M)}function Zn(M){let O=qe.get(M).programs;O!==void 0&&(O.forEach(function($){ie.releaseProgram($)}),M.isShaderMaterial&&ie.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,$,H,V,_e){O===null&&(O=Lt);let Ae=V.isMesh&&V.matrixWorld.determinantAffine()<0,me=Ns(M,O,$,H,V);Se.setMaterial(H,Ae);let Te=$.index,Oe=1;if(H.wireframe===!0){if(Te=G.getWireframeAttribute($),Te===void 0)return;Oe=2}let xe=$.drawRange,dt=$.attributes.position,Pe=xe.start*Oe,ft=(xe.start+xe.count)*Oe;_e!==null&&(Pe=Math.max(Pe,_e.start*Oe),ft=Math.min(ft,(_e.start+_e.count)*Oe)),Te!==null?(Pe=Math.max(Pe,0),ft=Math.min(ft,Te.count)):dt!=null&&(Pe=Math.max(Pe,0),ft=Math.min(ft,dt.count));let N=ft-Pe;if(N<0||N===1/0)return;pe.setup(V,H,me,$,Te);let F,W=J;if(Te!==null&&(F=v.get(Te),W=ge,W.setIndex(F)),V.isMesh)H.wireframe===!0?(Se.setLineWidth(H.wireframeLinewidth*jt()),W.setMode(L.LINES)):W.setMode(L.TRIANGLES);else if(V.isLine){let he=H.linewidth;he===void 0&&(he=1),Se.setLineWidth(he*jt()),V.isLineSegments?W.setMode(L.LINES):V.isLineLoop?W.setMode(L.LINE_LOOP):W.setMode(L.LINE_STRIP)}else V.isPoints?W.setMode(L.POINTS):V.isSprite&&W.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(Ot.get("WEBGL_multi_draw"))W.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let he=V._multiDrawStarts,Z=V._multiDrawCounts,We=V._multiDrawCount,Le=Te?v.get(Te).bytesPerElement:1,mt=qe.get(H).currentProgram.getUniforms();for(let ct=0;ct<We;ct++)mt.setValue(L,"_gl_DrawID",ct),W.render(he[ct]/Le,Z[ct])}else if(V.isInstancedMesh)W.renderInstances(Pe,N,V.count);else if($.isInstancedBufferGeometry){let he=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Z=Math.min($.instanceCount,he);W.renderInstances(Pe,N,Z)}else W.render(Pe,N)};function ss(M,O,$,H){B!==null&&M.isNodeMaterial&&B.setObject(H,M),_t===!0&&Q.setState(M,$,!1),M.transparent===!0&&M.side===Bt&&M.forceSinglePass===!1?(M.side=ln,M.needsUpdate=!0,pi(M,O,H),M.side=Zi,M.needsUpdate=!0,pi(M,O,H),M.side=Bt):pi(M,O,H)}this.compile=function(M,O,$=null){$===null&&($=M),B!==null&&B.renderStart(M,O,$),E=j.get($),E.init(O),b.push(E),$.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),M!==$&&M.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights(),B!==null&&B.updateLights(E.state.lightsArray),It=this.localClippingEnabled,_t=Q.init(this.clippingPlanes,It),_t===!0&&Q.setGlobalState(this.clippingPlanes,O),B!==null&&de.render(E.state.shadowsArray,$,O);let H=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let _e=V.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){let me=_e[Ae];ss(me,$,O,V),H.add(me)}else ss(_e,$,O,V),H.add(_e)}),E=b.pop(),B!==null&&B.renderEnd(),H},this.compileAsync=function(M,O,$=null){let H=this.compile(M,O,$);return new Promise(V=>{function _e(){if(H.forEach(function(Ae){let Te=qe.get(Ae).currentProgram;(Te===void 0||Te.isReady())&&H.delete(Ae)}),H.size===0){V(M);return}setTimeout(_e,10)}Ot.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let fi=null;function rs(M){fi&&fi(M)}function ea(){Jn.stop()}function Di(){Jn.start()}let Jn=new fp;Jn.setAnimationLoop(rs),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(M){fi=M,ce.setAnimationLoop(M),M===null?Jn.stop():Jn.start()},ce.addEventListener("sessionstart",ea),ce.addEventListener("sessionend",Di),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;B!==null&&B.renderStart(M,O);let $=ce.enabled===!0&&ce.isPresenting===!0,H=I!==null&&(se===null||$)&&I.begin(A,se);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(O),O=ce.getCamera()),M.isScene===!0&&M.onBeforeRender(A,M,O,se),E=j.get(M,b.length),E.init(O),E.state.textureUnits=Je.getTextureUnits(),b.push(E),it.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?Qe.setFromArrayCamera(O):Be.setFromProjectionMatrix(it,Bn,O.reversedDepth),It=this.localClippingEnabled,_t=Q.init(this.clippingPlanes,It),w=ye.get(M,x.length),w.init(),x.push(w),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){let Ae=A.xr.getDepthSensingMesh();Ae!==null&&Ir(Ae,O,-1/0,A.sortObjects)}Ir(M,O,0,A.sortObjects),w.finish(),B!==null&&B.updateLights(E.state.lightsArray),A.sortObjects===!0&&w.sort(Ye,Rt),$t=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,$t&&D.addToRenderList(w,M),this.info.autoReset===!0&&this.info.reset(),_t===!0&&Q.beginShadows();let V=E.state.shadowsArray;if(de.render(V,M,O),_t===!0&&Q.endShadows(),(H&&I.hasRenderPass())===!1){let Ae=w.opaque,me=w.transmissive;if(E.setupLights(),O.isArrayCamera){let Te=O.cameras;if(me.length>0)for(let Oe=0,xe=Te.length;Oe<xe;Oe++){let dt=Te[Oe];ta(Ae,me,M,dt)}$t&&D.render(M);for(let Oe=0,xe=Te.length;Oe<xe;Oe++){let dt=Te[Oe];Lr(w,M,dt,dt.viewport)}}else me.length>0&&ta(Ae,me,M,O),$t&&D.render(M),Lr(w,M,O)}se!==null&&Y===0&&(Je.updateMultisampleRenderTarget(se),Je.updateRenderTargetMipmap(se)),H&&I.end(A),M.isScene===!0&&M.onAfterRender(A,M,O),pe.resetDefaultState(),X=-1,ne=null,b.pop(),b.length>0?(E=b[b.length-1],Je.setTextureUnits(E.state.textureUnits),_t===!0&&Q.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,B!==null&&B.renderEnd()};function Ir(M,O,$,H){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){let Ae=O.isArrayCamera?Qe:Be;if(!M.frustumCulled||M.intersectsFrustum(Ae)){H&&vt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(it);let me=ae.update(M),Te=M.material;Te.visible&&w.push(M,me,Te,$,vt.z,null,O)}}else if(M.isMesh||M.isLine||M.isPoints){let Ae=O.isArrayCamera?Qe:Be;if(!M.frustumCulled||M.intersectsFrustum(Ae)){let me=ae.update(M),Te=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),vt.copy(M.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),vt.copy(me.boundingSphere.center)),vt.applyMatrix4(M.matrixWorld).applyMatrix4(it)),Array.isArray(Te)){let Oe=me.groups;for(let xe=0,dt=Oe.length;xe<dt;xe++){let Pe=Oe[xe],ft=Te[Pe.materialIndex];ft&&ft.visible&&w.push(M,me,ft,$,vt.z,Pe,O)}}else Te.visible&&w.push(M,me,Te,$,vt.z,null,O)}}}let _e=M.children;for(let Ae=0,me=_e.length;Ae<me;Ae++)Ir(_e[Ae],O,$,H)}function Lr(M,O,$,H){let{opaque:V,transmissive:_e,transparent:Ae}=M;E.setupLightsView($),_t===!0&&Q.setGlobalState(A.clippingPlanes,$),H&&Se.viewport(re.copy(H)),V.length>0&&Ni(V,O,$),_e.length>0&&Ni(_e,O,$),Ae.length>0&&Ni(Ae,O,$),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ta(M,O,$,H){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){let Pe=Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new qt(1,1,{generateMipmaps:!0,type:Pe?tn:An,minFilter:Ai,samples:Math.max(4,Ft.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}let _e=E.state.transmissionRenderTarget[H.id],Ae=H.viewport||re;_e.setSize(Ae.z*A.transmissionResolutionScale,Ae.w*A.transmissionResolutionScale);let me=A.getRenderTarget(),Te=A.getActiveCubeFace(),Oe=A.getActiveMipmapLevel();A.setRenderTarget(_e),A.getClearColor(K),be=A.getClearAlpha(),be<1&&A.setClearColor(16777215,.5),A.clear(),$t&&D.render($);let xe=A.toneMapping;A.toneMapping=ai;let dt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),_t===!0&&Q.setGlobalState(A.clippingPlanes,H),Ni(M,$,H),Je.updateMultisampleRenderTarget(_e),Je.updateRenderTargetMipmap(_e),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ft=0,N=O.length;ft<N;ft++){let F=O[ft],{object:W,geometry:he,material:Z,group:We}=F;if(Z.side===Bt&&W.layers.test(H.layers)){let Le=Z.side;Z.side=ln,Z.needsUpdate=!0,Kn(W,$,H,he,Z,We),Z.side=Le,Z.needsUpdate=!0,Pe=!0}}Pe===!0&&(Je.updateMultisampleRenderTarget(_e),Je.updateRenderTargetMipmap(_e))}A.setRenderTarget(me,Te,Oe),A.setClearColor(K,be),dt!==void 0&&(H.viewport=dt),A.toneMapping=xe}function Ni(M,O,$){let H=O.isScene===!0?O.overrideMaterial:null;for(let V=0,_e=M.length;V<_e;V++){let Ae=M[V],{object:me,geometry:Te,group:Oe}=Ae,xe=Ae.material;xe.allowOverride===!0&&H!==null&&(xe=H),me.layers.test($.layers)&&Kn(me,O,$,Te,xe,Oe)}}function Kn(M,O,$,H,V,_e){B!==null&&V.isNodeMaterial&&B.setObject(M,V),M.onBeforeRender(A,O,$,H,V,_e),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(A,O,$,H,M,_e),V.transparent===!0&&V.side===Bt&&V.forceSinglePass===!1?(V.side=ln,V.needsUpdate=!0,A.renderBufferDirect($,O,H,V,M,_e),V.side=Zi,V.needsUpdate=!0,A.renderBufferDirect($,O,H,V,M,_e),V.side=Bt):A.renderBufferDirect($,O,H,V,M,_e),M.onAfterRender(A,O,$,H,V,_e)}function Ls(M){let O=0;for(let $ of M)$.texture!==null&&O++;return O}function pi(M,O,$){O.isScene!==!0&&(O=Lt);let H=qe.get(M),V=E.state.lights,_e=E.state.shadowsArray,Ae=V.state.version,me=ie.getParameters(M,V.state,_e,O,$,E.state.lightProbeGridArray),Te=ie.getProgramCacheKey(me),Oe=H.programs;H.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;let xe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;H.envMap=C.get(M.envMap||H.environment,xe),H.envMapRotation=H.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Oe===void 0&&(M.addEventListener("dispose",wt),Oe=new Map,H.programs=Oe,H.programVariants=new Map);let dt=Oe.get(Te);if(dt!==void 0){if(H.currentProgram===dt&&H.lightsStateVersion===Ae)return Ds(M,me),dt}else me.uniforms=ie.getUniforms(M),B!==null&&M.isNodeMaterial&&B.build(M,$,me),M.onBeforeCompile(me,A),dt=ie.acquireProgram(me,Te),Oe.set(Te,dt),H.uniforms=me.uniforms;let Pe=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pe.clippingPlanes=Q.uniform),Ds(M,me),H.needsLights=Dr(M),H.lightsStateVersion=Ae,H.needsLights&&(Pe.ambientLightColor.value=V.state.ambient,Pe.lightProbe.value=V.state.probe,Pe.sunLights.value=V.state.sun,Pe.sunLightShadows.value=V.state.sunShadow,Pe.directionalLights.value=V.state.directional,Pe.directionalLightShadows.value=V.state.directionalShadow,Pe.spotLights.value=V.state.spot,Pe.spotLightShadows.value=V.state.spotShadow,Pe.rectAreaLights.value=V.state.rectArea,Pe.ltc_1.value=V.state.rectAreaLTC1,Pe.ltc_2.value=V.state.rectAreaLTC2,Pe.pointLights.value=V.state.point,Pe.pointLightShadows.value=V.state.pointShadow,Pe.hemisphereLights.value=V.state.hemi,Pe.sunShadowMatrix.value=V.state.sunShadowMatrix,Pe.sunShadowCascade.value=V.state.sunShadowCascade,Pe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pe.spotLightMatrix.value=V.state.spotLightMatrix,Pe.spotLightMap.value=V.state.spotLightMap,Pe.pointShadowMatrix.value=V.state.pointShadowMatrix),H.numLightProbeGrids=Ls(E.state.lightProbeGridArray),H.currentProgram=dt,H.uniformsList=null,dt}function os(M,O,$,H,V){let _e=qe.get(M),Ae=_e.currentProgram.id+","+H+","+V,me=_e.programVariants.get(Ae);return me===void 0?(me=pi(M,O,$),_e.programVariants.set(Ae,me)):(_e.currentProgram=me,_e.uniformsList=null,_e.outputColorSpace=H,_e.toneMapping=V),me}function mi(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=gr.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Ds(M,O){let $=qe.get(M);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function Ns(M,O,$,H,V){O.isScene!==!0&&(O=Lt),Je.resetTextureUnits();let _e=O.fog,Ae=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,me=se===null?A.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:pt.workingColorSpace,Te=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Oe=C.get(H.envMap||Ae,Te),xe=H.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,dt=!!$.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pe=!!$.morphAttributes.position,ft=!!$.morphAttributes.normal,N=!!$.morphAttributes.color,F=ai;H.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(F=A.toneMapping);let W=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,he=W!==void 0?W.length:0,Z=qe.get(H),We=E.state.lights;if(_t===!0&&(It===!0||M!==ne)){let St=M===ne&&H.id===X;Q.setState(H,M,St)}let Le=!1,mt=!1;H.version===Z.__version?Z.needsLights&&Z.lightsStateVersion!==We.state.version||V.isBatchedMesh&&Z.batching===!1||!V.isBatchedMesh&&Z.batching===!0||V.isBatchedMesh&&Z.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Z.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Z.instancing===!1||!V.isInstancedMesh&&Z.instancing===!0||V.isSkinnedMesh&&Z.skinning===!1||!V.isSkinnedMesh&&Z.skinning===!0||V.isInstancedMesh&&Z.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Z.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Z.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Z.instancingMorph===!1&&V.morphTexture!==null||Z.envMap!==Oe||H.fog===!0&&Z.fog!==_e||Z.numClippingPlanes!==void 0&&(Z.numClippingPlanes!==Q.numPlanes||Z.numIntersection!==Q.numIntersection)||Z.vertexAlphas!==xe||Z.vertexTangents!==dt||Z.morphTargets!==Pe||Z.morphNormals!==ft||Z.morphColors!==N||Z.morphTargetsCount!==he||Z.numLightProbeGrids!==Ls(E.state.lightProbeGridArray)?Le=!0:(Z.outputColorSpace!==me||Z.toneMapping!==F)&&(mt=!0):(Le=!0,Z.__version=H.version);let ct=Z.currentProgram;(Le===!0||mt===!0)&&(ct=mt===!0?os(H,O,V,me,F):pi(H,O,V),B&&H.isNodeMaterial&&B.onUpdateProgram(H,ct,Z));let bt=!1,oe=!1,Re=!1,Ce=ct.getUniforms(),nt=Z.uniforms;if(Se.useProgram(ct.program)&&(bt=!0,oe=!0,Re=!0),H.id!==X&&(X=H.id,oe=!0),bt||ne!==M){Se.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ce.setValue(L,"projectionMatrix",M.projectionMatrix),Ce.setValue(L,"viewMatrix",M.matrixWorldInverse);let ut=Ce.map.cameraPosition;ut!==void 0&&ut.setValue(L,zt.setFromMatrixPosition(M.matrixWorld)),Ft.logarithmicDepthBuffer&&Ce.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ce.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),ne!==M&&(ne=M,oe=!0,Re=!0)}if(Z.needsLights&&(We.state.sunShadowMap.length>0&&Ce.setValue(L,"sunShadowMap",We.state.sunShadowMap,Je),We.state.directionalShadowMap.length>0&&Ce.setValue(L,"directionalShadowMap",We.state.directionalShadowMap,Je),We.state.spotShadowMap.length>0&&Ce.setValue(L,"spotShadowMap",We.state.spotShadowMap,Je),We.state.pointShadowMap.length>0&&Ce.setValue(L,"pointShadowMap",We.state.pointShadowMap,Je)),V.isSkinnedMesh){Ce.setOptional(L,V,"bindMatrix"),Ce.setOptional(L,V,"bindMatrixInverse");let St=V.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),Ce.setValue(L,"boneTexture",St.boneTexture,Je))}V.isBatchedMesh&&(Ce.setOptional(L,V,"batchingTexture"),Ce.setValue(L,"batchingTexture",V._matricesTexture,Je),Ce.setOptional(L,V,"batchingIdTexture"),Ce.setValue(L,"batchingIdTexture",V._indirectTexture,Je),Ce.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&Ce.setValue(L,"batchingColorTexture",V._colorsTexture,Je));let Nt=$.morphAttributes;if((Nt.position!==void 0||Nt.normal!==void 0||Nt.color!==void 0)&&te.update(V,$,ct),(oe||Z.receiveShadow!==V.receiveShadow)&&(Z.receiveShadow=V.receiveShadow,Ce.setValue(L,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(nt.envMapIntensity.value=O.environmentIntensity),nt.dfgLUT!==void 0&&(nt.dfgLUT.value=bv()),oe){if(Ce.setValue(L,"toneMappingExposure",A.toneMappingExposure),Z.needsLights&&na(nt,Re),_e&&H.fog===!0&&fe.refreshFogUniforms(nt,_e),fe.refreshMaterialUniforms(nt,H,ve,He,E.state.transmissionRenderTarget[M.id]),Z.needsLights&&Z.numLightProbeGrids>0){let St=S,ut=0;for(let Et of E.state.lightProbeGridArray)Et.texture!==null&&(St.textures[ut]=Et.texture,St.min[ut]=Et.boundingBox.min,St.max[ut]=Et.boundingBox.max,St.resolution[ut]=Et.resolution,ut++);for(let Et in St)St[Et].length=ut;nt.probesSH.value=St.textures,nt.probesMin.value=St.min,nt.probesMax.value=St.max,nt.probesResolution.value=St.resolution}gr.upload(L,mi(Z),nt,Je)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(gr.upload(L,mi(Z),nt,Je),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ce.setValue(L,"center",V.center),Ce.setValue(L,"modelViewMatrix",V.modelViewMatrix),Ce.setValue(L,"normalMatrix",V.normalMatrix),Ce.setValue(L,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let St=H.uniformsGroups;for(let ut=0,Et=St.length;ut<Et;ut++){let Nr=St[ut];ze.update(Nr,ct),ze.bind(Nr,ct)}}return ct}function na(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.sunLights.needsUpdate=O,M.sunLightShadows.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function Dr(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(M,O,$){let H=qe.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),qe.get(M.texture).__webglTexture=O,qe.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:$,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){let $=qe.get(M);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,$=0){se=M,q=O,Y=$;let H=null,V=!1,_e=!1;if(M){let me=qe.get(M);if(me.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(L.FRAMEBUFFER,me.__webglFramebuffer),re.copy(M.viewport),De.copy(M.scissor),Ue=M.scissorTest,Se.viewport(re),Se.scissor(De),Se.setScissorTest(Ue),X=-1;return}else if(me.__webglFramebuffer===void 0)Je.setupRenderTarget(M);else if(me.__hasExternalTextures)Je.rebindTextures(M,qe.get(M.texture).__webglTexture,qe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let xe=M.depthTexture;if(me.__boundDepthTexture!==xe){if(xe!==null&&qe.has(xe)&&(M.width!==xe.image.width||M.height!==xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(M)}}let Te=M.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(_e=!0);let Oe=qe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?H=Oe[O][$]:H=Oe[O],V=!0):M.samples>0&&Je.useMultisampledRTT(M)===!1?H=qe.get(M).__webglMultisampledFramebuffer:Array.isArray(Oe)?H=Oe[$]:H=Oe,re.copy(M.viewport),De.copy(M.scissor),Ue=M.scissorTest}else re.copy(Ve).multiplyScalar(ve).floor(),De.copy(tt).multiplyScalar(ve).floor(),Ue=je;if($!==0&&(H=k),Se.bindFramebuffer(L.FRAMEBUFFER,H)&&Se.drawBuffers(M,H),Se.viewport(re),Se.scissor(De),Se.setScissorTest(Ue),V){let me=qe.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,me.__webglTexture,$)}else if(_e){let me=O;for(let Te=0;Te<M.textures.length;Te++){let Oe=qe.get(M.textures[Te]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Te,Oe.__webglTexture,$,me)}}else if(M!==null&&$!==0){let me=qe.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,me.__webglTexture,$)}X=-1};function Ui(M){let O=qe.get(M);return(O.__readFormat!==M.format||O.__readType!==M.type)&&(O.__readFormat=M.format,O.__readType=M.type,O.__formatReadable=Ft.textureFormatReadable(M.format),O.__typeReadable=Ft.textureTypeReadable(M.type)),O}this.readRenderTargetPixels=function(M,O,$,H,V,_e,Ae,me=0){if(!(M&&M.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=qe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(Te=Te[Ae],Array.isArray(Te)&&(Te=Te[0])),Te){Se.bindFramebuffer(L.FRAMEBUFFER,Te);try{let Oe=M.textures[me],xe=Oe.format,dt=Oe.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+me);let Pe=Ui(Oe);if(Pe.__formatReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-H&&$>=0&&$<=M.height-V&&L.readPixels(O,$,H,V,ue.convert(xe),ue.convert(dt),_e)}finally{let Oe=se!==null?qe.get(se).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(M,O,$,H,V,_e,Ae,me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=qe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(Te=Te[Ae],Array.isArray(Te)&&(Te=Te[0])),Te)if(O>=0&&O<=M.width-H&&$>=0&&$<=M.height-V){Se.bindFramebuffer(L.FRAMEBUFFER,Te);let Oe=M.textures[me],xe=Oe.format,dt=Oe.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+me);let Pe=Ui(Oe);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ft),L.bufferData(L.PIXEL_PACK_BUFFER,_e.byteLength,L.STREAM_READ),L.readPixels(O,$,H,V,ue.convert(xe),ue.convert(dt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let N=se!==null?qe.get(se).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,N);let F=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Bf(L,F,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ft),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,_e),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ft),L.deleteSync(F),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,$=0){let H=Math.pow(2,-$),V=Math.floor(M.image.width*H),_e=Math.floor(M.image.height*H),Ae=O!==null?O.x:0,me=O!==null?O.y:0;Je.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,$,0,0,Ae,me,V,_e),Se.unbindTexture()},this.copyTextureToTexture=function(M,O,$=null,H=null,V=0,_e=0){let Ae,me,Te,Oe,xe,dt,Pe,ft,N,F=M.isCompressedTexture?M.mipmaps[_e]:M.image;if($!==null)Ae=$.max.x-$.min.x,me=$.max.y-$.min.y,Te=$.isBox3?$.max.z-$.min.z:1,Oe=$.min.x,xe=$.min.y,dt=$.isBox3?$.min.z:0;else{let Ce=Math.pow(2,-V);Ae=Math.floor(F.width*Ce),me=Math.floor(F.height*Ce),M.isDataArrayTexture?Te=F.depth:M.isData3DTexture?Te=Math.floor(F.depth*Ce):Te=1,Oe=0,xe=0,dt=0}H!==null?(Pe=H.x,ft=H.y,N=H.z):(Pe=0,ft=0,N=0);let W=ue.convert(O.format),he=ue.convert(O.type),Z;O.isData3DTexture?(Je.setTexture3D(O,0),Z=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Je.setTexture2DArray(O,0),Z=L.TEXTURE_2D_ARRAY):(Je.setTexture2D(O,0),Z=L.TEXTURE_2D),Se.activeTexture(L.TEXTURE0),Se.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),Se.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),Se.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);let We=Se.getParameter(L.UNPACK_ROW_LENGTH),Le=Se.getParameter(L.UNPACK_IMAGE_HEIGHT),mt=Se.getParameter(L.UNPACK_SKIP_PIXELS),ct=Se.getParameter(L.UNPACK_SKIP_ROWS),bt=Se.getParameter(L.UNPACK_SKIP_IMAGES);Se.pixelStorei(L.UNPACK_ROW_LENGTH,F.width),Se.pixelStorei(L.UNPACK_IMAGE_HEIGHT,F.height),Se.pixelStorei(L.UNPACK_SKIP_PIXELS,Oe),Se.pixelStorei(L.UNPACK_SKIP_ROWS,xe),Se.pixelStorei(L.UNPACK_SKIP_IMAGES,dt);let oe=M.isDataArrayTexture||M.isData3DTexture,Re=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){let Ce=qe.get(M),nt=qe.get(O),Nt=qe.get(Ce.__renderTarget),St=qe.get(nt.__renderTarget);Se.bindFramebuffer(L.READ_FRAMEBUFFER,Nt.__webglFramebuffer),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ut=0;ut<Te;ut++)oe&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,qe.get(M).__webglTexture,V,dt+ut),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,qe.get(O).__webglTexture,_e,N+ut)),L.blitFramebuffer(Oe,xe,Oe+Ae,xe+me,Pe,ft,Pe+Ae,ft+me,L.DEPTH_BUFFER_BIT,L.NEAREST);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||qe.has(M)){let Ce=qe.get(M),nt=qe.get(O);Se.bindFramebuffer(L.READ_FRAMEBUFFER,R),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,z);for(let Nt=0;Nt<Te;Nt++)oe?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.__webglTexture,V,dt+Nt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ce.__webglTexture,V),Re?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,nt.__webglTexture,_e,N+Nt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,nt.__webglTexture,_e),V!==0?L.blitFramebuffer(Oe,xe,Oe+Ae,xe+me,Pe,ft,Pe+Ae,ft+me,L.COLOR_BUFFER_BIT,L.NEAREST):Re?L.copyTexSubImage3D(Z,_e,Pe,ft,N+Nt,Oe,xe,Ae,me):L.copyTexSubImage2D(Z,_e,Pe,ft,Oe,xe,Ae,me);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Re?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(Z,_e,Pe,ft,N,Ae,me,Te,W,he,F.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Z,_e,Pe,ft,N,Ae,me,Te,W,F.data):L.texSubImage3D(Z,_e,Pe,ft,N,Ae,me,Te,W,he,F):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,_e,Pe,ft,Ae,me,W,he,F.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,_e,Pe,ft,F.width,F.height,W,F.data):L.texSubImage2D(L.TEXTURE_2D,_e,Pe,ft,Ae,me,W,he,F);Se.pixelStorei(L.UNPACK_ROW_LENGTH,We),Se.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Le),Se.pixelStorei(L.UNPACK_SKIP_PIXELS,mt),Se.pixelStorei(L.UNPACK_SKIP_ROWS,ct),Se.pixelStorei(L.UNPACK_SKIP_IMAGES,bt),_e===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&L.generateMipmap(Z),Se.unbindTexture()},this.initRenderTarget=function(M){qe.get(M).__webglFramebuffer===void 0&&Je.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Je.setTextureCube(M,0):M.isData3DTexture?Je.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Je.setTexture2DArray(M,0):Je.setTexture2D(M,0),Se.unbindTexture()},this.resetState=function(){q=0,Y=0,se=null,Se.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}});var _r,lu=xt(()=>{_r={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}});var Nn,Ev,cu,Tv,ji,vr=xt(()=>{cn();Nn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ev=new xs(-1,1,1,-1,0,1),cu=class extends At{constructor(){super(),this.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ot([0,2,0,0,2,0],2))}},Tv=new cu,ji=class{constructor(e){this._mesh=new ee(Tv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ev)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var ic,Ep=xt(()=>{cn();vr();ic=class extends Nn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pi.clone(e.uniforms),this.material=new Vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ji(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});var Uo,sc,Tp=xt(()=>{vr();Uo=class extends Nn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},sc=class extends Nn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var rc,wp=xt(()=>{cn();lu();Ep();Tp();rc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Fe);this._width=n.width,this._height=n.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:tn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ic(_r),this.copyPass.material.blending=Ci,this.timer=new go}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Uo!==void 0&&(o instanceof Uo?n=!0:o instanceof sc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var oc,Cp=xt(()=>{cn();vr();oc=class extends Nn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ne}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}});var Ap,Rp=xt(()=>{cn();Ap={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`}});var Sr,Pp=xt(()=>{cn();vr();lu();Rp();Sr=class i extends Nn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Fe(e.x,e.y):new Fe(256,256),this.clearColor=new Ne(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(r,o,{type:tn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new qt(r,o,{type:tn,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new qt(r,o,{type:tn,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Ap;this.highPassUniforms=Pi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Vt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Fe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Pi.clone(_r.uniforms),this.blendMaterial=new Vt({uniforms:this.copyUniforms,vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader,premultipliedAlpha:!0,blending:lt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ne,this._oldClearAlpha=1,this._basic=new at,this._fsQuad=new ji(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Fe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Vt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Fe(.5,.5)},direction:{value:new Fe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Sr.BlurDirectionX=new Fe(1,0);Sr.BlurDirectionY=new Fe(0,1)});var Oo,Ip=xt(()=>{Oo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`}});var ac,Lp=xt(()=>{cn();vr();Ip();ac=class extends Nn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Pi.clone(Oo.uniforms),this.material=new cr({name:Oo.name,uniforms:this.uniforms,vertexShader:Oo.vertexShader,fragmentShader:Oo.fragmentShader}),this._fsQuad=new ji(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===Ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===yo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_o?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_s?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===bo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===So&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});function Cv(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function ui(i){let e=Cv(i),t=()=>e();return t.next=e,t.range=(n,s)=>n+(s-n)*e(),t.int=(n,s)=>Math.floor(n+(s-n+1)*e()),t.pick=n=>n[Math.floor(e()*n.length)],t.chance=n=>e()<n,t}function Op(i=5){let e="",t=new Uint8Array(i);crypto.getRandomValues(t);for(let n of t)e+=Np[n%Np.length];return e}function hu(i){return Math.round(i).toLocaleString("en-US")}function uu(i){let e=Math.max(0,Math.ceil(i));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function Mr(i,e=!1){let t=new Vi(i);return t.colorSpace=Qt,t.anisotropy=4,e&&(t.wrapS=ei,t.wrapT=ei),t.needsUpdate=!0,t}function $n(i,e=i){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function cc(i,e,t,n){let s=i.clone().project(e);return{x:(s.x*.5+.5)*t,y:(-s.y*.5+.5)*n,visible:s.z>-1&&s.z<1}}function br(i,e,t){let n=Xe(i.x,t.minX,t.maxX),s=Xe(i.z,t.minZ,t.maxZ),r=i.x-n,o=i.z-s,a=r*r+o*o;if(a>=e*e)return!1;if(a>1e-6){let l=Math.sqrt(a),c=e-l;i.x+=r/l*c,i.z+=o/l*c}else{let l=i.x-t.minX,c=t.maxX-i.x,h=i.z-t.minZ,u=t.maxZ-i.z,d=Math.min(l,c,h,u);d===l?i.x=t.minX-e:d===c?i.x=t.maxX+e:d===h?i.z=t.minZ-e:i.z=t.maxZ+e}return!0}function hc(i,e,t,n=0){let s=0,r=1,o={x:e.x-i.x,z:e.z-i.z},a={x:t.minX-n,z:t.minZ-n},l={x:t.maxX+n,z:t.maxZ+n};for(let c of["x","z"]){let h=a[c],u=l[c];if(Math.abs(o[c])<1e-8){if(i[c]<h||i[c]>u)return null}else{let d=(h-i[c])/o[c],f=(u-i[c])/o[c];if(d>f&&([d,f]=[f,d]),s=Math.max(s,d),r=Math.min(r,f),s>r)return null}}return s}var Dp,Mt,Xe,lc,hi,wv,Up,Mn,Np,Ii=xt(()=>{cn();Dp=Math.PI,Mt=Math.PI*2,Xe=(i,e,t)=>Math.max(e,Math.min(t,i)),lc=(i,e,t)=>i+(e-i)*t,hi=(i,e,t,n)=>lc(i,e,1-Math.exp(-t*n)),wv=(i,e)=>{let t=(e-i)%Mt;return t>Dp&&(t-=Mt),t<-Dp&&(t+=Mt),t},Up=(i,e,t,n)=>i+wv(i,e)*(1-Math.exp(-t*n)),Mn=(i,e,t,n)=>Math.hypot(i-t,e-n);Np="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"});function kp(i,e,t,n,s,r=7,o=!1){i.save(),i.translate(e,t),i.rotate(Math.atan2(Math.cos(n),Math.sin(n))),i.beginPath(),i.moveTo(r,0),i.lineTo(-r*.7,r*.6),i.lineTo(-r*.35,0),i.lineTo(-r*.7,-r*.6),i.closePath(),o&&(i.shadowColor=s,i.shadowBlur=12),i.fillStyle=s,i.fill(),i.restore()}var Ee,Bp,yt,Fp,uc,zp=xt(()=>{Ii();Ee=i=>document.getElementById(i),Bp=new Map,yt=(i,e)=>{i&&Bp.get(i)!==e&&(Bp.set(i,e),i.textContent=e)},Fp=i=>Number.isFinite(i)?i<1e3?`${Math.max(0,Math.round(i))} M`:`${(i/1e3).toFixed(2)} KM`:"\u2014 M",uc=class{constructor(){this.loading=Ee("loading"),this.loadingBar=Ee("loadingBar"),this.loadingStatus=Ee("loadingStatus"),this.landing=Ee("landing"),this.hud=Ee("hud"),this.pauseOverlay=Ee("pauseOverlay"),this.deathOverlay=Ee("deathOverlay"),this.resultOverlay=Ee("resultOverlay"),this.controlsModal=Ee("controlsModal"),this.disconnectOverlay=Ee("disconnectOverlay"),this.feedEl=Ee("feed"),this.toastStack=Ee("toastStack"),this.worldLabels=Ee("worldLabels"),this.markers=new Map,this.minimapCache=null,this.minimapTime=0,this.minimapCanvas=Ee("minimap"),this.minimapCtx=this.minimapCanvas.getContext("2d"),this.speedoCanvas=Ee("speedoCanvas"),this.speedoCtx=this.speedoCanvas.getContext("2d"),this.lastSpeed=-1,this.lastBoost=-1,this.missionBannerTimer=null,this.damageTimer=null,this.feedItems=[],this.isChatOpen=!1}setLoading(e,t){this.loadingBar&&(this.loadingBar.style.width=`${Xe(e,0,1)*100}%`),t&&this.loadingStatus&&(this.loadingStatus.textContent=t)}finishLoading(){this.loading?.classList.add("is-done"),setTimeout(()=>this.loading?.classList.add("hidden"),800)}showLanding(){this.landing?.classList.remove("hidden"),this.hud?.classList.add("hidden")}enterGame(){this.landing?.classList.add("hidden"),this.hud?.classList.remove("hidden"),this.pauseOverlay?.classList.add("hidden"),this.controlsModal?.classList.add("hidden"),this.disconnectOverlay?.classList.add("hidden")}setServerStatus(e,t){let n=Ee("serverBadge");if(!n)return;n.dataset.state=e,yt(Ee("serverBadgeText"),t);let s=Ee("connectionText");e==="online"?s.textContent="Dedicated relay online \u2014 host a city, then share the code.":e==="p2p"?s.textContent="Peer-to-peer mode \u2014 host a city, share the code, and keep this tab open.":e==="offline"&&(s.textContent="Static build detected \u2014 online play uses encrypted WebRTC peer links.")}showStartError(e){let t=Ee("startError");t&&(t.textContent=e||"")}setBusy(e,t="LINKING TO THE DISTRICT"){let n=["hostBtn","joinBtn","soloBtn"];for(let r of n){let o=Ee(r);o&&(o.disabled=e)}let s=Ee("hostBtn");if(s){let r=s.querySelector("strong");r&&(r.textContent=e?t:"HOST THE CITY")}e&&this.showStartError("")}setName(e){let t=Ee("nameInput");t&&(t.value=e),yt(Ee("vitalsName"),e),yt(Ee("vitalsAvatar"),e.slice(0,1).toUpperCase())}setRoomCode(e,t){yt(Ee("roomCode"),e||"SOLO"),yt(Ee("networkLatency"),t?"LINKING":"P2P")}setLatency(e,t){let n=e==null?"P2P":`${Math.round(e)} MS`;yt(Ee("networkLatency"),t?`${n} \xB7 ${t} FPS`:n)}updateRemoteLabels(e,t,n,s){let r=new Set;for(let o of s){if(!o.visible||!o.position)continue;let a=`remote-${o.id}`;r.add(a);let l=this.markers.get(a);if(!l){let d=document.createElement("div");d.className="remote-label";let f=document.createElement("div");f.className="remote-label__name",f.textContent=(o.name||"ALLY").toUpperCase(),f.style.color=o.cssColor||"#ff8ac1",f.style.borderBottomColor=o.cssColor||"#ff2d95";let m=document.createElement("div");m.className="remote-label__diamond",m.style.background=o.cssColor||"#ff2d95",m.style.boxShadow=`0 0 8px ${o.cssColor||"#ff2d95"}`,d.append(f,m),this.worldLabels.append(d),l={el:d},this.markers.set(a,l)}let c=o.position.clone();c.y+=o.inCar?2.4:2.1;let h=cc(c,e,t,n),u=h.visible&&h.x>0&&h.x<t&&h.y>0&&h.y<n;l.el.style.display=u?"":"none",u&&(l.el.style.left=`${h.x}px`,l.el.style.top=`${h.y}px`)}for(let[o,a]of this.markers)o.startsWith("remote-")&&!r.has(o)&&(a.el.remove(),this.markers.delete(o))}updatePingLabels(e,t,n,s){let r=new Set;for(let o of s){let a=`ping-${o.id}`;r.add(a);let l=this.markers.get(a);if(!l){let u=document.createElement("div");u.className="ping-label";let d=document.createElement("div");d.className="ping-label__ring";let f=document.createElement("span");f.textContent=`${(o.name||"ALLY").toUpperCase()} // HERE`,u.append(d,f),this.worldLabels.append(u),l={el:u},this.markers.set(a,l)}let c=cc(o.position,e,t,n),h=c.visible&&c.x>0&&c.x<t&&c.y>0&&c.y<n;l.el.style.display=h?"":"none",h&&(l.el.style.left=`${c.x}px`,l.el.style.top=`${c.y}px`)}for(let[o,a]of this.markers)o.startsWith("ping-")&&!r.has(o)&&(a.el.remove(),this.markers.delete(o))}updateRoster(e,t,n){let s=Ee("playerList");if(!s)return;s.replaceChildren();let r=[{...e,self:!0},...t];for(let o of r){let a=document.createElement("div");a.className=`player-chip${o.self?" is-self":""}`;let l=document.createElement("i");l.style.background=`#${(o.color??5108991).toString(16).padStart(6,"0")}`,l.style.color=l.style.background;let c=document.createElement("span");c.textContent=o.name||"OPERATIVE";let h=document.createElement("b");h.textContent=o.self?"YOU":o.id===n?"HOST":"ALLY",a.append(l,c,h),s.append(a)}}showMissionBanner(e,t,n="NEW CONTRACT",s=4200){let r=Ee("missionBanner");r&&(r.querySelector("strong").textContent=e,r.querySelector("small").textContent=t,r.querySelector(".mission-banner__tag").textContent=n,r.classList.add("show"),clearTimeout(this.missionBannerTimer),this.missionBannerTimer=setTimeout(()=>r.classList.remove("show"),s))}toast(e,t="info",n=3200){if(!this.toastStack)return;let s=document.createElement("div");for(s.className=`toast toast--${t}`,s.textContent=e,this.toastStack.append(s);this.toastStack.children.length>4;)this.toastStack.firstElementChild.remove();setTimeout(()=>{s.classList.add("is-out"),setTimeout(()=>s.remove(),300)},n)}feed(e,t="",n=null){if(!this.feedEl)return;let s=document.createElement("div");if(s.className=`feed__item${t?` is-${t}`:""}`,n){let r=document.createElement("strong");r.textContent=`${n} `,s.append(r,document.createTextNode(e))}else s.textContent=e;for(this.feedEl.append(s),this.feedItems.push(s);this.feedItems.length>5;)this.feedItems.shift()?.remove();setTimeout(()=>{s.style.opacity="0",setTimeout(()=>s.remove(),400)},8e3)}chat(e,t,n=16723349){let s=`#${n.toString(16).padStart(6,"0")}`;if(this.feedEl){let r=document.createElement("div");r.className="feed__item is-chat";let o=document.createElement("strong");for(o.textContent=`${e}: `,o.style.color=s,r.append(o,document.createTextNode(t)),this.feedEl.append(r),this.feedItems.push(r);this.feedItems.length>6;)this.feedItems.shift()?.remove();setTimeout(()=>{r.style.opacity="0",setTimeout(()=>r.remove(),400)},12e3)}}setMission(e,t){if(!e)return;let n=e.contractName||"GHOST PROTOCOL",s=e.shards?.length||3,r=n,o=`Breach ${s} data caches across the district.`,a=e.contractTotal?`CONTRACT ${String((e.contractIndex||0)+1).padStart(2,"0")}/${String(e.contractTotal).padStart(2,"0")}`:"ACTIVE CONTRACT";e.phase==="extract"?(o="All caches secured. Return to the plaza for extraction.",a="EXTRACTION READY"):e.phase==="extracting"?(o="Hold the extraction zone \u2014 stay inside the ring.",a="EXTRACTION IN PROGRESS"):e.phase==="complete"?(o="Contract complete. The district is yours.",a="CONTRACT COMPLETE"):e.phase==="idle"&&(o="Stand by for the next contract.",a="STANDBY"),yt(Ee("missionEyebrow"),a),yt(Ee("missionTitle"),r),yt(Ee("missionObjective"),o),yt(Ee("missionDistance"),Fp(t)),yt(Ee("missionTimer"),uu(e.elapsed||0)),yt(Ee("scoreValue"),hu(e.score||0));let l=Ee("missionDots")?.children;if(l){if(l.length!==s){let u=Ee("missionDots");u.replaceChildren();for(let d=0;d<s;d+=1)u.appendChild(document.createElement("span"))}let c=e.shards?.filter(u=>u.collected).length||0,h=Ee("missionDots").children;for(let u=0;u<h.length;u+=1)h[u].classList.toggle("done",u<c),h[u].classList.toggle("next",u===c&&e.phase==="collect")}}setWeather(e,t,n){let s=Ee("weatherTag");if(!s)return;let r=String(n||e||"rain").toLowerCase();yt(s,e||"RAIN"),s.dataset.weather=r,s.title=t?`${t} \u2014 click to change weather (V)`:"Change weather (V)";let o=Ee("weatherGroup");if(o)for(let a of o.querySelectorAll("button[data-weather]")){let l=a.dataset.weather===r;a.classList.toggle("is-active",l),a.setAttribute("aria-pressed",l?"true":"false")}}setVitals(e,t){let n=Xe(e,0,100),s=Xe(t,0,100),r=Ee("healthBar");r&&(r.style.width=`${n}%`,r.classList.toggle("is-low",n<34));let o=Ee("staminaBar");o&&(o.style.width=`${s}%`,o.classList.toggle("is-low",s<20)),yt(Ee("healthText"),String(Math.round(n))),yt(Ee("staminaText"),String(Math.round(s)))}setMode(e){yt(Ee("vitalsState"),e==="car"?"BEHIND THE WHEEL":"ON FOOT"),Ee("speedometer")?.classList.toggle("hidden",e!=="car"),Ee("vehiclePrompt")?.classList.toggle("hidden",e!=="car"),Ee("weaponPanel")?.classList.toggle("is-hidden",e==="car"),e==="car"&&Ee("speedLines")?.classList.remove("is-boosting")}setAmmo(e,t,n=0){yt(Ee("ammoValue"),String(e));let s=Ee("reloadBar");s&&(s.style.width=`${Xe(n,0,1)*100}%`);let r=document.querySelector(".weapon-panel__ammo span");r&&yt(r,`/ ${t}`)}setInteraction(e,t,n="F"){let s=Ee("interactionPrompt");if(!s)return;s.classList.toggle("hidden",!t),e&&yt(Ee("interactionText"),e);let r=s.querySelector("kbd");r&&yt(r,n)}setAlert(e){let t=Ee("alertBadge");t&&(t.classList.toggle("show",e>0),e>0&&yt(Ee("alertCount"),String(e)))}setCrosshair(e,t=!1,n=!1){let s=Ee("crosshair");s&&(s.style.display=e?"":"none",s.classList.toggle("is-aiming",t),s.classList.toggle("is-blocked",n))}hitmarker(){let e=Ee("crosshair")?.querySelector(".crosshair__hit");e&&(e.classList.remove("is-hit"),e.offsetWidth,e.classList.add("is-hit"))}damage(){let e=Ee("damageFlash");e&&(e.classList.add("is-hit"),clearTimeout(this.damageTimer),this.damageTimer=setTimeout(()=>e.classList.remove("is-hit"),130))}setBoosting(e){Ee("speedLines")?.classList.toggle("is-boosting",e)}setCarStats(e,t,n,s=0){let r=Math.round(Math.abs(e)*3.6);yt(Ee("speedValue"),String(r)),yt(Ee("gearValue"),n);let o=Xe(t,0,1)*100,a=Ee("boostBar");a&&(a.style.width=`${o}%`),(Math.abs(this.lastSpeed-r)>1||Math.abs(this.lastBoost-o)>1)&&(this.lastSpeed=r,this.lastBoost=o,this.drawSpeedometer(Math.min(1,r/240),o/100,s))}drawSpeedometer(e,t,n){let s=this.speedoCtx;s.clearRect(0,0,440,300);let a=220,l=216,c=156,h=Math.PI*.78,u=Math.PI*2.22;s.lineCap="butt",s.beginPath(),s.arc(a,l,c,h,u),s.strokeStyle="rgba(130, 190, 230, 0.13)",s.lineWidth=2,s.stroke(),s.beginPath(),s.arc(a,l,c,u-(u-h)*.18,u),s.strokeStyle="rgba(255, 66, 96, 0.3)",s.lineWidth=3,s.stroke();for(let d=0;d<=12;d+=1){let f=d/12,m=h+(u-h)*f,y=d%3===0?c-20:c-11;s.beginPath(),s.moveTo(a+Math.cos(m)*y,l+Math.sin(m)*y),s.lineTo(a+Math.cos(m)*c,l+Math.sin(m)*c),s.strokeStyle=d%3===0?"rgba(196, 236, 255, 0.55)":"rgba(150, 187, 215, 0.22)",s.lineWidth=d%3===0?1.6:1,s.stroke(),d%3===0&&(s.save(),s.translate(a+Math.cos(m)*(c-38),l+Math.sin(m)*(c-38)),s.fillStyle="rgba(191, 226, 246, 0.55)",s.font='500 17px "Barlow Condensed", sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillText(String(d*20),0,0),s.restore())}e>.005&&(s.save(),s.beginPath(),s.arc(a,l,c-4,h,h+(u-h)*e),s.strokeStyle="#5df6ff",s.lineWidth=4,s.shadowColor="#38eaff",s.shadowBlur=16,s.stroke(),s.restore()),s.beginPath(),s.arc(a,l,c-14,h,h+(u-h)*(.05+Math.abs(n)*.1)),s.strokeStyle="rgba(255, 187, 99, 0.35)",s.lineWidth=1.5,s.stroke(),s.beginPath(),s.moveTo(a-20,l+3),s.lineTo(a+20,l+3),s.strokeStyle="rgba(158, 214, 240, 0.22)",s.stroke()}setBoost(e,t){let n=Ee("boostBar");n&&(n.style.width=`${Xe(e,0,1)*100}%`),this.setBoosting(t)}initMinimap(e){let s=document.createElement("canvas");s.width=440,s.height=440;let r=s.getContext("2d"),a=440/(e.metro.bounds*2),l=440/2,c=440/2,h=d=>l+d*a,u=d=>c+d*a;r.fillStyle="#050912",r.fillRect(0,0,440,440),r.strokeStyle="rgba(77, 244, 255, 0.035)",r.lineWidth=1;for(let d=0;d<440;d+=55)r.beginPath(),r.moveTo(d,0),r.lineTo(d,440),r.stroke(),r.beginPath(),r.moveTo(0,d),r.lineTo(440,d),r.stroke();r.strokeStyle="rgba(88, 121, 148, 0.4)",r.lineWidth=16*a;for(let d of e.metro.roads)r.beginPath(),r.moveTo(h(d),0),r.lineTo(h(d),440),r.stroke(),r.beginPath(),r.moveTo(0,u(d)),r.lineTo(440,u(d)),r.stroke();r.strokeStyle="rgba(143, 188, 216, 0.12)",r.lineWidth=1;for(let d of e.metro.roads)r.beginPath(),r.moveTo(h(d),0),r.lineTo(h(d),440),r.stroke(),r.beginPath(),r.moveTo(0,u(d)),r.lineTo(440,u(d)),r.stroke();for(let d of e.metro.blocks){let f=44*a;r.fillStyle="rgba(16, 29, 43, 0.92)",r.strokeStyle="rgba(66, 116, 145, 0.28)",r.lineWidth=1,r.fillRect(h(d.cx)-f/2,u(d.cz)-f/2,f,f),r.strokeRect(h(d.cx)-f/2,u(d.cz)-f/2,f,f)}r.beginPath(),r.arc(h(0),u(0),28*a,0,Mt),r.fillStyle="rgba(30, 77, 91, 0.26)",r.fill(),r.strokeStyle="rgba(77, 244, 255, 0.3)",r.lineWidth=2,r.stroke(),r.save(),r.translate(h(60),u(0)),r.rotate(Math.PI/4),r.fillStyle="rgba(77, 244, 255, 0.2)",r.fillRect(-7,-7,14,14),r.strokeStyle="rgba(77, 244, 255, 0.55)",r.strokeRect(-7,-7,14,14),r.restore(),r.strokeStyle="rgba(77, 244, 255, 0.15)",r.lineWidth=2,r.strokeRect(1,1,438,438),this.minimapCache=s}drawMinimap(e,t,n,s,r,o,a){if(!this.minimapCache||a-this.minimapTime<45)return;this.minimapTime=a;let l=this.minimapCtx,c=440;l.clearRect(0,0,c,c),l.drawImage(this.minimapCache,0,0);let h=e.metro.bounds,u=c/(h*2),d=c/2,f=c/2,m=p=>d+p*u,y=p=>f+p*u,g=(Math.sin(a/280)+1)/2;if(s?.shards)for(let p of s.shards){if(p.collected)continue;let _=m(p.x),T=y(p.z);l.save(),l.translate(_,T),l.rotate(Math.PI/4),l.fillStyle="#5cf7ff",l.shadowColor="#5cf7ff",l.shadowBlur=11;let S=7+g*2;l.fillRect(-S/2,-S/2,S,S),l.restore()}if(s&&(s.phase==="extract"||s.phase==="extracting"||s.phase==="complete")){let p=m(s.extraction.x),_=y(s.extraction.z);l.save(),l.beginPath(),l.arc(p,_,12+g*5,0,Mt),l.strokeStyle="rgba(255, 187, 99, 0.7)",l.lineWidth=2,l.stroke(),l.fillStyle="#ffbb63",l.shadowColor="#ffbb63",l.shadowBlur=12,l.beginPath(),l.arc(p,_,5,0,Mt),l.fill(),l.restore()}if(r)for(let p of r)l.fillStyle="rgba(255, 67, 88, 0.85)",l.beginPath(),l.arc(m(p.x),y(p.z),3.5,0,Mt),l.fill();if(o)for(let p of o)l.strokeStyle="rgba(255, 45, 149, 0.75)",l.beginPath(),l.arc(m(p.x),y(p.z),7,0,Mt),l.stroke();if(n)for(let p of n){let _=m(p.x),T=y(p.z);kp(l,_,T,p.rot,p.colorHex||"#ff2d95",7)}kp(l,m(t.x),y(t.z),t.rot,"#5df6ff",9,!0)}updateLabels(e,t,n,s,r){let o=new Set;for(let a of s){let l=a.id;o.add(l);let c=this.markers.get(l);c||(c=this.createMarker(a),this.markers.set(l,c),this.worldLabels.append(c.el));let h=cc(a.position,e,t,n),u=e.position,d=h.visible===!1,f=u.distanceTo(a.position),m=!d&&h.x>-40&&h.x<t+40&&h.y>-40&&h.y<n+40;c.el.classList.toggle("visible",m),m&&(c.el.style.left=`${h.x}px`,c.el.style.top=`${h.y}px`,c.distEl&&yt(c.distEl,Fp(f)),c.dynamicLabel&&yt(c.dynamicLabel,a.label||""))}for(let[a,l]of this.markers)!o.has(a)&&!a.startsWith("remote-")&&!a.startsWith("ping-")&&(l.el.remove(),this.markers.delete(a))}createMarker(e){let t=document.createElement("div");t.className=`world-marker ${e.className||""}`;let n=document.createElement("div");n.className="world-marker__icon";let s=document.createElement("div");s.className="world-marker__label",s.textContent=e.label||"";let r=document.createElement("div");return r.className="world-marker__dist",t.append(n,s,r),{el:t,labelEl:s,distEl:r,dynamicLabel:e.dynamicLabel?s:null}}setFps(e,t){let n=t==null?`${Math.round(e)} FPS`:`${Math.round(t)} MS \xB7 ${Math.round(e)} FPS`;yt(Ee("networkLatency"),n)}setChatOpen(e){this.isChatOpen=e,Ee("chatPanel")?.classList.toggle("hidden",!e),e?setTimeout(()=>Ee("chatInput")?.focus(),10):Ee("chatInput")&&(Ee("chatInput").value="")}setPaused(e){this.pauseOverlay?.classList.toggle("hidden",!e),e||this.controlsModal?.classList.add("hidden")}setControls(e){this.controlsModal?.classList.toggle("hidden",!e)}showDeath(e){this.deathOverlay?.classList.remove("hidden"),yt(Ee("respawnTimer"),String(Math.max(0,Math.ceil(e))))}updateDeath(e){this.deathOverlay?.classList.contains("hidden")||yt(Ee("respawnTimer"),String(Math.max(0,Math.ceil(e))))}hideDeath(){this.deathOverlay?.classList.add("hidden")}showResult({time:e,score:t,countdown:n,caches:s,contractName:r}){this.resultOverlay?.classList.remove("hidden"),yt(Ee("resultTime"),uu(e)),yt(Ee("resultScore"),hu(t)),yt(Ee("resultCaches"),`${s} SECURED`),yt(Ee("resultCountdown"),String(Math.max(0,Math.ceil(n)))),r&&yt(Ee("resultName"),r)}updateResultCountdown(e){yt(Ee("resultCountdown"),String(Math.max(0,Math.ceil(e))))}hideResult(){this.resultOverlay?.classList.add("hidden")}showDisconnect(e){yt(Ee("disconnectReason"),e||"The link to your partner was lost."),this.disconnectOverlay?.classList.remove("hidden"),this.pauseOverlay?.classList.add("hidden")}hideDisconnect(){this.disconnectOverlay?.classList.add("hidden")}setLockHint(e){Ee("lockHint")?.classList.toggle("hidden",!e)}clearLabels(){for(let[,e]of this.markers)e.el.remove();this.markers.clear()}}});function Un(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new At;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[m].length!==i[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(u.morphAttributes[m]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Hp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][d]);let m=Hp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Hp(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Ut(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let y=h.getComponent(d,m);a.setComponent(d+u,m,y)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var du=xt(()=>{cn()});function Er(i,{repeat:e=!0,srgb:t=!0}={}){let n=Mr(i,e);return t||(n.colorSpace=Yn),n}function Bo(i,e,t,n,s,r=1){let o=i.getImageData(0,0,e,t),a=o.data;for(let l=0;l<a.length;l+=4){let c=(s()-.5)*n;a[l]+=c,a[l+1]+=c,a[l+2]+=c,a[l+3]=Math.min(255,a[l+3]*r)}i.putImageData(o,0,0)}function Wp(i=4){let e=ui(9173),t=512,n=$n(t),s=n.getContext("2d");s.fillStyle="#17191e",s.fillRect(0,0,t,t);for(let c=0;c<2600;c+=1){let h=e()*t,u=e()*t,d=e()*2.6+.4,f=26+Math.floor(e()*35);s.fillStyle=`rgba(${f},${f+2},${f+5},${e()*.55})`,s.fillRect(h,u,d,d)}for(let c=0;c<9;c+=1)s.fillStyle=`rgba(10,11,15,${.06+e()*.08})`,s.fillRect(0,e()*t,t,10+e()*30);s.strokeStyle="rgba(6,7,10,0.55)",s.lineWidth=1.2;for(let c=0;c<18;c+=1){let h=e()*t,u=e()*t;s.beginPath(),s.moveTo(h,u);for(let d=0;d<5;d+=1)h+=(e()-.5)*60,u+=(e()-.5)*60,s.lineTo(h,u);s.stroke()}Bo(s,t,t,14,e);let r=Er(n);r.anisotropy=i;let o=$n(t),a=o.getContext("2d");a.fillStyle="#6d6d6d",a.fillRect(0,0,t,t);for(let c=0;c<90;c+=1){let h=e()*t,u=e()*t,d=12+e()*70,f=a.createRadialGradient(h,u,0,h,u,d);f.addColorStop(0,"rgba(18,18,18,0.75)"),f.addColorStop(1,"rgba(18,18,18,0)"),a.fillStyle=f,a.fillRect(h-d,u-d,d*2,d*2)}Bo(a,t,t,20,e);let l=Er(o,{srgb:!1});return l.anisotropy=i,{map:r,roughnessMap:l}}function Xp(i=4){let e=ui(4481),t=256,n=$n(t),s=n.getContext("2d");s.fillStyle="#282b33",s.fillRect(0,0,t,t);let r=64;for(let a=0;a<t;a+=r)for(let l=0;l<t;l+=r){let c=31+Math.floor(e()*11);s.fillStyle=`rgb(${c},${c+2},${c+5})`,s.fillRect(l+2,a+2,r-4,r-4),s.strokeStyle="rgba(8,9,12,0.8)",s.lineWidth=2,s.strokeRect(l+1,a+1,r-2,r-2);for(let h=0;h<20;h+=1)s.fillStyle=`rgba(5,6,9,${e()*.15})`,s.fillRect(l+e()*r,a+e()*r,1.5,1.5)}Bo(s,t,t,9,e);let o=Er(n);return o.anisotropy=i,o}function qp(i=4){let e=ui(8127),t=512,n=$n(t),s=n.getContext("2d");s.fillStyle="#141721",s.fillRect(0,0,t,t),s.strokeStyle="rgba(73,227,255,0.09)",s.lineWidth=2;let r=64;for(let a=0;a<=t;a+=r)s.beginPath(),s.moveTo(a,0),s.lineTo(a,t),s.stroke(),s.beginPath(),s.moveTo(0,a),s.lineTo(t,a),s.stroke();for(let a=0;a<55;a+=1)s.strokeStyle=`rgba(70,240,255,${.02+e()*.08})`,s.lineWidth=.8+e()*1.5,s.beginPath(),s.arc(e()*t,e()*t,e()*90,0,Mt),s.stroke();Bo(s,t,t,8,e);let o=Er(n);return o.anisotropy=i,o}function Yp(i=4){return Av.map((e,t)=>{let n=ui(1229+t*997),s=512,r=512,o=$n(s,r),a=$n(s,r),l=o.getContext("2d"),c=a.getContext("2d");l.fillStyle=e.wall,l.fillRect(0,0,s,r),c.fillStyle="#000",c.fillRect(0,0,s,r);let h=l.createLinearGradient(0,0,s,0);h.addColorStop(0,"rgba(255,255,255,0.035)"),h.addColorStop(.5,"rgba(0,0,0,0.12)"),h.addColorStop(1,"rgba(255,255,255,0.02)"),l.fillStyle=h,l.fillRect(0,0,s,r);let u=7,d=10,f=s/u,m=r/d,y=7,g=6,p=["#08121d","#0d1821","#15101f","#0a1418"];for(let S=0;S<d;S+=1)for(let w=0;w<u;w+=1){let E=w*f+y,x=S*m+g,b=f-y*2,I=m-g*2;if(l.fillStyle=e.glass,l.fillRect(E,x,b,I),l.fillStyle=`rgba(${p[(S+w)%p.length].slice(1).match(/../g).map(A=>parseInt(A,16)).join(",")},0.55)`,l.fillRect(E,x,b,I),l.fillStyle="rgba(150,195,255,0.08)",l.beginPath(),l.moveTo(E,x+I*.6),l.lineTo(E+b,x+I*.05),l.lineTo(E+b,x+I*.2),l.lineTo(E,x+I*.8),l.closePath(),l.fill(),l.strokeStyle="rgba(3,5,8,0.8)",l.lineWidth=2,l.strokeRect(E,x,b,I),l.fillStyle="rgba(255,255,255,0.05)",l.fillRect(E,x,b,2),n()<e.density){let A=e.lit[Math.floor(n()*e.lit.length)];c.fillStyle=A,c.globalAlpha=.35+n()*.65,c.fillRect(E+1,x+1,b-2,I-2),c.globalAlpha=1,n()<.35&&(c.fillStyle="rgba(0,0,0,0.45)",c.fillRect(E+1,x+I*(.3+n()*.3),b-2,I*.18))}}l.fillStyle="rgba(2,3,5,0.5)";for(let S=0;S<=u;S+=1)l.fillRect(S*f-2,0,4,r);l.fillStyle="rgba(255,255,255,0.03)",l.fillRect(0,0,s,4),Bo(l,s,r,9,n,.95);let _=Er(o),T=Er(a);return _.anisotropy=i,T.anisotropy=i,_.wrapS=_.wrapT=ei,T.wrapS=T.wrapT=ei,{map:_,emissiveMap:T,tint:new Ne(e.tint)}})}function fu(i=0,e=null,t=null,n=!1){let s=ui(777+i*43),r=e||Gp[i%Gp.length],o=t||Vp[i%Vp.length],a=n?192:640,l=n?640:192,c=$n(a,l),h=c.getContext("2d");h.clearRect(0,0,a,l),n?(h.fillStyle="rgba(4,5,10,0.9)",h.fillRect(8,8,a-16,l-16),h.strokeStyle=o,h.lineWidth=5,h.shadowColor=o,h.shadowBlur=20,h.strokeRect(14,14,a-28,l-28),h.shadowBlur=28,h.font='700 92px "Arial Black", Impact, sans-serif',h.textAlign="center",h.textBaseline="middle",r.split("").forEach((f,m)=>{h.fillStyle=m%2?o:"#ffffff",h.fillText(f,a/2,105+m*100)}),h.font='22px "Arial", sans-serif',h.fillStyle=o,h.fillText("24H",a/2,l-48)):(h.fillStyle="rgba(4,5,10,0.86)",h.fillRect(10,10,a-20,l-20),h.strokeStyle=o,h.lineWidth=5,h.shadowColor=o,h.shadowBlur=18,h.strokeRect(14,14,a-28,l-28),h.shadowBlur=35,h.font='700 96px "Arial Black", Impact, sans-serif',h.textAlign="center",h.textBaseline="middle",h.fillStyle="#ffffff",h.fillText(r,a/2,l/2+4),h.globalAlpha=.8,h.fillStyle=o,h.fillText(r,a/2,l/2+4),h.globalAlpha=1,h.font='600 22px "Arial", sans-serif',h.fillStyle=o,h.shadowBlur=10,h.fillText("N E O N   D I S T R I C T",a/2,l-36)),h.globalCompositeOperation="source-atop",h.fillStyle="rgba(0,0,0,0.12)";for(let d=0;d<l;d+=5)h.fillRect(0,d,a,2);h.globalCompositeOperation="source-over";let u=Mr(c);return u.anisotropy=4,u}function $p(i=0){let e=ui(3301+i*91),t=512,n=256,s=$n(t,n),r=s.getContext("2d"),o=[["#ff2b83","#4310a8","#ffd1e8"],["#11e4ff","#053c78","#d5fdff"],["#ffb300","#741b00","#fff0c2"],["#b670ff","#14054a","#f1e3ff"]],a=o[i%o.length],l=r.createLinearGradient(0,0,t,n);l.addColorStop(0,a[1]),l.addColorStop(1,a[0]),r.fillStyle=l,r.fillRect(0,0,t,n);for(let u=0;u<18;u+=1){let d=10+e()*55,f=20+e()*160;r.fillStyle=`rgba(5,3,12,${.15+e()*.35})`,r.fillRect(e()*t,n-f,d,f),r.fillStyle=`rgba(255,255,255,${.05+e()*.2})`;for(let m=n-f+6;m<n;m+=9)for(let y=4;y<d;y+=8)e()<.3&&r.fillRect(e()*t,m,2,2)}r.globalAlpha=.4;for(let u=0;u<7;u+=1)r.strokeStyle=a[2],r.lineWidth=1+e()*4,r.beginPath(),r.arc(t*.72,n*.4,20+u*22,0,Mt),r.stroke();r.globalAlpha=1,r.fillStyle="rgba(4,3,12,0.7)",r.fillRect(0,0,t,n),r.strokeStyle=a[0],r.lineWidth=3,r.strokeRect(6,6,t-12,n-12),r.font='900 56px "Arial Black", Impact, sans-serif',r.fillStyle="#ffffff",r.textAlign="left",r.shadowColor=a[0],r.shadowBlur=16;let c=[["WAKE","THE CITY"],["RIDE","THE VOID"],["NO","LIMITS"],["SYNC","YOUR SOUL"]][i%4];r.fillText(c[0],34,108),r.fillStyle=a[2],r.fillText(c[1],34,164),r.font='600 18px "Arial", sans-serif',r.fillStyle=a[0],r.fillText("NIGHTFALL INDUSTRIES // EST. 2086",36,210);let h=Mr(s);return h.anisotropy=4,h}function rn(i="#ffffff"){let t=$n(128),n=t.getContext("2d"),s=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return s.addColorStop(0,i),s.addColorStop(.12,i),s.addColorStop(.4,`${i}55`),s.addColorStop(1,`${i}00`),n.fillStyle=s,n.fillRect(0,0,128,128),Mr(t)}function Zp(){let t=$n(1024,512),n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"#02030a"),s.addColorStop(.42,"#090c1c"),s.addColorStop(.52,"#1c1233"),s.addColorStop(.58,"#2b1a48"),s.addColorStop(.65,"#0b0a14"),s.addColorStop(1,"#030409"),n.fillStyle=s,n.fillRect(0,0,1024,512);let r=["#ff2f9a","#35f4ff","#8b5cff","#ffb443","#4b7dff"];for(let a=0;a<140;a+=1){let l=Math.random()*1024,c=512*.5+Math.random()*70,h=2+Math.random()*10,u=10+Math.random()*120;n.globalAlpha=.15+Math.random()*.7,n.fillStyle=r[Math.floor(Math.random()*r.length)],n.fillRect(l,c-u,h,u)}n.globalAlpha=1;for(let a=0;a<18;a+=1){let l=261.12+a*3;n.fillStyle=`rgba(${80+Math.random()*140},${80+Math.random()*120},255,${.025+Math.random()*.05})`,n.fillRect(0,l,1024,2)}let o=Mr(t,!0);return o.mapping=pr,o}var Av,Gp,Vp,dc=xt(()=>{cn();Ii();Av=[{wall:"#1e2532",glass:"#0c1624",lit:["#ffd9a0","#ffe9c4","#8ce6ff","#ffa9d6"],tint:"#7686a4",density:.42},{wall:"#2a2423",glass:"#121113",lit:["#ffd09a","#ffb36b","#cbeaff","#79d7ff"],tint:"#a58c7d",density:.35},{wall:"#1b2a2b",glass:"#071719",lit:["#bffaff","#66e9ff","#ff9cd8","#e8fff9"],tint:"#5b9ca0",density:.38},{wall:"#211d2e",glass:"#0d0b18",lit:["#d4b7ff","#ffb0e4","#8defff","#ffe6a6"],tint:"#8475b7",density:.46},{wall:"#181a20",glass:"#0a0d14",lit:["#ffc98a","#a8f4ff","#ff90c9"],tint:"#687083",density:.3}];Gp=["NOVA","KAIDO","SYNTH","NEON","ZERO","RAMEN","GRID","VOID","AETHER","NIGHT","HALO","DRIVE","PULSE","ECHO","LUX","ARCO","ONI","VANTA","NEXUS","KITSUNE","QUANTUM","HELIX","ORBIT","CHROME"],Vp=["#52f6ff","#ff3d9c","#b268ff","#ffb44d","#74ffb0","#4d8bff"]});function mu(i){return Rv.get(i)||pc[0]}function Pv(i){let e=new mn(620,32,20),t=new Vt({side:ln,depthWrite:!1,uniforms:{topColor:{value:new Ne("#02040a")},midColor:{value:new Ne("#0a0d20")},horizonColor:{value:new Ne("#241a3d")},glowColor:{value:new Ne("#432260")},uFlash:{value:0}},vertexShader:`
      varying vec3 vWorld;
      void main() {
        vWorld = normalize(position);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      varying vec3 vWorld;
      uniform vec3 topColor;
      uniform vec3 midColor;
      uniform vec3 horizonColor;
      uniform vec3 glowColor;
      uniform float uFlash;
      void main() {
        float h = clamp(vWorld.y, 0.0, 1.0);
        vec3 col = mix(horizonColor, midColor, smoothstep(0.0, 0.28, h));
        col = mix(col, topColor, smoothstep(0.25, 0.8, h));
        float haze = pow(1.0 - h, 6.0);
        col += glowColor * haze * 0.65;
        float band = sin(vWorld.y * 38.0 + vWorld.x * 5.0) * 0.004 * (1.0 - h);
        col += band;
        col += vec3(0.5, 0.62, 0.9) * uFlash * (0.3 + 0.7 * (1.0 - h));
        gl_FragColor = vec4(col, 1.0);
      }
    `}),n=new ee(e,t);n.frustumCulled=!1,i.add(n);let s=ui(5150),r=900,o=new Float32Array(r*3),a=new Float32Array(r*3);for(let m=0;m<r;m+=1){let y=s()*Mt,g=.04+s()*.95,p=Math.sqrt(1-g*g);o[m*3]=Math.cos(y)*p*580,o[m*3+1]=g*580,o[m*3+2]=Math.sin(y)*p*580;let _=.55+s()*.45;a[m*3]=_*(.7+s()*.3),a[m*3+1]=_*(.8+s()*.2),a[m*3+2]=_}let l=new At;l.setAttribute("position",new Ut(o,3)),l.setAttribute("color",new Ut(a,3));let c=rn("#dfe9ff"),h=new ri(l,new Gi({size:2.1,map:c,transparent:!0,opacity:.85,depthWrite:!1,blending:lt,vertexColors:!0,sizeAttenuation:!1,fog:!1}));h.frustumCulled=!1,i.add(h);let u=rn("#dce7ff"),d=new Ln(new Tn({map:u,color:14543103,transparent:!0,opacity:.95,blending:lt,depthWrite:!1,fog:!1}));d.position.set(250,260,-330),d.scale.set(52,52,1),i.add(d);let f=new ee(new fs(7,36),new at({color:15397631,transparent:!0,opacity:.9,fog:!1}));return f.position.set(246,261,-331),f.lookAt(0,0,0),i.add(f),{skyMat:t,stars:h,moon:d,moonCore:f}}function Kp(i,e,t,n,s=15,r=30){let o=i.attributes.uv,a=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let l=0;l<6;l+=1){let[c,h]=a[l];for(let u=0;u<4;u+=1){let d=l*4+u;o.setXY(d,o.getX(d)*c/s,o.getY(d)*h/r)}}o.needsUpdate=!0}function fc(i,e,t,n,s,r=.7){let o=new Ln(new Tn({map:e,color:t,transparent:!0,opacity:r,depthWrite:!1,blending:lt}));return o.position.copy(n),o.scale.set(s,s,1),i.add(o),o}function jp(i,e){let t=ui(913205),n=Math.min(8,e.capabilities.getMaxAnisotropy()),s=[],r=[],o=[],a=[],l=[],c=new P(0,0,1),h={x:0,y:0,z:-24,rot:0},u=(N,F,W,he)=>{s.push({minX:N-W/2,maxX:N+W/2,minZ:F-he/2,maxZ:F+he/2})};i.fog=new Qr(461590,.0042);let d=new ho(5991679,1510432,.85);i.add(d);let f=new po(9414911,1.15);f.position.set(120,200,-160),i.add(f);let m=new mo(2827072,.7);i.add(m);let y=new oi(2746367,40,48,2);y.position.set(-12,7,-8),i.add(y);let g=new oi(16723349,34,44,2);g.position.set(14,6,10),i.add(g);let p=new oi(6642943,80,90,2);p.position.set(60,30,0),i.add(p);let _=new oi(16759671,22,34,2);_.position.set(-58,6,-58),i.add(_);let T=Pv(i);try{let N=Zp(),F=new xr(e);F.compileEquirectangularShader();let W=F.fromEquirectangular(N).texture;i.environment=W,i.environmentIntensity=.65,N.dispose(),F.dispose()}catch{}let S=Wp(n);S.map.repeat.set(64,64),S.roughnessMap.repeat.set(64,64);let w=new Tt({map:S.map,roughnessMap:S.roughnessMap,color:12173775,roughness:.72,metalness:.55,envMapIntensity:1.1}),E=new en(520,520);E.rotateX(-Math.PI/2);let x=new ee(E,w);x.position.y=-.03,i.add(x);let b=Xp(n);b.repeat.set(5,5);let I=new Tt({map:b,color:11186367,roughness:.86,metalness:.18,envMapIntensity:.55}),A=qp(n);A.repeat.set(2.6,2.6);let U=new Tt({map:A,color:12437213,roughness:.42,metalness:.58,envMapIntensity:1.2}),B=[],k=new ee(new fs(28,64),U);k.rotation.x=-Math.PI/2,k.position.set(0,.055,0),i.add(k);let R=[];for(let N=0;N<Fo.grid;N+=1)for(let F=0;F<Fo.grid;F+=1){let W=(N-3)*Fo.cell,he=(F-3)*Fo.cell;if(N===3&&F===3)continue;let Z=new Ze(44.5,.18,44.5);Z.translate(W,.01,he),B.push(Z),R.push({cx:W,cz:he,i:N,j:F})}let z=new ee(Un(B,!1),I);i.add(z),B.forEach(N=>N.dispose());let q=[],Y=[],se=(N,F,W,he)=>{let Z=new en(W,he);Z.rotateX(-Math.PI/2),Z.translate(N,.105,F),q.push(Z)};for(let N of Qi){for(let F=-206;F<=206;F+=8)se(N,F,.18,3.4),se(F,N,3.4,.18);for(let F of[-7.1,7.1])se(N+F,0,.12,410),se(0,N+F,410,.12)}for(let N of Qi)for(let F of Qi)for(let W=0;W<4;W+=1){let he=W*Math.PI/2;for(let Z=-1;Z<=1;Z+=1){let We=N+Math.cos(he)*10.4+Math.cos(he+Math.PI/2)*(Z*2.4),Le=F+Math.sin(he)*10.4+Math.sin(he+Math.PI/2)*(Z*2.4),mt=new en(4.2,.75);mt.rotateX(-Math.PI/2),mt.rotateY(-he),mt.translate(We,.107,Le),Y.push(mt)}}let X=new at({color:12440296,transparent:!0,opacity:.42,depthWrite:!1}),ne=new ee(Un(q,!1),X);i.add(ne);let re=new at({color:14412024,transparent:!0,opacity:.3,depthWrite:!1}),De=new ee(Un(Y,!1),re);i.add(De),q.forEach(N=>N.dispose()),Y.forEach(N=>N.dispose());let Ue=Yp(n),K=Ue.map(N=>new Tt({map:N.map,emissiveMap:N.emissiveMap,emissive:16777215,emissiveIntensity:1.15,color:10133674,roughness:.56,metalness:.38,envMapIntensity:.5})),be=new Tt({color:1119260,roughness:.88,metalness:.24}),Ie=new Tt({color:724243,roughness:.6,metalness:.7,envMapIntensity:.8}),He=pu.slice(0,4).map(N=>new at({color:N,toneMapped:!1})),ve=K.map(()=>[]),Ye=[],Rt=[],Ve=He.map(()=>[]),tt=(N,F,W,he,Z,We,Le=!0)=>{let mt=new Ze(W,Z,he);Kp(mt,W,Z,he,16,30),mt.translate(N,Z/2+.12,F),ve[We].push(mt),u(N,F,W,he);let ct=new Ze(W+.5,.55,he+.5);if(ct.translate(N,Z+.32,F),Ye.push(ct),Le){let oe=new Ze(W+.35,.9,he+.35);oe.translate(N,.5,F),Rt.push(oe)}if(t.chance(.55)){let oe=t.int(0,He.length-1),Re=.22,Ce=new Ze(W+.16,Re,.16);Ce.translate(N,Z-1.2,F+he/2+.1),Ve[oe].push(Ce);let nt=new Ze(.16,Re,he+.16);nt.translate(N+W/2+.1,Z-1.2,F),Ve[oe].push(nt)}let bt=t.int(1,3);for(let oe=0;oe<bt;oe+=1){let Re=t.range(1.5,Math.min(5,W*.25)),Ce=t.range(1.5,Math.min(5,he*.25)),nt=t.range(.7,2.2),Nt=N+t.range(-W*.28,W*.28),St=F+t.range(-he*.28,he*.28),ut=new Ze(Re,nt,Ce);ut.translate(Nt,Z+.55+nt/2,St),Ye.push(ut)}if(Z>55&&t.chance(.6)){let oe=new Gt(.06,.11,t.range(4,10),5);oe.translate(N+t.range(-W*.2,W*.2),Z+6,F+t.range(-he*.2,he*.2)),Rt.push(oe)}return{w:W,d:he,h:Z}},je=(N,F,W,he,Z=!1,We=null,Le=null,mt=null)=>{let ct=fu(Math.floor(t()*999),We,Le,Z),bt=he/(Z?1/3.33:3.33),oe=new en(he,bt),Re=new at({map:ct,transparent:!0,blending:lt,depthWrite:!1,toneMapped:!1,side:Bt}),Ce=new ee(oe,Re),nt=0;return W===0&&(nt=0,F+=.3),W===1&&(nt=Math.PI,F-=.3),W===2&&(nt=Math.PI/2,N+=.3),W===3&&(nt=-Math.PI/2,N-=.3),Ce.rotation.y=nt,Ce.position.set(N,mt??0,F),Ce.renderOrder=2,i.add(Ce),a.push({mesh:Ce,base:.82+t()*.18,phase:t()*12,speed:t.range(4,14),broken:t.chance(.18)}),Ce},Be=(N,F,W,he,Z=13)=>{let We=$p(he),Le=15,mt=7.5,ct=new at({map:We,transparent:!0,depthWrite:!1,toneMapped:!1,side:Bt}),bt=new ee(new en(Le,mt),ct),oe=0;W===0&&(oe=0),W===1&&(oe=Math.PI),W===2&&(oe=Math.PI/2),W===3&&(oe=-Math.PI/2),bt.rotation.y=oe,bt.position.set(N,Z,F),bt.renderOrder=2,i.add(bt);let Re=new ee(new Ze(Le+.7,mt+.7,.3),new Tt({color:592400,roughness:.4,metalness:.8}));return Re.position.set(N,Z,F),Re.rotation.y=oe,Re.translateZ(-.24),i.add(Re),bt};for(let N of R){let{cx:F,cz:W,i:he,j:Z}=N;if(he===4&&Z===3)continue;let Le=Math.hypot(F,W),mt=Xe(1.35-Le/330,.38,1.2),ct=t.next(),bt=()=>t.int(0,K.length-1),oe=()=>Xe(t.range(45,125)*mt,24,162);if(ct<.1){N.type="park";continue}if(ct<.24){N.type="market";let Re=t.range(6,12);tt(F-3,W-2,36,31,Re,bt(),!1),tt(F+10,W+10,15,15,oe()*.7,bt());let Ce=t.int(0,3);Ce===0&&je(F,W-17.8,1,t.range(9,13),!1,null,null,7),Ce===1&&je(F,W+17.8,0,t.range(9,13),!1,null,null,7),Ce===2&&je(F-17.8,W,3,t.range(9,13),!1,null,null,7),Ce===3&&je(F+17.8,W,2,t.range(9,13),!1,null,null,7)}else if(ct<.44){N.type="twin";let Re=t.range(16,21),Ce=t.range(17,24),nt=t.range(15,20),Nt=t.range(15,21);tt(F-9,W-7,Re,Ce,oe(),bt()),tt(F+9,W+9,nt,Nt,oe()*t.range(.65,1),bt())}else if(ct<.68){N.type="podium";let Re=t.range(7,15);tt(F,W,38,33,Re,bt(),!1),tt(F+t.range(-3,3),W+t.range(-3,3),t.range(18,24),t.range(18,24),oe()+Re,bt(),!1),Be(F,W+17.2,0,t.int(0,3),t.range(9,15))}else{N.type="single";let Re=t.range(26,37),Ce=t.range(25,36),nt=oe()*t.range(.9,1.3);if(tt(F+t.range(-2,2),W+t.range(-2,2),Re,Ce,nt,bt()),t.chance(.75)){let Nt=t.chance(.35),St=t.int(0,3),ut=Nt?t.range(3,5):t.range(9,16),Et=Xe(nt*t.range(.3,.75),8,nt-2);St===0&&je(F,W+Ce/2+.2,0,ut,Nt,null,null,Et),St===1&&je(F,W-Ce/2-.2,1,ut,Nt,null,null,Et),St===2&&je(F+Re/2+.2,W,2,ut,Nt,null,null,Et),St===3&&je(F-Re/2-.2,W,3,ut,Nt,null,null,Et)}}if(ct>=.24&&t.chance(.25)){let Re=t.int(0,3),Ce=t.range(5,9),nt=[W+20.5,W-20.5,F+20.5,F-20.5];Re===0&&je(F+4,nt[0],0,Ce,!1,null,null,4.5),Re===1&&je(F-4,nt[1],1,Ce,!1,null,null,4.5),Re===2&&je(nt[2],W-4,2,Ce,!1,null,null,4.5),Re===3&&je(nt[3],W+4,3,Ce,!1,null,null,4.5)}}if(ve.forEach((N,F)=>{if(!N.length)return;let W=Un(N,!1),he=new ee(W,K[F]);i.add(he),N.forEach(Z=>Z.dispose())}),Ye.length){let N=Un(Ye,!1);i.add(new ee(N,be)),Ye.forEach(F=>F.dispose())}if(Rt.length){let N=Un(Rt,!1);i.add(new ee(N,Ie)),Rt.forEach(F=>F.dispose())}Ve.forEach((N,F)=>{if(!N.length)return;let W=Un(N,!1);i.add(new ee(W,He[F])),N.forEach(he=>he.dispose())});let Qe=60,_t=0;{u(Qe,_t,30,30);let W=new Tt({color:1316389,roughness:.35,metalness:.8,envMapIntensity:.9}),he=new at({color:5369087,toneMapped:!1}),Z=new Dt;Z.position.set(Qe,0,_t),i.add(Z);let We=[{w:30,h:22,d:30},{w:24,h:42,d:24},{w:18,h:54,d:18},{w:12,h:42,d:12},{w:6.5,h:22,d:6.5}],Le=0;for(let ut=0;ut<We.length;ut+=1){let Et=We[ut],Nr=new Ze(Et.w,Et.h,Et.d);Kp(Nr,Et.w,Et.h,Et.d,14,24);let yd=new ee(Nr,new Tt({map:Ue[4].map,emissiveMap:Ue[4].emissiveMap,emissive:16777215,emissiveIntensity:1.05,color:9278378,roughness:.4,metalness:.72,envMapIntensity:1}));if(yd.position.y=Le+Et.h/2,Z.add(yd),ut<We.length-1){let _d=new ee(new Ze(Et.w+1.2,.6,Et.d+1.2),he);_d.position.y=Le+Et.h,Z.add(_d)}Le+=Et.h}let mt=new ee(new Gt(.2,.55,34,6),Ie);mt.position.y=Le+16,Z.add(mt);let ct=new ee(new mn(.55,10,8),new at({color:16729981,toneMapped:!1}));ct.position.y=Le+33,Z.add(ct),fc(Z,rn("#ff477d"),16729981,new P(0,Le+33,0),9,.9);let bt=new at({color:4387839,transparent:!0,opacity:.5,blending:lt,side:Bt,depthWrite:!1,toneMapped:!1});for(let ut=0;ut<3;ut+=1){let Et=new ee(new Cn(18+ut*7,.11,4,100),bt);Et.rotation.x=Math.PI/2,Et.position.y=42+ut*20,Et.userData.speed=(ut%2===0?1:-1)*(.05+ut*.02),Et.userData.bob=ut*2,Z.add(Et),l.push(Et)}let oe=new ee(new Ze(.45,130,.45),he);oe.position.set(0,85,16.4),Z.add(oe);let Re=fu(32,"NOVA","#53f3ff",!0),Ce=new ee(new en(7,23),new at({map:Re,transparent:!0,blending:lt,depthWrite:!1,toneMapped:!1,side:Bt}));Ce.position.set(0,48,16.6),Z.add(Ce),fc(Z,rn("#42f3ff"),4387839,new P(0,40,17),20,.24);let nt=new at({color:7330047,transparent:!0,opacity:.035,blending:lt,side:Bt,depthWrite:!1,fog:!1}),Nt=new ps(20,170,32,1,!0);Nt.translate(0,-85,0);let St=new ee(Nt,nt);St.position.set(18,160,0),St.rotation.z=-.35,Z.add(St),fc(Z,rn("#5ee8ff"),6220031,new P(0,168,0),30,.4)}{let N=new at({color:4716031,transparent:!0,opacity:.5,side:Bt,depthWrite:!1,blending:lt,toneMapped:!1});for(let[ct,bt]of[[11,.16],[20,.1],[26.5,.2]]){let oe=new ee(new Xi(ct-bt,ct,96),N);oe.rotation.x=-Math.PI/2,oe.position.y=.19,i.add(oe)}let F=new ee(new Gt(4.2,5.2,1.1,48),new Tt({color:922144,roughness:.25,metalness:.9,envMapIntensity:1.4}));F.position.set(0,.7,13),i.add(F),u(0,13,10,10);let W=new at({color:5631999,transparent:!0,opacity:.58,blending:lt,depthWrite:!1,wireframe:!0,toneMapped:!1}),he=new ee(new ms(3.3,0),W);he.position.set(0,6.3,13),he.userData.isHolo=!0,i.add(he),l.push(he);let Z=fc(i,rn("#39eeff"),3796735,new P(0,6.3,13),16,.3);Z.userData.isHoloGlow=!0,i.userData.holoGlow=Z,l.push(Z);let We=new Gt(4.2,4.2,24,32,1,!0),Le=new at({color:3732735,transparent:!0,opacity:.055,side:Bt,depthWrite:!1,blending:lt}),mt=new ee(We,Le);mt.position.set(0,12,13),i.add(mt),i.userData.plazaBeam=mt}let It=[];for(let N of R)if(N.type==="park")for(let F=0;F<9;F+=1)It.push({x:N.cx+t.range(-18,18),z:N.cz+t.range(-18,18),s:t.range(.8,1.4)});for(let N of R)N.type!=="park"&&t.chance(.45)&&It.push({x:N.cx+(t.chance(.5)?-20.2:20.2),z:N.cz+t.range(-14,14),s:t.range(.75,1.15)});for(let N of[[-23,-19],[23,-19],[-24,20],[24,20],[-16,24],[16,24]])It.push({x:N[0],z:N[1],s:.95});let it=new Gt(.15,.24,4.5,6),zt=new Tt({color:2760737,roughness:.92}),vt=new wn(it,zt,It.length),Lt=new Wi(2.2,1),$t=new Tt({color:1854534,roughness:.82,metalness:.1,emissive:861987,emissiveIntensity:.6}),jt=new wn(Lt,$t,It.length*2),L=new Yt;It.forEach((N,F)=>{L.position.set(N.x,2.2*N.s,N.z),L.scale.set(N.s,N.s,N.s),L.rotation.y=t()*Mt,L.updateMatrix(),vt.setMatrixAt(F,L.matrix);for(let W=0;W<2;W+=1){L.position.set(N.x+(W===0?0:.8*N.s)*(t()-.5),4.3*N.s+W*1.1*N.s,N.z+(t()-.5)*.8);let he=N.s*(W===0?1:.68);L.scale.set(he,he*1.15,he),L.rotation.y=t()*Mt,L.updateMatrix(),jt.setMatrixAt(F*2+W,L.matrix)}}),vt.instanceMatrix.needsUpdate=!0,jt.instanceMatrix.needsUpdate=!0,i.add(vt,jt);let Xt=[];for(let N of Qi)for(let F=-195;F<=195;F+=39)Xt.push({x:N+8.8,z:F}),Xt.push({x:N-8.8,z:F+19.5});for(let N of Qi)for(let F=-176;F<=176;F+=39)Xt.push({x:F+9.5,z:N+8.8}),Xt.push({x:F+28.5,z:N-8.8});let Ot=new Gt(.07,.12,5.8,6);Ot.translate(0,2.9,0);let Ft=new Tt({color:1448484,roughness:.55,metalness:.7}),Se=new wn(Ot,Ft,Xt.length),Wt=new Ze(.5,.16,1.5);Wt.translate(0,5.78,0);let qe=new wn(Wt,new at({color:16765344,toneMapped:!1}),Xt.length),Je=[],C=new en(9,9);C.rotateX(-Math.PI/2);let v=new wn(C,new at({map:rn("#ffae70"),transparent:!0,opacity:.22,blending:lt,depthWrite:!1,toneMapped:!1}),Xt.length);Xt.forEach((N,F)=>{L.position.set(N.x,0,N.z),L.rotation.set(0,0,0),L.scale.set(1,1,1),L.updateMatrix(),Se.setMatrixAt(F,L.matrix),qe.setMatrixAt(F,L.matrix),L.position.set(N.x,.03,N.z),L.updateMatrix(),v.setMatrixAt(F,L.matrix),Je.push(N.x,5.7,N.z)}),[Se,qe,v].forEach(N=>{N.instanceMatrix.needsUpdate=!0,i.add(N)});let G=new At;G.setAttribute("position",new ot(Je,3));let ae=new ri(G,new Gi({size:2.1,map:rn("#ffb27b"),color:16757371,transparent:!0,opacity:.6,depthWrite:!1,blending:lt,sizeAttenuation:!0}));i.add(ae);let ie=new at({color:3929343,transparent:!0,opacity:.08,blending:lt,depthWrite:!1,side:Bt,toneMapped:!1});for(let N=0;N<26;N+=1){let F=new ee(new en(t.range(3,9),t.range(10,26)),ie.clone());F.material.color.setHex(pu[N%pu.length]),F.rotation.x=-Math.PI/2,F.rotation.z=t()*Mt,F.position.set(t.range(-200,200),.115,t.range(-200,200)),i.add(F)}let fe=new Tt({color:461588,roughness:.04,metalness:1,transparent:!0,opacity:.9,envMapIntensity:1.8,depthWrite:!1});for(let N=0;N<46;N+=1){let F=t.range(2.5,11),W=t.range(1.2,5),he=new ee(new fs(1,20),fe);he.scale.set(F,W,1),he.rotation.x=-Math.PI/2,he.rotation.z=t()*Mt,he.position.set(t.range(-205,205),.12,t.range(-205,205)),he.renderOrder=1,i.add(he)}let ye=new Ze(2.8,.8,2.8),j=new Tt({color:1843241,roughness:.7,metalness:.25}),Q=new Wi(1.1,1),de=[];for(let N of[0,1,2,3]){let F=N*Math.PI/2+Math.PI/4;de.push({x:Math.cos(F)*24.5,z:Math.sin(F)*24.5})}for(let N=0;N<26;N+=1){let F=t.pick(R);!F||F.type==="park"||de.push({x:F.cx+(t.chance(.5)?-20:20),z:F.cz+t.range(-16,16)})}let D=new wn(ye,j,de.length),te=new wn(Q,$t,de.length);de.forEach((N,F)=>{L.position.set(N.x,.4,N.z),L.rotation.set(0,t()*Mt,0),L.scale.set(1,1,1),L.updateMatrix(),D.setMatrixAt(F,L.matrix),L.position.set(N.x,1.45,N.z),L.scale.set(.9,.75,.9),L.updateMatrix(),te.setMatrixAt(F,L.matrix)}),i.add(D,te);let J=new Ze(4,.22,1.1),ge=new Ze(.18,.6,.8),ue=[];for(let N of[-6,6])for(let F of[-18,25]){let W=J.clone();W.translate(N,.65,F),ue.push(W);for(let he of[-1.6,1.6]){let Z=ge.clone();Z.translate(N+he,.3,F),ue.push(Z)}}let pe=new ee(Un(ue,!1),new Tt({color:2369070,roughness:.5,metalness:.5}));i.add(pe),ue.forEach(N=>N.dispose());let ze=[];for(let N=0;N<110;N+=1){let F=t()*Mt,W=t.range(250,470),he=t.range(15,55),Z=t.range(15,55),We=t.range(40,210),Le=new Ze(he,We,Z);Le.translate(Math.cos(F)*W,We/2-2,Math.sin(F)*W),ze.push(Le)}let rt=new ee(Un(ze,!1),new Tt({color:592918,roughness:.92,metalness:.25,emissive:527128,emissiveIntensity:.65}));i.add(rt),ze.forEach(N=>N.dispose());let ce=[];for(let N=0;N<70;N+=1){let F=t()*Mt,W=t.range(260,450);ce.push(Math.cos(F)*W,t.range(40,190),Math.sin(F)*W)}let Ge=new At;Ge.setAttribute("position",new ot(ce,3));let st=new ri(Ge,new Gi({color:16751462,size:1.2,map:rn("#ff9b66"),transparent:!0,opacity:.5,depthWrite:!1,blending:lt,sizeAttenuation:!0}));i.add(st);let Me=new Dt;for(let N=0;N<2;N+=1){let F=new ps(18,180,28,1,!0);F.translate(0,-90,0);let W=new ee(F,new at({color:N?16727710:4516351,transparent:!0,opacity:.03,depthWrite:!1,side:Bt,blending:lt,fog:!1}));W.position.set(N?-130:160,170,N?120:-90),W.rotation.z=N?.35:-.3,Me.add(W)}i.add(Me);let wt=[2370104,3024435,1648172,3810344,1908264,3158074],Zt=N=>{let F=new Dt,W=new Tt({color:N,roughness:.28,metalness:.7,envMapIntensity:1.2}),he=new ee(new Ze(1.85,.55,4.2),W);he.position.y=.62,F.add(he);let Z=new ee(new Ze(1.5,.5,1.9),new Tt({color:659740,roughness:.12,metalness:.6}));Z.position.set(0,1.05,-.2),F.add(Z);let We=new Gt(.34,.34,.25,10);We.rotateZ(Math.PI/2);let Le=new Tt({color:526604,roughness:.9});for(let[bt,oe]of[[-.92,1.35],[.92,1.35],[-.92,-1.35],[.92,-1.35]]){let Re=new ee(We,Le);Re.position.set(bt,.34,oe),F.add(Re)}let mt=new at({color:16773328,toneMapped:!1});for(let bt of[-.62,.62]){let oe=new ee(new Ze(.38,.13,.06),mt);oe.position.set(bt,.68,2.11),F.add(oe)}let ct=new ee(new Ze(1.35,.1,.05),new at({color:16724046,toneMapped:!1}));return ct.position.set(0,.68,-2.11),F.add(ct),i.add(F),F};for(let N=0;N<10;N+=1){let F=N%2===0?"x":"z",W=Qi[(N*3+1)%Qi.length],he=N%4<2?1:-1,Z=he*4.2,We=Zt(wt[N%wt.length]),Le=-190+N*47%380,mt=t.range(8,14);r.push({mesh:We,axis:F,line:W,dir:he,lane:Z,start:Le,speed:mt,t:Le}),We.rotation.y=F==="x"?he>0?Math.PI/2:-Math.PI/2:he>0?0:Math.PI}let Zn=Un([new Ze(.46,.85,.28).translate(0,1.05,0),new Ze(.16,.55,.2).translate(-.13,.35,0),new Ze(.16,.55,.2).translate(.13,.35,0),new Ze(.13,.65,.16).translate(-.31,1.02,0),new Ze(.13,.65,.16).translate(.31,1.02,0)],!1),ss=32,fi=new wn(Zn,new Tt({color:16777215,roughness:.88,metalness:.05}),ss),rs=new wn(new mn(.16,8,6),new Tt({color:16777215,roughness:.75}),ss),ea=new ps(.55,.24,10),Di=new wn(ea,new Tt({color:16777215,roughness:.5,metalness:.2}),ss),Jn=[3488333,4926786,1915974,4470564,2368570,4144966,2241838],Ir=[16723349,3205375,16757837,10120191,1711144,3817808],Lr=[14265226,10382415,7293752,15780006,12223074],ta=R.filter(N=>N.type&&N.type!=="park");for(let N=0;N<ss;N+=1){let F=t.pick(ta);o.push({cx:F.cx,cz:F.cz,angle:t()*Mt,radius:t.range(17.2,20.4),speed:t.range(.35,.85)*(t.chance(.5)?1:-1),color:t.pick(Jn),umbrella:t.chance(.55),umbrellaColor:t.pick(Ir),skin:t.pick(Lr),phase:t()*Mt,scale:t.range(.88,1.08)}),fi.setColorAt(N,new Ne(t.pick(Jn))),rs.setColorAt(N,new Ne(t.pick(Lr))),Di.setColorAt(N,new Ne(o[N].umbrellaColor))}fi.instanceColor.needsUpdate=!0,rs.instanceColor.needsUpdate=!0,Di.instanceColor.needsUpdate=!0,i.add(fi,rs,Di);let Ni=1500,Kn=new Float32Array(Ni*6),Ls=new Float32Array(Ni*2);for(let N=0;N<Ni;N+=1){let F=(t()-.5)*74,W=(t()-.5)*74,he=t()*34,Z=.6+t()*1.4;Kn[N*6]=F,Kn[N*6+1]=he,Kn[N*6+2]=W,Kn[N*6+3]=F+.08,Kn[N*6+4]=he+Z,Kn[N*6+5]=W;let We=17+t()*12;Ls[N*2]=We,Ls[N*2+1]=We}let pi=new At;pi.setAttribute("position",new Ut(Kn,3)),pi.setAttribute("aSpeed",new Ut(Ls,1));let os=new Vt({transparent:!0,depthWrite:!1,blending:lt,uniforms:{uTime:{value:0},uAlpha:{value:1}},vertexShader:`
      attribute float aSpeed;
      uniform float uTime;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        p.y = mod(p.y - uTime * aSpeed, 34.0);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vAlpha = smoothstep(0.0, 4.0, p.y) * (1.0 - smoothstep(26.0, 34.0, p.y));
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      varying float vAlpha;
      uniform float uAlpha;
      void main() {
        gl_FragColor = vec4(0.57, 0.75, 0.95, 0.30 * vAlpha * uAlpha);
      }
    `}),mi=new ds(pi,os);mi.frustumCulled=!1,i.add(mi);let Ds=900,Ns=new Float32Array(Ds*3),na=new Float32Array(Ds);for(let N=0;N<Ds;N+=1)Ns[N*3]=(t()-.5)*88,Ns[N*3+1]=t()*30,Ns[N*3+2]=(t()-.5)*88,na[N]=1.1+t()*2.1;let Dr=new At;Dr.setAttribute("position",new Ut(Ns,3)),Dr.setAttribute("aSpeed",new Ut(na,1));let Ui=new Vt({transparent:!0,depthWrite:!1,blending:Ji,uniforms:{uTime:{value:0},uAlpha:{value:0}},vertexShader:`
      attribute float aSpeed;
      uniform float uTime;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        p.y = mod(p.y - uTime * aSpeed, 30.0);
        p.x += sin(uTime * 0.5 + p.z * 0.15 + p.y * 0.4) * 1.1;
        p.z += cos(uTime * 0.35 + p.x * 0.12) * 0.6;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = clamp(110.0 / max(1.0, -mv.z), 1.0, 5.5);
        vAlpha = smoothstep(0.0, 3.0, p.y) * (1.0 - smoothstep(24.0, 30.0, p.y));
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform float uAlpha;
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        float a = smoothstep(0.5, 0.12, d) * vAlpha * uAlpha * 0.9;
        if (a < 0.01) discard;
        gl_FragColor = vec4(0.86, 0.92, 1.0, a);
      }
    `}),M=new ri(Dr,Ui);M.frustumCulled=!1,i.add(M);let O=[];for(let N of R)if(!(!N.type||N.type==="park"))for(let[F,W]of[[20.2,6],[-20.2,-6],[6,20.2],[-6,-20.2]]){let he=N.cx+F,Z=N.cz+W;s.some(Le=>he>Le.minX-1.8&&he<Le.maxX+1.8&&Z>Le.minZ-1.8&&Z<Le.maxZ+1.8)||Math.hypot(he,Z)<48||O.push({x:he,z:Z,name:Jp[(N.i+N.j*3)%Jp.length]})}let $=[],H=O.sort(()=>t.next()-.5);for(let N of H)if($.every(F=>Math.hypot(F.x-N.x,F.z-N.z)>58)&&$.push(N),$.length>=9)break;for(;$.length<3;)$.push({x:-40+$.length*38,z:40,name:"NIGHT MARKET"});let V=[{x:7,z:-34,rot:Math.PI/2,color:2156287},{x:34,z:9,rot:0,color:16723349},{x:-34,z:-12,rot:Math.PI,color:16757837},{x:-9,z:66,rot:-Math.PI/2,color:11037695},{x:106,z:-34,rot:Math.PI/2,color:7077816}],_e={bounds:Fo.bounds,blocks:R,roads:Qi},Ae=new Dt;Ae.position.set(c.x,.16,c.z);let me=new ee(new Xi(5.6,7,80),new at({color:4585215,transparent:!0,opacity:.7,side:Bt,depthWrite:!1,blending:lt,toneMapped:!1}));me.rotation.x=-Math.PI/2,Ae.add(me);let Te=new ee(new Gt(4.2,6.4,40,40,1,!0),new at({color:4387839,transparent:!0,opacity:.08,side:Bt,depthWrite:!1,blending:lt,toneMapped:!1}));Te.position.y=20,Ae.add(Te);let Oe=new Ln(new Tn({map:rn("#42f3ff"),transparent:!0,opacity:.8,blending:lt,depthWrite:!1,toneMapped:!1}));Oe.position.y=1.2,Oe.scale.set(18,18,1),Ae.add(Oe),Ae.visible=!1,i.add(Ae);let xe={kind:"rain",preset:mu("rain"),rainAmount:1,snowAmount:0,stars:.85,moon:.95,hemi:.85,moonlight:1.15,flash:0,nextStrike:4+Math.random()*6};function dt(N,F=!1){let W=mu(N);return xe.kind=W.id,xe.preset=W,F&&(xe.rainAmount=W.rain,xe.snowAmount=W.snow,xe.stars=W.stars,xe.moon=W.moon,xe.hemi=W.hemi,xe.moonlight=W.moonlight,xe.flash=0,xe.nextStrike=4+Math.random()*6,i.fog.density=W.fogDensity,i.fog.color.copy(W.fogTint),T.skyMat.uniforms.topColor.value.copy(W.skyColors[0]),T.skyMat.uniforms.midColor.value.copy(W.skyColors[1]),T.skyMat.uniforms.horizonColor.value.copy(W.skyColors[2]),T.skyMat.uniforms.glowColor.value.copy(W.skyColors[3]),T.stars.material.opacity=Xe(W.stars*.9,.02,1),T.moon.material.opacity=Xe(W.moon,.05,1),T.moonCore.material.opacity=Xe(W.moon*.95,.05,1),d.intensity=W.hemi,f.intensity=W.moonlight,os.uniforms.uAlpha.value=W.rain,Ui.uniforms.uAlpha.value=W.snow),W}let Pe={colliders:s,shardSites:$,carSpawns:V,traffic:r,pedestrians:o,extraction:c,extractionGroup:Ae,spawn:h,metro:_e,animatedRings:l,scene:i,flickerSigns:a,searchlights:Me,rain:mi,rainMat:os,snow:M,snowMat:Ui,dummy:L,weather:xe,weatherList:pc,setWeather:dt,getWeatherPreset:mu,elapsed:0,quality:1,low:!1,update:ft};function ft(N,F,W,he){Pe.elapsed=F;let Z=xe.preset,We=1-Math.exp(-1.6*N);xe.rainAmount+=(Z.rain-xe.rainAmount)*We,xe.snowAmount+=(Z.snow-xe.snowAmount)*We,xe.stars+=(Z.stars-xe.stars)*We,xe.moon+=(Z.moon-xe.moon)*We,xe.hemi+=(Z.hemi-xe.hemi)*We,xe.moonlight+=(Z.moonlight-xe.moonlight)*We,i.fog.density+=(Z.fogDensity-i.fog.density)*We,i.fog.color.lerp(Z.fogTint,We),T.skyMat.uniforms.topColor.value.lerp(Z.skyColors[0],We),T.skyMat.uniforms.midColor.value.lerp(Z.skyColors[1],We),T.skyMat.uniforms.horizonColor.value.lerp(Z.skyColors[2],We),T.skyMat.uniforms.glowColor.value.lerp(Z.skyColors[3],We),T.stars.material.opacity=Xe(xe.stars*.9,.02,1),T.moon.material.opacity=Xe(xe.moon,.05,1),T.moonCore.material.opacity=Xe(xe.moon*.95,.05,1),Z.lightning&&(xe.nextStrike-=N,xe.nextStrike<=0&&(xe.flash=1,xe.nextStrike=3.5+Math.random()*7)),xe.flash=Math.max(0,xe.flash-N*2.6);let Le=xe.flash*(.55+.45*Math.sin(F*47));d.intensity=xe.hemi+Le*.9,f.intensity=xe.moonlight+Le*1.8,T.skyMat.uniforms.uFlash.value=Le,os.uniforms.uTime.value=F,os.uniforms.uAlpha.value=xe.rainAmount,mi.position.x=W.x,mi.position.z=W.z,mi.visible=!!Pe.quality&&xe.rainAmount>.02,Ui.uniforms.uTime.value=F,Ui.uniforms.uAlpha.value=xe.snowAmount,M.position.x=W.x,M.position.z=W.z,M.visible=!!Pe.quality&&xe.snowAmount>.02;let mt=Pe.low?.55:1;ae.material.opacity=.6*mt,Me.children.forEach((oe,Re)=>{oe.rotation.z=(Re?.3:-.3)+Math.sin(F*.08+Re*2)*.26,oe.material.opacity=(Pe.low?.014:.03)*(.75+Math.sin(F*.35+Re)*.25)}),l.forEach(oe=>{oe.userData.isHolo?(oe.rotation.y+=N*.55,oe.rotation.x+=N*.22,oe.position.y=6.3+Math.sin(F*1.3)*.35):oe.userData.isHoloGlow?(oe.position.y=6.3+Math.sin(F*1.3)*.35,oe.material.opacity=.24+Math.sin(F*2.2)*.07):(oe.rotation.z+=N*oe.userData.speed,oe.position.y+=Math.sin(F*.8+oe.userData.bob)*N*.12)});let ct=i.userData.holoGlow;ct&&(ct.position.y=6.3+Math.sin(F*1.3)*.35);let bt=i.userData.plazaBeam;bt&&(bt.material.opacity=.04+Math.sin(F*1.2)*.012),Ae.visible&&(me.rotation.z+=N*.35,Oe.material.opacity=.55+Math.sin(F*2.4)*.18,Te.material.opacity=.05+Math.sin(F*1.8)*.018),a.forEach(oe=>{let Re=Math.sin(F*oe.speed+oe.phase);oe.mesh.material.opacity=oe.base*(.85+Re*.15),oe.broken&&Math.sin(F*21+oe.phase)>.92&&(oe.mesh.material.opacity*=.15)});for(let oe of r){let Re=oe.speed;if(W){let Ce=0;oe.axis==="x"?(Ce=(W.x-oe.t)*oe.dir,Ce>0&&Ce<13&&Math.abs(W.z-(oe.line+oe.lane))<4.5&&(Re=0)):(Ce=(W.z-oe.t)*oe.dir,Ce>0&&Ce<13&&Math.abs(W.x-(oe.line+oe.lane))<4.5&&(Re=0))}oe.t+=Re*oe.dir*N,oe.t>215&&(oe.t=-215),oe.t<-215&&(oe.t=215),oe.axis==="x"?oe.mesh.position.set(oe.t,.02,oe.line+oe.lane):oe.mesh.position.set(oe.line+oe.lane,.02,oe.t)}for(let oe=0;oe<o.length;oe+=1){let Re=o[oe];Re.angle+=Re.speed/Re.radius*N;let Ce=Re.cx+Math.cos(Re.angle)*Re.radius,nt=Re.cz+Math.sin(Re.angle)*Re.radius,Nt=Math.sin(Re.angle*10+Re.phase)*.035;L.position.set(Ce,.2+Nt,nt),L.rotation.set(0,-Re.angle+(Re.speed>0?Math.PI/2:-Math.PI/2),0),L.scale.setScalar(Re.scale),L.updateMatrix(),fi.setMatrixAt(oe,L.matrix),L.position.y=1.86*Re.scale+Nt,L.scale.setScalar(Re.scale),L.updateMatrix(),rs.setMatrixAt(oe,L.matrix),L.position.set(Ce,(Re.umbrella?2.45:0)*Re.scale+Nt,nt),L.rotation.set(Re.umbrella?.12:0,0,Re.umbrella?.1:0),L.scale.setScalar(Re.scale),L.updateMatrix(),Di.setMatrixAt(oe,L.matrix)}fi.instanceMatrix.needsUpdate=!0,rs.instanceMatrix.needsUpdate=!0,Di.instanceMatrix.needsUpdate=!0}return Pe}var Fo,Qi,pu,Jp,pc,Rv,Qp=xt(()=>{cn();du();dc();Ii();Fo={cell:60,grid:7,blockHalf:22,bounds:218,roadWidth:16},Qi=[-210,-150,-90,-30,30,90,150,210],pu=[3732991,16723349,11037695,16757837,7077816],Jp=["KANTO","ORBITAL","AURORA","HELIX","ECHO","VANTA","NEXUS","CHROME"],pc=[{id:"rain",label:"RAIN",tagline:"NEON RAIN",fogColor:461590,fogDensity:.0042,sky:["#02040a","#0a0d20","#241a3d","#432260"],rain:1,snow:0,stars:.85,moon:.95,hemi:.85,moonlight:1.15,lightning:!1},{id:"clear",label:"CLEAR",tagline:"CLEAR SKIES",fogColor:660004,fogDensity:.0021,sky:["#01030b","#071228","#1c2f55","#314a78"],rain:0,snow:0,stars:1,moon:1,hemi:1.05,moonlight:1.4,lightning:!1},{id:"fog",label:"FOG",tagline:"DENSE FOG",fogColor:1186344,fogDensity:.0125,sky:["#05070e","#0d1320","#242c3c","#39435a"],rain:.1,snow:0,stars:.08,moon:.3,hemi:.7,moonlight:.7,lightning:!1},{id:"storm",label:"STORM",tagline:"ELECTRIC STORM",fogColor:329487,fogDensity:.0072,sky:["#010208","#05070f","#111521","#1c2333"],rain:1.7,snow:0,stars:.04,moon:.18,hemi:.55,moonlight:.55,lightning:!0},{id:"snow",label:"SNOW",tagline:"SILENT SNOW",fogColor:725536,fogDensity:.0058,sky:["#02040c","#0b1226","#28324c","#465270"],rain:0,snow:1,stars:.35,moon:.7,hemi:.9,moonlight:1.2,lightning:!1}];for(let i of pc)i.skyColors=i.sky.map(e=>new Ne(e)),i.fogTint=new Ne(i.fogColor);Rv=new Map(pc.map(i=>[i.id,i]))});var Ts,mc,em=xt(()=>{cn();dc();Ii();Ts=900,mc=class{constructor(e){this.scene=e,this.particles=[],this.particleCursor=0,this.particlePositions=new Float32Array(Ts*3),this.particleColors=new Float32Array(Ts*3),this.particleSizes=new Float32Array(Ts),this.particleAlphas=new Float32Array(Ts),this.tmpColor=new Ne;let t=new At;t.setAttribute("position",new Ut(this.particlePositions,3)),t.setAttribute("aColor",new Ut(this.particleColors,3)),t.setAttribute("aSize",new Ut(this.particleSizes,1)),t.setAttribute("aAlpha",new Ut(this.particleAlphas,1)),this.particleGeo=t,this.particleTex=rn("#ffffff"),this.particleMat=new Vt({transparent:!0,depthWrite:!1,blending:lt,uniforms:{uMap:{value:this.particleTex},uScale:{value:700}},vertexShader:`
        attribute vec3 aColor;
        attribute float aSize;
        attribute float aAlpha;
        uniform float uScale;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vColor = aColor;
          vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = clamp(aSize * uScale / max(1.0, -mv.z), 0.0, 96.0);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform sampler2D uMap;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec4 tex = texture2D(uMap, gl_PointCoord);
          gl_FragColor = vec4(vColor, tex.a * vAlpha);
        }
      `}),this.particlePoints=new ri(t,this.particleMat),this.particlePoints.frustumCulled=!1,this.particlePoints.renderOrder=4,e.add(this.particlePoints);for(let s=0;s<Ts;s+=1)this.particles.push({alive:!1,x:0,y:-999,z:0,vx:0,vy:0,vz:0,life:0,maxLife:1,size:1,drag:0,gravity:0,endSize:0,r:1,g:1,b:1}),this.particleAlphas[s]=0;this.particleGeo.attributes.position.needsUpdate=!0,this.particleGeo.attributes.aColor.needsUpdate=!0,this.particleGeo.attributes.aSize.needsUpdate=!0,this.particleGeo.attributes.aAlpha.needsUpdate=!0,this.tracerCount=20,this.tracers=[],this.tracerPositions=new Float32Array(this.tracerCount*6),this.tracerColors=new Float32Array(this.tracerCount*6);let n=new At;n.setAttribute("position",new Ut(this.tracerPositions,3)),n.setAttribute("color",new Ut(this.tracerColors,3)),this.tracerGeo=n,this.tracerLines=new ds(n,new lr({vertexColors:!0,transparent:!0,opacity:1,blending:lt,depthWrite:!1,toneMapped:!1})),this.tracerLines.frustumCulled=!1,this.tracerLines.renderOrder=4,e.add(this.tracerLines);for(let s=0;s<this.tracerCount;s+=1)this.tracers.push({life:0,maxLife:.1,r:1,g:1,b:1});this.shockwaves=[],this.flashes=[],this.time=0}setViewport(e,t=62){this.particleMat.uniforms.uScale.value=e/(2*Math.tan(t*Math.PI/360))}spawn(e){let t=this.particles[this.particleCursor];this.particleCursor=(this.particleCursor+1)%Ts;let n=e.spread??0,s=Math.random()*Mt,r=Math.random()*n;return t.alive=!0,t.x=e.x+Math.cos(s)*r,t.y=e.y+(Math.random()-.5)*(e.spreadY??0),t.z=e.z+Math.sin(s)*r,t.vx=(e.vx??0)+(Math.random()-.5)*(e.vel??0),t.vy=(e.vy??0)+(Math.random()-.3)*(e.vel??0),t.vz=(e.vz??0)+(Math.random()-.5)*(e.vel??0),t.life=e.life??.6,t.maxLife=t.life,t.size=e.size??.5,t.endSize=e.endSize??t.size*.2,t.gravity=e.gravity??0,t.drag=e.drag??.96,this.tmpColor.set(e.color??16777215),t.r=this.tmpColor.r,t.g=this.tmpColor.g,t.b=this.tmpColor.b,t}muzzleFlash(e,t=16769955,n=null){for(let s=0;s<5;s+=1)this.spawn({x:e.x,y:e.y,z:e.z,vx:n?n.x*2.5:0,vy:n?n.y*2.5+.2:.4,vz:n?n.z*2.5:0,vel:1.4,life:.09+Math.random()*.06,size:.45+Math.random()*.25,endSize:.1,color:t,drag:.8});this.spawn({x:e.x,y:e.y,z:e.z,life:.08,size:1.15,endSize:.2,color:t})}bulletImpact(e,t,n=10480383){let s=t||new P(0,1,0);for(let r=0;r<8;r+=1)this.spawn({x:e.x,y:e.y,z:e.z,vx:s.x*2.2+(Math.random()-.5)*4,vy:s.y*2.2+Math.random()*3.4,vz:s.z*2.2+(Math.random()-.5)*4,life:.2+Math.random()*.32,size:.18+Math.random()*.2,endSize:0,color:n,gravity:9,drag:.95});this.spawn({x:e.x,y:e.y,z:e.z,life:.1,size:.7,endSize:.1,color:n})}enemyHit(e,t=16738901){for(let n=0;n<10;n+=1)this.spawn({x:e.x,y:e.y,z:e.z,vel:5,life:.22+Math.random()*.3,size:.14+Math.random()*.2,endSize:0,color:t,gravity:5})}explosion(e,t=16734781,n=1){for(let s=0;s<46;s+=1)this.spawn({x:e.x,y:e.y,z:e.z,vel:9*n,vy:4,life:.5+Math.random()*.7,size:.6+Math.random()*1.4,endSize:.1,color:s%3===0?16769184:t,gravity:5,drag:.94});for(let s=0;s<12;s+=1)this.spawn({x:e.x,y:e.y,z:e.z,vel:3,vy:2,life:1+Math.random()*.8,size:1.5+Math.random()*2,endSize:4,color:1645350,gravity:-.3,drag:.97});this.spawnShockwave(e,t,3*n,.6),this.flash(e,t,18*n,.22)}pickup(e,t=5240319){for(let n=0;n<36;n+=1){let s=Math.random()*Mt,r=.5+Math.random()*1.4;this.spawn({x:e.x+Math.cos(s)*r,y:e.y-1+Math.random()*2,z:e.z+Math.sin(s)*r,vx:Math.cos(s)*5,vy:1+Math.random()*5,vz:Math.sin(s)*5,life:.5+Math.random()*.7,size:.2+Math.random()*.35,endSize:0,color:n%4===0?16777215:t,gravity:2,drag:.94})}this.spawnShockwave(new P(e.x,.25,e.z),t,6,.8),this.flash(new P(e.x,e.y,e.z),t,16,.35)}exitCar(e){for(let t=0;t<10;t+=1)this.spawn({x:e.x,y:.2,z:e.z,vel:1.4,life:.3,size:.3,endSize:0,color:7234170})}drift(e,t=1){this.spawn({x:e.x,y:.22+Math.random()*.2,z:e.z,vx:(Math.random()-.5)*1.6,vy:.25+Math.random()*.45,vz:(Math.random()-.5)*1.6,vel:.8,life:.5+Math.random()*.6,size:(.7+Math.random()*.7)*t,endSize:1.8*t,color:9476008,drag:.94,gravity:-.2})}boostTrail(e,t=3532543){this.spawn({x:e.x+(Math.random()-.5)*.35,y:e.y,z:e.z,vx:(Math.random()-.5)*.7,vy:(Math.random()-.5)*.4,vz:(Math.random()-.5)*.7,life:.2+Math.random()*.2,size:.5+Math.random()*.35,endSize:.05,color:t,drag:.9})}sparkle(e,t=10418175){this.spawn({x:e.x+(Math.random()-.5)*1.5,y:e.y+(Math.random()-.5)*1.5,z:e.z+(Math.random()-.5)*1.5,vy:.3,life:.8+Math.random()*.5,size:.16+Math.random()*.1,endSize:0,color:t,gravity:.2})}tracer(e,t,n=11072255){let s=this.tracers.find(c=>c.life<=0),r=this.tracers.indexOf(s),o=r>=0?r:0,a=this.tracers[o];a.life=.08,a.maxLife=.08,this.tmpColor.set(n),a.r=this.tmpColor.r,a.g=this.tmpColor.g,a.b=this.tmpColor.b;let l=this.tracerPositions;l[o*6]=e.x,l[o*6+1]=e.y,l[o*6+2]=e.z,l[o*6+3]=t.x,l[o*6+4]=t.y,l[o*6+5]=t.z}spawnShockwave(e,t,n=3,s=.6){let r=new ee(new Xi(.5,.75,48),new at({color:t,transparent:!0,opacity:.8,blending:lt,side:Bt,depthWrite:!1,toneMapped:!1}));r.rotation.x=-Math.PI/2,r.position.copy(e),r.position.y=Math.max(.3,e.y),this.scene.add(r),this.shockwaves.push({mesh:r,life:s,maxLife:s,radius:n})}flash(e,t,n=12,s=.25){let r=new Ln(new Tn({map:this.particleTex,color:t,transparent:!0,opacity:.9,blending:lt,depthWrite:!1,toneMapped:!1}));r.position.copy(e),r.scale.set(n,n,1),this.scene.add(r),this.flashes.push({sprite:r,life:s,maxLife:s})}update(e){for(let t=0;t<Ts;t+=1){let n=this.particles[t];if(!n.alive){this.particleAlphas[t]=0;continue}if(n.life-=e,n.life<=0){n.alive=!1,this.particleAlphas[t]=0;continue}n.vx*=n.drag,n.vy=n.vy*n.drag-n.gravity*e,n.vz*=n.drag,n.x+=n.vx*e,n.y+=n.vy*e,n.z+=n.vz*e,n.y<.05&&(n.y=.05,n.vy*=-.3,n.vx*=.7,n.vz*=.7);let s=1-n.life/n.maxLife,r=n.size+(n.endSize-n.size)*s,o=Math.sin(Math.min(1,s)*Math.PI)*.9;this.particlePositions[t*3]=n.x,this.particlePositions[t*3+1]=n.y,this.particlePositions[t*3+2]=n.z,this.particleColors[t*3]=n.r,this.particleColors[t*3+1]=n.g,this.particleColors[t*3+2]=n.b,this.particleSizes[t]=r,this.particleAlphas[t]=o}this.particleGeo.attributes.position.needsUpdate=!0,this.particleGeo.attributes.aColor.needsUpdate=!0,this.particleGeo.attributes.aSize.needsUpdate=!0,this.particleGeo.attributes.aAlpha.needsUpdate=!0;for(let t=0;t<this.tracerCount;t+=1){let n=this.tracers[t];n.life>0&&(n.life-=e);let s=Math.max(0,n.life/Math.max(.001,n.maxLife)),r=t*6;this.tracerColors[r]=n.r*s,this.tracerColors[r+1]=n.g*s,this.tracerColors[r+2]=n.b*s,this.tracerColors[r+3]=n.r*s,this.tracerColors[r+4]=n.g*s,this.tracerColors[r+5]=n.b*s}this.tracerGeo.attributes.position.needsUpdate=!0,this.tracerGeo.attributes.color.needsUpdate=!0;for(let t=this.shockwaves.length-1;t>=0;t-=1){let n=this.shockwaves[t];n.life-=e;let s=1-n.life/n.maxLife,r=1+s*n.radius;n.mesh.scale.set(r,r,1),n.mesh.material.opacity=(1-s)*.7,n.life<=0&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.shockwaves.splice(t,1))}for(let t=this.flashes.length-1;t>=0;t-=1){let n=this.flashes[t];n.life-=e,n.sprite.material.opacity=Math.max(0,n.life/n.maxLife)*.9,n.life<=0&&(this.scene.remove(n.sprite),n.sprite.material.dispose(),this.flashes.splice(t,1))}}}});var gc,tm=xt(()=>{Ii();gc=class{constructor(){this.ctx=null,this.started=!1,this.muted=!1,this.master=null,this.musicGain=null,this.ambientGain=null,this.engineGain=null,this.tireGain=null,this.engineOscA=null,this.engineOscB=null,this.engineFilter=null,this.noiseBuffer=null,this.musicTimer=null,this.nextNoteTime=0,this.step=0,this.lastFootstep=0,this.lastSqueal=0}async start(){if(this.started||this._initializing){this.ctx?.state==="suspended"&&await this.ctx.resume();return}this._initializing=!0;try{let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e({latencyHint:"interactive"}),await this.ctx.resume(),this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.8,this.master.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.16,this.musicGain.connect(this.master),this.ambientGain=this.ctx.createGain(),this.ambientGain.gain.value=.16,this.ambientGain.connect(this.master),this.noiseBuffer=this._makeNoise(2.5),this._buildAmbience(),this._buildEngine(),this._startMusic(),this.setMuted(this.muted),this.started=!0}catch(e){console.warn("Audio failed to start",e),this.started=!1}finally{this._initializing=!1}}setMuted(e){this.muted=e,this.master&&this.ctx&&(this.master.gain.cancelScheduledValues(this.ctx.currentTime),this.master.gain.linearRampToValueAtTime(e?0:.8,this.ctx.currentTime+.12))}_makeNoise(e=1){let t=Math.floor(this.ctx.sampleRate*e),n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),s=n.getChannelData(0);for(let r=0;r<t;r+=1)s[r]=Math.random()*2-1;return n}_noiseSource(e=1){let t=this.ctx.createBufferSource();return t.buffer=this.noiseBuffer,t.loop=!0,t.loopEnd=e,t}_buildAmbience(){let e=this.ctx,t=this._noiseSource(2.5),n=e.createBiquadFilter();n.type="highpass",n.frequency.value=900;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=5400;let r=e.createGain();r.gain.value=.085,t.connect(n).connect(s).connect(r).connect(this.ambientGain),t.start(),this.rainGain=r;let o=this._noiseSource(2.5),a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=160;let l=e.createGain();l.gain.value=.14,o.connect(a).connect(l).connect(this.ambientGain),o.start();for(let m of[43,54.5]){let y=e.createOscillator();y.type="sine",y.frequency.value=m;let g=e.createGain();g.gain.value=.045,y.connect(g).connect(this.ambientGain),y.start()}let c=e.createOscillator();c.type="sine",c.frequency.value=620;let h=e.createOscillator();h.type="sine",h.frequency.value=.09;let u=e.createGain();u.gain.value=90,h.connect(u).connect(c.frequency);let d=e.createGain();d.gain.value=.006;let f=e.createStereoPanner();f.pan.value=.55,c.connect(d).connect(f).connect(this.ambientGain),c.start(),h.start()}_buildEngine(){let e=this.ctx;this.engineFilter=e.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=500,this.engineFilter.Q.value=2.5,this.engineGain=e.createGain(),this.engineGain.gain.value=0,this.engineFilter.connect(this.engineGain).connect(this.master),this.engineOscA=e.createOscillator(),this.engineOscA.type="sawtooth",this.engineOscA.frequency.value=50,this.engineOscB=e.createOscillator(),this.engineOscB.type="square",this.engineOscB.frequency.value=75;let t=e.createGain();t.gain.value=.5;let n=e.createGain();n.gain.value=.16,this.engineOscA.connect(t).connect(this.engineFilter),this.engineOscB.connect(n).connect(this.engineFilter),this.engineOscA.start(),this.engineOscB.start();let s=this._noiseSource(2.5),r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=2100,r.Q.value=1.8,this.tireGain=e.createGain(),this.tireGain.gain.value=0,s.connect(r).connect(this.tireGain).connect(this.master),s.start(),this.tireFilter=r}updateCar({active:e,speed:t=0,throttle:n=0,boosting:s=!1,drifting:r=!1}){if(!this.started||!this.engineGain)return;let o=this.ctx.currentTime,a=Math.abs(t),l=e?.055+Xe(a/50,0,1)*.09:0;this.engineGain.gain.setTargetAtTime(l,o,.08);let c=46+a*4.1+Math.abs(n)*16+(s?22:0);this.engineOscA.frequency.setTargetAtTime(c,o,.04),this.engineOscB.frequency.setTargetAtTime(c*1.505,o,.04),this.engineFilter.frequency.setTargetAtTime(340+a*32+(s?450:0),o,.06);let h=e&&r?Xe(a/28,.2,1)*.09:0;this.tireGain.gain.setTargetAtTime(h,o,.06),this.tireFilter&&this.tireFilter.frequency.setTargetAtTime(1800+a*16,o,.1)}footstep(e=!1){if(!this.started)return;let t=performance.now();if(t-this.lastFootstep<(e?190:300))return;this.lastFootstep=t;let n=this.ctx,s=n.createBufferSource();s.buffer=this.noiseBuffer,s.loop=!1;let r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=e?450:320,r.Q.value=1.4;let o=n.createGain();o.gain.setValueAtTime(e?.05:.026,n.currentTime),o.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.075),s.connect(r).connect(o).connect(this.master),s.start(n.currentTime,Math.random()*1.8,.09)}jump(){this._tone(220,.08,.02,"sine",110)}land(){this._noiseBurst(.1,180,.04)}gunshot(e=!0){if(!this.started)return;let t=this.ctx,n=t.currentTime,s=t.createBufferSource();s.buffer=this.noiseBuffer;let r=t.createBiquadFilter();r.type="highpass",r.frequency.value=e?700:300;let o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=e?2600:6e3;let a=t.createGain();a.gain.setValueAtTime(e?.11:.22,n),a.gain.exponentialRampToValueAtTime(1e-4,n+(e?.11:.22)),s.connect(r).connect(o).connect(a).connect(this.master),s.start(n,Math.random(),.2);let l=t.createOscillator();l.type="sine",l.frequency.setValueAtTime(120,n),l.frequency.exponentialRampToValueAtTime(48,n+.1);let c=t.createGain();c.gain.setValueAtTime(.12,n),c.gain.exponentialRampToValueAtTime(1e-4,n+.11),l.connect(c).connect(this.master),l.start(n),l.stop(n+.13)}enemyShot(){if(!this.started)return;let e=this.ctx,t=e.currentTime,n=e.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(920,t),n.frequency.exponentialRampToValueAtTime(180,t+.16);let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=1800;let r=e.createGain();r.gain.setValueAtTime(.045,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.18),n.connect(s).connect(r).connect(this.master),n.start(t),n.stop(t+.2)}hitmarker(){this._tone(1350,.045,.025,"square",1100)}enemyHit(){this.started&&(this._noiseBurst(.08,1200,.03),this._tone(160,.08,.025,"square",90))}explosion(){if(!this.started)return;let e=this.ctx,t=e.currentTime;this._noiseBurst(.7,240,.3);let n=e.createOscillator();n.type="sine",n.frequency.setValueAtTime(90,t),n.frequency.exponentialRampToValueAtTime(28,t+.55);let s=e.createGain();s.gain.setValueAtTime(.26,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.6),n.connect(s).connect(this.master),n.start(t),n.stop(t+.62)}pickup(){if(!this.started)return;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{setTimeout(()=>this._tone(t,.18,.04,"triangle",t*1.5),n*65)})}reload(){this._noiseBurst(.04,3200,.018),setTimeout(()=>this._noiseBurst(.06,1700,.024),170)}door(){this._noiseBurst(.12,300,.035),this._tone(95,.12,.03,"sine",60)}boost(){if(!this.started)return;let e=this.ctx,t=e.currentTime,n=e.createBufferSource();n.buffer=this.noiseBuffer;let s=e.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(350,t),s.frequency.exponentialRampToValueAtTime(3400,t+.35),s.Q.value=1.2;let r=e.createGain();r.gain.setValueAtTime(.001,t),r.gain.linearRampToValueAtTime(.08,t+.08),r.gain.exponentialRampToValueAtTime(1e-4,t+.5),n.connect(s).connect(r).connect(this.master),n.start(t,0,.6)}ping(){this._tone(880,.12,.03,"sine",1320)}uiClick(){this._tone(520,.04,.015,"square",620)}damage(){this.started&&(this._noiseBurst(.16,420,.06),this._tone(70,.18,.05,"sine",40))}_tone(e,t,n,s="sine",r=e){if(!this.started||!this.ctx)return;let o=this.ctx,a=o.currentTime,l=o.createOscillator();l.type=s,l.frequency.setValueAtTime(e,a),r!==e&&l.frequency.exponentialRampToValueAtTime(Math.max(20,r),a+t);let c=o.createGain();c.gain.setValueAtTime(n,a),c.gain.exponentialRampToValueAtTime(1e-4,a+t),l.connect(c).connect(this.master),l.start(a),l.stop(a+t+.02)}_noiseBurst(e,t,n){if(!this.started||!this.ctx||!this.master)return;let s=this.ctx,r=s.currentTime,o=s.createBufferSource();o.buffer=this.noiseBuffer;let a=s.createBiquadFilter();a.type="bandpass",a.frequency.value=t,a.Q.value=1.5;let l=s.createGain();l.gain.setValueAtTime(n,r),l.gain.exponentialRampToValueAtTime(1e-4,r+e),o.connect(a).connect(l).connect(this.master),o.start(r,Math.random()*1.6,e+.02)}_startMusic(){this.nextNoteTime=this.ctx.currentTime+.12,this.step=0;let e=()=>{if(this.ctx)for(;this.nextNoteTime<this.ctx.currentTime+.3;)this._scheduleStep(this.step,this.nextNoteTime),this.nextNoteTime+=60/96/4,this.step=(this.step+1)%64};this.musicTimer=setInterval(e,50),e()}_scheduleStep(e,t){if(!this.ctx||this.muted)return;let n=this.ctx,s=Math.floor(e/16),r=e%16,a=[55,43.65,65.41,49][s];if(r===0||r===8||s===3&&r===14){let l=n.createOscillator();l.type="sine",l.frequency.setValueAtTime(120,t),l.frequency.exponentialRampToValueAtTime(42,t+.14);let c=n.createGain();c.gain.setValueAtTime(.17,t),c.gain.exponentialRampToValueAtTime(1e-4,t+.24),l.connect(c).connect(this.musicGain),l.start(t),l.stop(t+.26)}if(r===4||r===12){let l=n.createBufferSource();l.buffer=this.noiseBuffer;let c=n.createBiquadFilter();c.type="bandpass",c.frequency.value=1900;let h=n.createGain();h.gain.setValueAtTime(.045,t),h.gain.exponentialRampToValueAtTime(1e-4,t+.16),l.connect(c).connect(h).connect(this.musicGain),l.start(t,Math.random()*1.4,.2)}if(r%2===0){let l=n.createBufferSource();l.buffer=this.noiseBuffer;let c=n.createBiquadFilter();c.type="highpass",c.frequency.value=7e3;let h=n.createGain();h.gain.setValueAtTime(r%4===0?.014:.007,t),h.gain.exponentialRampToValueAtTime(1e-4,t+.055),l.connect(c).connect(h).connect(this.musicGain),l.start(t,Math.random()*1.7,.08)}if(r%2===0){let l=n.createOscillator();l.type="sawtooth";let c=r%8===6?1.5:1;l.frequency.value=a*c;let h=n.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(380,t),h.frequency.exponentialRampToValueAtTime(180,t+.22),h.Q.value=3;let u=n.createGain();u.gain.setValueAtTime(.035,t),u.gain.exponentialRampToValueAtTime(1e-4,t+.22),l.connect(h).connect(u).connect(this.musicGain),l.start(t),l.stop(t+.24)}if(r%2===1||s===2){let l=[0,3,7,10,12,10,7,3],c=l[(e+s*2)%l.length],h=a*Math.pow(2,c/12)*4,u=n.createOscillator();u.type="triangle",u.frequency.value=h;let d=n.createBiquadFilter();d.type="lowpass",d.frequency.value=2400;let f=n.createGain();f.gain.setValueAtTime(.013,t),f.gain.exponentialRampToValueAtTime(1e-4,t+.2);let m=n.createStereoPanner();m.pan.value=Math.sin(e*.6)*.5,u.connect(d).connect(f).connect(m).connect(this.musicGain),u.start(t),u.stop(t+.22)}if(r===0)for(let l of[0,3,7]){let c=n.createOscillator();c.type="sawtooth",c.frequency.value=a*Math.pow(2,l/12)*2,c.detune.value=(Math.random()-.5)*10;let h=n.createBiquadFilter();h.type="lowpass",h.frequency.value=1e3;let u=n.createGain();u.gain.setValueAtTime(.001,t),u.gain.linearRampToValueAtTime(.009,t+.5),u.gain.linearRampToValueAtTime(1e-4,t+3.8),c.connect(h).connect(u).connect(this.musicGain),c.start(t),c.stop(t+4)}}}});function kn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ko.copy(e),ko[n]=0,ko.normalize();let c=.5*o/(o+a),h=1-ko.angleTo(i)/l;return Math.sign(ko[t])===1?h*c:a/(o+a)+c+c*(1-h)}var ko,hn,nm=xt(()=>{cn();ko=new P;hn=class i extends Ze{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new P,c=new P,h=new P(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=u.length/6,y=new P,g=.5/o;for(let p=0,_=0;p<u.length;p+=3,_+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/m)){case 0:y.set(1,0,0),f[_+0]=kn(y,c,"z","y",r,n),f[_+1]=1-kn(y,c,"y","z",r,t);break;case 1:y.set(-1,0,0),f[_+0]=1-kn(y,c,"z","y",r,n),f[_+1]=1-kn(y,c,"y","z",r,t);break;case 2:y.set(0,1,0),f[_+0]=1-kn(y,c,"x","z",r,e),f[_+1]=kn(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),f[_+0]=1-kn(y,c,"x","z",r,e),f[_+1]=1-kn(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),f[_+0]=1-kn(y,c,"x","y",r,e),f[_+1]=1-kn(y,c,"y","x",r,t);break;case 5:y.set(0,0,-1),f[_+0]=kn(y,c,"x","y",r,e),f[_+1]=1-kn(y,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}}});function bn(i,e={}){return new Tt({color:i,roughness:.62,metalness:.25,...e})}function Li(i,e=1){return new at({color:i,transparent:e<1,opacity:e,toneMapped:!1,blending:lt,depthWrite:!1})}function Tr(i){if(!i)return;let e=new Map;for(let t of[...i.children]){if(!t.isMesh||t.isSprite||t.isInstancedMesh||!t.material||Array.isArray(t.material))continue;let n=t.material.uuid,s=e.get(n)||[];s.push(t),e.set(n,s)}for(let t of e.values()){if(t.length<2)continue;let n=[];for(let o of t){o.updateMatrix();let a=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();a.applyMatrix4(o.matrix),n.push(a)}let s=Un(n,!1);for(let o of n)o.dispose();if(!s)continue;let r=new ee(s,t[0].material);r.castShadow=!1,r.receiveShadow=!1,i.add(r);for(let o of t)i.remove(o),o.geometry.dispose?.()}}function xc({color:i=3533311,skin:e=14265226,hostile:t=!1,detail:n=1}={}){let s=new Dt,o=t&&n<.8?bn(2500401,{roughness:.6,metalness:.32,emissive:2757145,emissiveIntensity:.5}):null,a=t?{emissive:2757145,emissiveIntensity:.5}:{emissive:1844019,emissiveIntensity:.5},l=t?{emissive:1445137,emissiveIntensity:.45}:{emissive:1382949,emissiveIntensity:.45},c=t?{}:{emissive:e,emissiveIntensity:.1},h=o||bn(t?2829110:3883862,{roughness:.78,metalness:.16,...a}),u=o||bn(t?1842468:2238516,{roughness:.5,metalness:.42}),d=o||bn(t?1711138:2962503,{roughness:.82,metalness:.08,...l}),f=o||bn(658192,{roughness:.72,metalness:.18}),m=Li(t?16723029:i,1),y=Li(t?16721471:i,1),g=o||bn(e,{roughness:.86,metalness:0,...c});if(!t){let Be=new oi(10478335,6.5,5.2,2);Be.position.set(0,2.35,-.9),s.add(Be)}let p=new Dt;p.position.y=1,s.add(p);let _=new ee(new hn(.36,.2,.27,3,.07),d);_.position.y=-.02,p.add(_);let T=new ee(new wi(.205,.22,8,18),h);T.position.y=.28,T.scale.set(1.04,1,.72),p.add(T);let S=new ee(new hn(.36,.3,.1,4,.05),u);S.position.set(0,.32,.135),p.add(S);let w=new ee(new Cn(.135,.038,8,22),u);w.rotation.x=Math.PI/2,w.position.y=.53,p.add(w);let E=new ee(new hn(.2,.028,.02,2,.012),m);E.position.set(0,.34,.187),p.add(E);let x=new ee(new hn(.38,.08,.28,3,.03),f);x.position.y=.02,p.add(x);let b=new ee(new hn(.07,.05,.02,2,.012),m);b.position.set(0,.02,.145),n>=.8&&p.add(b);for(let Be of[-1,1]){let Qe=new ee(new mn(.095,16,12),u);Qe.scale.set(1.15,.8,1),Qe.position.set(Be*.27,.47,0),p.add(Qe)}let I=new Dt;I.position.y=.55,p.add(I);let A=new ee(new Gt(.075,.09,.13,12),g);A.position.y=.04,I.add(A);let U=new ee(new mn(.172,24,18),o||bn(t?3093053:3949396,{roughness:.6}));U.scale.set(.92,1.05,.94),U.position.y=.19,I.add(U);let B=new ee(new hn(.19,.1,.1,3,.035),f);B.position.set(0,.12,.115),I.add(B);let k=new ee(new hn(.245,.07,.055,3,.028),y);k.position.set(0,.215,.145),I.add(k);let R=new ee(new mn(.19,22,14,0,Math.PI*2,0,Math.PI*.42),o||bn(t?1184538:1119261,{roughness:.62}));if(R.position.y=.22,I.add(R),n>=.8)for(let Be of[-1,1]){let Qe=new ee(new Gt(.045,.045,.035,12),u);Qe.rotation.z=Math.PI/2,Qe.position.set(Be*.165,.19,0),I.add(Qe);let _t=new ee(new Cn(.028,.008,6,14),m);_t.rotation.y=Math.PI/2,_t.position.set(Be*.185,.19,0),I.add(_t)}let z=new wi(.065,.22,6,12),q=new wi(.055,.2,6,12),Y=Be=>{let Qe=new Dt;Qe.position.set(Be*.305,.46,0),p.add(Qe);let _t=new ee(new mn(.075,14,10),h);_t.position.y=-.02,Qe.add(_t);let It=new ee(z,h);It.position.y=-.185,Qe.add(It);let it=new Dt;it.position.y=-.36,Qe.add(it);let zt=new ee(q,h);zt.position.y=-.155,it.add(zt);let vt=new ee(new Cn(.058,.017,6,16),m);vt.rotation.x=Math.PI/2,vt.position.y=-.29,it.add(vt);let Lt=new ee(new mn(.06,12,10),f);return Lt.scale.set(1,1.1,1),Lt.position.y=-.335,it.add(Lt),{pivot:Qe,lowerPivot:it,side:Be}},se=Y(-1),X=Y(1),ne=new wi(.082,.28,6,12),re=new wi(.07,.26,6,12),De=Be=>{let Qe=new Dt;Qe.position.set(Be*.115,.98,0),s.add(Qe);let _t=new ee(ne,d);_t.position.y=-.21,Qe.add(_t);let It=new ee(new hn(.13,.2,.06,3,.025),u);It.position.set(0,-.16,.075),n>=.8&&Qe.add(It);let it=new Dt;it.position.y=-.44,Qe.add(it);let zt=new ee(re,d);zt.position.y=-.18,it.add(zt);let vt=new ee(new mn(.07,14,10),u);vt.scale.set(1,.85,.9),vt.position.set(0,.005,.02),n>=.8&&it.add(vt);let Lt=new ee(new hn(.17,.12,.3,4,.05),f);Lt.position.set(0,-.42,.055),it.add(Lt);let $t=new ee(new hn(.055,.17,.02,2,.01),m);return $t.position.set(0,-.22,.08),n>=.8&&it.add($t),{pivot:Qe,lowerPivot:it,side:Be}},Ue=De(-1),K=De(1),be=new ee(new hn(.34,.4,.15,4,.045),u);be.position.set(0,.3,-.19),p.add(be);let Ie=new ee(new hn(.16,.022,.02,2,.01),m);Ie.position.set(0,.41,-.27),n>=.8&&p.add(Ie);let He=new ee(new Gt(.035,.035,.2,10),f);He.position.set(.11,.28,-.275),n>=.8&&p.add(He);let ve=new Dt,Ye=new ee(new hn(.075,.105,.34,3,.02),o||bn(658449,{roughness:.35,metalness:.8}));ve.add(Ye);let Rt=new ee(new Gt(.026,.03,.23,8),o||bn(2106411,{roughness:.4,metalness:.8}));Rt.rotation.x=Math.PI/2,Rt.position.set(0,.02,.26),ve.add(Rt);let Ve=new ee(new hn(.02,.02,.18,2,.008),m);Ve.position.set(.045,.01,.1),ve.add(Ve),ve.position.set(0,-.32,.18),X.lowerPivot.add(ve);let tt=new Ln(new Tn({map:rn("#ffe6b3"),color:16770739,transparent:!0,opacity:0,blending:lt,depthWrite:!1,toneMapped:!1}));tt.scale.set(.6,.6,1),tt.position.set(0,-.32,.48),X.lowerPivot.add(tt),s.traverse(Be=>{Be.isMesh&&(Be.castShadow=!1,Be.receiveShadow=!1)}),Tr(p),Tr(I);for(let Be of[se,X])Tr(Be.pivot),Tr(Be.lowerPivot);for(let Be of[Ue,K])Tr(Be.pivot),Tr(Be.lowerPivot);let je={group:s,torso:p,headGroup:I,leftArm:se,rightArm:X,leftLeg:Ue,rightLeg:K,flash:tt,color:i,hostile:t,flashTime:0,visorMaterial:y};return je.animate=(Be,Qe,_t=0,It=!0,it=!1)=>{let zt=Xe(Math.abs(_t)/8,0,1.6),vt=Math.min(Qe*(5+zt*5),1e3),Lt=Math.sin(vt)*(.12+zt*.7),$t=Math.abs(Math.sin(vt))*zt*.035;It?(p.position.y=1+$t,p.rotation.x=zt*.09,p.rotation.z=Math.sin(vt)*zt*.03,Ue.pivot.rotation.x=Lt,K.pivot.rotation.x=-Lt,Ue.lowerPivot.rotation.x=Math.max(0,-Lt)*.55,K.lowerPivot.rotation.x=Math.max(0,Lt)*.55,se.pivot.rotation.x=-Lt*.75,X.pivot.rotation.x=Lt*.45,se.lowerPivot.rotation.x=-Math.max(0,Lt)*.3):(p.position.y=1,p.rotation.x=-.08,p.rotation.z=0,Ue.pivot.rotation.x=-.5,K.pivot.rotation.x=.25,Ue.lowerPivot.rotation.x=.5,K.lowerPivot.rotation.x=.2,se.pivot.rotation.x=-.75,X.pivot.rotation.x=-.2);let jt=Math.sin(Qe*1.6)*.02;it?(X.pivot.rotation.x=-1.35,X.pivot.rotation.z=.05,X.lowerPivot.rotation.x=-.08,X.lowerPivot.rotation.z=.12,se.pivot.rotation.x=-1.1,se.pivot.rotation.z=-.38,se.lowerPivot.rotation.x=-.65,se.lowerPivot.rotation.z=.35):(se.pivot.rotation.z=-.12+jt,X.pivot.rotation.z=.12-jt,X.pivot.rotation.x+=-.25,X.lowerPivot.rotation.x=-.35,X.lowerPivot.rotation.z=.05),I.rotation.x=it?-.08:Math.sin(Qe*.8)*.04,je.flashTime>0?(je.flashTime-=Be,tt.material.opacity=Xe(je.flashTime*9,0,1)*.95,tt.scale.setScalar(.6+(1-Xe(je.flashTime*8,0,1))*.25)):tt.material.opacity=0},je}function gu(i,e,t,n=.82,s=.8,r=0){let o=new Ze(i,e,t),a=o.attributes.position;for(let l=0;l<a.count;l+=1)a.getY(l)>0&&(a.setX(l,a.getX(l)*n),a.setZ(l,a.getZ(l)*s+r));return a.needsUpdate=!0,o.computeVertexNormals(),o}function im(i=2156287){let e=new Dt,t=new Dt;e.add(t);let n=new hr({color:i,roughness:.18,metalness:.65,clearcoat:1,clearcoatRoughness:.12,envMapIntensity:1.6}),s=bn(526863,{roughness:.55,metalness:.55}),r=new hr({color:463389,roughness:.08,metalness:.35,transmission:.1,transparent:!0,opacity:.92,envMapIntensity:2}),o=Li(i===16723349?16739253:i,1),a=new ee(new Ze(2.08,.32,4.55),n);a.position.y=.55,t.add(a);let l=new ee(new Ze(1.95,.24,4.2),n);l.position.y=.77,t.add(l);let c=new ee(gu(1.9,.25,1.65,.78,.55,.35),n);c.position.set(0,.9,1.35),t.add(c);let h=new ee(gu(2,.28,1.2,.92,.95,-.05),n);h.position.set(0,.91,-1.65),t.add(h);let u=new ee(gu(1.45,.48,2.15,.74,.62,.12),r);u.position.set(0,1.1,-.25),t.add(u);let d=new ee(new Ze(1.05,.06,1.28),n);d.position.set(0,1.36,-.3),t.add(d);let f=new ee(new Ze(2.16,.07,.42),bn(395018,{roughness:.4,metalness:.8}));f.position.set(0,.35,2.15),t.add(f);let m=new ee(new Ze(1.9,.12,.5),s);m.position.set(0,.34,-2.17),t.add(m);let y=new ee(new Ze(1.72,.06,.38),n);y.position.set(0,1.2,-2.05),y.rotation.x=-.08,t.add(y);for(let R of[-.63,.63]){let z=new ee(new Ze(.06,.28,.12),s);z.position.set(R,1.07,-2.02),t.add(z)}for(let R of[-1,1]){let z=new ee(new Ze(.035,.05,2.4),o);z.position.set(R*1.045,.65,0),t.add(z);let q=new ee(new Ze(.08,.18,.75),s);q.position.set(R*.97,.9,-.95),t.add(q)}for(let R of[-.62,.62]){let z=new ee(new Ze(.42,.055,.06),Li(15268863,1));z.position.set(R,.82,2.22),t.add(z)}let g=new ee(new Ze(1.6,.055,.05),new at({color:16720720,transparent:!0,opacity:1,toneMapped:!1,blending:lt,depthWrite:!1}));g.position.set(0,.88,-2.24),t.add(g);let p=new ee(new Ze(1.2,.03,.04),Li(16720720,.7));p.position.set(0,.72,-2.2),t.add(p);let _=new Gt(.37,.37,.28,16);_.rotateZ(Math.PI/2);let T=new Tt({color:526604,roughness:.88}),S=new Gt(.22,.22,.3,8);S.rotateZ(Math.PI/2);let w=bn(2435635,{roughness:.32,metalness:.9}),E=[];for(let[R,z]of[[-.98,1.45],[.98,1.45],[-.98,-1.45],[.98,-1.45]]){let q=new Dt;q.position.set(R,.38,z),e.add(q);let Y=new Dt;q.add(Y);let se=new ee(_,T);Y.add(se);let X=new ee(S,w);Y.add(X);for(let ne=0;ne<4;ne+=1){let re=new ee(new Ze(.31,.055,.05),w);re.rotation.x=ne*Math.PI/4,Y.add(re)}E.push({steer:q,spin:Y,front:z>0})}for(let R of[-1,1])for(let z of[1.45,-1.45]){let q=new ee(new Cn(.42,.08,6,14,Math.PI),s);q.rotation.y=Math.PI/2,q.rotation.z=Math.PI,q.position.set(R*1.02,.75,z),t.add(q)}let x=new at({map:rn("#bfeaff"),color:12577535,transparent:!0,opacity:.06,blending:lt,depthWrite:!1,toneMapped:!1}),b=[];for(let R of[-.62,.62]){let z=new ee(new en(2.8,10.5),x.clone());z.rotation.x=-Math.PI/2,z.position.set(R,.075,7.1),t.add(z),b.push(z)}let I=new ee(new en(3.4,6.4),new at({map:rn(`#${new Ne(i).getHexString()}`),color:i,transparent:!0,opacity:.35,blending:lt,depthWrite:!1,toneMapped:!1}));I.rotation.x=-Math.PI/2,I.position.y=.055,e.add(I);let A=[];for(let R of[-.48,.48]){let z=new ee(new Gt(.075,.09,.2,8),bn(1579552,{roughness:.3,metalness:.9}));z.rotation.x=Math.PI/2,z.position.set(R,.46,-2.31),t.add(z);let q=new Ln(new Tn({map:rn("#7fd8ff"),color:6539775,transparent:!0,opacity:0,blending:lt,depthWrite:!1,toneMapped:!1}));q.position.set(R,.46,-2.46),q.scale.set(.9,.55,1),t.add(q),A.push(q)}let U=new ee(new Ze(1.1,.025,.02),o);U.position.set(0,.99,.9),t.add(U);let B=new ee(new en(.7,.34),new at({map:Iv(),transparent:!0,opacity:.8,depthWrite:!1,toneMapped:!1}));B.rotation.x=-Math.PI/2,B.rotation.z=Math.PI,B.position.set(0,1.055,1.18),t.add(B);let k={group:e,bodyGroup:t,wheels:E,underGlow:I,exhausts:A,cones:b,brake:0,boost:0,spin:0,prevSpeed:0,color:i,headMat:x};return k.update=(R,z,q,Y,se,X=!0)=>{let ne=Math.abs(z),re=(z-k.prevSpeed)/Math.max(R,.001);k.prevSpeed=z,k.spin+=z*R*2.8,k.wheels.forEach(Ue=>{Ue.spin.rotation.x=k.spin,Ue.steer.rotation.y=Ue.front?q*.45:0});let De=se?1:0;k.brake=lc(k.brake,De,1-Math.exp(-8*R)),k.boost=lc(k.boost,Y?1:0,1-Math.exp(-7*R)),t.rotation.z=-q*Xe(ne/35,0,1)*.055,t.rotation.x=Xe(-re*8e-4,-.04,.04),t.position.y=Math.sin(k.spin*.5)*Xe(ne*.0015,0,.018),g.material.opacity=X?1:.2,g.material.color.setHex(se?16724787:16720720),g.scale.x=se?1.08:1,A.forEach((Ue,K)=>{Ue.material.opacity=k.boost*(.6+Math.random()*.35),Ue.scale.set(.7+Math.random()*.6,.45+k.boost*.5,1),Ue.position.z=-2.46-k.boost*(.3+Math.random()*.4)}),I.material.opacity=.22+k.boost*.4,b.forEach(Ue=>{Ue.visible=X,Ue.material.opacity=X?.22:0})},k}function Iv(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="rgba(0,0,0,0)",e.fillRect(0,0,256,128),e.strokeStyle="rgba(255,255,255,0.5)",e.lineWidth=4,e.strokeRect(6,6,244,116),e.font="900 74px Arial",e.textAlign="center",e.textBaseline="middle",e.fillStyle="rgba(255,255,255,0.75)",e.fillText("09",128,68);let t=new Vi(i);return t.colorSpace=Qt,t}function xu(){let i=new Dt,e=new Tt({color:1514017,roughness:.34,metalness:.8,envMapIntensity:1.3}),t=Li(16722509,1),n=new ee(new mn(.55,16,10),e);i.add(n);let s=new ee(new mn(.14,10,8),Li(16723797,1));s.position.set(0,.02,.5),i.add(s);let r=new ee(new Cn(.78,.045,4,40),e);r.rotation.x=Math.PI/2,i.add(r);let o=new ee(new Cn(.6,.015,3,36),Li(16723797,.8));o.rotation.x=Math.PI/2,i.add(o);for(let c of[-1,1]){let h=new ee(new Gt(.28,.28,.03,12),bn(723985,{roughness:.6}));h.position.set(c*1.02,.05,0),i.add(h);let u=new ee(new Ze(.5,.05,.08),e);u.position.set(c*.7,.05,0),i.add(u);let d=new ee(new Cn(.26,.012,3,20),Li(16733757,.4));d.rotation.x=Math.PI/2,d.position.set(c*1.02,.08,0),i.add(d)}let a=new at({color:16723797,transparent:!0,opacity:.08,blending:lt,depthWrite:!1,side:Bt,toneMapped:!1}),l=new ee(new Gt(.12,2.4,9,18,1,!0),a);return l.position.set(0,-4.3,.8),i.add(l),i.userData.eye=s,i.userData.glowRing=o,i.userData.search=l,i.userData.rotors=i.children.filter(c=>c.geometry?.type==="CylinderGeometry"),{group:i,eye:s,glowRing:o,animate:(c,h,u=!1)=>{r.rotation.z+=c*1.7,o.rotation.z-=c*2.2,s.scale.setScalar(1+Math.sin(h*5)*.12),s.material.color.setHex(u?16718653:16743245),l.material.opacity=u?.2:.06,i.position.y+=0}}}function sm(){let i=new Dt,e=new ee(new ms(.7,0),new Tt({color:5832703,emissive:3339519,emissiveIntensity:3.5,roughness:.15,metalness:.7,toneMapped:!1}));e.scale.set(1,1.55,1),i.add(e);let t=new ee(new Wi(1.05,0),new at({color:8191999,wireframe:!0,transparent:!0,opacity:.55,blending:lt,depthWrite:!1,toneMapped:!1}));i.add(t);let n=new ee(new Cn(1.6,.025,3,48),new at({color:5240063,transparent:!0,opacity:.8,blending:lt,depthWrite:!1,toneMapped:!1}));n.rotation.x=Math.PI/2,i.add(n);let s=n.clone();s.rotation.set(Math.PI/2,Math.PI/3,0),i.add(s);let r=new at({color:3798527,transparent:!0,opacity:.06,blending:lt,depthWrite:!1,side:Bt,toneMapped:!1}),o=new ee(new Gt(.9,2,34,16,1,!0),r);o.position.y=17,i.add(o);let a=new Ln(new Tn({map:rn("#53f5ff"),color:5502463,transparent:!0,opacity:.7,blending:lt,depthWrite:!1,toneMapped:!1}));return a.scale.set(7,7,1),i.add(a),i.position.y=1.6,{group:i,animate:(l,c)=>{e.rotation.y+=l*1.3,t.rotation.y-=l*.7,t.rotation.x+=l*.24,n.rotation.z+=l*.9,s.rotation.z-=l*.7,a.material.opacity=.5+Math.sin(c*2.3)*.2,i.position.y=1.9+Math.sin(c*1.7)*.22}}}function yu(){return xc({color:16723029,skin:12092516,hostile:!0,detail:.5})}function rm(){let i=document.createElement("canvas");i.width=128,i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(0,0,0,0.62)"),t.addColorStop(.55,"rgba(0,0,0,0.33)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new Vi(i)}function es(i,e=2.2){let t=new ee(new en(e,e),new at({map:i,transparent:!0,depthWrite:!1,opacity:.9,toneMapped:!1}));return t.rotation.x=-Math.PI/2,t.renderOrder=1,t}var om=xt(()=>{cn();du();nm();dc();Ii()});function Lv(i){let e=0;for(let s of i)e+=s.byteLength;let t=new Uint8Array(e),n=0;for(let s of i){let r=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);t.set(r,n),n+=s.byteLength}return t}function Mu(i){return new vu(i).unpack()}function bu(i){let e=new Su,t=e.pack(i);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}var _u,vu,Su,am=xt(()=>{_u=class{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){let e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){let e=[];for(let t of this._parts)e.push(t);return Lv(e).buffer}};vu=class{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){let e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){let e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){let e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){let e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){let e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){let e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){let e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){let e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){let e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);let t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){let t=this.read(e),n=0,s="",r,o;for(;n<e;)r=t[n],r<160?(o=r,n++):(r^192)<32?(o=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(o=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(o=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),s+=String.fromCodePoint(o);return this.index+=e,s}unpack_array(e){let t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){let t={};for(let n=0;n<e;n++){let s=this.unpack();t[s]=this.unpack()}return t}unpack_float(){let e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,s=e&8388607|8388608;return(t===0?1:-1)*s*2**(n-23)}unpack_double(){let e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,s=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(s-20)+t*2**(s-52);return(n===0?1:-1)*o}read(e){let t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}},Su=class{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{let t=e.constructor;if(e instanceof Array){let n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){let n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){let n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){let t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){let t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){let t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");let n=s=>{if(s<t){let r=this.pack(e[s]);return r instanceof Promise?r.then(()=>n(s+1)):n(s+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);let n=Math.floor(Math.log(e)/Math.LN2),s=e/2**n-1,r=Math.floor(s*2**52),o=2**32,a=t<<31|n+1023<<20|r/o&1048575,l=r%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(l)}pack_object(e){let t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");let s=r=>{if(r<t.length){let o=t[r];if(e.hasOwnProperty(o)){this.pack(o);let a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>s(r+1))}return s(r+1)}};return s(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){let t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){let t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){let t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new _u,this._textEncoder=new TextEncoder}}});function wr(i,e,t){let n=i.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function di(i,e,t){if(!i.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){zo("Unable to polyfill events");return}let s=i.RTCPeerConnection.prototype,r=s.addEventListener;s.addEventListener=function(a,l){if(a!==e)return r.apply(this,arguments);let c=h=>{let u=t(h);u&&(l.handleEvent?l.handleEvent(u):l(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(l,c),r.apply(this,[a,c])};let o=s.removeEventListener;s.removeEventListener=function(a,l){if(a!==e||!this._eventMap||!this._eventMap[e])return o.apply(this,arguments);if(!this._eventMap[e].has(l))return o.apply(this,arguments);let c=this._eventMap[e].get(l);return this._eventMap[e].delete(l),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,o.apply(this,[a,c])},Object.defineProperty(s,"on"+e,{get(){return this["_on"+e]},set(a){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),a&&this.addEventListener(e,this["_on"+e]=a)},enumerable:!0,configurable:!0})}function um(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(cm=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function dm(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(hm=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function zo(){if(typeof window=="object"){if(cm)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function Cr(i,e){hm&&console.warn(i+" is deprecated, please use "+e+" instead.")}function fm(i){let e={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return e.browser="Not a browser.",e;let{navigator:t}=i;if(t.userAgentData&&t.userAgentData.brands){let n=t.userAgentData.brands.find(s=>s.brand==="Chromium");if(n){let s=parseInt(n.version,10);if(s>=90)return{browser:"chrome",version:s}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(wr(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(wr(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(i.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(wr(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,e._safariVersion=wr(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function lm(i){return Object.prototype.toString.call(i)==="[object Object]"}function Tu(i){return lm(i)?Object.keys(i).reduce(function(e,t){let n=lm(i[t]),s=n?Tu(i[t]):i[t],r=n&&!Object.keys(s).length;return s===void 0||r?e:Object.assign(e,{[t]:s})},{}):i}function Eu(i,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?Eu(i,i.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(s=>{Eu(i,i.get(s),t)})}))}function wu(i,e,t){let n=t?"outbound-rtp":"inbound-rtp",s=new Map;if(e===null)return s;let r=[];return i.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&r.push(o)}),r.forEach(o=>{i.forEach(a=>{a.type===n&&a.trackId===o.id&&Eu(i,a,s)})}),s}var cm,hm,ts=xt(()=>{"use strict";cm=!0,hm=!0});function yc(i,e){if(e.version>=64)return;let t=i&&i.navigator;if(!t.mediaDevices)return;let n=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;let l={};return Object.keys(a).forEach(c=>{if(c==="require"||c==="advanced"||c==="mediaSource")return;let h=typeof a[c]=="object"?a[c]:{ideal:a[c]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);let u=function(d,f){return d?d+f.charAt(0).toUpperCase()+f.slice(1):f==="deviceId"?"sourceId":f};if(h.ideal!==void 0){l.optional=l.optional||[];let d={};typeof h.ideal=="number"?(d[u("min",c)]=h.ideal,l.optional.push(d),d={},d[u("max",c)]=h.ideal,l.optional.push(d)):(d[u("",c)]=h.ideal,l.optional.push(d))}h.exact!==void 0&&typeof h.exact!="number"?(l.mandatory=l.mandatory||{},l.mandatory[u("",c)]=h.exact):["min","max"].forEach(d=>{h[d]!==void 0&&(l.mandatory=l.mandatory||{},l.mandatory[u(d,c)]=h[d])})}),a.advanced&&(l.optional=(l.optional||[]).concat(a.advanced)),l},s=function(a,l){if(e.version>=61)return l(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){let c=function(h,u,d){u in h&&!(d in h)&&(h[d]=h[u],delete h[u])};a=JSON.parse(JSON.stringify(a)),c(a.audio,"autoGainControl","googAutoGainControl"),c(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=n(a.audio)}if(a&&typeof a.video=="object"){let c=a.video.facingMode;c=c&&(typeof c=="object"?c:{ideal:c});let h=e.version<66;if(c&&(c.exact==="user"||c.exact==="environment"||c.ideal==="user"||c.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete a.video.facingMode;let u;if(c.exact==="environment"||c.ideal==="environment"?u=["back","rear"]:(c.exact==="user"||c.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(m=>m.kind==="videoinput");let f=d.find(m=>u.some(y=>m.label.toLowerCase().includes(y)));return!f&&d.length&&u.includes("back")&&(f=d[d.length-1]),f&&(a.video.deviceId=c.exact?{exact:f.deviceId}:{ideal:f.deviceId}),a.video=n(a.video),pm("chrome: "+JSON.stringify(a)),l(a)})}a.video=n(a.video)}return pm("chrome: "+JSON.stringify(a)),l(a)},r=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,l,c){s(a,h=>{t.webkitGetUserMedia(h,l,u=>{c&&c(r(u))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){let a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(l){return s(l,c=>a(c).then(h=>{if(c.audio&&!h.getAudioTracks().length||c.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(r(h))))}}}var pm,mm=xt(()=>{"use strict";ts();pm=zo});var vc={};ia(vc,{fixNegotiationNeeded:()=>Lu,shimAddTrackRemoveTrack:()=>Iu,shimAddTrackRemoveTrackWithNative:()=>gm,shimGetSendersWithDtmf:()=>Ru,shimGetUserMedia:()=>yc,shimMediaStream:()=>Cu,shimOnTrack:()=>Au,shimPeerConnection:()=>_c,shimSenderReceiverGetStats:()=>Pu});function Cu(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function Au(i,e){if(!(e.version>102))if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});let t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=s=>{s.stream.addEventListener("addtrack",r=>{let o;i.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(l=>l.track&&l.track.id===r.track.id):o={track:r.track};let a=new Event("track");a.track=r.track,a.receiver=o,a.transceiver={receiver:o},a.streams=[s.stream],this.dispatchEvent(a)}),s.stream.getTracks().forEach(r=>{let o;i.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(l=>l.track&&l.track.id===r.id):o={track:r};let a=new Event("track");a.track=r,a.receiver=o,a.transceiver={receiver:o},a.streams=[s.stream],this.dispatchEvent(a)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else di(i,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Ru(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){let e=function(s,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=s.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:s}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};let s=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,l){let c=s.apply(this,arguments);return c||(c=e(this,a),this._senders.push(c)),c};let r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){r.apply(this,arguments);let l=this._senders.indexOf(a);l!==-1&&this._senders.splice(l,1)}}let t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(o=>{this._senders.push(e(this,o))})};let n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(o=>{let a=this._senders.find(l=>l.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){let e=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){let n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Pu(i,e){if(e.version>=67||!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){let n=i.RTCPeerConnection.prototype.getSenders;n&&(i.RTCPeerConnection.prototype.getSenders=function(){let o=n.apply(this,[]);return o.forEach(a=>a._pc=this),o});let s=i.RTCPeerConnection.prototype.addTrack;s&&(i.RTCPeerConnection.prototype.addTrack=function(){let o=s.apply(this,arguments);return o._pc=this,o}),i.RTCRtpSender.prototype.getStats=function(){let o=this;return this._pc.getStats().then(a=>wu(a,o.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){let n=i.RTCPeerConnection.prototype.getReceivers;n&&(i.RTCPeerConnection.prototype.getReceivers=function(){let r=n.apply(this,[]);return r.forEach(o=>o._pc=this),r}),di(i,"track",s=>(s.receiver._pc=s.srcElement,s)),i.RTCRtpReceiver.prototype.getStats=function(){let r=this;return this._pc.getStats().then(o=>wu(o,r.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;let t=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){let s=arguments[0],r,o,a;return this.getSenders().forEach(l=>{l.track===s&&(r?a=!0:r=l)}),this.getReceivers().forEach(l=>(l.track===s&&(o?a=!0:o=l),l.track===s)),a||r&&o?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():o?o.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function gm(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};let e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};let l=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(l)===-1&&this._shimmedLocalStreams[a.id].push(l):this._shimmedLocalStreams[a.id]=[a,l],l};let t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(c=>{if(this.getSenders().find(u=>u.track===c))throw new DOMException("Track already exists.","InvalidAccessError")});let a=this.getSenders();t.apply(this,arguments);let l=this.getSenders().filter(c=>a.indexOf(c)===-1);this._shimmedLocalStreams[o.id]=[o].concat(l)};let n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],n.apply(this,arguments)};let s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{let l=this._shimmedLocalStreams[a].indexOf(o);l!==-1&&this._shimmedLocalStreams[a].splice(l,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),s.apply(this,arguments)}}function Iu(i,e){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&e.version>=65)return gm(i);let t=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){let h=t.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(u=>this._reverseStreams[u.id])};let n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(u=>{if(this.getSenders().find(f=>f.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){let u=new i.MediaStream(h.getTracks());this._streams[h.id]=u,this._reverseStreams[u.id]=h,h=u}n.apply(this,[h])};let s=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},i.RTCPeerConnection.prototype.addTrack=function(h,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");let d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(y=>y===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(y=>y.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};let m=this._streams[u.id];if(m)m.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{let y=new i.MediaStream([h]);this._streams[u.id]=y,this._reverseStreams[y.id]=u,this.addStream(y)}return this.getSenders().find(y=>y.track===h)};function r(c,h){let u=h.sdp;return Object.keys(c._reverseStreams||[]).forEach(d=>{let f=c._reverseStreams[d],m=c._streams[f.id];u=u.replace(new RegExp(m.id,"g"),f.id)}),new RTCSessionDescription({type:h.type,sdp:u})}function o(c,h){let u=h.sdp;return Object.keys(c._reverseStreams||[]).forEach(d=>{let f=c._reverseStreams[d],m=c._streams[f.id];u=u.replace(new RegExp(f.id,"g"),m.id)}),new RTCSessionDescription({type:h.type,sdp:u})}["createOffer","createAnswer"].forEach(function(c){let h=i.RTCPeerConnection.prototype[c],u={[c](){let d=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[m=>{let y=r(this,m);d[0].apply(null,[y])},m=>{d[1]&&d[1].apply(null,m)},arguments[2]]):h.apply(this,arguments).then(m=>r(this,m))}};i.RTCPeerConnection.prototype[c]=u[c]});let a=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};let l=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){let c=l.get.apply(this);return c.type===""?c:r(this,c)}}),i.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(f=>{this._streams[f].getTracks().find(y=>h.track===y)&&(d=this._streams[f])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function _c(i,e){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){let n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]})}function Lu(i,e){e.version>102||di(i,"negotiationneeded",t=>{let n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}var xm=xt(()=>{"use strict";ts();mm()});function Sc(i,e){let t=i&&i.navigator;if(!t.mediaDevices)return;let n=i&&i.MediaStreamTrack;if(t.getUserMedia=function(s,r,o){Cr("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(s).then(r,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){let s=function(o,a,l){a in o&&!(l in o)&&(o[l]=o[a],delete o[a])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),s(o.audio,"autoGainControl","mozAutoGainControl"),s(o.audio,"noiseSuppression","mozNoiseSuppression")),r(o)},n&&n.prototype.getSettings){let o=n.prototype.getSettings;n.prototype.getSettings=function(){let a=o.apply(this,arguments);return s(a,"mozAutoGainControl","autoGainControl"),s(a,"mozNoiseSuppression","noiseSuppression"),a}}if(n&&n.prototype.applyConstraints){let o=n.prototype.applyConstraints;n.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),s(a,"autoGainControl","mozAutoGainControl"),s(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}var ym=xt(()=>{"use strict";ts()});function _m(i,e){i.navigator.mediaDevices&&(i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){let s=new DOMException("getDisplayMedia without video constraints is undefined");return s.name="NotFoundError",s.code=8,Promise.reject(s)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,i.navigator.mediaDevices.getUserMedia(n)}))}var vm=xt(()=>{"use strict"});var bc={};ia(bc,{shimAddTransceiver:()=>ku,shimCreateAnswer:()=>Gu,shimCreateOffer:()=>Hu,shimGetDisplayMedia:()=>_m,shimGetParameters:()=>zu,shimGetStats:()=>Nu,shimGetUserMedia:()=>Sc,shimOnTrack:()=>Du,shimPeerConnection:()=>Mc,shimRTCDataChannel:()=>Fu,shimReceiverGetStats:()=>Ou,shimRemoveStream:()=>Bu,shimSenderGetStats:()=>Uu});function Du(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Mc(i,e){typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||(!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){let n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]}))}function Nu(i,e){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||e.version>=151)return;let t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){let[r,o,a]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(l=>{if(e.version<53&&!o)try{l.forEach(c=>{c.type=t[c.type]||c.type})}catch(c){if(c.name!=="TypeError")throw c;l.forEach((h,u)=>{l.set(u,Object.assign({},h,{type:t[h.type]||h.type}))})}return l}).then(o,a)}}function Uu(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;let e=i.RTCPeerConnection.prototype.getSenders;e&&(i.RTCPeerConnection.prototype.getSenders=function(){let s=e.apply(this,[]);return s.forEach(r=>r._pc=this),s});let t=i.RTCPeerConnection.prototype.addTrack;t&&(i.RTCPeerConnection.prototype.addTrack=function(){let s=t.apply(this,arguments);return s._pc=this,s}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Ou(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;let e=i.RTCPeerConnection.prototype.getReceivers;e&&(i.RTCPeerConnection.prototype.getReceivers=function(){let n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n}),di(i,"track",t=>(t.receiver._pc=t.srcElement,t)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Bu(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){Cr("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function Fu(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function ku(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;let t=i.RTCPeerConnection.prototype.addTransceiver;t&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let s=arguments[1]&&arguments[1].sendEncodings;s===void 0&&(s=[]),s=[...s];let r=s.length>0;r&&s.forEach(a=>{if("rid"in a&&!/^[a-z0-9]{0,16}$/i.test(a.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in a&&!(parseFloat(a.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in a&&!(parseFloat(a.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});let o=t.apply(this,arguments);if(r){let{sender:a}=o,l=a.getParameters();(!("encodings"in l)||l.encodings.length===1&&Object.keys(l.encodings[0]).length===0)&&(l.encodings=s,a.sendEncodings=s,this.setParametersPromises.push(a.setParameters(l).then(()=>{delete a.sendEncodings}).catch(()=>{delete a.sendEncodings})))}return o})}function zu(i,e){if(!(typeof i=="object"&&i.RTCRtpSender)||e.version>=110)return;let t=i.RTCRtpSender.prototype.getParameters;t&&(i.RTCRtpSender.prototype.getParameters=function(){let s=t.apply(this,arguments);return"encodings"in s||(s.encodings=[].concat(this.sendEncodings||[{}])),s})}function Hu(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;let t=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function Gu(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;let t=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}var Sm=xt(()=>{"use strict";ts();ym();vm()});var Ec={};ia(Ec,{shimAudioContext:()=>Ju,shimCallbacksAPI:()=>Xu,shimConstraints:()=>Mm,shimCreateOfferLegacy:()=>Zu,shimGetUserMedia:()=>qu,shimLocalStreamsAPI:()=>Vu,shimRTCIceServerUrls:()=>Yu,shimRemoteStreamsAPI:()=>Wu,shimTrackEventTransceiver:()=>$u});function Vu(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){let e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(s=>e.call(this,s,n)),n.getVideoTracks().forEach(s=>e.call(this,s,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...s){return s&&s.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);let n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);let s=t.getTracks();this.getSenders().forEach(r=>{s.includes(r.track)&&this.removeTrack(r)})})}}function Wu(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(s=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(s))return;this._remoteStreams.push(s);let r=new Event("addstream");r.stream=s,this.dispatchEvent(r)})})}});let e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){let n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(s){s.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);let o=new Event("addstream");o.stream=r,n.dispatchEvent(o)})}),e.apply(n,arguments)}}}function Xu(i){if(typeof i!="object"||!i.RTCPeerConnection)return;let e=i.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,s=e.setLocalDescription,r=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(c,h){let u=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[u]);return h?(d.then(c,h),Promise.resolve()):d},e.createAnswer=function(c,h){let u=arguments.length>=2?arguments[2]:arguments[0],d=n.apply(this,[u]);return h?(d.then(c,h),Promise.resolve()):d};let a=function(l,c,h){let u=s.apply(this,[l]);return h?(u.then(c,h),Promise.resolve()):u};e.setLocalDescription=a,a=function(l,c,h){let u=r.apply(this,[l]);return h?(u.then(c,h),Promise.resolve()):u},e.setRemoteDescription=a,a=function(l,c,h){let u=o.apply(this,[l]);return h?(u.then(c,h),Promise.resolve()):u},e.addIceCandidate=a}function qu(i){let e=i&&i.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){let t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=s=>n(Mm(s))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=function(n,s,r){e.mediaDevices.getUserMedia(n).then(s,r)}.bind(e))}function Mm(i){return i&&i.video!==void 0?Object.assign({},i,{video:Tu(i.video)}):i}function Yu(i){if(!i.RTCPeerConnection)return;let e=i.RTCPeerConnection;i.RTCPeerConnection=function(n,s){if(n&&n.iceServers){let r=[];for(let o=0;o<n.iceServers.length;o++){let a=n.iceServers[o];a.urls===void 0&&a.url?(Cr("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,r.push(a)):r.push(n.iceServers[o])}n.iceServers=r}return new e(n,s)},i.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function $u(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Zu(i){let e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);let s=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveAudio===!0&&!s&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);let r=this.getTransceivers().find(o=>o.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function Ju(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}var bm=xt(()=>{"use strict";ts()});var ju=vd((uT,Ku)=>{"use strict";var le={};le.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)};le.localCName=le.generateIdentifier();le.splitLines=function(i){return i.trim().split(`
`).map(e=>e.trim())};le.splitSections=function(i){return i.split(`
m=`).map((t,n)=>(n>0?"m="+t:t).trim()+`\r
`)};le.getDescription=function(i){let e=le.splitSections(i);return e&&e[0]};le.getMediaSections=function(i){let e=le.splitSections(i);return e.shift(),e};le.matchPrefix=function(i,e){return le.splitLines(i).filter(t=>t.indexOf(e)===0)};le.parseCandidate=function(i){let e;i.indexOf("a=candidate:")===0?e=i.substring(12).split(" "):e=i.substring(10).split(" ");let t={foundation:e[0],component:{1:"rtp",2:"rtcp"}[e[1]]||e[1],protocol:e[2].toLowerCase(),priority:parseInt(e[3],10),ip:e[4],address:e[4],port:parseInt(e[5],10),type:e[7]};for(let n=8;n<e.length;n+=2)switch(e[n]){case"raddr":t.relatedAddress=e[n+1];break;case"rport":t.relatedPort=parseInt(e[n+1],10);break;case"tcptype":t.tcpType=e[n+1];break;case"ufrag":t.ufrag=e[n+1],t.usernameFragment=e[n+1];break;default:t[e[n]]===void 0&&(t[e[n]]=e[n+1]);break}return t};le.writeCandidate=function(i){let e=[];e.push(i.foundation);let t=i.component;t==="rtp"?e.push(1):t==="rtcp"?e.push(2):e.push(t),e.push(i.protocol.toUpperCase()),e.push(i.priority),e.push(i.address||i.ip),e.push(i.port);let n=i.type;return e.push("typ"),e.push(n),n!=="host"&&i.relatedAddress&&i.relatedPort!==void 0&&(e.push("raddr"),e.push(i.relatedAddress),e.push("rport"),e.push(i.relatedPort)),i.tcpType&&i.protocol.toLowerCase()==="tcp"&&(e.push("tcptype"),e.push(i.tcpType)),(i.usernameFragment||i.ufrag)&&(e.push("ufrag"),e.push(i.usernameFragment||i.ufrag)),"candidate:"+e.join(" ")};le.parseIceOptions=function(i){return i.substring(14).split(" ")};le.parseRtpMap=function(i){let e=i.substring(9).split(" "),t={payloadType:parseInt(e.shift(),10)};return e=e[0].split("/"),t.name=e[0],t.clockRate=parseInt(e[1],10),t.channels=e.length===3?parseInt(e[2],10):1,t.numChannels=t.channels,t};le.writeRtpMap=function(i){let e=i.payloadType;i.preferredPayloadType!==void 0&&(e=i.preferredPayloadType);let t=i.channels||i.numChannels||1;return"a=rtpmap:"+e+" "+i.name+"/"+i.clockRate+(t!==1?"/"+t:"")+`\r
`};le.parseExtmap=function(i){let e=i.substring(9).split(" ");return{id:parseInt(e[0],10),direction:e[0].indexOf("/")>0?e[0].split("/")[1]:"sendrecv",uri:e[1],attributes:e.slice(2).join(" ")}};le.writeExtmap=function(i){return"a=extmap:"+(i.id||i.preferredId)+(i.direction&&i.direction!=="sendrecv"?"/"+i.direction:"")+" "+i.uri+(i.attributes?" "+i.attributes:"")+`\r
`};le.parseFmtp=function(i){let e={},t=i.substring(i.indexOf(" ")+1).split(";");for(let n=0;n<t.length;n++){let[s,...r]=t[n].trim().split("=");e[s.trim()]=r.length?r.join("="):void 0}return e};le.writeFmtp=function(i){let e="",t=i.payloadType;if(i.preferredPayloadType!==void 0&&(t=i.preferredPayloadType),i.parameters&&Object.keys(i.parameters).length){let n=[];Object.keys(i.parameters).forEach(s=>{i.parameters[s]!==void 0?n.push(s+"="+i.parameters[s]):n.push(s)}),e+="a=fmtp:"+t+" "+n.join(";")+`\r
`}return e};le.parseRtcpFb=function(i){let e=i.substring(i.indexOf(" ")+1).split(" ");return{type:e.shift(),parameter:e.join(" ")}};le.writeRtcpFb=function(i){let e="",t=i.payloadType;return i.preferredPayloadType!==void 0&&(t=i.preferredPayloadType),i.rtcpFeedback&&i.rtcpFeedback.length&&i.rtcpFeedback.forEach(n=>{e+="a=rtcp-fb:"+t+" "+n.type+(n.parameter&&n.parameter.length?" "+n.parameter:"")+`\r
`}),e};le.parseSsrcMedia=function(i){let e=i.indexOf(" "),t={ssrc:parseInt(i.substring(7,e),10)},n=i.indexOf(":",e);return n>-1?(t.attribute=i.substring(e+1,n),t.value=i.substring(n+1)):t.attribute=i.substring(e+1),t};le.parseSsrcGroup=function(i){let e=i.substring(13).split(" ");return{semantics:e.shift(),ssrcs:e.map(t=>parseInt(t,10))}};le.getMid=function(i){let e=le.matchPrefix(i,"a=mid:")[0];if(e)return e.substring(6)};le.parseFingerprint=function(i){let e=i.substring(14).split(" ");return{algorithm:e[0].toLowerCase(),value:e[1].toUpperCase()}};le.getDtlsParameters=function(i,e){return{role:"auto",fingerprints:le.matchPrefix(i+e,"a=fingerprint:").map(le.parseFingerprint)}};le.writeDtlsParameters=function(i,e){let t="a=setup:"+e+`\r
`;return i.fingerprints.forEach(n=>{t+="a=fingerprint:"+n.algorithm+" "+n.value+`\r
`}),t};le.parseCryptoLine=function(i){let e=i.substring(9).split(" ");return{tag:parseInt(e[0],10),cryptoSuite:e[1],keyParams:e[2],sessionParams:e.slice(3)}};le.writeCryptoLine=function(i){return"a=crypto:"+i.tag+" "+i.cryptoSuite+" "+(typeof i.keyParams=="object"?le.writeCryptoKeyParams(i.keyParams):i.keyParams)+(i.sessionParams?" "+i.sessionParams.join(" "):"")+`\r
`};le.parseCryptoKeyParams=function(i){if(i.indexOf("inline:")!==0)return null;let e=i.substring(7).split("|");return{keyMethod:"inline",keySalt:e[0],lifeTime:e[1],mkiValue:e[2]?e[2].split(":")[0]:void 0,mkiLength:e[2]?e[2].split(":")[1]:void 0}};le.writeCryptoKeyParams=function(i){return i.keyMethod+":"+i.keySalt+(i.lifeTime?"|"+i.lifeTime:"")+(i.mkiValue&&i.mkiLength?"|"+i.mkiValue+":"+i.mkiLength:"")};le.getCryptoParameters=function(i,e){return le.matchPrefix(i+e,"a=crypto:").map(le.parseCryptoLine)};le.getIceParameters=function(i,e){let t=le.matchPrefix(i+e,"a=ice-ufrag:")[0],n=le.matchPrefix(i+e,"a=ice-pwd:")[0];return t&&n?{usernameFragment:t.substring(12),password:n.substring(10)}:null};le.writeIceParameters=function(i){let e="a=ice-ufrag:"+i.usernameFragment+`\r
a=ice-pwd:`+i.password+`\r
`;return i.iceLite&&(e+=`a=ice-lite\r
`),e};le.parseRtpParameters=function(i){let e={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},n=le.splitLines(i)[0].split(" ");e.profile=n[2];for(let r=3;r<n.length;r++){let o=n[r],a=le.matchPrefix(i,"a=rtpmap:"+o+" ")[0];if(a){let l=le.parseRtpMap(a),c=le.matchPrefix(i,"a=fmtp:"+o+" ");switch(l.parameters=c.length?le.parseFmtp(c[0]):{},l.rtcpFeedback=le.matchPrefix(i,"a=rtcp-fb:"+o+" ").map(le.parseRtcpFb),e.codecs.push(l),l.name.toUpperCase()){case"RED":case"ULPFEC":e.fecMechanisms.push(l.name.toUpperCase());break;default:break}}}le.matchPrefix(i,"a=extmap:").forEach(r=>{e.headerExtensions.push(le.parseExtmap(r))});let s=le.matchPrefix(i,"a=rtcp-fb:* ").map(le.parseRtcpFb);return e.codecs.forEach(r=>{s.forEach(o=>{r.rtcpFeedback.find(l=>l.type===o.type&&l.parameter===o.parameter)||r.rtcpFeedback.push(o)})}),e};le.writeRtpDescription=function(i,e){let t="";t+="m="+i+" ",t+=e.codecs.length>0?"9":"0",t+=" "+(e.profile||"UDP/TLS/RTP/SAVPF")+" ",t+=e.codecs.map(s=>s.preferredPayloadType!==void 0?s.preferredPayloadType:s.payloadType).join(" ")+`\r
`,t+=`c=IN IP4 0.0.0.0\r
`,t+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,e.codecs.forEach(s=>{t+=le.writeRtpMap(s),t+=le.writeFmtp(s),t+=le.writeRtcpFb(s)});let n=0;return e.codecs.forEach(s=>{s.maxptime>n&&(n=s.maxptime)}),n>0&&(t+="a=maxptime:"+n+`\r
`),e.headerExtensions&&e.headerExtensions.forEach(s=>{t+=le.writeExtmap(s)}),t};le.parseRtpEncodingParameters=function(i){let e=[],t=le.parseRtpParameters(i),n=t.fecMechanisms.indexOf("RED")!==-1,s=t.fecMechanisms.indexOf("ULPFEC")!==-1,r=le.matchPrefix(i,"a=ssrc:").map(h=>le.parseSsrcMedia(h)).filter(h=>h.attribute==="cname"),o=r.length>0&&r[0].ssrc,a,l=le.matchPrefix(i,"a=ssrc-group:FID").map(h=>h.substring(17).split(" ").map(d=>parseInt(d,10)));l.length>0&&l[0].length>1&&l[0][0]===o&&(a=l[0][1]),t.codecs.forEach(h=>{if(h.name.toUpperCase()==="RTX"&&h.parameters.apt){let u={ssrc:o,codecPayloadType:parseInt(h.parameters.apt,10)};o&&a&&(u.rtx={ssrc:a}),e.push(u),n&&(u=JSON.parse(JSON.stringify(u)),u.fec={ssrc:o,mechanism:s?"red+ulpfec":"red"},e.push(u))}}),e.length===0&&o&&e.push({ssrc:o});let c=le.matchPrefix(i,"b=");return c.length&&(c[0].indexOf("b=TIAS:")===0?c=parseInt(c[0].substring(7),10):c[0].indexOf("b=AS:")===0?c=parseInt(c[0].substring(5),10)*1e3*.95-2e3*8:c=void 0,e.forEach(h=>{h.maxBitrate=c})),e};le.parseRtcpParameters=function(i){let e={},t=le.matchPrefix(i,"a=ssrc:").map(r=>le.parseSsrcMedia(r)).filter(r=>r.attribute==="cname")[0];t&&(e.cname=t.value,e.ssrc=t.ssrc);let n=le.matchPrefix(i,"a=rtcp-rsize");e.reducedSize=n.length>0,e.compound=n.length===0;let s=le.matchPrefix(i,"a=rtcp-mux");return e.mux=s.length>0,e};le.writeRtcpParameters=function(i){let e="";return i.reducedSize&&(e+=`a=rtcp-rsize\r
`),i.mux&&(e+=`a=rtcp-mux\r
`),i.ssrc!==void 0&&i.cname&&(e+="a=ssrc:"+i.ssrc+" cname:"+i.cname+`\r
`),e};le.parseMsid=function(i){let e,t=le.matchPrefix(i,"a=msid:");if(t.length===1)return e=t[0].substring(7).split(" "),{stream:e[0],track:e[1]};let n=le.matchPrefix(i,"a=ssrc:").map(s=>le.parseSsrcMedia(s)).filter(s=>s.attribute==="msid");if(n.length>0)return e=n[0].value.split(" "),{stream:e[0],track:e[1]}};le.parseSctpDescription=function(i){let e=le.parseMLine(i),t=le.matchPrefix(i,"a=max-message-size:"),n;t.length>0&&(n=parseInt(t[0].substring(19),10)),isNaN(n)&&(n=65536);let s=le.matchPrefix(i,"a=sctp-port:");if(s.length>0)return{port:parseInt(s[0].substring(12),10),protocol:e.fmt,maxMessageSize:n};let r=le.matchPrefix(i,"a=sctpmap:");if(r.length>0){let o=r[0].substring(10).split(" ");return{port:parseInt(o[0],10),protocol:o[1],maxMessageSize:n}}};le.writeSctpDescription=function(i,e){let t=[];return i.protocol!=="DTLS/SCTP"?t=["m="+i.kind+" 9 "+i.protocol+" "+e.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+e.port+`\r
`]:t=["m="+i.kind+" 9 "+i.protocol+" "+e.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+e.port+" "+e.protocol+` 65535\r
`],e.maxMessageSize!==void 0&&t.push("a=max-message-size:"+e.maxMessageSize+`\r
`),t.join("")};le.generateSessionId=function(){return Math.random().toString().substr(2,22)};le.writeSessionBoilerplate=function(i,e,t){let n,s=e!==void 0?e:2;return i?n=i:n=le.generateSessionId(),`v=0\r
o=`+(t||"thisisadapterortc")+" "+n+" "+s+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`};le.getDirection=function(i,e){let t=le.splitLines(i);for(let n=0;n<t.length;n++)switch(t[n]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return t[n].substring(2);default:}return e?le.getDirection(e):"sendrecv"};le.getKind=function(i){return le.splitLines(i)[0].split(" ")[0].substring(2)};le.isRejected=function(i){return i.split(" ",2)[1]==="0"};le.parseMLine=function(i){let t=le.splitLines(i)[0].substring(2).split(" ");return{kind:t[0],port:parseInt(t[1],10),protocol:t[2],fmt:t.slice(3).join(" ")}};le.parseOLine=function(i){let t=le.matchPrefix(i,"o=")[0].substring(2).split(" ");return{username:t[0],sessionId:t[1],sessionVersion:parseInt(t[2],10),netType:t[3],addressType:t[4],address:t[5]}};le.isValidSDP=function(i){if(typeof i!="string"||i.length===0)return!1;let e=le.splitLines(i);for(let t=0;t<e.length;t++)if(e[t].length<2||e[t].charAt(1)!=="=")return!1;return!0};typeof Ku=="object"&&(Ku.exports=le)});var Qu={};ia(Qu,{removeExtmapAllowMixed:()=>Cc,shimAddIceCandidateNullOrEmpty:()=>Wo,shimConnectionState:()=>wc,shimMaxMessageSize:()=>Go,shimParameterlessSetLocalDescription:()=>Xo,shimRTCIceCandidate:()=>Ho,shimRTCIceCandidateRelayProtocol:()=>Tc,shimSendThrowTypeError:()=>Vo});function Ho(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;let e=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){let s=new e(n),r=Ar.default.parseCandidate(n.candidate);for(let o in r)o in s||Object.defineProperty(s,o,{value:r[o]});return s.toJSON=function(){return{candidate:s.candidate,sdpMid:s.sdpMid,sdpMLineIndex:s.sdpMLineIndex,usernameFragment:s.usernameFragment}},s}return new e(n)},i.RTCIceCandidate.prototype=e.prototype,di(i,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new i.RTCIceCandidate(t.candidate),writable:"false"}),t))}function Tc(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||di(i,"icecandidate",e=>{if(e.candidate){let t=Ar.default.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Go(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});let t=function(a){if(!a||!a.sdp)return!1;let l=Ar.default.splitSections(a.sdp);return l.shift(),l.some(c=>{let h=Ar.default.parseMLine(c);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(a){let l=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(l===null||l.length<2)return-1;let c=parseInt(l[1],10);return c!==c?-1:c},s=function(a){let l=65536;return e.browser==="firefox"&&(e.version<57?a===-1?l=16384:l=2147483637:e.version<60?l=e.version===57?65535:65536:l=2147483637),l},r=function(a,l){let c=65536;e.browser==="firefox"&&e.version===57&&(c=65535);let h=Ar.default.matchPrefix(a.sdp,"a=max-message-size:");return h.length>0?c=parseInt(h[0].substring(19),10):e.browser==="firefox"&&l!==-1&&(c=2147483637),c},o=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){let{sdpSemantics:l}=this.getConfiguration();l==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){let l=n(arguments[0]),c=s(l),h=r(arguments[0],l),u;c===0&&h===0?u=Number.POSITIVE_INFINITY:c===0||h===0?u=Math.max(c,h):u=Math.min(c,h);let d={};Object.defineProperty(d,"maxMessageSize",{get(){return u}}),this._sctp=d}return o.apply(this,arguments)}}function Vo(i,e){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(s,r){let o=s.send;s.send=function(){let l=arguments[0],c=l.length||l.size||l.byteLength;if(s.readyState==="open"&&r.sctp&&c>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return o.apply(s,arguments)}}let n=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){let r=n.apply(this,arguments);return t(r,this),r},di(i,"datachannel",s=>(t(s.channel,s.target),s))}function wc(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;let e=i.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{let n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=s=>{let r=s.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;let o=new Event("connectionstatechange",s);r.dispatchEvent(o)}return s},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function Cc(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;let t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(s){if(s&&s.sdp&&s.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){let r=s.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&s instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:s.type,sdp:r}):s.sdp=r}return t.apply(this,arguments)}}function Wo(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;let t=i.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Xo(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;let t=i.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let s=arguments[0]||{};if(typeof s!="object"||s.type&&s.sdp)return t.apply(this,arguments);if(s={type:s.type,sdp:s.sdp},!s.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":s.type="offer";break;default:s.type="answer";break}return s.sdp||s.type!=="offer"&&s.type!=="answer"?t.apply(this,[s]):(s.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}var Ar,Em=xt(()=>{"use strict";Ar=Sd(ju());ts()});function Tm({window:i}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){let t=zo,n=fm(i),s={browserDetails:n,commonShim:Qu,extractVersion:wr,disableLog:um,disableWarnings:dm,sdp:Dv};switch(n.browser){case"chrome":if(!vc||!_c||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),s;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),s;t("adapter.js shimming chrome."),s.browserShim=vc,Wo(i,n),Xo(i,n),yc(i,n),Cu(i,n),_c(i,n),Au(i,n),Iu(i,n),Ru(i,n),Pu(i,n),Lu(i,n),Ho(i,n),Tc(i,n),wc(i,n),Go(i,n),Vo(i,n),Cc(i,n);break;case"firefox":if(!bc||!Mc||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),s;t("adapter.js shimming firefox."),s.browserShim=bc,Wo(i,n),Xo(i,n),Sc(i,n),Mc(i,n),Nu(i,n),Du(i,n),Bu(i,n),Uu(i,n),Ou(i,n),Fu(i,n),ku(i,n),zu(i,n),Hu(i,n),Gu(i,n),Ho(i,n),wc(i,n),Go(i,n),Vo(i,n);break;case"safari":if(!Ec||!e.shimSafari)return t("Safari shim is not included in this adapter release."),s;t("adapter.js shimming safari."),s.browserShim=Ec,Wo(i,n),Xo(i,n),Yu(i,n),Zu(i,n),Xu(i,n),Vu(i,n),Wu(i,n),$u(i,n),qu(i,n),Ju(i,n),Ho(i,n),Tc(i,n),Go(i,n),Vo(i,n),Cc(i,n);break;default:t("Unsupported browser!");break}return s}var Dv,wm=xt(()=>{ts();xm();Sm();bm();Em();Dv=Sd(ju())});var Nv,ed,Cm=xt(()=>{"use strict";wm();Nv=Tm({window:typeof window>"u"?void 0:window}),ed=Nv});function As(i,e,t,n){Object.defineProperty(i,e,{get:t,set:n,enumerable:!0,configurable:!0})}function Uv(i){let e=0;for(let s of i)e+=s.byteLength;let t=new Uint8Array(e),n=0;for(let s of i)t.set(s,n),n+=s.byteLength;return t}function Jo(){}function kv(i,e,t){this.fn=i,this.context=e,this.once=t||!1}function Pm(i,e,t,n,s){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new kv(t,n||i,s),o=En?En+e:e;return i._events[o]?i._events[o].fn?i._events[o]=[i._events[o],r]:i._events[o].push(r):(i._events[o]=r,i._eventsCount++),i}function Ac(i,e){--i._eventsCount===0?i._events=new Jo:delete i._events[e]}function yn(){this._events=new Jo,this._eventsCount=0}var Rc,td,qo,Ov,Rm,Am,nd,Rn,Bv,id,ke,md,Fv,En,Rs,is,Kt,sd,gd,Uc,ns,xn,Im,rd,Pc,Ic,od,Lc,ud,$o,Dc,ad,dd,fd,Cs,Nc,Ko,Yo,ld,cd,pd,Zo,hd,Lm,Dm=xt(()=>{am();Cm();Rc=class{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{let t=[],n=e.byteLength,s=Math.ceil(n/this.chunkedMTU),r=0,o=0;for(;o<n;){let a=Math.min(n,o+this.chunkedMTU),l=e.slice(o,a),c={__peerData:this._dataCount,n:r,data:l,total:s};t.push(c),o=a,r++}return this._dataCount++,t}}};td=ed.default||ed,qo=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){let i=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?e>=this.minChromeVersion:i==="firefox"?e>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return td.browserDetails.browser}getVersion(){return td.browserDetails.version||0}isUnifiedPlanSupported(){let i=this.getBrowser(),e=td.browserDetails.version||0;if(i==="chrome"&&e<this.minChromeVersion)return!1;if(i==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},Ov=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),Rm=()=>Math.random().toString(36).slice(2),Am={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"},nd=class extends Rc{noop(){}blobToArrayBuffer(e,t){let n=new FileReader;return n.onload=function(s){s.target&&t(s.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=Am,this.browser=qo.getBrowser(),this.browserVersion=qo.getVersion(),this.pack=bu,this.unpack=Mu,this.supports=(function(){let t={browser:qo.isBrowserSupported(),webRTC:qo.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(Am),t.audioVideo=!0;let s;try{s=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!s.ordered;try{s.binaryType="blob",t.binaryBlob=!qo.isIOS}catch{}}catch{}finally{s&&s.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=Ov,this.randomToken=Rm}},Rn=new nd,Bv="PeerJS: ",id=class{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){let n=[Bv,...t];for(let s in n)n[s]instanceof Error&&(n[s]="("+n[s].name+") "+n[s].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}},ke=new id,md={},Fv=Object.prototype.hasOwnProperty,En="~";Object.create&&(Jo.prototype=Object.create(null),new Jo().__proto__||(En=!1));yn.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)Fv.call(t,n)&&e.push(En?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};yn.prototype.listeners=function(e){var t=En?En+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var s=0,r=n.length,o=new Array(r);s<r;s++)o[s]=n[s].fn;return o};yn.prototype.listenerCount=function(e){var t=En?En+e:e,n=this._events[t];return n?n.fn?1:n.length:0};yn.prototype.emit=function(e,t,n,s,r,o){var a=En?En+e:e;if(!this._events[a])return!1;var l=this._events[a],c=arguments.length,h,u;if(l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),c){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,t),!0;case 3:return l.fn.call(l.context,t,n),!0;case 4:return l.fn.call(l.context,t,n,s),!0;case 5:return l.fn.call(l.context,t,n,s,r),!0;case 6:return l.fn.call(l.context,t,n,s,r,o),!0}for(u=1,h=new Array(c-1);u<c;u++)h[u-1]=arguments[u];l.fn.apply(l.context,h)}else{var d=l.length,f;for(u=0;u<d;u++)switch(l[u].once&&this.removeListener(e,l[u].fn,void 0,!0),c){case 1:l[u].fn.call(l[u].context);break;case 2:l[u].fn.call(l[u].context,t);break;case 3:l[u].fn.call(l[u].context,t,n);break;case 4:l[u].fn.call(l[u].context,t,n,s);break;default:if(!h)for(f=1,h=new Array(c-1);f<c;f++)h[f-1]=arguments[f];l[u].fn.apply(l[u].context,h)}}return!0};yn.prototype.on=function(e,t,n){return Pm(this,e,t,n,!1)};yn.prototype.once=function(e,t,n){return Pm(this,e,t,n,!0)};yn.prototype.removeListener=function(e,t,n,s){var r=En?En+e:e;if(!this._events[r])return this;if(!t)return Ac(this,r),this;var o=this._events[r];if(o.fn)o.fn===t&&(!s||o.once)&&(!n||o.context===n)&&Ac(this,r);else{for(var a=0,l=[],c=o.length;a<c;a++)(o[a].fn!==t||s&&!o[a].once||n&&o[a].context!==n)&&l.push(o[a]);l.length?this._events[r]=l.length===1?l[0]:l:Ac(this,r)}return this};yn.prototype.removeAllListeners=function(e){var t;return e?(t=En?En+e:e,this._events[t]&&Ac(this,t)):(this._events=new Jo,this._eventsCount=0),this};yn.prototype.off=yn.prototype.removeListener;yn.prototype.addListener=yn.prototype.on;yn.prefixed=En;yn.EventEmitter=yn;md=yn;Rs={};As(Rs,"ConnectionType",()=>is);As(Rs,"PeerErrorType",()=>Kt);As(Rs,"BaseConnectionErrorType",()=>sd);As(Rs,"DataConnectionErrorType",()=>gd);As(Rs,"SerializationType",()=>Uc);As(Rs,"SocketEventType",()=>ns);As(Rs,"ServerMessageType",()=>xn);is=(function(i){return i.Data="data",i.Media="media",i})({}),Kt=(function(i){return i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc",i})({}),sd=(function(i){return i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed",i})({}),gd=(function(i){return i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big",i})({}),Uc=(function(i){return i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw",i})({}),ns=(function(i){return i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close",i})({}),xn=(function(i){return i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE",i})({}),Im="1.5.5",rd=class extends md.EventEmitter{constructor(e,t,n,s,r,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];let a=e?"wss://":"ws://";this._baseUrl=a+t+":"+n+s+"peerjs?key="+r}start(e,t){this._id=e;let n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+Im),this._disconnected=!1,this._socket.onmessage=s=>{let r;try{r=JSON.parse(s.data),ke.log("Server message received:",r)}catch{ke.log("Invalid server message",s.data);return}this.emit(ns.Message,r)},this._socket.onclose=s=>{this._disconnected||(ke.log("Socket closed.",s),this._cleanup(),this._disconnected=!0,this.emit(ns.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),ke.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){ke.log("Cannot send heartbeat, because socket closed");return}let e=JSON.stringify({type:xn.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){let e=[...this._messagesQueue];this._messagesQueue=[];for(let t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(ns.Error,"Invalid message");return}if(!this._wsOpen())return;let t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}},Pc=class{constructor(e){this.connection=e}startConnection(e){let t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===is.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){let n=this.connection,s={ordered:!!e.reliable},r=t.createDataChannel(n.label,s);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){ke.log("Creating RTCPeerConnection.");let e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){let t=this.connection.peer,n=this.connection.connectionId,s=this.connection.type,r=this.connection.provider;ke.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(ke.log(`Received ICE candidates for ${t}:`,o.candidate),r.socket.send({type:xn.Candidate,payload:{candidate:o.candidate,type:s,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":ke.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(sd.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":ke.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(sd.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":ke.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},ke.log("Listening for data channel"),e.ondatachannel=o=>{ke.log("Received data channel");let a=o.channel;r.getConnection(t,n)._initializeDataChannel(a)},ke.log("Listening for remote stream"),e.ontrack=o=>{ke.log("Received remote stream");let a=o.streams[0],l=r.getConnection(t,n);if(l.type===is.Media){let c=l;this._addStreamToMediaConnection(a,c)}}}cleanup(){ke.log("Cleaning up PeerConnection to "+this.connection.peer);let e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};let t=e.signalingState!=="closed",n=!1,s=this.connection.dataChannel;s&&(n=!!s.readyState&&s.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){let e=this.connection.peerConnection,t=this.connection.provider;try{let n=await e.createOffer(this.connection.options.constraints);ke.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),ke.log("Set localDescription:",n,`for:${this.connection.peer}`);let s={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===is.Data){let r=this.connection;s={...s,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:xn.Offer,payload:s,dst:this.connection.peer})}catch(s){s!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(Kt.WebRTC,s),ke.log("Failed to setLocalDescription, ",s))}}catch(n){t.emitError(Kt.WebRTC,n),ke.log("Failed to createOffer, ",n)}}async _makeAnswer(){let e=this.connection.peerConnection,t=this.connection.provider;try{let n=await e.createAnswer();ke.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),ke.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:xn.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(s){t.emitError(Kt.WebRTC,s),ke.log("Failed to setLocalDescription, ",s)}}catch(n){t.emitError(Kt.WebRTC,n),ke.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);let n=this.connection.peerConnection,s=this.connection.provider;ke.log("Setting remote description",t);let r=this;try{await n.setRemoteDescription(t),ke.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(o){s.emitError(Kt.WebRTC,o),ke.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){ke.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),ke.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(Kt.WebRTC,t),ke.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(ke.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return ke.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){ke.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}},Ic=class extends md.EventEmitter{emitError(e,t){ke.error("Error:",t),this.emit("error",new od(`${e}`,t))}},od=class extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}},Lc=class extends Ic{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}},$o=class $o extends Lc{get type(){return is.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||$o.ID_PREFIX+Rn.randomToken(),this._negotiator=new Pc(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{ke.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{ke.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){ke.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){let t=e.type,n=e.payload;switch(e.type){case xn.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case xn.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:ke.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){ke.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});let n=this.provider._getMessages(this.connectionId);for(let s of n)this.handleMessage(s);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};ud=new WeakMap,Ur($o,ud,$o.ID_PREFIX="mc_");Dc=$o,ad=class{constructor(e){this._options=e}_buildRequest(e){let t=this._options.secure?"https":"http",{host:n,port:s,path:r,key:o}=this._options,a=new URL(`${t}://${n}:${s}${r}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",Im),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{let e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){ke.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Rn.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{let e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Rn.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw ke.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}},Cs=class Cs extends Lc{get type(){return is.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||Cs.ID_PREFIX+Rm(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new Pc(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{ke.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{ke.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{ke.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(gd.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){let t=e.payload;switch(e.type){case xn.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case xn.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:ke.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};dd=new WeakMap,fd=new WeakMap,Ur(Cs,dd,Cs.ID_PREFIX="dc_"),Ur(Cs,fd,Cs.MAX_BUFFERED_AMOUNT=8388608);Nc=Cs,Ko=class extends Nc{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Nc.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return ke.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;let e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}},Yo=class extends Ko{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new Rc,this.serialization=Uc.Binary,this._chunkedData={}}_handleDataMessage({data:e}){let t=Mu(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){let t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];let s=Uv(n.data);this._handleDataMessage({data:s})}}_send(e,t){let n=bu(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){let t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){let t=this.chunker.chunk(e);ke.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(let n of t)this.send(n,!0)}},ld=class extends Ko{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=Uc.None}},cd=class extends Ko{_handleDataMessage({data:e}){let t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){let n=this.encoder.encode(this.stringify(e));if(n.byteLength>=Rn.chunkedMTU){this.emitError(gd.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=Uc.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}},Zo=class Zo extends Ic{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){let e=Object.create(null);for(let[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:ld,json:cd,binary:Yo,"binary-utf8":Yo,default:Yo},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:Rn.CLOUD_HOST,port:Rn.CLOUD_PORT,path:"/",key:Zo.DEFAULT_KEY,token:Rn.randomToken(),config:Rn.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Rn.CLOUD_HOST?this._options.secure=Rn.isSecure():this._options.host==Rn.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&ke.setLogFunction(this._options.logFunction),ke.logLevel=this._options.debug||0,this._api=new ad(t),this._socket=this._createServerConnection(),!Rn.supports.audioVideo&&!Rn.supports.data){this._delayedAbort(Kt.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!Rn.validateId(n)){this._delayedAbort(Kt.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(s=>this._initialize(s)).catch(s=>this._abort(Kt.ServerError,s))}_createServerConnection(){let e=new rd(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(ns.Message,t=>{this._handleMessage(t)}),e.on(ns.Error,t=>{this._abort(Kt.SocketError,t)}),e.on(ns.Disconnected,()=>{this.disconnected||(this.emitError(Kt.Network,"Lost connection to server."),this.disconnect())}),e.on(ns.Close,()=>{this.disconnected||this._abort(Kt.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){let t=e.type,n=e.payload,s=e.src;switch(t){case xn.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case xn.Error:this._abort(Kt.ServerError,n.msg);break;case xn.IdTaken:this._abort(Kt.UnavailableID,`ID "${this.id}" is taken`);break;case xn.InvalidKey:this._abort(Kt.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case xn.Leave:ke.log(`Received leave message from ${s}`),this._cleanupPeer(s),this._connections.delete(s);break;case xn.Expire:this.emitError(Kt.PeerUnavailable,`Could not connect to peer ${s}`);break;case xn.Offer:{let r=n.connectionId,o=this.getConnection(s,r);if(o&&(o.close(),ke.warn(`Offer received for existing Connection ID:${r}`)),n.type===is.Media){let l=new Dc(s,this,{connectionId:r,_payload:n,metadata:n.metadata});o=l,this._addConnection(s,o),this.emit("call",l)}else if(n.type===is.Data){let l=new this._serializers[n.serialization](s,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});o=l,this._addConnection(s,o),this.emit("connection",l)}else{ke.warn(`Received malformed connection type:${n.type}`);return}let a=this._getMessages(r);for(let l of a)o.handleMessage(l);break}default:{if(!n){ke.warn(`You received a malformed message from ${s} of type ${t}`);return}let r=n.connectionId,o=this.getConnection(s,r);o&&o.peerConnection?o.handleMessage(e):r?this._storeMessage(r,e):ke.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){let t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){ke.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Kt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}let n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){ke.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Kt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){ke.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}let s=new Dc(e,this,{...n,_stream:t});return this._addConnection(e,s),s}_addConnection(e,t){ke.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){let t=this._connections.get(e.peer);if(t){let n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){let n=this._connections.get(e);if(!n)return null;for(let s of n)if(s.connectionId===t)return s;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){ke.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(ke.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(let e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){let t=this._connections.get(e);if(t)for(let n of t)n.close()}disconnect(){if(this.disconnected)return;let e=this.id;ke.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)ke.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)ke.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(Kt.ServerError,t))}};pd=new WeakMap,Ur(Zo,pd,Zo.DEFAULT_KEY="peerjs");hd=Zo,Lm=hd});async function Om(){if(typeof window>"u"||window.location.protocol==="file:")return!1;try{let i=new AbortController,e=setTimeout(()=>i.abort(),1800),t=await fetch("/api/health",{signal:i.signal,cache:"no-store"});if(clearTimeout(e),!t.ok)return!1;let n=await t.json();return n&&n.ok===!0}catch{return!1}}function Ps(i){return String(i||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,6)}var Rr,Nm,Um,zv,Oc,Bm=xt(()=>{Dm();Ii();Rr=[3599615,16723349,16757837,11037695],Nm="nightfall-nx-v1-",Um=/^[A-Z0-9]{4,6}$/,zv=[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478"}];Oc=class{constructor(){this.handlers=new Map,this.mode=null,this.selfId=null,this.roomCode=null,this.hostId=null,this.players=new Map,this.connected=!1,this.ws=null,this.peer=null,this.connections=new Map,this.p2pGuest=null,this.pingTimer=null,this.pingSentAt=0,this.latency=null,this.server=!1,this._closed=!1}on(e,t){return this.handlers.has(e)||this.handlers.set(e,new Set),this.handlers.get(e).add(t),()=>this.handlers.get(e)?.delete(t)}emit(e,t){let n=this.handlers.get(e);if(n)for(let s of n)try{s(t)}catch(r){console.error("Network handler error",e,r)}}get isHost(){return this.selfId!==null&&this.selfId===this.hostId}get playerCount(){return this.players.size+1}getPlayer(e){return this.players.get(e)}async connect({mode:e,room:t,name:n,useServer:s}){return this.name=(n||"OPERATIVE").slice(0,16),this._closed=!1,s?(this.server=!0,this.mode="server",this._connectServer({mode:e,room:t})):(this.server=!1,this.mode="p2p",this._connectP2P({mode:e,room:t}))}_connectServer({mode:e,room:t}){return new Promise((n,s)=>{let r=window.location.protocol==="https:"?"wss":"ws",o=e==="host"?"create":"join",a=o==="join"?Ps(t):"";if(o==="join"&&!Um.test(a)){s(new Error("That room code is not valid."));return}let l=new URLSearchParams({action:o,name:this.name});a&&l.set("room",a);let c=new WebSocket(`${r}://${window.location.host}/ws?${l.toString()}`);this.ws=c;let h=!1,u=setTimeout(()=>{if(!h){h=!0;try{c.close()}catch{}s(new Error("The city server did not answer. Try again or use Peer-to-Peer."))}},12e3),d=f=>{if(!h){h=!0,clearTimeout(u);try{c.close()}catch{}s(new Error(f))}};c.onopen=()=>{this.emit("transport-open"),this._startPing()},c.onerror=()=>{d("Could not reach the multiplayer server.")},c.onclose=()=>{if(!h){d("The room closed before the connection completed.");return}this._closed||(this.connected=!1,this.emit("close",{reason:"The server connection was lost."}))},c.onmessage=f=>{let m;try{m=JSON.parse(f.data)}catch{return}if(m.type==="welcome"){h=!0,clearTimeout(u),this.selfId=m.selfId,this.roomCode=m.roomCode,this.hostId=m.hostId,this.players=new Map((m.players||[]).filter(y=>y.id!==this.selfId).map(y=>[y.id,y])),this.selfPlayer=(m.players||[]).find(y=>y.id===this.selfId)||{id:this.selfId,name:this.name,color:Rr[0]},this.connected=!0,this.latency=0,this.emit("ready",{selfId:this.selfId,self:this.selfPlayer,roomCode:this.roomCode,hostId:this.hostId,players:[...this.players.values()],server:!0});return}if(m.type==="pong"){this.latency=Math.max(1,Math.round(performance.now()-this.pingSentAt)),this.emit("latency",this.latency);return}if(m.type==="peer-join"){this.players.set(m.player.id,m.player),this.emit("playerJoin",m.player);return}if(m.type==="peer-leave"){let y=this.players.get(m.id);this.players.delete(m.id),this.emit("playerLeave",{id:m.id,player:y});return}if(m.type==="host-changed"){this.hostId=m.hostId,this.emit("hostChanged",m.hostId);return}if(m.type==="error"){this.emit("notice",{text:m.message,level:"error"}),h||d(m.message||"Could not join the room.");return}if(m.type==="ping"){this._sendRaw({type:"pong"});return}if(m.type!=="pong"){if(m.type==="room-info"){this.emit("roomInfo",m);return}m.from&&this.emit("message",m)}}})}_stopPing(){this.pingTimer&&clearInterval(this.pingTimer),this.pingTimer=null}_connectP2P({mode:e,room:t}){return new Promise((n,s)=>{let r=!1,o=setTimeout(()=>{r||(r=!0,this._teardown(),s(new Error("Timed out creating the peer link. Move to a different network or deploy the included server.")))},14e3),a=c=>{r=!0,clearTimeout(o),this.connected=!0,this.latency=null,this.emit("ready",c),n(c)},l=c=>{try{return new Lm(c,{debug:0,config:{iceServers:zv}})}catch{return s(new Error("WebRTC is unavailable in this browser.")),null}};if(e==="host"){let c=Ps(t)||Op(5);this.selfId="host",this.roomCode=c,this.hostId="host",this.players=new Map,this.p2pPlayers=new Map,this.p2pHostInfo={id:"host",name:this.name,color:Rr[0]};let h=l(Nm+c);if(!h)return;this.peer=h,h.on("open",()=>{a({selfId:"host",self:this.p2pHostInfo,roomCode:c,hostId:"host",players:[],server:!1})}),h.on("connection",u=>{if(this.p2pGuest){u.on("open",()=>{try{u.send({type:"error",message:"This room already has two players."})}catch{}setTimeout(()=>u.close(),350)});return}let d=()=>this._handleP2PConnection(u,"guest");u.open?d():u.on("open",d),u.on("error",f=>{this.emit("notice",{text:"Peer link error. Check your network.",level:"error"}),console.warn("P2P connection error",f)})}),h.on("error",u=>{console.warn("Peer error",u);let d="Peer-to-peer connection failed.";u?.type==="unavailable-id"?d="That room code is already in use. Try again.":u?.type==="network"||u?.type==="server-error"?d="The public matchmaking service is unreachable. Deploy the included server for a reliable online game.":u?.type==="peer-unavailable"&&(d="No city found with that code. Check the code and try again."),r?this.emit("notice",{text:d,level:"error"}):(clearTimeout(o),r=!0,s(new Error(d)))})}else{let c=Ps(t);if(!Um.test(c)){s(new Error("That room code is not valid."));return}this.roomCode=c,this.selfId="guest",this.hostId="host",this.p2pPlayers=new Map,this.p2pHostInfo=null;let h=l();if(!h)return;this.peer=h;let u=null;h.on("open",()=>{u=h.connect(Nm+c,{reliable:!0,metadata:{name:this.name,color:Rr[1]}}),this.p2pGuest=u,this.connections.set("host",u),u.on("open",()=>{this._startPing(),this._sendToConnection("host",{type:"hello",name:this.name,color:Rr[1]})}),u.on("data",d=>this._receiveP2P(d,"host")),u.on("close",()=>{this._closed||(this.connected=!1,this.emit("close",{reason:"The host closed the city link."}))}),u.on("error",d=>{console.warn("P2P guest connection error",d),r||(clearTimeout(o),r=!0,s(new Error("The peer link dropped. Check both networks and retry.")))})}),h.on("error",d=>{console.warn("Peer error",d);let f="Could not join the peer city.";d?.type==="peer-unavailable"?f="No city found with that code. Ask your friend to check the code.":(d?.type==="network"||d?.type==="server-error")&&(f="The public matchmaking service is unreachable. Try again or use the deployed server."),r?this.emit("notice",{text:f,level:"error"}):(clearTimeout(o),r=!0,this._teardown(),s(new Error(f)))}),this._resolveGuest=a}})}_handleP2PConnection(e,t){this.p2pGuest=e,this.p2pGuestMeta=null,this.connections.set(t,e),e.on("data",n=>{if(n&&n.type==="hello"){let s={id:t,name:(n.name||"OPERATIVE").slice(0,16),color:Rr[1]};this.p2pGuestMeta=s,this.players.set(t,s);let r=[this.p2pHostInfo,s];e.send({type:"welcome",selfId:"guest",roomCode:this.roomCode,hostId:"host",players:r,server:!1}),this.emit("playerJoin",s),this.emit("notice",{text:`${s.name} linked into the district.`,level:"ok"});return}this._receiveP2P(n,t)}),e.on("close",()=>{this._closed||(this.connections.delete(t),this.players.delete(t),this.p2pGuest=null,this.emit("playerLeave",{id:t,player:null}),this.emit("notice",{text:"Your co-op partner disconnected.",level:"warn"}))})}_receiveP2P(e,t){if(!(!e||typeof e!="object")){if(e.type==="welcome"){this.selfId=e.selfId,this.roomCode=e.roomCode,this.hostId=e.hostId,this.players=new Map((e.players||[]).filter(n=>n.id!==this.selfId).map(n=>[n.id,n])),this.selfPlayer=(e.players||[]).find(n=>n.id===this.selfId)||{id:this.selfId,name:this.name,color:Rr[1]},this.connected=!0,this._resolveGuest&&(this._resolveGuest({selfId:this.selfId,self:this.selfPlayer,roomCode:this.roomCode,hostId:this.hostId,players:[...this.players.values()],server:!1}),this._resolveGuest=null),this.emit("notice",{text:"Peer city linked.",level:"ok"});return}if(e.type==="ping"){this._sendToConnection(t,{type:"pong"});return}if(e.type==="pong"){this.latency=this.pingSentAt?Math.max(1,Math.round(performance.now()-this.pingSentAt)):null,this.emit("latency",this.latency);return}if(e.type==="error"){this.emit("notice",{text:e.message||"Peer error.",level:"error"});return}this.emit("message",{...e,from:t})}}_startPing(){this._stopPing(),this.pingTimer=setInterval(()=>{this.connected&&(this.pingSentAt=performance.now(),this.mode==="server"?this._sendRaw({type:"ping"}):this._sendRaw({type:"ping"}))},2600)}_sendToConnection(e,t){if(this.mode==="server"){this._sendRaw(t);return}if(this.isHost){let n=this.connections.get(e);if(n?.open)try{n.send(t)}catch(s){console.warn(s)}}else{let n=this.connections.get("host");if(n?.open)try{n.send(t)}catch(s){console.warn(s)}}}_sendRaw(e){if(this.mode==="server")return this.ws?.readyState===WebSocket.OPEN?(this.ws.send(JSON.stringify(e)),!0):!1;if(this.isHost){let n=!1;for(let s of this.connections.values())if(s?.open)try{s.send(e),n=!0}catch{}return n}let t=this.connections.get("host");if(t?.open)try{return t.send(e),!0}catch{return!1}return!1}send(e,t={}){return this.connected?this._sendRaw({type:e,...t}):!1}_teardown(){this._closed=!0,this._stopPing();try{this.ws?.close()}catch{}try{this.peer?.destroy()}catch{}for(let e of this.connections.values())try{e.close()}catch{}this.connections.clear(),this.ws=null,this.peer=null}close(){this._teardown(),this.connected=!1}}});function zc(i,e){try{let t=localStorage.getItem(i);return t===null?e:t}catch{return e}}function Is(i,e){try{localStorage.setItem(i,e)}catch{}}function Gm(i){return`#${(i??3599615).toString(16).padStart(6,"0")}`}function Wv(i,e,t,n,s,r){let o=s-t,a=r-n,l=i-t,c=e-n,h=o*o+a*a,u=h>1e-8?(l*o+c*a)/h:0;u=Xe(u,0,1);let d=i-(t+o*u),f=e-(n+a*u);return Math.hypot(d,f)}function Qo(i,e,t,n){return Up(i,e,t,n)}var Fm,km,Bc,xd,zm,Hm,Pr,Fc,Hv,jo,kc,Gv,Vv,Hc,Vm=xt(()=>{cn();om();Bm();Ii();Fm="nightfall:sensitivity",km="nightfall:quality",Bc="nightfall:name",xd="nightfall:muted",zm=[2156287,16723349,16757837,11037695,7077816],Hm=34,Pr=12,Fc=120,Hv=30,jo=[{name:"GHOST PROTOCOL",tag:"SECURE THREE DATA CACHES",caches:3,guardBudget:3,droneBudget:3,extractSeconds:8,bonus:3e3},{name:"BLACKOUT RUN",tag:"CUT THE GRID NODES",caches:3,guardBudget:3,droneBudget:4,extractSeconds:9,bonus:3300},{name:"CROWN HEIST",tag:"LIFT FOUR EXECUTIVE CACHES",caches:4,guardBudget:4,droneBudget:4,extractSeconds:10,bonus:3700},{name:"SILENT AUCTION",tag:"RAID THE NIGHT MARKET",caches:4,guardBudget:4,droneBudget:5,extractSeconds:10,bonus:4e3},{name:"ZERO HOUR",tag:"BEAT THE SECURITY SWEEP",caches:5,guardBudget:5,droneBudget:6,extractSeconds:11,bonus:4400},{name:"LAST SIGNAL",tag:"PULL EVERY CACHE OFFLINE",caches:5,guardBudget:5,droneBudget:7,extractSeconds:12,bonus:4800}],kc=new P,Gv=new P,Vv=new P;Hc=class{constructor({scene:e,camera:t,renderer:n,world:s,ui:r,effects:o,audio:a,setQuality:l}){this.scene=e,this.camera=t,this.renderer=n,this.world=s,this.ui=r,this.effects=o,this.audio=a,this.setQualityCallback=l||(()=>{}),this.canvas=n.domElement,this.status="menu",this.busy=!1,this.session=null,this.network=null,this.isHost=!1,this.mission=null,this.missionCount=0,this.completed=!1,this.resultTimer=0,this.currentMode="foot",this.paused=!1,this.chatOpen=!1,this.controlsOpen=!1,this.ignoreUnlock=!1,this.keys=new Set,this.mouseDown=!1,this.aiming=!1,this.cameraYaw=0,this.cameraPitch=-.08,this.driveLookYaw=0,this.drivePitch=.26,this.lastLookMove=0,this.lookSensitivity=Number(zc(Fm,"1"))||1,this.quality=zc(km,"balanced"),this.name=zc(Bc,"GHOST")||"GHOST",this.myColor=3599615,this.myName=this.name,this.serverAvailable=!1,this.serverChecked=!1,this.setQualityCallback(this.quality),this.player=null,this.localChar=null,this.localCharShadow=null,this.localCar=null,this.cars=[],this.shardVisuals=new Map,this.localEnemies=[],this.remoteEnemies=new Map,this.remotePlayers=new Map,this.pings=[],this.shadowTex=rm(),this.elapsed=0,this.menuAngle=0,this.pingSeq=0,this.statePingTimer=0,this.playerStateTimer=0,this.shardFxTimer=0,this.cameraShake=0,this.extractWasInside=!1,this.damageFlashTimer=0,this.lastFpsUpdate=0,this.fps=60,this.currentFov=62,this.hudTick=0,this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onPointerLockChange=this.onPointerLockChange.bind(this),this.onWindowBlur=this.onWindowBlur.bind(this)}async init(){this.bindUI(),this.bindInput(),this.ui.setName(this.name),this.ui.setRoomCode("SOLO",!1),this.ui.setLoading(.92,"CALIBRATING THE NEON GRID");let e=Ps(new URLSearchParams(window.location.search).get("room")||""),t=document.getElementById("roomInput");t&&(t.value=e);try{this.serverAvailable=await Om()}catch{this.serverAvailable=!1}this.serverChecked=!0,this.serverAvailable?this.ui.setServerStatus("online","RELAY ONLINE"):this.ui.setServerStatus("p2p","PEER LINK READY");let n=document.getElementById("sensitivity");n&&(n.value=String(this.lookSensitivity));let s=document.getElementById("muteBtn"),r=zc(xd,"false")==="true";if(this.audio.setMuted(r),s&&(s.textContent=r?"SOUND OFF":"SOUND ON"),this.updateQualityButtons(),this.ui.setLoading(1,"DISTRICT READY"),this.ui.finishLoading(),setTimeout(()=>{this.status==="menu"&&this.ui.showLanding()},500),e){let o=document.getElementById("connectionText");o&&(o.textContent=`Room ${e} loaded \u2014 press JOIN to link up.`)}this.positionMenuCamera(0)}bindUI(){let e=(c,h)=>{let u=document.getElementById(c);u&&u.addEventListener("click",h)};e("hostBtn",()=>this.startOnline("host")),e("joinBtn",()=>this.startOnline("join")),e("soloBtn",()=>this.startSolo()),e("resumeBtn",()=>{this.paused=!1,this.ui.setPaused(!1),this.requestPointerLock()}),e("howToBtn",()=>{this.controlsOpen=!0,this.ui.setControls(!0),document.pointerLockElement&&document.exitPointerLock()}),e("closeControlsBtn",()=>{this.controlsOpen=!1,this.ui.setControls(!1),(this.status==="playing"||this.status==="paused")&&this.requestPointerLock()}),e("copyInviteBtn",()=>this.copyInvite()),e("leaveBtn",()=>this.leaveGame()),e("reloadBtn",()=>window.location.reload()),e("redeployBtn",()=>{this.isHost?this.resetMission():this.network?.connected&&(this.network.send("redeploy"),this.ui.toast("Redeploy requested.","info"))});let t=document.getElementById("nameInput");t&&(t.addEventListener("change",()=>{this.name=(t.value||"GHOST").replace(/[^\w .\-']/g,"").trim().slice(0,14)||"GHOST",t.value=this.name,this.ui.setName(this.name),Is(Bc,this.name)}),t.addEventListener("keydown",c=>{c.key==="Enter"&&this.startOnline("host")}));let n=document.getElementById("roomInput");n&&(n.addEventListener("input",()=>{n.value=Ps(n.value)}),n.addEventListener("keydown",c=>{c.key==="Enter"&&this.startOnline("join")}));let s=document.getElementById("sensitivity");s&&s.addEventListener("input",()=>{this.lookSensitivity=Xe(Number(s.value)||1,.5,2),Is(Fm,String(this.lookSensitivity))});let r=document.getElementById("muteBtn");r&&r.addEventListener("click",()=>{let c=!this.audio.muted;this.audio.setMuted(c),Is(xd,String(c)),r.textContent=c?"SOUND OFF":"SOUND ON"}),document.querySelectorAll("#qualityGroup button").forEach(c=>{c.addEventListener("click",()=>this.applyQuality(c.dataset.quality||"balanced"))});let o=document.getElementById("weatherGroup");o&&o.addEventListener("click",c=>{let h=c.target.closest("button[data-weather]");h&&this.selectWeather(h.dataset.weather)});let a=document.getElementById("weatherTag");a&&a.addEventListener("click",()=>this.cycleWeather());let l=document.getElementById("chatInput");l&&l.addEventListener("keydown",c=>{c.stopPropagation(),c.key==="Enter"?(c.preventDefault(),this.sendChat()):c.key==="Escape"&&(c.preventDefault(),this.toggleChat(!1))})}bindInput(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),document.addEventListener("pointerlockchange",this.onPointerLockChange),window.addEventListener("blur",this.onWindowBlur),this.canvas.addEventListener("contextmenu",e=>e.preventDefault())}bindNetwork(e){e.on("ready",t=>{this.session||this.beginSession({...t,network:e})}),e.on("message",t=>this.onNetMessage(t)),e.on("playerJoin",t=>this.onPlayerJoin(t)),e.on("playerLeave",t=>this.onPlayerLeave(t)),e.on("hostChanged",t=>this.onHostChanged(t)),e.on("latency",()=>{}),e.on("notice",({text:t,level:n})=>{this.ui.toast(t,n==="error"?"error":"info",4200)}),e.on("close",({reason:t})=>{this.session&&(this.status="disconnected",this.ui.setCrosshair(!1),this.ui.setInteraction("",!1),this.ignoreUnlock=!0,document.pointerLockElement&&document.exitPointerLock(),this.ui.showDisconnect(t||"The city link was severed."))})}applyQuality(e){this.quality=e,Is(km,e),this.setQualityCallback(e),this.updateQualityButtons()}updateQualityButtons(){document.querySelectorAll("#qualityGroup button").forEach(e=>{e.classList.toggle("is-active",e.dataset.quality===this.quality)})}async startOnline(e){if(this.busy||this.status!=="menu")return;let t=document.getElementById("nameInput"),n=document.getElementById("roomInput"),s=(t?.value||"GHOST").replace(/[^\w .\-']/g,"").trim().slice(0,14)||"GHOST";this.name=s,Is(Bc,s);let r=Ps(n?.value||"");if(e==="join"&&r.length<4){this.ui.showStartError("Enter the 4\u20136 character room code your partner sent you."),n?.focus();return}this.ui.showStartError(""),this.ui.setBusy(!0,e==="host"?"FOUNDING THE DISTRICT":"LINKING TO THE DISTRICT"),this.busy=!0,this.audio.start();let o=new Oc;this.network=o,this.bindNetwork(o);try{await o.connect({mode:e,room:r,name:s,useServer:this.serverAvailable})}catch(a){o.close(),this.network===o&&(this.network=null),this.session||(this.ui.setBusy(!1),this.ui.showStartError(a?.message||"Could not link to the district."),this.ui.setServerStatus(this.serverAvailable?"online":"p2p",this.serverAvailable?"RELAY ONLINE":"PEER LINK READY"))}finally{this.busy=!1,this.ui.setBusy(!1)}}startSolo(){if(this.busy||this.status!=="menu")return;let e=document.getElementById("nameInput");this.name=(e?.value||"GHOST").replace(/[^\w .\-']/g,"").trim().slice(0,14)||"GHOST",Is(Bc,this.name),this.audio.start(),this.beginSession({network:null,selfId:"solo",self:{id:"solo",name:this.name,color:3599615},roomCode:null,hostId:"solo",players:[],server:!1})}beginSession(e){this.session||(this.session={online:!!e.network,selfId:e.selfId,hostId:e.hostId,roomCode:e.roomCode||null,server:!!e.server,self:e.self||{id:e.selfId,name:this.name,color:3599615}},this.isHost=e.network?e.network.isHost:!0,this.myName=e.self?.name||this.name,this.myColor=e.self?.color??3599615,this.ui.setBusy(!1),this.ui.showStartError(""),this.ui.enterGame(),this.ui.setName(this.myName),this.ui.setRoomCode(this.session.roomCode||"SOLO",this.session.server),this.ui.clearLabels(),this.ui.setMode("foot"),this.ui.setPaused(!1),this.ui.hideDeath(),this.ui.hideResult(),this.ui.hideDisconnect(),this.ui.setAlert(0),this.ui.setAmmo(Pr,Fc,0),this.ui.setVitals(100,100),this.ui.setCrosshair(!0,!1,!1),this.ui.setBoost(1,!1),this.ui.initMinimap(this.world),this.ui.setInteraction("",!1),this.ui.setWeather(this.weatherLabel(),this.world.getWeatherPreset(this.world.weather.kind)?.tagline,this.world.weather.kind),this.ui.showMissionBanner("GHOST PROTOCOL",this.isHost?"SECURE THE DATA CACHES":"SYNCING WITH HOST",this.isHost?"NEW CONTRACT":"CO-OP LINK",4600),this.status="playing",this.paused=!1,this.completed=!1,this.ignoreUnlock=!1,this.currentMode="foot",this.cameraYaw=this.world.spawn.rot,this.cameraPitch=-.08,this.mission=null,this.localCar=null,this.remotePlayers.clear(),this.remoteEnemies.clear(),this.localEnemies=[],this.pings=[],this.elapsed=0,this.createLocalCharacter(this.myColor),this.initCars(),this.world.extractionGroup.visible=!1,this.isHost?this.startMission():this.ui.feed("Waiting for the host to transmit the contract\u2026"),this.session.online?(this.ui.updateRoster({id:this.session.selfId,name:this.myName,color:this.myColor},[...this.network?.players.values()||[]],this.session.hostId),this.isHost?this.ui.feed("City link online. Share the room code with your partner.","ok","LINK"):this.ui.feed("Linked to the host city.","ok","LINK")):this.ui.feed("Solo patrol engaged. Contract ladder is live in the district.","ok","CONTRACT"),this.ui.toast("Click the city to take control.","info",3600),this.ui.setLockHint(!0),this.requestPointerLock(),this.lastFpsUpdate=0,this.playerStateTimer=0,this.statePingTimer=0)}createLocalCharacter(e){this.localChar&&(this.scene.remove(this.localChar.group),this.localChar.group.traverse(a=>{a.isMesh&&(a.geometry?.dispose?.(),Array.isArray(a.material)?a.material.forEach(l=>l.dispose?.()):a.material?.dispose?.())})),this.localCharShadow&&this.scene.remove(this.localCharShadow);let t=[14265226,12157538,9132866,15123105,7226933],n=Math.abs(Number(e)||0)%5;this.localChar=xc({color:e,skin:t[n]}),this.scene.add(this.localChar.group),this.localCharShadow=es(this.shadowTex,2.1),this.localCharShadow.material.opacity=.72,this.scene.add(this.localCharShadow);let s=this.world.spawn,r=this.session?[...this.network?.players?.values()||[]].length:0,o=this.session?.online?r*1.4:0;this.player={pos:new P(s.x+o,0,s.z),yaw:s.rot,bodyYaw:s.rot,velY:0,grounded:!0,health:100,stamina:100,alive:!0,moveSpeed:0,sprinting:!1,exhausted:!1,ammo:Pr,reserve:Fc,reloading:0,fireCooldown:0,lastDamageAt:0,deathTimer:0,wasInCar:!1},this.cameraYaw=s.rot,this.cameraPitch=-.08}initCars(){for(let e of this.cars)this.scene.remove(e.model.group);this.cars=[],this.localCar=null,this.world.carSpawns.forEach((e,t)=>{let n=zm[t%zm.length]??e.color,s=im(n);s.group.position.set(e.x,.02,e.z),s.group.rotation.y=e.rot;let r=es(this.shadowTex,4.6);r.position.y=.03,r.material.opacity=.48,s.group.add(r),this.scene.add(s.group),this.cars.push({id:`car-${t}`,x:e.x,z:e.z,yaw:e.rot,speed:0,steer:0,boost:1,model:s,color:n,occupiedBy:null})})}startMission(){this.missionCount+=1;let e=jo[(this.missionCount-1)%jo.length],t=(this.missionCount-1)%jo.length+1,n=this.world.shardSites,s=Math.min(e.caches,n.length),r=[],o=this.missionCount*2%Math.max(1,n.length);for(let a=0;a<n.length&&r.length<s;a+=1){let l=n[(a+o)%n.length];r.every(c=>Mn(c.x,c.z,l.x,l.z)>32)&&r.push(l)}for(let a of n){if(r.length>=s)break;r.includes(a)||r.push(a)}for(;r.length<s;)r.push({x:-40+r.length*38,z:40,name:"NIGHT MARKET"});this.mission={phase:"collect",shards:r.slice(0,s).map((a,l)=>({id:`shard-${this.missionCount}-${l}`,x:a.x,z:a.z,name:a.name||"CACHE",collected:!1})),elapsed:0,score:0,extraction:{x:this.world.extraction.x,z:this.world.extraction.z},extractProgress:0,extractSeconds:e.extractSeconds,allInside:!1,completeIn:0,contract:this.missionCount,contractName:e.name,contractTag:e.tag,contractIndex:t-1,contractTotal:jo.length,scoreBonus:e.bonus,guardBudget:e.guardBudget,droneBudget:e.droneBudget},this.completed=!1,this.resultTimer=0,this.extractWasInside=!1,this.clearShardVisuals(),this.syncShardVisuals(),this.clearEnemies(),this.isHost&&this.spawnLocalEnemies(),this.world.extractionGroup.visible=!1,this.ui.hideResult(),this.ui.showMissionBanner(e.name,e.tag,"NEW CONTRACT",4400),this.ui.feed(`Contract ${t}/${jo.length} \u2014 ${e.name}. ${s} caches live.`,"ok","CONTRACT"),this.session?.online&&this.isHost&&this.sendFullState(!0)}onKeyDown(e){let t=document.activeElement;if(!(t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"))&&!(this.status==="menu"||this.status==="disconnected")){if(e.code==="Escape"){this.controlsOpen&&(this.controlsOpen=!1,this.ui.setControls(!1),this.status==="paused"&&(this.paused=!1,this.status="playing",this.ui.setPaused(!1)));return}if(this.status!=="result"&&!this.chatOpen&&this.status!=="paused"){if(e.code==="KeyT"&&!e.repeat){this.toggleChat(!0);return}if(!(this.status!=="playing"&&this.status!=="dead")&&(this.keys.add(e.code),!e.repeat))switch(e.code){case"Space":this.currentMode==="foot"&&(e.preventDefault(),this.jump());break;case"KeyF":this.vehicleInteract();break;case"KeyE":this.useInteract();break;case"KeyR":this.currentMode==="car"?this.resetCar():this.startReload();break;case"KeyQ":this.sendMapPing();break;case"KeyV":this.cycleWeather();break;case"KeyM":{let n=!this.audio.muted;this.audio.setMuted(n),Is(xd,String(n));let s=document.getElementById("muteBtn");s&&(s.textContent=n?"SOUND OFF":"SOUND ON"),this.ui.toast(n?"Audio muted.":"Audio on.","info",1600);break}default:break}}}}onKeyUp(e){this.keys.delete(e.code)}onMouseDown(e){if(!(this.status==="menu"||this.status==="disconnected"||this.status==="result")&&this.session){if(document.pointerLockElement!==this.canvas){(this.status==="playing"||this.status==="dead")&&this.requestPointerLock();return}this.paused||this.chatOpen||this.controlsOpen||(e.button===0?(this.mouseDown=!0,e.preventDefault()):e.button===2&&(this.aiming=!0,e.preventDefault()))}}onMouseUp(e){e.button===0&&(this.mouseDown=!1),e.button===2&&(this.aiming=!1)}onMouseMove(e){if(document.pointerLockElement!==this.canvas||this.chatOpen||this.controlsOpen||this.paused)return;let t=this.lookSensitivity;if(this.currentMode==="car"){this.driveLookYaw=Xe(this.driveLookYaw-e.movementX*.0024*t,-2.5,2.5),this.drivePitch=Xe(this.drivePitch+e.movementY*.0016*t,.02,.78),this.lastLookMove=performance.now();return}this.cameraYaw-=e.movementX*.0022*t,this.cameraYaw>Math.PI&&(this.cameraYaw-=Mt),this.cameraYaw<-Math.PI&&(this.cameraYaw+=Mt),this.cameraPitch=Xe(this.cameraPitch-e.movementY*.0019*t,-1.02,.68),this.lastLookMove=performance.now()}onPointerLockChange(){if(document.pointerLockElement===this.canvas){this.ui.setLockHint(!1),this.status==="paused"&&(this.paused=!1,this.status="playing",this.ui.setPaused(!1));return}this.ui.setLockHint(!1),this.mouseDown=!1,this.aiming=!1,this.status==="playing"&&!this.chatOpen&&!this.controlsOpen&&!this.ignoreUnlock&&this.setPaused(!0)}onWindowBlur(){this.keys.clear(),this.mouseDown=!1,this.aiming=!1}requestPointerLock(){if(!(!this.session||this.status==="menu"||this.status==="disconnected"))try{let e=this.canvas.requestPointerLock?.();e?.catch&&e.catch(()=>{})}catch{}}setPaused(e){this.status==="disconnected"||this.status==="result"||this.status==="menu"||this.status!=="dead"&&(this.paused=e,this.status=e?"paused":"playing",this.ui.setPaused(e),this.keys.clear(),this.mouseDown=!1,this.aiming=!1,this.ui.setCrosshair(!e),e&&this.ui.setInteraction("",!1),e&&document.pointerLockElement&&document.exitPointerLock())}toggleChat(e){this.session&&(e&&this.status!=="playing"&&this.status!=="dead"&&this.status!=="paused"||(this.chatOpen=e,this.ui.setChatOpen(e),e?(this.keys.clear(),this.mouseDown=!1,this.aiming=!1):document.pointerLockElement!==this.canvas&&this.requestPointerLock()))}sendChat(){let t=(document.getElementById("chatInput")?.value||"").replace(/[<>]/g,"").trim().slice(0,120);this.toggleChat(!1),t&&(this.ui.chat(this.myName,t,this.myColor),this.network?.send("chat",{text:t,name:this.myName,color:this.myColor}))}sendMapPing(){if(!this.player||!this.player.alive||!this.mission)return;let e=this.currentMode==="car"&&this.localCar?{x:this.localCar.x,z:this.localCar.z}:{x:this.player.pos.x,z:this.player.pos.z};this.pingSeq+=1;let t=`${this.session?.selfId||"solo"}-${this.pingSeq}`;this.addPing(t,this.myName,e.x,e.z,this.myColor),this.network?.send("map-ping",{id:t,name:this.myName,x:e.x,z:e.z,color:this.myColor})}addPing(e,t,n,s,r=16723349){this.pings.some(o=>o.id===e)||(this.pings.push({id:e,name:t||"ALLY",position:new P(n,2.3,s),born:this.elapsed,color:r}),this.pings.length>8&&this.pings.shift(),this.audio.ping(),this.ui.feed(`${(t||"ALLY").toUpperCase()} marked a location.`,"info","PING"))}weatherLabel(e=this.world?.weather?.kind){return this.world?.getWeatherPreset?.(e)?.label||String(e||"RAIN").toUpperCase()}applyWeather(e,t=!1){if(!this.world?.setWeather)return;let n=this.world.weather.kind===e,s=this.world.setWeather(e,!0);this.ui.setWeather?.(s.label,s.tagline,s.id),t&&!n&&(this.ui.toast(`Weather: ${s.label}`,"info",2200),this.ui.feed(`${s.tagline} rolling over the district.`,"info","WEATHER"))}selectWeather(e){let t=(this.world?.weatherList||[]).find(n=>n.id===e);if(t){if(this.world.weather.kind===t.id){this.ui.toast(`${t.label} weather is already active.`,"info",1600);return}if(this.session?.online&&!this.isHost){this.network?.send("weather-request",{weather:t.id,name:this.myName}),this.ui.toast(`Requested ${t.label.toLowerCase()} weather.`,"info",1800);return}this.applyWeather(t.id,!0),this.session?.online&&this.isHost&&this.network?.send("weather",{weather:t.id,by:this.session.selfId,name:this.myName})}}cycleWeather(){let e=this.world?.weatherList||[];if(!e.length)return;let t=e.findIndex(s=>s.id===this.world.weather.kind),n=e[(t+1)%e.length];this.selectWeather(n.id)}jump(){let e=this.player;!e||!e.alive||!e.grounded||this.currentMode!=="foot"||(e.velY=6.1,e.grounded=!1,this.audio.jump())}updatePlayer(e,t){let n=this.player;if(!n)return;if(!n.alive){n.deathTimer-=e,this.ui.updateDeath(n.deathTimer),n.deathTimer<=0&&this.respawn(),this.localChar&&(this.localChar.group.position.set(n.pos.x,0,n.pos.z),this.localCharShadow.position.set(n.pos.x,.045,n.pos.z));return}n.fireCooldown>0&&(n.fireCooldown=Math.max(0,n.fireCooldown-e)),n.reloading>0&&(n.reloading=Math.max(0,n.reloading-e),this.ui.setAmmo(n.ammo,n.reserve,1-n.reloading/1.35),n.reloading===0&&this.finishReload()),n.health>0&&n.health<100&&this.elapsed-n.lastDamageAt>6&&(n.health=Math.min(100,n.health+9*e),this.ui.setVitals(n.health,n.stamina));let s=this.status==="playing"&&!this.paused&&!this.chatOpen&&this.controlsOpen===!1,r=0,o=0,a=!1;if(this.currentMode==="car"){n.stamina=Math.min(100,n.stamina+16*e),n.moveSpeed=0,this.localChar&&(this.localChar.group.visible=!1,this.localCharShadow.visible=!1,this.localCar&&(n.pos.x=this.localCar.x,n.pos.z=this.localCar.z));return}if(s){let m=(this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0)-(this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0),y=(this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0)-(this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0),g=Math.sin(this.cameraYaw),p=Math.cos(this.cameraYaw);r=g*m-p*y,o=p*m+g*y;let _=Math.hypot(r,o);_>.001&&(r/=_,o/=_,a=!0)}let l=s&&a&&!this.aiming&&(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"));n.stamina<=.5&&!n.exhausted?(n.exhausted=!0,this.ui.toast("Stamina spent \u2014 recover before sprinting again.","warn",1900)):n.exhausted&&n.stamina>=30&&(n.exhausted=!1);let c=l&&!n.exhausted&&n.stamina>.5;n.sprinting=c;let h=this.aiming?3.1:c?10.2:5.3;c?n.stamina=Math.max(0,n.stamina-14*e):n.stamina=Math.min(100,n.stamina+20*e);let u=n.grounded?13:5;n.moveSpeed=hi(n.moveSpeed,a&&s?h:0,u,e),n.moveSpeed>.02&&a&&(n.pos.x+=r*n.moveSpeed*e,n.pos.z+=o*n.moveSpeed*e,this.stepAccum=(this.stepAccum||0)+n.moveSpeed*e,this.stepAccum>(c?2.25:1.7)&&(this.stepAccum=0,this.audio.footstep(c))),n.velY-=19.5*e,n.pos.y+=n.velY*e,n.pos.y<=0&&(!n.grounded&&n.velY<-4.2&&this.audio.land(),n.pos.y=0,n.velY=0,n.grounded=!0);for(let m of this.world.colliders)br(n.pos,.46,m);let d=this.world.metro.bounds-4;n.pos.x=Xe(n.pos.x,-d,d),n.pos.z=Xe(n.pos.z,-d,d);let f=this.aiming||t-(n.lastShotAt||0)<.55?this.cameraYaw:a?Math.atan2(r,o):n.bodyYaw;if(n.bodyYaw=Qo(n.bodyYaw,f,11,e),n.yaw=this.cameraYaw,this.localChar&&(this.localChar.group.visible=!0,this.localChar.group.position.copy(n.pos),this.localChar.group.rotation.y=n.bodyYaw,this.localChar.animate(e,t,n.moveSpeed,n.grounded,this.aiming)),this.localCharShadow){this.localCharShadow.visible=!0,this.localCharShadow.position.set(n.pos.x,.045,n.pos.z);let m=Xe(n.pos.y/3,0,.9);this.localCharShadow.material.opacity=.72*(1-m*.8),this.localCharShadow.scale.setScalar(1-m*.3)}}updateVehicle(e,t){let n=this.localCar;if(!n||!this.player)return;let s=this.player,r=this.status==="playing"&&!this.paused&&!this.chatOpen&&!this.controlsOpen,o=r?(this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0)-(this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0):0,a=r?(this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0)-(this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0):0,l=r&&this.keys.has("Space"),c=r&&(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"));n.boost=n.boost??1;let h=c&&n.boost>.02&&o>0&&n.speed>1;h?n.boost=Math.max(0,n.boost-.27*e):n.boost=Math.min(1,n.boost+.12*e);let u=h?66:50;o>0?n.speed<0?n.speed+=36*e:n.speed+=(h?25:15)*e*(1-Xe(n.speed/u,0,1)):o<0?n.speed>.4?n.speed-=38*e:n.speed-=13*e:n.speed*=Math.exp(-.62*e),l&&(n.speed*=Math.exp(-1.15*e)),n.speed-=n.speed*.06*e,n.speed=Xe(n.speed,-15,u);let d=Math.abs(n.speed),f=Xe(d/5,0,1)*(1-Xe(d/105,0,.52)),m=l?1.55:1;d>.25&&(n.yaw-=a*1.5*f*m*e*Math.sign(n.speed||1)),n.steer=hi(n.steer,-a*(l?.7:.5),7,e);let y=Math.sin(n.yaw),g=Math.cos(n.yaw);if(n.x+=y*n.speed*e,n.z+=g*n.speed*e,this.resolveVehicleCollisions(n,y,g)){let E=d;E>12?(this.effects.bulletImpact(new P(n.x+y*2.1,.6,n.z+g*2.1),new P(0,1,0),16760939),this.audio.explosion(),this.cameraShake=Math.min(1.2,this.cameraShake+E*.02)):E>3&&this.audio.land(),n.speed*=.28}let _=this.world.metro.bounds-4,T=Xe(n.x,-_,_),S=Xe(n.z,-_,_);if((T!==n.x||S!==n.z)&&(d>12&&(this.effects.bulletImpact(new P(n.x+y*2.1,.6,n.z+g*2.1),new P(0,1,0),16760939),this.audio.land(),this.cameraShake=Math.min(1,this.cameraShake+d*.015)),n.speed*=.2),n.x=T,n.z=S,n.speed=Xe(n.speed,-15,u),n.model.group.position.set(n.x,.02,n.z),n.model.group.rotation.y=n.yaw,n.model.update(e,n.speed,n.steer,h,o<0||l,!0),s.pos.set(n.x,0,n.z),s.bodyYaw=n.yaw,s.velY=0,s.grounded=!0,this.driveLookYaw!==0&&performance.now()-this.lastLookMove>1500&&(this.driveLookYaw=hi(this.driveLookYaw,0,1.4,e)),this.driftTimer=(this.driftTimer||0)+e,this.driftTimer>.045){if(this.driftTimer=0,(l||Math.abs(a)>.2)&&d>9){let E=n.x-y*2.2+(Math.random()-.5)*1.4,x=n.z-g*2.2+(Math.random()-.5)*1.4;this.effects.drift(new P(E,.15,x),Xe(d/28,.4,1.4))}if(h){let E=n.x-y*2.5,x=n.z-g*2.5;this.effects.boostTrail(new P(E,.48,x),6543871)}}this.audio.updateCar({active:!0,speed:n.speed,throttle:o,boosting:h,drifting:l&&d>8});let w=n.speed<-.5?"R":n.speed<.5?"N":String(Xe(Math.ceil(d/11),1,6));this.ui.setCarStats(n.speed,n.boost,w,o),this.ui.setBoost(n.boost,h),this.ui.setBoosting(h)}resolveVehicleCollisions(e,t,n){let s=!1;for(let r of[-1.45,0,1.45]){let o={x:e.x+t*r,z:e.z+n*r},a=o.x,l=o.z;for(let u of this.world.colliders)br(o,1.02,u);let c=o.x-a,h=o.z-l;Math.abs(c)+Math.abs(h)>.001&&(e.x+=c,e.z+=h,s=!0)}return s}resetCar(){let e=this.localCar;if(!e)return;let t=this.world.carSpawns[0],n=1/0;for(let s of this.world.carSpawns){let r=Mn(e.x,e.z,s.x,s.z)+(s.x===7?3:0);r<n&&(n=r,t=s)}e.x=t.x,e.z=t.z,e.yaw=t.rot,e.speed=0,e.boost=1,e.model.group.position.set(e.x,.02,e.z),e.model.group.rotation.y=e.yaw,this.cameraYaw=e.yaw,this.driveLookYaw=0,this.ui.toast("Vehicle re-synced to the nearest road.","info",2e3),this.audio.door(),this.sendPlayerState(!0)}nearestCar(e=4.6){let t=null,n=e;for(let s of this.cars){if(s.occupiedBy&&s.occupiedBy!==this.session?.selfId)continue;let r=Mn(this.player.pos.x,this.player.pos.z,s.x,s.z);r<n&&(n=r,t=s)}return t}nearestShard(e=4.3){if(!this.mission||this.mission.phase!=="collect")return null;let t=null,n=e;for(let s of this.mission.shards){if(s.collected)continue;let r=Mn(this.player.pos.x,this.player.pos.z,s.x,s.z);r<n&&(n=r,t=s)}return t}vehicleInteract(){if(!this.player||!this.player.alive)return;if(this.currentMode==="car"){if(Math.abs(this.localCar?.speed||0)>9){this.ui.toast("Slow down before exiting.","warn",1800);return}this.exitCar();return}let e=this.nearestCar();e&&this.enterCar(e)}useInteract(){if(!this.player||!this.player.alive||this.status!=="playing")return;if(this.currentMode==="car"){this.vehicleInteract();return}let e=this.nearestShard(4.8);if(e){this.isHost?this.hostCollectShard(e.id):(this.network?.send("shard-request",{shardId:e.id}),this.ui.toast("Breach requested \u2014 hold position.","info",1800));return}let t=this.nearestCar();t&&this.enterCar(t)}enterCar(e){!this.player||!this.player.alive||(this.currentMode="car",this.localCar=e,e.occupiedBy=this.session?.selfId||"solo",e.speed=0,e.boost=e.boost??1,e.model.group.position.set(e.x,.02,e.z),e.model.group.rotation.y=e.yaw,this.cameraYaw=e.yaw,this.driveLookYaw=0,this.drivePitch=.26,this.aiming=!1,this.mouseDown=!1,this.player.pos.set(e.x,0,e.z),this.player.bodyYaw=e.yaw,this.localChar&&(this.localChar.group.visible=!1,this.localCharShadow.visible=!1),this.ui.setMode("car"),this.ui.setCrosshair(!1),this.ui.setInteraction("",!1),this.ui.setBoost(e.boost,!1),this.audio.door(),this.effects.exitCar(new P(e.x,.2,e.z)),this.audio.updateCar({active:!0,speed:0,throttle:0,boosting:!1,drifting:!1}),this.sendPlayerState(!0))}exitCar(){let e=this.localCar;if(!e)return;let t=Math.sin(e.yaw),n=Math.cos(e.yaw),s=1,r=e.x+n*1.7,o=e.z-t*1.7;for(let l of this.world.colliders)if(br({x:r,z:o},.5,l)){s=-1,r=e.x+n*-1.7,o=e.z-t*-1.7;break}let a=this.world.metro.bounds-4;this.player.pos.set(Xe(r,-a,a),0,Xe(o,-a,a)),this.player.bodyYaw=e.yaw,this.player.velY=0,this.player.grounded=!0,e.occupiedBy=null,e.speed=0,e.steer=0,this.localCar=null,this.currentMode="foot",this.cameraYaw=e.yaw,this.cameraPitch=-.08,this.aiming=!1,this.localChar&&(this.localChar.group.visible=!0,this.localChar.group.position.copy(this.player.pos),this.localChar.group.rotation.y=this.player.bodyYaw),this.localCharShadow&&(this.localCharShadow.visible=!0,this.localCharShadow.position.set(this.player.pos.x,.045,this.player.pos.z)),this.driveLookYaw=0,this.ui.setMode("foot"),this.ui.setCrosshair(!0),this.ui.setInteraction("",!1),this.audio.door(),this.audio.updateCar({active:!1,speed:0,throttle:0,boosting:!1,drifting:!1}),this.effects.exitCar(new P(e.x,.2,e.z)),this.sendPlayerState(!0)}updateCars(e){let t=performance.now();for(let n of this.cars){if(n===this.localCar)continue;let s=n.occupiedBy?this.remotePlayers.get(n.occupiedBy):null;if(s?(n.x=s.pos.x,n.z=s.pos.z,n.yaw=s.bodyYaw,n.speed=s.speed||0,n.model.group.position.set(n.x,.02,n.z),n.model.group.rotation.y=n.yaw,n.model.update(e,n.speed,0,!!s.boosting,!1,!0)):(n.occupiedBy&&!s&&(n.occupiedBy=null),n.model.group.position.set(n.x,.02,n.z),n.model.group.rotation.y=n.yaw),n.model.exhausts)for(let r of n.model.exhausts)r.material.opacity*=.9}this.carSyncTimer=(this.carSyncTimer||0)+e}updateCamera(e,t){let n=this.player;if(!n)return;let s=this.cameraShake;if(this.cameraShake=Math.max(0,this.cameraShake-e*2.6),this.currentMode==="car"&&this.localCar){let y=this.localCar,g=Math.abs(y.speed);this.cameraYaw=y.yaw;let p=y.yaw+this.driveLookYaw,_=7.8+Xe(g/70,0,1)*2.6,T=1.35+Math.sin(this.drivePitch)*_*.72,S=new P(y.x,1.45,y.z),w=new P(y.x-Math.sin(p)*Math.cos(this.drivePitch)*_,Math.max(.85,T),y.z-Math.cos(p)*Math.cos(this.drivePitch)*_),E=this.clipCamera(S,w);this.camera.position.copy(E),s>.01&&(this.camera.position.x+=(Math.random()-.5)*s*.35,this.camera.position.y+=(Math.random()-.5)*s*.25),kc.set(y.x+Math.sin(p)*5.2,1.25+Math.sin(this.drivePitch)*1.4,y.z+Math.cos(p)*5.2),this.camera.lookAt(kc);let x=64+Xe(g/65,0,1)*9+(this.keys.has("ShiftLeft")?5:0);this.setCameraFov(x,e);return}let r=kc.set(n.pos.x,n.pos.y+1.62,n.pos.z).clone(),o=Gv.set(Math.sin(this.cameraYaw)*Math.cos(this.cameraPitch),Math.sin(this.cameraPitch),Math.cos(this.cameraYaw)*Math.cos(this.cameraPitch)).normalize(),a=Math.cos(this.cameraYaw),l=-Math.sin(this.cameraYaw),c=this.aiming?.58:.42,h=this.aiming?2.15:4.15+(n.moveSpeed>6.5?.45:0),u=Vv.set(r.x+a*c-o.x*h,r.y-o.y*h+(this.aiming?.08:.2),r.z+l*c-o.z*h);u.y=Math.max(.52,u.y);let d=this.clipCamera(r,u);this.camera.position.copy(d),s>.01&&(this.camera.position.x+=(Math.random()-.5)*s*.28,this.camera.position.y+=(Math.random()-.5)*s*.2);let f=n.grounded&&n.moveSpeed>.2?Math.sin(t*(n.sprinting?12:8))*Math.min(.045,n.moveSpeed*.006):0;this.camera.position.y+=f,this.camera.lookAt(this.camera.position.x+o.x,this.camera.position.y+o.y,this.camera.position.z+o.z);let m=this.aiming?46:n.sprinting?71:62;if(this.setCameraFov(m,e),this.localChar){let y=this.camera.position.distanceTo(n.pos);this.localChar.group.visible=n.alive&&y>.85}}setCameraFov(e,t){if(Math.abs(this.camera.fov-e)<.05)return;this.camera.fov=hi(this.camera.fov,e,7,t),this.camera.updateProjectionMatrix();let n=this.renderer.domElement.height||window.innerHeight;this.effects.setViewport?.(n,this.camera.fov)}clipCamera(e,t){let n=new P().subVectors(t,e),s=1;for(let r of this.world.colliders){let o=hc(e,t,r,.24);o!==null&&o>.02&&o<s&&(s=o)}return s<.999&&t.copy(e).addScaledVector(n,Math.max(.12,s*.9)),t}updateInteractions(){if(!this.player||this.status!=="playing"||this.chatOpen||this.paused||!this.player.alive){this.ui.setInteraction("",!1);return}if(this.currentMode==="car"){this.ui.setInteraction("",!1);return}if(this.nearestShard(4.8)){this.ui.setInteraction("BREACH DATA CACHE",!0,"E");return}if(this.nearestCar()){this.ui.setInteraction("ENTER VEHICLE",!0,"F");return}if(this.mission&&(this.mission.phase==="extract"||this.mission.phase==="extracting")&&Mn(this.player.pos.x,this.player.pos.z,this.world.extraction.x,this.world.extraction.z)<9){this.ui.setInteraction("HOLD THE EXTRACTION ZONE",!0,"\u25C6");return}this.ui.setInteraction("",!1)}clearShardVisuals(){for(let[,e]of this.shardVisuals)this.scene.remove(e.group),this.scene.remove(e.shadow),e.group.traverse(t=>{t.isMesh&&(t.geometry?.dispose?.(),Array.isArray(t.material)?t.material.forEach(n=>n.dispose?.()):t.material?.dispose?.())}),e.shadow.geometry?.dispose?.(),e.shadow.material?.dispose?.();this.shardVisuals.clear()}syncShardVisuals(){if(!this.mission)return;let e=new Set;for(let t of this.mission.shards){e.add(t.id);let n=this.shardVisuals.get(t.id);if(!n){let s=sm(),r=new Dt;r.position.set(t.x,0,t.z),r.add(s.group),r.position.y=0;let o=es(this.shadowTex,5);o.position.set(t.x,.045,t.z),o.material.opacity=.45,this.scene.add(r),this.scene.add(o),n={group:r,shadow:o,model:s,shard:t},this.shardVisuals.set(t.id,n)}n.group.visible=!t.collected,n.shadow.visible=!t.collected,n.shard=t}for(let[t,n]of this.shardVisuals)e.has(t)||(this.scene.remove(n.group),this.scene.remove(n.shadow),n.group.traverse(s=>{s.isMesh&&(s.geometry?.dispose?.(),Array.isArray(s.material)?s.material.forEach(r=>r.dispose?.()):s.material?.dispose?.())}),n.shadow.geometry?.dispose?.(),n.shadow.material?.dispose?.(),this.shardVisuals.delete(t))}updateShardVisuals(e,t){this.shardFxTimer+=e;let n=this.shardFxTimer>.12;n&&(this.shardFxTimer=0);for(let[,s]of this.shardVisuals)!s.group.visible||!s.shard||s.shard.collected||(s.model.animate(e,t),n&&this.effects.sparkle(new P(s.shard.x,1.8,s.shard.z),6223615));this.world.extractionGroup.visible=!!this.mission&&(this.mission.phase==="extract"||this.mission.phase==="extracting"||this.mission.phase==="complete")}updateMission(e,t){if(this.mission)if(this.isHost){if((this.mission.phase==="collect"||this.mission.phase==="extract"||this.mission.phase==="extracting")&&(this.mission.elapsed+=e),this.mission.phase==="extract"||this.mission.phase==="extracting"){let r=this.player?.alive&&Mn(this.player.pos.x,this.player.pos.z,this.world.extraction.x,this.world.extraction.z)<8.6;for(let o of this.remotePlayers.values()){if(!o.alive){r=!1;continue}let a=o.pos.x,l=o.pos.z;Mn(a,l,this.world.extraction.x,this.world.extraction.z)>8.6&&(r=!1)}r?(this.mission.phase==="extract"&&(this.mission.phase="extracting",this.ui.showMissionBanner("EXTRACTION",`HOLD THE RING // ${this.mission.extractSeconds}s`,"IN PROGRESS",3200),this.ui.feed("All operatives inside. Hold the extraction ring.","warn","EXTRACT"),this.audio.boost()),this.mission.extractProgress+=e,!this.extractWasInside&&this.mission.extractProgress>.1&&this.ui.toast("Extraction in progress \u2014 stay inside the ring.","info",2e3),this.extractWasInside=!0,this.mission.extractProgress>=this.mission.extractSeconds&&this.completeMission()):(this.mission.phase==="extracting"&&(this.mission.phase="extract",this.mission.extractProgress=0,this.ui.toast("Extraction interrupted \u2014 regroup in the ring.","warn",2400),this.ui.feed("Extraction interrupted. Every operative must hold the ring.","warn","EXTRACT")),this.extractWasInside=!1)}this.mission.phase==="complete"&&(this.mission.completeIn=Math.max(0,this.mission.completeIn-e),this.ui.updateResultCountdown(this.mission.completeIn),this.mission.completeIn<=0&&this.resetMission()),this.mission.phase==="extracting"&&this.ui.setMission(this.mission,0),this.sendStateTimer=(this.sendStateTimer||0)+e,this.session?.online&&this.sendStateTimer>.1&&(this.sendStateTimer=0,this.sendFullState(!1))}else this.mission.phase!=="complete"?this.mission.elapsed+=e:(this.mission.completeIn=Math.max(0,(this.mission.completeIn??0)-e),this.ui.updateResultCountdown(this.mission.completeIn))}completeMission(){if(!this.mission||this.isHost===!1)return;let e=this.mission.contractName||"GHOST PROTOCOL",t=this.mission.shards?.length||3;this.mission.phase="complete",this.mission.score+=(this.mission.scoreBonus||3e3)+Math.round(Math.max(0,1600-this.mission.elapsed*3)),this.mission.completeIn=12,this.completed=!0,this.resultTimer=12,this.status="result",this.ignoreUnlock=!0,this.mouseDown=!1,this.aiming=!1,this.ui.setCrosshair(!1),this.ui.setInteraction("",!1),this.ui.hideDeath(),this.ui.showMissionBanner("CONTRACT COMPLETE",`${e} SECURED`,"EXFIL",4600),this.ui.showResult({time:this.mission.elapsed,score:this.mission.score,countdown:this.mission.completeIn,caches:t,contractName:e}),this.effects.explosion(new P(this.world.extraction.x,2,this.world.extraction.z),4585215,1.8),this.ui.feed(`Contract complete. ${Math.round(this.mission.score)} points banked.`,"ok","CONTRACT"),this.audio.pickup(),this.session?.online&&this.sendFullState(!0),document.pointerLockElement&&document.exitPointerLock()}resetMission(){this.isHost&&(this.completed=!1,this.status="playing",this.paused=!1,this.resultTimer=0,this.ignoreUnlock=!1,this.ui.hideResult(),this.ui.setPaused(!1),this.startMission(),this.requestPointerLock())}hostCollectShard(e){if(!this.isHost||!this.mission||this.mission.phase!=="collect")return;let t=this.mission.shards.find(s=>s.id===e);!t||t.collected||Mn(this.player.pos.x,this.player.pos.z,t.x,t.z)>6.2||(this.applyShardCollected(t,this.myName,!0),this.mission.score+=500,this.network?.send("shard-collected",{shardId:t.id,by:this.session?.selfId,name:this.myName}),this.mission.shards.every(s=>s.collected)&&(this.mission.phase="extract",this.world.extractionGroup.visible=!0,this.ui.showMissionBanner("EXTRACTION READY","RETURN TO THE PLAZA AS A TEAM","ALL CACHES SECURED",5200),this.ui.feed("All caches secured. Extraction gate is live at the plaza.","ok","EXTRACT"),this.ui.toast("Extraction unlocked \u2014 get to the plaza.","ok",4e3)),this.sendFullState(!0))}applyShardCollected(e,t,n=!0){if(!e||e.collected)return;e.collected=!0;let s=this.shardVisuals.get(e.id);s&&(s.group.visible=!1,s.shadow.visible=!1),this.effects.pickup(new P(e.x,1.7,e.z),5240319),this.audio.pickup(),n&&this.ui.feed(`${(t||"ALLY").toUpperCase()} breached ${e.name||"a data cache"}.`,"ok","CACHE"),this.mission&&this.mission.shards.every(r=>r.collected)&&(this.world.extractionGroup.visible=!0,this.isHost||(this.ui.showMissionBanner("EXTRACTION READY","RETURN TO THE PLAZA AS A TEAM","ALL CACHES SECURED",5200),this.ui.feed("All caches secured. Extraction gate is live at the plaza.","ok","EXTRACT")))}startReload(){let e=this.player;!e||!e.alive||this.currentMode==="car"||e.reloading>0||e.ammo>=Pr||e.reserve<=0||(e.reloading=1.35,this.audio.reload())}finishReload(){let e=this.player;if(!e)return;let t=Pr-e.ammo,n=Math.min(t,e.reserve);e.ammo+=n,e.reserve-=n,this.ui.setAmmo(e.ammo,e.reserve,0)}updateWeapon(e,t){let n=this.player;if(!n||!n.alive){this.mouseDown=!1;return}if(this.currentMode!=="foot"||this.status!=="playing"||this.paused||this.chatOpen||this.controlsOpen){this.currentMode==="car"&&this.ui.setCrosshair(!1);return}document.pointerLockElement!==this.canvas&&(this.mouseDown=!1),this.ui.setCrosshair(!0,this.aiming,this.isAimBlocked()),this.mouseDown&&n.fireCooldown<=0&&this.fireWeapon(t)}isAimBlocked(){let e=this.camera.position,t=this.camera.getWorldDirection(kc),n=new P(e.x+t.x*2.8,e.y+t.y*2.8,e.z+t.z*2.8);for(let s of this.world.colliders){let r=hc(e,n,s,0);if(r!==null&&r<.99)return!0}return!1}fireWeapon(e){let t=this.player;if(!t||!t.alive||t.reloading>0)return;if(t.ammo<=0){this.audio._noiseBurst?.(.03,2e3,.01),this.startReload();return}t.ammo-=1,t.fireCooldown=.115,t.lastShotAt=e,t.reloading=0,this.ui.setAmmo(t.ammo,t.reserve,0),this.cameraShake=Math.min(.32,this.cameraShake+.075),this.cameraPitch=Xe(this.cameraPitch+.0035,-1.02,.68),this.audio.gunshot(!0),this.localChar&&(this.localChar.flashTime=.06);let n=this.camera.position.clone(),s=this.camera.getWorldDirection(new P),r=n.clone().addScaledVector(s,150),o=this.pickShootTarget(n,s,150),a=r;o&&(a=o.point.clone(),o.enemy?(this.isHost?this.applyEnemyDamage(o.enemy,Hm,this.myName):this.network?.send("shot",{enemyId:o.enemy.id,ox:n.x,oy:n.y,oz:n.z,ex:a.x,ey:a.y,ez:a.z}),this.ui.hitmarker(),this.audio.hitmarker(),this.effects.enemyHit(a,16738901),t.scoreFlash=.2):this.effects.bulletImpact(a,new P(0,1,0),10480383));let l=new P(t.pos.x+Math.sin(t.bodyYaw)*.55+Math.cos(t.bodyYaw)*.24,t.pos.y+1.3,t.pos.z+Math.cos(t.bodyYaw)*.55-Math.sin(t.bodyYaw)*.24);this.effects.muzzleFlash(l,16769955,s),this.effects.tracer(l,a,11072255),this.sendPlayerState(!0)}pickShootTarget(e,t,n){let s=this.isHost?this.localEnemies:[...this.remoteEnemies.values()],r=null,o=n;for(let c of s){if(!c.alive)continue;let h=c.y??c.pos?.y??0,u=new P(c.x??c.pos?.x??0,c.type==="drone"?h:h+1.1,c.z??c.pos?.z??0),f=u.clone().sub(e).dot(t);if(f<.5||f>o)continue;let m=e.clone().addScaledVector(t,f),y=c.type==="drone"?1.15:.9;m.distanceTo(u)>y||this.isShotBlocked(e,u)||(o=f,r={enemy:c,point:m,distance:f})}if(r)return r;let a=t.y<-.02?-e.y/t.y:1/0;return a>0&&a<n?{point:e.clone().addScaledVector(t,a),distance:a}:{point:e.clone().addScaledVector(t,Math.min(n,90)),distance:Math.min(n,90)}}isShotBlocked(e,t){for(let n of this.world.colliders){let s=hc(e,t,n,0);if(s!==null&&s>.02&&s<.98)return!0}return!1}spawnLocalEnemies(){if(!this.isHost||!this.mission)return;this.clearEnemies();let e=this.mission.shards,t=Math.max(1,this.mission.guardBudget||e.length),n=Math.max(1,this.mission.droneBudget||e.length);for(let s=0;s<t;s+=1){let r=e[s%e.length],o=Math.floor(s/e.length),a=s/t*Mt+.7+o*1.4,l=4.2+o*2.4;this.createGuard(r.x+Math.cos(a)*l,r.z+Math.sin(a)*l,`guard-${this.mission.contract}-${s}`)}for(let s=0;s<n;s+=1){let r=e[s%e.length],o=Math.floor(s/e.length),a=s/n*Mt-.5+o*1.7,l=6.4+o*2.2;this.createDrone(r.x-Math.cos(a)*l,r.z-Math.sin(a)*l,`drone-${this.mission.contract}-${s}`,s)}}createGuard(e,t,n){let s=yu(),r={x:e,z:t};for(let l of this.world.colliders)br(r,.55,l);let o=this.world.metro.bounds-6;r.x=Xe(r.x,-o,o),r.z=Xe(r.z,-o,o);let a=es(this.shadowTex,1.9);a.position.set(r.x,.045,r.z),a.material.opacity=.7,s.group.position.set(r.x,0,r.z),this.scene.add(s.group),this.scene.add(a),this.localEnemies.push({id:n,type:"guard",x:r.x,y:0,z:r.z,homeX:r.x,homeZ:r.z,yaw:Math.random()*Mt,health:100,maxHealth:100,alive:!0,alert:!1,fireTimer:1.2+Math.random()*1.4,patrolPhase:Math.random()*Mt,orbitPhase:0,model:s,group:s.group,shadow:a,moveSpeed:0})}createDrone(e,t,n,s){let r=xu(),o=es(this.shadowTex,1.2);o.position.set(e,.045,t),o.material.opacity=.42,r.group.position.set(e,5.4,t),this.scene.add(r.group),this.scene.add(o),this.localEnemies.push({id:n,type:"drone",x:e,y:5.4,z:t,homeX:e,homeZ:t,yaw:0,health:80,maxHealth:80,alive:!0,alert:!1,fireTimer:1.8+Math.random()*1.5,patrolPhase:s*1.7,orbitPhase:Math.random()*Mt,model:r,group:r.group,shadow:o,moveSpeed:0})}clearEnemies(){for(let e of this.localEnemies)this.scene.remove(e.group),this.scene.remove(e.shadow),e.group.traverse(t=>{t.isMesh&&(t.geometry?.dispose?.(),Array.isArray(t.material)?t.material.forEach(n=>n.dispose?.()):t.material?.dispose?.())}),e.shadow.geometry?.dispose?.(),e.shadow.material?.dispose?.();this.localEnemies=[]}clearRemoteEnemies(){for(let e of this.remoteEnemies.values())this.scene.remove(e.group),this.scene.remove(e.shadow),e.group.traverse(t=>{t.isMesh&&(t.geometry?.dispose?.(),Array.isArray(t.material)?t.material.forEach(n=>n.dispose?.()):t.material?.dispose?.())}),e.shadow.geometry?.dispose?.(),e.shadow.material?.dispose?.();this.remoteEnemies.clear()}updateEnemies(e,t){if(!this.isHost||!this.mission)return;let n=o=>Math.hypot(o.x,o.z-1)<Hv,s=[];this.player?.alive&&!n(this.player.pos)&&s.push({id:this.session?.selfId||"solo",pos:this.player.pos,isLocal:!0});for(let o of this.remotePlayers.values())o.alive&&!n(o.pos)&&s.push({id:o.id,pos:o.pos,isLocal:!1});let r=0;for(let o of this.localEnemies){if(!o.alive)continue;let a=null,l=1/0;for(let f of s){let m=Mn(o.x,o.z,f.pos.x,f.pos.z);m<l&&(l=m,a=f)}let c=o.type==="drone"?32:26,h=o.type==="drone"?46:38,u=a?Mn(o.homeX,o.homeZ,a.pos.x,a.pos.z):1/0,d=o.alert?c*1.35:c;if(o.alert=!!a&&u<h&&l<d,!this.completed&&o.alert&&(r+=1),o.fireTimer-=e,o.type==="guard"){let f=0,m=o.yaw;if(o.alert&&a){m=Math.atan2(a.pos.x-o.x,a.pos.z-o.z);let p=Math.sin(t*1.4+o.patrolPhase)*2.2,_=(a.pos.x-o.x)/Math.max(1,l),T=(a.pos.z-o.z)/Math.max(1,l),S=0,w=0;l>10?(S=_,w=T):l<6&&(S=-_,w=-T),S+=-T*p*.15,w+=_*p*.15;let E=Math.hypot(S,w);E>.01&&(f=4.4,o.x+=S/E*f*e,o.z+=w/E*f*e);let x=new P(a.pos.x,a.pos.y+1.25,a.pos.z),b=new P(o.x,1.25,o.z);!this.isShotBlocked(b,x)&&l<25&&o.fireTimer<=0&&!this.completed&&this.enemyFire(o,a,x,b)}else{let p=t*.32+o.patrolPhase,_=o.homeX+Math.cos(p)*5.2,T=o.homeZ+Math.sin(p)*5.2,S=_-o.x,w=T-o.z,E=Math.hypot(S,w);E>.6&&(f=1.7,o.x+=S/E*f*e,o.z+=w/E*f*e,m=Math.atan2(S,w))}let y={x:o.x,z:o.z};for(let p of this.world.colliders)br(y,.45,p);o.x=y.x,o.z=y.z;let g=this.world.metro.bounds-5;o.x=Xe(o.x,-g,g),o.z=Xe(o.z,-g,g),o.moveSpeed=hi(o.moveSpeed,f,8,e),o.yaw=Qo(o.yaw,m,7,e),o.group.position.set(o.x,0,o.z),o.group.rotation.y=o.yaw,o.shadow.position.set(o.x,.045,o.z),o.model.animate(e,t,o.moveSpeed,!0,o.alert)}else{let f=o.alert?10.5:6.5,m=o.alert&&a?a.pos.x:o.homeX,y=o.alert&&a?a.pos.z:o.homeZ;o.orbitPhase+=e*(o.alert?.9:.34);let g=m+Math.cos(o.orbitPhase)*f,p=y+Math.sin(o.orbitPhase)*f,_=(o.alert?4.6:6.2)+Math.sin(t*1.5+o.patrolPhase)*.7;if(o.x=hi(o.x,g,1.4,e),o.z=hi(o.z,p,1.4,e),o.y=hi(o.y,_,1.8,e),a&&(o.yaw=Qo(o.yaw,Math.atan2(a.pos.x-o.x,a.pos.z-o.z),5,e)),o.group.position.set(o.x,o.y,o.z),o.group.rotation.y=o.yaw,o.shadow.position.set(o.x,.045,o.z),o.shadow.material.opacity=.4,o.model.animate(e,t,o.alert),o.alert&&a&&l<32&&o.fireTimer<=0&&!this.completed){let T=new P(a.pos.x,a.pos.y+1.25,a.pos.z),S=new P(o.x,o.y,o.z);this.isShotBlocked(S,T)||this.enemyFire(o,a,T,S)}}}this.alertCount=r}enemyFire(e,t,n,s){let r=e.type==="drone";e.fireTimer=(r?1.8:1.35)+Math.random()*1.25;let o=n.clone().sub(s).normalize(),a=Math.random()<(r?.56:.66),l=n.clone();if(a||(l.x+=(Math.random()-.5)*3.2,l.y+=(Math.random()-.3)*2,l.z+=(Math.random()-.5)*3.2),this.effects.muzzleFlash(s,r?16738901:16757370,o),this.effects.tracer(s,l,r?16734837:16753515),this.camera.position.distanceTo(s)<42&&this.audio.enemyShot(),e.type==="guard"&&(e.model.flashTime=.08),this.network?.send("enemy-shot",{ox:s.x,oy:s.y,oz:s.z,ex:l.x,ey:l.y,ez:l.z,hit:a}),!a)return;let c=r?5.5:7;t.isLocal?this.damagePlayer(c,e.id):this.network?.send("hit",{target:t.id,amount:c,source:e.id})}applyEnemyDamage(e,t,n){if(!e||!e.alive)return;e.health-=t,e.alert=!0;let s=new P(e.x,e.type==="drone"?e.y:1.1,e.z);this.effects.enemyHit(s,16738901),this.audio.enemyHit(),e.health<=0&&this.killEnemy(e,n)}killEnemy(e,t){if(!e.alive)return;e.alive=!1;let n=new P(e.x,e.type==="drone"?e.y:1,e.z);this.effects.explosion(n,e.type==="drone"?16734837:16747351,e.type==="drone"?1.15:.8),this.audio.explosion(),this.scene.remove(e.group),this.scene.remove(e.shadow),this.mission&&(this.mission.score+=250),this.ui.feed(`Security unit neutralized by ${(t||"ALLY").toUpperCase()}.`,"ok","COMBAT"),this.network?.send("enemy-dead",{id:e.id,x:e.x,y:e.type==="drone"?e.y:1,z:e.z,type:e.type}),this.sendFullState(!0)}damagePlayer(e,t){let n=this.player;if(!n||!n.alive||this.status==="result"||this.status==="disconnected")return;let s=this.currentMode==="car"?e*.65:e;n.health=Math.max(0,n.health-s),n.lastDamageAt=this.elapsed,this.ui.setVitals(n.health,n.stamina),this.ui.damage(),this.audio.damage(),this.cameraShake=Math.min(1.2,this.cameraShake+.32),n.health<=0&&this.die(t)}die(e){let t=this.player;!t||!t.alive||(t.alive=!1,t.deathTimer=4,t.health=0,this.status="dead",this.mouseDown=!1,this.aiming=!1,this.keys.clear(),this.currentMode==="car"&&this.exitCar(),this.ui.showDeath(4),this.ui.setCrosshair(!1),this.ui.setInteraction("",!1),this.ui.setVitals(0,t.stamina),this.ui.feed("Signal lost. Re-syncing neural link\u2026","warn","SECURITY"),this.localChar&&(this.localChar.group.visible=!0),this.sendPlayerState(!0))}respawn(){let e=this.player;e&&(e.alive=!0,e.health=100,e.stamina=100,e.exhausted=!1,e.sprinting=!1,e.ammo=Pr,e.reserve=Fc,e.reloading=0,e.deathTimer=0,e.velY=0,e.grounded=!0,e.pos.set(this.world.spawn.x+(this.remotePlayers.size?1.4:0),0,this.world.spawn.z),this.cameraYaw=this.world.spawn.rot,this.cameraPitch=-.08,this.currentMode="foot",this.localCar=null,this.ui.hideDeath(),this.ui.setMode("foot"),this.ui.setVitals(100,100),this.ui.setAmmo(Pr,Fc,0),this.ui.setCrosshair(!0),this.status=this.mission?.phase==="complete"?"result":"playing",this.localChar&&(this.localChar.group.visible=!0),this.localCharShadow&&(this.localCharShadow.visible=!0),this.ui.feed("Neural link restored. Back in the district.","ok","SYSTEM"),this.sendPlayerState(!0))}updateRemoteEnemies(e,t){if(!this.isHost)for(let n of this.remoteEnemies.values())n.alive&&(n.pos.lerp(n.target,1-Math.exp(-e*8)),n.x=n.pos.x,n.y=n.pos.y,n.z=n.pos.z,n.yaw=Qo(n.yaw,n.targetYaw,7,e),n.group.position.copy(n.pos),n.group.rotation.y=n.yaw,n.type==="drone"?(n.shadow.position.set(n.pos.x,.045,n.pos.z),n.model.animate(e,t,n.alert)):(n.shadow.position.set(n.pos.x,.045,n.pos.z),n.model.animate(e,t,n.moveSpeed,!0,n.alert)))}syncRemoteEnemies(e){if(!Array.isArray(e))return;let t=new Set;for(let n of e){if(!n||!n.id)continue;t.add(n.id);let s=this.remoteEnemies.get(n.id);if(!s){let r=n.type==="drone"?xu():yu(),o=es(this.shadowTex,n.type==="drone"?1.2:1.9);o.material.opacity=n.type==="drone"?.4:.65;let a=r.group,l=new P(n.x,n.y,n.z);a.position.copy(l),this.scene.add(a),this.scene.add(o),s={id:n.id,type:n.type,model:r,group:a,shadow:o,pos:l,target:l.clone(),yaw:n.ry||0,targetYaw:n.ry||0,health:n.health,alive:!0,alert:!!n.alert,moveSpeed:0,x:n.x,y:n.y,z:n.z},this.remoteEnemies.set(n.id,s)}s.target.set(n.x,n.y,n.z),s.targetYaw=n.ry||0,s.health=n.health,s.alert=!!n.alert,s.alive=!0,s.moveSpeed=s.type==="drone"?0:3.2}for(let[n,s]of this.remoteEnemies)t.has(n)||(this.scene.remove(s.group),this.scene.remove(s.shadow),this.remoteEnemies.delete(n));this.remoteAlertCount=e.filter(n=>n.alert).length}applyStateCars(e){if(Array.isArray(e))for(let t of e){let n=this.cars.find(s=>s.id===t.id);n&&n!==this.localCar&&t.o!==this.session?.selfId&&((!n.occupiedBy||!this.remotePlayers.has(n.occupiedBy))&&(n.x=t.x,n.z=t.z,n.yaw=t.yaw),n.occupiedBy=t.o||null)}}handleState(e){if(this.isHost||!e||!e.mission||e.from&&this.session?.hostId&&e.from!==this.session.hostId)return;e.weather&&e.weather!==this.world?.weather?.kind&&this.applyWeather(e.weather,!0);let t=e.mission,n=this.mission?.contract,s=this.mission?.phase;this.mission={...t,shards:(t.shards||[]).map(a=>({...a})),extraction:{...t.extraction||this.world.extraction}},this.syncShardVisuals(),this.applyStateCars(e.cars),this.syncRemoteEnemies(e.enemies),this.alertCount=e.alert??this.remoteAlertCount??0;let r=this.mission.phase,o=this.mission.contractName||"GHOST PROTOCOL";r==="complete"&&!this.completed?(this.completed=!0,this.status="result",this.ignoreUnlock=!0,this.mouseDown=!1,this.aiming=!1,this.ui.setCrosshair(!1),this.ui.setInteraction("",!1),this.ui.hideDeath(),this.ui.showMissionBanner("CONTRACT COMPLETE",`${o} SECURED`,"EXFIL",4600),this.ui.showResult({time:this.mission.elapsed,score:this.mission.score,countdown:this.mission.completeIn??12,caches:this.mission.shards?.length||3,contractName:o}),document.pointerLockElement&&document.exitPointerLock()):r!=="complete"&&this.completed&&(this.completed=!1,this.ignoreUnlock=!1,this.ui.hideResult(),this.player?.alive&&(this.status=this.paused?"paused":"playing",this.ui.setLockHint(!0))),n!==void 0&&n!==this.mission.contract?(this.ui.showMissionBanner(o,this.mission.contractTag||"SECURE THE DATA CACHES","NEW CONTRACT",4200),this.ui.feed(`New contract \u2014 ${o}. ${this.mission.shards?.length||3} caches are live.`,"ok","CONTRACT")):n===void 0&&r==="collect"&&this.ui.showMissionBanner(o,this.mission.contractTag||"SECURE THE DATA CACHES","CO-OP CONTRACT",4200),s!==r&&r==="extract"&&this.ui.showMissionBanner("EXTRACTION READY","RETURN TO THE PLAZA AS A TEAM","ALL CACHES SECURED",5200)}sendFullState(e=!1){if(!this.isHost||!this.session?.online||!this.network?.connected||!this.mission)return;let t=performance.now();!e&&t-(this.lastFullStateAt||0)<90||(this.lastFullStateAt=t,this.network.send("state",{mission:{phase:this.mission.phase,shards:this.mission.shards.map(n=>({id:n.id,x:n.x,z:n.z,name:n.name,collected:n.collected})),elapsed:this.mission.elapsed,score:this.mission.score,extraction:{x:this.mission.extraction.x,z:this.mission.extraction.z},extractProgress:this.mission.extractProgress,extractSeconds:this.mission.extractSeconds,completeIn:this.mission.completeIn,contract:this.mission.contract,contractName:this.mission.contractName,contractTag:this.mission.contractTag,contractIndex:this.mission.contractIndex,contractTotal:this.mission.contractTotal,scoreBonus:this.mission.scoreBonus},weather:this.world?.weather?.kind||"rain",enemies:this.localEnemies.filter(n=>n.alive).map(n=>({id:n.id,type:n.type,x:n.x,y:n.y,z:n.z,ry:n.yaw,health:n.health,alert:n.alert})),cars:this.cars.map(n=>({id:n.id,x:n.x,z:n.z,yaw:n.yaw,o:n.occupiedBy})),alert:this.alertCount||0}))}sendPlayerState(e=!1){if(!this.session?.online||!this.network?.connected||!this.player)return;let t=performance.now();if(!e&&t-(this.lastPlayerStateAt||0)<85)return;this.lastPlayerStateAt=t;let n=this.player,s=this.localCar;this.network.send("player-state",{x:s?s.x:n.pos.x,y:s?0:n.pos.y,z:s?s.z:n.pos.z,ry:s?s.yaw:n.bodyYaw,inCar:!!s,carId:s?.id||null,speed:s?s.speed:n.moveSpeed,boosting:s?(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"))&&s.boost>.05&&s.speed>1:!1,health:n.health,alive:n.alive,name:this.myName,color:this.myColor})}ensureRemote(e,t={}){if(!e||e===this.session?.selfId)return null;let n=this.remotePlayers.get(e);if(n)return t.name&&(n.name=t.name),t.color!==void 0&&(n.color=t.color),n;let s=this.network?.players?.get(e),r=t.color??s?.color??16723349,o=t.name||s?.name||"ALLY",a=xc({color:r,skin:13212281}),l=es(this.shadowTex,2.1);l.material.opacity=.65;let c=new P(this.world.spawn.x+2,0,this.world.spawn.z);return a.group.position.copy(c),this.scene.add(a.group),this.scene.add(l),n={id:e,name:o,color:r,char:a,shadow:l,pos:c,target:c.clone(),bodyYaw:0,targetYaw:0,inCar:!1,carId:null,speed:0,boosting:!1,health:100,alive:!0,moveSpeed:0},this.remotePlayers.set(e,n),n}handlePlayerState(e){if(!e.from||e.from===this.session?.selfId)return;let t=this.ensureRemote(e.from,{name:e.name,color:e.color});if(t)if(t.target.set(e.x||0,e.y||0,e.z||0),t.targetYaw=e.ry||0,t.inCar=!!e.inCar,t.speed=e.speed||0,t.boosting=!!e.boosting,t.health=e.health??100,t.alive=e.alive!==!1,this.isHost){let n=t.carId;if(t.carId=e.carId||null,n&&n!==t.carId){let s=this.cars.find(r=>r.id===n);s&&s.occupiedBy===t.id&&(s.occupiedBy=null)}if(t.carId){let s=this.cars.find(r=>r.id===t.carId);s&&(s.occupiedBy=t.id,s.x=t.target.x,s.z=t.target.z,s.yaw=t.targetYaw)}}else this.network?.hostId===t.id&&(t.carId=e.carId||null)}onNetMessage(e){if(!(!this.session||!e||!e.from))switch(e.type){case"player-state":this.handlePlayerState(e);break;case"state":this.isHost||this.handleState(e);break;case"weather":!this.isHost&&e.weather&&this.applyWeather(e.weather,!0);break;case"weather-request":if(this.isHost&&e.weather){let t=this.world.getWeatherPreset(e.weather);t&&(this.applyWeather(t.id,!0),this.network?.send("weather",{weather:t.id,by:this.session?.selfId,name:this.myName}))}break;case"shard-request":this.isHost&&this.handleShardRequest(e);break;case"shard-collected":this.isHost||this.handleRemoteShardCollected(e);break;case"shot":this.isHost&&this.handleRemoteShot(e);break;case"enemy-shot":this.isHost||this.handleEnemyShot(e);break;case"enemy-dead":this.isHost||this.handleEnemyDead(e);break;case"hit":e.target===this.session.selfId&&this.damagePlayer(e.amount||5,e.source);break;case"chat":{let t=String(e.text||"").replace(/[<>]/g,"").trim().slice(0,120);t&&this.ui.chat(e.name||this.remotePlayers.get(e.from)?.name||"ALLY",t,e.color??16723349);break}case"map-ping":this.addPing(e.id||`${e.from}-${this.elapsed}`,e.name||this.remotePlayers.get(e.from)?.name||"ALLY",e.x,e.z,e.color??16723349);break;case"redeploy":this.isHost&&this.mission?.phase==="complete"&&this.resetMission();break;default:break}}handleShardRequest(e){if(!this.isHost||!this.mission||this.mission.phase!=="collect")return;let t=this.remotePlayers.get(e.from);if(!t||!t.alive)return;let n=this.mission.shards.find(s=>s.id===e.shardId);!n||n.collected||Mn(t.pos.x,t.pos.z,n.x,n.z)>7||(this.applyShardCollected(n,t.name,!0),this.mission.score+=500,this.network?.send("shard-collected",{shardId:n.id,by:t.id,name:t.name,all:this.mission.shards.every(s=>s.collected)}),this.mission.shards.every(s=>s.collected)&&(this.mission.phase="extract",this.world.extractionGroup.visible=!0,this.ui.showMissionBanner("EXTRACTION READY","RETURN TO THE PLAZA AS A TEAM","ALL CACHES SECURED",5200),this.ui.feed("All caches secured. Extraction gate is live at the plaza.","ok","EXTRACT")),this.sendFullState(!0))}handleRemoteShardCollected(e){if(this.isHost||!this.mission)return;let t=this.mission.shards.find(n=>n.id===e.shardId);t&&(this.applyShardCollected(t,e.name||"ALLY",!0),(e.all||this.mission.shards.every(n=>n.collected))&&(this.mission.phase==="collect"&&(this.mission.phase="extract"),this.world.extractionGroup.visible=!0))}handleRemoteShot(e){if(!this.isHost)return;let t=this.localEnemies.find(c=>c.id===e.enemyId&&c.alive);if(!t)return;let n=Number(e.ox)||0,s=Number(e.oz)||0,r=Number(e.ex)||0,o=Number(e.ez)||0;if(Mn(n,s,t.x,t.z)>70||Wv(t.x,t.z,n,s,r,o)>2.3)return;let a=new P(n,Number(e.oy)||1.2,s),l=new P(t.x,t.type==="drone"?t.y:1.1,t.z);this.isShotBlocked(a,l)||(this.effects.tracer(a,l,16773577),this.applyEnemyDamage(t,Hm,this.remotePlayers.get(e.from)?.name||"ALLY"))}handleEnemyShot(e){let t=new P(e.ox,e.oy,e.oz),n=new P(e.ex,e.ey,e.ez);this.effects.tracer(t,n,16739179),this.camera.position.distanceTo(t)<46&&this.audio.enemyShot(),e.hit||this.effects.bulletImpact(n,new P(0,1,0),16751226)}handleEnemyDead(e){if(this.isHost)return;let t=this.remoteEnemies.get(e.id);t&&(this.effects.explosion(new P(e.x,e.y,e.z),e.type==="drone"?16734837:16747351,e.type==="drone"?1.15:.8),this.audio.explosion(),this.scene.remove(t.group),this.scene.remove(t.shadow),this.remoteEnemies.delete(e.id))}onPlayerJoin(e){!e||e.id===this.session?.selfId||(this.ensureRemote(e.id,e),this.updateRoster(),this.ui.feed(`${(e.name||"ALLY").toUpperCase()} linked into the district.`,"ok","LINK"),this.ui.toast(`${e.name||"ALLY"} joined. Hold the city together.`,"ok",3200),this.isHost&&this.sendFullState(!0))}onPlayerLeave(e){let t=e?.id;if(!t)return;let n=this.remotePlayers.get(t);if(n){for(let r of this.cars)r.occupiedBy===t&&(r.occupiedBy=null);this.scene.remove(n.char.group),this.scene.remove(n.shadow),this.remotePlayers.delete(t)}this.network&&this.network.players.delete(t),this.updateRoster();let s=e?.player?.name||n?.name||"ALLY";this.ui.feed(`${s.toUpperCase()} disconnected from the district.`,"warn","LINK"),this.ui.toast(`${s} left the district.`,"warn",3e3),this.isHost&&this.sendFullState(!0)}onHostChanged(e){if(!this.session)return;this.session.hostId=e;let t=this.network?.isHost;t&&!this.isHost?(this.isHost=!0,this.clearRemoteEnemies(),this.mission?(this.syncShardVisuals(),this.spawnLocalEnemies(),this.sendFullState(!0)):this.startMission(),this.ui.toast("You are now hosting the city. Keep the contract alive.","info",5e3),this.ui.feed("Host migrated to you. Security traffic re-synced.","warn","NETWORK")):!t&&this.isHost&&(this.isHost=!1,this.clearEnemies(),this.ui.toast("Host migrated to your partner.","info",4e3)),this.updateRoster()}updateRoster(){this.session&&this.ui.updateRoster({id:this.session.selfId,name:this.myName,color:this.myColor},[...this.network?.players.values()||[]],this.session.hostId)}updateRemotes(e,t){for(let n of this.remotePlayers.values()){let s=n.pos.x,r=n.pos.z;n.pos.lerp(n.target,1-Math.exp(-e*9)),n.bodyYaw=Qo(n.bodyYaw,n.targetYaw,9,e);let o=Math.hypot(n.pos.x-s,n.pos.z-r)/Math.max(e,.001);n.moveSpeed=hi(n.moveSpeed||0,Math.min(o,12),8,e),n.inCar?(n.char.group.visible=!1,n.shadow.visible=!1):(n.char.group.visible=n.alive,n.shadow.visible=n.alive,n.char.group.position.copy(n.pos),n.char.group.rotation.y=n.bodyYaw,n.char.animate(e,t,n.moveSpeed,!0,!1),n.shadow.position.set(n.pos.x,.045,n.pos.z)),n.alive||(n.char.group.visible=!1,n.shadow.visible=!1)}}updatePings(){this.pings=this.pings.filter(e=>this.elapsed-e.born<8)}updateHUD(e,t){if(!this.player)return;this.hudTick+=e,this.ui.setVitals(this.player.health,this.player.stamina),this.currentMode==="foot"&&this.ui.setAmmo(this.player.ammo,this.player.reserve,this.player.reloading>0?1-this.player.reloading/1.35:0);let n=this.renderer.domElement.clientWidth||window.innerWidth,s=this.renderer.domElement.clientHeight||window.innerHeight;this.mission&&this.ui.setMission(this.mission,this.objectiveDistance()),this.ui.setAlert(this.isHost?this.alertCount||0:this.remoteAlertCount||0),this.ui.updateRemoteLabels(this.camera,n,s,[...this.remotePlayers.values()].map(a=>({id:a.id,name:a.name,cssColor:Gm(a.color),position:a.pos,inCar:a.inCar,visible:a.alive}))),this.ui.updatePingLabels(this.camera,n,s,this.pings);let r=[];if(this.mission){for(let a of this.mission.shards)a.collected||r.push({id:`shard-${a.id}`,position:new P(a.x,2.2,a.z),label:"DATA CACHE",className:"world-marker--cache"});(this.mission.phase==="extract"||this.mission.phase==="extracting"||this.mission.phase==="complete")&&r.push({id:"extraction-marker",position:new P(this.mission.extraction.x,2.4,this.mission.extraction.z),label:"EXTRACTION",className:"world-marker--extract"})}if(this.ui.updateLabels(this.camera,n,s,r,e),this.hudTick>.045){this.hudTick=0;let a=this.isHost?this.localEnemies.filter(l=>l.alive):[...this.remoteEnemies.values()].filter(l=>l.alive);this.ui.drawMinimap(this.world,{x:this.player.pos.x,z:this.player.pos.z,rot:this.currentMode==="car"&&this.localCar?this.localCar.yaw:this.player.bodyYaw},[...this.remotePlayers.values()].map(l=>({x:l.pos.x,z:l.pos.z,rot:l.bodyYaw,colorHex:Gm(l.color)})),this.mission,a.map(l=>({x:l.x,z:l.z})),this.pings,performance.now())}performance.now()-this.lastFpsUpdate>700&&(this.lastFpsUpdate=performance.now(),this.ui.setFps(this.fps,this.network?.latency??null));let o=document.pointerLockElement===this.canvas;this.ui.setLockHint(!o&&this.status==="playing"&&!this.chatOpen&&!this.controlsOpen),(this.status==="dead"||this.status==="result"||this.status==="disconnected"||this.paused||this.chatOpen)&&this.ui.setCrosshair(!1)}objectiveDistance(){if(!this.mission||!this.player)return 1/0;if(this.mission.phase==="collect"){let e=1/0;for(let t of this.mission.shards)t.collected||(e=Math.min(e,Mn(this.player.pos.x,this.player.pos.z,t.x,t.z)));return e}return this.mission.phase==="extract"||this.mission.phase==="extracting"?Mn(this.player.pos.x,this.player.pos.z,this.mission.extraction.x,this.mission.extraction.z):0}positionMenuCamera(e){this.menuAngle+=e*.028;let t=92;this.camera.position.set(Math.sin(this.menuAngle)*t,30+Math.sin(this.menuAngle*.7)*8,Math.cos(this.menuAngle)*t),this.camera.lookAt(0,15,0),this.camera.fov=62,this.camera.updateProjectionMatrix()}updateNetworking(e){!this.session?.online||!this.network?.connected||(this.playerStateTimer+=e,this.playerStateTimer>.08&&(this.playerStateTimer=0,this.sendPlayerState()))}copyInvite(){let e=this.session?.roomCode;if(!e){this.ui.toast("Solo patrols have no room code. Host a city to invite a partner.","info",3600);return}let t=new URL(window.location.href);t.search="",t.hash="",t.searchParams.set("room",e);let n=t.toString(),s=()=>{let r=document.createElement("textarea");r.value=n,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select();try{document.execCommand("copy"),this.ui.toast("Invite link copied. Send it to your partner.","ok",2800)}catch{this.ui.toast(`Room code: ${e}`,"info",5e3)}r.remove()};navigator.clipboard?.writeText?navigator.clipboard.writeText(n).then(()=>this.ui.toast("Invite link copied. Send it to your partner.","ok",2800)).catch(s):s()}leaveGame(){this.ui.setPaused(!1),this.ui.hideDisconnect(),this.ui.hideResult(),this.ui.hideDeath(),this.ui.setControls(!1),this.keys.clear(),this.mouseDown=!1,this.aiming=!1,this.session=null,this.status="menu",this.ignoreUnlock=!0,this.network?.close(),this.network=null,window.location.href=window.location.pathname}update(e,t,n){if(this.elapsed=t,Number.isFinite(n)&&n>1&&(this.fps=n),!this.session||this.status==="menu"){this.positionMenuCamera(e);return}if(this.status==="disconnected")return;if((this.paused||this.chatOpen)&&!this.session.online){this.updateCamera(e,t),this.updateHUD(e,t),this.ui.setLockHint(!1);return}this.updateRemotes(e,t),this.updatePlayer(e,t),this.currentMode==="car"&&this.updateVehicle(e,t),this.updateCamera(e,t),this.updateWeapon(e,t),this.updateInteractions(),this.isHost?this.updateEnemies(e,t):this.updateRemoteEnemies(e,t),this.updateMission(e,t),this.updateCars(e),this.updateShardVisuals(e,t),this.updatePings(),this.updateNetworking(e),this.updateHUD(e,t)}}});var Zv=vd(()=>{cn();wp();Cp();Pp();Lp();zp();Qp();em();tm();Vm();var Vc={performance:{cap:1,bloom:.34,bloomRadius:.4,worldQuality:.72,low:!0},balanced:{cap:1.35,bloom:.55,bloomRadius:.5,worldQuality:1,low:!1},cinematic:{cap:2,bloom:.72,bloomRadius:.6,worldQuality:1,low:!1}},Xv="nightfall:quality",qv=document.getElementById("gameCanvas"),un=new uc;un.setLoading(.04,"INITIALIZING THE DISTRICT");function Gc(){return new Promise(i=>requestAnimationFrame(()=>i()))}function Yv(){try{let i=localStorage.getItem(Xv);if(i&&Vc[i])return i}catch{}return"balanced"}async function $v(){if(!window.WebGL2RenderingContext){un.setLoading(.15,"WEBGL 2 IS REQUIRED"),un.showLanding(),un.showStartError("This browser does not expose WebGL 2. Use a current Chrome, Edge, Firefox or Safari build.");return}let i;try{i=new ec({canvas:qv,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1,depth:!0})}catch(U){console.error(U),un.setLoading(.15,"RENDERER UNAVAILABLE"),un.showLanding(),un.showStartError("WebGL could not start. Close other 3D tabs, update your graphics driver, then reload.");return}i.setClearColor(197899,1),i.toneMapping=_s,i.toneMappingExposure=1.06,i.outputColorSpace=Qt,i.shadowMap.enabled=!1,i.info.autoReset=!0;let e=new eo,t=new pn(62,window.innerWidth/window.innerHeight,.12,760);t.position.set(0,26,-68),un.setLoading(.2,"ASSEMBLING THE NEON GRID"),await Gc(),await Gc();let n=jp(e,i);un.setLoading(.62,"RAISING THE SKYLINE"),await Gc();let s=new mc(e),r=new gc;un.setLoading(.72,"CHARGING THE RAIN");let o=Yv(),a=o,l=Vc[o],c=1;i.setPixelRatio(Math.min(window.devicePixelRatio||1,l.cap)),i.setSize(window.innerWidth,window.innerHeight,!1);let h=i.getDrawingBufferSize(new Fe),u=new qt(h.x,h.y,{type:tn,samples:2});u.texture.name="nightfall.hdr";let d=new rc(i,u),f=new oc(e,t),m=new Sr(new Fe(window.innerWidth,window.innerHeight),l.bloom,l.bloomRadius,.74),y=new ac;d.addPass(f),d.addPass(m),d.addPass(y),d.setSize(window.innerWidth,window.innerHeight),s.setViewport(i.domElement.height,t.fov);function g(){let U=Math.min(window.devicePixelRatio||1,l.cap)*c;i.setPixelRatio(U),i.setSize(window.innerWidth,window.innerHeight,!1),d.setPixelRatio(U),d.setSize(window.innerWidth,window.innerHeight),s.setViewport(i.domElement.height,t.fov)}function p(U){a=Vc[U]?U:"balanced",l=Vc[a],c=1,n.quality=l.worldQuality,n.low=l.low,m.strength=l.bloom,m.radius=l.bloomRadius,g()}p(o),un.setLoading(.84,"BINDING THE RESPONSE GRID"),await Gc();let _=new Hc({scene:e,camera:t,renderer:i,world:n,ui:un,effects:s,audio:r,setQuality:p});un.setLoading(.92,"SYNCING THE NETWORK"),await _.init();let T=performance.now(),S=0,w=0,E=60,x=0,b=0;function I(){let U=window.innerWidth,B=window.innerHeight;t.aspect=U/B,t.updateProjectionMatrix(),i.setPixelRatio(Math.min(window.devicePixelRatio||1,l.cap)*c),i.setSize(U,B,!1),d.setPixelRatio(i.getPixelRatio()),d.setSize(U,B),s.setViewport(i.domElement.height,t.fov),un.initMinimap(n)}window.addEventListener("resize",I),document.addEventListener("visibilitychange",()=>{document.hidden||(T=performance.now())});function A(U){requestAnimationFrame(A);let B=(U-T)/1e3;T=U;let k=Math.min(Math.max(B,0),.05);S+=B,w+=1,S>=.5&&(E=w/S,S=0,w=0),_.update(k,U/1e3,E);let R=_.localCar?{x:_.localCar.x,z:_.localCar.z}:_.player?{x:_.player.pos.x,z:_.player.pos.z}:{x:0,z:0};n.update(k,U/1e3,R,t.position),s.update(k),d.render(k),x+=B,(_.status==="playing"||_.status==="dead")&&x>1.1&&(x=0,E<52&&c>.62?(c=Math.max(.62,c-.08),g(),b=0):E>58?(b+=1.1,b>4.5&&c<1&&(c=Math.min(1,c+.04),g(),b=0)):b=0)}window.__nightfall={game:_,world:n,scene:e,camera:t,renderer:i,composer:d,effects:s,applyQuality:p},requestAnimationFrame(A)}$v().catch(i=>{console.error("Nightfall boot failed",i),un.setLoading(.3,"BOOT FAILURE"),un.showLanding(),un.showStartError(`Boot failure: ${i?.message||"unknown error"}. Reload the page and try again.`)})});Zv();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
