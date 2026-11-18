(()=>{var Um=Object.create;var Bl=Object.defineProperty;var Om=Object.getOwnPropertyDescriptor;var Bm=Object.getOwnPropertyNames;var Fm=Object.getPrototypeOf,km=Object.prototype.hasOwnProperty;var zm=i=>{throw TypeError(i)};var lt=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var ud=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},$o=(i,e)=>{for(var t in e)Bl(i,t,{get:e[t],enumerable:!0})},Hm=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Bm(e))!km.call(i,s)&&s!==t&&Bl(i,s,{get:()=>e[s],enumerable:!(n=Om(e,s))||n.enumerable});return i};var dd=(i,e,t)=>(t=i!=null?Um(Fm(i)):{},Hm(e||!i||!i.__esModule?Bl(t,"default",{value:i,enumerable:!0}):t,i));var Rr=(i,e,t)=>e.has(i)?zm("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t);function Gm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wf(){let i=Vr("canvas");return i.style.display="block",i}function Wr(...i){let e="THREE."+i.shift();Ks?Ks("log",e,...i):console.log(e,...i)}function Cf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function We(...i){i=Cf(i);let e="THREE."+i.shift();if(Ks)Ks("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=Cf(i);let e="THREE."+i.shift();if(Ks)Ks("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function os(...i){let e=i.join(" ");e in fd||(fd[e]=!0,We(...i))}function Af(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function gs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function Wm(i,e){return(i%e+e)%e}function kl(i,e,t){return(1-t)*i+t*e}function Pf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function If(i,e){if(e.constructor===Float32Array)return i;let t=Hc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Lf(i,e){if(e.constructor===Float32Array)return i;let t=Hc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}function Xm(){let i={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=$s(s.r),s.g=$s(s.g),s.b=$s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wn?Gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hr]:{primaries:e,whitePoint:n,transfer:Gr,toXYZ:md,fromXYZ:gd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:md,fromXYZ:gd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),i}function _i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Gl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Na.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}function Xl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Ql(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){is.fromArray(i,r);let a=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),c=e.dot(is),l=t.dot(is),h=n.dot(is);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}function Td(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=gs()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}function sa(i,e,t,n,s,r){Vs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ur.x=r*Vs.x-s*Vs.y,Ur.y=s*Vs.x+r*Vs.y):Ur.copy(Vs),i.copy(e),i.x+=Ur.x,i.y+=Ur.y,i.applyMatrix4(Nf)}function a0(i,e,t,n,s,r,o,a){let c;if(e.side===jt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Yi,a),c===null)return null;da.copy(a),da.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(da);return l<t.near||l>t.far?null:{distance:l,point:da.clone(),object:i}}function fa(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ca),i.getVertexPosition(c,la),i.getVertexPosition(l,ha);let h=a0(i,e,t,n,ca,la,ha,Pd);if(h){let d=new I;yi.getBarycoord(Pd,ca,la,ha,d),s&&(h.uv=yi.getInterpolatedAttribute(s,a,c,l,d,new Oe)),r&&(h.uv1=yi.getInterpolatedAttribute(r,a,c,l,d,new Oe)),o&&(h.normal=yi.getInterpolatedAttribute(o,a,c,l,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new I,materialIndex:0};yi.getNormal(ca,la,ha,u.normal),h.face=u,h.barycoord=d}return h}function xa(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Fa.fromBufferAttribute(a,s),ka.fromBufferAttribute(a,r),t.distanceSqToSegment(Fa,ka,oh,Ud)>n)return;oh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(oh);if(!(l<e.near||l>e.far))return{distance:l,point:Ud.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}function kd(i,e,t,n,s,r,o){let a=dh.distanceSqToPoint(i);if(a<t){let c=new I;dh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function xs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(zd(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(zd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function on(i){let e={};for(let t=0;t<i.length;t++){let n=xs(i[t]);for(let s in n)e[s]=n[s]}return e}function zd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function h0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Oh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}function Xs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function va(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Uf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function f0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function p0(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Uf(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=f0(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}function Hd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Gd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function m0(){this._document.hidden===!1&&this.reset()}function kh(i,e,t,n){let s=E0(n);switch(t){case Rh:return i*e;case oc:return i*e/s.components*s.byteLength;case ac:return i*e/s.components*s.byteLength;case $i:return i*e*2/s.components*s.byteLength;case cc:return i*e*2/s.components*s.byteLength;case Ph:return i*e*3/s.components*s.byteLength;case Vn:return i*e*4/s.components*s.byteLength;case lc:return i*e*4/s.components*s.byteLength;case vo:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mo:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uc:case fc:return Math.max(i,16)*Math.max(e,8)/4;case hc:case dc:return Math.max(i,8)*Math.max(e,8)/2;case pc:case mc:case xc:case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gc:case Eo:case _c:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case bc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Dc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Nc:case Uc:case Oc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Bc:case Fc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case To:case kc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function E0(i){switch(i){case vn:case Th:return{byteLength:1,components:1};case dr:case wh:case Vt:return{byteLength:2,components:1};case sc:case rc:return{byteLength:2,components:4};case Gn:case ic:case Ln:return{byteLength:4,components:1};case Ch:case Ah:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var Yd,yh,$d,uo,Zd,cr,Yi,jt,wt,Ei,lr,tt,_h,vh,Jd,ds,Kd,jd,Qd,ef,tf,nf,sf,rf,Sh,Mh,of,af,cf,lf,hf,uf,df,ff,pf,Ta,wa,Ca,Zs,Aa,Ra,Pa,Ia,bh,mf,gf,ii,fo,po,mo,fs,go,xo,yo,Eh,ps,hr,ur,tc,Kn,Jn,La,Zt,xf,_o,fn,nc,Ti,vn,Th,wh,dr,ic,Gn,Ln,Vt,sc,rc,ms,Ch,Ah,Rh,Ph,Vn,vi,wi,oc,ac,$i,cc,lc,vo,So,Mo,bo,hc,uc,dc,fc,pc,mc,gc,xc,yc,Eo,_c,vc,Sc,Mc,bc,Ec,Tc,wc,Cc,Ac,Rc,Pc,Ic,Lc,Dc,Nc,Uc,Oc,Bc,Fc,To,kc,zr,Da,ba,ch,lh,hh,uh,yf,zc,_f,Wn,Ht,Hr,Gr,mt,Ea,vf,Sf,Mf,bf,Ih,Ef,Tf,Lh,Dh,Nh,Uh,Pn,Js,fd,Ks,Rf,jn,sn,Fl,Xr,zh,Oe,Qn,Hh,I,zl,pd,Gh,Je,Hl,md,gd,ot,Ps,Na,qm,js,Ym,Vl,pn,Vh,Rt,Ua,Nt,qr,Oa,ec,xt,Is,On,$m,Zm,Di,Zo,bn,xd,yd,Si,Yr,Jm,_d,Ls,fi,Jo,Pr,Km,jm,vd,Sd,Md,bd,Qm,Ds,Wl,It,yt,e0,Qs,Df,Ni,Ko,Ne,rn,$r,Zr,Bn,pi,ql,mi,Ns,Us,Ed,Yl,$l,Zl,Jl,Kl,jl,yi,ei,gi,Fn,jo,Os,Bs,Fs,Ui,Oi,ns,Ir,Qo,ea,is,kt,ta,t0,Tt,Jr,Kr,rt,n0,Lr,eh,ti,i0,Rn,th,ks,En,Dr,$t,_t,jr,dn,er,nh,s0,r0,kn,o0,zn,yn,zs,Nr,Hs,Gs,Vs,Ur,Nf,na,Or,ia,wd,ih,Cd,Tn,xi,sh,ra,oa,tr,et,Ad,ss,aa,Rd,ca,la,ha,rh,ua,Pd,da,re,Qr,nr,Ws,Id,pa,Ld,c0,Br,Fr,_n,rs,l0,ma,Fi,Dd,Ba,ir,Fa,ka,Nd,kr,ga,oh,Ud,za,Od,Bd,as,ki,Fd,dh,ya,_a,Mi,eo,zi,bi,to,no,Le,cs,Ut,ls,io,Hi,hs,Gt,Gi,In,Hn,Ci,u0,d0,Lt,sr,ut,rr,Ha,Ga,Vi,Va,Wa,Xa,qa,wn,Wi,Ya,$a,Za,so,Xi,Ja,Ka,Of,ja,qi,ro,ah,Vd,Wd,or,Sa,Ma,Zn,oo,Bi,Xd,qd,Kt,fh,ao,ph,ni,us,mh,co,lo,qs,Ys,ar,Qa,ho,Bh,g0,Fh,x0,y0,_0,v0,S0,M0,b0,gh,At,Hv,Wh,xh,Xh=lt(()=>{Yd=0,yh=1,$d=2,uo=1,Zd=2,cr=3,Yi=0,jt=1,wt=2,Ei=0,lr=1,tt=2,_h=3,vh=4,Jd=5,ds=100,Kd=101,jd=102,Qd=103,ef=104,tf=200,nf=201,sf=202,rf=203,Sh=204,Mh=205,of=206,af=207,cf=208,lf=209,hf=210,uf=211,df=212,ff=213,pf=214,Ta=0,wa=1,Ca=2,Zs=3,Aa=4,Ra=5,Pa=6,Ia=7,bh=0,mf=1,gf=2,ii=0,fo=1,po=2,mo=3,fs=4,go=5,xo=6,yo=7,Eh=300,ps=301,hr=302,ur=303,tc=304,Kn=1e3,Jn=1001,La=1002,Zt=1003,xf=1004,_o=1005,fn=1006,nc=1007,Ti=1008,vn=1009,Th=1010,wh=1011,dr=1012,ic=1013,Gn=1014,Ln=1015,Vt=1016,sc=1017,rc=1018,ms=1020,Ch=35902,Ah=35899,Rh=1021,Ph=1022,Vn=1023,vi=1026,wi=1027,oc=1028,ac=1029,$i=1030,cc=1031,lc=1033,vo=33776,So=33777,Mo=33778,bo=33779,hc=35840,uc=35841,dc=35842,fc=35843,pc=36196,mc=37492,gc=37496,xc=37488,yc=37489,Eo=37490,_c=37491,vc=37808,Sc=37809,Mc=37810,bc=37811,Ec=37812,Tc=37813,wc=37814,Cc=37815,Ac=37816,Rc=37817,Pc=37818,Ic=37819,Lc=37820,Dc=37821,Nc=36492,Uc=36494,Oc=36495,Bc=36283,Fc=36284,To=36285,kc=36286,zr=2300,Da=2301,ba=2302,ch=2303,lh=2400,hh=2401,uh=2402,yf=3200,zc=0,_f=1,Wn="",Ht="srgb",Hr="srgb-linear",Gr="linear",mt="srgb",Ea=7680,vf=519,Sf=512,Mf=513,bf=514,Ih=515,Ef=516,Tf=517,Lh=518,Dh=519,Nh=35044,Uh="300 es",Pn=2e3,Js=2001;fd={},Ks=null;Rf={[Ta]:Ta,[Ca]:Pa,[Aa]:Aa,[Zs]:Ra,[wa]:wa,[Pa]:Ca,[Ia]:Ia,[Ra]:Zs},jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fl=Math.PI/180,Xr=180/Math.PI;zh=class zh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zh.prototype.isVector2=!0;Oe=zh,Qn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],p=r[o+2],y=r[o+3];if(d!==y||c!==u||l!==f||h!==p){let g=c*u+l*f+h*p+d*y;g<0&&(u=-u,f=-f,p=-p,y=-y,g=-g);let m=1-a;if(g<.9995){let _=Math.acos(g),T=Math.sin(_);m=Math.sin(m*_)/T,a=Math.sin(a*_)/T,c=c*m+u*a,l=l*m+f*a,h=h*m+p*a,d=d*m+y*a}else{c=c*m+u*a,l=l*m+f*a,h=h*m+p*a,d=d*m+y*a;let _=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=_,l*=_,h*=_,d*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*d+c*f-l*u,e[t+1]=c*p+h*u+l*d-a*f,e[t+2]=l*p+h*f+a*u-c*d,e[t+3]=h*p-a*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"YZX":this._x=u*h*d+l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d-u*f*p;break;case"XZY":this._x=u*h*d-l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d+u*f*p;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Hh=class Hh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zl.copy(this).projectOnVector(e),this.sub(zl)}reflect(e){return this.sub(zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hh.prototype.isVector3=!0;I=Hh,zl=new I,pd=new Qn,Gh=class Gh{constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],y=s[0],g=s[3],m=s[6],_=s[1],T=s[4],M=s[7],w=s[2],E=s[5],x=s[8];return r[0]=o*y+a*_+c*w,r[3]=o*g+a*T+c*E,r[6]=o*m+a*M+c*x,r[1]=l*y+h*_+d*w,r[4]=l*g+h*T+d*E,r[7]=l*m+h*M+d*x,r[2]=u*y+f*_+p*w,r[5]=u*g+f*T+p*E,r[8]=u*m+f*M+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,p=t*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=d*y,e[1]=(s*l-h*n)*y,e[2]=(a*n-s*o)*y,e[3]=u*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hl.makeScale(e,t)),this}rotate(e){return os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hl.makeRotation(-e)),this}translate(e,t){return os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gh.prototype.isMatrix3=!0;Je=Gh,Hl=new Je,md=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gd=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot=Xm();Na=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ps===void 0&&(Ps=Vr("canvas")),Ps.width=e.width,Ps.height=e.height;let s=Ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},qm=0,js=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gl(s[o].image)):r.push(Gl(s[o]))}else r=Gl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};Ym=0,Vl=new I,pn=class i extends jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Jn,s=Jn,r=fn,o=Ti,a=Vn,c=vn,l=i.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=gs(),this.name="",this.source=new js(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Vl).x}get height(){return this.source.getSize(Vl).y}get depth(){return this.source.getSize(Vl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kn:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kn:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Eh;pn.DEFAULT_ANISOTROPY=1;Vh=class Vh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],p=c[9],y=c[2],g=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,M=(f+1)/2,w=(m+1)/2,E=(h+u)/4,x=(d+y)/4,b=(p+g)/4;return T>M&&T>w?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=E/n,r=x/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=b/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=x/r,s=b/r),this.set(n,s,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(d-y)/_,this.z=(u-h)/_,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vh.prototype.isVector4=!0;Rt=Vh,Ua=class extends jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new pn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new js(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nt=class extends Ua{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qr=class extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Oa=class extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},ec=class ec{constructor(e,t,n,s,r,o,a,c,l,h,d,u,f,p,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,d,u,f,p,y,g)}set(e,t,n,s,r,o,a,c,l,h,d,u,f,p,y,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ec().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),o=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,p=a*h,y=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+p*l,t[5]=u-y*l,t[9]=-a*c,t[2]=y-u*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,p=l*h,y=l*d;t[0]=u+y*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=y+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,p=l*h,y=l*d;t[0]=u-y*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=y-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,f=o*d,p=a*h,y=a*d;t[0]=c*h,t[4]=p*l-f,t[8]=u*l+y,t[1]=c*d,t[5]=y*l+u,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,f=o*l,p=a*c,y=a*l;t[0]=c*h,t[4]=y-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+p,t[10]=u-y*d}else if(e.order==="XZY"){let u=o*c,f=o*l,p=a*c,y=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+y,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($m,e,Zm)}lookAt(e,t,n){let s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Di.crossVectors(n,bn),Di.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Di.crossVectors(n,bn)),Di.normalize(),Zo.crossVectors(bn,Di),s[0]=Di.x,s[4]=Zo.x,s[8]=bn.x,s[1]=Di.y,s[5]=Zo.y,s[9]=bn.y,s[2]=Di.z,s[6]=Zo.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],y=n[6],g=n[10],m=n[14],_=n[3],T=n[7],M=n[11],w=n[15],E=s[0],x=s[4],b=s[8],N=s[12],R=s[1],U=s[5],k=s[9],H=s[13],P=s[2],z=s[6],X=s[10],q=s[14],ae=s[3],J=s[7],ie=s[11],oe=s[15];return r[0]=o*E+a*R+c*P+l*ae,r[4]=o*x+a*U+c*z+l*J,r[8]=o*b+a*k+c*X+l*ie,r[12]=o*N+a*H+c*q+l*oe,r[1]=h*E+d*R+u*P+f*ae,r[5]=h*x+d*U+u*z+f*J,r[9]=h*b+d*k+u*X+f*ie,r[13]=h*N+d*H+u*q+f*oe,r[2]=p*E+y*R+g*P+m*ae,r[6]=p*x+y*U+g*z+m*J,r[10]=p*b+y*k+g*X+m*ie,r[14]=p*N+y*H+g*q+m*oe,r[3]=_*E+T*R+M*P+w*ae,r[7]=_*x+T*U+M*z+w*J,r[11]=_*b+T*k+M*X+w*ie,r[15]=_*N+T*H+M*q+w*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],y=e[7],g=e[11],m=e[15],_=c*f-l*u,T=a*f-l*d,M=a*u-c*d,w=o*f-l*h,E=o*u-c*h,x=o*d-a*h;return t*(y*_-g*T+m*M)-n*(p*_-g*w+m*E)+s*(p*T-y*w+m*x)-r*(p*M-y*E+g*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],y=e[13],g=e[14],m=e[15],_=t*a-n*o,T=t*c-s*o,M=t*l-r*o,w=n*c-s*a,E=n*l-r*a,x=s*l-r*c,b=h*y-d*p,N=h*g-u*p,R=h*m-f*p,U=d*g-u*y,k=d*m-f*y,H=u*m-f*g,P=_*H-T*k+M*U+w*R-E*N+x*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/P;return e[0]=(a*H-c*k+l*U)*z,e[1]=(s*k-n*H-r*U)*z,e[2]=(y*x-g*E+m*w)*z,e[3]=(u*E-d*x-f*w)*z,e[4]=(c*R-o*H-l*N)*z,e[5]=(t*H-s*R+r*N)*z,e[6]=(g*M-p*x-m*T)*z,e[7]=(h*x-u*M+f*T)*z,e[8]=(o*k-a*R+l*b)*z,e[9]=(n*R-t*k-r*b)*z,e[10]=(p*E-y*M+m*_)*z,e[11]=(d*M-h*E-f*_)*z,e[12]=(a*N-o*U-c*b)*z,e[13]=(t*U-n*N+s*b)*z,e[14]=(y*T-p*w-g*_)*z,e[15]=(h*w-d*T+u*_)*z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,p=r*d,y=o*h,g=o*d,m=a*d,_=c*l,T=c*h,M=c*d,w=n.x,E=n.y,x=n.z;return s[0]=(1-(y+m))*w,s[1]=(f+M)*w,s[2]=(p-T)*w,s[3]=0,s[4]=(f-M)*E,s[5]=(1-(u+m))*E,s[6]=(g+_)*E,s[7]=0,s[8]=(p+T)*x,s[9]=(g-_)*x,s[10]=(1-(u+y))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Is.set(s[0],s[1],s[2]).length(),a=Is.set(s[4],s[5],s[6]).length(),c=Is.set(s[8],s[9],s[10]).length();r<0&&(o=-o),On.copy(this);let l=1/o,h=1/a,d=1/c;return On.elements[0]*=l,On.elements[1]*=l,On.elements[2]*=l,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,t.setFromRotationMatrix(On),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Pn,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,y;if(c)p=r/(o-r),y=o*r/(o-r);else if(a===Pn)p=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Js)p=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Pn,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),p,y;if(c)p=1/(o-r),y=o/(o-r);else if(a===Pn)p=-2/(o-r),y=-(o+r)/(o-r);else if(a===Js)p=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ec.prototype.isMatrix4=!0;xt=ec,Is=new I,On=new xt,$m=new I(0,0,0),Zm=new I(1,1,1),Di=new I,Zo=new I,bn=new I,xd=new xt,yd=new Qn,Si=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yd.setFromEuler(this),this.setFromQuaternion(yd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";Yr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Jm=0,_d=new I,Ls=new Qn,fi=new xt,Jo=new I,Pr=new I,Km=new I,jm=new Qn,vd=new I(1,0,0),Sd=new I(0,1,0),Md=new I(0,0,1),bd={type:"added"},Qm={type:"removed"},Ds={type:"childadded",child:null},Wl={type:"childremoved",child:null},It=class i extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Si,n=new Qn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new Je}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(vd,e)}rotateY(e){return this.rotateOnAxis(Sd,e)}rotateZ(e){return this.rotateOnAxis(Md,e)}translateOnAxis(e,t){return _d.copy(e).applyQuaternion(this.quaternion),this.position.add(_d.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vd,e)}translateY(e){return this.translateOnAxis(Sd,e)}translateZ(e){return this.translateOnAxis(Md,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jo.copy(e):Jo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Pr,Jo,this.up):fi.lookAt(Jo,Pr,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(fi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bd),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qm),Wl.child=e,this.dispatchEvent(Wl),Wl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bd),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,Km),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,jm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};It.DEFAULT_UP=new I(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;yt=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},e0={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),m=this._getHandJoint(l,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;l.inputState.pinching&&u>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(e0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Ko={h:0,s:0,l:0};Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=Wm(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Xl(o,r,e+1/3),this.g=Xl(o,r,e),this.b=Xl(o,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let n=Df[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return ot.workingToColorSpace(rn.copy(this),e),Math.round(at(rn.r*255,0,255))*65536+Math.round(at(rn.g*255,0,255))*256+Math.round(at(rn.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(rn.copy(this),t);let n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Ht){ot.workingToColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,s=rn.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Ko);let n=kl(Ni.h,Ko.h,t),s=kl(Ni.s,Ko.s,t),r=kl(Ni.l,Ko.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Ne;Ne.NAMES=Df;$r=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Zr=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new I,pi=new I,ql=new I,mi=new I,Ns=new I,Us=new I,Ed=new I,Yl=new I,$l=new I,Zl=new I,Jl=new Rt,Kl=new Rt,jl=new Rt,yi=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Bn.subVectors(e,t),s.cross(Bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Bn.subVectors(s,t),pi.subVectors(n,t),ql.subVectors(e,t);let o=Bn.dot(Bn),a=Bn.dot(pi),c=Bn.dot(ql),l=pi.dot(pi),h=pi.dot(ql),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,p=(o*h-a*c)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mi.x),c.addScaledVector(o,mi.y),c.addScaledVector(a,mi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Jl.setScalar(0),Kl.setScalar(0),jl.setScalar(0),Jl.fromBufferAttribute(e,t),Kl.fromBufferAttribute(e,n),jl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Jl,r.x),o.addScaledVector(Kl,r.y),o.addScaledVector(jl,r.z),o}static isFrontFacing(e,t,n,s){return Bn.subVectors(n,t),pi.subVectors(e,t),Bn.cross(pi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Bn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ns.subVectors(s,n),Us.subVectors(r,n),Yl.subVectors(e,n);let c=Ns.dot(Yl),l=Us.dot(Yl);if(c<=0&&l<=0)return t.copy(n);$l.subVectors(e,s);let h=Ns.dot($l),d=Us.dot($l);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(Ns,o);Zl.subVectors(e,r);let f=Ns.dot(Zl),p=Us.dot(Zl);if(p>=0&&f<=p)return t.copy(r);let y=f*l-c*p;if(y<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(Us,a);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return Ed.subVectors(r,s),a=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(Ed,a);let m=1/(g+y+u);return o=y*m,a=u*m,t.copy(n).addScaledVector(Ns,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ei=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jo.copy(n.boundingBox)),jo.applyMatrix4(e.matrixWorld),this.union(jo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),Qo.subVectors(this.max,Ir),Os.subVectors(e.a,Ir),Bs.subVectors(e.b,Ir),Fs.subVectors(e.c,Ir),Ui.subVectors(Bs,Os),Oi.subVectors(Fs,Bs),ns.subVectors(Os,Fs);let t=[0,-Ui.z,Ui.y,0,-Oi.z,Oi.y,0,-ns.z,ns.y,Ui.z,0,-Ui.x,Oi.z,0,-Oi.x,ns.z,0,-ns.x,-Ui.y,Ui.x,0,-Oi.y,Oi.x,0,-ns.y,ns.x,0];return!Ql(t,Os,Bs,Fs,Qo)||(t=[1,0,0,0,1,0,0,0,1],!Ql(t,Os,Bs,Fs,Qo))?!1:(ea.crossVectors(Ui,Oi),t=[ea.x,ea.y,ea.z],Ql(t,Os,Bs,Fs,Qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gi=[new I,new I,new I,new I,new I,new I,new I,new I],Fn=new I,jo=new ei,Os=new I,Bs=new I,Fs=new I,Ui=new I,Oi=new I,ns=new I,Ir=new I,Qo=new I,ea=new I,is=new I;kt=new I,ta=new Oe,t0=0,Tt=class extends jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nh,this.updateRanges=[],this.gpuType=Ln,this.version=0,this._normalizationScale=e!==void 0?Hc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ta.fromBufferAttribute(this,t),ta.applyMatrix3(e),this.setXY(t,ta.x,ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):If(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Lf(e,this.array)}},Jr=class extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Kr=class extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},rt=class extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}},n0=new ei,Lr=new I,eh=new I,ti=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):n0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);let t=Lr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Lr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(eh)),this.expandByPoint(Lr.copy(e.center).sub(eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},i0=0,Rn=new xt,th=new It,ks=new I,En=new ei,Dr=new ei,$t=new I,_t=class i extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gm(e)?Kr:Jr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return th.lookAt(e),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(En.min,Dr.min),En.expandByPoint($t),$t.addVectors(En.max,Dr.max),En.expandByPoint($t)):(En.expandByPoint(Dr.min),En.expandByPoint(Dr.max))}En.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($t));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)$t.fromBufferAttribute(a,l),c&&(ks.fromBufferAttribute(e,l),$t.add(ks)),s=Math.max(s,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Tt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let N=0;N<n.count;N++)a[N]=new I,c[N]=new I;let h=new I,d=new I,u=new I,f=new Oe,p=new Oe,y=new Oe,g=new I,m=new I;function _(N,R,U){l[N]=l[R]=l[U]=1,h.fromBufferAttribute(n,N),d.fromBufferAttribute(n,R),u.fromBufferAttribute(n,U),f.fromBufferAttribute(r,N),p.fromBufferAttribute(r,R),y.fromBufferAttribute(r,U),d.sub(h),u.sub(h),p.sub(f),y.sub(f);let k=1/(p.x*y.y-y.x*p.y);isFinite(k)&&(g.copy(d).multiplyScalar(y.y).addScaledVector(u,-p.y).multiplyScalar(k),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-y.x).multiplyScalar(k),a[N].add(g),a[R].add(g),a[U].add(g),c[N].add(m),c[R].add(m),c[U].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let N=0,R=T.length;N<R;++N){let U=T[N],k=U.start,H=U.count;for(let P=k,z=k+H;P<z;P+=3)_(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let M=new I,w=new I,E=new I,x=new I;function b(N){E.fromBufferAttribute(s,N),x.copy(E);let R=a[N];M.copy(R),M.sub(E.multiplyScalar(E.dot(R))).normalize(),w.crossVectors(x,R);let k=w.dot(c[N])<0?-1:1;o.setXYZW(N,M.x,M.y,M.z,k)}for(let N=0,R=n.count;N<R;++N)l[N]&&b(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),y=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,p=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*h;for(let m=0;m<h;m++)u[p++]=l[f++]}return new Tt(u,h,d)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},jr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nh,this.updateRanges=[],this.version=0,this.uuid=gs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Td(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Td(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};dn=new I,er=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Hc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Wr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Wr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):If(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Lf(e,this.data.array)}},nh=new I,s0=new I,r0=new Je,kn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=nh.subVectors(n,t).cross(s0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(nh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||r0.getNormalMatrix(e),s=this.coplanarPoint(nh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},o0=0,zn=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=lr,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sh,this.blendDst=Mh,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ea,this.stencilZFail=Ea,this.stencilZPass=Ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},yn=class extends zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Nr=new I,Hs=new I,Gs=new I,Vs=new Oe,Ur=new Oe,Nf=new xt,na=new I,Or=new I,ia=new I,wd=new Oe,ih=new Oe,Cd=new Oe,Tn=class extends It{constructor(e=new yn){if(super(),this.isSprite=!0,this.type="Sprite",zs===void 0){zs=new _t;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jr(t,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new er(n,3,0,!1)),zs.setAttribute("uv",new er(n,2,3,!1))}this.geometry=zs,this.material=e,this.center=new Oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),Nf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Gs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;sa(na.set(-.5,-.5,0),Gs,o,Hs,s,r),sa(Or.set(.5,-.5,0),Gs,o,Hs,s,r),sa(ia.set(.5,.5,0),Gs,o,Hs,s,r),wd.set(0,0),ih.set(1,0),Cd.set(1,1);let a=e.ray.intersectTriangle(na,Or,ia,!1,Nr);if(a===null&&(sa(Or.set(-.5,.5,0),Gs,o,Hs,s,r),ih.set(0,1),a=e.ray.intersectTriangle(na,ia,Or,!1,Nr),a===null))return;let c=e.ray.origin.distanceTo(Nr);c<e.near||c>e.far||t.push({distance:c,point:Nr.clone(),uv:yi.getInterpolation(Nr,na,Or,ia,wd,ih,Cd,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};xi=new I,sh=new I,ra=new I,oa=new I,tr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){sh.copy(e).add(t).multiplyScalar(.5),ra.copy(t).sub(e).normalize(),oa.copy(this.origin).sub(sh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ra),a=oa.dot(this.direction),c=-oa.dot(ra),l=oa.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*c-a,u=o*a-c,p=r*h,d>=0)if(u>=-p)if(u<=p){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=p?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(sh).addScaledVector(ra,u),f}intersectSphere(e,t){if(e.radius<0)return null;xi.subVectors(e.center,this.origin);let n=xi.dot(this.direction),s=xi.dot(xi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,p=t.x-o.x,y=t.y-o.y,g=t.z-o.z,m=n.x-o.x,_=n.y-o.y,T=n.z-o.z,M=Math.abs(c),w=Math.abs(l),E=Math.abs(h),x,b,N,R,U,k,H,P,z,X,q,ae;if(M>=w&&M>=E?(N=c,k=d,z=p,ae=m,c>=0?(x=l,b=h,R=u,U=f,H=y,P=g,X=_,q=T):(x=h,b=l,R=f,U=u,H=g,P=y,X=T,q=_)):w>=E?(N=l,k=u,z=y,ae=_,l>=0?(x=h,b=c,R=f,U=d,H=g,P=p,X=T,q=m):(x=c,b=h,R=d,U=f,H=p,P=g,X=m,q=T)):(N=h,k=f,z=g,ae=T,h>=0?(x=c,b=l,R=d,U=u,H=p,P=y,X=m,q=_):(x=l,b=c,R=u,U=d,H=y,P=p,X=_,q=m)),N===0)return null;let J=x/N,ie=b/N,oe=1/N,we=R-J*k,Ie=U-ie*k,K=H-J*z,ue=P-ie*z,be=X-J*ae,Re=q-ie*ae,pe=be*ue-Re*K,Fe=we*Re-Ie*be,ct=K*Ie-ue*we;if(s){if(pe<0||Fe<0||ct<0)return null}else if((pe<0||Fe<0||ct<0)&&(pe>0||Fe>0||ct>0))return null;let De=pe+Fe+ct;if(De===0)return null;let Ke=oe*(pe*k+Fe*z+ct*ae);return(De>0?Ke<0:Ke>0)?null:this.at(Ke/De,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ad=new xt,ss=new tr,aa=new ti,Rd=new I,ca=new I,la=new I,ha=new I,rh=new I,ua=new I,Pd=new I,da=new I,re=class extends It{constructor(e=new _t,t=new et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ua.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(rh.fromBufferAttribute(d,e),o?ua.addScaledVector(rh,h):ua.addScaledVector(rh.sub(t),h))}t.add(ua)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),ss.copy(e.ray).recast(e.near),!(aa.containsPoint(ss.origin)===!1&&(ss.intersectSphere(aa,Rd)===null||ss.origin.distanceToSquared(Rd)>(e.far-e.near)**2))&&(Ad.copy(r).invert(),ss.copy(e.ray).applyMatrix4(Ad),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=u.length;p<y;p++){let g=u[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),T=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=_,w=T;M<w;M+=3){let E=a.getX(M),x=a.getX(M+1),b=a.getX(M+2);s=fa(this,m,e,n,l,h,d,E,x,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){let _=a.getX(g),T=a.getX(g+1),M=a.getX(g+2);s=fa(this,o,e,n,l,h,d,_,T,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,y=u.length;p<y;p++){let g=u[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),T=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let M=_,w=T;M<w;M+=3){let E=M,x=M+1,b=M+2;s=fa(this,m,e,n,l,h,d,E,x,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){let _=g,T=g+1,M=g+2;s=fa(this,o,e,n,l,h,d,_,T,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};Qr=class extends pn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Zt,h=Zt,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},nr=class extends Tt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ws=new xt,Id=new xt,pa=[],Ld=new ei,c0=new xt,Br=new re,Fr=new ti,_n=class extends re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,c0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),Ld.copy(e.boundingBox).applyMatrix4(Ws),this.boundingBox.union(Ld)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),Fr.copy(e.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),e.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ws),Id.multiplyMatrices(n,Ws),Br.matrixWorld=Id,Br.raycast(e,pa);for(let o=0,a=pa.length;o<a;o++){let c=pa[o];c.instanceId=r,c.object=this,t.push(c)}pa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new nr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qr(new Float32Array(s*this.count),s,this.count,oc,Ln));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},rs=new ti,l0=new Oe(.5,.5),ma=new I,Fi=class{constructor(e=new kn,t=new kn,n=new kn,s=new kn,r=new kn,o=new kn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],y=r[9],g=r[10],m=r[11],_=r[12],T=r[13],M=r[14],w=r[15];if(s[0].setComponents(l-o,f-h,m-p,w-_).normalize(),s[1].setComponents(l+o,f+h,m+p,w+_).normalize(),s[2].setComponents(l+a,f+d,m+y,w+T).normalize(),s[3].setComponents(l-a,f-d,m-y,w-T).normalize(),n)s[4].setComponents(c,u,g,M).normalize(),s[5].setComponents(l-c,f-u,m-g,w-M).normalize();else if(s[4].setComponents(l-c,f-u,m-g,w-M).normalize(),t===Pn)s[5].setComponents(l+c,f+u,m+g,w+M).normalize();else if(t===Js)s[5].setComponents(c,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);let t=l0.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ma.x=s.normal.x>0?e.max.x:e.min.x,ma.y=s.normal.y>0?e.max.y:e.min.y,ma.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Dd=new xt,Ba=class i{constructor(){this.coordinateSystem=Pn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Dd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Fi),n[s].setFromProjectionMatrix(Dd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Fi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}},ir=class extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fa=new I,ka=new I,Nd=new xt,kr=new tr,ga=new ti,oh=new I,Ud=new I,za=class extends It{constructor(e=new _t,t=new ir){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Fa.fromBufferAttribute(t,s-1),ka.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Fa.distanceTo(ka);e.setAttribute("lineDistance",new rt(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;Nd.copy(s).invert(),kr.copy(e.ray).applyMatrix4(Nd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let y=f,g=p-1;y<g;y+=l){let m=h.getX(y),_=h.getX(y+1),T=xa(this,e,kr,c,m,_,y);T&&t.push(T)}if(this.isLineLoop){let y=h.getX(p-1),g=h.getX(f),m=xa(this,e,kr,c,y,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let y=f,g=p-1;y<g;y+=l){let m=xa(this,e,kr,c,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){let y=xa(this,e,kr,c,p-1,f,p-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Od=new I,Bd=new I,as=class extends za{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Od.fromBufferAttribute(t,s),Bd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Od.distanceTo(Bd);e.setAttribute("lineDistance",new rt(n,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ki=class extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fd=new xt,dh=new tr,ya=new ti,_a=new I,Mi=class extends It{constructor(e=new _t,t=new ki){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,e.ray.intersectsSphere(ya)===!1)return;Fd.copy(s).invert(),dh.copy(e.ray).applyMatrix4(Fd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=u,y=f;p<y;p++){let g=l.getX(p);_a.fromBufferAttribute(d,g),kd(_a,g,c,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,y=f;p<y;p++)_a.fromBufferAttribute(d,p),kd(_a,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};eo=class extends pn{constructor(e=[],t=ps,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zi=class extends pn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},bi=class extends pn{constructor(e,t,n=Gn,s,r,o,a=Zt,c=Zt,l,h=vi,d=1){if(h!==vi&&h!==wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new js(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},to=class extends bi{constructor(e,t=Gn,n=ps,s,r,o=Zt,a=Zt,c,l=vi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},no=class extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Le=class i extends _t{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(d,2));function p(y,g,m,_,T,M,w,E,x,b,N){let R=M/x,U=w/b,k=M/2,H=w/2,P=E/2,z=x+1,X=b+1,q=0,ae=0,J=new I;for(let ie=0;ie<X;ie++){let oe=ie*U-H;for(let we=0;we<z;we++){let Ie=we*R-k;J[y]=Ie*_,J[g]=oe*T,J[m]=P,l.push(J.x,J.y,J.z),J[y]=0,J[g]=0,J[m]=E>0?1:-1,h.push(J.x,J.y,J.z),d.push(we/x),d.push(1-ie/b),q+=1}}for(let ie=0;ie<b;ie++)for(let oe=0;oe<x;oe++){let we=u+oe+z*ie,Ie=u+oe+z*(ie+1),K=u+(oe+1)+z*(ie+1),ue=u+(oe+1)+z*ie;c.push(we,Ie,ue),c.push(Ie,K,ue),ae+=6}a.addGroup(f,ae,N),f+=ae,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},cs=class i extends _t{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new I,h=new Oe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(a,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ut=class i extends _t{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,y=[],g=n/2,m=0;_(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(f,2));function _(){let M=new I,w=new I,E=0,x=(t-e)/n;for(let b=0;b<=r;b++){let N=[],R=b/r,U=R*(t-e)+e;for(let k=0;k<=s;k++){let H=k/s,P=H*c+a,z=Math.sin(P),X=Math.cos(P);w.x=U*z,w.y=-R*n+g,w.z=U*X,d.push(w.x,w.y,w.z),M.set(z,x,X).normalize(),u.push(M.x,M.y,M.z),f.push(H,1-R),N.push(p++)}y.push(N)}for(let b=0;b<s;b++)for(let N=0;N<r;N++){let R=y[N][b],U=y[N+1][b],k=y[N+1][b+1],H=y[N][b+1];(e>0||N!==0)&&(h.push(R,U,H),E+=3),(t>0||N!==r-1)&&(h.push(U,k,H),E+=3)}l.addGroup(m,E,0),m+=E}function T(M){let w=p,E=new Oe,x=new I,b=0,N=M===!0?e:t,R=M===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,g*R,0),u.push(0,R,0),f.push(.5,.5),p++;let U=p;for(let k=0;k<=s;k++){let P=k/s*c+a,z=Math.cos(P),X=Math.sin(P);x.x=N*X,x.y=g*R,x.z=N*z,d.push(x.x,x.y,x.z),u.push(0,R,0),E.x=z*.5+.5,E.y=X*.5*R+.5,f.push(E.x,E.y),p++}for(let k=0;k<s;k++){let H=w+k,P=U+k;M===!0?h.push(P,P+1,H):h.push(P+1,P,H),b+=3}l.addGroup(m,b,M===!0?1:2),m+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ls=class i extends Ut{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},io=class i extends _t{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let T=new I,M=new I,w=new I;for(let E=0;E<t.length;E+=3)f(t[E+0],T),f(t[E+1],M),f(t[E+2],w),c(T,M,w,_)}function c(_,T,M,w){let E=w+1,x=[];for(let b=0;b<=E;b++){x[b]=[];let N=_.clone().lerp(M,b/E),R=T.clone().lerp(M,b/E),U=E-b;for(let k=0;k<=U;k++)k===0&&b===E?x[b][k]=N:x[b][k]=N.clone().lerp(R,k/U)}for(let b=0;b<E;b++)for(let N=0;N<2*(E-b)-1;N++){let R=Math.floor(N/2);N%2===0?(u(x[b][R+1]),u(x[b+1][R]),u(x[b][R])):(u(x[b][R+1]),u(x[b+1][R+1]),u(x[b+1][R]))}}function l(_){let T=new I;for(let M=0;M<r.length;M+=3)T.x=r[M+0],T.y=r[M+1],T.z=r[M+2],T.normalize().multiplyScalar(_),r[M+0]=T.x,r[M+1]=T.y,r[M+2]=T.z}function h(){let _=new I;for(let T=0;T<r.length;T+=3){_.x=r[T+0],_.y=r[T+1],_.z=r[T+2];let M=g(_)/2/Math.PI+.5,w=m(_)/Math.PI+.5;o.push(M,1-w)}p(),d()}function d(){for(let _=0;_<o.length;_+=6){let T=o[_+0],M=o[_+2],w=o[_+4],E=Math.max(T,M,w),x=Math.min(T,M,w);E>.9&&x<.1&&(T<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),w<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,T){let M=_*3;T.x=e[M+0],T.y=e[M+1],T.z=e[M+2]}function p(){let _=new I,T=new I,M=new I,w=new I,E=new Oe,x=new Oe,b=new Oe;for(let N=0,R=0;N<r.length;N+=9,R+=6){_.set(r[N+0],r[N+1],r[N+2]),T.set(r[N+3],r[N+4],r[N+5]),M.set(r[N+6],r[N+7],r[N+8]),E.set(o[R+0],o[R+1]),x.set(o[R+2],o[R+3]),b.set(o[R+4],o[R+5]),w.copy(_).add(T).add(M).divideScalar(3);let U=g(w);y(E,R+0,_,U),y(x,R+2,T,U),y(b,R+4,M,U)}}function y(_,T,M,w){w<0&&_.x===1&&(o[T]=_.x-1),M.x===0&&M.z===0&&(o[T]=w/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Hi=class i extends io{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},hs=class i extends io{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Gt=class i extends _t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=e/a,u=t/c,f=[],p=[],y=[],g=[];for(let m=0;m<h;m++){let _=m*u-o;for(let T=0;T<l;T++){let M=T*d-r;p.push(M,-_,0),y.push(0,0,1),g.push(T/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<a;_++){let T=_+l*m,M=_+l*(m+1),w=_+1+l*(m+1),E=_+1+l*m;f.push(T,M,E),f.push(M,w,E)}this.setIndex(f),this.setAttribute("position",new rt(p,3)),this.setAttribute("normal",new rt(y,3)),this.setAttribute("uv",new rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Gi=class i extends _t{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],d=e,u=(t-e)/s,f=new I,p=new Oe;for(let y=0;y<=s;y++){for(let g=0;g<=n;g++){let m=r+g/n*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}d+=u}for(let y=0;y<s;y++){let g=y*(n+1);for(let m=0;m<n;m++){let _=m+g,T=_,M=_+n+1,w=_+n+2,E=_+1;a.push(T,M,E),a.push(M,w,E)}}this.setIndex(a),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},In=class i extends _t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new I,u=new I,f=[],p=[],y=[],g=[];for(let m=0;m<=n;m++){let _=[],T=m/n,M=o+T*a,w=e*Math.cos(M),E=Math.sqrt(e*e-w*w),x=0;m===0&&o===0?x=.5/t:m===n&&c===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){let N=b/t,R=s+N*r;d.x=-E*Math.cos(R),d.y=w,d.z=E*Math.sin(R),p.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),g.push(N+x,1-T),_.push(l++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let T=h[m][_+1],M=h[m][_],w=h[m+1][_],E=h[m+1][_+1];(m!==0||o>0)&&f.push(T,M,E),(m!==n-1||c<Math.PI)&&f.push(M,w,E)}this.setIndex(f),this.setAttribute("position",new rt(p,3)),this.setAttribute("normal",new rt(y,3)),this.setAttribute("uv",new rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Hn=class i extends _t{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new I,f=new I,p=new I;for(let y=0;y<=n;y++){let g=o+y/n*a;for(let m=0;m<=s;m++){let _=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(_),f.y=(e+t*Math.cos(g))*Math.sin(_),f.z=t*Math.sin(g),l.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=s;g++){let m=(s+1)*y+g-1,_=(s+1)*(y-1)+g-1,T=(s+1)*(y-1)+g,M=(s+1)*y+g;c.push(m,_,M),c.push(_,T,M)}this.setIndex(c),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};Ci={clone:xs,merge:on},u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=d0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=h0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new Oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[n].value=new xt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},sr=class extends Lt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ut=class extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},rr=class extends ut{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return os('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){os('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ha=class extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ga=class extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Vi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Va=class extends Vi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lh,endingEnd:lh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hh:r=e,a=2*t-n;break;case uh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hh:o=e,c=2*n-t;break;case uh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),y=p*p,g=y*p,m=-u*g+2*u*y-u*p,_=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*p+1,T=(-1-f)*g+(1.5+f)*y+.5*p,M=f*g-f*y;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+_*o[l+w]+T*o[c+w]+M*o[d+w];return r}},Wa=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},Xa=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qa=class extends Vi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(s-t),y=1-p;for(let g=0;g!==a;++g)r[g]=o[l+g]*y+o[c+g]*p;return r}let u=a*2,f=e-1;for(let p=0;p!==a;++p){let y=o[l+p],g=o[c+p],m=f*u+p*2,_=d[m],T=d[m+1],M=e*u+p*2,w=h[M],E=h[M+1],x=p0(n,t,_,w,s);r[p]=Uf(x,y,T,E,g)}return r}};wn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xs(t,this.TimeBufferType),this.values=Xs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xs(e.times,Array),values:Xs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),va(e.settings)&&(n.settings={inTangents:Xs(e.settings.inTangents,Array),outTangents:Xs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new qa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case zr:t=this.InterpolantFactoryMethodDiscrete;break;case Da:t=this.InterpolantFactoryMethodLinear;break;case ba:t=this.InterpolantFactoryMethodSmooth;break;case ch:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return Da;case this.InterpolantFactoryMethodSmooth:return ba;case this.InterpolantFactoryMethodBezier:return ch}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;va(this.settings)&&(Hd(this.settings.inTangents,e),Hd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;va(this.settings)&&(Gd(this.settings.inTangents,e),Gd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ye("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ye("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Vm(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Ye("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ba,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let y=t[d+p];if(y!==t[u+p]||y!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,va(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Da;Wi=class extends wn{constructor(e,t,n){super(e,t,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=zr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;Ya=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};Ya.prototype.ValueTypeName="color";$a=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};$a.prototype.ValueTypeName="number";Za=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Qn.slerpFlat(r,0,o,l-a,o,l,c);return r}},so=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Za(this.times,this.values,this.getValueSize(),e)}};so.prototype.ValueTypeName="quaternion";so.prototype.InterpolantFactoryMethodSmooth=void 0;Xi=class extends wn{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=zr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;Ja=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};Ja.prototype.ValueTypeName="vector";Ka=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],p=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Of=new Ka,ja=class{constructor(e){this.manager=e!==void 0?e:Of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ja.DEFAULT_MATERIAL_NAME="__DEFAULT";qi=class extends It{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ro=class extends qi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ah=new xt,Vd=new I,Wd=new I,or=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fi,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Vd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vd),Wd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){ah.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ah,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Js||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Sa=new I,Ma=new Qn,Zn=new I,oo=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sa,Ma,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,Ma,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Sa,Ma,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,Ma,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bi=new I,Xd=new Oe,qd=new Oe,Kt=class extends oo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,Xd,qd),t.subVectors(qd,Xd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fh=class extends or{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Xr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ao=class extends qi{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new fh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ph=class extends or{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0}},ni=class extends qi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ph}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},us=class extends oo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mh=class extends or{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},co=class extends qi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new mh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},lo=class extends qi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},qs=-90,Ys=1,ar=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(qs,Ys,e,t);s.layers=this.layers,this.add(s);let r=new Kt(qs,Ys,e,t);r.layers=this.layers,this.add(r);let o=new Kt(qs,Ys,e,t);o.layers=this.layers,this.add(o);let a=new Kt(qs,Ys,e,t);a.layers=this.layers,this.add(a);let c=new Kt(qs,Ys,e,t);c.layers=this.layers,this.add(c);let l=new Kt(qs,Ys,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Qa=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ho=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=m0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};Bh="\\[\\]\\.:\\/",g0=new RegExp("["+Bh+"]","g"),Fh="[^"+Bh+"]",x0="[^"+Bh.replace("\\.","")+"]",y0=/((?:WC+[\/:])*)/.source.replace("WC",Fh),_0=/(WCOD+)?/.source.replace("WCOD",x0),v0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fh),S0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fh),M0=new RegExp("^"+y0+_0+v0+S0+"$"),b0=["material","materials","bones","map"],gh=class{constructor(e,t,n){let s=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(g0,"")}static parseTrackName(e){let t=M0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);b0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=gh;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Hv=new Float32Array(1),Wh=class Wh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Wh.prototype.isMatrix2=!0;xh=Wh;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function sp(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function P0(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],y=d[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let y=d[f];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}function uy(i,e,t,n,s,r){let o=new Ne(0),a=s===!0?0:1,c,l,h=null,d=0,u=null;function f(_){let T=_.isScene===!0?_.background:null;if(T&&T.isTexture){let M=_.backgroundBlurriness>0;T=e.get(T,M)}return T}function p(_){let T=!1,M=f(_);M===null?g(o,a):M&&M.isColor&&(g(M,1),T=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(_,T){let M=f(T);M&&M.isCubeTexture?(l===void 0&&(l=new re(new Le(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:xs(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(hy.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(rp),l.material.toneMapped=ot.getTransfer(M.colorSpace)!==mt,(h!==M||d!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new re(new Gt(2,2),new Lt({name:"BackgroundMaterial",uniforms:xs(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ot.getTransfer(M.colorSpace)!==mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,T){_.getRGB(Gc,Oh(i)),t.buffers.color.setClear(Gc.r,Gc.g,Gc.b,T,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,T=1){o.set(_),a=T,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:p,addToRenderList:y,dispose:m}}function dy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(U,k,H,P,z){let X=!1,q=d(U,P,H,k);r!==q&&(r=q,l(r.object)),X=f(U,P,H,z),X&&p(U,P,H,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(U,k,H,P),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function l(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function d(U,k,H,P){let z=P.wireframe===!0,X=n[k.id];X===void 0&&(X={},n[k.id]=X);let q=U.isInstancedMesh===!0?U.id:0,ae=X[q];ae===void 0&&(ae={},X[q]=ae);let J=ae[H.id];J===void 0&&(J={},ae[H.id]=J);let ie=J[z];return ie===void 0&&(ie=u(c()),J[z]=ie),ie}function u(U){let k=[],H=[],P=[];for(let z=0;z<t;z++)k[z]=0,H[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:H,attributeDivisors:P,object:U,attributes:{},index:null}}function f(U,k,H,P){let z=r.attributes,X=k.attributes,q=0,ae=H.getAttributes();for(let J in ae)if(ae[J].location>=0){let oe=z[J],we=X[J];if(we===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(we=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(we=U.instanceColor)),oe===void 0||oe.attribute!==we||we&&oe.data!==we.data)return!0;q++}return r.attributesNum!==q||r.index!==P}function p(U,k,H,P){let z={},X=k.attributes,q=0,ae=H.getAttributes();for(let J in ae)if(ae[J].location>=0){let oe=X[J];oe===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(oe=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(oe=U.instanceColor));let we={};we.attribute=oe,oe&&oe.data&&(we.data=oe.data),z[J]=we,q++}r.attributes=z,r.attributesNum=q,r.index=P}function y(){let U=r.newAttributes;for(let k=0,H=U.length;k<H;k++)U[k]=0}function g(U){m(U,0)}function m(U,k){let H=r.newAttributes,P=r.enabledAttributes,z=r.attributeDivisors;H[U]=1,P[U]===0&&(i.enableVertexAttribArray(U),P[U]=1),z[U]!==k&&(i.vertexAttribDivisor(U,k),z[U]=k)}function _(){let U=r.newAttributes,k=r.enabledAttributes;for(let H=0,P=k.length;H<P;H++)k[H]!==U[H]&&(i.disableVertexAttribArray(H),k[H]=0)}function T(U,k,H,P,z,X,q){q===!0?i.vertexAttribIPointer(U,k,H,z,X):i.vertexAttribPointer(U,k,H,P,z,X)}function M(U,k,H,P){y();let z=P.attributes,X=H.getAttributes(),q=k.defaultAttributeValues;for(let ae in X){let J=X[ae];if(J.location>=0){let ie=z[ae];if(ie===void 0&&(ae==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),ae==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor)),ie!==void 0){let oe=ie.normalized,we=ie.itemSize,Ie=e.get(ie);if(Ie===void 0)continue;let K=Ie.buffer,ue=Ie.type,be=Ie.bytesPerElement,Re=ue===i.INT||ue===i.UNSIGNED_INT||ie.gpuType===ic;if(ie.isInterleavedBufferAttribute){let pe=ie.data,Fe=pe.isInterleavedBuffer===!0?pe.stride:pe.itemSize,ct=ie.offset;if(pe.isInstancedInterleavedBuffer||pe.isInstancedBufferAttribute){for(let De=0;De<J.locationSize;De++)m(J.location+De,pe.meshPerAttribute);U.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let De=0;De<J.locationSize;De++)g(J.location+De);i.bindBuffer(i.ARRAY_BUFFER,K);for(let De=0;De<J.locationSize;De++)T(J.location+De,we/J.locationSize,ue,oe,Fe*be,(ct+we/J.locationSize*De)*be,Re)}else{if(ie.isInstancedBufferAttribute){for(let pe=0;pe<J.locationSize;pe++)m(J.location+pe,ie.meshPerAttribute);U.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let pe=0;pe<J.locationSize;pe++)g(J.location+pe);i.bindBuffer(i.ARRAY_BUFFER,K);for(let pe=0;pe<J.locationSize;pe++)T(J.location+pe,we/J.locationSize,ue,oe,we*be,we/J.locationSize*pe*be,Re)}}else if(q!==void 0){let oe=q[ae];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(J.location,oe);break;case 3:i.vertexAttrib3fv(J.location,oe);break;case 4:i.vertexAttrib4fv(J.location,oe);break;default:i.vertexAttrib1fv(J.location,oe)}}}}_()}function w(){N();for(let U in n){let k=n[U];for(let H in k){let P=k[H];for(let z in P){let X=P[z];for(let q in X)h(X[q].object),delete X[q];delete P[z]}}delete n[U]}}function E(U){if(n[U.id]===void 0)return;let k=n[U.id];for(let H in k){let P=k[H];for(let z in P){let X=P[z];for(let q in X)h(X[q].object),delete X[q];delete P[z]}}delete n[U.id]}function x(U){for(let k in n){let H=n[k];for(let P in H){let z=H[P];if(z[U.id]===void 0)continue;let X=z[U.id];for(let q in X)h(X[q].object),delete X[q];delete z[U.id]}}}function b(U){for(let k in n){let H=n[k],P=U.isInstancedMesh===!0?U.id:0,z=H[P];if(z!==void 0){for(let X in z){let q=z[X];for(let ae in q)h(q[ae].object),delete q[ae];delete z[X]}delete H[P],Object.keys(H).length===0&&delete n[k]}}}function N(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:g,disableUnusedAttributes:_}}function fy(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function py(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Vn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===Vt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==vn&&x!==Ln&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(We("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&We("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:T,maxFragmentUniforms:M,maxSamples:w,samples:E}}function my(i){let e=this,t=null,n=0,s=!1,r=!1,o=new kn,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):l();else{let _=r?0:n,T=_*4,M=m.clippingState||null;c.value=M,M=h(p,u,T,f);for(let w=0;w!==T;++w)M[w]=t[w];m.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=c.value,p!==!0||g===null){let m=f+y*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,M=f;T!==y;++T,M+=4)o.copy(d[T]).applyMatrix4(_,a),o.normal.toArray(g,M),g[M+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function Ff(i,e,t){return new Ao(i,{minFilter:Ti,generateMipmaps:e,type:Vt,colorSpace:Hr,depthBuffer:t})}function Ro(i,e,t){return new Lt({name:i,uniforms:e,vertexShader:st.cube_vert,fragmentShader:t,side:jt,blending:Ei,depthTest:!1,depthWrite:!1})}function Sy(){return Ro("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${op}u

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
	`)}function My(){return Ro("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ap}},`

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
	`)}function by(){return Ro("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${xy}
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
	`)}function kf(){return Ro("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function zf(){return Ro("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ey(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===ur||f===tc)if(e.has(u)){let p=e.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let y=new Ao(p.height);return y.fromEquirectangularTexture(i,u),e.set(u,y),u.addEventListener("dispose",l),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===ur||f===tc,y=f===ps||f===hr;if(p||y){let g=t.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new pr(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let _=u.image;return p&&_&&_.height>0||y&&_&&c(_)?(n===null&&(n=new pr(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===ur?u.mapping=ps:f===tc&&(u.mapping=hr),u}function c(u){let f=0,p=6;for(let y=0;y<p;y++)u[y]!==void 0&&f++;return f===p}function l(u){let f=u.target;f.removeEventListener("dispose",l);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Ty(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&os("WebGLRenderer: "+n+" extension not supported."),s}}}function wy(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let y=r.get(p);y&&(e.remove(y),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function h(p){let y=p.attributes;for(let g in y)e.update(y[g],i.ARRAY_BUFFER)}function d(p){let y=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let _=y!==null?y.array.length:g.array.length/3-1,T=g.count>=65535?Kr:Jr,M=new T(Math.ceil(_/3)*6,1),w=M.array;if(y!==null){let x=y.array;m=y.version;for(let b=0,N=0;b<_;b+=3){let R=x[b+0],U=x[b+1],k=x[b+2];w[N++]=R,w[N++]=U,w[N++]=U,w[N++]=k,w[N++]=k,w[N++]=R}}else{m=g.version;for(let x=0,b=0;x<_;x+=3){let N=x+0,R=x+1,U=x+2;w[b++]=N,w[b++]=R,w[b++]=R,w[b++]=U,w[b++]=U,w[b++]=N}}M.version=m;let E=r.get(p);E&&e.remove(E),r.set(p,M)}function u(p){let y=r.get(p);if(y){let g=p.index;g!==null&&y.version<g.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let y=s[p].deref();y!==void 0&&c(y)}}return{get:l,update:h,getWireframeAttribute:u,dispose:f}}function Cy(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let g=0;g<f;g++)y+=u[g];t.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Ay(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ye("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ry(i,e,t){let n=new WeakMap,s=new Rt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let N=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",N)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],T=0;f===!0&&(T=1),p===!0&&(T=2),y===!0&&(T=3);let M=a.attributes.position.count*T,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let E=new Float32Array(M*w*4*d),x=new qr(E,M,w,d);x.type=Ln,x.needsUpdate=!0;let b=T*4;for(let R=0;R<d;R++){let U=g[R],k=m[R],H=_[R],P=M*w*4*R;for(let z=0;z<U.count;z++){let X=z*b;f===!0&&(s.fromBufferAttribute(U,z),E[P+X+0]=s.x,E[P+X+1]=s.y,E[P+X+2]=s.z,E[P+X+3]=0),p===!0&&(s.fromBufferAttribute(k,z),E[P+X+4]=s.x,E[P+X+5]=s.y,E[P+X+6]=s.z,E[P+X+7]=0),y===!0&&(s.fromBufferAttribute(H,z),E[P+X+8]=s.x,E[P+X+9]=s.y,E[P+X+10]=s.z,E[P+X+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new Oe(M,w)},n.set(a,u),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Py(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}function Ly(i,e,t,n,s,r){let o=new Nt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new _t;h.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new rt([0,2,0,0,2,0],2));let d=new sr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new re(h,d),f=new us(-1,1,1,-1,0,1),p=null,y=null,g=!1,m,_=null,T=[],M=!1;this.setSize=function(w,E){o.setSize(w,E),a!==null&&a.setSize(w,E),c!==null&&c.setSize(w,E);for(let x=0;x<T.length;x++){let b=T[x];b.setSize&&b.setSize(w,E)}},this.setEffects=function(w){T=w,M=T.length>0&&T[0].isRenderPass===!0;let E=o.width,x=o.height;T.length>0&&a===null&&(a=new Nt(E,x,{type:Vt,depthBuffer:!1,stencilBuffer:!1}),c=new Nt(E,x,{type:Vt,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&T.some(N=>N.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&l===null&&(l=new bi(E,x),r===!0&&(l.format=wi,l.type=ms)),o.dispose(),o.depthTexture=b?l:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let N=0;N<T.length;N++){let R=T[N];R.setSize&&R.setSize(E,x),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(w,E){if(g||w.toneMapping===ii&&T.length===0)return!1;if(_=E,E!==null){let x=E.width,b=E.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return M===!1&&w.setRenderTarget(o),m=w.toneMapping,w.toneMapping=ii,!0},this.hasRenderPass=function(){return M},this.end=function(w,E){w.toneMapping=m,g=!0;let x=o,b=a;for(let N=0;N<T.length;N++){let R=T[N];R.enabled!==!1&&(R.render(w,b,x,E),R.needsSwap!==!1&&(x=b,b=b===a?c:a))}if(p!==w.outputColorSpace||y!==w.toneMapping){p=w.outputColorSpace,y=w.toneMapping,d.defines={},ot.getTransfer(p)===mt&&(d.defines.SRGB_TRANSFER="");let N=Iy[y];N&&(d.defines[N]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(_),w.render(u,f),_=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}function mr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Hf[s];if(r===void 0&&(r=new Float32Array(s),Hf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xc(i,e){let t=Gf[e];t===void 0&&(t=new Int32Array(e),Gf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function Uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function Oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function By(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Xf.set(n),i.uniformMatrix2fv(this.addr,!1,Xf),Xt(t,n)}}function Fy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Wf.set(n),i.uniformMatrix3fv(this.addr,!1,Wf),Xt(t,n)}}function ky(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Vf.set(n),i.uniformMatrix4fv(this.addr,!1,Vf),Xt(t,n)}}function zy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function Gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function Wy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function Yy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function qc(i){return i.version===0&&(i.compareFunction=Dh,i.needsUpdate=!0),i}function $y(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=qc(lp):r=cp,t.setTexture2D(e||r,s)}function Zy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||dp,s)}function Jy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=qc(hp):r=fp,t.setTextureCube(e||r,s)}function Ky(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||up,s)}function jy(i){switch(i){case 5126:return Dy;case 35664:return Ny;case 35665:return Uy;case 35666:return Oy;case 35674:return By;case 35675:return Fy;case 35676:return ky;case 5124:case 35670:return zy;case 35667:case 35671:return Hy;case 35668:case 35672:return Gy;case 35669:case 35673:return Vy;case 5125:return Wy;case 36294:return Xy;case 36295:return qy;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return $y;case 35679:case 36299:case 36307:return Zy;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return Ky}}function Qy(i,e){i.uniform1fv(this.addr,e)}function e_(i,e){let t=mr(e,this.size,2);i.uniform2fv(this.addr,t)}function t_(i,e){let t=mr(e,this.size,3);i.uniform3fv(this.addr,t)}function n_(i,e){let t=mr(e,this.size,4);i.uniform4fv(this.addr,t)}function i_(i,e){let t=mr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function s_(i,e){let t=mr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function r_(i,e){let t=mr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function o_(i,e){i.uniform1iv(this.addr,e)}function a_(i,e){i.uniform2iv(this.addr,e)}function c_(i,e){i.uniform3iv(this.addr,e)}function l_(i,e){i.uniform4iv(this.addr,e)}function h_(i,e){i.uniform1uiv(this.addr,e)}function u_(i,e){i.uniform2uiv(this.addr,e)}function d_(i,e){i.uniform3uiv(this.addr,e)}function f_(i,e){i.uniform4uiv(this.addr,e)}function p_(i,e,t){let n=this.cache,s=e.length,r=Xc(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=qc(lp):o=cp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function m_(i,e,t){let n=this.cache,s=e.length,r=Xc(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||dp,r[o])}function g_(i,e,t){let n=this.cache,s=e.length,r=Xc(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=qc(hp):o=fp;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function x_(i,e,t){let n=this.cache,s=e.length,r=Xc(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||up,r[o])}function y_(i){switch(i){case 5126:return Qy;case 35664:return e_;case 35665:return t_;case 35666:return n_;case 35674:return i_;case 35675:return s_;case 35676:return r_;case 5124:case 35670:return o_;case 35667:case 35671:return a_;case 35668:case 35672:return c_;case 35669:case 35673:return l_;case 5125:return h_;case 36294:return u_;case 36295:return d_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return x_}}function qf(i,e){i.seq.push(e),i.map[e.id]=e}function __(i,e,t){let n=i.name,s=n.length;for(qh.lastIndex=0;;){let r=qh.exec(n),o=qh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){qf(t,l===void 0?new $h(a,i,e):new Zh(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Jh(a),qf(t,d)),t=d}}}function Yf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function M_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function b_(i){ot._getMatrix($f,ot.workingColorSpace,i);let e=`mat3( ${$f.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case Gr:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+M_(i.getShaderSource(e),a)}else return r}function E_(i,e){let t=b_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function w_(i,e){let t=T_[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function C_(){ot.getLuminanceCoefficients(Vc);let i=Vc.x.toFixed(4),e=Vc.y.toFixed(4),t=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function R_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function P_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Co(i){return i!==""}function Jf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Kf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Kh(i){return i.replace(I_,L_)}function L_(i,e){let t=st[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Kh(t)}function jf(i){return i.replace(D_,N_)}function N_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function O_(i){return U_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function F_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":B_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function z_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":k_[i.combine]||"ENVMAP_BLENDING_NONE"}function H_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=O_(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=F_(t),d=z_(t),u=A_(t),f=R_(r),p=s.createProgram(),y,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Co).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Co).join(`
`),g.length>0&&(g+=`
`)):(y=[Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),g=[Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?st.tonemapping_pars_fragment:"",t.toneMapping!==ii?w_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,E_("linearToOutputTexel",t.outputColorSpace),C_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Co).join(`
`)),o=Kh(o),o=Jf(o,t),o=Kf(o,t),a=Kh(a),a=Jf(a,t),a=Kf(a,t),o=jf(o),a=jf(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===Uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=m+y+o,T=m+g+a,M=Yf(s,s.VERTEX_SHADER,_),w=Yf(s,s.FRAGMENT_SHADER,T);s.attachShader(p,M),s.attachShader(p,w),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(R){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(p)||"",k=s.getShaderInfoLog(M)||"",H=s.getShaderInfoLog(w)||"",P=U.trim(),z=k.trim(),X=H.trim(),q=!0,ae=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,M,w);else{let J=Zf(s,M,"vertex"),ie=Zf(s,w,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+J+`
`+ie)}else P!==""?We("WebGLProgram: Program Info Log:",P):(z===""||X==="")&&(ae=!1);ae&&(R.diagnostics={runnable:q,programLog:P,vertexShader:{log:z,prefix:y},fragmentShader:{log:X,prefix:g}})}s.deleteShader(M),s.deleteShader(w),x=new fr(s,p),b=P_(s,p)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(p,v_)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=S_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=w,this}function V_(i){return i===$i||i===Eo||i===To}function W_(i,e,t,n,s,r){let o=new Yr,a=new jh,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,b,N,R,U,k){let H=R.fog,P=U.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,q=e.get(x.envMap||z,X),ae=u[x.type],J=n.precision;x.precision!==null&&(J=n.getMaxPrecision(x.precision),J!==x.precision&&We("WebGLProgram.getParameters:",x.precision,"not supported, using",J,"instead."));let ie=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,oe=ie!==void 0?ie.length:0,we=0;P.morphAttributes.position!==void 0&&(we=1),P.morphAttributes.normal!==void 0&&(we=2),P.morphAttributes.color!==void 0&&(we=3);let Ie,K,ue,be;if(ae){let Me=ri[ae];Ie=Me.vertexShader,K=Me.fragmentShader}else{Ie=x.vertexShader,K=x.fragmentShader;let Me=a.getVertexShaderStage(x),gt=a.getFragmentShaderStage(x);a.update(x,Me,gt),ue=Me.id,be=gt.id}let Re=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Fe=U.isInstancedMesh===!0,ct=U.isBatchedMesh===!0,De=!!x.map,Ke=!!x.matcap,pt=!!q,nt=pt&&q.isPMREMTexture===!0,Ot=!!x.aoMap,bt=!!x.lightMap,tn=!!x.bumpMap&&x.wireframe===!1,Ct=!!x.normalMap,xn=!!x.displacementMap,Bt=!!x.emissiveMap,hn=!!x.metalnessMap,nn=!!x.roughnessMap,ze=x.anisotropy>0,B=x.clearcoat>0,un=x.diffuseRoughness>0,Et=x.dispersion>0,Mt=x.retroreflectivity>0,Se=x.iridescence>0,Dt=x.sheen>0,Ve=x.transmission>0,qe=ze&&!!x.anisotropyMap,C=B&&!!x.clearcoatMap,v=B&&!!x.clearcoatNormalMap,V=B&&!!x.clearcoatRoughnessMap,le=un&&!!x.diffuseRoughnessMap,se=Se&&!!x.iridescenceMap,ye=Se&&!!x.iridescenceThicknessMap,ve=Dt&&!!x.sheenColorMap,te=Dt&&!!x.sheenRoughnessMap,Q=!!x.specularMap,_e=!!x.specularColorMap,L=!!x.specularIntensityMap,ne=Ve&&!!x.transmissionMap,j=Ve&&!!x.thicknessMap,me=!!x.gradientMap,de=!!x.alphaMap,ge=x.alphaTest>0,ke=!!x.alphaHash,je=!!x.extensions,he=ii;x.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(he=i.toneMapping);let He=nt?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,Ze={shaderID:ae,shaderType:x.type,shaderName:x.name,vertexShader:Ie,fragmentShader:K,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:be,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:J,batching:ct,batchingColor:ct&&U._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&U.instanceColor!==null,instancingMorph:Fe&&U.morphTexture!==null,outputColorSpace:Re===null?i.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:De,matcap:Ke,envMap:pt,envMapMode:pt&&q.mapping,envMapPMREM:nt,envMapMaxLod:nt?He.length-1:null,envMapSize:nt?He[0].width:null,aoMap:Ot,lightMap:bt,bumpMap:tn,normalMap:Ct,displacementMap:xn,emissiveMap:Bt,normalMapObjectSpace:Ct&&x.normalMapType===_f,normalMapTangentSpace:Ct&&x.normalMapType===zc,packedNormalMap:Ct&&x.normalMapType===zc&&V_(x.normalMap.format),metalnessMap:hn,roughnessMap:nn,anisotropy:ze,anisotropyMap:qe,clearcoat:B,clearcoatMap:C,clearcoatNormalMap:v,clearcoatRoughnessMap:V,diffuseRoughness:un,diffuseRoughnessMap:le,dispersion:Et,retroreflection:Mt,iridescence:Se,iridescenceMap:se,iridescenceThicknessMap:ye,sheen:Dt,sheenColorMap:ve,sheenRoughnessMap:te,specularMap:Q,specularColorMap:_e,specularIntensityMap:L,transmission:Ve,transmissionMap:ne,thicknessMap:j,gradientMap:me,opaque:x.transparent===!1&&x.blending===lr&&x.alphaToCoverage===!1,alphaMap:de,alphaTest:ge,alphaHash:ke,combine:x.combine,mapUv:De&&f(x.map.channel),aoMapUv:Ot&&f(x.aoMap.channel),lightMapUv:bt&&f(x.lightMap.channel),bumpMapUv:tn&&f(x.bumpMap.channel),normalMapUv:Ct&&f(x.normalMap.channel),displacementMapUv:xn&&f(x.displacementMap.channel),emissiveMapUv:Bt&&f(x.emissiveMap.channel),metalnessMapUv:hn&&f(x.metalnessMap.channel),roughnessMapUv:nn&&f(x.roughnessMap.channel),anisotropyMapUv:qe&&f(x.anisotropyMap.channel),clearcoatMapUv:C&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:se&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:te&&f(x.sheenRoughnessMap.channel),specularMapUv:Q&&f(x.specularMap.channel),specularColorMapUv:_e&&f(x.specularColorMap.channel),specularIntensityMapUv:L&&f(x.specularIntensityMap.channel),transmissionMapUv:ne&&f(x.transmissionMap.channel),thicknessMapUv:j&&f(x.thicknessMap.channel),alphaMapUv:de&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Ct||ze),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!P.attributes.uv&&(De||de),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&Ct===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:we,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:k.filter(Me=>Me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:De&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===mt,decodeVideoTextureEmissive:Bt&&x.emissiveMap.isVideoTexture===!0&&ot.getTransfer(x.emissiveMap.colorSpace)===mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wt,flipSided:x.side===jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:je&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&x.extensions.multiDraw===!0||ct)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function y(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)b.push(N),b.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(g(b,x),m(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function g(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function m(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function _(x){let b=u[x.type],N;if(b){let R=ri[b];N=Ci.clone(R.uniforms)}else N=x.uniforms;return N}function T(x,b){let N=h.get(b);return N!==void 0?++N.usedTimes:(N=new H_(i,b,x,s),l.push(N),h.set(b,N)),N}function M(x){if(--x.usedTimes===0){let b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:_,acquireProgram:T,releaseProgram:M,releaseShaderCache:w,programs:l,dispose:E}}function X_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function q_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ep(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,y,g,m){let _=i[e];return _===void 0?(_={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:m},i[e]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=p,_.materialVariant=o(u),_.groupOrder=y,_.renderOrder=u.renderOrder,_.z=g,_.group=m),e++,_}function c(u,f,p,y,g,m,_){_.reversedDepth===!0&&(g=-g);let T=a(u,f,p,y,g,m);p.transmission>0?n.push(T):p.transparent===!0?s.push(T):t.push(T)}function l(u,f,p,y,g,m){let _=a(u,f,p,y,g,m);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function h(u,f){t.length>1&&t.sort(u||q_),n.length>1&&n.sort(f||ep),s.length>1&&s.sort(f||ep)}function d(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function Y_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new tp,i.set(n,[o])):s>=r.length?(o=new tp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function $_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Ne};break;case"SpotLight":t={position:new I,direction:new I,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Z_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function K_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function j_(i){let e=new $_,t=Z_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new xt,o=new xt;function a(l){let h=0,d=0,u=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,p=0,y=0,g=0,m=0,_=0,T=0,M=0,w=0,E=0,x=0,b=0,N=0,R=0;l.sort(K_);for(let k=0,H=l.length;k<H;k++){let P=l[k],z=P.color,X=P.intensity,q=P.distance,ae=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===$i?ae=P.shadow.map.texture:ae=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=z.r*X,d+=z.g*X,u+=z.b*X;else if(P.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(P.sh.coefficients[J],X);R++}else if(P.isSunLight){let J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ie=P.shadow,oe=t.get(P);oe.shadowIntensity=ie.intensity,oe.shadowBias=ie.bias,oe.shadowNormalBias=ie.normalBias,oe.shadowRadius=ie.radius,oe.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),n.sunShadow[p]=oe,n.sunShadowMap[p]=ae;let we=ie.getViewportCount();for(let Ie=0;Ie<we;Ie++)n.sunShadowMatrix[y+Ie]=ie.getMatrix(Ie),n.sunShadowCascade[y+Ie]=ie._cascadeData[Ie];y+=we,p++}n.sun[f]=J,f++}else if(P.isDirectionalLight){let J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ie=P.shadow,oe=t.get(P);oe.shadowIntensity=ie.intensity,oe.shadowBias=ie.bias,oe.shadowNormalBias=ie.normalBias,oe.shadowRadius=ie.radius,oe.shadowMapSize=ie.mapSize,n.directionalShadow[g]=oe,n.directionalShadowMap[g]=ae,n.directionalShadowMatrix[g]=P.shadow.matrix,w++}n.directional[g]=J,g++}else if(P.isSpotLight){let J=e.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(z).multiplyScalar(X),J.distance=q,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,n.spot[_]=J;let ie=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,ie.updateMatrices(P),P.castShadow&&N++),n.spotLightMatrix[_]=ie.matrix,P.castShadow){let oe=t.get(P);oe.shadowIntensity=ie.intensity,oe.shadowBias=ie.bias,oe.shadowNormalBias=ie.normalBias,oe.shadowRadius=ie.radius,oe.shadowMapSize=ie.mapSize,n.spotShadow[_]=oe,n.spotShadowMap[_]=ae,x++}_++}else if(P.isRectAreaLight){let J=e.get(P);J.color.copy(z).multiplyScalar(X),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=J,T++}else if(P.isPointLight){let J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),J.distance=P.distance,J.decay=P.decay,P.castShadow){let ie=P.shadow,oe=t.get(P);oe.shadowIntensity=ie.intensity,oe.shadowBias=ie.bias,oe.shadowNormalBias=ie.normalBias,oe.shadowRadius=ie.radius,oe.shadowMapSize=ie.mapSize,oe.shadowCameraNear=ie.camera.near,oe.shadowCameraFar=ie.camera.far,n.pointShadow[m]=oe,n.pointShadowMap[m]=ae,n.pointShadowMatrix[m]=P.shadow.matrix,E++}n.point[m]=J,m++}else if(P.isHemisphereLight){let J=e.get(P);J.skyColor.copy(P.color).multiplyScalar(X),J.groundColor.copy(P.groundColor).multiplyScalar(X),n.hemi[M]=J,M++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let U=n.hash;(U.sunLength!==f||U.directionalLength!==g||U.pointLength!==m||U.spotLength!==_||U.rectAreaLength!==T||U.hemiLength!==M||U.numSunShadows!==p||U.numDirectionalShadows!==w||U.numPointShadows!==E||U.numSpotShadows!==x||U.numSpotMaps!==b||U.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=_,n.rectArea.length=T,n.point.length=m,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-N,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=R,U.sunLength=f,U.directionalLength=g,U.pointLength=m,U.spotLength=_,U.rectAreaLength=T,U.hemiLength=M,U.numSunShadows=p,U.numDirectionalShadows=w,U.numPointShadows=E,U.numSpotShadows=x,U.numSpotMaps=b,U.numLightProbes=R,n.version=J_++)}function c(l,h){let d=0,u=0,f=0,p=0,y=0,g=0,m=h.matrixWorldInverse;for(let _=0,T=l.length;_<T;_++){let M=l[_];if(M.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),d++}else if(M.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(M.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let w=n.rectArea[y];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function np(i){let e=new j_(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){n.push(d)}function c(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function l(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Q_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new np(i),e.set(s,[a])):r>=o.length?(a=new np(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function sv(i,e,t){let n=new Fi,s=new Oe,r=new Oe,o=new Rt,a=new Ha,c=new Ga,l={},h=t.maxTextureSize,d={[Yi]:jt,[jt]:Yi,[wt]:wt},u=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:ev,fragmentShader:tv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new _t;p.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new re(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uo;let m=this.type;this.render=function(E,x,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Zd&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=uo);let N=i.getRenderTarget(),R=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Ei),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let H=m!==this.type;H&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(z=>z.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,z=E.length;P<z;P++){let X=E[P],q=X.shadow;if(q===void 0){We("WebGLShadowMap:",X,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ae=q.getFrameExtents();s.multiply(ae),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ae.x),s.x=r.x*ae.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ae.y),s.y=r.y*ae.y,q.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=J,q.map===null||H===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===cr){if(X.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Nt(s.x,s.y,{format:$i,type:Vt,minFilter:fn,magFilter:fn,generateMipmaps:!1}),q.map.texture.name=X.name+".shadowMap",q.map.depthTexture=new bi(s.x,s.y,Ln),q.map.depthTexture.name=X.name+".shadowMapDepth",q.map.depthTexture.format=vi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Zt,q.map.depthTexture.magFilter=Zt}else X.isPointLight?(q.map=new Ao(s.x),q.map.depthTexture=new to(s.x,Gn)):(q.map=new Nt(s.x,s.y),q.map.depthTexture=new bi(s.x,s.y,Gn)),q.map.depthTexture.name=X.name+".shadowMap",q.map.depthTexture.format=vi,this.type===uo?(q.map.depthTexture.compareFunction=J?Lh:Ih,q.map.depthTexture.minFilter=fn,q.map.depthTexture.magFilter=fn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Zt,q.map.depthTexture.magFilter=Zt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let ie=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();X.isPointLight!==!0&&q.updateMatrices(X,b);let oe=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:b.layers;for(let we=0;we<ie;we++){let Ie=q.getCamera(we);if(X.isPointLight){let K=q.camera,ue=q.matrix,be=X.distance||K.far;be!==K.far&&(K.far=be,K.updateProjectionMatrix()),wo.setFromMatrixPosition(X.matrixWorld),K.position.copy(wo),Yh.copy(K.position),Yh.add(nv[we]),K.up.copy(iv[we]),K.lookAt(Yh),K.updateMatrixWorld(),ue.makeTranslation(-wo.x,-wo.y,-wo.z),ip.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),q._frustum.setFromProjectionMatrix(ip,K.coordinateSystem,K.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,we),i.clear();else{we===0&&(i.setRenderTarget(q.map),i.clear());let K=q.getViewport(we);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),k.viewport(o)}n=q.getFrustum(we),M(x,b,Ie,X,oe,this.type)}q.isPointLightShadow!==!0&&this.type===cr&&_(q,b),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(N,R,U)};function _(E,x){let b=e.update(y);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Nt(s.x,s.y,{format:$i,type:Vt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(x,null,b,u,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(x,null,b,f,y,null)}function T(E,x,b,N){let R=null,U=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)R=U;else if(R=b.isPointLight===!0?c:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let k=R.uuid,H=x.uuid,P=l[k];P===void 0&&(P={},l[k]=P);let z=P[H];z===void 0&&(z=R.clone(),P[H]=z,x.addEventListener("dispose",w)),R=z}if(R.visible=x.visible,R.wireframe=x.wireframe,N===cr?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:d[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let k=i.properties.get(R);k.light=b}return R}function M(E,x,b,N,R,U){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&U===cr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let P=e.update(E),z=E.material;if(Array.isArray(z)){let X=P.groups;for(let q=0,ae=X.length;q<ae;q++){let J=X[q],ie=z[J.materialIndex];if(ie&&ie.visible){let oe=T(E,ie,N,U);E.onBeforeShadow(i,E,x,b,P,oe,J),i.renderBufferDirect(b,null,P,oe,E,J),E.onAfterShadow(i,E,x,b,P,oe,J)}}}else if(z.visible){let X=T(E,z,N,U);E.onBeforeShadow(i,E,x,b,P,X,null),i.renderBufferDirect(b,null,P,X,E,null),E.onAfterShadow(i,E,x,b,P,X,null)}}let H=E.children;for(let P=0,z=H.length;P<z;P++)M(H[P],x,b,N,R,U)}function w(E){E.target.removeEventListener("dispose",w);for(let b in l){let N=l[b],R=E.target.uuid;R in N&&(N[R].dispose(),delete N[R])}}}function rv(i,e){function t(){let L=!1,ne=new Rt,j=null,me=new Rt(0,0,0,0);return{setMask:function(de){j!==de&&!L&&(i.colorMask(de,de,de,de),j=de)},setLocked:function(de){L=de},setClear:function(de,ge,ke,je,he){he===!0&&(de*=je,ge*=je,ke*=je),ne.set(de,ge,ke,je),me.equals(ne)===!1&&(i.clearColor(de,ge,ke,je),me.copy(ne))},reset:function(){L=!1,j=null,me.set(-1,0,0,0)}}}function n(){let L=!1,ne=!1,j=null,me=null,de=null;return{setReversed:function(ge){if(ne!==ge){let ke=e.get("EXT_clip_control");ge?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),ne=ge;let je=de;de=null,this.setClear(je)}},getReversed:function(){return ne},setTest:function(ge){ge?pe(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(ge){j!==ge&&!L&&(i.depthMask(ge),j=ge)},setFunc:function(ge){if(ne&&(ge=Rf[ge]),me!==ge){switch(ge){case Ta:i.depthFunc(i.NEVER);break;case wa:i.depthFunc(i.ALWAYS);break;case Ca:i.depthFunc(i.LESS);break;case Zs:i.depthFunc(i.LEQUAL);break;case Aa:i.depthFunc(i.EQUAL);break;case Ra:i.depthFunc(i.GEQUAL);break;case Pa:i.depthFunc(i.GREATER);break;case Ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=ge}},setLocked:function(ge){L=ge},setClear:function(ge){de!==ge&&(de=ge,ne&&(ge=1-ge),i.clearDepth(ge))},reset:function(){L=!1,j=null,me=null,de=null,ne=!1}}}function s(){let L=!1,ne=null,j=null,me=null,de=null,ge=null,ke=null,je=null,he=null;return{setTest:function(He){L||(He?pe(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(He){ne!==He&&!L&&(i.stencilMask(He),ne=He)},setFunc:function(He,Ze,Me){(j!==He||me!==Ze||de!==Me)&&(i.stencilFunc(He,Ze,Me),j=He,me=Ze,de=Me)},setOp:function(He,Ze,Me){(ge!==He||ke!==Ze||je!==Me)&&(i.stencilOp(He,Ze,Me),ge=He,ke=Ze,je=Me)},setLocked:function(He){L=He},setClear:function(He){he!==He&&(i.clearStencil(He),he=He)},reset:function(){L=!1,ne=null,j=null,me=null,de=null,ge=null,ke=null,je=null,he=null}}}let r=new t,o=new n,a=new s,c={},l=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],y=null,g=!1,m=null,_=null,T=null,M=null,w=null,E=null,x=null,b=new Ne(0,0,0),N=0,R=!1,U=null,k=null,H=null,P=null,z=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ae=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=ae>=1):J.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=ae>=2);let ie=null,oe={},we=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),K=new Rt().fromArray(we),ue=new Rt().fromArray(Ie);function be(L,ne,j,me){let de=new Uint8Array(4),ge=i.createTexture();i.bindTexture(L,ge),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<j;ke++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(ne+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return ge}let Re={};Re[i.TEXTURE_2D]=be(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[i.TEXTURE_2D_ARRAY]=be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(i.DEPTH_TEST),o.setFunc(Zs),tn(!1),Ct(yh),pe(i.CULL_FACE),Ot(Ei);function pe(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Fe(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function ct(L,ne){return u[L]!==ne?(i.bindFramebuffer(L,ne),u[L]=ne,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ne),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function De(L,ne){let j=p,me=!1;if(L){j=f.get(ne),j===void 0&&(j=[],f.set(ne,j));let de=L.textures;if(j.length!==de.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,ke=de.length;ge<ke;ge++)j[ge]=i.COLOR_ATTACHMENT0+ge;j.length=de.length,me=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,me=!0);me&&i.drawBuffers(j)}function Ke(L){return y!==L?(i.useProgram(L),y=L,!0):!1}let pt={[ds]:i.FUNC_ADD,[Kd]:i.FUNC_SUBTRACT,[jd]:i.FUNC_REVERSE_SUBTRACT};pt[Qd]=i.MIN,pt[ef]=i.MAX;let nt={[tf]:i.ZERO,[nf]:i.ONE,[sf]:i.SRC_COLOR,[Sh]:i.SRC_ALPHA,[hf]:i.SRC_ALPHA_SATURATE,[cf]:i.DST_COLOR,[of]:i.DST_ALPHA,[rf]:i.ONE_MINUS_SRC_COLOR,[Mh]:i.ONE_MINUS_SRC_ALPHA,[lf]:i.ONE_MINUS_DST_COLOR,[af]:i.ONE_MINUS_DST_ALPHA,[uf]:i.CONSTANT_COLOR,[df]:i.ONE_MINUS_CONSTANT_COLOR,[ff]:i.CONSTANT_ALPHA,[pf]:i.ONE_MINUS_CONSTANT_ALPHA};function Ot(L,ne,j,me,de,ge,ke,je,he,He){if(L===Ei){g===!0&&(Fe(i.BLEND),g=!1);return}if(g===!1&&(pe(i.BLEND),g=!0),L!==Jd){if(L!==m||He!==R){if((_!==ds||w!==ds)&&(i.blendEquation(i.FUNC_ADD),_=ds,w=ds),He)switch(L){case lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tt:i.blendFunc(i.ONE,i.ONE);break;case _h:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",L);break}else switch(L){case lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _h:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vh:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",L);break}T=null,M=null,E=null,x=null,b.set(0,0,0),N=0,m=L,R=He}return}de=de||ne,ge=ge||j,ke=ke||me,(ne!==_||de!==w)&&(i.blendEquationSeparate(pt[ne],pt[de]),_=ne,w=de),(j!==T||me!==M||ge!==E||ke!==x)&&(i.blendFuncSeparate(nt[j],nt[me],nt[ge],nt[ke]),T=j,M=me,E=ge,x=ke),(je.equals(b)===!1||he!==N)&&(i.blendColor(je.r,je.g,je.b,he),b.copy(je),N=he),m=L,R=!1}function bt(L,ne){L.side===wt?Fe(i.CULL_FACE):pe(i.CULL_FACE);let j=L.side===jt;ne&&(j=!j),tn(j),L.blending===lr&&L.transparent===!1?Ot(Ei):Ot(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let me=L.stencilWrite;a.setTest(me),me&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Bt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function tn(L){U!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),U=L)}function Ct(L){L!==Yd?(pe(i.CULL_FACE),L!==k&&(L===yh?i.cullFace(i.BACK):L===$d?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),k=L}function xn(L){L!==H&&(q&&i.lineWidth(L),H=L)}function Bt(L,ne,j){L?(pe(i.POLYGON_OFFSET_FILL),(P!==ne||z!==j)&&(P=ne,z=j,o.getReversed()&&(ne=-ne,j=-j),i.polygonOffset(ne,j))):Fe(i.POLYGON_OFFSET_FILL)}function hn(L){L?pe(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function nn(L){L===void 0&&(L=i.TEXTURE0+X-1),ie!==L&&(i.activeTexture(L),ie=L)}function ze(L,ne,j){j===void 0&&(ie===null?j=i.TEXTURE0+X-1:j=ie);let me=oe[j];me===void 0&&(me={type:void 0,texture:void 0},oe[j]=me),(me.type!==L||me.texture!==ne)&&(ie!==j&&(i.activeTexture(j),ie=j),i.bindTexture(L,ne||Re[L]),me.type=L,me.texture=ne)}function B(){let L=oe[ie];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function un(){try{i.compressedTexImage2D(...arguments)}catch(L){Ye("WebGLState:",L)}}function Et(){try{i.compressedTexImage3D(...arguments)}catch(L){Ye("WebGLState:",L)}}function Mt(){try{i.texSubImage2D(...arguments)}catch(L){Ye("WebGLState:",L)}}function Se(){try{i.texSubImage3D(...arguments)}catch(L){Ye("WebGLState:",L)}}function Dt(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Ye("WebGLState:",L)}}function Ve(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Ye("WebGLState:",L)}}function qe(){try{i.texStorage2D(...arguments)}catch(L){Ye("WebGLState:",L)}}function C(){try{i.texStorage3D(...arguments)}catch(L){Ye("WebGLState:",L)}}function v(){try{i.texImage2D(...arguments)}catch(L){Ye("WebGLState:",L)}}function V(){try{i.texImage3D(...arguments)}catch(L){Ye("WebGLState:",L)}}function le(L){return d[L]!==void 0?d[L]:i.getParameter(L)}function se(L,ne){d[L]!==ne&&(i.pixelStorei(L,ne),d[L]=ne)}function ye(L){K.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),K.copy(L))}function ve(L){ue.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ue.copy(L))}function te(L,ne){let j=l.get(ne);j===void 0&&(j=new WeakMap,l.set(ne,j));let me=j.get(L);me===void 0&&(me=i.getUniformBlockIndex(ne,L.name),i.uniformBlockBinding(ne,me,me),j.set(L,me))}function Q(L,ne,j){let de=l.get(ne).get(L);c[de]!==j&&(i.bindBufferBase(i.UNIFORM_BUFFER,de,j),c[de]=j)}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},ie=null,oe={},u={},c={},f=new WeakMap,p=[],y=null,g=!1,m=null,_=null,T=null,M=null,w=null,E=null,x=null,b=new Ne(0,0,0),N=0,R=!1,U=null,k=null,H=null,P=null,z=null,K.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:Fe,bindFramebuffer:ct,drawBuffers:De,useProgram:Ke,setBlending:Ot,setMaterial:bt,setFlipSided:tn,setCullFace:Ct,setLineWidth:xn,setPolygonOffset:Bt,setScissorTest:hn,activeTexture:nn,bindTexture:ze,unbindTexture:B,compressedTexImage2D:un,compressedTexImage3D:Et,texImage2D:v,texImage3D:V,pixelStorei:se,getParameter:le,updateUBOMapping:te,uniformBlockBinding:Q,texStorage2D:qe,texStorage3D:C,texSubImage2D:Mt,texSubImage3D:Se,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Ve,scissor:ye,viewport:ve,reset:_e}}function ov(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,y=new FinalizationRegistry(C=>p.delete(C)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,v){return g?new OffscreenCanvas(C,v):Vr("canvas")}function _(C,v,V){let le=1,se=qe(C);if((se.width>V||se.height>V)&&(le=V/Math.max(se.width,se.height)),le<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ye=Math.floor(le*se.width),ve=Math.floor(le*se.height);u===void 0&&(u=m(ye,ve));let te=v?m(ye,ve):u;return te.width=ye,te.height=ve,te.getContext("2d").drawImage(C,0,0,ye,ve),We("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ye+"x"+ve+")."),te}else return"data"in C&&We("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),C;return C}function T(C){return C.generateMipmaps}function M(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(C,v,V,le,se,ye=!1){if(C!==null){if(i[C]!==void 0)return i[C];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ve;le&&(ve=e.get("EXT_texture_norm16"),ve||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=v;if(v===i.RED&&(V===i.FLOAT&&(te=i.R32F),V===i.HALF_FLOAT&&(te=i.R16F),V===i.UNSIGNED_BYTE&&(te=i.R8),V===i.UNSIGNED_SHORT&&ve&&(te=ve.R16_EXT),V===i.SHORT&&ve&&(te=ve.R16_SNORM_EXT)),v===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(te=i.R8UI),V===i.UNSIGNED_SHORT&&(te=i.R16UI),V===i.UNSIGNED_INT&&(te=i.R32UI),V===i.BYTE&&(te=i.R8I),V===i.SHORT&&(te=i.R16I),V===i.INT&&(te=i.R32I)),v===i.RG&&(V===i.FLOAT&&(te=i.RG32F),V===i.HALF_FLOAT&&(te=i.RG16F),V===i.UNSIGNED_BYTE&&(te=i.RG8),V===i.UNSIGNED_SHORT&&ve&&(te=ve.RG16_EXT),V===i.SHORT&&ve&&(te=ve.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(te=i.RG8UI),V===i.UNSIGNED_SHORT&&(te=i.RG16UI),V===i.UNSIGNED_INT&&(te=i.RG32UI),V===i.BYTE&&(te=i.RG8I),V===i.SHORT&&(te=i.RG16I),V===i.INT&&(te=i.RG32I)),v===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(te=i.RGB8UI),V===i.UNSIGNED_SHORT&&(te=i.RGB16UI),V===i.UNSIGNED_INT&&(te=i.RGB32UI),V===i.BYTE&&(te=i.RGB8I),V===i.SHORT&&(te=i.RGB16I),V===i.INT&&(te=i.RGB32I)),v===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),V===i.UNSIGNED_INT&&(te=i.RGBA32UI),V===i.BYTE&&(te=i.RGBA8I),V===i.SHORT&&(te=i.RGBA16I),V===i.INT&&(te=i.RGBA32I)),v===i.RGB&&(V===i.UNSIGNED_SHORT&&ve&&(te=ve.RGB16_EXT),V===i.SHORT&&ve&&(te=ve.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),v===i.RGBA){let Q=ye?Gr:ot.getTransfer(se);V===i.FLOAT&&(te=i.RGBA32F),V===i.HALF_FLOAT&&(te=i.RGBA16F),V===i.UNSIGNED_BYTE&&(te=Q===mt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&ve&&(te=ve.RGBA16_EXT),V===i.SHORT&&ve&&(te=ve.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(C,v){let V;return C?v===null||v===Gn||v===ms?V=i.DEPTH24_STENCIL8:v===Ln?V=i.DEPTH32F_STENCIL8:v===dr&&(V=i.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Gn||v===ms?V=i.DEPTH_COMPONENT24:v===Ln?V=i.DEPTH_COMPONENT32F:v===dr&&(V=i.DEPTH_COMPONENT16),V}function b(C,v){return T(C)===!0||C.isFramebufferTexture&&C.minFilter!==Zt&&C.minFilter!==fn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function N(C){let v=new WeakRef(C);n.get(C).__ref=v,p.add(v),y.register(C,v,v)}function R(C){let v=n.get(C).__ref;v!==void 0&&(p.delete(v),y.unregister(v))}function U(C){H(C.target)}function k(C){P(C.target)}function H(C){C.removeEventListener("dispose",U),R(C),X(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function P(C){C.removeEventListener("dispose",k),R(C),ae(C)}function z(){for(let C of p){let v=C.deref();v!==void 0&&(v.isRenderTarget===!0?P(v):H(v))}p.clear(),d.clear()}function X(C){let v=n.get(C);if(v.__webglInit===void 0)return;let V=C.source,le=f.get(V);if(le){let se=le[v.__cacheKey];se.usedTimes--,se.usedTimes===0&&q(C),Object.keys(le).length===0&&f.delete(V)}n.remove(C)}function q(C){let v=n.get(C);i.deleteTexture(v.__webglTexture);let V=C.source,le=f.get(V);delete le[v.__cacheKey],o.memory.textures--}function ae(C){let v=n.get(C);v.__depthDisposeCallback&&v.__depthDisposeCallback();let V=C.depthTexture;if(V&&V.renderTarget===C&&H(V),C.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(v.__webglFramebuffer[se]))for(let ye=0;ye<v.__webglFramebuffer[se].length;ye++)i.deleteFramebuffer(v.__webglFramebuffer[se][ye]);else i.deleteFramebuffer(v.__webglFramebuffer[se]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[se])}else{if(Array.isArray(v.__webglFramebuffer))for(let se=0;se<v.__webglFramebuffer.length;se++)i.deleteFramebuffer(v.__webglFramebuffer[se]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let se=0;se<v.__webglColorRenderbuffer.length;se++)v.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[se]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let le=C.textures;for(let se=0,ye=le.length;se<ye;se++){let ve=n.get(le[se]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(le[se])}n.remove(C)}let J=0;function ie(){J=0}function oe(){return J}function we(C){J=C}function Ie(){let C=J;return C>=s.maxTextures&&We("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,C}function K(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.mipmapsAutoUpdate),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function ue(C,v){let V=n.get(C);if(C.isVideoTexture&&Dt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let le=C.image;if(le===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(V,C,v);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+v)}function be(C,v){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){bt(V,C,v);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+v)}function Re(C,v){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){bt(V,C,v);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+v)}function pe(C,v){let V=n.get(C);if(C.version>0&&V.__version!==C.version){tn(V,C,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+v)}let Fe={[Kn]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[La]:i.MIRRORED_REPEAT},ct={[Zt]:i.NEAREST,[xf]:i.NEAREST_MIPMAP_NEAREST,[_o]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[nc]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},De={[Sf]:i.NEVER,[Dh]:i.ALWAYS,[Mf]:i.LESS,[Ih]:i.LEQUAL,[bf]:i.EQUAL,[Lh]:i.GEQUAL,[Ef]:i.GREATER,[Tf]:i.NOTEQUAL};function Ke(C,v){if(v.type===Ln&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===fn||v.magFilter===nc||v.magFilter===_o||v.magFilter===Ti||v.minFilter===fn||v.minFilter===nc||v.minFilter===_o||v.minFilter===Ti)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Fe[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Fe[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Fe[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ct[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ct[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,De[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Zt||v.minFilter!==_o&&v.minFilter!==Ti||v.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function pt(C,v){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",U),N(v));let le=v.source,se=f.get(le);se===void 0&&(se={},f.set(le,se));let ye=K(v);if(ye!==C.__cacheKey){se[ye]===void 0&&(se[ye]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),se[ye].usedTimes++;let ve=se[C.__cacheKey];ve!==void 0&&(se[C.__cacheKey].usedTimes--,ve.usedTimes===0&&q(v)),C.__cacheKey=ye,C.__webglTexture=se[ye].texture}return V}function nt(C,v,V){return Math.floor(Math.floor(C/V)/v)}function Ot(C,v,V,le){let ye=C.updateRanges;if(ye.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,V,le,v.data);else{ye.sort((L,ne)=>L.start-ne.start);let ve=0;for(let L=1;L<ye.length;L++){let ne=ye[ve],j=ye[L],me=ne.start+ne.count,de=nt(j.start,v.width,4),ge=nt(ne.start,v.width,4);j.start<=me+1&&de===ge&&nt(j.start+j.count-1,v.width,4)===de?ne.count=Math.max(ne.count,j.start+j.count-ne.start):(++ve,ye[ve]=j)}ye.length=ve+1;let te=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),_e=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let L=0,ne=ye.length;L<ne;L++){let j=ye[L],me=Math.floor(j.start/4),de=Math.ceil(j.count/4),ge=me%v.width,ke=Math.floor(me/v.width),je=de,he=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(i.UNPACK_SKIP_ROWS,ke),t.texSubImage2D(i.TEXTURE_2D,0,ge,ke,je,he,V,le,v.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,te),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function bt(C,v,V){let le=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(le=i.TEXTURE_3D);let se=pt(C,v),ye=v.source;t.bindTexture(le,C.__webglTexture,i.TEXTURE0+V);let ve=n.get(ye);if(ye.version!==ve.__version||se===!0){if(t.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let he=ot.getPrimaries(ot.workingColorSpace),He=v.colorSpace===Wn?null:ot.getPrimaries(v.colorSpace),Ze=v.colorSpace===Wn||he===He?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let Q=_(v.image,!1,s.maxTextureSize);Q=Ve(v,Q);let _e=r.convert(v.format,v.colorSpace),L=r.convert(v.type),ne=E(v.internalFormat,_e,L,v.normalized,v.colorSpace,v.isVideoTexture);Ke(le,v);let j,me=v.mipmaps,de=v.isVideoTexture!==!0,ge=ve.__version===void 0||se===!0,ke=ye.dataReady,je=b(v,Q);if(v.isDepthTexture)ne=x(v.format===wi,v.type),ge&&(de?t.texStorage2D(i.TEXTURE_2D,1,ne,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,ne,Q.width,Q.height,0,_e,L,null));else if(v.isDataTexture)if(me.length>0){de&&ge&&t.texStorage2D(i.TEXTURE_2D,je,ne,me[0].width,me[0].height);for(let he=0,He=me.length;he<He;he++)j=me[he],de?ke&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,j.width,j.height,_e,L,j.data):t.texImage2D(i.TEXTURE_2D,he,ne,j.width,j.height,0,_e,L,j.data);v.generateMipmaps=!1}else de?(ge&&t.texStorage2D(i.TEXTURE_2D,je,ne,Q.width,Q.height),ke&&Ot(v,Q,_e,L)):t.texImage2D(i.TEXTURE_2D,0,ne,Q.width,Q.height,0,_e,L,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){de&&ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,ne,me[0].width,me[0].height,Q.depth);for(let he=0,He=me.length;he<He;he++)if(j=me[he],v.format!==Vn)if(_e!==null)if(de){if(ke)if(v.layerUpdates.size>0){let Ze=kh(j.width,j.height,v.format,v.type);for(let Me of v.layerUpdates){let gt=j.data.subarray(Me*Ze/j.data.BYTES_PER_ELEMENT,(Me+1)*Ze/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,Me,j.width,j.height,1,_e,gt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,j.width,j.height,Q.depth,_e,j.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,ne,j.width,j.height,Q.depth,0,j.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?ke&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,j.width,j.height,Q.depth,_e,L,j.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,ne,j.width,j.height,Q.depth,0,_e,L,j.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{de&&ge&&t.texStorage2D(i.TEXTURE_2D,je,ne,me[0].width,me[0].height);for(let he=0,He=me.length;he<He;he++)j=me[he],v.format!==Vn?_e!==null?de?ke&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,j.width,j.height,_e,j.data):t.compressedTexImage2D(i.TEXTURE_2D,he,ne,j.width,j.height,0,j.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?ke&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,j.width,j.height,_e,L,j.data):t.texImage2D(i.TEXTURE_2D,he,ne,j.width,j.height,0,_e,L,j.data)}else if(v.isDataArrayTexture)if(de){if(ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,ne,Q.width,Q.height,Q.depth),ke)if(v.layerUpdates.size>0){let he=kh(Q.width,Q.height,v.format,v.type);for(let He of v.layerUpdates){let Ze=Q.data.subarray(He*he/Q.data.BYTES_PER_ELEMENT,(He+1)*he/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,He,Q.width,Q.height,1,_e,L,Ze)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,_e,L,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,Q.width,Q.height,Q.depth,0,_e,L,Q.data);else if(v.isData3DTexture)de?(ge&&t.texStorage3D(i.TEXTURE_3D,je,ne,Q.width,Q.height,Q.depth),ke&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,_e,L,Q.data)):t.texImage3D(i.TEXTURE_3D,0,ne,Q.width,Q.height,Q.depth,0,_e,L,Q.data);else if(v.isFramebufferTexture){if(ge)if(de)t.texStorage2D(i.TEXTURE_2D,je,ne,Q.width,Q.height);else{let he=Q.width,He=Q.height;for(let Ze=0;Ze<je;Ze++)t.texImage2D(i.TEXTURE_2D,Ze,ne,he,He,0,_e,L,null),he>>=1,He>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let he=i.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),Q.parentNode!==he){he.appendChild(Q),d.add(v),he.onpaint=He=>{let Ze=He.changedElements;for(let Me of d)Ze.includes(Me.image)&&(Me.needsUpdate=!0)},he.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let Ze=i.RGBA,Me=i.RGBA,gt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ze,Me,gt,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(me.length>0){if(de&&ge){let he=qe(me[0]);t.texStorage2D(i.TEXTURE_2D,je,ne,he.width,he.height)}for(let he=0,He=me.length;he<He;he++)j=me[he],de?ke&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,_e,L,j):t.texImage2D(i.TEXTURE_2D,he,ne,_e,L,j);v.generateMipmaps=!1}else if(de){if(ge){let he=qe(Q);t.texStorage2D(i.TEXTURE_2D,je,ne,he.width,he.height)}ke&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,L,Q)}else t.texImage2D(i.TEXTURE_2D,0,ne,_e,L,Q);T(v)&&v.mipmapsAutoUpdate===!0&&M(le),ve.__version=ye.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function tn(C,v,V){if(v.image.length!==6)return;let le=pt(C,v),se=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+V);let ye=n.get(se);if(se.version!==ye.__version||le===!0){t.activeTexture(i.TEXTURE0+V);let ve=ot.getPrimaries(ot.workingColorSpace),te=v.colorSpace===Wn?null:ot.getPrimaries(v.colorSpace),Q=v.colorSpace===Wn||ve===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let _e=v.isCompressedTexture||v.image[0].isCompressedTexture,L=v.image[0]&&v.image[0].isDataTexture,ne=[];for(let Me=0;Me<6;Me++)!_e&&!L?ne[Me]=_(v.image[Me],!0,s.maxCubemapSize):ne[Me]=L?v.image[Me].image:v.image[Me],ne[Me]=Ve(v,ne[Me]);let j=ne[0],me=r.convert(v.format,v.colorSpace),de=r.convert(v.type),ge=E(v.internalFormat,me,de,v.normalized,v.colorSpace),ke=v.isVideoTexture!==!0,je=ye.__version===void 0||le===!0,he=se.dataReady,He=b(v,j);Ke(i.TEXTURE_CUBE_MAP,v);let Ze;if(v.isDepthTexture){if(ge=x(v.format===wi,v.type),je)if(ke)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ge,j.width,j.height);else for(let Me=0;Me<6;Me++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ge,j.width,j.height,0,me,de,null)}else if(_e){ke&&je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,He,ge,j.width,j.height);for(let Me=0;Me<6;Me++){Ze=ne[Me].mipmaps;for(let gt=0;gt<Ze.length;gt++){let Ft=Ze[gt];v.format!==Vn?me!==null?ke?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,gt,0,0,Ft.width,Ft.height,me,Ft.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,gt,ge,Ft.width,Ft.height,0,Ft.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,gt,0,0,Ft.width,Ft.height,me,de,Ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,gt,ge,Ft.width,Ft.height,0,me,de,Ft.data)}}}else{if(Ze=v.mipmaps,ke&&je){Ze.length>0&&He++;let Me=qe(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,He,ge,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(L){ke?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ne[Me].width,ne[Me].height,me,de,ne[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ge,ne[Me].width,ne[Me].height,0,me,de,ne[Me].data);for(let gt=0;gt<Ze.length;gt++){let Mn=Ze[gt].image[Me].image;ke?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,gt+1,0,0,Mn.width,Mn.height,me,de,Mn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,gt+1,ge,Mn.width,Mn.height,0,me,de,Mn.data)}}else{ke?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,me,de,ne[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ge,me,de,ne[Me]);for(let gt=0;gt<Ze.length;gt++){let Ft=Ze[gt];ke?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,gt+1,0,0,me,de,Ft.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,gt+1,ge,me,de,Ft.image[Me])}}}T(v)&&v.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ye.__version=se.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Ct(C,v,V,le,se,ye){let ve=r.convert(V.format,V.colorSpace),te=r.convert(V.type),Q=E(V.internalFormat,ve,te,V.normalized,V.colorSpace),_e=n.get(v),L=n.get(V);if(L.__renderTarget=v,!_e.__hasExternalTextures){let ne=Math.max(1,v.width>>ye),j=Math.max(1,v.height>>ye);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,ye,Q,ne,j,v.depth,0,ve,te,null):t.texImage2D(se,ye,Q,ne,j,0,ve,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Se(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,se,L.__webglTexture,0,Mt(v)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,se,L.__webglTexture,ye),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xn(C,v,V){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){let le=v.depthTexture,se=le&&le.isDepthTexture?le.type:null,ye=x(v.stencilBuffer,se),ve=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Se(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(v),ye,v.width,v.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(v),ye,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ye,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,C)}else{let le=v.textures;for(let se=0;se<le.length;se++){let ye=le[se],ve=r.convert(ye.format,ye.colorSpace),te=r.convert(ye.type),Q=E(ye.internalFormat,ve,te,ye.normalized,ye.colorSpace);Se(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(v),Q,v.width,v.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(v),Q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Q,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Bt(C,v,V){let le=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=n.get(v.depthTexture);se.__renderTarget=v;let ye=le?v.depthTexture.image[0]:v.depthTexture.image;(!se.__webglTexture||ye.width!==v.width||ye.height!==v.height)&&(ye.width=v.width,ye.height=v.height,v.depthTexture.needsUpdate=!0),le?pe(v.depthTexture,0):ue(v.depthTexture,0);let ve=se.__webglTexture,te=Mt(v),Q=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,_e=v.depthTexture.format===wi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===vi)Se(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,Q,ve,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,_e,Q,ve,0);else if(v.depthTexture.format===wi)Se(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,Q,ve,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,_e,Q,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function hn(C){let v=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let le=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),le){let se=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,le.removeEventListener("dispose",se)};le.addEventListener("dispose",se),v.__depthDisposeCallback=se}v.__boundDepthTexture=le}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(V)for(let le=0;le<6;le++)Bt(v.__webglFramebuffer[le],C,le);else C.texture.mipmaps.length>0?Bt(v.__webglFramebuffer[0],C,0):Bt(v.__webglFramebuffer,C,0);else if(V){v.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[le]),v.__webglDepthbuffer[le]===void 0)v.__webglDepthbuffer[le]=i.createRenderbuffer(),xn(v.__webglDepthbuffer[le],C,!1);else{let se=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=v.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,ye),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ye)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),xn(v.__webglDepthbuffer,C,!1);else{let se=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ye),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ye)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function nn(C,v,V){let le=n.get(C);v!==void 0&&Ct(le.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&hn(C)}function ze(C){let v=C.texture,V=n.get(C),le=n.get(v);C.addEventListener("dispose",k),N(C);let se=C.textures,ye=C.isWebGLCubeRenderTarget===!0,ve=se.length>1;if(ve||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=v.version,o.memory.textures++),ye){V.__webglFramebuffer=[];for(let te=0;te<6;te++)if(v.mipmaps.length>0){V.__webglFramebuffer[te]=[];for(let Q=0;Q<v.mipmaps.length;Q++)V.__webglFramebuffer[te][Q]=i.createFramebuffer()}else V.__webglFramebuffer[te]=i.createFramebuffer()}else{if(v.mipmaps.length>0){V.__webglFramebuffer=[];for(let te=0;te<v.mipmaps.length;te++)V.__webglFramebuffer[te]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ve)for(let te=0,Q=se.length;te<Q;te++){let _e=n.get(se[te]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Se(C)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let te=0;te<se.length;te++){let Q=se[te];V.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[te]);let _e=r.convert(Q.format,Q.colorSpace),L=r.convert(Q.type),ne=E(Q.internalFormat,_e,L,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),j=Mt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,j,ne,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,V.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),xn(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ye){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,v);for(let te=0;te<6;te++)if(v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Ct(V.__webglFramebuffer[te][Q],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Q);else Ct(V.__webglFramebuffer[te],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);T(v)?M(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(ve){for(let te=0,Q=se.length;te<Q;te++){let _e=se[te],L=n.get(_e),ne=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ne=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,L.__webglTexture),Ke(ne,_e),Ct(V.__webglFramebuffer,C,_e,i.COLOR_ATTACHMENT0+te,ne,0),T(_e)&&M(ne)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(te=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,le.__webglTexture),Ke(te,v),v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Ct(V.__webglFramebuffer[Q],C,v,i.COLOR_ATTACHMENT0,te,Q);else Ct(V.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,te,0);T(v)?M(te):v.mipmaps.length>0&&i.texParameteri(te,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&hn(C)}function B(C){let v=C.textures;for(let V=0,le=v.length;V<le;V++){let se=v[V];if(T(se)&&se.mipmapsAutoUpdate===!0){let ye=w(C),ve=n.get(se).__webglTexture;t.bindTexture(ye,ve),M(ye),t.unbindTexture()}}}let un=[];function Et(C){if(C.samples>0){if(Se(C)===!1){let v=C.textures,V=C.width,le=C.height,se=i.COLOR_BUFFER_BIT,ye=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(C),te=v.length>1;if(te)for(let _e=0;_e<v.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let _e=0;_e<v.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[_e]);let L=n.get(v[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,V,le,0,0,V,le,se,i.NEAREST),c===!0&&(un.length=0,un.push(i.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&un.push(ye),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,un))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let _e=0;_e<v.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,ve.__webglColorRenderbuffer[_e]);let L=n.get(v[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Mt(C){return Math.min(s.maxSamples,C.samples)}function Se(C){let v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Dt(C){let v=o.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function Ve(C,v){let V=C.colorSpace,le=C.format,se=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Hr&&V!==Wn&&(ot.getTransfer(V)===mt?(le!==Vn||se!==vn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",V)),v}function qe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=Ie,this.resetTextureUnits=ie,this.getTextureUnits=oe,this.setTextureUnits=we,this.setTexture2D=ue,this.setTexture2DArray=be,this.setTexture3D=Re,this.setTextureCube=pe,this.rebindTextures=nn,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=hn,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Se,this.dispose=z}function av(i,e){function t(n,s=Wn){let r,o=ot.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ah)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Th)return i.BYTE;if(n===wh)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===ic)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===Vt)return i.HALF_FLOAT;if(n===Rh)return i.ALPHA;if(n===Ph)return i.RGB;if(n===Vn)return i.RGBA;if(n===vi)return i.DEPTH_COMPONENT;if(n===wi)return i.DEPTH_STENCIL;if(n===oc)return i.RED;if(n===ac)return i.RED_INTEGER;if(n===$i)return i.RG;if(n===cc)return i.RG_INTEGER;if(n===lc)return i.RGBA_INTEGER;if(n===vo||n===So||n===Mo||n===bo)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hc||n===uc||n===dc||n===fc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pc||n===mc||n===gc||n===xc||n===yc||n===Eo||n===_c)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pc||n===mc)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xc)return r.COMPRESSED_R11_EAC;if(n===yc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Eo)return r.COMPRESSED_RG11_EAC;if(n===_c)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===vc||n===Sc||n===Mc||n===bc||n===Ec||n===Tc||n===wc||n===Cc||n===Ac||n===Rc||n===Pc||n===Ic||n===Lc||n===Dc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ec)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ac)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ic)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nc||n===Uc||n===Oc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Nc)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bc||n===Fc||n===To||n===kc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Bc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===To)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function uv(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Oh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,T,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,_,T):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===jt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===jt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),T=_.envMap,M=_.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(hv.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(pp),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,_,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=T*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===jt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dv(i,e,t,n){let s={},r={};function o(_,T){let M=T.program;n.uniformBlockBinding(_,M,s[_.id])}function a(_,T){let M=s[_.id];M===void 0&&(p(_),M=c(_),s[_.id]=M,_.addEventListener("dispose",g));let w=T.program;n.updateUBOMapping(_,w);let E=e.render.frame;r[_.id]!==E&&(l(_),r[_.id]=E)}function c(_){let T=i.createBuffer(),M=_.__size,w=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,M,w),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function l(_){let T=s[_.id],M=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let E=0,x=M.length;E<x;E++){let b=M[E];if(Array.isArray(b))for(let N=0,R=b.length;N<R;N++)h(b[N],E,N,w);else h(b,E,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,T,M,w){if(u(_,T,M,w)===!0){let E=_.__offset,x=_.value;if(Array.isArray(x)){let b=0;for(let N=0;N<x.length;N++){let R=x[N],U=y(R,!0);d(R,_.__data,b),b+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,_.__data)}}function d(_,T,M){typeof _=="number"||typeof _=="boolean"?T[M]=_:_.isMatrix3?(T[M]=_.elements[0],T[M+1]=_.elements[1],T[M+2]=_.elements[2],T[M+3]=0,T[M+4]=_.elements[3],T[M+5]=_.elements[4],T[M+6]=_.elements[5],T[M+7]=0,T[M+8]=_.elements[6],T[M+9]=_.elements[7],T[M+10]=_.elements[8],T[M+11]=0):ArrayBuffer.isView(_)?T.set(_.subarray(0,T.length-M),M):_.toArray(T,M)}function u(_,T,M,w){let E=_.value,x=T+"_"+M;if(Array.isArray(E)){w[x]===void 0&&(w[x]=[]);let b=w[x],N=!1;for(let R=0;R<E.length;R++)f(E[R],b,R)===!0&&(N=!0);return N}return f(E,w,x)}function f(_,T,M){if(T[M]===void 0)return typeof _=="number"||typeof _=="boolean"?T[M]=_:ArrayBuffer.isView(_)?T[M]=_.slice():T[M]=_.clone(),!0;{let w=T[M];if(typeof _=="number"||typeof _=="boolean"){if(w!==_)return T[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(w.equals(_)===!1)return w.copy(_),!0}}return!1}function p(_){let T=_.uniforms,M=0,w=16;for(let x=0,b=T.length;x<b;x++){let N=Array.isArray(T[x])?T[x]:[T[x]];for(let R=0,U=N.length;R<U;R++){let k=N[R],H=Array.isArray(k.value)?k.value:[k.value],P=Array.isArray(T[x])||Array.isArray(k.value),z=M;for(let q=0,ae=H.length;q<ae;q++){let J=H[q],ie=y(J,P),oe=M%w,we=oe%ie.boundary,Ie=oe+we;M+=we,Ie!==0&&w-Ie<ie.storage&&(M+=w-Ie),q===0&&(z=M),M+=ie.storage}let X=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new X((M-z)/Float32Array.BYTES_PER_ELEMENT),k.__offset=z}}let E=M%w;return E>0&&(M+=w-E),_.__size=M,_.__cache={},this}function y(_,T){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):We("WebGLRenderer: Unsupported uniform value type.",_),T===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(_){let T=_.target;T.removeEventListener("dispose",g),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function m(){for(let _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:m}}function pv(){return si===null&&(si=new Qr(fv,16,16,$i,Vt),si.name="DFG_LUT",si.minFilter=fn,si.magFilter=fn,si.wrapS=Jn,si.wrapT=Jn,si.generateMipmaps=!1,si.needsUpdate=!0),si}var I0,L0,D0,N0,U0,O0,B0,F0,k0,z0,H0,G0,V0,W0,X0,q0,Y0,$0,Z0,J0,K0,j0,Q0,eg,tg,ng,ig,sg,rg,og,ag,cg,lg,hg,ug,dg,fg,pg,mg,gg,xg,yg,_g,vg,Sg,Mg,bg,Eg,Tg,wg,Cg,Ag,Rg,Pg,Ig,Lg,Dg,Ng,Ug,Og,Bg,Fg,kg,zg,Hg,Gg,Vg,Wg,Xg,qg,Yg,$g,Zg,Jg,Kg,jg,Qg,ex,tx,nx,ix,sx,rx,ox,ax,cx,lx,hx,ux,dx,fx,px,mx,gx,xx,yx,_x,vx,Sx,Mx,bx,Ex,Tx,wx,Cx,Ax,Rx,Px,Ix,Lx,Dx,Nx,Ux,Ox,Bx,Fx,kx,zx,Hx,Gx,Vx,Wx,Xx,qx,Yx,$x,Zx,Jx,Kx,jx,Qx,ey,ty,ny,iy,sy,ry,oy,ay,cy,ly,st,Te,ri,Gc,hy,rp,Ao,Bf,gy,xy,op,ap,yy,_y,vy,pr,Iy,cp,lp,hp,up,dp,fp,Hf,Gf,Vf,Wf,Xf,$h,Zh,Jh,qh,fr,v_,S_,$f,T_,Vc,I_,D_,U_,B_,k_,G_,jh,Qh,J_,ev,tv,nv,iv,ip,wo,Yh,cv,lv,eu,tu,hv,pp,fv,si,Wc,an=lt(()=>{Xh();Xh();I0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L0=`#ifdef USE_ALPHAHASH
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
#endif`,D0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B0=`#ifdef USE_AOMAP
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
#endif`,F0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k0=`#ifdef USE_BATCHING
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
#endif`,z0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,W0=`#ifdef USE_IRIDESCENCE
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
#endif`,X0=`#ifdef USE_BUMPMAP
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
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,eg=`#define PI 3.141592653589793
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
} // validated`,tg=`vec3 transformedNormal = objectNormal;
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
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,og="gl_FragColor = linearToOutputTexel( gl_FragColor );",ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cg=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
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
#endif`,ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xg=`#ifdef USE_GRADIENTMAP
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
}`,yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Mg=`#ifdef USE_ENVMAP
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
#endif`,bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cg=`PhysicalMaterial material;
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
#endif`,Ag=`uniform sampler2D dfgLUT;
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
}`,Rg=`
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
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zg=`#if defined( USE_POINTS_UV )
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
#endif`,Hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wg=`#if defined( USE_MORPHCOLORS )
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
#endif`,Xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qg=`#ifdef USE_MORPHTARGETS
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
#endif`,Yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qg=`#ifdef USE_NORMALMAP
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
#endif`,ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ox=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ux=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mx=`float getShadowMask() {
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
}`,gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xx=`#ifdef USE_SKINNING
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
#endif`,yx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_x=`#ifdef USE_SKINNING
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
#endif`,vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ex=`#ifdef USE_TRANSMISSION
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
#endif`,Tx=`#ifdef USE_TRANSMISSION
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
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ix=`uniform sampler2D t2D;
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
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`uniform float backgroundBlurriness;
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
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ux=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`#include <common>
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
}`,Bx=`#if DEPTH_PACKING == 3200
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
}`,Fx=`#define DISTANCE
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
}`,kx=`#define DISTANCE
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
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`uniform float scale;
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
}`,Vx=`uniform vec3 diffuse;
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
}`,Wx=`#include <common>
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
}`,Xx=`uniform vec3 diffuse;
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
}`,qx=`#define LAMBERT
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
}`,Yx=`#define LAMBERT
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
}`,$x=`#define MATCAP
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
}`,Zx=`#define MATCAP
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
}`,Jx=`#define NORMAL
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
}`,Kx=`#define NORMAL
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
}`,jx=`#define PHONG
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
}`,Qx=`#define PHONG
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
}`,ey=`#define STANDARD
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
}`,ty=`#define STANDARD
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
}`,ny=`#define TOON
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
}`,iy=`#define TOON
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
}`,sy=`uniform float size;
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
}`,ry=`uniform vec3 diffuse;
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
}`,oy=`#include <common>
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
}`,ay=`uniform vec3 color;
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
}`,cy=`uniform float rotation;
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
}`,ly=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:I0,alphahash_pars_fragment:L0,alphamap_fragment:D0,alphamap_pars_fragment:N0,alphatest_fragment:U0,alphatest_pars_fragment:O0,aomap_fragment:B0,aomap_pars_fragment:F0,batching_pars_vertex:k0,batching_vertex:z0,begin_vertex:H0,beginnormal_vertex:G0,bsdfs:V0,iridescence_fragment:W0,bumpmap_pars_fragment:X0,clipping_planes_fragment:q0,clipping_planes_pars_fragment:Y0,clipping_planes_pars_vertex:$0,clipping_planes_vertex:Z0,color_fragment:J0,color_pars_fragment:K0,color_pars_vertex:j0,color_vertex:Q0,common:eg,defaultnormal_vertex:tg,displacementmap_pars_vertex:ng,displacementmap_vertex:ig,emissivemap_fragment:sg,emissivemap_pars_fragment:rg,colorspace_fragment:og,colorspace_pars_fragment:ag,envmap_fragment:cg,envmap_common_pars_fragment:lg,envmap_pars_fragment:hg,envmap_pars_vertex:ug,envmap_physical_pars_fragment:Mg,envmap_vertex:dg,fog_vertex:fg,fog_pars_vertex:pg,fog_fragment:mg,fog_pars_fragment:gg,gradientmap_pars_fragment:xg,lightmap_pars_fragment:yg,lights_lambert_fragment:_g,lights_lambert_pars_fragment:vg,lights_pars_begin:Sg,lights_toon_fragment:bg,lights_toon_pars_fragment:Eg,lights_phong_fragment:Tg,lights_phong_pars_fragment:wg,lights_physical_fragment:Cg,lights_physical_pars_fragment:Ag,lights_fragment_begin:Rg,lights_fragment_maps:Pg,lights_fragment_end:Ig,lightprobes_pars_fragment:Lg,logdepthbuf_fragment:Dg,logdepthbuf_pars_fragment:Ng,logdepthbuf_pars_vertex:Ug,logdepthbuf_vertex:Og,map_fragment:Bg,map_pars_fragment:Fg,map_particle_fragment:kg,map_particle_pars_fragment:zg,metalnessmap_fragment:Hg,metalnessmap_pars_fragment:Gg,morphinstance_vertex:Vg,morphcolor_vertex:Wg,morphnormal_vertex:Xg,morphtarget_pars_vertex:qg,morphtarget_vertex:Yg,normal_fragment_begin:$g,normal_fragment_maps:Zg,normal_pars_fragment:Jg,normal_pars_vertex:Kg,normal_vertex:jg,normalmap_pars_fragment:Qg,clearcoat_normal_fragment_begin:ex,clearcoat_normal_fragment_maps:tx,clearcoat_pars_fragment:nx,iridescence_pars_fragment:ix,opaque_fragment:sx,packing:rx,premultiplied_alpha_fragment:ox,project_vertex:ax,dithering_fragment:cx,dithering_pars_fragment:lx,roughnessmap_fragment:hx,roughnessmap_pars_fragment:ux,shadowmap_pars_fragment:dx,shadowmap_pars_vertex:fx,shadowmap_vertex:px,shadowmask_pars_fragment:mx,skinbase_vertex:gx,skinning_pars_vertex:xx,skinning_vertex:yx,skinnormal_vertex:_x,specularmap_fragment:vx,specularmap_pars_fragment:Sx,tonemapping_fragment:Mx,tonemapping_pars_fragment:bx,transmission_fragment:Ex,transmission_pars_fragment:Tx,uv_pars_fragment:wx,uv_pars_vertex:Cx,uv_vertex:Ax,worldpos_vertex:Rx,background_vert:Px,background_frag:Ix,backgroundCube_vert:Lx,backgroundCube_frag:Dx,cube_vert:Nx,cube_frag:Ux,depth_vert:Ox,depth_frag:Bx,distance_vert:Fx,distance_frag:kx,equirect_vert:zx,equirect_frag:Hx,linedashed_vert:Gx,linedashed_frag:Vx,meshbasic_vert:Wx,meshbasic_frag:Xx,meshlambert_vert:qx,meshlambert_frag:Yx,meshmatcap_vert:$x,meshmatcap_frag:Zx,meshnormal_vert:Jx,meshnormal_frag:Kx,meshphong_vert:jx,meshphong_frag:Qx,meshphysical_vert:ey,meshphysical_frag:ty,meshtoon_vert:ny,meshtoon_frag:iy,points_vert:sy,points_frag:ry,shadow_vert:oy,shadow_frag:ay,sprite_vert:cy,sprite_frag:ly},Te={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ri={basic:{uniforms:on([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:on([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:on([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:on([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:on([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ne(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:on([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:on([Te.points,Te.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:on([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:on([Te.common,Te.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:on([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:on([Te.sprite,Te.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:on([Te.common,Te.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:on([Te.lights,Te.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};ri.physical={uniforms:on([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};Gc={r:0,b:0,g:0},hy=new xt,rp=new Je;rp.set(-1,0,0,0,1,0,0,0,1);Ao=class extends Nt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new eo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Le(5,5,5),r=new Lt({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Ei});r.uniforms.tEquirect.value=t;let o=new re(s,r),a=t.minFilter;return t.minFilter===Ti&&(t.minFilter=fn),new ar(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Bf=256,gy=3,xy=20,op=256,ap=16,yy=3,_y=new I,vy=new Ne,pr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ar(1,10,null),this._boxMesh=new re(new Le(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=_y}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,u=c.autoClearColor,f=c.autoClearDepth,p=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(vy));let g=new ar(n,s,h);return g.position.copy(a),g.update(c,e),c.autoClear=d,c.autoClearColor=u,c.autoClearDepth=f,c.autoClearStencil=p,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Bf,Pf(e))}_fromTexture(e,t){e.mapping===ps||e.mapping===hr?this._setSize(e.image.length===0?Bf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Ff(e,!1,!1),n=Math.log2(e)-gy;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ff(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ps||e.mapping===hr?(this._cubemapMaterial===null&&(this._cubemapMaterial=zf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=kf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Sy(),this._integrationMaterial=My());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/ap);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-yy)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(op*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=by());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};Iy={[fo]:"LINEAR_TONE_MAPPING",[po]:"REINHARD_TONE_MAPPING",[mo]:"CINEON_TONE_MAPPING",[fs]:"ACES_FILMIC_TONE_MAPPING",[xo]:"AGX_TONE_MAPPING",[yo]:"NEUTRAL_TONE_MAPPING",[go]:"CUSTOM_TONE_MAPPING"};cp=new pn,lp=new bi(1,1),hp=new to(1),up=new qr,dp=new Oa,fp=new eo,Hf=[],Gf=[],Vf=new Float32Array(16),Wf=new Float32Array(9),Xf=new Float32Array(4);$h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jy(t.type)}},Zh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=y_(t.type)}},Jh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},qh=/(\w+)(\])?(\[|\.)?/g;fr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);__(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};v_=37297,S_=0;$f=new Je;T_={[fo]:"Linear",[po]:"Reinhard",[mo]:"Cineon",[fs]:"ACESFilmic",[xo]:"AgX",[yo]:"Neutral",[go]:"Custom"};Vc=new I;I_=/^[ \t]*#include +<([\w\d./]+)>/gm;D_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;U_={[uo]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};B_={[hr]:"ENVMAP_MODE_REFRACTION"};k_={[bh]:"ENVMAP_BLENDING_MULTIPLY",[mf]:"ENVMAP_BLENDING_MIX",[gf]:"ENVMAP_BLENDING_ADD"};G_=0,jh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Qh(e),t.set(e,n)),n}},Qh=class{constructor(e){this.id=G_++,this.code=e,this.usedTimes=0}};J_=0;ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tv=`uniform sampler2D shadow_pass;
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
}`,nv=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],iv=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],ip=new xt,wo=new I,Yh=new I;cv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lv=`
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

}`,eu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new no(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Lt({vertexShader:cv,fragmentShader:lv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new re(new Gt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tu=class extends jn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,p=null,y=typeof XRWebGLBinding<"u",g=new eu,m={},_=t.getContextAttributes(),T=null,M=null,w=[],E=[],x=new Oe,b=null,N=null,R=new Kt;R.viewport=new Rt;let U=new Kt;U.viewport=new Rt;let k=[R,U],H=new Qa,P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ue=w[K];return ue===void 0&&(ue=new Qs,w[K]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(K){let ue=w[K];return ue===void 0&&(ue=new Qs,w[K]=ue),ue.getGripSpace()},this.getHand=function(K){let ue=w[K];return ue===void 0&&(ue=new Qs,w[K]=ue),ue.getHandSpace()};function X(K){let ue=E.indexOf(K.inputSource);if(ue===-1)return;let be=w[ue];be!==void 0&&(be.update(K.inputSource,K.frame,l||o),be.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ae);for(let K=0;K<w.length;K++){let ue=E[K];ue!==null&&(E[K]=null,w[K].disconnect(ue))}P=null,z=null,g.reset();for(let K in m)delete m[K];if(e.setRenderTarget(T),f=null,u=null,d=null,s=null,M=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),N!==null){let K=N.camera;K.fov=N.fov,K.zoom=N.zoom,K.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ae),_.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Re=null,pe=null;_.depth&&(pe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=_.stencil?wi:vi,Re=_.stencil?ms:Gn);let Fe={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Fe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Nt(u.textureWidth,u.textureHeight,{format:Vn,type:vn,depthTexture:new bi(u.textureWidth,u.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let be={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Nt(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ie.setContext(s),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ae(K){for(let ue=0;ue<K.removed.length;ue++){let be=K.removed[ue],Re=E.indexOf(be);Re>=0&&(E[Re]=null,w[Re].disconnect(be))}for(let ue=0;ue<K.added.length;ue++){let be=K.added[ue],Re=E.indexOf(be);if(Re===-1){for(let Fe=0;Fe<w.length;Fe++)if(Fe>=E.length){E.push(be),Re=Fe;break}else if(E[Fe]===null){E[Fe]=be,Re=Fe;break}if(Re===-1)break}let pe=w[Re];pe&&pe.connect(be)}}function J(K,ue){ue===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ue.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ue=K.near,be=K.far;g.texture!==null&&(g.depthNear>0&&(ue=g.depthNear),g.depthFar>0&&(be=g.depthFar)),H.near=U.near=R.near=ue,H.far=U.far=R.far=be,(P!==H.near||z!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),P=H.near,z=H.far),H.layers.mask=K.layers.mask|6,R.layers.mask=H.layers.mask&-5,U.layers.mask=H.layers.mask&-3;let Re=K.parent,pe=H.cameras;J(H,Re);for(let Fe=0;Fe<pe.length;Fe++)J(pe[Fe],Re);H.projectionMatrix.copy(R.projectionMatrix),H.projectionMatrixInverse.copy(R.projectionMatrixInverse),N===null&&K.isPerspectiveCamera&&(N={camera:K,fov:K.fov,zoom:K.zoom}),ie(K,H,Re)};function ie(K,ue,be){be===null?K.matrix.copy(ue.matrixWorld):(K.matrix.copy(be.matrixWorld),K.matrix.invert(),K.matrix.multiply(ue.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Xr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(K){return m[K]};let oe=null;function we(K,ue){if(h=ue.getViewerPose(l||o),p=ue,h!==null){let be=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Re=!1;be.length!==H.cameras.length&&(H.cameras.length=0,Re=!0);for(let De=0;De<be.length;De++){let Ke=be[De],pt=null;if(f!==null)pt=f.getViewport(Ke);else{let Ot=d.getViewSubImage(u,Ke);pt=Ot.viewport,De===0&&(e.setRenderTargetTextures(M,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(M))}let nt=k[De];nt===void 0&&(nt=new Kt,nt.layers.enable(De),nt.viewport=new Rt,k[De]=nt),nt.matrix.fromArray(Ke.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Ke.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(pt.x,pt.y,pt.width,pt.height),De===0&&(H.matrix.copy(nt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Re===!0&&H.cameras.push(nt)}let pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let De=d.getDepthInformation(be[0]);De&&De.isValid&&De.texture&&g.init(De,s.renderState)}if(pe&&pe.includes("camera-access")&&y){e.state.unbindTexture(),d=n.getBinding();for(let De=0;De<be.length;De++){let Ke=be[De].camera;if(Ke){let pt=m[Ke];pt||(pt=new no,m[Ke]=pt);let nt=d.getCameraImage(Ke);pt.sourceTexture=nt}}}}for(let be=0;be<w.length;be++){let Re=E[be],pe=w[be];Re!==null&&pe!==void 0&&pe.update(Re,ue,l||o)}oe&&oe(K,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),p=null}let Ie=new sp;Ie.setAnimationLoop(we),this.setAnimationLoop=function(K){oe=K},this.dispose=function(){}}},hv=new xt,pp=new Je;pp.set(-1,0,0,0,1,0,0,0,1);fv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),si=null;Wc=class{constructor(e={}){let{canvas:t=wf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=vn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let y=f,g=new Set([lc,cc,ac]),m=new Set([vn,Gn,dr,ms,sc,rc]),_=new Uint32Array(4),T=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},w=null,E=null,x=[],b=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,k=null,H=null,P=null,z=null;this._outputColorSpace=Ht;let X=0,q=0,ae=null,J=-1,ie=null,oe=new Rt,we=new Rt,Ie=null,K=new Ne(0),ue=0,be=t.width,Re=t.height,pe=1,Fe=null,ct=null,De=new Rt(0,0,be,Re),Ke=new Rt(0,0,be,Re),pt=!1,nt=new Fi,Ot=new Ba,bt=!1,tn=!1,Ct=new xt,xn=new I,Bt=new Rt,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nn=!1;function ze(){return ae===null?pe:1}let B=n;function un(S,O){return t.getContext(S,O)}let Et,Mt,Se,Dt,Ve,qe,C,v,V,le,se,ye,ve,te,Q,_e,L,ne,j,me,de,ge,ke;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",Me,!1),B===null){let O="webgl2";if(B=un(O,S),B===null)throw un(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(S){throw t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ye("WebGLRenderer: "+S.message),S}function je(){Et=new Ty(B),Et.init(),de=new av(B,Et),Mt=new py(B,Et,e,de),Se=new rv(B,Et),Mt.reversedDepthBuffer&&u&&Se.buffers.depth.setReversed(!0),H=B.createFramebuffer(),P=B.createFramebuffer(),z=B.createFramebuffer(),Dt=new Ay(B),Ve=new X_,qe=new ov(B,Et,Se,Ve,Mt,de,Dt),C=new Ey(R),v=new P0(B),ge=new dy(B,v),V=new wy(B,v,Dt,ge),le=new Py(B,V,v,ge,Dt),ne=new Ry(B,Mt,qe),Q=new my(Ve),se=new W_(R,C,Et,Mt,ge,Q),ye=new uv(R,Ve),ve=new Y_,te=new Q_(Et),L=new uy(R,C,Se,le,p,c),_e=new sv(R,le,Mt),ke=new dv(B,Dt,Mt,Se),j=new fy(B,Et,Dt),me=new Cy(B,Et,Dt),Dt.programs=se.programs,R.capabilities=Mt,R.extensions=Et,R.properties=Ve,R.renderLists=ve,R.shadowMap=_e,R.state=Se,R.info=Dt}y!==vn&&(N=new Ly(y,t.width,t.height,a,s,r));let he=new tu(R,B);this.xr=he,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let S=Et.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Et.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(S){S!==void 0&&(pe=S,this.setSize(be,Re,!1))},this.getSize=function(S){return S.set(be,Re)},this.setSize=function(S,O,$=!0){if(he.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}be=S,Re=O,t.width=Math.floor(S*pe),t.height=Math.floor(O*pe),$===!0&&(t.style.width=S+"px",t.style.height=O+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(be*pe,Re*pe).floor()},this.setDrawingBufferSize=function(S,O,$){be=S,Re=O,pe=$,t.width=Math.floor(S*$),t.height=Math.floor(O*$),this.setViewport(0,0,S,O)},this.setEffects=function(S){if(y===vn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let O=0;O<S.length;O++)if(S[O].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(oe)},this.getViewport=function(S){return S.copy(De)},this.setViewport=function(S,O,$,G){S.isVector4?De.set(S.x,S.y,S.z,S.w):De.set(S,O,$,G),Se.viewport(oe.copy(De).multiplyScalar(ze()).round())},this.getScissor=function(S){return S.copy(Ke)},this.setScissor=function(S,O,$,G){S.isVector4?Ke.set(S.x,S.y,S.z,S.w):Ke.set(S,O,$,G),Se.scissor(we.copy(Ke).multiplyScalar(ze()).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(S){Se.setScissorTest(pt=S)},this.setOpaqueSort=function(S){Fe=S},this.setTransparentSort=function(S){ct=S},this.getClearColor=function(S){return S.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,$=!0){let G=0;if(S){let W=!1;if(ae!==null){let A=ae.texture.format;W=g.has(A)}if(W){let A=ae.texture.type,D=m.has(A),F=L.getClearColor(),Y=L.getClearAlpha(),ee=F.r,Ee=F.g,Ae=F.b;D?(_[0]=ee,_[1]=Ee,_[2]=Ae,_[3]=Y,B.clearBufferuiv(B.COLOR,0,_)):(T[0]=ee,T[1]=Ee,T[2]=Ae,T[3]=Y,B.clearBufferiv(B.COLOR,0,T))}else G|=B.COLOR_BUFFER_BIT}O&&(G|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),k=S},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),L.dispose(),ve.dispose(),te.dispose(),qe.dispose(),Ve.dispose(),C.dispose(),le.dispose(),V.dispose(),ge.dispose(),ke.dispose(),se.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ii),he.removeEventListener("sessionend",Cr),hi.stop()};function He(S){S.preventDefault(),Wr("WebGLRenderer: Context Lost."),U=!0}function Ze(){Wr("WebGLRenderer: Context Restored."),U=!1;let S=Dt.autoReset,O=_e.enabled,$=_e.autoUpdate,G=_e.needsUpdate,W=_e.type;je(),Dt.autoReset=S,_e.enabled=O,_e.autoUpdate=$,_e.needsUpdate=G,_e.type=W}function Me(S){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function gt(S){let O=S.target;O.removeEventListener("dispose",gt),Ft(O)}function Ft(S){Mn(S),Ve.remove(S)}function Mn(S){let O=Ve.get(S).programs;O!==void 0&&(O.forEach(function($){se.releaseProgram($)}),S.isShaderMaterial&&se.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,$,G,W,A){O===null&&(O=hn);let D=W.isMesh&&W.matrixWorld.determinantAffine()<0,F=Nl(S,O,$,G,W);Se.setMaterial(G,D);let Y=$.index,ee=1;if(G.wireframe===!0){if(Y=V.getWireframeAttribute($),Y===void 0)return;ee=2}let Ee=$.drawRange,Ae=$.attributes.position,Z=Ee.start*ee,fe=(Ee.start+Ee.count)*ee;A!==null&&(Z=Math.max(Z,A.start*ee),fe=Math.min(fe,(A.start+A.count)*ee)),Y!==null?(Z=Math.max(Z,0),fe=Math.min(fe,Y.count)):Ae!=null&&(Z=Math.max(Z,0),fe=Math.min(fe,Ae.count));let Ge=fe-Z;if(Ge<0||Ge===1/0)return;ge.setup(W,G,F,$,Y);let Pe,Ue=j;if(Y!==null&&(Pe=v.get(Y),Ue=me,Ue.setIndex(Pe)),W.isMesh)G.wireframe===!0?(Se.setLineWidth(G.wireframeLinewidth*ze()),Ue.setMode(B.LINES)):Ue.setMode(B.TRIANGLES);else if(W.isLine){let $e=G.linewidth;$e===void 0&&($e=1),Se.setLineWidth($e*ze()),W.isLineSegments?Ue.setMode(B.LINES):W.isLineLoop?Ue.setMode(B.LINE_LOOP):Ue.setMode(B.LINE_STRIP)}else W.isPoints?Ue.setMode(B.POINTS):W.isSprite&&Ue.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(Et.get("WEBGL_multi_draw"))Ue.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let $e=W._multiDrawStarts,xe=W._multiDrawCounts,vt=W._multiDrawCount,Qe=Y?v.get(Y).bytesPerElement:1,St=Ve.get(G).currentProgram.getUniforms();for(let it=0;it<vt;it++)St.setValue(B,"_gl_DrawID",it),Ue.render($e[it]/Qe,xe[it])}else if(W.isInstancedMesh)Ue.renderInstances(Z,Ge,W.count);else if($.isInstancedBufferGeometry){let $e=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,xe=Math.min($.instanceCount,$e);Ue.renderInstances(Z,Ge,xe)}else Ue.render(Z,Ge)};function Pi(S,O,$,G){k!==null&&S.isNodeMaterial&&k.setObject(G,S),bt===!0&&Q.setState(S,$,!1),S.transparent===!0&&S.side===wt&&S.forceSinglePass===!1?(S.side=jt,S.needsUpdate=!0,ui(S,O,G),S.side=Yi,S.needsUpdate=!0,ui(S,O,G),S.side=wt):ui(S,O,G)}this.compile=function(S,O,$=null){$===null&&($=S),k!==null&&k.renderStart(S,O,$),E=te.get($),E.init(O),b.push(E),$.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),S!==$&&S.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),k!==null&&k.updateLights(E.state.lightsArray),tn=this.localClippingEnabled,bt=Q.init(this.clippingPlanes,tn),bt===!0&&Q.setGlobalState(this.clippingPlanes,O),k!==null&&_e.render(E.state.shadowsArray,$,O);let G=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let A=W.material;if(A)if(Array.isArray(A))for(let D=0;D<A.length;D++){let F=A[D];Pi(F,$,O,W),G.add(F)}else Pi(A,$,O,W),G.add(A)}),E=b.pop(),k!==null&&k.renderEnd(),G},this.compileAsync=function(S,O,$=null){let G=this.compile(S,O,$);return new Promise(W=>{function A(){if(G.forEach(function(D){let Y=Ve.get(D).currentProgram;(Y===void 0||Y.isReady())&&G.delete(D)}),G.size===0){W(S);return}setTimeout(A,10)}Et.get("KHR_parallel_shader_compile")!==null?A():setTimeout(A,10)})};let li=null;function Dl(S){li&&li(S)}function Ii(){hi.stop()}function Cr(){hi.start()}let hi=new sp;hi.setAnimationLoop(Dl),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(S){li=S,he.setAnimationLoop(S),S===null?hi.stop():hi.start()},he.addEventListener("sessionstart",Ii),he.addEventListener("sessionend",Cr),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;k!==null&&k.renderStart(S,O);let $=he.enabled===!0&&he.isPresenting===!0,G=N!==null&&(ae===null||$)&&N.begin(R,ae);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(O),O=he.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,O,ae),E=te.get(S,b.length),E.init(O),E.state.textureUnits=qe.getTextureUnits(),b.push(E),Ct.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?Ot.setFromArrayCamera(O):nt.setFromProjectionMatrix(Ct,Pn,O.reversedDepth),tn=this.localClippingEnabled,bt=Q.init(this.clippingPlanes,tn),w=ve.get(S,x.length),w.init(),x.push(w),this.info.render.frame++,he.enabled===!0&&he.isPresenting===!0){let D=R.xr.getDepthSensingMesh();D!==null&&ws(D,O,-1/0,R.sortObjects)}ws(S,O,0,R.sortObjects),w.finish(),k!==null&&k.updateLights(E.state.lightsArray),R.sortObjects===!0&&w.sort(Fe,ct),nn=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,nn&&L.addToRenderList(w,S),this.info.autoReset===!0&&this.info.reset(),bt===!0&&Q.beginShadows();let W=E.state.shadowsArray;if(_e.render(W,S,O),bt===!0&&Q.endShadows(),(G&&N.hasRenderPass())===!1){let D=w.opaque,F=w.transmissive;if(E.setupLights(),O.isArrayCamera){let Y=O.cameras;if(F.length>0)for(let ee=0,Ee=Y.length;ee<Ee;ee++){let Ae=Y[ee];Cs(D,F,S,Ae)}nn&&L.render(S);for(let ee=0,Ee=Y.length;ee<Ee;ee++){let Ae=Y[ee];Yo(w,S,Ae,Ae.viewport)}}else F.length>0&&Cs(D,F,S,O),nn&&L.render(S),Yo(w,S,O)}ae!==null&&q===0&&(qe.updateMultisampleRenderTarget(ae),qe.updateRenderTargetMipmap(ae)),G&&N.end(R),S.isScene===!0&&S.onAfterRender(R,S,O),ge.resetDefaultState(),J=-1,ie=null,b.pop(),b.length>0?(E=b[b.length-1],qe.setTextureUnits(E.state.textureUnits),bt===!0&&Q.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,k!==null&&k.renderEnd()};function ws(S,O,$,G){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){let D=O.isArrayCamera?Ot:nt;if(!S.frustumCulled||S.intersectsFrustum(D)){G&&Bt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ct);let F=le.update(S),Y=S.material;Y.visible&&w.push(S,F,Y,$,Bt.z,null,O)}}else if(S.isMesh||S.isLine||S.isPoints){let D=O.isArrayCamera?Ot:nt;if(!S.frustumCulled||S.intersectsFrustum(D)){let F=le.update(S),Y=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Bt.copy(S.boundingSphere.center)):(F.boundingSphere===null&&F.computeBoundingSphere(),Bt.copy(F.boundingSphere.center)),Bt.applyMatrix4(S.matrixWorld).applyMatrix4(Ct)),Array.isArray(Y)){let ee=F.groups;for(let Ee=0,Ae=ee.length;Ee<Ae;Ee++){let Z=ee[Ee],fe=Y[Z.materialIndex];fe&&fe.visible&&w.push(S,F,fe,$,Bt.z,Z,O)}}else Y.visible&&w.push(S,F,Y,$,Bt.z,null,O)}}}let A=S.children;for(let D=0,F=A.length;D<F;D++)ws(A[D],O,$,G)}function Yo(S,O,$,G){let{opaque:W,transmissive:A,transparent:D}=S;E.setupLightsView($),bt===!0&&Q.setGlobalState(R.clippingPlanes,$),G&&Se.viewport(oe.copy(G)),W.length>0&&An(W,O,$),A.length>0&&An(A,O,$),D.length>0&&An(D,O,$),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Cs(S,O,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){let Z=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new Nt(1,1,{generateMipmaps:!0,type:Z?Vt:vn,minFilter:Ti,samples:Math.max(4,Mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let A=E.state.transmissionRenderTarget[G.id],D=G.viewport||oe;A.setSize(D.z*R.transmissionResolutionScale,D.w*R.transmissionResolutionScale);let F=R.getRenderTarget(),Y=R.getActiveCubeFace(),ee=R.getActiveMipmapLevel();R.setRenderTarget(A),R.getClearColor(K),ue=R.getClearAlpha(),ue<1&&R.setClearColor(16777215,.5),R.clear(),nn&&L.render($);let Ee=R.toneMapping;R.toneMapping=ii;let Ae=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),bt===!0&&Q.setGlobalState(R.clippingPlanes,G),An(S,$,G),qe.updateMultisampleRenderTarget(A),qe.updateRenderTargetMipmap(A),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Z=!1;for(let fe=0,Ge=O.length;fe<Ge;fe++){let Pe=O[fe],{object:Ue,geometry:$e,material:xe,group:vt}=Pe;if(xe.side===wt&&Ue.layers.test(G.layers)){let Qe=xe.side;xe.side=jt,xe.needsUpdate=!0,As(Ue,$,G,$e,xe,vt),xe.side=Qe,xe.needsUpdate=!0,Z=!0}}Z===!0&&(qe.updateMultisampleRenderTarget(A),qe.updateRenderTargetMipmap(A))}R.setRenderTarget(F,Y,ee),R.setClearColor(K,ue),Ae!==void 0&&(G.viewport=Ae),R.toneMapping=Ee}function An(S,O,$){let G=O.isScene===!0?O.overrideMaterial:null;for(let W=0,A=S.length;W<A;W++){let D=S[W],{object:F,geometry:Y,group:ee}=D,Ee=D.material;Ee.allowOverride===!0&&G!==null&&(Ee=G),F.layers.test($.layers)&&As(F,O,$,Y,Ee,ee)}}function As(S,O,$,G,W,A){k!==null&&W.isNodeMaterial&&k.setObject(S,W),S.onBeforeRender(R,O,$,G,W,A),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(R,O,$,G,S,A),W.transparent===!0&&W.side===wt&&W.forceSinglePass===!1?(W.side=jt,W.needsUpdate=!0,R.renderBufferDirect($,O,G,W,S,A),W.side=Yi,W.needsUpdate=!0,R.renderBufferDirect($,O,G,W,S,A),W.side=wt):R.renderBufferDirect($,O,G,W,S,A),S.onAfterRender(R,O,$,G,W,A)}function Rs(S){let O=0;for(let $ of S)$.texture!==null&&O++;return O}function ui(S,O,$){O.isScene!==!0&&(O=hn);let G=Ve.get(S),W=E.state.lights,A=E.state.shadowsArray,D=W.state.version,F=se.getParameters(S,W.state,A,O,$,E.state.lightProbeGridArray),Y=se.getProgramCacheKey(F),ee=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;let Ee=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=C.get(S.envMap||G.environment,Ee),G.envMapRotation=G.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,ee===void 0&&(S.addEventListener("dispose",gt),ee=new Map,G.programs=ee,G.programVariants=new Map);let Ae=ee.get(Y);if(Ae!==void 0){if(G.currentProgram===Ae&&G.lightsStateVersion===D)return Yn(S,F),Ae}else F.uniforms=se.getUniforms(S),k!==null&&S.isNodeMaterial&&k.build(S,$,F),S.onBeforeCompile(F,R),Ae=se.acquireProgram(F,Y),ee.set(Y,Ae),G.uniforms=F.uniforms;let Z=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Z.clippingPlanes=Q.uniform),Yn(S,F),G.needsLights=Ol(S),G.lightsStateVersion=D,G.needsLights&&(Z.ambientLightColor.value=W.state.ambient,Z.lightProbe.value=W.state.probe,Z.sunLights.value=W.state.sun,Z.sunLightShadows.value=W.state.sunShadow,Z.directionalLights.value=W.state.directional,Z.directionalLightShadows.value=W.state.directionalShadow,Z.spotLights.value=W.state.spot,Z.spotLightShadows.value=W.state.spotShadow,Z.rectAreaLights.value=W.state.rectArea,Z.ltc_1.value=W.state.rectAreaLTC1,Z.ltc_2.value=W.state.rectAreaLTC2,Z.pointLights.value=W.state.point,Z.pointLightShadows.value=W.state.pointShadow,Z.hemisphereLights.value=W.state.hemi,Z.sunShadowMatrix.value=W.state.sunShadowMatrix,Z.sunShadowCascade.value=W.state.sunShadowCascade,Z.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Z.spotLightMatrix.value=W.state.spotLightMatrix,Z.spotLightMap.value=W.state.spotLightMap,Z.pointShadowMatrix.value=W.state.pointShadowMatrix),G.numLightProbeGrids=Rs(E.state.lightProbeGridArray),G.currentProgram=Ae,G.uniformsList=null,Ae}function Li(S,O,$,G,W){let A=Ve.get(S),D=A.currentProgram.id+","+G+","+W,F=A.programVariants.get(D);return F===void 0?(F=ui(S,O,$),A.programVariants.set(D,F)):(A.currentProgram=F,A.uniformsList=null,A.outputColorSpace=G,A.toneMapping=W),F}function Ar(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=fr.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Yn(S,O){let $=Ve.get(S);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function Nl(S,O,$,G,W){O.isScene!==!0&&(O=hn),qe.resetTextureUnits();let A=O.fog,D=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,F=ae===null?R.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ot.workingColorSpace,Y=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,ee=C.get(G.envMap||D,Y),Ee=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ae=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Z=!!$.morphAttributes.position,fe=!!$.morphAttributes.normal,Ge=!!$.morphAttributes.color,Pe=ii;G.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Pe=R.toneMapping);let Ue=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,$e=Ue!==void 0?Ue.length:0,xe=Ve.get(G),vt=E.state.lights;if(bt===!0&&(tn===!0||S!==ie)){let Pt=S===ie&&G.id===J;Q.setState(G,S,Pt)}let Qe=!1,St=!1;G.version===xe.__version?xe.needsLights&&xe.lightsStateVersion!==vt.state.version||W.isBatchedMesh&&xe.batching===!1||!W.isBatchedMesh&&xe.batching===!0||W.isBatchedMesh&&xe.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&xe.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&xe.instancing===!1||!W.isInstancedMesh&&xe.instancing===!0||W.isSkinnedMesh&&xe.skinning===!1||!W.isSkinnedMesh&&xe.skinning===!0||W.isInstancedMesh&&xe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&xe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&xe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&xe.instancingMorph===!1&&W.morphTexture!==null||xe.envMap!==ee||G.fog===!0&&xe.fog!==A||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Q.numPlanes||xe.numIntersection!==Q.numIntersection)||xe.vertexAlphas!==Ee||xe.vertexTangents!==Ae||xe.morphTargets!==Z||xe.morphNormals!==fe||xe.morphColors!==Ge||xe.morphTargetsCount!==$e||xe.numLightProbeGrids!==Rs(E.state.lightProbeGridArray)?Qe=!0:(xe.outputColorSpace!==F||xe.toneMapping!==Pe)&&(St=!0):(Qe=!0,xe.__version=G.version);let it=xe.currentProgram;(Qe===!0||St===!0)&&(it=St===!0?Li(G,O,W,F,Pe):ui(G,O,W),k&&G.isNodeMaterial&&k.onUpdateProgram(G,it,xe));let ts=!1,Nn=!1,$n=!1,ht=it.getUniforms(),Jt=xe.uniforms;if(Se.useProgram(it.program)&&(ts=!0,Nn=!0,$n=!0),G.id!==J&&(J=G.id,Nn=!0),ts||ie!==S){Se.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ht.setValue(B,"projectionMatrix",S.projectionMatrix),ht.setValue(B,"viewMatrix",S.matrixWorldInverse);let Yt=ht.map.cameraPosition;Yt!==void 0&&Yt.setValue(B,xn.setFromMatrixPosition(S.matrixWorld)),Mt.logarithmicDepthBuffer&&ht.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ht.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),ie!==S&&(ie=S,Nn=!0,$n=!0)}if(xe.needsLights&&(vt.state.sunShadowMap.length>0&&ht.setValue(B,"sunShadowMap",vt.state.sunShadowMap,qe),vt.state.directionalShadowMap.length>0&&ht.setValue(B,"directionalShadowMap",vt.state.directionalShadowMap,qe),vt.state.spotShadowMap.length>0&&ht.setValue(B,"spotShadowMap",vt.state.spotShadowMap,qe),vt.state.pointShadowMap.length>0&&ht.setValue(B,"pointShadowMap",vt.state.pointShadowMap,qe)),W.isSkinnedMesh){ht.setOptional(B,W,"bindMatrix"),ht.setOptional(B,W,"bindMatrixInverse");let Pt=W.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ht.setValue(B,"boneTexture",Pt.boneTexture,qe))}W.isBatchedMesh&&(ht.setOptional(B,W,"batchingTexture"),ht.setValue(B,"batchingTexture",W._matricesTexture,qe),ht.setOptional(B,W,"batchingIdTexture"),ht.setValue(B,"batchingIdTexture",W._indirectTexture,qe),ht.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&ht.setValue(B,"batchingColorTexture",W._colorsTexture,qe));let Un=$.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&ne.update(W,$,it),(Nn||xe.receiveShadow!==W.receiveShadow)&&(xe.receiveShadow=W.receiveShadow,ht.setValue(B,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(Jt.envMapIntensity.value=O.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=pv()),Nn){if(ht.setValue(B,"toneMappingExposure",R.toneMappingExposure),xe.needsLights&&Ul(Jt,$n),A&&G.fog===!0&&ye.refreshFogUniforms(Jt,A),ye.refreshMaterialUniforms(Jt,G,pe,Re,E.state.transmissionRenderTarget[S.id]),xe.needsLights&&xe.numLightProbeGrids>0){let Pt=M,Yt=0;for(let di of E.state.lightProbeGridArray)di.texture!==null&&(Pt.textures[Yt]=di.texture,Pt.min[Yt]=di.boundingBox.min,Pt.max[Yt]=di.boundingBox.max,Pt.resolution[Yt]=di.resolution,Yt++);for(let di in Pt)Pt[di].length=Yt;Jt.probesSH.value=Pt.textures,Jt.probesMin.value=Pt.min,Jt.probesMax.value=Pt.max,Jt.probesResolution.value=Pt.resolution}fr.upload(B,Ar(xe),Jt,qe)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(fr.upload(B,Ar(xe),Jt,qe),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ht.setValue(B,"center",W.center),ht.setValue(B,"modelViewMatrix",W.modelViewMatrix),ht.setValue(B,"normalMatrix",W.normalMatrix),ht.setValue(B,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Pt=G.uniformsGroups;for(let Yt=0,di=Pt.length;Yt<di;Yt++){let hd=Pt[Yt];ke.update(hd,it),ke.bind(hd,it)}}return it}function Ul(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.sunLights.needsUpdate=O,S.sunLightShadows.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Ol(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(S,O,$){let G=Ve.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Ve.get(S.texture).__webglTexture=O,Ve.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){let $=Ve.get(S);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,$=0){ae=S,X=O,q=$;let G=null,W=!1,A=!1;if(S){let F=Ve.get(S);if(F.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(B.FRAMEBUFFER,F.__webglFramebuffer),oe.copy(S.viewport),we.copy(S.scissor),Ie=S.scissorTest,Se.viewport(oe),Se.scissor(we),Se.setScissorTest(Ie),J=-1;return}else if(F.__webglFramebuffer===void 0)qe.setupRenderTarget(S);else if(F.__hasExternalTextures)qe.rebindTextures(S,Ve.get(S.texture).__webglTexture,Ve.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ee=S.depthTexture;if(F.__boundDepthTexture!==Ee){if(Ee!==null&&Ve.has(Ee)&&(S.width!==Ee.image.width||S.height!==Ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(S)}}let Y=S.texture;(Y.isData3DTexture||Y.isDataArrayTexture||Y.isCompressedArrayTexture)&&(A=!0);let ee=Ve.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ee[O])?G=ee[O][$]:G=ee[O],W=!0):S.samples>0&&qe.useMultisampledRTT(S)===!1?G=Ve.get(S).__webglMultisampledFramebuffer:Array.isArray(ee)?G=ee[$]:G=ee,oe.copy(S.viewport),we.copy(S.scissor),Ie=S.scissorTest}else oe.copy(De).multiplyScalar(pe).floor(),we.copy(Ke).multiplyScalar(pe).floor(),Ie=pt;if($!==0&&(G=H),Se.bindFramebuffer(B.FRAMEBUFFER,G)&&Se.drawBuffers(S,G),Se.viewport(oe),Se.scissor(we),Se.setScissorTest(Ie),W){let F=Ve.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,F.__webglTexture,$)}else if(A){let F=O;for(let Y=0;Y<S.textures.length;Y++){let ee=Ve.get(S.textures[Y]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Y,ee.__webglTexture,$,F)}}else if(S!==null&&$!==0){let F=Ve.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,F.__webglTexture,$)}J=-1};function Dn(S){let O=Ve.get(S);return(O.__readFormat!==S.format||O.__readType!==S.type)&&(O.__readFormat=S.format,O.__readType=S.type,O.__formatReadable=Mt.textureFormatReadable(S.format),O.__typeReadable=Mt.textureTypeReadable(S.type)),O}this.readRenderTargetPixels=function(S,O,$,G,W,A,D,F=0){if(!(S&&S.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Y=Ve.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&D!==void 0&&(Y=Y[D],Array.isArray(Y)&&(Y=Y[0])),Y){Se.bindFramebuffer(B.FRAMEBUFFER,Y);try{let ee=S.textures[F],Ee=ee.format,Ae=ee.type;S.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+F);let Z=Dn(ee);if(Z.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Z.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-G&&$>=0&&$<=S.height-W&&B.readPixels(O,$,G,W,de.convert(Ee),de.convert(Ae),A)}finally{let ee=ae!==null?Ve.get(ae).__webglFramebuffer:null;Se.bindFramebuffer(B.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(S,O,$,G,W,A,D,F=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Y=Ve.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&D!==void 0&&(Y=Y[D],Array.isArray(Y)&&(Y=Y[0])),Y)if(O>=0&&O<=S.width-G&&$>=0&&$<=S.height-W){Se.bindFramebuffer(B.FRAMEBUFFER,Y);let ee=S.textures[F],Ee=ee.format,Ae=ee.type;S.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+F);let Z=Dn(ee);if(Z.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Z.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,fe),B.bufferData(B.PIXEL_PACK_BUFFER,A.byteLength,B.STREAM_READ),B.readPixels(O,$,G,W,de.convert(Ee),de.convert(Ae),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Ge=ae!==null?Ve.get(ae).__webglFramebuffer:null;Se.bindFramebuffer(B.FRAMEBUFFER,Ge);let Pe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Af(B,Pe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,fe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,A),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(fe),B.deleteSync(Pe),A}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,$=0){let G=Math.pow(2,-$),W=Math.floor(S.image.width*G),A=Math.floor(S.image.height*G),D=O!==null?O.x:0,F=O!==null?O.y:0;qe.setTexture2D(S,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,D,F,W,A),Se.unbindTexture()},this.copyTextureToTexture=function(S,O,$=null,G=null,W=0,A=0){let D,F,Y,ee,Ee,Ae,Z,fe,Ge,Pe=S.isCompressedTexture?S.mipmaps[A]:S.image;if($!==null)D=$.max.x-$.min.x,F=$.max.y-$.min.y,Y=$.isBox3?$.max.z-$.min.z:1,ee=$.min.x,Ee=$.min.y,Ae=$.isBox3?$.min.z:0;else{let ht=Math.pow(2,-W);D=Math.floor(Pe.width*ht),F=Math.floor(Pe.height*ht),S.isDataArrayTexture?Y=Pe.depth:S.isData3DTexture?Y=Math.floor(Pe.depth*ht):Y=1,ee=0,Ee=0,Ae=0}G!==null?(Z=G.x,fe=G.y,Ge=G.z):(Z=0,fe=0,Ge=0);let Ue=de.convert(O.format),$e=de.convert(O.type),xe;O.isData3DTexture?(qe.setTexture3D(O,0),xe=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(qe.setTexture2DArray(O,0),xe=B.TEXTURE_2D_ARRAY):(qe.setTexture2D(O,0),xe=B.TEXTURE_2D),Se.activeTexture(B.TEXTURE0),Se.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),Se.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),Se.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let vt=Se.getParameter(B.UNPACK_ROW_LENGTH),Qe=Se.getParameter(B.UNPACK_IMAGE_HEIGHT),St=Se.getParameter(B.UNPACK_SKIP_PIXELS),it=Se.getParameter(B.UNPACK_SKIP_ROWS),ts=Se.getParameter(B.UNPACK_SKIP_IMAGES);Se.pixelStorei(B.UNPACK_ROW_LENGTH,Pe.width),Se.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pe.height),Se.pixelStorei(B.UNPACK_SKIP_PIXELS,ee),Se.pixelStorei(B.UNPACK_SKIP_ROWS,Ee),Se.pixelStorei(B.UNPACK_SKIP_IMAGES,Ae);let Nn=S.isDataArrayTexture||S.isData3DTexture,$n=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){let ht=Ve.get(S),Jt=Ve.get(O),Un=Ve.get(ht.__renderTarget),Pt=Ve.get(Jt.__renderTarget);Se.bindFramebuffer(B.READ_FRAMEBUFFER,Un.__webglFramebuffer),Se.bindFramebuffer(B.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Yt=0;Yt<Y;Yt++)Nn&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ve.get(S).__webglTexture,W,Ae+Yt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ve.get(O).__webglTexture,A,Ge+Yt)),B.blitFramebuffer(ee,Ee,ee+D,Ee+F,Z,fe,Z+D,fe+F,B.DEPTH_BUFFER_BIT,B.NEAREST);Se.bindFramebuffer(B.READ_FRAMEBUFFER,null),Se.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||Ve.has(S)){let ht=Ve.get(S),Jt=Ve.get(O);Se.bindFramebuffer(B.READ_FRAMEBUFFER,P),Se.bindFramebuffer(B.DRAW_FRAMEBUFFER,z);for(let Un=0;Un<Y;Un++)Nn?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ht.__webglTexture,W,Ae+Un):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ht.__webglTexture,W),$n?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Jt.__webglTexture,A,Ge+Un):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Jt.__webglTexture,A),W!==0?B.blitFramebuffer(ee,Ee,ee+D,Ee+F,Z,fe,Z+D,fe+F,B.COLOR_BUFFER_BIT,B.NEAREST):$n?B.copyTexSubImage3D(xe,A,Z,fe,Ge+Un,ee,Ee,D,F):B.copyTexSubImage2D(xe,A,Z,fe,ee,Ee,D,F);Se.bindFramebuffer(B.READ_FRAMEBUFFER,null),Se.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else $n?S.isDataTexture||S.isData3DTexture?B.texSubImage3D(xe,A,Z,fe,Ge,D,F,Y,Ue,$e,Pe.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(xe,A,Z,fe,Ge,D,F,Y,Ue,Pe.data):B.texSubImage3D(xe,A,Z,fe,Ge,D,F,Y,Ue,$e,Pe):S.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,A,Z,fe,D,F,Ue,$e,Pe.data):S.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,A,Z,fe,Pe.width,Pe.height,Ue,Pe.data):B.texSubImage2D(B.TEXTURE_2D,A,Z,fe,D,F,Ue,$e,Pe);Se.pixelStorei(B.UNPACK_ROW_LENGTH,vt),Se.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qe),Se.pixelStorei(B.UNPACK_SKIP_PIXELS,St),Se.pixelStorei(B.UNPACK_SKIP_ROWS,it),Se.pixelStorei(B.UNPACK_SKIP_IMAGES,ts),A===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&B.generateMipmap(xe),Se.unbindTexture()},this.initRenderTarget=function(S){Ve.get(S).__webglFramebuffer===void 0&&qe.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?qe.setTextureCube(S,0):S.isData3DTexture?qe.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?qe.setTexture2DArray(S,0):qe.setTexture2D(S,0),Se.unbindTexture()},this.resetState=function(){X=0,q=0,ae=null,Se.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}});var gr,nu=lt(()=>{gr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`}});var Cn,mv,iu,gv,Zi,xr=lt(()=>{an();Cn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},mv=new us(-1,1,1,-1,0,1),iu=class extends _t{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}},gv=new iu,Zi=class{constructor(e){this._mesh=new re(gv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,mv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var Yc,mp=lt(()=>{an();xr();Yc=class extends Cn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ci.clone(e.uniforms),this.material=new Lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Zi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});var Po,$c,gp=lt(()=>{xr();Po=class extends Cn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},$c=class extends Cn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var Zc,xp=lt(()=>{an();nu();mp();gp();Zc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Oe);this._width=n.width,this._height=n.height,t=new Nt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yc(gr),this.copyPass.material.blending=Ei,this.timer=new ho}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Po!==void 0&&(o instanceof Po?n=!0:o instanceof $c&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var Jc,yp=lt(()=>{an();xr();Jc=class extends Cn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ne}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}});var _p,vp=lt(()=>{an();_p={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`}});var yr,Sp=lt(()=>{an();xr();nu();vp();yr=class i extends Cn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Oe(e.x,e.y):new Oe(256,256),this.clearColor=new Ne(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Nt(r,o,{type:Vt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Nt(r,o,{type:Vt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Nt(r,o,{type:Vt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=_p;this.highPassUniforms=Ci.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Oe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ci.clone(gr.uniforms),this.blendMaterial=new Lt({uniforms:this.copyUniforms,vertexShader:gr.vertexShader,fragmentShader:gr.fragmentShader,premultipliedAlpha:!0,blending:tt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ne,this._oldClearAlpha=1,this._basic=new et,this._fsQuad=new Zi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Oe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],c=o+1<e?t[o+1]:0,l=a+c;s.push((o*a+(o+1)*c)/l),r.push(l)}return new Lt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Oe(.5,.5)},direction:{value:new Oe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Lt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};yr.BlurDirectionX=new Oe(1,0);yr.BlurDirectionY=new Oe(0,1)});var Io,Mp=lt(()=>{Io={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`}});var Kc,bp=lt(()=>{an();xr();Mp();Kc=class extends Cn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ci.clone(Io.uniforms),this.material=new sr({name:Io.name,uniforms:this.uniforms,vertexShader:Io.vertexShader,fragmentShader:Io.fragmentShader}),this._fsQuad=new Zi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===po?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===mo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===yo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===go&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});function yv(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function ai(i){let e=yv(i),t=()=>e();return t.next=e,t.range=(n,s)=>n+(s-n)*e(),t.int=(n,s)=>Math.floor(n+(s-n+1)*e()),t.pick=n=>n[Math.floor(e()*n.length)],t.chance=n=>e()<n,t}function Cp(i=5){let e="",t=new Uint8Array(i);crypto.getRandomValues(t);for(let n of t)e+=Tp[n%Tp.length];return e}function su(i){return Math.round(i).toLocaleString("en-US")}function ru(i){let e=Math.max(0,Math.ceil(i));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function _r(i,e=!1){let t=new zi(i);return t.colorSpace=Ht,t.anisotropy=4,e&&(t.wrapS=Kn,t.wrapT=Kn),t.needsUpdate=!0,t}function Xn(i,e=i){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function Qc(i,e,t,n){let s=i.clone().project(e);return{x:(s.x*.5+.5)*t,y:(-s.y*.5+.5)*n,visible:s.z>-1&&s.z<1}}function vr(i,e,t){let n=Xe(i.x,t.minX,t.maxX),s=Xe(i.z,t.minZ,t.maxZ),r=i.x-n,o=i.z-s,a=r*r+o*o;if(a>=e*e)return!1;if(a>1e-6){let c=Math.sqrt(a),l=e-c;i.x+=r/c*l,i.z+=o/c*l}else{let c=i.x-t.minX,l=t.maxX-i.x,h=i.z-t.minZ,d=t.maxZ-i.z,u=Math.min(c,l,h,d);u===c?i.x=t.minX-e:u===l?i.x=t.maxX+e:u===h?i.z=t.minZ-e:i.z=t.maxZ+e}return!0}function el(i,e,t,n=0){let s=0,r=1,o={x:e.x-i.x,z:e.z-i.z},a={x:t.minX-n,z:t.minZ-n},c={x:t.maxX+n,z:t.maxZ+n};for(let l of["x","z"]){let h=a[l],d=c[l];if(Math.abs(o[l])<1e-8){if(i[l]<h||i[l]>d)return null}else{let u=(h-i[l])/o[l],f=(d-i[l])/o[l];if(u>f&&([u,f]=[f,u]),s=Math.max(s,u),r=Math.min(r,f),s>r)return null}}return s}var Ep,dt,Xe,jc,oi,xv,wp,mn,Tp,Ai=lt(()=>{an();Ep=Math.PI,dt=Math.PI*2,Xe=(i,e,t)=>Math.max(e,Math.min(t,i)),jc=(i,e,t)=>i+(e-i)*t,oi=(i,e,t,n)=>jc(i,e,1-Math.exp(-t*n)),xv=(i,e)=>{let t=(e-i)%dt;return t>Ep&&(t-=dt),t<-Ep&&(t+=dt),t},wp=(i,e,t,n)=>i+xv(i,e)*(1-Math.exp(-t*n)),mn=(i,e,t,n)=>Math.hypot(i-t,e-n);Tp="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"});function Pp(i,e,t,n,s,r=7,o=!1){i.save(),i.translate(e,t),i.rotate(Math.atan2(Math.cos(n),Math.sin(n))),i.beginPath(),i.moveTo(r,0),i.lineTo(-r*.7,r*.6),i.lineTo(-r*.35,0),i.lineTo(-r*.7,-r*.6),i.closePath(),o&&(i.shadowColor=s,i.shadowBlur=12),i.fillStyle=s,i.fill(),i.restore()}var Ce,Ap,ft,Rp,tl,Ip=lt(()=>{Ai();Ce=i=>document.getElementById(i),Ap=new Map,ft=(i,e)=>{i&&Ap.get(i)!==e&&(Ap.set(i,e),i.textContent=e)},Rp=i=>Number.isFinite(i)?i<1e3?`${Math.max(0,Math.round(i))} M`:`${(i/1e3).toFixed(2)} KM`:"\u2014 M",tl=class{constructor(){this.loading=Ce("loading"),this.loadingBar=Ce("loadingBar"),this.loadingStatus=Ce("loadingStatus"),this.landing=Ce("landing"),this.hud=Ce("hud"),this.pauseOverlay=Ce("pauseOverlay"),this.deathOverlay=Ce("deathOverlay"),this.resultOverlay=Ce("resultOverlay"),this.controlsModal=Ce("controlsModal"),this.disconnectOverlay=Ce("disconnectOverlay"),this.feedEl=Ce("feed"),this.toastStack=Ce("toastStack"),this.worldLabels=Ce("worldLabels"),this.markers=new Map,this.minimapCache=null,this.minimapTime=0,this.minimapCanvas=Ce("minimap"),this.minimapCtx=this.minimapCanvas.getContext("2d"),this.speedoCanvas=Ce("speedoCanvas"),this.speedoCtx=this.speedoCanvas.getContext("2d"),this.lastSpeed=-1,this.lastBoost=-1,this.missionBannerTimer=null,this.damageTimer=null,this.feedItems=[],this.isChatOpen=!1}setLoading(e,t){this.loadingBar&&(this.loadingBar.style.width=`${Xe(e,0,1)*100}%`),t&&this.loadingStatus&&(this.loadingStatus.textContent=t)}finishLoading(){this.loading?.classList.add("is-done"),setTimeout(()=>this.loading?.classList.add("hidden"),800)}showLanding(){this.landing?.classList.remove("hidden"),this.hud?.classList.add("hidden")}enterGame(){this.landing?.classList.add("hidden"),this.hud?.classList.remove("hidden"),this.pauseOverlay?.classList.add("hidden"),this.controlsModal?.classList.add("hidden"),this.disconnectOverlay?.classList.add("hidden")}setServerStatus(e,t){let n=Ce("serverBadge");if(!n)return;n.dataset.state=e,ft(Ce("serverBadgeText"),t);let s=Ce("connectionText");e==="online"?s.textContent="Dedicated relay online \u2014 host a city, then share the code.":e==="p2p"?s.textContent="Peer-to-peer mode \u2014 host a city, share the code, and keep this tab open.":e==="offline"&&(s.textContent="Static build detected \u2014 online play uses encrypted WebRTC peer links.")}showStartError(e){let t=Ce("startError");t&&(t.textContent=e||"")}setBusy(e,t="LINKING TO THE DISTRICT"){let n=["hostBtn","joinBtn","soloBtn"];for(let r of n){let o=Ce(r);o&&(o.disabled=e)}let s=Ce("hostBtn");if(s){let r=s.querySelector("strong");r&&(r.textContent=e?t:"HOST THE CITY")}e&&this.showStartError("")}setName(e){let t=Ce("nameInput");t&&(t.value=e),ft(Ce("vitalsName"),e),ft(Ce("vitalsAvatar"),e.slice(0,1).toUpperCase())}setRoomCode(e,t){ft(Ce("roomCode"),e||"SOLO"),ft(Ce("networkLatency"),t?"LINKING":"P2P")}setLatency(e,t){let n=e==null?"P2P":`${Math.round(e)} MS`;ft(Ce("networkLatency"),t?`${n} \xB7 ${t} FPS`:n)}updateRemoteLabels(e,t,n,s){let r=new Set;for(let o of s){if(!o.visible||!o.position)continue;let a=`remote-${o.id}`;r.add(a);let c=this.markers.get(a);if(!c){let u=document.createElement("div");u.className="remote-label";let f=document.createElement("div");f.className="remote-label__name",f.textContent=(o.name||"ALLY").toUpperCase(),f.style.color=o.cssColor||"#ff8ac1",f.style.borderBottomColor=o.cssColor||"#ff2d95";let p=document.createElement("div");p.className="remote-label__diamond",p.style.background=o.cssColor||"#ff2d95",p.style.boxShadow=`0 0 8px ${o.cssColor||"#ff2d95"}`,u.append(f,p),this.worldLabels.append(u),c={el:u},this.markers.set(a,c)}let l=o.position.clone();l.y+=o.inCar?2.4:2.1;let h=Qc(l,e,t,n),d=h.visible&&h.x>0&&h.x<t&&h.y>0&&h.y<n;c.el.style.display=d?"":"none",d&&(c.el.style.left=`${h.x}px`,c.el.style.top=`${h.y}px`)}for(let[o,a]of this.markers)o.startsWith("remote-")&&!r.has(o)&&(a.el.remove(),this.markers.delete(o))}updatePingLabels(e,t,n,s){let r=new Set;for(let o of s){let a=`ping-${o.id}`;r.add(a);let c=this.markers.get(a);if(!c){let d=document.createElement("div");d.className="ping-label";let u=document.createElement("div");u.className="ping-label__ring";let f=document.createElement("span");f.textContent=`${(o.name||"ALLY").toUpperCase()} // HERE`,d.append(u,f),this.worldLabels.append(d),c={el:d},this.markers.set(a,c)}let l=Qc(o.position,e,t,n),h=l.visible&&l.x>0&&l.x<t&&l.y>0&&l.y<n;c.el.style.display=h?"":"none",h&&(c.el.style.left=`${l.x}px`,c.el.style.top=`${l.y}px`)}for(let[o,a]of this.markers)o.startsWith("ping-")&&!r.has(o)&&(a.el.remove(),this.markers.delete(o))}updateRoster(e,t,n){let s=Ce("playerList");if(!s)return;s.replaceChildren();let r=[{...e,self:!0},...t];for(let o of r){let a=document.createElement("div");a.className=`player-chip${o.self?" is-self":""}`;let c=document.createElement("i");c.style.background=`#${(o.color??5108991).toString(16).padStart(6,"0")}`,c.style.color=c.style.background;let l=document.createElement("span");l.textContent=o.name||"OPERATIVE";let h=document.createElement("b");h.textContent=o.self?"YOU":o.id===n?"HOST":"ALLY",a.append(c,l,h),s.append(a)}}showMissionBanner(e,t,n="NEW CONTRACT",s=4200){let r=Ce("missionBanner");r&&(r.querySelector("strong").textContent=e,r.querySelector("small").textContent=t,r.querySelector(".mission-banner__tag").textContent=n,r.classList.add("show"),clearTimeout(this.missionBannerTimer),this.missionBannerTimer=setTimeout(()=>r.classList.remove("show"),s))}toast(e,t="info",n=3200){if(!this.toastStack)return;let s=document.createElement("div");for(s.className=`toast toast--${t}`,s.textContent=e,this.toastStack.append(s);this.toastStack.children.length>4;)this.toastStack.firstElementChild.remove();setTimeout(()=>{s.classList.add("is-out"),setTimeout(()=>s.remove(),300)},n)}feed(e,t="",n=null){if(!this.feedEl)return;let s=document.createElement("div");if(s.className=`feed__item${t?` is-${t}`:""}`,n){let r=document.createElement("strong");r.textContent=`${n} `,s.append(r,document.createTextNode(e))}else s.textContent=e;for(this.feedEl.append(s),this.feedItems.push(s);this.feedItems.length>5;)this.feedItems.shift()?.remove();setTimeout(()=>{s.style.opacity="0",setTimeout(()=>s.remove(),400)},8e3)}chat(e,t,n=16723349){let s=`#${n.toString(16).padStart(6,"0")}`;if(this.feedEl){let r=document.createElement("div");r.className="feed__item is-chat";let o=document.createElement("strong");for(o.textContent=`${e}: `,o.style.color=s,r.append(o,document.createTextNode(t)),this.feedEl.append(r),this.feedItems.push(r);this.feedItems.length>6;)this.feedItems.shift()?.remove();setTimeout(()=>{r.style.opacity="0",setTimeout(()=>r.remove(),400)},12e3)}}setMission(e,t){if(!e)return;let n="GHOST PROTOCOL",s="Locate and breach the three data caches.",r="ACTIVE CONTRACT";e.phase==="extract"?(s="All caches secured. Return to the plaza for extraction.",r="EXTRACTION READY"):e.phase==="extracting"?(s="Hold the extraction zone \u2014 stay inside the ring.",r="EXTRACTION IN PROGRESS"):e.phase==="complete"?(s="Contract complete. The district is yours.",r="CONTRACT COMPLETE"):e.phase==="idle"&&(s="Stand by for the next contract.",r="STANDBY"),ft(Ce("missionEyebrow"),r),ft(Ce("missionTitle"),n),ft(Ce("missionObjective"),s),ft(Ce("missionDistance"),Rp(t)),ft(Ce("missionTimer"),ru(e.elapsed||0)),ft(Ce("scoreValue"),su(e.score||0));let o=Ce("missionDots")?.children;if(o){let a=e.shards?.filter(c=>c.collected).length||0;for(let c=0;c<o.length;c+=1)o[c].classList.toggle("done",c<a),o[c].classList.toggle("next",c===a&&e.phase==="collect")}}setVitals(e,t){let n=Xe(e,0,100),s=Xe(t,0,100),r=Ce("healthBar");r&&(r.style.width=`${n}%`,r.classList.toggle("is-low",n<34));let o=Ce("staminaBar");o&&(o.style.width=`${s}%`),ft(Ce("healthText"),String(Math.round(n))),ft(Ce("staminaText"),String(Math.round(s)))}setMode(e){ft(Ce("vitalsState"),e==="car"?"BEHIND THE WHEEL":"ON FOOT"),Ce("speedometer")?.classList.toggle("hidden",e!=="car"),Ce("vehiclePrompt")?.classList.toggle("hidden",e!=="car"),Ce("weaponPanel")?.classList.toggle("is-hidden",e==="car"),e==="car"&&Ce("speedLines")?.classList.remove("is-boosting")}setAmmo(e,t,n=0){ft(Ce("ammoValue"),String(e));let s=Ce("reloadBar");s&&(s.style.width=`${Xe(n,0,1)*100}%`);let r=document.querySelector(".weapon-panel__ammo span");r&&ft(r,`/ ${t}`)}setInteraction(e,t,n="F"){let s=Ce("interactionPrompt");if(!s)return;s.classList.toggle("hidden",!t),e&&ft(Ce("interactionText"),e);let r=s.querySelector("kbd");r&&ft(r,n)}setAlert(e){let t=Ce("alertBadge");t&&(t.classList.toggle("show",e>0),e>0&&ft(Ce("alertCount"),String(e)))}setCrosshair(e,t=!1,n=!1){let s=Ce("crosshair");s&&(s.style.display=e?"":"none",s.classList.toggle("is-aiming",t),s.classList.toggle("is-blocked",n))}hitmarker(){let e=Ce("crosshair")?.querySelector(".crosshair__hit");e&&(e.classList.remove("is-hit"),e.offsetWidth,e.classList.add("is-hit"))}damage(){let e=Ce("damageFlash");e&&(e.classList.add("is-hit"),clearTimeout(this.damageTimer),this.damageTimer=setTimeout(()=>e.classList.remove("is-hit"),130))}setBoosting(e){Ce("speedLines")?.classList.toggle("is-boosting",e)}setCarStats(e,t,n,s=0){let r=Math.round(Math.abs(e)*3.6);ft(Ce("speedValue"),String(r)),ft(Ce("gearValue"),n);let o=Xe(t,0,1)*100,a=Ce("boostBar");a&&(a.style.width=`${o}%`),(Math.abs(this.lastSpeed-r)>1||Math.abs(this.lastBoost-o)>1)&&(this.lastSpeed=r,this.lastBoost=o,this.drawSpeedometer(Math.min(1,r/240),o/100,s))}drawSpeedometer(e,t,n){let s=this.speedoCtx;s.clearRect(0,0,440,300);let a=220,c=216,l=156,h=Math.PI*.78,d=Math.PI*2.22;s.lineCap="butt",s.beginPath(),s.arc(a,c,l,h,d),s.strokeStyle="rgba(130, 190, 230, 0.13)",s.lineWidth=2,s.stroke(),s.beginPath(),s.arc(a,c,l,d-(d-h)*.18,d),s.strokeStyle="rgba(255, 66, 96, 0.3)",s.lineWidth=3,s.stroke();for(let u=0;u<=12;u+=1){let f=u/12,p=h+(d-h)*f,y=u%3===0?l-20:l-11;s.beginPath(),s.moveTo(a+Math.cos(p)*y,c+Math.sin(p)*y),s.lineTo(a+Math.cos(p)*l,c+Math.sin(p)*l),s.strokeStyle=u%3===0?"rgba(196, 236, 255, 0.55)":"rgba(150, 187, 215, 0.22)",s.lineWidth=u%3===0?1.6:1,s.stroke(),u%3===0&&(s.save(),s.translate(a+Math.cos(p)*(l-38),c+Math.sin(p)*(l-38)),s.fillStyle="rgba(191, 226, 246, 0.55)",s.font='500 17px "Barlow Condensed", sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillText(String(u*20),0,0),s.restore())}e>.005&&(s.save(),s.beginPath(),s.arc(a,c,l-4,h,h+(d-h)*e),s.strokeStyle="#5df6ff",s.lineWidth=4,s.shadowColor="#38eaff",s.shadowBlur=16,s.stroke(),s.restore()),s.beginPath(),s.arc(a,c,l-14,h,h+(d-h)*(.05+Math.abs(n)*.1)),s.strokeStyle="rgba(255, 187, 99, 0.35)",s.lineWidth=1.5,s.stroke(),s.beginPath(),s.moveTo(a-20,c+3),s.lineTo(a+20,c+3),s.strokeStyle="rgba(158, 214, 240, 0.22)",s.stroke()}setBoost(e,t){let n=Ce("boostBar");n&&(n.style.width=`${Xe(e,0,1)*100}%`),this.setBoosting(t)}initMinimap(e){let s=document.createElement("canvas");s.width=440,s.height=440;let r=s.getContext("2d"),a=440/(e.metro.bounds*2),c=440/2,l=440/2,h=u=>c+u*a,d=u=>l+u*a;r.fillStyle="#050912",r.fillRect(0,0,440,440),r.strokeStyle="rgba(77, 244, 255, 0.035)",r.lineWidth=1;for(let u=0;u<440;u+=55)r.beginPath(),r.moveTo(u,0),r.lineTo(u,440),r.stroke(),r.beginPath(),r.moveTo(0,u),r.lineTo(440,u),r.stroke();r.strokeStyle="rgba(88, 121, 148, 0.4)",r.lineWidth=16*a;for(let u of e.metro.roads)r.beginPath(),r.moveTo(h(u),0),r.lineTo(h(u),440),r.stroke(),r.beginPath(),r.moveTo(0,d(u)),r.lineTo(440,d(u)),r.stroke();r.strokeStyle="rgba(143, 188, 216, 0.12)",r.lineWidth=1;for(let u of e.metro.roads)r.beginPath(),r.moveTo(h(u),0),r.lineTo(h(u),440),r.stroke(),r.beginPath(),r.moveTo(0,d(u)),r.lineTo(440,d(u)),r.stroke();for(let u of e.metro.blocks){let f=44*a;r.fillStyle="rgba(16, 29, 43, 0.92)",r.strokeStyle="rgba(66, 116, 145, 0.28)",r.lineWidth=1,r.fillRect(h(u.cx)-f/2,d(u.cz)-f/2,f,f),r.strokeRect(h(u.cx)-f/2,d(u.cz)-f/2,f,f)}r.beginPath(),r.arc(h(0),d(0),28*a,0,dt),r.fillStyle="rgba(30, 77, 91, 0.26)",r.fill(),r.strokeStyle="rgba(77, 244, 255, 0.3)",r.lineWidth=2,r.stroke(),r.save(),r.translate(h(60),d(0)),r.rotate(Math.PI/4),r.fillStyle="rgba(77, 244, 255, 0.2)",r.fillRect(-7,-7,14,14),r.strokeStyle="rgba(77, 244, 255, 0.55)",r.strokeRect(-7,-7,14,14),r.restore(),r.strokeStyle="rgba(77, 244, 255, 0.15)",r.lineWidth=2,r.strokeRect(1,1,438,438),this.minimapCache=s}drawMinimap(e,t,n,s,r,o,a){if(!this.minimapCache||a-this.minimapTime<45)return;this.minimapTime=a;let c=this.minimapCtx,l=440;c.clearRect(0,0,l,l),c.drawImage(this.minimapCache,0,0);let h=e.metro.bounds,d=l/(h*2),u=l/2,f=l/2,p=m=>u+m*d,y=m=>f+m*d,g=(Math.sin(a/280)+1)/2;if(s?.shards)for(let m of s.shards){if(m.collected)continue;let _=p(m.x),T=y(m.z);c.save(),c.translate(_,T),c.rotate(Math.PI/4),c.fillStyle="#5cf7ff",c.shadowColor="#5cf7ff",c.shadowBlur=11;let M=7+g*2;c.fillRect(-M/2,-M/2,M,M),c.restore()}if(s&&(s.phase==="extract"||s.phase==="extracting"||s.phase==="complete")){let m=p(s.extraction.x),_=y(s.extraction.z);c.save(),c.beginPath(),c.arc(m,_,12+g*5,0,dt),c.strokeStyle="rgba(255, 187, 99, 0.7)",c.lineWidth=2,c.stroke(),c.fillStyle="#ffbb63",c.shadowColor="#ffbb63",c.shadowBlur=12,c.beginPath(),c.arc(m,_,5,0,dt),c.fill(),c.restore()}if(r)for(let m of r)c.fillStyle="rgba(255, 67, 88, 0.85)",c.beginPath(),c.arc(p(m.x),y(m.z),3.5,0,dt),c.fill();if(o)for(let m of o)c.strokeStyle="rgba(255, 45, 149, 0.75)",c.beginPath(),c.arc(p(m.x),y(m.z),7,0,dt),c.stroke();if(n)for(let m of n){let _=p(m.x),T=y(m.z);Pp(c,_,T,m.rot,m.colorHex||"#ff2d95",7)}Pp(c,p(t.x),y(t.z),t.rot,"#5df6ff",9,!0)}updateLabels(e,t,n,s,r){let o=new Set;for(let a of s){let c=a.id;o.add(c);let l=this.markers.get(c);l||(l=this.createMarker(a),this.markers.set(c,l),this.worldLabels.append(l.el));let h=Qc(a.position,e,t,n),d=e.position,u=h.visible===!1,f=d.distanceTo(a.position),p=!u&&h.x>-40&&h.x<t+40&&h.y>-40&&h.y<n+40;l.el.classList.toggle("visible",p),p&&(l.el.style.left=`${h.x}px`,l.el.style.top=`${h.y}px`,l.distEl&&ft(l.distEl,Rp(f)),l.dynamicLabel&&ft(l.dynamicLabel,a.label||""))}for(let[a,c]of this.markers)!o.has(a)&&!a.startsWith("remote-")&&!a.startsWith("ping-")&&(c.el.remove(),this.markers.delete(a))}createMarker(e){let t=document.createElement("div");t.className=`world-marker ${e.className||""}`;let n=document.createElement("div");n.className="world-marker__icon";let s=document.createElement("div");s.className="world-marker__label",s.textContent=e.label||"";let r=document.createElement("div");return r.className="world-marker__dist",t.append(n,s,r),{el:t,labelEl:s,distEl:r,dynamicLabel:e.dynamicLabel?s:null}}setFps(e,t){let n=t==null?`${Math.round(e)} FPS`:`${Math.round(t)} MS \xB7 ${Math.round(e)} FPS`;ft(Ce("networkLatency"),n)}setChatOpen(e){this.isChatOpen=e,Ce("chatPanel")?.classList.toggle("hidden",!e),e?setTimeout(()=>Ce("chatInput")?.focus(),10):Ce("chatInput")&&(Ce("chatInput").value="")}setPaused(e){this.pauseOverlay?.classList.toggle("hidden",!e),e||this.controlsModal?.classList.add("hidden")}setControls(e){this.controlsModal?.classList.toggle("hidden",!e)}showDeath(e){this.deathOverlay?.classList.remove("hidden"),ft(Ce("respawnTimer"),String(Math.max(0,Math.ceil(e))))}updateDeath(e){this.deathOverlay?.classList.contains("hidden")||ft(Ce("respawnTimer"),String(Math.max(0,Math.ceil(e))))}hideDeath(){this.deathOverlay?.classList.add("hidden")}showResult({time:e,score:t,countdown:n,caches:s}){this.resultOverlay?.classList.remove("hidden"),ft(Ce("resultTime"),ru(e)),ft(Ce("resultScore"),su(t)),ft(Ce("resultCaches"),`${s} / 3`),ft(Ce("resultCountdown"),String(Math.max(0,Math.ceil(n))))}updateResultCountdown(e){ft(Ce("resultCountdown"),String(Math.max(0,Math.ceil(e))))}hideResult(){this.resultOverlay?.classList.add("hidden")}showDisconnect(e){ft(Ce("disconnectReason"),e||"The link to your partner was lost."),this.disconnectOverlay?.classList.remove("hidden"),this.pauseOverlay?.classList.add("hidden")}hideDisconnect(){this.disconnectOverlay?.classList.add("hidden")}setLockHint(e){Ce("lockHint")?.classList.toggle("hidden",!e)}clearLabels(){for(let[,e]of this.markers)e.el.remove();this.markers.clear()}}});function qn(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new _t;c.morphTargetsRelative=a;let l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Lp(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][u]);let p=Lp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function Lp(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Tt(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){let y=h.getComponent(u,p);a.setComponent(u+d,p,y)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var Dp=lt(()=>{an()});function Sr(i,{repeat:e=!0,srgb:t=!0}={}){let n=_r(i,e);return t||(n.colorSpace=Wn),n}function Lo(i,e,t,n,s,r=1){let o=i.getImageData(0,0,e,t),a=o.data;for(let c=0;c<a.length;c+=4){let l=(s()-.5)*n;a[c]+=l,a[c+1]+=l,a[c+2]+=l,a[c+3]=Math.min(255,a[c+3]*r)}i.putImageData(o,0,0)}function Op(i=4){let e=ai(9173),t=512,n=Xn(t),s=n.getContext("2d");s.fillStyle="#17191e",s.fillRect(0,0,t,t);for(let l=0;l<2600;l+=1){let h=e()*t,d=e()*t,u=e()*2.6+.4,f=26+Math.floor(e()*35);s.fillStyle=`rgba(${f},${f+2},${f+5},${e()*.55})`,s.fillRect(h,d,u,u)}for(let l=0;l<9;l+=1)s.fillStyle=`rgba(10,11,15,${.06+e()*.08})`,s.fillRect(0,e()*t,t,10+e()*30);s.strokeStyle="rgba(6,7,10,0.55)",s.lineWidth=1.2;for(let l=0;l<18;l+=1){let h=e()*t,d=e()*t;s.beginPath(),s.moveTo(h,d);for(let u=0;u<5;u+=1)h+=(e()-.5)*60,d+=(e()-.5)*60,s.lineTo(h,d);s.stroke()}Lo(s,t,t,14,e);let r=Sr(n);r.anisotropy=i;let o=Xn(t),a=o.getContext("2d");a.fillStyle="#6d6d6d",a.fillRect(0,0,t,t);for(let l=0;l<90;l+=1){let h=e()*t,d=e()*t,u=12+e()*70,f=a.createRadialGradient(h,d,0,h,d,u);f.addColorStop(0,"rgba(18,18,18,0.75)"),f.addColorStop(1,"rgba(18,18,18,0)"),a.fillStyle=f,a.fillRect(h-u,d-u,u*2,u*2)}Lo(a,t,t,20,e);let c=Sr(o,{srgb:!1});return c.anisotropy=i,{map:r,roughnessMap:c}}function Bp(i=4){let e=ai(4481),t=256,n=Xn(t),s=n.getContext("2d");s.fillStyle="#282b33",s.fillRect(0,0,t,t);let r=64;for(let a=0;a<t;a+=r)for(let c=0;c<t;c+=r){let l=31+Math.floor(e()*11);s.fillStyle=`rgb(${l},${l+2},${l+5})`,s.fillRect(c+2,a+2,r-4,r-4),s.strokeStyle="rgba(8,9,12,0.8)",s.lineWidth=2,s.strokeRect(c+1,a+1,r-2,r-2);for(let h=0;h<20;h+=1)s.fillStyle=`rgba(5,6,9,${e()*.15})`,s.fillRect(c+e()*r,a+e()*r,1.5,1.5)}Lo(s,t,t,9,e);let o=Sr(n);return o.anisotropy=i,o}function Fp(i=4){let e=ai(8127),t=512,n=Xn(t),s=n.getContext("2d");s.fillStyle="#141721",s.fillRect(0,0,t,t),s.strokeStyle="rgba(73,227,255,0.09)",s.lineWidth=2;let r=64;for(let a=0;a<=t;a+=r)s.beginPath(),s.moveTo(a,0),s.lineTo(a,t),s.stroke(),s.beginPath(),s.moveTo(0,a),s.lineTo(t,a),s.stroke();for(let a=0;a<55;a+=1)s.strokeStyle=`rgba(70,240,255,${.02+e()*.08})`,s.lineWidth=.8+e()*1.5,s.beginPath(),s.arc(e()*t,e()*t,e()*90,0,dt),s.stroke();Lo(s,t,t,8,e);let o=Sr(n);return o.anisotropy=i,o}function kp(i=4){return _v.map((e,t)=>{let n=ai(1229+t*997),s=512,r=512,o=Xn(s,r),a=Xn(s,r),c=o.getContext("2d"),l=a.getContext("2d");c.fillStyle=e.wall,c.fillRect(0,0,s,r),l.fillStyle="#000",l.fillRect(0,0,s,r);let h=c.createLinearGradient(0,0,s,0);h.addColorStop(0,"rgba(255,255,255,0.035)"),h.addColorStop(.5,"rgba(0,0,0,0.12)"),h.addColorStop(1,"rgba(255,255,255,0.02)"),c.fillStyle=h,c.fillRect(0,0,s,r);let d=7,u=10,f=s/d,p=r/u,y=7,g=6,m=["#08121d","#0d1821","#15101f","#0a1418"];for(let M=0;M<u;M+=1)for(let w=0;w<d;w+=1){let E=w*f+y,x=M*p+g,b=f-y*2,N=p-g*2;if(c.fillStyle=e.glass,c.fillRect(E,x,b,N),c.fillStyle=`rgba(${m[(M+w)%m.length].slice(1).match(/../g).map(R=>parseInt(R,16)).join(",")},0.55)`,c.fillRect(E,x,b,N),c.fillStyle="rgba(150,195,255,0.08)",c.beginPath(),c.moveTo(E,x+N*.6),c.lineTo(E+b,x+N*.05),c.lineTo(E+b,x+N*.2),c.lineTo(E,x+N*.8),c.closePath(),c.fill(),c.strokeStyle="rgba(3,5,8,0.8)",c.lineWidth=2,c.strokeRect(E,x,b,N),c.fillStyle="rgba(255,255,255,0.05)",c.fillRect(E,x,b,2),n()<e.density){let R=e.lit[Math.floor(n()*e.lit.length)];l.fillStyle=R,l.globalAlpha=.35+n()*.65,l.fillRect(E+1,x+1,b-2,N-2),l.globalAlpha=1,n()<.35&&(l.fillStyle="rgba(0,0,0,0.45)",l.fillRect(E+1,x+N*(.3+n()*.3),b-2,N*.18))}}c.fillStyle="rgba(2,3,5,0.5)";for(let M=0;M<=d;M+=1)c.fillRect(M*f-2,0,4,r);c.fillStyle="rgba(255,255,255,0.03)",c.fillRect(0,0,s,4),Lo(c,s,r,9,n,.95);let _=Sr(o),T=Sr(a);return _.anisotropy=i,T.anisotropy=i,_.wrapS=_.wrapT=Kn,T.wrapS=T.wrapT=Kn,{map:_,emissiveMap:T,tint:new Ne(e.tint)}})}function ou(i=0,e=null,t=null,n=!1){let s=ai(777+i*43),r=e||Np[i%Np.length],o=t||Up[i%Up.length],a=n?192:640,c=n?640:192,l=Xn(a,c),h=l.getContext("2d");h.clearRect(0,0,a,c),n?(h.fillStyle="rgba(4,5,10,0.9)",h.fillRect(8,8,a-16,c-16),h.strokeStyle=o,h.lineWidth=5,h.shadowColor=o,h.shadowBlur=20,h.strokeRect(14,14,a-28,c-28),h.shadowBlur=28,h.font='700 92px "Arial Black", Impact, sans-serif',h.textAlign="center",h.textBaseline="middle",r.split("").forEach((f,p)=>{h.fillStyle=p%2?o:"#ffffff",h.fillText(f,a/2,105+p*100)}),h.font='22px "Arial", sans-serif',h.fillStyle=o,h.fillText("24H",a/2,c-48)):(h.fillStyle="rgba(4,5,10,0.86)",h.fillRect(10,10,a-20,c-20),h.strokeStyle=o,h.lineWidth=5,h.shadowColor=o,h.shadowBlur=18,h.strokeRect(14,14,a-28,c-28),h.shadowBlur=35,h.font='700 96px "Arial Black", Impact, sans-serif',h.textAlign="center",h.textBaseline="middle",h.fillStyle="#ffffff",h.fillText(r,a/2,c/2+4),h.globalAlpha=.8,h.fillStyle=o,h.fillText(r,a/2,c/2+4),h.globalAlpha=1,h.font='600 22px "Arial", sans-serif',h.fillStyle=o,h.shadowBlur=10,h.fillText("N E O N   D I S T R I C T",a/2,c-36)),h.globalCompositeOperation="source-atop",h.fillStyle="rgba(0,0,0,0.12)";for(let u=0;u<c;u+=5)h.fillRect(0,u,a,2);h.globalCompositeOperation="source-over";let d=_r(l);return d.anisotropy=4,d}function zp(i=0){let e=ai(3301+i*91),t=512,n=256,s=Xn(t,n),r=s.getContext("2d"),o=[["#ff2b83","#4310a8","#ffd1e8"],["#11e4ff","#053c78","#d5fdff"],["#ffb300","#741b00","#fff0c2"],["#b670ff","#14054a","#f1e3ff"]],a=o[i%o.length],c=r.createLinearGradient(0,0,t,n);c.addColorStop(0,a[1]),c.addColorStop(1,a[0]),r.fillStyle=c,r.fillRect(0,0,t,n);for(let d=0;d<18;d+=1){let u=10+e()*55,f=20+e()*160;r.fillStyle=`rgba(5,3,12,${.15+e()*.35})`,r.fillRect(e()*t,n-f,u,f),r.fillStyle=`rgba(255,255,255,${.05+e()*.2})`;for(let p=n-f+6;p<n;p+=9)for(let y=4;y<u;y+=8)e()<.3&&r.fillRect(e()*t,p,2,2)}r.globalAlpha=.4;for(let d=0;d<7;d+=1)r.strokeStyle=a[2],r.lineWidth=1+e()*4,r.beginPath(),r.arc(t*.72,n*.4,20+d*22,0,dt),r.stroke();r.globalAlpha=1,r.fillStyle="rgba(4,3,12,0.7)",r.fillRect(0,0,t,n),r.strokeStyle=a[0],r.lineWidth=3,r.strokeRect(6,6,t-12,n-12),r.font='900 56px "Arial Black", Impact, sans-serif',r.fillStyle="#ffffff",r.textAlign="left",r.shadowColor=a[0],r.shadowBlur=16;let l=[["WAKE","THE CITY"],["RIDE","THE VOID"],["NO","LIMITS"],["SYNC","YOUR SOUL"]][i%4];r.fillText(l[0],34,108),r.fillStyle=a[2],r.fillText(l[1],34,164),r.font='600 18px "Arial", sans-serif',r.fillStyle=a[0],r.fillText("NIGHTFALL INDUSTRIES // EST. 2086",36,210);let h=_r(s);return h.anisotropy=4,h}function qt(i="#ffffff"){let t=Xn(128),n=t.getContext("2d"),s=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return s.addColorStop(0,i),s.addColorStop(.12,i),s.addColorStop(.4,`${i}55`),s.addColorStop(1,`${i}00`),n.fillStyle=s,n.fillRect(0,0,128,128),_r(t)}function Hp(){let t=Xn(1024,512),n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"#02030a"),s.addColorStop(.42,"#090c1c"),s.addColorStop(.52,"#1c1233"),s.addColorStop(.58,"#2b1a48"),s.addColorStop(.65,"#0b0a14"),s.addColorStop(1,"#030409"),n.fillStyle=s,n.fillRect(0,0,1024,512);let r=["#ff2f9a","#35f4ff","#8b5cff","#ffb443","#4b7dff"];for(let a=0;a<140;a+=1){let c=Math.random()*1024,l=512*.5+Math.random()*70,h=2+Math.random()*10,d=10+Math.random()*120;n.globalAlpha=.15+Math.random()*.7,n.fillStyle=r[Math.floor(Math.random()*r.length)],n.fillRect(c,l-d,h,d)}n.globalAlpha=1;for(let a=0;a<18;a+=1){let c=261.12+a*3;n.fillStyle=`rgba(${80+Math.random()*140},${80+Math.random()*120},255,${.025+Math.random()*.05})`,n.fillRect(0,c,1024,2)}let o=_r(t,!0);return o.mapping=ur,o}var _v,Np,Up,nl=lt(()=>{an();Ai();_v=[{wall:"#1e2532",glass:"#0c1624",lit:["#ffd9a0","#ffe9c4","#8ce6ff","#ffa9d6"],tint:"#7686a4",density:.42},{wall:"#2a2423",glass:"#121113",lit:["#ffd09a","#ffb36b","#cbeaff","#79d7ff"],tint:"#a58c7d",density:.35},{wall:"#1b2a2b",glass:"#071719",lit:["#bffaff","#66e9ff","#ff9cd8","#e8fff9"],tint:"#5b9ca0",density:.38},{wall:"#211d2e",glass:"#0d0b18",lit:["#d4b7ff","#ffb0e4","#8defff","#ffe6a6"],tint:"#8475b7",density:.46},{wall:"#181a20",glass:"#0a0d14",lit:["#ffc98a","#a8f4ff","#ff90c9"],tint:"#687083",density:.3}];Np=["NOVA","KAIDO","SYNTH","NEON","ZERO","RAMEN","GRID","VOID","AETHER","NIGHT","HALO","DRIVE","PULSE","ECHO","LUX","ARCO","ONI","VANTA","NEXUS","KITSUNE","QUANTUM","HELIX","ORBIT","CHROME"],Up=["#52f6ff","#ff3d9c","#b268ff","#ffb44d","#74ffb0","#4d8bff"]});function vv(i){let e=new In(620,32,20),t=new Lt({side:jt,depthWrite:!1,uniforms:{topColor:{value:new Ne("#02040a")},midColor:{value:new Ne("#0a0d20")},horizonColor:{value:new Ne("#241a3d")},glowColor:{value:new Ne("#432260")}},vertexShader:`
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
      void main() {
        float h = clamp(vWorld.y, 0.0, 1.0);
        vec3 col = mix(horizonColor, midColor, smoothstep(0.0, 0.28, h));
        col = mix(col, topColor, smoothstep(0.25, 0.8, h));
        float haze = pow(1.0 - h, 6.0);
        col += glowColor * haze * 0.65;
        float band = sin(vWorld.y * 38.0 + vWorld.x * 5.0) * 0.004 * (1.0 - h);
        col += band;
        gl_FragColor = vec4(col, 1.0);
      }
    `}),n=new re(e,t);n.frustumCulled=!1,i.add(n);let s=ai(5150),r=900,o=new Float32Array(r*3),a=new Float32Array(r*3);for(let p=0;p<r;p+=1){let y=s()*dt,g=.04+s()*.95,m=Math.sqrt(1-g*g);o[p*3]=Math.cos(y)*m*580,o[p*3+1]=g*580,o[p*3+2]=Math.sin(y)*m*580;let _=.55+s()*.45;a[p*3]=_*(.7+s()*.3),a[p*3+1]=_*(.8+s()*.2),a[p*3+2]=_}let c=new _t;c.setAttribute("position",new Tt(o,3)),c.setAttribute("color",new Tt(a,3));let l=qt("#dfe9ff"),h=new Mi(c,new ki({size:2.1,map:l,transparent:!0,opacity:.85,depthWrite:!1,blending:tt,vertexColors:!0,sizeAttenuation:!1,fog:!1}));h.frustumCulled=!1,i.add(h);let d=qt("#dce7ff"),u=new Tn(new yn({map:d,color:14543103,transparent:!0,opacity:.95,blending:tt,depthWrite:!1,fog:!1}));u.position.set(250,260,-330),u.scale.set(52,52,1),i.add(u);let f=new re(new cs(7,36),new et({color:15397631,transparent:!0,opacity:.9,fog:!1}));f.position.set(246,261,-331),f.lookAt(0,0,0),i.add(f)}function Vp(i,e,t,n,s=15,r=30){let o=i.attributes.uv,a=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let c=0;c<6;c+=1){let[l,h]=a[c];for(let d=0;d<4;d+=1){let u=c*4+d;o.setXY(u,o.getX(u)*l/s,o.getY(u)*h/r)}}o.needsUpdate=!0}function il(i,e,t,n,s,r=.7){let o=new Tn(new yn({map:e,color:t,transparent:!0,opacity:r,depthWrite:!1,blending:tt}));return o.position.copy(n),o.scale.set(s,s,1),i.add(o),o}function Wp(i,e){let t=ai(913205),n=Math.min(8,e.capabilities.getMaxAnisotropy()),s=[],r=[],o=[],a=[],c=[],l=new I(0,0,1),h={x:0,y:0,z:-24,rot:0},d=(A,D,F,Y)=>{s.push({minX:A-F/2,maxX:A+F/2,minZ:D-Y/2,maxZ:D+Y/2})};i.fog=new $r(461590,.0042);let u=new ro(5991679,1510432,.85);i.add(u);let f=new co(9414911,1.15);f.position.set(120,200,-160),i.add(f);let p=new lo(2827072,.7);i.add(p);let y=new ni(2746367,40,48,2);y.position.set(-12,7,-8),i.add(y);let g=new ni(16723349,34,44,2);g.position.set(14,6,10),i.add(g);let m=new ni(6642943,80,90,2);m.position.set(60,30,0),i.add(m);let _=new ni(16759671,22,34,2);_.position.set(-58,6,-58),i.add(_),vv(i);try{let A=Hp(),D=new pr(e);D.compileEquirectangularShader();let F=D.fromEquirectangular(A).texture;i.environment=F,i.environmentIntensity=.65,A.dispose(),D.dispose()}catch{}let T=Op(n);T.map.repeat.set(64,64),T.roughnessMap.repeat.set(64,64);let M=new ut({map:T.map,roughnessMap:T.roughnessMap,color:12173775,roughness:.72,metalness:.55,envMapIntensity:1.1}),w=new Gt(520,520);w.rotateX(-Math.PI/2);let E=new re(w,M);E.position.y=-.03,i.add(E);let x=Bp(n);x.repeat.set(5,5);let b=new ut({map:x,color:11186367,roughness:.86,metalness:.18,envMapIntensity:.55}),N=Fp(n);N.repeat.set(2.6,2.6);let R=new ut({map:N,color:12437213,roughness:.42,metalness:.58,envMapIntensity:1.2}),U=[],k=new re(new cs(28,64),R);k.rotation.x=-Math.PI/2,k.position.set(0,.055,0),i.add(k);let H=[];for(let A=0;A<Do.grid;A+=1)for(let D=0;D<Do.grid;D+=1){let F=(A-3)*Do.cell,Y=(D-3)*Do.cell;if(A===3&&D===3)continue;let ee=new Le(44.5,.18,44.5);ee.translate(F,.01,Y),U.push(ee),H.push({cx:F,cz:Y,i:A,j:D})}let P=new re(qn(U,!1),b);i.add(P),U.forEach(A=>A.dispose());let z=[],X=[],q=(A,D,F,Y)=>{let ee=new Gt(F,Y);ee.rotateX(-Math.PI/2),ee.translate(A,.105,D),z.push(ee)};for(let A of Ji){for(let D=-206;D<=206;D+=8)q(A,D,.18,3.4),q(D,A,3.4,.18);for(let D of[-7.1,7.1])q(A+D,0,.12,410),q(0,A+D,410,.12)}for(let A of Ji)for(let D of Ji)for(let F=0;F<4;F+=1){let Y=F*Math.PI/2;for(let ee=-1;ee<=1;ee+=1){let Ee=A+Math.cos(Y)*10.4+Math.cos(Y+Math.PI/2)*(ee*2.4),Ae=D+Math.sin(Y)*10.4+Math.sin(Y+Math.PI/2)*(ee*2.4),Z=new Gt(4.2,.75);Z.rotateX(-Math.PI/2),Z.rotateY(-Y),Z.translate(Ee,.107,Ae),X.push(Z)}}let ae=new et({color:12440296,transparent:!0,opacity:.42,depthWrite:!1}),J=new re(qn(z,!1),ae);i.add(J);let ie=new et({color:14412024,transparent:!0,opacity:.3,depthWrite:!1}),oe=new re(qn(X,!1),ie);i.add(oe),z.forEach(A=>A.dispose()),X.forEach(A=>A.dispose());let we=kp(n),Ie=we.map(A=>new ut({map:A.map,emissiveMap:A.emissiveMap,emissive:16777215,emissiveIntensity:1.15,color:10133674,roughness:.56,metalness:.38,envMapIntensity:.5})),K=new ut({color:1119260,roughness:.88,metalness:.24}),ue=new ut({color:724243,roughness:.6,metalness:.7,envMapIntensity:.8}),be=au.slice(0,4).map(A=>new et({color:A,toneMapped:!1})),Re=Ie.map(()=>[]),pe=[],Fe=[],ct=be.map(()=>[]),De=(A,D,F,Y,ee,Ee,Ae=!0)=>{let Z=new Le(F,ee,Y);Vp(Z,F,ee,Y,16,30),Z.translate(A,ee/2+.12,D),Re[Ee].push(Z),d(A,D,F,Y);let fe=new Le(F+.5,.55,Y+.5);if(fe.translate(A,ee+.32,D),pe.push(fe),Ae){let Pe=new Le(F+.35,.9,Y+.35);Pe.translate(A,.5,D),Fe.push(Pe)}if(t.chance(.55)){let Pe=t.int(0,be.length-1),Ue=.22,$e=new Le(F+.16,Ue,.16);$e.translate(A,ee-1.2,D+Y/2+.1),ct[Pe].push($e);let xe=new Le(.16,Ue,Y+.16);xe.translate(A+F/2+.1,ee-1.2,D),ct[Pe].push(xe)}let Ge=t.int(1,3);for(let Pe=0;Pe<Ge;Pe+=1){let Ue=t.range(1.5,Math.min(5,F*.25)),$e=t.range(1.5,Math.min(5,Y*.25)),xe=t.range(.7,2.2),vt=A+t.range(-F*.28,F*.28),Qe=D+t.range(-Y*.28,Y*.28),St=new Le(Ue,xe,$e);St.translate(vt,ee+.55+xe/2,Qe),pe.push(St)}if(ee>55&&t.chance(.6)){let Pe=new Ut(.06,.11,t.range(4,10),5);Pe.translate(A+t.range(-F*.2,F*.2),ee+6,D+t.range(-Y*.2,Y*.2)),Fe.push(Pe)}return{w:F,d:Y,h:ee}},Ke=(A,D,F,Y,ee=!1,Ee=null,Ae=null,Z=null)=>{let fe=ou(Math.floor(t()*999),Ee,Ae,ee),Ge=Y/(ee?1/3.33:3.33),Pe=new Gt(Y,Ge),Ue=new et({map:fe,transparent:!0,blending:tt,depthWrite:!1,toneMapped:!1,side:wt}),$e=new re(Pe,Ue),xe=0;return F===0&&(xe=0,D+=.3),F===1&&(xe=Math.PI,D-=.3),F===2&&(xe=Math.PI/2,A+=.3),F===3&&(xe=-Math.PI/2,A-=.3),$e.rotation.y=xe,$e.position.set(A,Z??0,D),$e.renderOrder=2,i.add($e),a.push({mesh:$e,base:.82+t()*.18,phase:t()*12,speed:t.range(4,14),broken:t.chance(.18)}),$e},pt=(A,D,F,Y,ee=13)=>{let Ee=zp(Y),Ae=15,Z=7.5,fe=new et({map:Ee,transparent:!0,depthWrite:!1,toneMapped:!1,side:wt}),Ge=new re(new Gt(Ae,Z),fe),Pe=0;F===0&&(Pe=0),F===1&&(Pe=Math.PI),F===2&&(Pe=Math.PI/2),F===3&&(Pe=-Math.PI/2),Ge.rotation.y=Pe,Ge.position.set(A,ee,D),Ge.renderOrder=2,i.add(Ge);let Ue=new re(new Le(Ae+.7,Z+.7,.3),new ut({color:592400,roughness:.4,metalness:.8}));return Ue.position.set(A,ee,D),Ue.rotation.y=Pe,Ue.translateZ(-.24),i.add(Ue),Ge};for(let A of H){let{cx:D,cz:F,i:Y,j:ee}=A;if(Y===4&&ee===3)continue;let Ae=Math.hypot(D,F),Z=Xe(1.35-Ae/330,.38,1.2),fe=t.next(),Ge=()=>t.int(0,Ie.length-1),Pe=()=>Xe(t.range(45,125)*Z,24,162);if(fe<.1){A.type="park";continue}if(fe<.24){A.type="market";let Ue=t.range(6,12);De(D-3,F-2,36,31,Ue,Ge(),!1),De(D+10,F+10,15,15,Pe()*.7,Ge());let $e=t.int(0,3);$e===0&&Ke(D,F-17.8,1,t.range(9,13),!1,null,null,7),$e===1&&Ke(D,F+17.8,0,t.range(9,13),!1,null,null,7),$e===2&&Ke(D-17.8,F,3,t.range(9,13),!1,null,null,7),$e===3&&Ke(D+17.8,F,2,t.range(9,13),!1,null,null,7)}else if(fe<.44){A.type="twin";let Ue=t.range(16,21),$e=t.range(17,24),xe=t.range(15,20),vt=t.range(15,21);De(D-9,F-7,Ue,$e,Pe(),Ge()),De(D+9,F+9,xe,vt,Pe()*t.range(.65,1),Ge())}else if(fe<.68){A.type="podium";let Ue=t.range(7,15);De(D,F,38,33,Ue,Ge(),!1),De(D+t.range(-3,3),F+t.range(-3,3),t.range(18,24),t.range(18,24),Pe()+Ue,Ge(),!1),pt(D,F+17.2,0,t.int(0,3),t.range(9,15))}else{A.type="single";let Ue=t.range(26,37),$e=t.range(25,36),xe=Pe()*t.range(.9,1.3);if(De(D+t.range(-2,2),F+t.range(-2,2),Ue,$e,xe,Ge()),t.chance(.75)){let vt=t.chance(.35),Qe=t.int(0,3),St=vt?t.range(3,5):t.range(9,16),it=Xe(xe*t.range(.3,.75),8,xe-2);Qe===0&&Ke(D,F+$e/2+.2,0,St,vt,null,null,it),Qe===1&&Ke(D,F-$e/2-.2,1,St,vt,null,null,it),Qe===2&&Ke(D+Ue/2+.2,F,2,St,vt,null,null,it),Qe===3&&Ke(D-Ue/2-.2,F,3,St,vt,null,null,it)}}if(fe>=.24&&t.chance(.25)){let Ue=t.int(0,3),$e=t.range(5,9),xe=[F+20.5,F-20.5,D+20.5,D-20.5];Ue===0&&Ke(D+4,xe[0],0,$e,!1,null,null,4.5),Ue===1&&Ke(D-4,xe[1],1,$e,!1,null,null,4.5),Ue===2&&Ke(xe[2],F-4,2,$e,!1,null,null,4.5),Ue===3&&Ke(xe[3],F+4,3,$e,!1,null,null,4.5)}}if(Re.forEach((A,D)=>{if(!A.length)return;let F=qn(A,!1),Y=new re(F,Ie[D]);i.add(Y),A.forEach(ee=>ee.dispose())}),pe.length){let A=qn(pe,!1);i.add(new re(A,K)),pe.forEach(D=>D.dispose())}if(Fe.length){let A=qn(Fe,!1);i.add(new re(A,ue)),Fe.forEach(D=>D.dispose())}ct.forEach((A,D)=>{if(!A.length)return;let F=qn(A,!1);i.add(new re(F,be[D])),A.forEach(Y=>Y.dispose())});let nt=60,Ot=0;{d(nt,Ot,30,30);let F=new ut({color:1316389,roughness:.35,metalness:.8,envMapIntensity:.9}),Y=new et({color:5369087,toneMapped:!1}),ee=new yt;ee.position.set(nt,0,Ot),i.add(ee);let Ee=[{w:30,h:22,d:30},{w:24,h:42,d:24},{w:18,h:54,d:18},{w:12,h:42,d:12},{w:6.5,h:22,d:6.5}],Ae=0;for(let St=0;St<Ee.length;St+=1){let it=Ee[St],ts=new Le(it.w,it.h,it.d);Vp(ts,it.w,it.h,it.d,14,24);let Nn=new re(ts,new ut({map:we[4].map,emissiveMap:we[4].emissiveMap,emissive:16777215,emissiveIntensity:1.05,color:9278378,roughness:.4,metalness:.72,envMapIntensity:1}));if(Nn.position.y=Ae+it.h/2,ee.add(Nn),St<Ee.length-1){let $n=new re(new Le(it.w+1.2,.6,it.d+1.2),Y);$n.position.y=Ae+it.h,ee.add($n)}Ae+=it.h}let Z=new re(new Ut(.2,.55,34,6),ue);Z.position.y=Ae+16,ee.add(Z);let fe=new re(new In(.55,10,8),new et({color:16729981,toneMapped:!1}));fe.position.y=Ae+33,ee.add(fe),il(ee,qt("#ff477d"),16729981,new I(0,Ae+33,0),9,.9);let Ge=new et({color:4387839,transparent:!0,opacity:.5,blending:tt,side:wt,depthWrite:!1,toneMapped:!1});for(let St=0;St<3;St+=1){let it=new re(new Hn(18+St*7,.11,4,100),Ge);it.rotation.x=Math.PI/2,it.position.y=42+St*20,it.userData.speed=(St%2===0?1:-1)*(.05+St*.02),it.userData.bob=St*2,ee.add(it),c.push(it)}let Pe=new re(new Le(.45,130,.45),Y);Pe.position.set(0,85,16.4),ee.add(Pe);let Ue=ou(32,"NOVA","#53f3ff",!0),$e=new re(new Gt(7,23),new et({map:Ue,transparent:!0,blending:tt,depthWrite:!1,toneMapped:!1,side:wt}));$e.position.set(0,48,16.6),ee.add($e),il(ee,qt("#42f3ff"),4387839,new I(0,40,17),20,.24);let xe=new et({color:7330047,transparent:!0,opacity:.035,blending:tt,side:wt,depthWrite:!1,fog:!1}),vt=new ls(20,170,32,1,!0);vt.translate(0,-85,0);let Qe=new re(vt,xe);Qe.position.set(18,160,0),Qe.rotation.z=-.35,ee.add(Qe),il(ee,qt("#5ee8ff"),6220031,new I(0,168,0),30,.4)}{let A=new et({color:4716031,transparent:!0,opacity:.5,side:wt,depthWrite:!1,blending:tt,toneMapped:!1});for(let[fe,Ge]of[[11,.16],[20,.1],[26.5,.2]]){let Pe=new re(new Gi(fe-Ge,fe,96),A);Pe.rotation.x=-Math.PI/2,Pe.position.y=.19,i.add(Pe)}let D=new re(new Ut(4.2,5.2,1.1,48),new ut({color:922144,roughness:.25,metalness:.9,envMapIntensity:1.4}));D.position.set(0,.7,13),i.add(D),d(0,13,10,10);let F=new et({color:5631999,transparent:!0,opacity:.58,blending:tt,depthWrite:!1,wireframe:!0,toneMapped:!1}),Y=new re(new hs(3.3,0),F);Y.position.set(0,6.3,13),Y.userData.isHolo=!0,i.add(Y),c.push(Y);let ee=il(i,qt("#39eeff"),3796735,new I(0,6.3,13),16,.3);ee.userData.isHoloGlow=!0,i.userData.holoGlow=ee,c.push(ee);let Ee=new Ut(4.2,4.2,24,32,1,!0),Ae=new et({color:3732735,transparent:!0,opacity:.055,side:wt,depthWrite:!1,blending:tt}),Z=new re(Ee,Ae);Z.position.set(0,12,13),i.add(Z),i.userData.plazaBeam=Z}let bt=[];for(let A of H)if(A.type==="park")for(let D=0;D<9;D+=1)bt.push({x:A.cx+t.range(-18,18),z:A.cz+t.range(-18,18),s:t.range(.8,1.4)});for(let A of H)A.type!=="park"&&t.chance(.45)&&bt.push({x:A.cx+(t.chance(.5)?-20.2:20.2),z:A.cz+t.range(-14,14),s:t.range(.75,1.15)});for(let A of[[-23,-19],[23,-19],[-24,20],[24,20],[-16,24],[16,24]])bt.push({x:A[0],z:A[1],s:.95});let tn=new Ut(.15,.24,4.5,6),Ct=new ut({color:2760737,roughness:.92}),xn=new _n(tn,Ct,bt.length),Bt=new Hi(2.2,1),hn=new ut({color:1854534,roughness:.82,metalness:.1,emissive:861987,emissiveIntensity:.6}),nn=new _n(Bt,hn,bt.length*2),ze=new It;bt.forEach((A,D)=>{ze.position.set(A.x,2.2*A.s,A.z),ze.scale.set(A.s,A.s,A.s),ze.rotation.y=t()*dt,ze.updateMatrix(),xn.setMatrixAt(D,ze.matrix);for(let F=0;F<2;F+=1){ze.position.set(A.x+(F===0?0:.8*A.s)*(t()-.5),4.3*A.s+F*1.1*A.s,A.z+(t()-.5)*.8);let Y=A.s*(F===0?1:.68);ze.scale.set(Y,Y*1.15,Y),ze.rotation.y=t()*dt,ze.updateMatrix(),nn.setMatrixAt(D*2+F,ze.matrix)}}),xn.instanceMatrix.needsUpdate=!0,nn.instanceMatrix.needsUpdate=!0,i.add(xn,nn);let B=[];for(let A of Ji)for(let D=-195;D<=195;D+=39)B.push({x:A+8.8,z:D}),B.push({x:A-8.8,z:D+19.5});for(let A of Ji)for(let D=-176;D<=176;D+=39)B.push({x:D+9.5,z:A+8.8}),B.push({x:D+28.5,z:A-8.8});let un=new Ut(.07,.12,5.8,6);un.translate(0,2.9,0);let Et=new ut({color:1448484,roughness:.55,metalness:.7}),Mt=new _n(un,Et,B.length),Se=new Le(.5,.16,1.5);Se.translate(0,5.78,0);let Dt=new _n(Se,new et({color:16765344,toneMapped:!1}),B.length),Ve=[],qe=new Gt(9,9);qe.rotateX(-Math.PI/2);let C=new _n(qe,new et({map:qt("#ffae70"),transparent:!0,opacity:.22,blending:tt,depthWrite:!1,toneMapped:!1}),B.length);B.forEach((A,D)=>{ze.position.set(A.x,0,A.z),ze.rotation.set(0,0,0),ze.scale.set(1,1,1),ze.updateMatrix(),Mt.setMatrixAt(D,ze.matrix),Dt.setMatrixAt(D,ze.matrix),ze.position.set(A.x,.03,A.z),ze.updateMatrix(),C.setMatrixAt(D,ze.matrix),Ve.push(A.x,5.7,A.z)}),[Mt,Dt,C].forEach(A=>{A.instanceMatrix.needsUpdate=!0,i.add(A)});let v=new _t;v.setAttribute("position",new rt(Ve,3));let V=new Mi(v,new ki({size:2.1,map:qt("#ffb27b"),color:16757371,transparent:!0,opacity:.6,depthWrite:!1,blending:tt,sizeAttenuation:!0}));i.add(V);let le=new et({color:3929343,transparent:!0,opacity:.08,blending:tt,depthWrite:!1,side:wt,toneMapped:!1});for(let A=0;A<26;A+=1){let D=new re(new Gt(t.range(3,9),t.range(10,26)),le.clone());D.material.color.setHex(au[A%au.length]),D.rotation.x=-Math.PI/2,D.rotation.z=t()*dt,D.position.set(t.range(-200,200),.115,t.range(-200,200)),i.add(D)}let se=new ut({color:461588,roughness:.04,metalness:1,transparent:!0,opacity:.9,envMapIntensity:1.8,depthWrite:!1});for(let A=0;A<46;A+=1){let D=t.range(2.5,11),F=t.range(1.2,5),Y=new re(new cs(1,20),se);Y.scale.set(D,F,1),Y.rotation.x=-Math.PI/2,Y.rotation.z=t()*dt,Y.position.set(t.range(-205,205),.12,t.range(-205,205)),Y.renderOrder=1,i.add(Y)}let ye=new Le(2.8,.8,2.8),ve=new ut({color:1843241,roughness:.7,metalness:.25}),te=new Hi(1.1,1),Q=[];for(let A of[0,1,2,3]){let D=A*Math.PI/2+Math.PI/4;Q.push({x:Math.cos(D)*24.5,z:Math.sin(D)*24.5})}for(let A=0;A<26;A+=1){let D=t.pick(H);!D||D.type==="park"||Q.push({x:D.cx+(t.chance(.5)?-20:20),z:D.cz+t.range(-16,16)})}let _e=new _n(ye,ve,Q.length),L=new _n(te,hn,Q.length);Q.forEach((A,D)=>{ze.position.set(A.x,.4,A.z),ze.rotation.set(0,t()*dt,0),ze.scale.set(1,1,1),ze.updateMatrix(),_e.setMatrixAt(D,ze.matrix),ze.position.set(A.x,1.45,A.z),ze.scale.set(.9,.75,.9),ze.updateMatrix(),L.setMatrixAt(D,ze.matrix)}),i.add(_e,L);let ne=new Le(4,.22,1.1),j=new Le(.18,.6,.8),me=[];for(let A of[-6,6])for(let D of[-18,25]){let F=ne.clone();F.translate(A,.65,D),me.push(F);for(let Y of[-1.6,1.6]){let ee=j.clone();ee.translate(A+Y,.3,D),me.push(ee)}}let de=new re(qn(me,!1),new ut({color:2369070,roughness:.5,metalness:.5}));i.add(de),me.forEach(A=>A.dispose());let ge=[];for(let A=0;A<110;A+=1){let D=t()*dt,F=t.range(250,470),Y=t.range(15,55),ee=t.range(15,55),Ee=t.range(40,210),Ae=new Le(Y,Ee,ee);Ae.translate(Math.cos(D)*F,Ee/2-2,Math.sin(D)*F),ge.push(Ae)}let ke=new re(qn(ge,!1),new ut({color:592918,roughness:.92,metalness:.25,emissive:527128,emissiveIntensity:.65}));i.add(ke),ge.forEach(A=>A.dispose());let je=[];for(let A=0;A<70;A+=1){let D=t()*dt,F=t.range(260,450);je.push(Math.cos(D)*F,t.range(40,190),Math.sin(D)*F)}let he=new _t;he.setAttribute("position",new rt(je,3));let He=new Mi(he,new ki({color:16751462,size:1.2,map:qt("#ff9b66"),transparent:!0,opacity:.5,depthWrite:!1,blending:tt,sizeAttenuation:!0}));i.add(He);let Ze=new yt;for(let A=0;A<2;A+=1){let D=new ls(18,180,28,1,!0);D.translate(0,-90,0);let F=new re(D,new et({color:A?16727710:4516351,transparent:!0,opacity:.03,depthWrite:!1,side:wt,blending:tt,fog:!1}));F.position.set(A?-130:160,170,A?120:-90),F.rotation.z=A?.35:-.3,Ze.add(F)}i.add(Ze);let Me=[2370104,3024435,1648172,3810344,1908264,3158074],gt=A=>{let D=new yt,F=new ut({color:A,roughness:.28,metalness:.7,envMapIntensity:1.2}),Y=new re(new Le(1.85,.55,4.2),F);Y.position.y=.62,D.add(Y);let ee=new re(new Le(1.5,.5,1.9),new ut({color:659740,roughness:.12,metalness:.6}));ee.position.set(0,1.05,-.2),D.add(ee);let Ee=new Ut(.34,.34,.25,10);Ee.rotateZ(Math.PI/2);let Ae=new ut({color:526604,roughness:.9});for(let[Ge,Pe]of[[-.92,1.35],[.92,1.35],[-.92,-1.35],[.92,-1.35]]){let Ue=new re(Ee,Ae);Ue.position.set(Ge,.34,Pe),D.add(Ue)}let Z=new et({color:16773328,toneMapped:!1});for(let Ge of[-.62,.62]){let Pe=new re(new Le(.38,.13,.06),Z);Pe.position.set(Ge,.68,2.11),D.add(Pe)}let fe=new re(new Le(1.35,.1,.05),new et({color:16724046,toneMapped:!1}));return fe.position.set(0,.68,-2.11),D.add(fe),i.add(D),D};for(let A=0;A<10;A+=1){let D=A%2===0?"x":"z",F=Ji[(A*3+1)%Ji.length],Y=A%4<2?1:-1,ee=Y*4.2,Ee=gt(Me[A%Me.length]),Ae=-190+A*47%380,Z=t.range(8,14);r.push({mesh:Ee,axis:D,line:F,dir:Y,lane:ee,start:Ae,speed:Z,t:Ae}),Ee.rotation.y=D==="x"?Y>0?Math.PI/2:-Math.PI/2:Y>0?0:Math.PI}let Ft=qn([new Le(.46,.85,.28).translate(0,1.05,0),new Le(.16,.55,.2).translate(-.13,.35,0),new Le(.16,.55,.2).translate(.13,.35,0),new Le(.13,.65,.16).translate(-.31,1.02,0),new Le(.13,.65,.16).translate(.31,1.02,0)],!1),Mn=32,Pi=new _n(Ft,new ut({color:16777215,roughness:.88,metalness:.05}),Mn),li=new _n(new In(.16,8,6),new ut({color:16777215,roughness:.75}),Mn),Dl=new ls(.55,.24,10),Ii=new _n(Dl,new ut({color:16777215,roughness:.5,metalness:.2}),Mn),Cr=[3488333,4926786,1915974,4470564,2368570,4144966,2241838],hi=[16723349,3205375,16757837,10120191,1711144,3817808],ws=[14265226,10382415,7293752,15780006,12223074],Yo=H.filter(A=>A.type&&A.type!=="park");for(let A=0;A<Mn;A+=1){let D=t.pick(Yo);o.push({cx:D.cx,cz:D.cz,angle:t()*dt,radius:t.range(17.2,20.4),speed:t.range(.35,.85)*(t.chance(.5)?1:-1),color:t.pick(Cr),umbrella:t.chance(.55),umbrellaColor:t.pick(hi),skin:t.pick(ws),phase:t()*dt,scale:t.range(.88,1.08)}),Pi.setColorAt(A,new Ne(t.pick(Cr))),li.setColorAt(A,new Ne(t.pick(ws))),Ii.setColorAt(A,new Ne(o[A].umbrellaColor))}Pi.instanceColor.needsUpdate=!0,li.instanceColor.needsUpdate=!0,Ii.instanceColor.needsUpdate=!0,i.add(Pi,li,Ii);let Cs=1500,An=new Float32Array(Cs*6),As=new Float32Array(Cs*2);for(let A=0;A<Cs;A+=1){let D=(t()-.5)*74,F=(t()-.5)*74,Y=t()*34,ee=.6+t()*1.4;An[A*6]=D,An[A*6+1]=Y,An[A*6+2]=F,An[A*6+3]=D+.08,An[A*6+4]=Y+ee,An[A*6+5]=F;let Ee=17+t()*12;As[A*2]=Ee,As[A*2+1]=Ee}let Rs=new _t;Rs.setAttribute("position",new Tt(An,3)),Rs.setAttribute("aSpeed",new Tt(As,1));let ui=new Lt({transparent:!0,depthWrite:!1,blending:tt,uniforms:{uTime:{value:0}},vertexShader:`
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
      void main() {
        gl_FragColor = vec4(0.57, 0.75, 0.95, 0.30 * vAlpha);
      }
    `}),Li=new as(Rs,ui);Li.frustumCulled=!1,i.add(Li);let Ar=[];for(let A of H)if(!(!A.type||A.type==="park"))for(let[D,F]of[[20.2,6],[-20.2,-6],[6,20.2],[-6,-20.2]]){let Y=A.cx+D,ee=A.cz+F;s.some(Ae=>Y>Ae.minX-1.8&&Y<Ae.maxX+1.8&&ee>Ae.minZ-1.8&&ee<Ae.maxZ+1.8)||Math.hypot(Y,ee)<48||Ar.push({x:Y,z:ee,name:Gp[(A.i+A.j*3)%Gp.length]})}let Yn=[],Nl=Ar.sort(()=>t.next()-.5);for(let A of Nl)if(Yn.every(D=>Math.hypot(D.x-A.x,D.z-A.z)>58)&&Yn.push(A),Yn.length>=9)break;for(;Yn.length<3;)Yn.push({x:-40+Yn.length*38,z:40,name:"NIGHT MARKET"});let Ul=[{x:7,z:-34,rot:Math.PI/2,color:2156287},{x:34,z:9,rot:0,color:16723349},{x:-34,z:-12,rot:Math.PI,color:16757837},{x:-9,z:66,rot:-Math.PI/2,color:11037695},{x:106,z:-34,rot:Math.PI/2,color:7077816}],Ol={bounds:Do.bounds,blocks:H,roads:Ji},Dn=new yt;Dn.position.set(l.x,.16,l.z);let S=new re(new Gi(5.6,7,80),new et({color:4585215,transparent:!0,opacity:.7,side:wt,depthWrite:!1,blending:tt,toneMapped:!1}));S.rotation.x=-Math.PI/2,Dn.add(S);let O=new re(new Ut(4.2,6.4,40,40,1,!0),new et({color:4387839,transparent:!0,opacity:.08,side:wt,depthWrite:!1,blending:tt,toneMapped:!1}));O.position.y=20,Dn.add(O);let $=new Tn(new yn({map:qt("#42f3ff"),transparent:!0,opacity:.8,blending:tt,depthWrite:!1,toneMapped:!1}));$.position.y=1.2,$.scale.set(18,18,1),Dn.add($),Dn.visible=!1,i.add(Dn);let G={colliders:s,shardSites:Yn,carSpawns:Ul,traffic:r,pedestrians:o,extraction:l,extractionGroup:Dn,spawn:h,metro:Ol,animatedRings:c,scene:i,flickerSigns:a,searchlights:Ze,rain:Li,rainMat:ui,dummy:ze,elapsed:0,quality:1,low:!1,update:W};function W(A,D,F,Y){G.elapsed=D,ui.uniforms.uTime.value=D,Li.position.x=F.x,Li.position.z=F.z,Li.visible=!!G.quality;let ee=G.low?.55:1;V.material.opacity=.6*ee,Ze.children.forEach((Z,fe)=>{Z.rotation.z=(fe?.3:-.3)+Math.sin(D*.08+fe*2)*.26,Z.material.opacity=(G.low?.014:.03)*(.75+Math.sin(D*.35+fe)*.25)}),c.forEach(Z=>{Z.userData.isHolo?(Z.rotation.y+=A*.55,Z.rotation.x+=A*.22,Z.position.y=6.3+Math.sin(D*1.3)*.35):Z.userData.isHoloGlow?(Z.position.y=6.3+Math.sin(D*1.3)*.35,Z.material.opacity=.24+Math.sin(D*2.2)*.07):(Z.rotation.z+=A*Z.userData.speed,Z.position.y+=Math.sin(D*.8+Z.userData.bob)*A*.12)});let Ee=i.userData.holoGlow;Ee&&(Ee.position.y=6.3+Math.sin(D*1.3)*.35);let Ae=i.userData.plazaBeam;Ae&&(Ae.material.opacity=.04+Math.sin(D*1.2)*.012),Dn.visible&&(S.rotation.z+=A*.35,$.material.opacity=.55+Math.sin(D*2.4)*.18,O.material.opacity=.05+Math.sin(D*1.8)*.018),a.forEach(Z=>{let fe=Math.sin(D*Z.speed+Z.phase);Z.mesh.material.opacity=Z.base*(.85+fe*.15),Z.broken&&Math.sin(D*21+Z.phase)>.92&&(Z.mesh.material.opacity*=.15)});for(let Z of r){let fe=Z.speed;if(F){let Ge=0;Z.axis==="x"?(Ge=(F.x-Z.t)*Z.dir,Ge>0&&Ge<13&&Math.abs(F.z-(Z.line+Z.lane))<4.5&&(fe=0)):(Ge=(F.z-Z.t)*Z.dir,Ge>0&&Ge<13&&Math.abs(F.x-(Z.line+Z.lane))<4.5&&(fe=0))}Z.t+=fe*Z.dir*A,Z.t>215&&(Z.t=-215),Z.t<-215&&(Z.t=215),Z.axis==="x"?Z.mesh.position.set(Z.t,.02,Z.line+Z.lane):Z.mesh.position.set(Z.line+Z.lane,.02,Z.t)}for(let Z=0;Z<o.length;Z+=1){let fe=o[Z];fe.angle+=fe.speed/fe.radius*A;let Ge=fe.cx+Math.cos(fe.angle)*fe.radius,Pe=fe.cz+Math.sin(fe.angle)*fe.radius,Ue=Math.sin(fe.angle*10+fe.phase)*.035;ze.position.set(Ge,.2+Ue,Pe),ze.rotation.set(0,-fe.angle+(fe.speed>0?Math.PI/2:-Math.PI/2),0),ze.scale.setScalar(fe.scale),ze.updateMatrix(),Pi.setMatrixAt(Z,ze.matrix),ze.position.y=1.86*fe.scale+Ue,ze.scale.setScalar(fe.scale),ze.updateMatrix(),li.setMatrixAt(Z,ze.matrix),ze.position.set(Ge,(fe.umbrella?2.45:0)*fe.scale+Ue,Pe),ze.rotation.set(fe.umbrella?.12:0,0,fe.umbrella?.1:0),ze.scale.setScalar(fe.scale),ze.updateMatrix(),Ii.setMatrixAt(Z,ze.matrix)}Pi.instanceMatrix.needsUpdate=!0,li.instanceMatrix.needsUpdate=!0,Ii.instanceMatrix.needsUpdate=!0}return G}var Do,Ji,au,Gp,Xp=lt(()=>{an();Dp();nl();Ai();Do={cell:60,grid:7,blockHalf:22,bounds:218,roadWidth:16},Ji=[-210,-150,-90,-30,30,90,150,210],au=[3732991,16723349,11037695,16757837,7077816],Gp=["KANTO","ORBITAL","AURORA","HELIX","ECHO","VANTA","NEXUS","CHROME"]});var _s,sl,qp=lt(()=>{an();nl();Ai();_s=900,sl=class{constructor(e){this.scene=e,this.particles=[],this.particleCursor=0,this.particlePositions=new Float32Array(_s*3),this.particleColors=new Float32Array(_s*3),this.particleSizes=new Float32Array(_s),this.particleAlphas=new Float32Array(_s),this.tmpColor=new Ne;let t=new _t;t.setAttribute("position",new Tt(this.particlePositions,3)),t.setAttribute("aColor",new Tt(this.particleColors,3)),t.setAttribute("aSize",new Tt(this.particleSizes,1)),t.setAttribute("aAlpha",new Tt(this.particleAlphas,1)),this.particleGeo=t,this.particleTex=qt("#ffffff"),this.particleMat=new Lt({transparent:!0,depthWrite:!1,blending:tt,uniforms:{uMap:{value:this.particleTex},uScale:{value:700}},vertexShader:`
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
      `}),this.particlePoints=new Mi(t,this.particleMat),this.particlePoints.frustumCulled=!1,this.particlePoints.renderOrder=4,e.add(this.particlePoints);for(let s=0;s<_s;s+=1)this.particles.push({alive:!1,x:0,y:-999,z:0,vx:0,vy:0,vz:0,life:0,maxLife:1,size:1,drag:0,gravity:0,endSize:0,r:1,g:1,b:1}),this.particleAlphas[s]=0;this.particleGeo.attributes.position.needsUpdate=!0,this.particleGeo.attributes.aColor.needsUpdate=!0,this.particleGeo.attributes.aSize.needsUpdate=!0,this.particleGeo.attributes.aAlpha.needsUpdate=!0,this.tracerCount=20,this.tracers=[],this.tracerPositions=new Float32Array(this.tracerCount*6),this.tracerColors=new Float32Array(this.tracerCount*6);let n=new _t;n.setAttribute("position",new Tt(this.tracerPositions,3)),n.setAttribute("color",new Tt(this.tracerColors,3)),this.tracerGeo=n,this.tracerLines=new as(n,new ir({vertexColors:!0,transparent:!0,opacity:1,blending:tt,depthWrite:!1,toneMapped:!1})),this.tracerLines.frustumCulled=!1,this.tracerLines.renderOrder=4,e.add(this.tracerLines);for(let s=0;s<this.tracerCount;s+=1)this.tracers.push({life:0,maxLife:.1,r:1,g:1,b:1});this.shockwaves=[],this.flashes=[],this.time=0}setViewport(e,t=62){this.particleMat.uniforms.uScale.value=e/(2*Math.tan(t*Math.PI/360))}spawn(e){let t=this.particles[this.particleCursor];this.particleCursor=(this.particleCursor+1)%_s;let n=e.spread??0,s=Math.random()*dt,r=Math.random()*n;return t.alive=!0,t.x=e.x+Math.cos(s)*r,t.y=e.y+(Math.random()-.5)*(e.spreadY??0),t.z=e.z+Math.sin(s)*r,t.vx=(e.vx??0)+(Math.random()-.5)*(e.vel??0),t.vy=(e.vy??0)+(Math.random()-.3)*(e.vel??0),t.vz=(e.vz??0)+(Math.random()-.5)*(e.vel??0),t.life=e.life??.6,t.maxLife=t.life,t.size=e.size??.5,t.endSize=e.endSize??t.size*.2,t.gravity=e.gravity??0,t.drag=e.drag??.96,this.tmpColor.set(e.color??16777215),t.r=this.tmpColor.r,t.g=this.tmpColor.g,t.b=this.tmpColor.b,t}muzzleFlash(e,t=16769955,n=null){for(let s=0;s<5;s+=1)this.spawn({x:e.x,y:e.y,z:e.z,vx:n?n.x*2.5:0,vy:n?n.y*2.5+.2:.4,vz:n?n.z*2.5:0,vel:1.4,life:.09+Math.random()*.06,size:.45+Math.random()*.25,endSize:.1,color:t,drag:.8});this.spawn({x:e.x,y:e.y,z:e.z,life:.08,size:1.15,endSize:.2,color:t})}bulletImpact(e,t,n=10480383){let s=t||new I(0,1,0);for(let r=0;r<8;r+=1)this.spawn({x:e.x,y:e.y,z:e.z,vx:s.x*2.2+(Math.random()-.5)*4,vy:s.y*2.2+Math.random()*3.4,vz:s.z*2.2+(Math.random()-.5)*4,life:.2+Math.random()*.32,size:.18+Math.random()*.2,endSize:0,color:n,gravity:9,drag:.95});this.spawn({x:e.x,y:e.y,z:e.z,life:.1,size:.7,endSize:.1,color:n})}enemyHit(e,t=16738901){for(let n=0;n<10;n+=1)this.spawn({x:e.x,y:e.y,z:e.z,vel:5,life:.22+Math.random()*.3,size:.14+Math.random()*.2,endSize:0,color:t,gravity:5})}explosion(e,t=16734781,n=1){for(let s=0;s<46;s+=1)this.spawn({x:e.x,y:e.y,z:e.z,vel:9*n,vy:4,life:.5+Math.random()*.7,size:.6+Math.random()*1.4,endSize:.1,color:s%3===0?16769184:t,gravity:5,drag:.94});for(let s=0;s<12;s+=1)this.spawn({x:e.x,y:e.y,z:e.z,vel:3,vy:2,life:1+Math.random()*.8,size:1.5+Math.random()*2,endSize:4,color:1645350,gravity:-.3,drag:.97});this.spawnShockwave(e,t,3*n,.6),this.flash(e,t,18*n,.22)}pickup(e,t=5240319){for(let n=0;n<36;n+=1){let s=Math.random()*dt,r=.5+Math.random()*1.4;this.spawn({x:e.x+Math.cos(s)*r,y:e.y-1+Math.random()*2,z:e.z+Math.sin(s)*r,vx:Math.cos(s)*5,vy:1+Math.random()*5,vz:Math.sin(s)*5,life:.5+Math.random()*.7,size:.2+Math.random()*.35,endSize:0,color:n%4===0?16777215:t,gravity:2,drag:.94})}this.spawnShockwave(new I(e.x,.25,e.z),t,6,.8),this.flash(new I(e.x,e.y,e.z),t,16,.35)}exitCar(e){for(let t=0;t<10;t+=1)this.spawn({x:e.x,y:.2,z:e.z,vel:1.4,life:.3,size:.3,endSize:0,color:7234170})}drift(e,t=1){this.spawn({x:e.x,y:.22+Math.random()*.2,z:e.z,vx:(Math.random()-.5)*1.6,vy:.25+Math.random()*.45,vz:(Math.random()-.5)*1.6,vel:.8,life:.5+Math.random()*.6,size:(.7+Math.random()*.7)*t,endSize:1.8*t,color:9476008,drag:.94,gravity:-.2})}boostTrail(e,t=3532543){this.spawn({x:e.x+(Math.random()-.5)*.35,y:e.y,z:e.z,vx:(Math.random()-.5)*.7,vy:(Math.random()-.5)*.4,vz:(Math.random()-.5)*.7,life:.2+Math.random()*.2,size:.5+Math.random()*.35,endSize:.05,color:t,drag:.9})}sparkle(e,t=10418175){this.spawn({x:e.x+(Math.random()-.5)*1.5,y:e.y+(Math.random()-.5)*1.5,z:e.z+(Math.random()-.5)*1.5,vy:.3,life:.8+Math.random()*.5,size:.16+Math.random()*.1,endSize:0,color:t,gravity:.2})}tracer(e,t,n=11072255){let s=this.tracers.find(l=>l.life<=0),r=this.tracers.indexOf(s),o=r>=0?r:0,a=this.tracers[o];a.life=.08,a.maxLife=.08,this.tmpColor.set(n),a.r=this.tmpColor.r,a.g=this.tmpColor.g,a.b=this.tmpColor.b;let c=this.tracerPositions;c[o*6]=e.x,c[o*6+1]=e.y,c[o*6+2]=e.z,c[o*6+3]=t.x,c[o*6+4]=t.y,c[o*6+5]=t.z}spawnShockwave(e,t,n=3,s=.6){let r=new re(new Gi(.5,.75,48),new et({color:t,transparent:!0,opacity:.8,blending:tt,side:wt,depthWrite:!1,toneMapped:!1}));r.rotation.x=-Math.PI/2,r.position.copy(e),r.position.y=Math.max(.3,e.y),this.scene.add(r),this.shockwaves.push({mesh:r,life:s,maxLife:s,radius:n})}flash(e,t,n=12,s=.25){let r=new Tn(new yn({map:this.particleTex,color:t,transparent:!0,opacity:.9,blending:tt,depthWrite:!1,toneMapped:!1}));r.position.copy(e),r.scale.set(n,n,1),this.scene.add(r),this.flashes.push({sprite:r,life:s,maxLife:s})}update(e){for(let t=0;t<_s;t+=1){let n=this.particles[t];if(!n.alive){this.particleAlphas[t]=0;continue}if(n.life-=e,n.life<=0){n.alive=!1,this.particleAlphas[t]=0;continue}n.vx*=n.drag,n.vy=n.vy*n.drag-n.gravity*e,n.vz*=n.drag,n.x+=n.vx*e,n.y+=n.vy*e,n.z+=n.vz*e,n.y<.05&&(n.y=.05,n.vy*=-.3,n.vx*=.7,n.vz*=.7);let s=1-n.life/n.maxLife,r=n.size+(n.endSize-n.size)*s,o=Math.sin(Math.min(1,s)*Math.PI)*.9;this.particlePositions[t*3]=n.x,this.particlePositions[t*3+1]=n.y,this.particlePositions[t*3+2]=n.z,this.particleColors[t*3]=n.r,this.particleColors[t*3+1]=n.g,this.particleColors[t*3+2]=n.b,this.particleSizes[t]=r,this.particleAlphas[t]=o}this.particleGeo.attributes.position.needsUpdate=!0,this.particleGeo.attributes.aColor.needsUpdate=!0,this.particleGeo.attributes.aSize.needsUpdate=!0,this.particleGeo.attributes.aAlpha.needsUpdate=!0;for(let t=0;t<this.tracerCount;t+=1){let n=this.tracers[t];n.life>0&&(n.life-=e);let s=Math.max(0,n.life/Math.max(.001,n.maxLife)),r=t*6;this.tracerColors[r]=n.r*s,this.tracerColors[r+1]=n.g*s,this.tracerColors[r+2]=n.b*s,this.tracerColors[r+3]=n.r*s,this.tracerColors[r+4]=n.g*s,this.tracerColors[r+5]=n.b*s}this.tracerGeo.attributes.position.needsUpdate=!0,this.tracerGeo.attributes.color.needsUpdate=!0;for(let t=this.shockwaves.length-1;t>=0;t-=1){let n=this.shockwaves[t];n.life-=e;let s=1-n.life/n.maxLife,r=1+s*n.radius;n.mesh.scale.set(r,r,1),n.mesh.material.opacity=(1-s)*.7,n.life<=0&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.shockwaves.splice(t,1))}for(let t=this.flashes.length-1;t>=0;t-=1){let n=this.flashes[t];n.life-=e,n.sprite.material.opacity=Math.max(0,n.life/n.maxLife)*.9,n.life<=0&&(this.scene.remove(n.sprite),n.sprite.material.dispose(),this.flashes.splice(t,1))}}}});var rl,Yp=lt(()=>{Ai();rl=class{constructor(){this.ctx=null,this.started=!1,this.muted=!1,this.master=null,this.musicGain=null,this.ambientGain=null,this.engineGain=null,this.tireGain=null,this.engineOscA=null,this.engineOscB=null,this.engineFilter=null,this.noiseBuffer=null,this.musicTimer=null,this.nextNoteTime=0,this.step=0,this.lastFootstep=0,this.lastSqueal=0}async start(){if(this.started||this._initializing){this.ctx?.state==="suspended"&&await this.ctx.resume();return}this._initializing=!0;try{let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e({latencyHint:"interactive"}),await this.ctx.resume(),this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.8,this.master.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.16,this.musicGain.connect(this.master),this.ambientGain=this.ctx.createGain(),this.ambientGain.gain.value=.16,this.ambientGain.connect(this.master),this.noiseBuffer=this._makeNoise(2.5),this._buildAmbience(),this._buildEngine(),this._startMusic(),this.setMuted(this.muted),this.started=!0}catch(e){console.warn("Audio failed to start",e),this.started=!1}finally{this._initializing=!1}}setMuted(e){this.muted=e,this.master&&this.ctx&&(this.master.gain.cancelScheduledValues(this.ctx.currentTime),this.master.gain.linearRampToValueAtTime(e?0:.8,this.ctx.currentTime+.12))}_makeNoise(e=1){let t=Math.floor(this.ctx.sampleRate*e),n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),s=n.getChannelData(0);for(let r=0;r<t;r+=1)s[r]=Math.random()*2-1;return n}_noiseSource(e=1){let t=this.ctx.createBufferSource();return t.buffer=this.noiseBuffer,t.loop=!0,t.loopEnd=e,t}_buildAmbience(){let e=this.ctx,t=this._noiseSource(2.5),n=e.createBiquadFilter();n.type="highpass",n.frequency.value=900;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=5400;let r=e.createGain();r.gain.value=.085,t.connect(n).connect(s).connect(r).connect(this.ambientGain),t.start(),this.rainGain=r;let o=this._noiseSource(2.5),a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=160;let c=e.createGain();c.gain.value=.14,o.connect(a).connect(c).connect(this.ambientGain),o.start();for(let p of[43,54.5]){let y=e.createOscillator();y.type="sine",y.frequency.value=p;let g=e.createGain();g.gain.value=.045,y.connect(g).connect(this.ambientGain),y.start()}let l=e.createOscillator();l.type="sine",l.frequency.value=620;let h=e.createOscillator();h.type="sine",h.frequency.value=.09;let d=e.createGain();d.gain.value=90,h.connect(d).connect(l.frequency);let u=e.createGain();u.gain.value=.006;let f=e.createStereoPanner();f.pan.value=.55,l.connect(u).connect(f).connect(this.ambientGain),l.start(),h.start()}_buildEngine(){let e=this.ctx;this.engineFilter=e.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=500,this.engineFilter.Q.value=2.5,this.engineGain=e.createGain(),this.engineGain.gain.value=0,this.engineFilter.connect(this.engineGain).connect(this.master),this.engineOscA=e.createOscillator(),this.engineOscA.type="sawtooth",this.engineOscA.frequency.value=50,this.engineOscB=e.createOscillator(),this.engineOscB.type="square",this.engineOscB.frequency.value=75;let t=e.createGain();t.gain.value=.5;let n=e.createGain();n.gain.value=.16,this.engineOscA.connect(t).connect(this.engineFilter),this.engineOscB.connect(n).connect(this.engineFilter),this.engineOscA.start(),this.engineOscB.start();let s=this._noiseSource(2.5),r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=2100,r.Q.value=1.8,this.tireGain=e.createGain(),this.tireGain.gain.value=0,s.connect(r).connect(this.tireGain).connect(this.master),s.start(),this.tireFilter=r}updateCar({active:e,speed:t=0,throttle:n=0,boosting:s=!1,drifting:r=!1}){if(!this.started||!this.engineGain)return;let o=this.ctx.currentTime,a=Math.abs(t),c=e?.055+Xe(a/50,0,1)*.09:0;this.engineGain.gain.setTargetAtTime(c,o,.08);let l=46+a*4.1+Math.abs(n)*16+(s?22:0);this.engineOscA.frequency.setTargetAtTime(l,o,.04),this.engineOscB.frequency.setTargetAtTime(l*1.505,o,.04),this.engineFilter.frequency.setTargetAtTime(340+a*32+(s?450:0),o,.06);let h=e&&r?Xe(a/28,.2,1)*.09:0;this.tireGain.gain.setTargetAtTime(h,o,.06),this.tireFilter&&this.tireFilter.frequency.setTargetAtTime(1800+a*16,o,.1)}footstep(e=!1){if(!this.started)return;let t=performance.now();if(t-this.lastFootstep<(e?190:300))return;this.lastFootstep=t;let n=this.ctx,s=n.createBufferSource();s.buffer=this.noiseBuffer,s.loop=!1;let r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=e?450:320,r.Q.value=1.4;let o=n.createGain();o.gain.setValueAtTime(e?.05:.026,n.currentTime),o.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.075),s.connect(r).connect(o).connect(this.master),s.start(n.currentTime,Math.random()*1.8,.09)}jump(){this._tone(220,.08,.02,"sine",110)}land(){this._noiseBurst(.1,180,.04)}gunshot(e=!0){if(!this.started)return;let t=this.ctx,n=t.currentTime,s=t.createBufferSource();s.buffer=this.noiseBuffer;let r=t.createBiquadFilter();r.type="highpass",r.frequency.value=e?700:300;let o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=e?2600:6e3;let a=t.createGain();a.gain.setValueAtTime(e?.11:.22,n),a.gain.exponentialRampToValueAtTime(1e-4,n+(e?.11:.22)),s.connect(r).connect(o).connect(a).connect(this.master),s.start(n,Math.random(),.2);let c=t.createOscillator();c.type="sine",c.frequency.setValueAtTime(120,n),c.frequency.exponentialRampToValueAtTime(48,n+.1);let l=t.createGain();l.gain.setValueAtTime(.12,n),l.gain.exponentialRampToValueAtTime(1e-4,n+.11),c.connect(l).connect(this.master),c.start(n),c.stop(n+.13)}enemyShot(){if(!this.started)return;let e=this.ctx,t=e.currentTime,n=e.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(920,t),n.frequency.exponentialRampToValueAtTime(180,t+.16);let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=1800;let r=e.createGain();r.gain.setValueAtTime(.045,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.18),n.connect(s).connect(r).connect(this.master),n.start(t),n.stop(t+.2)}hitmarker(){this._tone(1350,.045,.025,"square",1100)}enemyHit(){this.started&&(this._noiseBurst(.08,1200,.03),this._tone(160,.08,.025,"square",90))}explosion(){if(!this.started)return;let e=this.ctx,t=e.currentTime;this._noiseBurst(.7,240,.3);let n=e.createOscillator();n.type="sine",n.frequency.setValueAtTime(90,t),n.frequency.exponentialRampToValueAtTime(28,t+.55);let s=e.createGain();s.gain.setValueAtTime(.26,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.6),n.connect(s).connect(this.master),n.start(t),n.stop(t+.62)}pickup(){if(!this.started)return;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{setTimeout(()=>this._tone(t,.18,.04,"triangle",t*1.5),n*65)})}reload(){this._noiseBurst(.04,3200,.018),setTimeout(()=>this._noiseBurst(.06,1700,.024),170)}door(){this._noiseBurst(.12,300,.035),this._tone(95,.12,.03,"sine",60)}boost(){if(!this.started)return;let e=this.ctx,t=e.currentTime,n=e.createBufferSource();n.buffer=this.noiseBuffer;let s=e.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(350,t),s.frequency.exponentialRampToValueAtTime(3400,t+.35),s.Q.value=1.2;let r=e.createGain();r.gain.setValueAtTime(.001,t),r.gain.linearRampToValueAtTime(.08,t+.08),r.gain.exponentialRampToValueAtTime(1e-4,t+.5),n.connect(s).connect(r).connect(this.master),n.start(t,0,.6)}ping(){this._tone(880,.12,.03,"sine",1320)}uiClick(){this._tone(520,.04,.015,"square",620)}damage(){this.started&&(this._noiseBurst(.16,420,.06),this._tone(70,.18,.05,"sine",40))}_tone(e,t,n,s="sine",r=e){if(!this.started||!this.ctx)return;let o=this.ctx,a=o.currentTime,c=o.createOscillator();c.type=s,c.frequency.setValueAtTime(e,a),r!==e&&c.frequency.exponentialRampToValueAtTime(Math.max(20,r),a+t);let l=o.createGain();l.gain.setValueAtTime(n,a),l.gain.exponentialRampToValueAtTime(1e-4,a+t),c.connect(l).connect(this.master),c.start(a),c.stop(a+t+.02)}_noiseBurst(e,t,n){if(!this.started||!this.ctx||!this.master)return;let s=this.ctx,r=s.currentTime,o=s.createBufferSource();o.buffer=this.noiseBuffer;let a=s.createBiquadFilter();a.type="bandpass",a.frequency.value=t,a.Q.value=1.5;let c=s.createGain();c.gain.setValueAtTime(n,r),c.gain.exponentialRampToValueAtTime(1e-4,r+e),o.connect(a).connect(c).connect(this.master),o.start(r,Math.random()*1.6,e+.02)}_startMusic(){this.nextNoteTime=this.ctx.currentTime+.12,this.step=0;let e=()=>{if(this.ctx)for(;this.nextNoteTime<this.ctx.currentTime+.3;)this._scheduleStep(this.step,this.nextNoteTime),this.nextNoteTime+=60/96/4,this.step=(this.step+1)%64};this.musicTimer=setInterval(e,50),e()}_scheduleStep(e,t){if(!this.ctx||this.muted)return;let n=this.ctx,s=Math.floor(e/16),r=e%16,a=[55,43.65,65.41,49][s];if(r===0||r===8||s===3&&r===14){let c=n.createOscillator();c.type="sine",c.frequency.setValueAtTime(120,t),c.frequency.exponentialRampToValueAtTime(42,t+.14);let l=n.createGain();l.gain.setValueAtTime(.17,t),l.gain.exponentialRampToValueAtTime(1e-4,t+.24),c.connect(l).connect(this.musicGain),c.start(t),c.stop(t+.26)}if(r===4||r===12){let c=n.createBufferSource();c.buffer=this.noiseBuffer;let l=n.createBiquadFilter();l.type="bandpass",l.frequency.value=1900;let h=n.createGain();h.gain.setValueAtTime(.045,t),h.gain.exponentialRampToValueAtTime(1e-4,t+.16),c.connect(l).connect(h).connect(this.musicGain),c.start(t,Math.random()*1.4,.2)}if(r%2===0){let c=n.createBufferSource();c.buffer=this.noiseBuffer;let l=n.createBiquadFilter();l.type="highpass",l.frequency.value=7e3;let h=n.createGain();h.gain.setValueAtTime(r%4===0?.014:.007,t),h.gain.exponentialRampToValueAtTime(1e-4,t+.055),c.connect(l).connect(h).connect(this.musicGain),c.start(t,Math.random()*1.7,.08)}if(r%2===0){let c=n.createOscillator();c.type="sawtooth";let l=r%8===6?1.5:1;c.frequency.value=a*l;let h=n.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(380,t),h.frequency.exponentialRampToValueAtTime(180,t+.22),h.Q.value=3;let d=n.createGain();d.gain.setValueAtTime(.035,t),d.gain.exponentialRampToValueAtTime(1e-4,t+.22),c.connect(h).connect(d).connect(this.musicGain),c.start(t),c.stop(t+.24)}if(r%2===1||s===2){let c=[0,3,7,10,12,10,7,3],l=c[(e+s*2)%c.length],h=a*Math.pow(2,l/12)*4,d=n.createOscillator();d.type="triangle",d.frequency.value=h;let u=n.createBiquadFilter();u.type="lowpass",u.frequency.value=2400;let f=n.createGain();f.gain.setValueAtTime(.013,t),f.gain.exponentialRampToValueAtTime(1e-4,t+.2);let p=n.createStereoPanner();p.pan.value=Math.sin(e*.6)*.5,d.connect(u).connect(f).connect(p).connect(this.musicGain),d.start(t),d.stop(t+.22)}if(r===0)for(let c of[0,3,7]){let l=n.createOscillator();l.type="sawtooth",l.frequency.value=a*Math.pow(2,c/12)*2,l.detune.value=(Math.random()-.5)*10;let h=n.createBiquadFilter();h.type="lowpass",h.frequency.value=1e3;let d=n.createGain();d.gain.setValueAtTime(.001,t),d.gain.linearRampToValueAtTime(.009,t+.5),d.gain.linearRampToValueAtTime(1e-4,t+3.8),l.connect(h).connect(d).connect(this.musicGain),l.start(t),l.stop(t+4)}}}});function Qt(i,e={}){return new ut({color:i,roughness:.62,metalness:.25,...e})}function Ri(i,e=1){return new et({color:i,transparent:e<1,opacity:e,toneMapped:!1,blending:tt,depthWrite:!1})}function ol({color:i=3533311,skin:e=14265226,hostile:t=!1}={}){let n=new yt,s=t?{}:{emissive:3159880,emissiveIntensity:.45},r=t?{}:{emissive:2370105,emissiveIntensity:.45},o=t?{}:{emissive:e,emissiveIntensity:.22},a=Qt(t?2500145:3818070,{roughness:.75,metalness:.15,...s}),c=Qt(t?1579552:2896710,{roughness:.8,...r}),l=Ri(t?16723029:i,1),h=Ri(t?16721471:i,1),d=Qt(e,{roughness:.82,metalness:0,...o});if(!t){let K=new ni(10478335,10,6,2);K.position.set(0,2.3,-1),n.add(K)}let u=new yt;u.position.y=1.02,n.add(u);let f=new re(new Le(.52,.58,.3),a);f.position.y=.12,u.add(f);let p=new re(new Le(.58,.13,.34),Qt(724242,{roughness:.5,metalness:.5}));p.position.y=.43,u.add(p);let y=new re(new Le(.28,.035,.02),l);y.position.set(0,.19,.158),u.add(y);let g=new re(new Le(.5,.08,.3),Qt(526605,{roughness:.4,metalness:.6}));g.position.y=-.2,u.add(g);let m=new yt;m.position.y=.45,u.add(m);let _=new re(new Ut(.09,.11,.14,8),d);_.position.y=.02,m.add(_);let T=new re(new In(.175,12,10),Qt(t?2895674:3817810,{roughness:.55}));T.scale.set(.92,1.06,.94),T.position.y=.2,m.add(T);let M=new re(new Le(.25,.09,.06),h);M.position.set(0,.21,.155),m.add(M);let w=new re(new In(.19,10,8,0,Math.PI*2,0,Math.PI*.55),Qt(t?1118744:1053210,{roughness:.55}));w.position.y=.22,m.add(w);let E=new Le(.14,.54,.18),x=new Le(.12,.34,.15),b=K=>{let ue=new yt;ue.position.set(K*.34,.3,0),u.add(ue);let be=new re(E,a);be.position.y=-.2,ue.add(be);let Re=new yt;Re.position.y=-.46,ue.add(Re);let pe=new re(x,a);pe.position.y=-.14,Re.add(pe);let Fe=new re(new Le(.12,.12,.14),Qt(1052950));Fe.position.y=-.34,Re.add(Fe);let ct=new re(new Le(.145,.035,.185),l);return ct.position.y=-.2,ue.add(ct),{pivot:ue,lowerPivot:Re,side:K}},N=b(-1),R=b(1),U=new Le(.19,.62,.24),k=new Le(.16,.52,.2),H=K=>{let ue=new yt;ue.position.set(K*.13,.82,0),n.add(ue);let be=new re(U,c);be.position.y=-.3,ue.add(be);let Re=new yt;Re.position.y=-.62,ue.add(Re);let pe=new re(k,c);pe.position.y=-.24,Re.add(pe);let Fe=new re(new Le(.19,.15,.37),Qt(592398,{roughness:.5,metalness:.3}));Fe.position.set(0,-.52,.08),Re.add(Fe);let ct=new re(new Le(.17,.03,.22),l);return ct.position.set(0,-.38,.02),Re.add(ct),{pivot:ue,lowerPivot:Re,side:K}},P=H(-1),z=H(1),X=new re(new Le(.38,.44,.16),Qt(790036,{roughness:.55,metalness:.35}));X.position.set(0,.14,-.22),u.add(X);let q=new re(new Le(.2,.025,.02),l);q.position.set(0,.26,-.31),u.add(q);let ae=new yt,J=new re(new Le(.075,.12,.36),Qt(658449,{roughness:.35,metalness:.8}));ae.add(J);let ie=new re(new Ut(.026,.03,.23,6),Qt(2106411,{roughness:.4,metalness:.8}));ie.rotation.x=Math.PI/2,ie.position.set(0,.02,.26),ae.add(ie);let oe=new re(new Le(.02,.02,.18),l);oe.position.set(.045,.01,.1),ae.add(oe),ae.position.set(0,-.34,.18),R.lowerPivot.add(ae);let we=new Tn(new yn({map:qt("#ffe6b3"),color:16770739,transparent:!0,opacity:0,blending:tt,depthWrite:!1,toneMapped:!1}));we.scale.set(.6,.6,1),we.position.set(0,-.34,.48),R.lowerPivot.add(we),n.traverse(K=>{K.isMesh&&(K.castShadow=!1,K.receiveShadow=!1)});let Ie={group:n,torso:u,headGroup:m,leftArm:N,rightArm:R,leftLeg:P,rightLeg:z,flash:we,color:i,hostile:t,flashTime:0,visorMaterial:h};return Ie.animate=(K,ue,be=0,Re=!0,pe=!1)=>{let Fe=Xe(Math.abs(be)/8,0,1.6),ct=Math.min(ue*(5+Fe*5),1e3),De=Math.sin(ct)*(.12+Fe*.7),Ke=Math.abs(Math.sin(ct))*Fe*.035;Re?(u.position.y=1.02+Ke,u.rotation.x=Fe*.11,u.rotation.z=Math.sin(ct)*Fe*.035,P.pivot.rotation.x=De,z.pivot.rotation.x=-De,P.lowerPivot.rotation.x=Math.max(0,-De)*.55,z.lowerPivot.rotation.x=Math.max(0,De)*.55,N.pivot.rotation.x=-De*.75,R.pivot.rotation.x=De*.45,N.lowerPivot.rotation.x=-Math.max(0,De)*.3):(u.position.y=1.02,u.rotation.x=-.08,u.rotation.z=0,P.pivot.rotation.x=-.5,z.pivot.rotation.x=.25,P.lowerPivot.rotation.x=.5,z.lowerPivot.rotation.x=.2,N.pivot.rotation.x=-.75,R.pivot.rotation.x=-.2);let pt=Math.sin(ue*1.6)*.02;pe?(R.pivot.rotation.x=-1.35,R.pivot.rotation.z=.05,R.lowerPivot.rotation.x=-.08,R.lowerPivot.rotation.z=.12,N.pivot.rotation.x=-1.1,N.pivot.rotation.z=-.38,N.lowerPivot.rotation.x=-.65,N.lowerPivot.rotation.z=.35):(N.pivot.rotation.z=-.12+pt,R.pivot.rotation.z=.12-pt,R.pivot.rotation.x+=-.25,R.lowerPivot.rotation.x=-.35,R.lowerPivot.rotation.z=.05),m.rotation.x=pe?-.08:Math.sin(ue*.8)*.04,Ie.flashTime>0?(Ie.flashTime-=K,we.material.opacity=Xe(Ie.flashTime*9,0,1)*.95,we.scale.setScalar(.6+(1-Xe(Ie.flashTime*8,0,1))*.25)):we.material.opacity=0},Ie}function cu(i,e,t,n=.82,s=.8,r=0){let o=new Le(i,e,t),a=o.attributes.position;for(let c=0;c<a.count;c+=1)a.getY(c)>0&&(a.setX(c,a.getX(c)*n),a.setZ(c,a.getZ(c)*s+r));return a.needsUpdate=!0,o.computeVertexNormals(),o}function $p(i=2156287){let e=new yt,t=new yt;e.add(t);let n=new rr({color:i,roughness:.18,metalness:.65,clearcoat:1,clearcoatRoughness:.12,envMapIntensity:1.6}),s=Qt(526863,{roughness:.55,metalness:.55}),r=new rr({color:463389,roughness:.08,metalness:.35,transmission:.1,transparent:!0,opacity:.92,envMapIntensity:2}),o=Ri(i===16723349?16739253:i,1),a=new re(new Le(2.08,.32,4.55),n);a.position.y=.55,t.add(a);let c=new re(new Le(1.95,.24,4.2),n);c.position.y=.77,t.add(c);let l=new re(cu(1.9,.25,1.65,.78,.55,.35),n);l.position.set(0,.9,1.35),t.add(l);let h=new re(cu(2,.28,1.2,.92,.95,-.05),n);h.position.set(0,.91,-1.65),t.add(h);let d=new re(cu(1.45,.48,2.15,.74,.62,.12),r);d.position.set(0,1.1,-.25),t.add(d);let u=new re(new Le(1.05,.06,1.28),n);u.position.set(0,1.36,-.3),t.add(u);let f=new re(new Le(2.16,.07,.42),Qt(395018,{roughness:.4,metalness:.8}));f.position.set(0,.35,2.15),t.add(f);let p=new re(new Le(1.9,.12,.5),s);p.position.set(0,.34,-2.17),t.add(p);let y=new re(new Le(1.72,.06,.38),n);y.position.set(0,1.2,-2.05),y.rotation.x=-.08,t.add(y);for(let P of[-.63,.63]){let z=new re(new Le(.06,.28,.12),s);z.position.set(P,1.07,-2.02),t.add(z)}for(let P of[-1,1]){let z=new re(new Le(.035,.05,2.4),o);z.position.set(P*1.045,.65,0),t.add(z);let X=new re(new Le(.08,.18,.75),s);X.position.set(P*.97,.9,-.95),t.add(X)}for(let P of[-.62,.62]){let z=new re(new Le(.42,.055,.06),Ri(15268863,1));z.position.set(P,.82,2.22),t.add(z)}let g=new re(new Le(1.6,.055,.05),new et({color:16720720,transparent:!0,opacity:1,toneMapped:!1,blending:tt,depthWrite:!1}));g.position.set(0,.88,-2.24),t.add(g);let m=new re(new Le(1.2,.03,.04),Ri(16720720,.7));m.position.set(0,.72,-2.2),t.add(m);let _=new Ut(.37,.37,.28,16);_.rotateZ(Math.PI/2);let T=new ut({color:526604,roughness:.88}),M=new Ut(.22,.22,.3,8);M.rotateZ(Math.PI/2);let w=Qt(2435635,{roughness:.32,metalness:.9}),E=[];for(let[P,z]of[[-.98,1.45],[.98,1.45],[-.98,-1.45],[.98,-1.45]]){let X=new yt;X.position.set(P,.38,z),e.add(X);let q=new yt;X.add(q);let ae=new re(_,T);q.add(ae);let J=new re(M,w);q.add(J);for(let ie=0;ie<4;ie+=1){let oe=new re(new Le(.31,.055,.05),w);oe.rotation.x=ie*Math.PI/4,q.add(oe)}E.push({steer:X,spin:q,front:z>0})}for(let P of[-1,1])for(let z of[1.45,-1.45]){let X=new re(new Hn(.42,.08,6,14,Math.PI),s);X.rotation.y=Math.PI/2,X.rotation.z=Math.PI,X.position.set(P*1.02,.75,z),t.add(X)}let x=new et({map:qt("#bfeaff"),color:12577535,transparent:!0,opacity:.06,blending:tt,depthWrite:!1,toneMapped:!1}),b=[];for(let P of[-.62,.62]){let z=new re(new Gt(2.8,10.5),x.clone());z.rotation.x=-Math.PI/2,z.position.set(P,.075,7.1),t.add(z),b.push(z)}let N=new re(new Gt(3.4,6.4),new et({map:qt(`#${new Ne(i).getHexString()}`),color:i,transparent:!0,opacity:.35,blending:tt,depthWrite:!1,toneMapped:!1}));N.rotation.x=-Math.PI/2,N.position.y=.055,e.add(N);let R=[];for(let P of[-.48,.48]){let z=new re(new Ut(.075,.09,.2,8),Qt(1579552,{roughness:.3,metalness:.9}));z.rotation.x=Math.PI/2,z.position.set(P,.46,-2.31),t.add(z);let X=new Tn(new yn({map:qt("#7fd8ff"),color:6539775,transparent:!0,opacity:0,blending:tt,depthWrite:!1,toneMapped:!1}));X.position.set(P,.46,-2.46),X.scale.set(.9,.55,1),t.add(X),R.push(X)}let U=new re(new Le(1.1,.025,.02),o);U.position.set(0,.99,.9),t.add(U);let k=new re(new Gt(.7,.34),new et({map:Sv(),transparent:!0,opacity:.8,depthWrite:!1,toneMapped:!1}));k.rotation.x=-Math.PI/2,k.rotation.z=Math.PI,k.position.set(0,1.055,1.18),t.add(k);let H={group:e,bodyGroup:t,wheels:E,underGlow:N,exhausts:R,cones:b,brake:0,boost:0,spin:0,prevSpeed:0,color:i,headMat:x};return H.update=(P,z,X,q,ae,J=!0)=>{let ie=Math.abs(z),oe=(z-H.prevSpeed)/Math.max(P,.001);H.prevSpeed=z,H.spin+=z*P*2.8,H.wheels.forEach(Ie=>{Ie.spin.rotation.x=H.spin,Ie.steer.rotation.y=Ie.front?X*.45:0});let we=ae?1:0;H.brake=jc(H.brake,we,1-Math.exp(-8*P)),H.boost=jc(H.boost,q?1:0,1-Math.exp(-7*P)),t.rotation.z=-X*Xe(ie/35,0,1)*.055,t.rotation.x=Xe(-oe*8e-4,-.04,.04),t.position.y=Math.sin(H.spin*.5)*Xe(ie*.0015,0,.018),g.material.opacity=J?1:.2,g.material.color.setHex(ae?16724787:16720720),g.scale.x=ae?1.08:1,R.forEach((Ie,K)=>{Ie.material.opacity=H.boost*(.6+Math.random()*.35),Ie.scale.set(.7+Math.random()*.6,.45+H.boost*.5,1),Ie.position.z=-2.46-H.boost*(.3+Math.random()*.4)}),N.material.opacity=.22+H.boost*.4,b.forEach(Ie=>{Ie.visible=J,Ie.material.opacity=J?.22:0})},H}function Sv(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="rgba(0,0,0,0)",e.fillRect(0,0,256,128),e.strokeStyle="rgba(255,255,255,0.5)",e.lineWidth=4,e.strokeRect(6,6,244,116),e.font="900 74px Arial",e.textAlign="center",e.textBaseline="middle",e.fillStyle="rgba(255,255,255,0.75)",e.fillText("09",128,68);let t=new zi(i);return t.colorSpace=Ht,t}function lu(){let i=new yt,e=new ut({color:1514017,roughness:.34,metalness:.8,envMapIntensity:1.3}),t=Ri(16722509,1),n=new re(new In(.55,16,10),e);i.add(n);let s=new re(new In(.14,10,8),Ri(16723797,1));s.position.set(0,.02,.5),i.add(s);let r=new re(new Hn(.78,.045,4,40),e);r.rotation.x=Math.PI/2,i.add(r);let o=new re(new Hn(.6,.015,3,36),Ri(16723797,.8));o.rotation.x=Math.PI/2,i.add(o);for(let c of[-1,1]){let l=new re(new Ut(.28,.28,.03,12),Qt(723985,{roughness:.6}));l.position.set(c*1.02,.05,0),i.add(l);let h=new re(new Le(.5,.05,.08),e);h.position.set(c*.7,.05,0),i.add(h);let d=new re(new Hn(.26,.012,3,20),Ri(16733757,.4));d.rotation.x=Math.PI/2,d.position.set(c*1.02,.08,0),i.add(d)}let a=new ao(16723797,0,16,.4,.7,1.6);return a.position.set(0,-.2,.4),a.target.position.set(0,-5,3),i.add(a,a.target),i.userData.eye=s,i.userData.glowRing=o,i.userData.search=a,i.userData.rotors=i.children.filter(c=>c.geometry?.type==="CylinderGeometry"),{group:i,eye:s,glowRing:o,animate:(c,l,h=!1)=>{r.rotation.z+=c*1.7,o.rotation.z-=c*2.2,s.scale.setScalar(1+Math.sin(l*5)*.12),s.material.color.setHex(h?16718653:16743245),a.intensity=h?12:3,i.position.y+=0}}}function Zp(){let i=new yt,e=new re(new hs(.7,0),new ut({color:5832703,emissive:3339519,emissiveIntensity:3.5,roughness:.15,metalness:.7,toneMapped:!1}));e.scale.set(1,1.55,1),i.add(e);let t=new re(new Hi(1.05,0),new et({color:8191999,wireframe:!0,transparent:!0,opacity:.55,blending:tt,depthWrite:!1,toneMapped:!1}));i.add(t);let n=new re(new Hn(1.6,.025,3,48),new et({color:5240063,transparent:!0,opacity:.8,blending:tt,depthWrite:!1,toneMapped:!1}));n.rotation.x=Math.PI/2,i.add(n);let s=n.clone();s.rotation.set(Math.PI/2,Math.PI/3,0),i.add(s);let r=new et({color:3798527,transparent:!0,opacity:.06,blending:tt,depthWrite:!1,side:wt,toneMapped:!1}),o=new re(new Ut(.9,2,34,16,1,!0),r);o.position.y=17,i.add(o);let a=new Tn(new yn({map:qt("#53f5ff"),color:5502463,transparent:!0,opacity:.7,blending:tt,depthWrite:!1,toneMapped:!1}));return a.scale.set(7,7,1),i.add(a),i.position.y=1.6,{group:i,animate:(c,l)=>{e.rotation.y+=c*1.3,t.rotation.y-=c*.7,t.rotation.x+=c*.24,n.rotation.z+=c*.9,s.rotation.z-=c*.7,a.material.opacity=.5+Math.sin(l*2.3)*.2,i.position.y=1.9+Math.sin(l*1.7)*.22}}}function hu(){return ol({color:16723029,skin:12092516,hostile:!0})}function Jp(){let i=document.createElement("canvas");i.width=128,i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(0,0,0,0.62)"),t.addColorStop(.55,"rgba(0,0,0,0.33)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new zi(i)}function Ki(i,e=2.2){let t=new re(new Gt(e,e),new et({map:i,transparent:!0,depthWrite:!1,opacity:.9,toneMapped:!1}));return t.rotation.x=-Math.PI/2,t.renderOrder=1,t}var Kp=lt(()=>{an();nl();Ai()});function Mv(i){let e=0;for(let s of i)e+=s.byteLength;let t=new Uint8Array(e),n=0;for(let s of i){let r=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);t.set(r,n),n+=s.byteLength}return t}function pu(i){return new du(i).unpack()}function mu(i){let e=new fu,t=e.pack(i);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}var uu,du,fu,jp=lt(()=>{uu=class{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){let e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){let e=[];for(let t of this._parts)e.push(t);return Mv(e).buffer}};du=class{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){let e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){let e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){let e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){let e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){let e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){let e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){let e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){let e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){let e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);let t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){let t=this.read(e),n=0,s="",r,o;for(;n<e;)r=t[n],r<160?(o=r,n++):(r^192)<32?(o=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(o=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(o=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),s+=String.fromCodePoint(o);return this.index+=e,s}unpack_array(e){let t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){let t={};for(let n=0;n<e;n++){let s=this.unpack();t[s]=this.unpack()}return t}unpack_float(){let e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,s=e&8388607|8388608;return(t===0?1:-1)*s*2**(n-23)}unpack_double(){let e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,s=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(s-20)+t*2**(s-52);return(n===0?1:-1)*o}read(e){let t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}},fu=class{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{let t=e.constructor;if(e instanceof Array){let n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){let n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){let n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){let t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){let t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){let t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");let n=s=>{if(s<t){let r=this.pack(e[s]);return r instanceof Promise?r.then(()=>n(s+1)):n(s+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);let n=Math.floor(Math.log(e)/Math.LN2),s=e/2**n-1,r=Math.floor(s*2**52),o=2**32,a=t<<31|n+1023<<20|r/o&1048575,c=r%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(c)}pack_object(e){let t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");let s=r=>{if(r<t.length){let o=t[r];if(e.hasOwnProperty(o)){this.pack(o);let a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>s(r+1))}return s(r+1)}};return s(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){let t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){let t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){let t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new uu,this._textEncoder=new TextEncoder}}});function Mr(i,e,t){let n=i.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function ci(i,e,t){if(!i.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){No("Unable to polyfill events");return}let s=i.RTCPeerConnection.prototype,r=s.addEventListener;s.addEventListener=function(a,c){if(a!==e)return r.apply(this,arguments);let l=h=>{let d=t(h);d&&(c.handleEvent?c.handleEvent(d):c(d))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,l),r.apply(this,[a,l])};let o=s.removeEventListener;s.removeEventListener=function(a,c){if(a!==e||!this._eventMap||!this._eventMap[e])return o.apply(this,arguments);if(!this._eventMap[e].has(c))return o.apply(this,arguments);let l=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,o.apply(this,[a,l])},Object.defineProperty(s,"on"+e,{get(){return this["_on"+e]},set(a){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),a&&this.addEventListener(e,this["_on"+e]=a)},enumerable:!0,configurable:!0})}function nm(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(em=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function im(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(tm=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function No(){if(typeof window=="object"){if(em)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function br(i,e){tm&&console.warn(i+" is deprecated, please use "+e+" instead.")}function sm(i){let e={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return e.browser="Not a browser.",e;let{navigator:t}=i;if(t.userAgentData&&t.userAgentData.brands){let n=t.userAgentData.brands.find(s=>s.brand==="Chromium");if(n){let s=parseInt(n.version,10);if(s>=90)return{browser:"chrome",version:s}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(Mr(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(Mr(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(i.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(Mr(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,e._safariVersion=Mr(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function Qp(i){return Object.prototype.toString.call(i)==="[object Object]"}function xu(i){return Qp(i)?Object.keys(i).reduce(function(e,t){let n=Qp(i[t]),s=n?xu(i[t]):i[t],r=n&&!Object.keys(s).length;return s===void 0||r?e:Object.assign(e,{[t]:s})},{}):i}function gu(i,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?gu(i,i.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(s=>{gu(i,i.get(s),t)})}))}function yu(i,e,t){let n=t?"outbound-rtp":"inbound-rtp",s=new Map;if(e===null)return s;let r=[];return i.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&r.push(o)}),r.forEach(o=>{i.forEach(a=>{a.type===n&&a.trackId===o.id&&gu(i,a,s)})}),s}var em,tm,ji=lt(()=>{"use strict";em=!0,tm=!0});function al(i,e){if(e.version>=64)return;let t=i&&i.navigator;if(!t.mediaDevices)return;let n=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;let c={};return Object.keys(a).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;let h=typeof a[l]=="object"?a[l]:{ideal:a[l]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);let d=function(u,f){return u?u+f.charAt(0).toUpperCase()+f.slice(1):f==="deviceId"?"sourceId":f};if(h.ideal!==void 0){c.optional=c.optional||[];let u={};typeof h.ideal=="number"?(u[d("min",l)]=h.ideal,c.optional.push(u),u={},u[d("max",l)]=h.ideal,c.optional.push(u)):(u[d("",l)]=h.ideal,c.optional.push(u))}h.exact!==void 0&&typeof h.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[d("",l)]=h.exact):["min","max"].forEach(u=>{h[u]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[d(u,l)]=h[u])})}),a.advanced&&(c.optional=(c.optional||[]).concat(a.advanced)),c},s=function(a,c){if(e.version>=61)return c(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){let l=function(h,d,u){d in h&&!(u in h)&&(h[u]=h[d],delete h[d])};a=JSON.parse(JSON.stringify(a)),l(a.audio,"autoGainControl","googAutoGainControl"),l(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=n(a.audio)}if(a&&typeof a.video=="object"){let l=a.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});let h=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete a.video.facingMode;let d;if(l.exact==="environment"||l.ideal==="environment"?d=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(d=["front"]),d)return t.mediaDevices.enumerateDevices().then(u=>{u=u.filter(p=>p.kind==="videoinput");let f=u.find(p=>d.some(y=>p.label.toLowerCase().includes(y)));return!f&&u.length&&d.includes("back")&&(f=u[u.length-1]),f&&(a.video.deviceId=l.exact?{exact:f.deviceId}:{ideal:f.deviceId}),a.video=n(a.video),rm("chrome: "+JSON.stringify(a)),c(a)})}a.video=n(a.video)}return rm("chrome: "+JSON.stringify(a)),c(a)},r=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,c,l){s(a,h=>{t.webkitGetUserMedia(h,c,d=>{l&&l(r(d))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){let a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return s(c,l=>a(l).then(h=>{if(l.audio&&!h.getAudioTracks().length||l.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(d=>{d.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(r(h))))}}}var rm,om=lt(()=>{"use strict";ji();rm=No});var ll={};$o(ll,{fixNegotiationNeeded:()=>Eu,shimAddTrackRemoveTrack:()=>bu,shimAddTrackRemoveTrackWithNative:()=>am,shimGetSendersWithDtmf:()=>Su,shimGetUserMedia:()=>al,shimMediaStream:()=>_u,shimOnTrack:()=>vu,shimPeerConnection:()=>cl,shimSenderReceiverGetStats:()=>Mu});function _u(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function vu(i,e){if(!(e.version>102))if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});let t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=s=>{s.stream.addEventListener("addtrack",r=>{let o;i.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):o={track:r.track};let a=new Event("track");a.track=r.track,a.receiver=o,a.transceiver={receiver:o},a.streams=[s.stream],this.dispatchEvent(a)}),s.stream.getTracks().forEach(r=>{let o;i.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.id):o={track:r};let a=new Event("track");a.track=r,a.receiver=o,a.transceiver={receiver:o},a.streams=[s.stream],this.dispatchEvent(a)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else ci(i,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Su(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){let e=function(s,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=s.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:s}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};let s=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,c){let l=s.apply(this,arguments);return l||(l=e(this,a),this._senders.push(l)),l};let r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){r.apply(this,arguments);let c=this._senders.indexOf(a);c!==-1&&this._senders.splice(c,1)}}let t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(o=>{this._senders.push(e(this,o))})};let n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(o=>{let a=this._senders.find(c=>c.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){let e=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){let n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Mu(i,e){if(e.version>=67||!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){let n=i.RTCPeerConnection.prototype.getSenders;n&&(i.RTCPeerConnection.prototype.getSenders=function(){let o=n.apply(this,[]);return o.forEach(a=>a._pc=this),o});let s=i.RTCPeerConnection.prototype.addTrack;s&&(i.RTCPeerConnection.prototype.addTrack=function(){let o=s.apply(this,arguments);return o._pc=this,o}),i.RTCRtpSender.prototype.getStats=function(){let o=this;return this._pc.getStats().then(a=>yu(a,o.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){let n=i.RTCPeerConnection.prototype.getReceivers;n&&(i.RTCPeerConnection.prototype.getReceivers=function(){let r=n.apply(this,[]);return r.forEach(o=>o._pc=this),r}),ci(i,"track",s=>(s.receiver._pc=s.srcElement,s)),i.RTCRtpReceiver.prototype.getStats=function(){let r=this;return this._pc.getStats().then(o=>yu(o,r.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;let t=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){let s=arguments[0],r,o,a;return this.getSenders().forEach(c=>{c.track===s&&(r?a=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===s&&(o?a=!0:o=c),c.track===s)),a||r&&o?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():o?o.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function am(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};let e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};let c=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(c)===-1&&this._shimmedLocalStreams[a.id].push(c):this._shimmedLocalStreams[a.id]=[a,c],c};let t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(l=>{if(this.getSenders().find(d=>d.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});let a=this.getSenders();t.apply(this,arguments);let c=this.getSenders().filter(l=>a.indexOf(l)===-1);this._shimmedLocalStreams[o.id]=[o].concat(c)};let n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],n.apply(this,arguments)};let s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{let c=this._shimmedLocalStreams[a].indexOf(o);c!==-1&&this._shimmedLocalStreams[a].splice(c,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),s.apply(this,arguments)}}function bu(i,e){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&e.version>=65)return am(i);let t=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){let h=t.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(d=>this._reverseStreams[d.id])};let n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(d=>{if(this.getSenders().find(f=>f.track===d))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){let d=new i.MediaStream(h.getTracks());this._streams[h.id]=d,this._reverseStreams[d.id]=h,h=d}n.apply(this,[h])};let s=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},i.RTCPeerConnection.prototype.addTrack=function(h,d){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");let u=[].slice.call(arguments,1);if(u.length!==1||!u[0].getTracks().find(y=>y===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(y=>y.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};let p=this._streams[d.id];if(p)p.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{let y=new i.MediaStream([h]);this._streams[d.id]=y,this._reverseStreams[y.id]=d,this.addStream(y)}return this.getSenders().find(y=>y.track===h)};function r(l,h){let d=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(u=>{let f=l._reverseStreams[u],p=l._streams[f.id];d=d.replace(new RegExp(p.id,"g"),f.id)}),new RTCSessionDescription({type:h.type,sdp:d})}function o(l,h){let d=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(u=>{let f=l._reverseStreams[u],p=l._streams[f.id];d=d.replace(new RegExp(f.id,"g"),p.id)}),new RTCSessionDescription({type:h.type,sdp:d})}["createOffer","createAnswer"].forEach(function(l){let h=i.RTCPeerConnection.prototype[l],d={[l](){let u=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[p=>{let y=r(this,p);u[0].apply(null,[y])},p=>{u[1]&&u[1].apply(null,p)},arguments[2]]):h.apply(this,arguments).then(p=>r(this,p))}};i.RTCPeerConnection.prototype[l]=d[l]});let a=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};let c=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){let l=c.get.apply(this);return l.type===""?l:r(this,l)}}),i.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let u;Object.keys(this._streams).forEach(f=>{this._streams[f].getTracks().find(y=>h.track===y)&&(u=this._streams[f])}),u&&(u.getTracks().length===1?this.removeStream(this._reverseStreams[u.id]):u.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function cl(i,e){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){let n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]})}function Eu(i,e){e.version>102||ci(i,"negotiationneeded",t=>{let n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}var cm=lt(()=>{"use strict";ji();om()});function hl(i,e){let t=i&&i.navigator;if(!t.mediaDevices)return;let n=i&&i.MediaStreamTrack;if(t.getUserMedia=function(s,r,o){br("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(s).then(r,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){let s=function(o,a,c){a in o&&!(c in o)&&(o[c]=o[a],delete o[a])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),s(o.audio,"autoGainControl","mozAutoGainControl"),s(o.audio,"noiseSuppression","mozNoiseSuppression")),r(o)},n&&n.prototype.getSettings){let o=n.prototype.getSettings;n.prototype.getSettings=function(){let a=o.apply(this,arguments);return s(a,"mozAutoGainControl","autoGainControl"),s(a,"mozNoiseSuppression","noiseSuppression"),a}}if(n&&n.prototype.applyConstraints){let o=n.prototype.applyConstraints;n.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),s(a,"autoGainControl","mozAutoGainControl"),s(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}var lm=lt(()=>{"use strict";ji()});function hm(i,e){i.navigator.mediaDevices&&(i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){let s=new DOMException("getDisplayMedia without video constraints is undefined");return s.name="NotFoundError",s.code=8,Promise.reject(s)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,i.navigator.mediaDevices.getUserMedia(n)}))}var um=lt(()=>{"use strict"});var dl={};$o(dl,{shimAddTransceiver:()=>Iu,shimCreateAnswer:()=>Nu,shimCreateOffer:()=>Du,shimGetDisplayMedia:()=>hm,shimGetParameters:()=>Lu,shimGetStats:()=>wu,shimGetUserMedia:()=>hl,shimOnTrack:()=>Tu,shimPeerConnection:()=>ul,shimRTCDataChannel:()=>Pu,shimReceiverGetStats:()=>Au,shimRemoveStream:()=>Ru,shimSenderGetStats:()=>Cu});function Tu(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function ul(i,e){typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||(!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){let n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]}))}function wu(i,e){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||e.version>=151)return;let t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){let[r,o,a]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(c=>{if(e.version<53&&!o)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((h,d)=>{c.set(d,Object.assign({},h,{type:t[h.type]||h.type}))})}return c}).then(o,a)}}function Cu(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;let e=i.RTCPeerConnection.prototype.getSenders;e&&(i.RTCPeerConnection.prototype.getSenders=function(){let s=e.apply(this,[]);return s.forEach(r=>r._pc=this),s});let t=i.RTCPeerConnection.prototype.addTrack;t&&(i.RTCPeerConnection.prototype.addTrack=function(){let s=t.apply(this,arguments);return s._pc=this,s}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Au(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;let e=i.RTCPeerConnection.prototype.getReceivers;e&&(i.RTCPeerConnection.prototype.getReceivers=function(){let n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n}),ci(i,"track",t=>(t.receiver._pc=t.srcElement,t)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Ru(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){br("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function Pu(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function Iu(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;let t=i.RTCPeerConnection.prototype.addTransceiver;t&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let s=arguments[1]&&arguments[1].sendEncodings;s===void 0&&(s=[]),s=[...s];let r=s.length>0;r&&s.forEach(a=>{if("rid"in a&&!/^[a-z0-9]{0,16}$/i.test(a.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in a&&!(parseFloat(a.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in a&&!(parseFloat(a.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});let o=t.apply(this,arguments);if(r){let{sender:a}=o,c=a.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=s,a.sendEncodings=s,this.setParametersPromises.push(a.setParameters(c).then(()=>{delete a.sendEncodings}).catch(()=>{delete a.sendEncodings})))}return o})}function Lu(i,e){if(!(typeof i=="object"&&i.RTCRtpSender)||e.version>=110)return;let t=i.RTCRtpSender.prototype.getParameters;t&&(i.RTCRtpSender.prototype.getParameters=function(){let s=t.apply(this,arguments);return"encodings"in s||(s.encodings=[].concat(this.sendEncodings||[{}])),s})}function Du(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;let t=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function Nu(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;let t=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}var dm=lt(()=>{"use strict";ji();lm();um()});var fl={};$o(fl,{shimAudioContext:()=>Gu,shimCallbacksAPI:()=>Bu,shimConstraints:()=>fm,shimCreateOfferLegacy:()=>Hu,shimGetUserMedia:()=>Fu,shimLocalStreamsAPI:()=>Uu,shimRTCIceServerUrls:()=>ku,shimRemoteStreamsAPI:()=>Ou,shimTrackEventTransceiver:()=>zu});function Uu(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){let e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(s=>e.call(this,s,n)),n.getVideoTracks().forEach(s=>e.call(this,s,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...s){return s&&s.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);let n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);let s=t.getTracks();this.getSenders().forEach(r=>{s.includes(r.track)&&this.removeTrack(r)})})}}function Ou(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(s=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(s))return;this._remoteStreams.push(s);let r=new Event("addstream");r.stream=s,this.dispatchEvent(r)})})}});let e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){let n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(s){s.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);let o=new Event("addstream");o.stream=r,n.dispatchEvent(o)})}),e.apply(n,arguments)}}}function Bu(i){if(typeof i!="object"||!i.RTCPeerConnection)return;let e=i.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,s=e.setLocalDescription,r=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(l,h){let d=arguments.length>=2?arguments[2]:arguments[0],u=t.apply(this,[d]);return h?(u.then(l,h),Promise.resolve()):u},e.createAnswer=function(l,h){let d=arguments.length>=2?arguments[2]:arguments[0],u=n.apply(this,[d]);return h?(u.then(l,h),Promise.resolve()):u};let a=function(c,l,h){let d=s.apply(this,[c]);return h?(d.then(l,h),Promise.resolve()):d};e.setLocalDescription=a,a=function(c,l,h){let d=r.apply(this,[c]);return h?(d.then(l,h),Promise.resolve()):d},e.setRemoteDescription=a,a=function(c,l,h){let d=o.apply(this,[c]);return h?(d.then(l,h),Promise.resolve()):d},e.addIceCandidate=a}function Fu(i){let e=i&&i.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){let t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=s=>n(fm(s))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=function(n,s,r){e.mediaDevices.getUserMedia(n).then(s,r)}.bind(e))}function fm(i){return i&&i.video!==void 0?Object.assign({},i,{video:xu(i.video)}):i}function ku(i){if(!i.RTCPeerConnection)return;let e=i.RTCPeerConnection;i.RTCPeerConnection=function(n,s){if(n&&n.iceServers){let r=[];for(let o=0;o<n.iceServers.length;o++){let a=n.iceServers[o];a.urls===void 0&&a.url?(br("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,r.push(a)):r.push(n.iceServers[o])}n.iceServers=r}return new e(n,s)},i.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function zu(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Hu(i){let e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);let s=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveAudio===!0&&!s&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);let r=this.getTransceivers().find(o=>o.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function Gu(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}var pm=lt(()=>{"use strict";ji()});var Wu=ud((KE,Vu)=>{"use strict";var ce={};ce.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)};ce.localCName=ce.generateIdentifier();ce.splitLines=function(i){return i.trim().split(`
`).map(e=>e.trim())};ce.splitSections=function(i){return i.split(`
m=`).map((t,n)=>(n>0?"m="+t:t).trim()+`\r
`)};ce.getDescription=function(i){let e=ce.splitSections(i);return e&&e[0]};ce.getMediaSections=function(i){let e=ce.splitSections(i);return e.shift(),e};ce.matchPrefix=function(i,e){return ce.splitLines(i).filter(t=>t.indexOf(e)===0)};ce.parseCandidate=function(i){let e;i.indexOf("a=candidate:")===0?e=i.substring(12).split(" "):e=i.substring(10).split(" ");let t={foundation:e[0],component:{1:"rtp",2:"rtcp"}[e[1]]||e[1],protocol:e[2].toLowerCase(),priority:parseInt(e[3],10),ip:e[4],address:e[4],port:parseInt(e[5],10),type:e[7]};for(let n=8;n<e.length;n+=2)switch(e[n]){case"raddr":t.relatedAddress=e[n+1];break;case"rport":t.relatedPort=parseInt(e[n+1],10);break;case"tcptype":t.tcpType=e[n+1];break;case"ufrag":t.ufrag=e[n+1],t.usernameFragment=e[n+1];break;default:t[e[n]]===void 0&&(t[e[n]]=e[n+1]);break}return t};ce.writeCandidate=function(i){let e=[];e.push(i.foundation);let t=i.component;t==="rtp"?e.push(1):t==="rtcp"?e.push(2):e.push(t),e.push(i.protocol.toUpperCase()),e.push(i.priority),e.push(i.address||i.ip),e.push(i.port);let n=i.type;return e.push("typ"),e.push(n),n!=="host"&&i.relatedAddress&&i.relatedPort!==void 0&&(e.push("raddr"),e.push(i.relatedAddress),e.push("rport"),e.push(i.relatedPort)),i.tcpType&&i.protocol.toLowerCase()==="tcp"&&(e.push("tcptype"),e.push(i.tcpType)),(i.usernameFragment||i.ufrag)&&(e.push("ufrag"),e.push(i.usernameFragment||i.ufrag)),"candidate:"+e.join(" ")};ce.parseIceOptions=function(i){return i.substring(14).split(" ")};ce.parseRtpMap=function(i){let e=i.substring(9).split(" "),t={payloadType:parseInt(e.shift(),10)};return e=e[0].split("/"),t.name=e[0],t.clockRate=parseInt(e[1],10),t.channels=e.length===3?parseInt(e[2],10):1,t.numChannels=t.channels,t};ce.writeRtpMap=function(i){let e=i.payloadType;i.preferredPayloadType!==void 0&&(e=i.preferredPayloadType);let t=i.channels||i.numChannels||1;return"a=rtpmap:"+e+" "+i.name+"/"+i.clockRate+(t!==1?"/"+t:"")+`\r
`};ce.parseExtmap=function(i){let e=i.substring(9).split(" ");return{id:parseInt(e[0],10),direction:e[0].indexOf("/")>0?e[0].split("/")[1]:"sendrecv",uri:e[1],attributes:e.slice(2).join(" ")}};ce.writeExtmap=function(i){return"a=extmap:"+(i.id||i.preferredId)+(i.direction&&i.direction!=="sendrecv"?"/"+i.direction:"")+" "+i.uri+(i.attributes?" "+i.attributes:"")+`\r
`};ce.parseFmtp=function(i){let e={},t=i.substring(i.indexOf(" ")+1).split(";");for(let n=0;n<t.length;n++){let[s,...r]=t[n].trim().split("=");e[s.trim()]=r.length?r.join("="):void 0}return e};ce.writeFmtp=function(i){let e="",t=i.payloadType;if(i.preferredPayloadType!==void 0&&(t=i.preferredPayloadType),i.parameters&&Object.keys(i.parameters).length){let n=[];Object.keys(i.parameters).forEach(s=>{i.parameters[s]!==void 0?n.push(s+"="+i.parameters[s]):n.push(s)}),e+="a=fmtp:"+t+" "+n.join(";")+`\r
`}return e};ce.parseRtcpFb=function(i){let e=i.substring(i.indexOf(" ")+1).split(" ");return{type:e.shift(),parameter:e.join(" ")}};ce.writeRtcpFb=function(i){let e="",t=i.payloadType;return i.preferredPayloadType!==void 0&&(t=i.preferredPayloadType),i.rtcpFeedback&&i.rtcpFeedback.length&&i.rtcpFeedback.forEach(n=>{e+="a=rtcp-fb:"+t+" "+n.type+(n.parameter&&n.parameter.length?" "+n.parameter:"")+`\r
`}),e};ce.parseSsrcMedia=function(i){let e=i.indexOf(" "),t={ssrc:parseInt(i.substring(7,e),10)},n=i.indexOf(":",e);return n>-1?(t.attribute=i.substring(e+1,n),t.value=i.substring(n+1)):t.attribute=i.substring(e+1),t};ce.parseSsrcGroup=function(i){let e=i.substring(13).split(" ");return{semantics:e.shift(),ssrcs:e.map(t=>parseInt(t,10))}};ce.getMid=function(i){let e=ce.matchPrefix(i,"a=mid:")[0];if(e)return e.substring(6)};ce.parseFingerprint=function(i){let e=i.substring(14).split(" ");return{algorithm:e[0].toLowerCase(),value:e[1].toUpperCase()}};ce.getDtlsParameters=function(i,e){return{role:"auto",fingerprints:ce.matchPrefix(i+e,"a=fingerprint:").map(ce.parseFingerprint)}};ce.writeDtlsParameters=function(i,e){let t="a=setup:"+e+`\r
`;return i.fingerprints.forEach(n=>{t+="a=fingerprint:"+n.algorithm+" "+n.value+`\r
`}),t};ce.parseCryptoLine=function(i){let e=i.substring(9).split(" ");return{tag:parseInt(e[0],10),cryptoSuite:e[1],keyParams:e[2],sessionParams:e.slice(3)}};ce.writeCryptoLine=function(i){return"a=crypto:"+i.tag+" "+i.cryptoSuite+" "+(typeof i.keyParams=="object"?ce.writeCryptoKeyParams(i.keyParams):i.keyParams)+(i.sessionParams?" "+i.sessionParams.join(" "):"")+`\r
`};ce.parseCryptoKeyParams=function(i){if(i.indexOf("inline:")!==0)return null;let e=i.substring(7).split("|");return{keyMethod:"inline",keySalt:e[0],lifeTime:e[1],mkiValue:e[2]?e[2].split(":")[0]:void 0,mkiLength:e[2]?e[2].split(":")[1]:void 0}};ce.writeCryptoKeyParams=function(i){return i.keyMethod+":"+i.keySalt+(i.lifeTime?"|"+i.lifeTime:"")+(i.mkiValue&&i.mkiLength?"|"+i.mkiValue+":"+i.mkiLength:"")};ce.getCryptoParameters=function(i,e){return ce.matchPrefix(i+e,"a=crypto:").map(ce.parseCryptoLine)};ce.getIceParameters=function(i,e){let t=ce.matchPrefix(i+e,"a=ice-ufrag:")[0],n=ce.matchPrefix(i+e,"a=ice-pwd:")[0];return t&&n?{usernameFragment:t.substring(12),password:n.substring(10)}:null};ce.writeIceParameters=function(i){let e="a=ice-ufrag:"+i.usernameFragment+`\r
a=ice-pwd:`+i.password+`\r
`;return i.iceLite&&(e+=`a=ice-lite\r
`),e};ce.parseRtpParameters=function(i){let e={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},n=ce.splitLines(i)[0].split(" ");e.profile=n[2];for(let r=3;r<n.length;r++){let o=n[r],a=ce.matchPrefix(i,"a=rtpmap:"+o+" ")[0];if(a){let c=ce.parseRtpMap(a),l=ce.matchPrefix(i,"a=fmtp:"+o+" ");switch(c.parameters=l.length?ce.parseFmtp(l[0]):{},c.rtcpFeedback=ce.matchPrefix(i,"a=rtcp-fb:"+o+" ").map(ce.parseRtcpFb),e.codecs.push(c),c.name.toUpperCase()){case"RED":case"ULPFEC":e.fecMechanisms.push(c.name.toUpperCase());break;default:break}}}ce.matchPrefix(i,"a=extmap:").forEach(r=>{e.headerExtensions.push(ce.parseExtmap(r))});let s=ce.matchPrefix(i,"a=rtcp-fb:* ").map(ce.parseRtcpFb);return e.codecs.forEach(r=>{s.forEach(o=>{r.rtcpFeedback.find(c=>c.type===o.type&&c.parameter===o.parameter)||r.rtcpFeedback.push(o)})}),e};ce.writeRtpDescription=function(i,e){let t="";t+="m="+i+" ",t+=e.codecs.length>0?"9":"0",t+=" "+(e.profile||"UDP/TLS/RTP/SAVPF")+" ",t+=e.codecs.map(s=>s.preferredPayloadType!==void 0?s.preferredPayloadType:s.payloadType).join(" ")+`\r
`,t+=`c=IN IP4 0.0.0.0\r
`,t+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,e.codecs.forEach(s=>{t+=ce.writeRtpMap(s),t+=ce.writeFmtp(s),t+=ce.writeRtcpFb(s)});let n=0;return e.codecs.forEach(s=>{s.maxptime>n&&(n=s.maxptime)}),n>0&&(t+="a=maxptime:"+n+`\r
`),e.headerExtensions&&e.headerExtensions.forEach(s=>{t+=ce.writeExtmap(s)}),t};ce.parseRtpEncodingParameters=function(i){let e=[],t=ce.parseRtpParameters(i),n=t.fecMechanisms.indexOf("RED")!==-1,s=t.fecMechanisms.indexOf("ULPFEC")!==-1,r=ce.matchPrefix(i,"a=ssrc:").map(h=>ce.parseSsrcMedia(h)).filter(h=>h.attribute==="cname"),o=r.length>0&&r[0].ssrc,a,c=ce.matchPrefix(i,"a=ssrc-group:FID").map(h=>h.substring(17).split(" ").map(u=>parseInt(u,10)));c.length>0&&c[0].length>1&&c[0][0]===o&&(a=c[0][1]),t.codecs.forEach(h=>{if(h.name.toUpperCase()==="RTX"&&h.parameters.apt){let d={ssrc:o,codecPayloadType:parseInt(h.parameters.apt,10)};o&&a&&(d.rtx={ssrc:a}),e.push(d),n&&(d=JSON.parse(JSON.stringify(d)),d.fec={ssrc:o,mechanism:s?"red+ulpfec":"red"},e.push(d))}}),e.length===0&&o&&e.push({ssrc:o});let l=ce.matchPrefix(i,"b=");return l.length&&(l[0].indexOf("b=TIAS:")===0?l=parseInt(l[0].substring(7),10):l[0].indexOf("b=AS:")===0?l=parseInt(l[0].substring(5),10)*1e3*.95-2e3*8:l=void 0,e.forEach(h=>{h.maxBitrate=l})),e};ce.parseRtcpParameters=function(i){let e={},t=ce.matchPrefix(i,"a=ssrc:").map(r=>ce.parseSsrcMedia(r)).filter(r=>r.attribute==="cname")[0];t&&(e.cname=t.value,e.ssrc=t.ssrc);let n=ce.matchPrefix(i,"a=rtcp-rsize");e.reducedSize=n.length>0,e.compound=n.length===0;let s=ce.matchPrefix(i,"a=rtcp-mux");return e.mux=s.length>0,e};ce.writeRtcpParameters=function(i){let e="";return i.reducedSize&&(e+=`a=rtcp-rsize\r
`),i.mux&&(e+=`a=rtcp-mux\r
`),i.ssrc!==void 0&&i.cname&&(e+="a=ssrc:"+i.ssrc+" cname:"+i.cname+`\r
`),e};ce.parseMsid=function(i){let e,t=ce.matchPrefix(i,"a=msid:");if(t.length===1)return e=t[0].substring(7).split(" "),{stream:e[0],track:e[1]};let n=ce.matchPrefix(i,"a=ssrc:").map(s=>ce.parseSsrcMedia(s)).filter(s=>s.attribute==="msid");if(n.length>0)return e=n[0].value.split(" "),{stream:e[0],track:e[1]}};ce.parseSctpDescription=function(i){let e=ce.parseMLine(i),t=ce.matchPrefix(i,"a=max-message-size:"),n;t.length>0&&(n=parseInt(t[0].substring(19),10)),isNaN(n)&&(n=65536);let s=ce.matchPrefix(i,"a=sctp-port:");if(s.length>0)return{port:parseInt(s[0].substring(12),10),protocol:e.fmt,maxMessageSize:n};let r=ce.matchPrefix(i,"a=sctpmap:");if(r.length>0){let o=r[0].substring(10).split(" ");return{port:parseInt(o[0],10),protocol:o[1],maxMessageSize:n}}};ce.writeSctpDescription=function(i,e){let t=[];return i.protocol!=="DTLS/SCTP"?t=["m="+i.kind+" 9 "+i.protocol+" "+e.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+e.port+`\r
`]:t=["m="+i.kind+" 9 "+i.protocol+" "+e.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+e.port+" "+e.protocol+` 65535\r
`],e.maxMessageSize!==void 0&&t.push("a=max-message-size:"+e.maxMessageSize+`\r
`),t.join("")};ce.generateSessionId=function(){return Math.random().toString().substr(2,22)};ce.writeSessionBoilerplate=function(i,e,t){let n,s=e!==void 0?e:2;return i?n=i:n=ce.generateSessionId(),`v=0\r
o=`+(t||"thisisadapterortc")+" "+n+" "+s+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`};ce.getDirection=function(i,e){let t=ce.splitLines(i);for(let n=0;n<t.length;n++)switch(t[n]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return t[n].substring(2);default:}return e?ce.getDirection(e):"sendrecv"};ce.getKind=function(i){return ce.splitLines(i)[0].split(" ")[0].substring(2)};ce.isRejected=function(i){return i.split(" ",2)[1]==="0"};ce.parseMLine=function(i){let t=ce.splitLines(i)[0].substring(2).split(" ");return{kind:t[0],port:parseInt(t[1],10),protocol:t[2],fmt:t.slice(3).join(" ")}};ce.parseOLine=function(i){let t=ce.matchPrefix(i,"o=")[0].substring(2).split(" ");return{username:t[0],sessionId:t[1],sessionVersion:parseInt(t[2],10),netType:t[3],addressType:t[4],address:t[5]}};ce.isValidSDP=function(i){if(typeof i!="string"||i.length===0)return!1;let e=ce.splitLines(i);for(let t=0;t<e.length;t++)if(e[t].length<2||e[t].charAt(1)!=="=")return!1;return!0};typeof Vu=="object"&&(Vu.exports=ce)});var Xu={};$o(Xu,{removeExtmapAllowMixed:()=>gl,shimAddIceCandidateNullOrEmpty:()=>Fo,shimConnectionState:()=>ml,shimMaxMessageSize:()=>Oo,shimParameterlessSetLocalDescription:()=>ko,shimRTCIceCandidate:()=>Uo,shimRTCIceCandidateRelayProtocol:()=>pl,shimSendThrowTypeError:()=>Bo});function Uo(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;let e=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){let s=new e(n),r=Er.default.parseCandidate(n.candidate);for(let o in r)o in s||Object.defineProperty(s,o,{value:r[o]});return s.toJSON=function(){return{candidate:s.candidate,sdpMid:s.sdpMid,sdpMLineIndex:s.sdpMLineIndex,usernameFragment:s.usernameFragment}},s}return new e(n)},i.RTCIceCandidate.prototype=e.prototype,ci(i,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new i.RTCIceCandidate(t.candidate),writable:"false"}),t))}function pl(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||ci(i,"icecandidate",e=>{if(e.candidate){let t=Er.default.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Oo(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});let t=function(a){if(!a||!a.sdp)return!1;let c=Er.default.splitSections(a.sdp);return c.shift(),c.some(l=>{let h=Er.default.parseMLine(l);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(a){let c=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;let l=parseInt(c[1],10);return l!==l?-1:l},s=function(a){let c=65536;return e.browser==="firefox"&&(e.version<57?a===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(a,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);let h=Er.default.matchPrefix(a.sdp,"a=max-message-size:");return h.length>0?l=parseInt(h[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},o=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){let{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){let c=n(arguments[0]),l=s(c),h=r(arguments[0],c),d;l===0&&h===0?d=Number.POSITIVE_INFINITY:l===0||h===0?d=Math.max(l,h):d=Math.min(l,h);let u={};Object.defineProperty(u,"maxMessageSize",{get(){return d}}),this._sctp=u}return o.apply(this,arguments)}}function Bo(i,e){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(s,r){let o=s.send;s.send=function(){let c=arguments[0],l=c.length||c.size||c.byteLength;if(s.readyState==="open"&&r.sctp&&l>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return o.apply(s,arguments)}}let n=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){let r=n.apply(this,arguments);return t(r,this),r},ci(i,"datachannel",s=>(t(s.channel,s.target),s))}function ml(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;let e=i.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{let n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=s=>{let r=s.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;let o=new Event("connectionstatechange",s);r.dispatchEvent(o)}return s},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function gl(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;let t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(s){if(s&&s.sdp&&s.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){let r=s.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&s instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:s.type,sdp:r}):s.sdp=r}return t.apply(this,arguments)}}function Fo(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;let t=i.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function ko(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;let t=i.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let s=arguments[0]||{};if(typeof s!="object"||s.type&&s.sdp)return t.apply(this,arguments);if(s={type:s.type,sdp:s.sdp},!s.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":s.type="offer";break;default:s.type="answer";break}return s.sdp||s.type!=="offer"&&s.type!=="answer"?t.apply(this,[s]):(s.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}var Er,mm=lt(()=>{"use strict";Er=dd(Wu());ji()});function gm({window:i}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){let t=No,n=sm(i),s={browserDetails:n,commonShim:Xu,extractVersion:Mr,disableLog:nm,disableWarnings:im,sdp:bv};switch(n.browser){case"chrome":if(!ll||!cl||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),s;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),s;t("adapter.js shimming chrome."),s.browserShim=ll,Fo(i,n),ko(i,n),al(i,n),_u(i,n),cl(i,n),vu(i,n),bu(i,n),Su(i,n),Mu(i,n),Eu(i,n),Uo(i,n),pl(i,n),ml(i,n),Oo(i,n),Bo(i,n),gl(i,n);break;case"firefox":if(!dl||!ul||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),s;t("adapter.js shimming firefox."),s.browserShim=dl,Fo(i,n),ko(i,n),hl(i,n),ul(i,n),wu(i,n),Tu(i,n),Ru(i,n),Cu(i,n),Au(i,n),Pu(i,n),Iu(i,n),Lu(i,n),Du(i,n),Nu(i,n),Uo(i,n),ml(i,n),Oo(i,n),Bo(i,n);break;case"safari":if(!fl||!e.shimSafari)return t("Safari shim is not included in this adapter release."),s;t("adapter.js shimming safari."),s.browserShim=fl,Fo(i,n),ko(i,n),ku(i,n),Hu(i,n),Bu(i,n),Uu(i,n),Ou(i,n),zu(i,n),Fu(i,n),Gu(i,n),Uo(i,n),pl(i,n),Oo(i,n),Bo(i,n),gl(i,n);break;default:t("Unsupported browser!");break}return s}var bv,xm=lt(()=>{ji();cm();dm();pm();mm();bv=dd(Wu())});var Ev,qu,ym=lt(()=>{"use strict";xm();Ev=gm({window:typeof window>"u"?void 0:window}),qu=Ev});function Ms(i,e,t,n){Object.defineProperty(i,e,{get:t,set:n,enumerable:!0,configurable:!0})}function Tv(i){let e=0;for(let s of i)e+=s.byteLength;let t=new Uint8Array(e),n=0;for(let s of i)t.set(s,n),n+=s.byteLength;return t}function Wo(){}function Rv(i,e,t){this.fn=i,this.context=e,this.once=t||!1}function Sm(i,e,t,n,s){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new Rv(t,n||i,s),o=gn?gn+e:e;return i._events[o]?i._events[o].fn?i._events[o]=[i._events[o],r]:i._events[o].push(r):(i._events[o]=r,i._eventsCount++),i}function xl(i,e){--i._eventsCount===0?i._events=new Wo:delete i._events[e]}function ln(){this._events=new Wo,this._eventsCount=0}var yl,Yu,zo,wv,vm,_m,$u,Sn,Cv,Zu,Be,ad,Av,gn,bs,es,zt,Ju,cd,El,Qi,cn,Mm,Ku,_l,vl,ju,Sl,id,Go,Ml,Qu,sd,rd,Ss,bl,Xo,Ho,ed,td,od,Vo,nd,bm,Em=lt(()=>{jp();ym();yl=class{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{let t=[],n=e.byteLength,s=Math.ceil(n/this.chunkedMTU),r=0,o=0;for(;o<n;){let a=Math.min(n,o+this.chunkedMTU),c=e.slice(o,a),l={__peerData:this._dataCount,n:r,data:c,total:s};t.push(l),o=a,r++}return this._dataCount++,t}}};Yu=qu.default||qu,zo=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){let i=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?e>=this.minChromeVersion:i==="firefox"?e>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return Yu.browserDetails.browser}getVersion(){return Yu.browserDetails.version||0}isUnifiedPlanSupported(){let i=this.getBrowser(),e=Yu.browserDetails.version||0;if(i==="chrome"&&e<this.minChromeVersion)return!1;if(i==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},wv=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),vm=()=>Math.random().toString(36).slice(2),_m={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"},$u=class extends yl{noop(){}blobToArrayBuffer(e,t){let n=new FileReader;return n.onload=function(s){s.target&&t(s.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=_m,this.browser=zo.getBrowser(),this.browserVersion=zo.getVersion(),this.pack=mu,this.unpack=pu,this.supports=(function(){let t={browser:zo.isBrowserSupported(),webRTC:zo.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(_m),t.audioVideo=!0;let s;try{s=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!s.ordered;try{s.binaryType="blob",t.binaryBlob=!zo.isIOS}catch{}}catch{}finally{s&&s.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=wv,this.randomToken=vm}},Sn=new $u,Cv="PeerJS: ",Zu=class{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){let n=[Cv,...t];for(let s in n)n[s]instanceof Error&&(n[s]="("+n[s].name+") "+n[s].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}},Be=new Zu,ad={},Av=Object.prototype.hasOwnProperty,gn="~";Object.create&&(Wo.prototype=Object.create(null),new Wo().__proto__||(gn=!1));ln.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)Av.call(t,n)&&e.push(gn?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};ln.prototype.listeners=function(e){var t=gn?gn+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var s=0,r=n.length,o=new Array(r);s<r;s++)o[s]=n[s].fn;return o};ln.prototype.listenerCount=function(e){var t=gn?gn+e:e,n=this._events[t];return n?n.fn?1:n.length:0};ln.prototype.emit=function(e,t,n,s,r,o){var a=gn?gn+e:e;if(!this._events[a])return!1;var c=this._events[a],l=arguments.length,h,d;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,s),!0;case 5:return c.fn.call(c.context,t,n,s,r),!0;case 6:return c.fn.call(c.context,t,n,s,r,o),!0}for(d=1,h=new Array(l-1);d<l;d++)h[d-1]=arguments[d];c.fn.apply(c.context,h)}else{var u=c.length,f;for(d=0;d<u;d++)switch(c[d].once&&this.removeListener(e,c[d].fn,void 0,!0),l){case 1:c[d].fn.call(c[d].context);break;case 2:c[d].fn.call(c[d].context,t);break;case 3:c[d].fn.call(c[d].context,t,n);break;case 4:c[d].fn.call(c[d].context,t,n,s);break;default:if(!h)for(f=1,h=new Array(l-1);f<l;f++)h[f-1]=arguments[f];c[d].fn.apply(c[d].context,h)}}return!0};ln.prototype.on=function(e,t,n){return Sm(this,e,t,n,!1)};ln.prototype.once=function(e,t,n){return Sm(this,e,t,n,!0)};ln.prototype.removeListener=function(e,t,n,s){var r=gn?gn+e:e;if(!this._events[r])return this;if(!t)return xl(this,r),this;var o=this._events[r];if(o.fn)o.fn===t&&(!s||o.once)&&(!n||o.context===n)&&xl(this,r);else{for(var a=0,c=[],l=o.length;a<l;a++)(o[a].fn!==t||s&&!o[a].once||n&&o[a].context!==n)&&c.push(o[a]);c.length?this._events[r]=c.length===1?c[0]:c:xl(this,r)}return this};ln.prototype.removeAllListeners=function(e){var t;return e?(t=gn?gn+e:e,this._events[t]&&xl(this,t)):(this._events=new Wo,this._eventsCount=0),this};ln.prototype.off=ln.prototype.removeListener;ln.prototype.addListener=ln.prototype.on;ln.prefixed=gn;ln.EventEmitter=ln;ad=ln;bs={};Ms(bs,"ConnectionType",()=>es);Ms(bs,"PeerErrorType",()=>zt);Ms(bs,"BaseConnectionErrorType",()=>Ju);Ms(bs,"DataConnectionErrorType",()=>cd);Ms(bs,"SerializationType",()=>El);Ms(bs,"SocketEventType",()=>Qi);Ms(bs,"ServerMessageType",()=>cn);es=(function(i){return i.Data="data",i.Media="media",i})({}),zt=(function(i){return i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc",i})({}),Ju=(function(i){return i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed",i})({}),cd=(function(i){return i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big",i})({}),El=(function(i){return i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw",i})({}),Qi=(function(i){return i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close",i})({}),cn=(function(i){return i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE",i})({}),Mm="1.5.5",Ku=class extends ad.EventEmitter{constructor(e,t,n,s,r,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];let a=e?"wss://":"ws://";this._baseUrl=a+t+":"+n+s+"peerjs?key="+r}start(e,t){this._id=e;let n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+Mm),this._disconnected=!1,this._socket.onmessage=s=>{let r;try{r=JSON.parse(s.data),Be.log("Server message received:",r)}catch{Be.log("Invalid server message",s.data);return}this.emit(Qi.Message,r)},this._socket.onclose=s=>{this._disconnected||(Be.log("Socket closed.",s),this._cleanup(),this._disconnected=!0,this.emit(Qi.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),Be.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){Be.log("Cannot send heartbeat, because socket closed");return}let e=JSON.stringify({type:cn.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){let e=[...this._messagesQueue];this._messagesQueue=[];for(let t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Qi.Error,"Invalid message");return}if(!this._wsOpen())return;let t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}},_l=class{constructor(e){this.connection=e}startConnection(e){let t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===es.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){let n=this.connection,s={ordered:!!e.reliable},r=t.createDataChannel(n.label,s);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){Be.log("Creating RTCPeerConnection.");let e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){let t=this.connection.peer,n=this.connection.connectionId,s=this.connection.type,r=this.connection.provider;Be.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(Be.log(`Received ICE candidates for ${t}:`,o.candidate),r.socket.send({type:cn.Candidate,payload:{candidate:o.candidate,type:s,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":Be.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(Ju.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":Be.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(Ju.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":Be.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},Be.log("Listening for data channel"),e.ondatachannel=o=>{Be.log("Received data channel");let a=o.channel;r.getConnection(t,n)._initializeDataChannel(a)},Be.log("Listening for remote stream"),e.ontrack=o=>{Be.log("Received remote stream");let a=o.streams[0],c=r.getConnection(t,n);if(c.type===es.Media){let l=c;this._addStreamToMediaConnection(a,l)}}}cleanup(){Be.log("Cleaning up PeerConnection to "+this.connection.peer);let e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};let t=e.signalingState!=="closed",n=!1,s=this.connection.dataChannel;s&&(n=!!s.readyState&&s.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){let e=this.connection.peerConnection,t=this.connection.provider;try{let n=await e.createOffer(this.connection.options.constraints);Be.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),Be.log("Set localDescription:",n,`for:${this.connection.peer}`);let s={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===es.Data){let r=this.connection;s={...s,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:cn.Offer,payload:s,dst:this.connection.peer})}catch(s){s!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(zt.WebRTC,s),Be.log("Failed to setLocalDescription, ",s))}}catch(n){t.emitError(zt.WebRTC,n),Be.log("Failed to createOffer, ",n)}}async _makeAnswer(){let e=this.connection.peerConnection,t=this.connection.provider;try{let n=await e.createAnswer();Be.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),Be.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:cn.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(s){t.emitError(zt.WebRTC,s),Be.log("Failed to setLocalDescription, ",s)}}catch(n){t.emitError(zt.WebRTC,n),Be.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);let n=this.connection.peerConnection,s=this.connection.provider;Be.log("Setting remote description",t);let r=this;try{await n.setRemoteDescription(t),Be.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(o){s.emitError(zt.WebRTC,o),Be.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){Be.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),Be.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(zt.WebRTC,t),Be.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(Be.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return Be.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){Be.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}},vl=class extends ad.EventEmitter{emitError(e,t){Be.error("Error:",t),this.emit("error",new ju(`${e}`,t))}},ju=class extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}},Sl=class extends vl{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}},Go=class Go extends Sl{get type(){return es.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||Go.ID_PREFIX+Sn.randomToken(),this._negotiator=new _l(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Be.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{Be.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){Be.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){let t=e.type,n=e.payload;switch(e.type){case cn.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case cn.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:Be.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){Be.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});let n=this.provider._getMessages(this.connectionId);for(let s of n)this.handleMessage(s);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};id=new WeakMap,Rr(Go,id,Go.ID_PREFIX="mc_");Ml=Go,Qu=class{constructor(e){this._options=e}_buildRequest(e){let t=this._options.secure?"https":"http",{host:n,port:s,path:r,key:o}=this._options,a=new URL(`${t}://${n}:${s}${r}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",Mm),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{let e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){Be.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Sn.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{let e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Sn.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw Be.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}},Ss=class Ss extends Sl{get type(){return es.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||Ss.ID_PREFIX+vm(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new _l(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Be.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{Be.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{Be.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(cd.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){let t=e.payload;switch(e.type){case cn.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case cn.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:Be.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};sd=new WeakMap,rd=new WeakMap,Rr(Ss,sd,Ss.ID_PREFIX="dc_"),Rr(Ss,rd,Ss.MAX_BUFFERED_AMOUNT=8388608);bl=Ss,Xo=class extends bl{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>bl.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return Be.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;let e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}},Ho=class extends Xo{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new yl,this.serialization=El.Binary,this._chunkedData={}}_handleDataMessage({data:e}){let t=pu(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){let t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];let s=Tv(n.data);this._handleDataMessage({data:s})}}_send(e,t){let n=mu(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){let t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){let t=this.chunker.chunk(e);Be.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(let n of t)this.send(n,!0)}},ed=class extends Xo{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=El.None}},td=class extends Xo{_handleDataMessage({data:e}){let t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){let n=this.encoder.encode(this.stringify(e));if(n.byteLength>=Sn.chunkedMTU){this.emitError(cd.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=El.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}},Vo=class Vo extends vl{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){let e=Object.create(null);for(let[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:ed,json:td,binary:Ho,"binary-utf8":Ho,default:Ho},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:Sn.CLOUD_HOST,port:Sn.CLOUD_PORT,path:"/",key:Vo.DEFAULT_KEY,token:Sn.randomToken(),config:Sn.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Sn.CLOUD_HOST?this._options.secure=Sn.isSecure():this._options.host==Sn.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&Be.setLogFunction(this._options.logFunction),Be.logLevel=this._options.debug||0,this._api=new Qu(t),this._socket=this._createServerConnection(),!Sn.supports.audioVideo&&!Sn.supports.data){this._delayedAbort(zt.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!Sn.validateId(n)){this._delayedAbort(zt.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(s=>this._initialize(s)).catch(s=>this._abort(zt.ServerError,s))}_createServerConnection(){let e=new Ku(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Qi.Message,t=>{this._handleMessage(t)}),e.on(Qi.Error,t=>{this._abort(zt.SocketError,t)}),e.on(Qi.Disconnected,()=>{this.disconnected||(this.emitError(zt.Network,"Lost connection to server."),this.disconnect())}),e.on(Qi.Close,()=>{this.disconnected||this._abort(zt.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){let t=e.type,n=e.payload,s=e.src;switch(t){case cn.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case cn.Error:this._abort(zt.ServerError,n.msg);break;case cn.IdTaken:this._abort(zt.UnavailableID,`ID "${this.id}" is taken`);break;case cn.InvalidKey:this._abort(zt.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case cn.Leave:Be.log(`Received leave message from ${s}`),this._cleanupPeer(s),this._connections.delete(s);break;case cn.Expire:this.emitError(zt.PeerUnavailable,`Could not connect to peer ${s}`);break;case cn.Offer:{let r=n.connectionId,o=this.getConnection(s,r);if(o&&(o.close(),Be.warn(`Offer received for existing Connection ID:${r}`)),n.type===es.Media){let c=new Ml(s,this,{connectionId:r,_payload:n,metadata:n.metadata});o=c,this._addConnection(s,o),this.emit("call",c)}else if(n.type===es.Data){let c=new this._serializers[n.serialization](s,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});o=c,this._addConnection(s,o),this.emit("connection",c)}else{Be.warn(`Received malformed connection type:${n.type}`);return}let a=this._getMessages(r);for(let c of a)o.handleMessage(c);break}default:{if(!n){Be.warn(`You received a malformed message from ${s} of type ${t}`);return}let r=n.connectionId,o=this.getConnection(s,r);o&&o.peerConnection?o.handleMessage(e):r?this._storeMessage(r,e):Be.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){let t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){Be.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(zt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}let n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){Be.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(zt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){Be.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}let s=new Ml(e,this,{...n,_stream:t});return this._addConnection(e,s),s}_addConnection(e,t){Be.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){let t=this._connections.get(e.peer);if(t){let n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){let n=this._connections.get(e);if(!n)return null;for(let s of n)if(s.connectionId===t)return s;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){Be.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(Be.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(let e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){let t=this._connections.get(e);if(t)for(let n of t)n.close()}disconnect(){if(this.disconnected)return;let e=this.id;Be.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)Be.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)Be.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(zt.ServerError,t))}};od=new WeakMap,Rr(Vo,od,Vo.DEFAULT_KEY="peerjs");nd=Vo,bm=nd});async function Cm(){if(typeof window>"u"||window.location.protocol==="file:")return!1;try{let i=new AbortController,e=setTimeout(()=>i.abort(),1800),t=await fetch("/api/health",{signal:i.signal,cache:"no-store"});if(clearTimeout(e),!t.ok)return!1;let n=await t.json();return n&&n.ok===!0}catch{return!1}}function Es(i){return String(i||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,6)}var Tr,Tm,wm,Pv,Tl,Am=lt(()=>{Em();Ai();Tr=[3599615,16723349,16757837,11037695],Tm="nightfall-nx-v1-",wm=/^[A-Z0-9]{4,6}$/,Pv=[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478"}];Tl=class{constructor(){this.handlers=new Map,this.mode=null,this.selfId=null,this.roomCode=null,this.hostId=null,this.players=new Map,this.connected=!1,this.ws=null,this.peer=null,this.connections=new Map,this.p2pGuest=null,this.pingTimer=null,this.pingSentAt=0,this.latency=null,this.server=!1,this._closed=!1}on(e,t){return this.handlers.has(e)||this.handlers.set(e,new Set),this.handlers.get(e).add(t),()=>this.handlers.get(e)?.delete(t)}emit(e,t){let n=this.handlers.get(e);if(n)for(let s of n)try{s(t)}catch(r){console.error("Network handler error",e,r)}}get isHost(){return this.selfId!==null&&this.selfId===this.hostId}get playerCount(){return this.players.size+1}getPlayer(e){return this.players.get(e)}async connect({mode:e,room:t,name:n,useServer:s}){return this.name=(n||"OPERATIVE").slice(0,16),this._closed=!1,s?(this.server=!0,this.mode="server",this._connectServer({mode:e,room:t})):(this.server=!1,this.mode="p2p",this._connectP2P({mode:e,room:t}))}_connectServer({mode:e,room:t}){return new Promise((n,s)=>{let r=window.location.protocol==="https:"?"wss":"ws",o=e==="host"?"create":"join",a=o==="join"?Es(t):"";if(o==="join"&&!wm.test(a)){s(new Error("That room code is not valid."));return}let c=new URLSearchParams({action:o,name:this.name});a&&c.set("room",a);let l=new WebSocket(`${r}://${window.location.host}/ws?${c.toString()}`);this.ws=l;let h=!1,d=setTimeout(()=>{if(!h){h=!0;try{l.close()}catch{}s(new Error("The city server did not answer. Try again or use Peer-to-Peer."))}},12e3),u=f=>{if(!h){h=!0,clearTimeout(d);try{l.close()}catch{}s(new Error(f))}};l.onopen=()=>{this.emit("transport-open"),this._startPing()},l.onerror=()=>{u("Could not reach the multiplayer server.")},l.onclose=()=>{if(!h){u("The room closed before the connection completed.");return}this._closed||(this.connected=!1,this.emit("close",{reason:"The server connection was lost."}))},l.onmessage=f=>{let p;try{p=JSON.parse(f.data)}catch{return}if(p.type==="welcome"){h=!0,clearTimeout(d),this.selfId=p.selfId,this.roomCode=p.roomCode,this.hostId=p.hostId,this.players=new Map((p.players||[]).filter(y=>y.id!==this.selfId).map(y=>[y.id,y])),this.selfPlayer=(p.players||[]).find(y=>y.id===this.selfId)||{id:this.selfId,name:this.name,color:Tr[0]},this.connected=!0,this.latency=0,this.emit("ready",{selfId:this.selfId,self:this.selfPlayer,roomCode:this.roomCode,hostId:this.hostId,players:[...this.players.values()],server:!0});return}if(p.type==="pong"){this.latency=Math.max(1,Math.round(performance.now()-this.pingSentAt)),this.emit("latency",this.latency);return}if(p.type==="peer-join"){this.players.set(p.player.id,p.player),this.emit("playerJoin",p.player);return}if(p.type==="peer-leave"){let y=this.players.get(p.id);this.players.delete(p.id),this.emit("playerLeave",{id:p.id,player:y});return}if(p.type==="host-changed"){this.hostId=p.hostId,this.emit("hostChanged",p.hostId);return}if(p.type==="error"){this.emit("notice",{text:p.message,level:"error"}),h||u(p.message||"Could not join the room.");return}if(p.type==="ping"){this._sendRaw({type:"pong"});return}if(p.type!=="pong"){if(p.type==="room-info"){this.emit("roomInfo",p);return}p.from&&this.emit("message",p)}}})}_stopPing(){this.pingTimer&&clearInterval(this.pingTimer),this.pingTimer=null}_connectP2P({mode:e,room:t}){return new Promise((n,s)=>{let r=!1,o=setTimeout(()=>{r||(r=!0,this._teardown(),s(new Error("Timed out creating the peer link. Move to a different network or deploy the included server.")))},14e3),a=l=>{r=!0,clearTimeout(o),this.connected=!0,this.latency=null,this.emit("ready",l),n(l)},c=l=>{try{return new bm(l,{debug:0,config:{iceServers:Pv}})}catch{return s(new Error("WebRTC is unavailable in this browser.")),null}};if(e==="host"){let l=Es(t)||Cp(5);this.selfId="host",this.roomCode=l,this.hostId="host",this.players=new Map,this.p2pPlayers=new Map,this.p2pHostInfo={id:"host",name:this.name,color:Tr[0]};let h=c(Tm+l);if(!h)return;this.peer=h,h.on("open",()=>{a({selfId:"host",self:this.p2pHostInfo,roomCode:l,hostId:"host",players:[],server:!1})}),h.on("connection",d=>{if(this.p2pGuest){d.on("open",()=>{try{d.send({type:"error",message:"This room already has two players."})}catch{}setTimeout(()=>d.close(),350)});return}let u=()=>this._handleP2PConnection(d,"guest");d.open?u():d.on("open",u),d.on("error",f=>{this.emit("notice",{text:"Peer link error. Check your network.",level:"error"}),console.warn("P2P connection error",f)})}),h.on("error",d=>{console.warn("Peer error",d);let u="Peer-to-peer connection failed.";d?.type==="unavailable-id"?u="That room code is already in use. Try again.":d?.type==="network"||d?.type==="server-error"?u="The public matchmaking service is unreachable. Deploy the included server for a reliable online game.":d?.type==="peer-unavailable"&&(u="No city found with that code. Check the code and try again."),r?this.emit("notice",{text:u,level:"error"}):(clearTimeout(o),r=!0,s(new Error(u)))})}else{let l=Es(t);if(!wm.test(l)){s(new Error("That room code is not valid."));return}this.roomCode=l,this.selfId="guest",this.hostId="host",this.p2pPlayers=new Map,this.p2pHostInfo=null;let h=c();if(!h)return;this.peer=h;let d=null;h.on("open",()=>{d=h.connect(Tm+l,{reliable:!0,metadata:{name:this.name,color:Tr[1]}}),this.p2pGuest=d,this.connections.set("host",d),d.on("open",()=>{this._startPing(),this._sendToConnection("host",{type:"hello",name:this.name,color:Tr[1]})}),d.on("data",u=>this._receiveP2P(u,"host")),d.on("close",()=>{this._closed||(this.connected=!1,this.emit("close",{reason:"The host closed the city link."}))}),d.on("error",u=>{console.warn("P2P guest connection error",u),r||(clearTimeout(o),r=!0,s(new Error("The peer link dropped. Check both networks and retry.")))})}),h.on("error",u=>{console.warn("Peer error",u);let f="Could not join the peer city.";u?.type==="peer-unavailable"?f="No city found with that code. Ask your cousin to check the code.":(u?.type==="network"||u?.type==="server-error")&&(f="The public matchmaking service is unreachable. Try again or use the deployed server."),r?this.emit("notice",{text:f,level:"error"}):(clearTimeout(o),r=!0,this._teardown(),s(new Error(f)))}),this._resolveGuest=a}})}_handleP2PConnection(e,t){this.p2pGuest=e,this.p2pGuestMeta=null,this.connections.set(t,e),e.on("data",n=>{if(n&&n.type==="hello"){let s={id:t,name:(n.name||"OPERATIVE").slice(0,16),color:Tr[1]};this.p2pGuestMeta=s,this.players.set(t,s);let r=[this.p2pHostInfo,s];e.send({type:"welcome",selfId:"guest",roomCode:this.roomCode,hostId:"host",players:r,server:!1}),this.emit("playerJoin",s),this.emit("notice",{text:`${s.name} linked into the district.`,level:"ok"});return}this._receiveP2P(n,t)}),e.on("close",()=>{this._closed||(this.connections.delete(t),this.players.delete(t),this.p2pGuest=null,this.emit("playerLeave",{id:t,player:null}),this.emit("notice",{text:"Your co-op partner disconnected.",level:"warn"}))})}_receiveP2P(e,t){if(!(!e||typeof e!="object")){if(e.type==="welcome"){this.selfId=e.selfId,this.roomCode=e.roomCode,this.hostId=e.hostId,this.players=new Map((e.players||[]).filter(n=>n.id!==this.selfId).map(n=>[n.id,n])),this.selfPlayer=(e.players||[]).find(n=>n.id===this.selfId)||{id:this.selfId,name:this.name,color:Tr[1]},this.connected=!0,this._resolveGuest&&(this._resolveGuest({selfId:this.selfId,self:this.selfPlayer,roomCode:this.roomCode,hostId:this.hostId,players:[...this.players.values()],server:!1}),this._resolveGuest=null),this.emit("notice",{text:"Peer city linked.",level:"ok"});return}if(e.type==="ping"){this._sendToConnection(t,{type:"pong"});return}if(e.type==="pong"){this.latency=this.pingSentAt?Math.max(1,Math.round(performance.now()-this.pingSentAt)):null,this.emit("latency",this.latency);return}if(e.type==="error"){this.emit("notice",{text:e.message||"Peer error.",level:"error"});return}this.emit("message",{...e,from:t})}}_startPing(){this._stopPing(),this.pingTimer=setInterval(()=>{this.connected&&(this.pingSentAt=performance.now(),this.mode==="server"?this._sendRaw({type:"ping"}):this._sendRaw({type:"ping"}))},2600)}_sendToConnection(e,t){if(this.mode==="server"){this._sendRaw(t);return}if(this.isHost){let n=this.connections.get(e);if(n?.open)try{n.send(t)}catch(s){console.warn(s)}}else{let n=this.connections.get("host");if(n?.open)try{n.send(t)}catch(s){console.warn(s)}}}_sendRaw(e){if(this.mode==="server")return this.ws?.readyState===WebSocket.OPEN?(this.ws.send(JSON.stringify(e)),!0):!1;if(this.isHost){let n=!1;for(let s of this.connections.values())if(s?.open)try{s.send(e),n=!0}catch{}return n}let t=this.connections.get("host");if(t?.open)try{return t.send(e),!0}catch{return!1}return!1}send(e,t={}){return this.connected?this._sendRaw({type:e,...t}):!1}_teardown(){this._closed=!0,this._stopPing();try{this.ws?.close()}catch{}try{this.peer?.destroy()}catch{}for(let e of this.connections.values())try{e.close()}catch{}this.connections.clear(),this.ws=null,this.peer=null}close(){this._teardown(),this.connected=!1}}});function Rl(i,e){try{let t=localStorage.getItem(i);return t===null?e:t}catch{return e}}function Ts(i,e){try{localStorage.setItem(i,e)}catch{}}function Dm(i){return`#${(i??3599615).toString(16).padStart(6,"0")}`}function Nv(i,e,t,n,s,r){let o=s-t,a=r-n,c=i-t,l=e-n,h=o*o+a*a,d=h>1e-8?(c*o+l*a)/h:0;d=Xe(d,0,1);let u=i-(t+o*d),f=e-(n+a*d);return Math.hypot(u,f)}function qo(i,e,t,n){return wp(i,e,t,n)}var Rm,Pm,wl,ld,Im,Lm,wr,Cl,Iv,Al,Lv,Dv,Pl,Nm=lt(()=>{an();Kp();Am();Ai();Rm="nightfall:sensitivity",Pm="nightfall:quality",wl="nightfall:name",ld="nightfall:muted",Im=[2156287,16723349,16757837,11037695,7077816],Lm=34,wr=12,Cl=120,Iv=30,Al=new I,Lv=new I,Dv=new I;Pl=class{constructor({scene:e,camera:t,renderer:n,world:s,ui:r,effects:o,audio:a,setQuality:c}){this.scene=e,this.camera=t,this.renderer=n,this.world=s,this.ui=r,this.effects=o,this.audio=a,this.setQualityCallback=c||(()=>{}),this.canvas=n.domElement,this.status="menu",this.busy=!1,this.session=null,this.network=null,this.isHost=!1,this.mission=null,this.missionCount=0,this.completed=!1,this.resultTimer=0,this.currentMode="foot",this.paused=!1,this.chatOpen=!1,this.controlsOpen=!1,this.ignoreUnlock=!1,this.keys=new Set,this.mouseDown=!1,this.aiming=!1,this.cameraYaw=0,this.cameraPitch=-.08,this.driveLookYaw=0,this.drivePitch=.26,this.lastLookMove=0,this.lookSensitivity=Number(Rl(Rm,"1"))||1,this.quality=Rl(Pm,"balanced"),this.name=Rl(wl,"GHOST")||"GHOST",this.myColor=3599615,this.myName=this.name,this.serverAvailable=!1,this.serverChecked=!1,this.setQualityCallback(this.quality),this.player=null,this.localChar=null,this.localCharShadow=null,this.localCar=null,this.cars=[],this.shardVisuals=new Map,this.localEnemies=[],this.remoteEnemies=new Map,this.remotePlayers=new Map,this.pings=[],this.shadowTex=Jp(),this.elapsed=0,this.menuAngle=0,this.pingSeq=0,this.statePingTimer=0,this.playerStateTimer=0,this.shardFxTimer=0,this.cameraShake=0,this.extractWasInside=!1,this.damageFlashTimer=0,this.lastFpsUpdate=0,this.fps=60,this.currentFov=62,this.hudTick=0,this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onPointerLockChange=this.onPointerLockChange.bind(this),this.onWindowBlur=this.onWindowBlur.bind(this)}async init(){this.bindUI(),this.bindInput(),this.ui.setName(this.name),this.ui.setRoomCode("SOLO",!1),this.ui.setLoading(.92,"CALIBRATING THE NEON GRID");let e=Es(new URLSearchParams(window.location.search).get("room")||""),t=document.getElementById("roomInput");t&&(t.value=e);try{this.serverAvailable=await Cm()}catch{this.serverAvailable=!1}this.serverChecked=!0,this.serverAvailable?this.ui.setServerStatus("online","RELAY ONLINE"):this.ui.setServerStatus("p2p","PEER LINK READY");let n=document.getElementById("sensitivity");n&&(n.value=String(this.lookSensitivity));let s=document.getElementById("muteBtn"),r=Rl(ld,"false")==="true";if(this.audio.setMuted(r),s&&(s.textContent=r?"SOUND OFF":"SOUND ON"),this.updateQualityButtons(),this.ui.setLoading(1,"DISTRICT READY"),this.ui.finishLoading(),setTimeout(()=>{this.status==="menu"&&this.ui.showLanding()},500),e){let o=document.getElementById("connectionText");o&&(o.textContent=`Room ${e} loaded \u2014 press JOIN to link up.`)}this.positionMenuCamera(0)}bindUI(){let e=(a,c)=>{let l=document.getElementById(a);l&&l.addEventListener("click",c)};e("hostBtn",()=>this.startOnline("host")),e("joinBtn",()=>this.startOnline("join")),e("soloBtn",()=>this.startSolo()),e("resumeBtn",()=>{this.paused=!1,this.ui.setPaused(!1),this.requestPointerLock()}),e("howToBtn",()=>{this.controlsOpen=!0,this.ui.setControls(!0),document.pointerLockElement&&document.exitPointerLock()}),e("closeControlsBtn",()=>{this.controlsOpen=!1,this.ui.setControls(!1),(this.status==="playing"||this.status==="paused")&&this.requestPointerLock()}),e("copyInviteBtn",()=>this.copyInvite()),e("leaveBtn",()=>this.leaveGame()),e("reloadBtn",()=>window.location.reload()),e("redeployBtn",()=>{this.isHost?this.resetMission():this.network?.connected&&(this.network.send("redeploy"),this.ui.toast("Redeploy requested.","info"))});let t=document.getElementById("nameInput");t&&(t.addEventListener("change",()=>{this.name=(t.value||"GHOST").replace(/[^\w .\-']/g,"").trim().slice(0,14)||"GHOST",t.value=this.name,this.ui.setName(this.name),Ts(wl,this.name)}),t.addEventListener("keydown",a=>{a.key==="Enter"&&this.startOnline("host")}));let n=document.getElementById("roomInput");n&&(n.addEventListener("input",()=>{n.value=Es(n.value)}),n.addEventListener("keydown",a=>{a.key==="Enter"&&this.startOnline("join")}));let s=document.getElementById("sensitivity");s&&s.addEventListener("input",()=>{this.lookSensitivity=Xe(Number(s.value)||1,.5,2),Ts(Rm,String(this.lookSensitivity))});let r=document.getElementById("muteBtn");r&&r.addEventListener("click",()=>{let a=!this.audio.muted;this.audio.setMuted(a),Ts(ld,String(a)),r.textContent=a?"SOUND OFF":"SOUND ON"}),document.querySelectorAll("#qualityGroup button").forEach(a=>{a.addEventListener("click",()=>this.applyQuality(a.dataset.quality||"balanced"))});let o=document.getElementById("chatInput");o&&o.addEventListener("keydown",a=>{a.stopPropagation(),a.key==="Enter"?(a.preventDefault(),this.sendChat()):a.key==="Escape"&&(a.preventDefault(),this.toggleChat(!1))})}bindInput(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),document.addEventListener("pointerlockchange",this.onPointerLockChange),window.addEventListener("blur",this.onWindowBlur),this.canvas.addEventListener("contextmenu",e=>e.preventDefault())}bindNetwork(e){e.on("ready",t=>{this.session||this.beginSession({...t,network:e})}),e.on("message",t=>this.onNetMessage(t)),e.on("playerJoin",t=>this.onPlayerJoin(t)),e.on("playerLeave",t=>this.onPlayerLeave(t)),e.on("hostChanged",t=>this.onHostChanged(t)),e.on("latency",()=>{}),e.on("notice",({text:t,level:n})=>{this.ui.toast(t,n==="error"?"error":"info",4200)}),e.on("close",({reason:t})=>{this.session&&(this.status="disconnected",this.ui.setCrosshair(!1),this.ui.setInteraction("",!1),this.ignoreUnlock=!0,document.pointerLockElement&&document.exitPointerLock(),this.ui.showDisconnect(t||"The city link was severed."))})}applyQuality(e){this.quality=e,Ts(Pm,e),this.setQualityCallback(e),this.updateQualityButtons()}updateQualityButtons(){document.querySelectorAll("#qualityGroup button").forEach(e=>{e.classList.toggle("is-active",e.dataset.quality===this.quality)})}async startOnline(e){if(this.busy||this.status!=="menu")return;let t=document.getElementById("nameInput"),n=document.getElementById("roomInput"),s=(t?.value||"GHOST").replace(/[^\w .\-']/g,"").trim().slice(0,14)||"GHOST";this.name=s,Ts(wl,s);let r=Es(n?.value||"");if(e==="join"&&r.length<4){this.ui.showStartError("Enter the 4\u20136 character room code your partner sent you."),n?.focus();return}this.ui.showStartError(""),this.ui.setBusy(!0,e==="host"?"FOUNDING THE DISTRICT":"LINKING TO THE DISTRICT"),this.busy=!0,this.audio.start();let o=new Tl;this.network=o,this.bindNetwork(o);try{await o.connect({mode:e,room:r,name:s,useServer:this.serverAvailable})}catch(a){o.close(),this.network===o&&(this.network=null),this.session||(this.ui.setBusy(!1),this.ui.showStartError(a?.message||"Could not link to the district."),this.ui.setServerStatus(this.serverAvailable?"online":"p2p",this.serverAvailable?"RELAY ONLINE":"PEER LINK READY"))}finally{this.busy=!1,this.ui.setBusy(!1)}}startSolo(){if(this.busy||this.status!=="menu")return;let e=document.getElementById("nameInput");this.name=(e?.value||"GHOST").replace(/[^\w .\-']/g,"").trim().slice(0,14)||"GHOST",Ts(wl,this.name),this.audio.start(),this.beginSession({network:null,selfId:"solo",self:{id:"solo",name:this.name,color:3599615},roomCode:null,hostId:"solo",players:[],server:!1})}beginSession(e){this.session||(this.session={online:!!e.network,selfId:e.selfId,hostId:e.hostId,roomCode:e.roomCode||null,server:!!e.server,self:e.self||{id:e.selfId,name:this.name,color:3599615}},this.isHost=e.network?e.network.isHost:!0,this.myName=e.self?.name||this.name,this.myColor=e.self?.color??3599615,this.ui.setBusy(!1),this.ui.showStartError(""),this.ui.enterGame(),this.ui.setName(this.myName),this.ui.setRoomCode(this.session.roomCode||"SOLO",this.session.server),this.ui.clearLabels(),this.ui.setMode("foot"),this.ui.setPaused(!1),this.ui.hideDeath(),this.ui.hideResult(),this.ui.hideDisconnect(),this.ui.setAlert(0),this.ui.setAmmo(wr,Cl,0),this.ui.setVitals(100,100),this.ui.setCrosshair(!0,!1,!1),this.ui.setBoost(1,!1),this.ui.initMinimap(this.world),this.ui.setInteraction("",!1),this.ui.showMissionBanner("GHOST PROTOCOL",this.isHost?"SECURE THREE DATA CACHES":"SYNCING WITH HOST",this.isHost?"NEW CONTRACT":"CO-OP LINK",4600),this.status="playing",this.paused=!1,this.completed=!1,this.ignoreUnlock=!1,this.currentMode="foot",this.cameraYaw=this.world.spawn.rot,this.cameraPitch=-.08,this.mission=null,this.localCar=null,this.remotePlayers.clear(),this.remoteEnemies.clear(),this.localEnemies=[],this.pings=[],this.elapsed=0,this.createLocalCharacter(this.myColor),this.initCars(),this.world.extractionGroup.visible=!1,this.isHost?this.startMission():this.ui.feed("Waiting for the host to transmit the contract\u2026"),this.session.online?(this.ui.updateRoster({id:this.session.selfId,name:this.myName,color:this.myColor},[...this.network?.players.values()||[]],this.session.hostId),this.isHost?this.ui.feed("City link online. Share the room code with your partner.","ok","LINK"):this.ui.feed("Linked to the host city.","ok","LINK")):this.ui.feed("Solo patrol engaged. Three caches are live in the district.","ok","CONTRACT"),this.ui.toast("Click the city to take control.","info",3600),this.ui.setLockHint(!0),this.requestPointerLock(),this.lastFpsUpdate=0,this.playerStateTimer=0,this.statePingTimer=0)}createLocalCharacter(e){this.localChar&&(this.scene.remove(this.localChar.group),this.localChar.group.traverse(a=>{a.isMesh&&(a.geometry?.dispose?.(),Array.isArray(a.material)?a.material.forEach(c=>c.dispose?.()):a.material?.dispose?.())})),this.localCharShadow&&this.scene.remove(this.localCharShadow);let t=[14265226,12157538,9132866,15123105,7226933],n=Math.abs(Number(e)||0)%5;this.localChar=ol({color:e,skin:t[n]}),this.scene.add(this.localChar.group),this.localCharShadow=Ki(this.shadowTex,2.1),this.localCharShadow.material.opacity=.72,this.scene.add(this.localCharShadow);let s=this.world.spawn,r=this.session?[...this.network?.players?.values()||[]].length:0,o=this.session?.online?r*1.4:0;this.player={pos:new I(s.x+o,0,s.z),yaw:s.rot,bodyYaw:s.rot,velY:0,grounded:!0,health:100,stamina:100,alive:!0,moveSpeed:0,sprinting:!1,ammo:wr,reserve:Cl,reloading:0,fireCooldown:0,lastDamageAt:0,deathTimer:0,wasInCar:!1},this.cameraYaw=s.rot,this.cameraPitch=-.08}initCars(){for(let e of this.cars)this.scene.remove(e.model.group);this.cars=[],this.localCar=null,this.world.carSpawns.forEach((e,t)=>{let n=Im[t%Im.length]??e.color,s=$p(n);s.group.position.set(e.x,.02,e.z),s.group.rotation.y=e.rot;let r=Ki(this.shadowTex,4.6);r.position.y=.03,r.material.opacity=.48,s.group.add(r),this.scene.add(s.group),this.cars.push({id:`car-${t}`,x:e.x,z:e.z,yaw:e.rot,speed:0,steer:0,boost:1,model:s,color:n,occupiedBy:null})})}startMission(){this.missionCount+=1;let e=this.world.shardSites,t=[],n=this.missionCount*2%Math.max(1,e.length);for(let s=0;s<e.length&&t.length<3;s+=1){let r=e[(s+n)%e.length];t.every(o=>mn(o.x,o.z,r.x,r.z)>32)&&t.push(r)}for(let s of e){if(t.length>=3)break;t.includes(s)||t.push(s)}for(;t.length<3;)t.push({x:-40+t.length*38,z:40,name:"NIGHT MARKET"});this.mission={phase:"collect",shards:t.slice(0,3).map((s,r)=>({id:`shard-${this.missionCount}-${r}`,x:s.x,z:s.z,name:s.name||"CACHE",collected:!1})),elapsed:0,score:0,extraction:{x:this.world.extraction.x,z:this.world.extraction.z},extractProgress:0,extractSeconds:8,allInside:!1,completeIn:0,contract:this.missionCount},this.completed=!1,this.resultTimer=0,this.extractWasInside=!1,this.clearShardVisuals(),this.syncShardVisuals(),this.clearEnemies(),this.isHost&&this.spawnLocalEnemies(),this.world.extractionGroup.visible=!1,this.ui.hideResult(),this.ui.showMissionBanner("GHOST PROTOCOL","SECURE THREE DATA CACHES","NEW CONTRACT",4400),this.ui.feed(`Contract ${String(this.missionCount).padStart(2,"0")} live. Find the three caches.`,"ok","CONTRACT"),this.session?.online&&this.isHost&&this.sendFullState(!0)}onKeyDown(e){let t=document.activeElement;if(!(t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"))&&!(this.status==="menu"||this.status==="disconnected")){if(e.code==="Escape"){this.controlsOpen&&(this.controlsOpen=!1,this.ui.setControls(!1),this.status==="paused"&&(this.paused=!1,this.status="playing",this.ui.setPaused(!1)));return}if(this.status!=="result"&&!this.chatOpen&&this.status!=="paused"){if(e.code==="KeyT"&&!e.repeat){this.toggleChat(!0);return}if(!(this.status!=="playing"&&this.status!=="dead")&&(this.keys.add(e.code),!e.repeat))switch(e.code){case"Space":this.currentMode==="foot"&&(e.preventDefault(),this.jump());break;case"KeyF":this.vehicleInteract();break;case"KeyE":this.useInteract();break;case"KeyR":this.currentMode==="car"?this.resetCar():this.startReload();break;case"KeyQ":this.sendMapPing();break;case"KeyM":{let n=!this.audio.muted;this.audio.setMuted(n),Ts(ld,String(n));let s=document.getElementById("muteBtn");s&&(s.textContent=n?"SOUND OFF":"SOUND ON"),this.ui.toast(n?"Audio muted.":"Audio on.","info",1600);break}default:break}}}}onKeyUp(e){this.keys.delete(e.code)}onMouseDown(e){if(!(this.status==="menu"||this.status==="disconnected"||this.status==="result")&&this.session){if(document.pointerLockElement!==this.canvas){(this.status==="playing"||this.status==="dead")&&this.requestPointerLock();return}this.paused||this.chatOpen||this.controlsOpen||(e.button===0?(this.mouseDown=!0,e.preventDefault()):e.button===2&&(this.aiming=!0,e.preventDefault()))}}onMouseUp(e){e.button===0&&(this.mouseDown=!1),e.button===2&&(this.aiming=!1)}onMouseMove(e){if(document.pointerLockElement!==this.canvas||this.chatOpen||this.controlsOpen||this.paused)return;let t=this.lookSensitivity;if(this.currentMode==="car"){this.driveLookYaw=Xe(this.driveLookYaw-e.movementX*.0024*t,-2.5,2.5),this.drivePitch=Xe(this.drivePitch+e.movementY*.0016*t,.02,.78),this.lastLookMove=performance.now();return}this.cameraYaw-=e.movementX*.0022*t,this.cameraYaw>Math.PI&&(this.cameraYaw-=dt),this.cameraYaw<-Math.PI&&(this.cameraYaw+=dt),this.cameraPitch=Xe(this.cameraPitch-e.movementY*.0019*t,-1.02,.68),this.lastLookMove=performance.now()}onPointerLockChange(){if(document.pointerLockElement===this.canvas){this.ui.setLockHint(!1),this.status==="paused"&&(this.paused=!1,this.status="playing",this.ui.setPaused(!1));return}this.ui.setLockHint(!1),this.mouseDown=!1,this.aiming=!1,this.status==="playing"&&!this.chatOpen&&!this.controlsOpen&&!this.ignoreUnlock&&this.setPaused(!0)}onWindowBlur(){this.keys.clear(),this.mouseDown=!1,this.aiming=!1}requestPointerLock(){if(!(!this.session||this.status==="menu"||this.status==="disconnected"))try{let e=this.canvas.requestPointerLock?.();e?.catch&&e.catch(()=>{})}catch{}}setPaused(e){this.status==="disconnected"||this.status==="result"||this.status==="menu"||this.status!=="dead"&&(this.paused=e,this.status=e?"paused":"playing",this.ui.setPaused(e),this.keys.clear(),this.mouseDown=!1,this.aiming=!1,this.ui.setCrosshair(!e),e&&this.ui.setInteraction("",!1),e&&document.pointerLockElement&&document.exitPointerLock())}toggleChat(e){this.session&&(e&&this.status!=="playing"&&this.status!=="dead"&&this.status!=="paused"||(this.chatOpen=e,this.ui.setChatOpen(e),e?(this.keys.clear(),this.mouseDown=!1,this.aiming=!1):document.pointerLockElement!==this.canvas&&this.requestPointerLock()))}sendChat(){let t=(document.getElementById("chatInput")?.value||"").replace(/[<>]/g,"").trim().slice(0,120);this.toggleChat(!1),t&&(this.ui.chat(this.myName,t,this.myColor),this.network?.send("chat",{text:t,name:this.myName,color:this.myColor}))}sendMapPing(){if(!this.player||!this.player.alive||!this.mission)return;let e=this.currentMode==="car"&&this.localCar?{x:this.localCar.x,z:this.localCar.z}:{x:this.player.pos.x,z:this.player.pos.z};this.pingSeq+=1;let t=`${this.session?.selfId||"solo"}-${this.pingSeq}`;this.addPing(t,this.myName,e.x,e.z,this.myColor),this.network?.send("map-ping",{id:t,name:this.myName,x:e.x,z:e.z,color:this.myColor})}addPing(e,t,n,s,r=16723349){this.pings.some(o=>o.id===e)||(this.pings.push({id:e,name:t||"ALLY",position:new I(n,2.3,s),born:this.elapsed,color:r}),this.pings.length>8&&this.pings.shift(),this.audio.ping(),this.ui.feed(`${(t||"ALLY").toUpperCase()} marked a location.`,"info","PING"))}jump(){let e=this.player;!e||!e.alive||!e.grounded||this.currentMode!=="foot"||(e.velY=6.1,e.grounded=!1,this.audio.jump())}updatePlayer(e,t){let n=this.player;if(!n)return;if(!n.alive){n.deathTimer-=e,this.ui.updateDeath(n.deathTimer),n.deathTimer<=0&&this.respawn(),this.localChar&&(this.localChar.group.position.set(n.pos.x,0,n.pos.z),this.localCharShadow.position.set(n.pos.x,.045,n.pos.z));return}n.fireCooldown>0&&(n.fireCooldown=Math.max(0,n.fireCooldown-e)),n.reloading>0&&(n.reloading=Math.max(0,n.reloading-e),this.ui.setAmmo(n.ammo,n.reserve,1-n.reloading/1.35),n.reloading===0&&this.finishReload()),n.health>0&&n.health<100&&this.elapsed-n.lastDamageAt>6&&(n.health=Math.min(100,n.health+9*e),this.ui.setVitals(n.health,n.stamina));let s=this.status==="playing"&&!this.paused&&!this.chatOpen&&this.controlsOpen===!1,r=0,o=0,a=!1;if(this.currentMode==="car"){n.stamina=Math.min(100,n.stamina+16*e),n.moveSpeed=0,this.localChar&&(this.localChar.group.visible=!1,this.localCharShadow.visible=!1,this.localCar&&(n.pos.x=this.localCar.x,n.pos.z=this.localCar.z));return}if(s){let f=(this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0)-(this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0),p=(this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0)-(this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0),y=Math.sin(this.cameraYaw),g=Math.cos(this.cameraYaw);r=y*f-g*p,o=g*f+y*p;let m=Math.hypot(r,o);m>.001&&(r/=m,o/=m,a=!0)}let c=s&&a&&!this.aiming&&(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"))&&n.stamina>.5;n.sprinting=c;let l=this.aiming?3.1:c?8.7:5.3;c?n.stamina=Math.max(0,n.stamina-20*e):n.stamina=Math.min(100,n.stamina+15*e);let h=n.grounded?13:5;n.moveSpeed=oi(n.moveSpeed,a&&s?l:0,h,e),n.moveSpeed>.02&&a&&(n.pos.x+=r*n.moveSpeed*e,n.pos.z+=o*n.moveSpeed*e,this.stepAccum=(this.stepAccum||0)+n.moveSpeed*e,this.stepAccum>(c?2.25:1.7)&&(this.stepAccum=0,this.audio.footstep(c))),n.velY-=19.5*e,n.pos.y+=n.velY*e,n.pos.y<=0&&(!n.grounded&&n.velY<-4.2&&this.audio.land(),n.pos.y=0,n.velY=0,n.grounded=!0);for(let f of this.world.colliders)vr(n.pos,.46,f);let d=this.world.metro.bounds-4;n.pos.x=Xe(n.pos.x,-d,d),n.pos.z=Xe(n.pos.z,-d,d);let u=this.aiming||t-(n.lastShotAt||0)<.55?this.cameraYaw:a?Math.atan2(r,o):n.bodyYaw;if(n.bodyYaw=qo(n.bodyYaw,u,11,e),n.yaw=this.cameraYaw,this.localChar&&(this.localChar.group.visible=!0,this.localChar.group.position.copy(n.pos),this.localChar.group.rotation.y=n.bodyYaw,this.localChar.animate(e,t,n.moveSpeed,n.grounded,this.aiming)),this.localCharShadow){this.localCharShadow.visible=!0,this.localCharShadow.position.set(n.pos.x,.045,n.pos.z);let f=Xe(n.pos.y/3,0,.9);this.localCharShadow.material.opacity=.72*(1-f*.8),this.localCharShadow.scale.setScalar(1-f*.3)}}updateVehicle(e,t){let n=this.localCar;if(!n||!this.player)return;let s=this.player,r=this.status==="playing"&&!this.paused&&!this.chatOpen&&!this.controlsOpen,o=r?(this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0)-(this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0):0,a=r?(this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0)-(this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0):0,c=r&&this.keys.has("Space"),l=r&&(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"));n.boost=n.boost??1;let h=l&&n.boost>.02&&o>0&&n.speed>1;h?n.boost=Math.max(0,n.boost-.27*e):n.boost=Math.min(1,n.boost+.12*e);let d=h?66:50;o>0?n.speed<0?n.speed+=36*e:n.speed+=(h?25:15)*e*(1-Xe(n.speed/d,0,1)):o<0?n.speed>.4?n.speed-=38*e:n.speed-=13*e:n.speed*=Math.exp(-.62*e),c&&(n.speed*=Math.exp(-1.15*e)),n.speed-=n.speed*.06*e,n.speed=Xe(n.speed,-15,d);let u=Math.abs(n.speed),f=Xe(u/5,0,1)*(1-Xe(u/105,0,.52)),p=c?1.55:1;u>.25&&(n.yaw-=a*1.5*f*p*e*Math.sign(n.speed||1)),n.steer=oi(n.steer,-a*(c?.7:.5),7,e);let y=Math.sin(n.yaw),g=Math.cos(n.yaw);if(n.x+=y*n.speed*e,n.z+=g*n.speed*e,this.resolveVehicleCollisions(n,y,g)){let E=u;E>12?(this.effects.bulletImpact(new I(n.x+y*2.1,.6,n.z+g*2.1),new I(0,1,0),16760939),this.audio.explosion(),this.cameraShake=Math.min(1.2,this.cameraShake+E*.02)):E>3&&this.audio.land(),n.speed*=.28}let _=this.world.metro.bounds-4,T=Xe(n.x,-_,_),M=Xe(n.z,-_,_);if((T!==n.x||M!==n.z)&&(u>12&&(this.effects.bulletImpact(new I(n.x+y*2.1,.6,n.z+g*2.1),new I(0,1,0),16760939),this.audio.land(),this.cameraShake=Math.min(1,this.cameraShake+u*.015)),n.speed*=.2),n.x=T,n.z=M,n.speed=Xe(n.speed,-15,d),n.model.group.position.set(n.x,.02,n.z),n.model.group.rotation.y=n.yaw,n.model.update(e,n.speed,n.steer,h,o<0||c,!0),s.pos.set(n.x,0,n.z),s.bodyYaw=n.yaw,s.velY=0,s.grounded=!0,this.driveLookYaw!==0&&performance.now()-this.lastLookMove>1500&&(this.driveLookYaw=oi(this.driveLookYaw,0,1.4,e)),this.driftTimer=(this.driftTimer||0)+e,this.driftTimer>.045){if(this.driftTimer=0,(c||Math.abs(a)>.2)&&u>9){let E=n.x-y*2.2+(Math.random()-.5)*1.4,x=n.z-g*2.2+(Math.random()-.5)*1.4;this.effects.drift(new I(E,.15,x),Xe(u/28,.4,1.4))}if(h){let E=n.x-y*2.5,x=n.z-g*2.5;this.effects.boostTrail(new I(E,.48,x),6543871)}}this.audio.updateCar({active:!0,speed:n.speed,throttle:o,boosting:h,drifting:c&&u>8});let w=n.speed<-.5?"R":n.speed<.5?"N":String(Xe(Math.ceil(u/11),1,6));this.ui.setCarStats(n.speed,n.boost,w,o),this.ui.setBoost(n.boost,h),this.ui.setBoosting(h)}resolveVehicleCollisions(e,t,n){let s=!1;for(let r of[-1.45,0,1.45]){let o={x:e.x+t*r,z:e.z+n*r},a=o.x,c=o.z;for(let d of this.world.colliders)vr(o,1.02,d);let l=o.x-a,h=o.z-c;Math.abs(l)+Math.abs(h)>.001&&(e.x+=l,e.z+=h,s=!0)}return s}resetCar(){let e=this.localCar;if(!e)return;let t=this.world.carSpawns[0],n=1/0;for(let s of this.world.carSpawns){let r=mn(e.x,e.z,s.x,s.z)+(s.x===7?3:0);r<n&&(n=r,t=s)}e.x=t.x,e.z=t.z,e.yaw=t.rot,e.speed=0,e.boost=1,e.model.group.position.set(e.x,.02,e.z),e.model.group.rotation.y=e.yaw,this.cameraYaw=e.yaw,this.driveLookYaw=0,this.ui.toast("Vehicle re-synced to the nearest road.","info",2e3),this.audio.door(),this.sendPlayerState(!0)}nearestCar(e=4.6){let t=null,n=e;for(let s of this.cars){if(s.occupiedBy&&s.occupiedBy!==this.session?.selfId)continue;let r=mn(this.player.pos.x,this.player.pos.z,s.x,s.z);r<n&&(n=r,t=s)}return t}nearestShard(e=4.3){if(!this.mission||this.mission.phase!=="collect")return null;let t=null,n=e;for(let s of this.mission.shards){if(s.collected)continue;let r=mn(this.player.pos.x,this.player.pos.z,s.x,s.z);r<n&&(n=r,t=s)}return t}vehicleInteract(){if(!this.player||!this.player.alive)return;if(this.currentMode==="car"){if(Math.abs(this.localCar?.speed||0)>9){this.ui.toast("Slow down before exiting.","warn",1800);return}this.exitCar();return}let e=this.nearestCar();e&&this.enterCar(e)}useInteract(){if(!this.player||!this.player.alive||this.status!=="playing")return;if(this.currentMode==="car"){this.vehicleInteract();return}let e=this.nearestShard(4.8);if(e){this.isHost?this.hostCollectShard(e.id):(this.network?.send("shard-request",{shardId:e.id}),this.ui.toast("Breach requested \u2014 hold position.","info",1800));return}let t=this.nearestCar();t&&this.enterCar(t)}enterCar(e){!this.player||!this.player.alive||(this.currentMode="car",this.localCar=e,e.occupiedBy=this.session?.selfId||"solo",e.speed=0,e.boost=e.boost??1,e.model.group.position.set(e.x,.02,e.z),e.model.group.rotation.y=e.yaw,this.cameraYaw=e.yaw,this.driveLookYaw=0,this.drivePitch=.26,this.aiming=!1,this.mouseDown=!1,this.player.pos.set(e.x,0,e.z),this.player.bodyYaw=e.yaw,this.localChar&&(this.localChar.group.visible=!1,this.localCharShadow.visible=!1),this.ui.setMode("car"),this.ui.setCrosshair(!1),this.ui.setInteraction("",!1),this.ui.setBoost(e.boost,!1),this.audio.door(),this.effects.exitCar(new I(e.x,.2,e.z)),this.audio.updateCar({active:!0,speed:0,throttle:0,boosting:!1,drifting:!1}),this.sendPlayerState(!0))}exitCar(){let e=this.localCar;if(!e)return;let t=Math.sin(e.yaw),n=Math.cos(e.yaw),s=1,r=e.x+n*1.7,o=e.z-t*1.7;for(let c of this.world.colliders)if(vr({x:r,z:o},.5,c)){s=-1,r=e.x+n*-1.7,o=e.z-t*-1.7;break}let a=this.world.metro.bounds-4;this.player.pos.set(Xe(r,-a,a),0,Xe(o,-a,a)),this.player.bodyYaw=e.yaw,this.player.velY=0,this.player.grounded=!0,e.occupiedBy=null,e.speed=0,e.steer=0,this.localCar=null,this.currentMode="foot",this.cameraYaw=e.yaw,this.cameraPitch=-.08,this.aiming=!1,this.localChar&&(this.localChar.group.visible=!0,this.localChar.group.position.copy(this.player.pos),this.localChar.group.rotation.y=this.player.bodyYaw),this.localCharShadow&&(this.localCharShadow.visible=!0,this.localCharShadow.position.set(this.player.pos.x,.045,this.player.pos.z)),this.driveLookYaw=0,this.ui.setMode("foot"),this.ui.setCrosshair(!0),this.ui.setInteraction("",!1),this.audio.door(),this.audio.updateCar({active:!1,speed:0,throttle:0,boosting:!1,drifting:!1}),this.effects.exitCar(new I(e.x,.2,e.z)),this.sendPlayerState(!0)}updateCars(e){let t=performance.now();for(let n of this.cars){if(n===this.localCar)continue;let s=n.occupiedBy?this.remotePlayers.get(n.occupiedBy):null;if(s?(n.x=s.pos.x,n.z=s.pos.z,n.yaw=s.bodyYaw,n.speed=s.speed||0,n.model.group.position.set(n.x,.02,n.z),n.model.group.rotation.y=n.yaw,n.model.update(e,n.speed,0,!!s.boosting,!1,!0)):(n.occupiedBy&&!s&&(n.occupiedBy=null),n.model.group.position.set(n.x,.02,n.z),n.model.group.rotation.y=n.yaw),n.model.exhausts)for(let r of n.model.exhausts)r.material.opacity*=.9}this.carSyncTimer=(this.carSyncTimer||0)+e}updateCamera(e,t){let n=this.player;if(!n)return;let s=this.cameraShake;if(this.cameraShake=Math.max(0,this.cameraShake-e*2.6),this.currentMode==="car"&&this.localCar){let y=this.localCar,g=Math.abs(y.speed);this.cameraYaw=y.yaw;let m=y.yaw+this.driveLookYaw,_=7.8+Xe(g/70,0,1)*2.6,T=1.35+Math.sin(this.drivePitch)*_*.72,M=new I(y.x,1.45,y.z),w=new I(y.x-Math.sin(m)*Math.cos(this.drivePitch)*_,Math.max(.85,T),y.z-Math.cos(m)*Math.cos(this.drivePitch)*_),E=this.clipCamera(M,w);this.camera.position.copy(E),s>.01&&(this.camera.position.x+=(Math.random()-.5)*s*.35,this.camera.position.y+=(Math.random()-.5)*s*.25),Al.set(y.x+Math.sin(m)*5.2,1.25+Math.sin(this.drivePitch)*1.4,y.z+Math.cos(m)*5.2),this.camera.lookAt(Al);let x=64+Xe(g/65,0,1)*9+(this.keys.has("ShiftLeft")?5:0);this.setCameraFov(x,e);return}let r=Al.set(n.pos.x,n.pos.y+1.62,n.pos.z).clone(),o=Lv.set(Math.sin(this.cameraYaw)*Math.cos(this.cameraPitch),Math.sin(this.cameraPitch),Math.cos(this.cameraYaw)*Math.cos(this.cameraPitch)).normalize(),a=Math.cos(this.cameraYaw),c=-Math.sin(this.cameraYaw),l=this.aiming?.58:.42,h=this.aiming?2.15:4.15+(n.moveSpeed>6.5?.45:0),d=Dv.set(r.x+a*l-o.x*h,r.y-o.y*h+(this.aiming?.08:.2),r.z+c*l-o.z*h);d.y=Math.max(.52,d.y);let u=this.clipCamera(r,d);this.camera.position.copy(u),s>.01&&(this.camera.position.x+=(Math.random()-.5)*s*.28,this.camera.position.y+=(Math.random()-.5)*s*.2);let f=n.grounded&&n.moveSpeed>.2?Math.sin(t*(n.sprinting?12:8))*Math.min(.045,n.moveSpeed*.006):0;this.camera.position.y+=f,this.camera.lookAt(this.camera.position.x+o.x,this.camera.position.y+o.y,this.camera.position.z+o.z);let p=this.aiming?46:n.sprinting?67:62;if(this.setCameraFov(p,e),this.localChar){let y=this.camera.position.distanceTo(n.pos);this.localChar.group.visible=n.alive&&y>.85}}setCameraFov(e,t){if(Math.abs(this.camera.fov-e)<.05)return;this.camera.fov=oi(this.camera.fov,e,7,t),this.camera.updateProjectionMatrix();let n=this.renderer.domElement.height||window.innerHeight;this.effects.setViewport?.(n,this.camera.fov)}clipCamera(e,t){let n=new I().subVectors(t,e),s=1;for(let r of this.world.colliders){let o=el(e,t,r,.24);o!==null&&o>.02&&o<s&&(s=o)}return s<.999&&t.copy(e).addScaledVector(n,Math.max(.12,s*.9)),t}updateInteractions(){if(!this.player||this.status!=="playing"||this.chatOpen||this.paused||!this.player.alive){this.ui.setInteraction("",!1);return}if(this.currentMode==="car"){this.ui.setInteraction("",!1);return}if(this.nearestShard(4.8)){this.ui.setInteraction("BREACH DATA CACHE",!0,"E");return}if(this.nearestCar()){this.ui.setInteraction("ENTER VEHICLE",!0,"F");return}if(this.mission&&(this.mission.phase==="extract"||this.mission.phase==="extracting")&&mn(this.player.pos.x,this.player.pos.z,this.world.extraction.x,this.world.extraction.z)<9){this.ui.setInteraction("HOLD THE EXTRACTION ZONE",!0,"\u25C6");return}this.ui.setInteraction("",!1)}clearShardVisuals(){for(let[,e]of this.shardVisuals)this.scene.remove(e.group),this.scene.remove(e.shadow),e.group.traverse(t=>{t.isMesh&&(t.geometry?.dispose?.(),Array.isArray(t.material)?t.material.forEach(n=>n.dispose?.()):t.material?.dispose?.())}),e.shadow.geometry?.dispose?.(),e.shadow.material?.dispose?.();this.shardVisuals.clear()}syncShardVisuals(){if(!this.mission)return;let e=new Set;for(let t of this.mission.shards){e.add(t.id);let n=this.shardVisuals.get(t.id);if(!n){let s=Zp(),r=new yt;r.position.set(t.x,0,t.z),r.add(s.group),r.position.y=0;let o=Ki(this.shadowTex,5);o.position.set(t.x,.045,t.z),o.material.opacity=.45,this.scene.add(r),this.scene.add(o),n={group:r,shadow:o,model:s,shard:t},this.shardVisuals.set(t.id,n)}n.group.visible=!t.collected,n.shadow.visible=!t.collected,n.shard=t}for(let[t,n]of this.shardVisuals)e.has(t)||(this.scene.remove(n.group),this.scene.remove(n.shadow),n.group.traverse(s=>{s.isMesh&&(s.geometry?.dispose?.(),Array.isArray(s.material)?s.material.forEach(r=>r.dispose?.()):s.material?.dispose?.())}),n.shadow.geometry?.dispose?.(),n.shadow.material?.dispose?.(),this.shardVisuals.delete(t))}updateShardVisuals(e,t){this.shardFxTimer+=e;let n=this.shardFxTimer>.12;n&&(this.shardFxTimer=0);for(let[,s]of this.shardVisuals)!s.group.visible||!s.shard||s.shard.collected||(s.model.animate(e,t),n&&this.effects.sparkle(new I(s.shard.x,1.8,s.shard.z),6223615));this.world.extractionGroup.visible=!!this.mission&&(this.mission.phase==="extract"||this.mission.phase==="extracting"||this.mission.phase==="complete")}updateMission(e,t){if(this.mission)if(this.isHost){if((this.mission.phase==="collect"||this.mission.phase==="extract"||this.mission.phase==="extracting")&&(this.mission.elapsed+=e),this.mission.phase==="extract"||this.mission.phase==="extracting"){let r=this.player?.alive&&mn(this.player.pos.x,this.player.pos.z,this.world.extraction.x,this.world.extraction.z)<8.6;for(let o of this.remotePlayers.values()){if(!o.alive){r=!1;continue}let a=o.pos.x,c=o.pos.z;mn(a,c,this.world.extraction.x,this.world.extraction.z)>8.6&&(r=!1)}r?(this.mission.phase==="extract"&&(this.mission.phase="extracting",this.ui.showMissionBanner("EXTRACTION",`HOLD THE RING // ${this.mission.extractSeconds}s`,"IN PROGRESS",3200),this.ui.feed("All operatives inside. Hold the extraction ring.","warn","EXTRACT"),this.audio.boost()),this.mission.extractProgress+=e,!this.extractWasInside&&this.mission.extractProgress>.1&&this.ui.toast("Extraction in progress \u2014 stay inside the ring.","info",2e3),this.extractWasInside=!0,this.mission.extractProgress>=this.mission.extractSeconds&&this.completeMission()):(this.mission.phase==="extracting"&&(this.mission.phase="extract",this.mission.extractProgress=0,this.ui.toast("Extraction interrupted \u2014 regroup in the ring.","warn",2400),this.ui.feed("Extraction interrupted. Every operative must hold the ring.","warn","EXTRACT")),this.extractWasInside=!1)}this.mission.phase==="complete"&&(this.mission.completeIn=Math.max(0,this.mission.completeIn-e),this.ui.updateResultCountdown(this.mission.completeIn),this.mission.completeIn<=0&&this.resetMission()),this.mission.phase==="extracting"&&this.ui.setMission(this.mission,0),this.sendStateTimer=(this.sendStateTimer||0)+e,this.session?.online&&this.sendStateTimer>.1&&(this.sendStateTimer=0,this.sendFullState(!1))}else this.mission.phase!=="complete"?this.mission.elapsed+=e:(this.mission.completeIn=Math.max(0,(this.mission.completeIn??0)-e),this.ui.updateResultCountdown(this.mission.completeIn))}completeMission(){!this.mission||this.isHost===!1||(this.mission.phase="complete",this.mission.score+=3e3+Math.round(Math.max(0,1600-this.mission.elapsed*3)),this.mission.completeIn=12,this.completed=!0,this.resultTimer=12,this.status="result",this.ignoreUnlock=!0,this.mouseDown=!1,this.aiming=!1,this.ui.setCrosshair(!1),this.ui.setInteraction("",!1),this.ui.hideDeath(),this.ui.showMissionBanner("CONTRACT COMPLETE","GHOST PROTOCOL SECURED","EXFIL",4600),this.ui.showResult({time:this.mission.elapsed,score:this.mission.score,countdown:this.mission.completeIn,caches:3}),this.effects.explosion(new I(this.world.extraction.x,2,this.world.extraction.z),4585215,1.8),this.ui.feed(`Contract complete. ${Math.round(this.mission.score)} points banked.`,"ok","CONTRACT"),this.audio.pickup(),this.session?.online&&this.sendFullState(!0),document.pointerLockElement&&document.exitPointerLock())}resetMission(){this.isHost&&(this.completed=!1,this.status="playing",this.paused=!1,this.resultTimer=0,this.ignoreUnlock=!1,this.ui.hideResult(),this.ui.setPaused(!1),this.startMission(),this.requestPointerLock())}hostCollectShard(e){if(!this.isHost||!this.mission||this.mission.phase!=="collect")return;let t=this.mission.shards.find(s=>s.id===e);!t||t.collected||mn(this.player.pos.x,this.player.pos.z,t.x,t.z)>6.2||(this.applyShardCollected(t,this.myName,!0),this.mission.score+=500,this.network?.send("shard-collected",{shardId:t.id,by:this.session?.selfId,name:this.myName}),this.mission.shards.every(s=>s.collected)&&(this.mission.phase="extract",this.world.extractionGroup.visible=!0,this.ui.showMissionBanner("EXTRACTION READY","RETURN TO THE PLAZA AS A TEAM","ALL CACHES SECURED",5200),this.ui.feed("All caches secured. Extraction gate is live at the plaza.","ok","EXTRACT"),this.ui.toast("Extraction unlocked \u2014 get to the plaza.","ok",4e3)),this.sendFullState(!0))}applyShardCollected(e,t,n=!0){if(!e||e.collected)return;e.collected=!0;let s=this.shardVisuals.get(e.id);s&&(s.group.visible=!1,s.shadow.visible=!1),this.effects.pickup(new I(e.x,1.7,e.z),5240319),this.audio.pickup(),n&&this.ui.feed(`${(t||"ALLY").toUpperCase()} breached ${e.name||"a data cache"}.`,"ok","CACHE"),this.mission&&this.mission.shards.every(r=>r.collected)&&(this.world.extractionGroup.visible=!0,this.isHost||(this.ui.showMissionBanner("EXTRACTION READY","RETURN TO THE PLAZA AS A TEAM","ALL CACHES SECURED",5200),this.ui.feed("All caches secured. Extraction gate is live at the plaza.","ok","EXTRACT")))}startReload(){let e=this.player;!e||!e.alive||this.currentMode==="car"||e.reloading>0||e.ammo>=wr||e.reserve<=0||(e.reloading=1.35,this.audio.reload())}finishReload(){let e=this.player;if(!e)return;let t=wr-e.ammo,n=Math.min(t,e.reserve);e.ammo+=n,e.reserve-=n,this.ui.setAmmo(e.ammo,e.reserve,0)}updateWeapon(e,t){let n=this.player;if(!n||!n.alive){this.mouseDown=!1;return}if(this.currentMode!=="foot"||this.status!=="playing"||this.paused||this.chatOpen||this.controlsOpen){this.currentMode==="car"&&this.ui.setCrosshair(!1);return}document.pointerLockElement!==this.canvas&&(this.mouseDown=!1),this.ui.setCrosshair(!0,this.aiming,this.isAimBlocked()),this.mouseDown&&n.fireCooldown<=0&&this.fireWeapon(t)}isAimBlocked(){let e=this.camera.position,t=this.camera.getWorldDirection(Al),n=new I(e.x+t.x*2.8,e.y+t.y*2.8,e.z+t.z*2.8);for(let s of this.world.colliders){let r=el(e,n,s,0);if(r!==null&&r<.99)return!0}return!1}fireWeapon(e){let t=this.player;if(!t||!t.alive||t.reloading>0)return;if(t.ammo<=0){this.audio._noiseBurst?.(.03,2e3,.01),this.startReload();return}t.ammo-=1,t.fireCooldown=.115,t.lastShotAt=e,t.reloading=0,this.ui.setAmmo(t.ammo,t.reserve,0),this.cameraShake=Math.min(.32,this.cameraShake+.075),this.cameraPitch=Xe(this.cameraPitch+.0035,-1.02,.68),this.audio.gunshot(!0),this.localChar&&(this.localChar.flashTime=.06);let n=this.camera.position.clone(),s=this.camera.getWorldDirection(new I),r=n.clone().addScaledVector(s,150),o=this.pickShootTarget(n,s,150),a=r;o&&(a=o.point.clone(),o.enemy?(this.isHost?this.applyEnemyDamage(o.enemy,Lm,this.myName):this.network?.send("shot",{enemyId:o.enemy.id,ox:n.x,oy:n.y,oz:n.z,ex:a.x,ey:a.y,ez:a.z}),this.ui.hitmarker(),this.audio.hitmarker(),this.effects.enemyHit(a,16738901),t.scoreFlash=.2):this.effects.bulletImpact(a,new I(0,1,0),10480383));let c=new I(t.pos.x+Math.sin(t.bodyYaw)*.55+Math.cos(t.bodyYaw)*.24,t.pos.y+1.3,t.pos.z+Math.cos(t.bodyYaw)*.55-Math.sin(t.bodyYaw)*.24);this.effects.muzzleFlash(c,16769955,s),this.effects.tracer(c,a,11072255),this.sendPlayerState(!0)}pickShootTarget(e,t,n){let s=this.isHost?this.localEnemies:[...this.remoteEnemies.values()],r=null,o=n;for(let l of s){if(!l.alive)continue;let h=l.y??l.pos?.y??0,d=new I(l.x??l.pos?.x??0,l.type==="drone"?h:h+1.1,l.z??l.pos?.z??0),f=d.clone().sub(e).dot(t);if(f<.5||f>o)continue;let p=e.clone().addScaledVector(t,f),y=l.type==="drone"?1.15:.9;p.distanceTo(d)>y||this.isShotBlocked(e,d)||(o=f,r={enemy:l,point:p,distance:f})}if(r)return r;let a=t.y<-.02?-e.y/t.y:1/0;return a>0&&a<n?{point:e.clone().addScaledVector(t,a),distance:a}:{point:e.clone().addScaledVector(t,Math.min(n,90)),distance:Math.min(n,90)}}isShotBlocked(e,t){for(let n of this.world.colliders){let s=el(e,t,n,0);if(s!==null&&s>.02&&s<.98)return!0}return!1}spawnLocalEnemies(){if(!this.isHost||!this.mission)return;this.clearEnemies();let e=this.mission.shards;e.forEach((t,n)=>{let s=n/Math.max(1,e.length)*dt+.7;this.createGuard(t.x+Math.cos(s)*4.2,t.z+Math.sin(s)*4.2,`guard-${this.mission.contract}-${n}`),this.createDrone(t.x-Math.cos(s)*6.4,t.z-Math.sin(s)*6.4,`drone-${this.mission.contract}-${n}`,n)})}createGuard(e,t,n){let s=hu(),r={x:e,z:t};for(let c of this.world.colliders)vr(r,.55,c);let o=this.world.metro.bounds-6;r.x=Xe(r.x,-o,o),r.z=Xe(r.z,-o,o);let a=Ki(this.shadowTex,1.9);a.position.set(r.x,.045,r.z),a.material.opacity=.7,s.group.position.set(r.x,0,r.z),this.scene.add(s.group),this.scene.add(a),this.localEnemies.push({id:n,type:"guard",x:r.x,y:0,z:r.z,homeX:r.x,homeZ:r.z,yaw:Math.random()*dt,health:100,maxHealth:100,alive:!0,alert:!1,fireTimer:1.2+Math.random()*1.4,patrolPhase:Math.random()*dt,orbitPhase:0,model:s,group:s.group,shadow:a,moveSpeed:0})}createDrone(e,t,n,s){let r=lu(),o=Ki(this.shadowTex,1.2);o.position.set(e,.045,t),o.material.opacity=.42,r.group.position.set(e,5.4,t),this.scene.add(r.group),this.scene.add(o),this.localEnemies.push({id:n,type:"drone",x:e,y:5.4,z:t,homeX:e,homeZ:t,yaw:0,health:80,maxHealth:80,alive:!0,alert:!1,fireTimer:1.8+Math.random()*1.5,patrolPhase:s*1.7,orbitPhase:Math.random()*dt,model:r,group:r.group,shadow:o,moveSpeed:0})}clearEnemies(){for(let e of this.localEnemies)this.scene.remove(e.group),this.scene.remove(e.shadow),e.group.traverse(t=>{t.isMesh&&(t.geometry?.dispose?.(),Array.isArray(t.material)?t.material.forEach(n=>n.dispose?.()):t.material?.dispose?.())}),e.shadow.geometry?.dispose?.(),e.shadow.material?.dispose?.();this.localEnemies=[]}clearRemoteEnemies(){for(let e of this.remoteEnemies.values())this.scene.remove(e.group),this.scene.remove(e.shadow),e.group.traverse(t=>{t.isMesh&&(t.geometry?.dispose?.(),Array.isArray(t.material)?t.material.forEach(n=>n.dispose?.()):t.material?.dispose?.())}),e.shadow.geometry?.dispose?.(),e.shadow.material?.dispose?.();this.remoteEnemies.clear()}updateEnemies(e,t){if(!this.isHost||!this.mission)return;let n=o=>Math.hypot(o.x,o.z-1)<Iv,s=[];this.player?.alive&&!n(this.player.pos)&&s.push({id:this.session?.selfId||"solo",pos:this.player.pos,isLocal:!0});for(let o of this.remotePlayers.values())o.alive&&!n(o.pos)&&s.push({id:o.id,pos:o.pos,isLocal:!1});let r=0;for(let o of this.localEnemies){if(!o.alive)continue;let a=null,c=1/0;for(let f of s){let p=mn(o.x,o.z,f.pos.x,f.pos.z);p<c&&(c=p,a=f)}let l=o.type==="drone"?32:26,h=o.type==="drone"?46:38,d=a?mn(o.homeX,o.homeZ,a.pos.x,a.pos.z):1/0,u=o.alert?l*1.35:l;if(o.alert=!!a&&d<h&&c<u,!this.completed&&o.alert&&(r+=1),o.fireTimer-=e,o.type==="guard"){let f=0,p=o.yaw;if(o.alert&&a){p=Math.atan2(a.pos.x-o.x,a.pos.z-o.z);let m=Math.sin(t*1.4+o.patrolPhase)*2.2,_=(a.pos.x-o.x)/Math.max(1,c),T=(a.pos.z-o.z)/Math.max(1,c),M=0,w=0;c>10?(M=_,w=T):c<6&&(M=-_,w=-T),M+=-T*m*.15,w+=_*m*.15;let E=Math.hypot(M,w);E>.01&&(f=4.4,o.x+=M/E*f*e,o.z+=w/E*f*e);let x=new I(a.pos.x,a.pos.y+1.25,a.pos.z),b=new I(o.x,1.25,o.z);!this.isShotBlocked(b,x)&&c<25&&o.fireTimer<=0&&!this.completed&&this.enemyFire(o,a,x,b)}else{let m=t*.32+o.patrolPhase,_=o.homeX+Math.cos(m)*5.2,T=o.homeZ+Math.sin(m)*5.2,M=_-o.x,w=T-o.z,E=Math.hypot(M,w);E>.6&&(f=1.7,o.x+=M/E*f*e,o.z+=w/E*f*e,p=Math.atan2(M,w))}let y={x:o.x,z:o.z};for(let m of this.world.colliders)vr(y,.45,m);o.x=y.x,o.z=y.z;let g=this.world.metro.bounds-5;o.x=Xe(o.x,-g,g),o.z=Xe(o.z,-g,g),o.moveSpeed=oi(o.moveSpeed,f,8,e),o.yaw=qo(o.yaw,p,7,e),o.group.position.set(o.x,0,o.z),o.group.rotation.y=o.yaw,o.shadow.position.set(o.x,.045,o.z),o.model.animate(e,t,o.moveSpeed,!0,o.alert)}else{let f=o.alert?10.5:6.5,p=o.alert&&a?a.pos.x:o.homeX,y=o.alert&&a?a.pos.z:o.homeZ;o.orbitPhase+=e*(o.alert?.9:.34);let g=p+Math.cos(o.orbitPhase)*f,m=y+Math.sin(o.orbitPhase)*f,_=(o.alert?4.6:6.2)+Math.sin(t*1.5+o.patrolPhase)*.7;if(o.x=oi(o.x,g,1.4,e),o.z=oi(o.z,m,1.4,e),o.y=oi(o.y,_,1.8,e),a&&(o.yaw=qo(o.yaw,Math.atan2(a.pos.x-o.x,a.pos.z-o.z),5,e)),o.group.position.set(o.x,o.y,o.z),o.group.rotation.y=o.yaw,o.shadow.position.set(o.x,.045,o.z),o.shadow.material.opacity=.4,o.model.animate(e,t,o.alert),o.alert&&a&&c<32&&o.fireTimer<=0&&!this.completed){let T=new I(a.pos.x,a.pos.y+1.25,a.pos.z),M=new I(o.x,o.y,o.z);this.isShotBlocked(M,T)||this.enemyFire(o,a,T,M)}}}this.alertCount=r}enemyFire(e,t,n,s){let r=e.type==="drone";e.fireTimer=(r?1.8:1.35)+Math.random()*1.25;let o=n.clone().sub(s).normalize(),a=Math.random()<(r?.56:.66),c=n.clone();if(a||(c.x+=(Math.random()-.5)*3.2,c.y+=(Math.random()-.3)*2,c.z+=(Math.random()-.5)*3.2),this.effects.muzzleFlash(s,r?16738901:16757370,o),this.effects.tracer(s,c,r?16734837:16753515),this.camera.position.distanceTo(s)<42&&this.audio.enemyShot(),e.type==="guard"&&(e.model.flashTime=.08),this.network?.send("enemy-shot",{ox:s.x,oy:s.y,oz:s.z,ex:c.x,ey:c.y,ez:c.z,hit:a}),!a)return;let l=r?5.5:7;t.isLocal?this.damagePlayer(l,e.id):this.network?.send("hit",{target:t.id,amount:l,source:e.id})}applyEnemyDamage(e,t,n){if(!e||!e.alive)return;e.health-=t,e.alert=!0;let s=new I(e.x,e.type==="drone"?e.y:1.1,e.z);this.effects.enemyHit(s,16738901),this.audio.enemyHit(),e.health<=0&&this.killEnemy(e,n)}killEnemy(e,t){if(!e.alive)return;e.alive=!1;let n=new I(e.x,e.type==="drone"?e.y:1,e.z);this.effects.explosion(n,e.type==="drone"?16734837:16747351,e.type==="drone"?1.15:.8),this.audio.explosion(),this.scene.remove(e.group),this.scene.remove(e.shadow),this.mission&&(this.mission.score+=250),this.ui.feed(`Security unit neutralized by ${(t||"ALLY").toUpperCase()}.`,"ok","COMBAT"),this.network?.send("enemy-dead",{id:e.id,x:e.x,y:e.type==="drone"?e.y:1,z:e.z,type:e.type}),this.sendFullState(!0)}damagePlayer(e,t){let n=this.player;if(!n||!n.alive||this.status==="result"||this.status==="disconnected")return;let s=this.currentMode==="car"?e*.65:e;n.health=Math.max(0,n.health-s),n.lastDamageAt=this.elapsed,this.ui.setVitals(n.health,n.stamina),this.ui.damage(),this.audio.damage(),this.cameraShake=Math.min(1.2,this.cameraShake+.32),n.health<=0&&this.die(t)}die(e){let t=this.player;!t||!t.alive||(t.alive=!1,t.deathTimer=4,t.health=0,this.status="dead",this.mouseDown=!1,this.aiming=!1,this.keys.clear(),this.currentMode==="car"&&this.exitCar(),this.ui.showDeath(4),this.ui.setCrosshair(!1),this.ui.setInteraction("",!1),this.ui.setVitals(0,t.stamina),this.ui.feed("Signal lost. Re-syncing neural link\u2026","warn","SECURITY"),this.localChar&&(this.localChar.group.visible=!0),this.sendPlayerState(!0))}respawn(){let e=this.player;e&&(e.alive=!0,e.health=100,e.stamina=100,e.ammo=wr,e.reserve=Cl,e.reloading=0,e.deathTimer=0,e.velY=0,e.grounded=!0,e.pos.set(this.world.spawn.x+(this.remotePlayers.size?1.4:0),0,this.world.spawn.z),this.cameraYaw=this.world.spawn.rot,this.cameraPitch=-.08,this.currentMode="foot",this.localCar=null,this.ui.hideDeath(),this.ui.setMode("foot"),this.ui.setVitals(100,100),this.ui.setAmmo(wr,Cl,0),this.ui.setCrosshair(!0),this.status=this.mission?.phase==="complete"?"result":"playing",this.localChar&&(this.localChar.group.visible=!0),this.localCharShadow&&(this.localCharShadow.visible=!0),this.ui.feed("Neural link restored. Back in the district.","ok","SYSTEM"),this.sendPlayerState(!0))}updateRemoteEnemies(e,t){if(!this.isHost)for(let n of this.remoteEnemies.values())n.alive&&(n.pos.lerp(n.target,1-Math.exp(-e*8)),n.x=n.pos.x,n.y=n.pos.y,n.z=n.pos.z,n.yaw=qo(n.yaw,n.targetYaw,7,e),n.group.position.copy(n.pos),n.group.rotation.y=n.yaw,n.type==="drone"?(n.shadow.position.set(n.pos.x,.045,n.pos.z),n.model.animate(e,t,n.alert)):(n.shadow.position.set(n.pos.x,.045,n.pos.z),n.model.animate(e,t,n.moveSpeed,!0,n.alert)))}syncRemoteEnemies(e){if(!Array.isArray(e))return;let t=new Set;for(let n of e){if(!n||!n.id)continue;t.add(n.id);let s=this.remoteEnemies.get(n.id);if(!s){let r=n.type==="drone"?lu():hu(),o=Ki(this.shadowTex,n.type==="drone"?1.2:1.9);o.material.opacity=n.type==="drone"?.4:.65;let a=r.group,c=new I(n.x,n.y,n.z);a.position.copy(c),this.scene.add(a),this.scene.add(o),s={id:n.id,type:n.type,model:r,group:a,shadow:o,pos:c,target:c.clone(),yaw:n.ry||0,targetYaw:n.ry||0,health:n.health,alive:!0,alert:!!n.alert,moveSpeed:0,x:n.x,y:n.y,z:n.z},this.remoteEnemies.set(n.id,s)}s.target.set(n.x,n.y,n.z),s.targetYaw=n.ry||0,s.health=n.health,s.alert=!!n.alert,s.alive=!0,s.moveSpeed=s.type==="drone"?0:3.2}for(let[n,s]of this.remoteEnemies)t.has(n)||(this.scene.remove(s.group),this.scene.remove(s.shadow),this.remoteEnemies.delete(n));this.remoteAlertCount=e.filter(n=>n.alert).length}applyStateCars(e){if(Array.isArray(e))for(let t of e){let n=this.cars.find(s=>s.id===t.id);n&&n!==this.localCar&&t.o!==this.session?.selfId&&((!n.occupiedBy||!this.remotePlayers.has(n.occupiedBy))&&(n.x=t.x,n.z=t.z,n.yaw=t.yaw),n.occupiedBy=t.o||null)}}handleState(e){if(this.isHost||!e||!e.mission||e.from&&this.session?.hostId&&e.from!==this.session.hostId)return;let t=e.mission,n=this.mission?.contract,s=this.mission?.phase;this.mission={...t,shards:(t.shards||[]).map(o=>({...o})),extraction:{...t.extraction||this.world.extraction}},this.syncShardVisuals(),this.applyStateCars(e.cars),this.syncRemoteEnemies(e.enemies),this.alertCount=e.alert??this.remoteAlertCount??0;let r=this.mission.phase;r==="complete"&&!this.completed?(this.completed=!0,this.status="result",this.ignoreUnlock=!0,this.mouseDown=!1,this.aiming=!1,this.ui.setCrosshair(!1),this.ui.setInteraction("",!1),this.ui.hideDeath(),this.ui.showMissionBanner("CONTRACT COMPLETE","GHOST PROTOCOL SECURED","EXFIL",4600),this.ui.showResult({time:this.mission.elapsed,score:this.mission.score,countdown:this.mission.completeIn??12,caches:3}),document.pointerLockElement&&document.exitPointerLock()):r!=="complete"&&this.completed&&(this.completed=!1,this.ignoreUnlock=!1,this.ui.hideResult(),this.player?.alive&&(this.status=this.paused?"paused":"playing",this.ui.setLockHint(!0))),n!==void 0&&n!==this.mission.contract?(this.ui.showMissionBanner("GHOST PROTOCOL","SECURE THREE DATA CACHES","NEW CONTRACT",4200),this.ui.feed("New contract received. Three fresh caches are live.","ok","CONTRACT")):n===void 0&&r==="collect"&&this.ui.showMissionBanner("GHOST PROTOCOL","SECURE THREE DATA CACHES","CO-OP CONTRACT",4200),s!==r&&r==="extract"&&this.ui.showMissionBanner("EXTRACTION READY","RETURN TO THE PLAZA AS A TEAM","ALL CACHES SECURED",5200)}sendFullState(e=!1){if(!this.isHost||!this.session?.online||!this.network?.connected||!this.mission)return;let t=performance.now();!e&&t-(this.lastFullStateAt||0)<90||(this.lastFullStateAt=t,this.network.send("state",{mission:{phase:this.mission.phase,shards:this.mission.shards.map(n=>({id:n.id,x:n.x,z:n.z,name:n.name,collected:n.collected})),elapsed:this.mission.elapsed,score:this.mission.score,extraction:{x:this.mission.extraction.x,z:this.mission.extraction.z},extractProgress:this.mission.extractProgress,extractSeconds:this.mission.extractSeconds,completeIn:this.mission.completeIn,contract:this.mission.contract},enemies:this.localEnemies.filter(n=>n.alive).map(n=>({id:n.id,type:n.type,x:n.x,y:n.y,z:n.z,ry:n.yaw,health:n.health,alert:n.alert})),cars:this.cars.map(n=>({id:n.id,x:n.x,z:n.z,yaw:n.yaw,o:n.occupiedBy})),alert:this.alertCount||0}))}sendPlayerState(e=!1){if(!this.session?.online||!this.network?.connected||!this.player)return;let t=performance.now();if(!e&&t-(this.lastPlayerStateAt||0)<85)return;this.lastPlayerStateAt=t;let n=this.player,s=this.localCar;this.network.send("player-state",{x:s?s.x:n.pos.x,y:s?0:n.pos.y,z:s?s.z:n.pos.z,ry:s?s.yaw:n.bodyYaw,inCar:!!s,carId:s?.id||null,speed:s?s.speed:n.moveSpeed,boosting:s?(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"))&&s.boost>.05&&s.speed>1:!1,health:n.health,alive:n.alive,name:this.myName,color:this.myColor})}ensureRemote(e,t={}){if(!e||e===this.session?.selfId)return null;let n=this.remotePlayers.get(e);if(n)return t.name&&(n.name=t.name),t.color!==void 0&&(n.color=t.color),n;let s=this.network?.players?.get(e),r=t.color??s?.color??16723349,o=t.name||s?.name||"ALLY",a=ol({color:r,skin:13212281}),c=Ki(this.shadowTex,2.1);c.material.opacity=.65;let l=new I(this.world.spawn.x+2,0,this.world.spawn.z);return a.group.position.copy(l),this.scene.add(a.group),this.scene.add(c),n={id:e,name:o,color:r,char:a,shadow:c,pos:l,target:l.clone(),bodyYaw:0,targetYaw:0,inCar:!1,carId:null,speed:0,boosting:!1,health:100,alive:!0,moveSpeed:0},this.remotePlayers.set(e,n),n}handlePlayerState(e){if(!e.from||e.from===this.session?.selfId)return;let t=this.ensureRemote(e.from,{name:e.name,color:e.color});if(t)if(t.target.set(e.x||0,e.y||0,e.z||0),t.targetYaw=e.ry||0,t.inCar=!!e.inCar,t.speed=e.speed||0,t.boosting=!!e.boosting,t.health=e.health??100,t.alive=e.alive!==!1,this.isHost){let n=t.carId;if(t.carId=e.carId||null,n&&n!==t.carId){let s=this.cars.find(r=>r.id===n);s&&s.occupiedBy===t.id&&(s.occupiedBy=null)}if(t.carId){let s=this.cars.find(r=>r.id===t.carId);s&&(s.occupiedBy=t.id,s.x=t.target.x,s.z=t.target.z,s.yaw=t.targetYaw)}}else this.network?.hostId===t.id&&(t.carId=e.carId||null)}onNetMessage(e){if(!(!this.session||!e||!e.from))switch(e.type){case"player-state":this.handlePlayerState(e);break;case"state":this.isHost||this.handleState(e);break;case"shard-request":this.isHost&&this.handleShardRequest(e);break;case"shard-collected":this.isHost||this.handleRemoteShardCollected(e);break;case"shot":this.isHost&&this.handleRemoteShot(e);break;case"enemy-shot":this.isHost||this.handleEnemyShot(e);break;case"enemy-dead":this.isHost||this.handleEnemyDead(e);break;case"hit":e.target===this.session.selfId&&this.damagePlayer(e.amount||5,e.source);break;case"chat":{let t=String(e.text||"").replace(/[<>]/g,"").trim().slice(0,120);t&&this.ui.chat(e.name||this.remotePlayers.get(e.from)?.name||"ALLY",t,e.color??16723349);break}case"map-ping":this.addPing(e.id||`${e.from}-${this.elapsed}`,e.name||this.remotePlayers.get(e.from)?.name||"ALLY",e.x,e.z,e.color??16723349);break;case"redeploy":this.isHost&&this.mission?.phase==="complete"&&this.resetMission();break;default:break}}handleShardRequest(e){if(!this.isHost||!this.mission||this.mission.phase!=="collect")return;let t=this.remotePlayers.get(e.from);if(!t||!t.alive)return;let n=this.mission.shards.find(s=>s.id===e.shardId);!n||n.collected||mn(t.pos.x,t.pos.z,n.x,n.z)>7||(this.applyShardCollected(n,t.name,!0),this.mission.score+=500,this.network?.send("shard-collected",{shardId:n.id,by:t.id,name:t.name,all:this.mission.shards.every(s=>s.collected)}),this.mission.shards.every(s=>s.collected)&&(this.mission.phase="extract",this.world.extractionGroup.visible=!0,this.ui.showMissionBanner("EXTRACTION READY","RETURN TO THE PLAZA AS A TEAM","ALL CACHES SECURED",5200),this.ui.feed("All caches secured. Extraction gate is live at the plaza.","ok","EXTRACT")),this.sendFullState(!0))}handleRemoteShardCollected(e){if(this.isHost||!this.mission)return;let t=this.mission.shards.find(n=>n.id===e.shardId);t&&(this.applyShardCollected(t,e.name||"ALLY",!0),(e.all||this.mission.shards.every(n=>n.collected))&&(this.mission.phase==="collect"&&(this.mission.phase="extract"),this.world.extractionGroup.visible=!0))}handleRemoteShot(e){if(!this.isHost)return;let t=this.localEnemies.find(l=>l.id===e.enemyId&&l.alive);if(!t)return;let n=Number(e.ox)||0,s=Number(e.oz)||0,r=Number(e.ex)||0,o=Number(e.ez)||0;if(mn(n,s,t.x,t.z)>70||Nv(t.x,t.z,n,s,r,o)>2.3)return;let a=new I(n,Number(e.oy)||1.2,s),c=new I(t.x,t.type==="drone"?t.y:1.1,t.z);this.isShotBlocked(a,c)||(this.effects.tracer(a,c,16773577),this.applyEnemyDamage(t,Lm,this.remotePlayers.get(e.from)?.name||"ALLY"))}handleEnemyShot(e){let t=new I(e.ox,e.oy,e.oz),n=new I(e.ex,e.ey,e.ez);this.effects.tracer(t,n,16739179),this.camera.position.distanceTo(t)<46&&this.audio.enemyShot(),e.hit||this.effects.bulletImpact(n,new I(0,1,0),16751226)}handleEnemyDead(e){if(this.isHost)return;let t=this.remoteEnemies.get(e.id);t&&(this.effects.explosion(new I(e.x,e.y,e.z),e.type==="drone"?16734837:16747351,e.type==="drone"?1.15:.8),this.audio.explosion(),this.scene.remove(t.group),this.scene.remove(t.shadow),this.remoteEnemies.delete(e.id))}onPlayerJoin(e){!e||e.id===this.session?.selfId||(this.ensureRemote(e.id,e),this.updateRoster(),this.ui.feed(`${(e.name||"ALLY").toUpperCase()} linked into the district.`,"ok","LINK"),this.ui.toast(`${e.name||"ALLY"} joined. Hold the city together.`,"ok",3200),this.isHost&&this.sendFullState(!0))}onPlayerLeave(e){let t=e?.id;if(!t)return;let n=this.remotePlayers.get(t);if(n){for(let r of this.cars)r.occupiedBy===t&&(r.occupiedBy=null);this.scene.remove(n.char.group),this.scene.remove(n.shadow),this.remotePlayers.delete(t)}this.network&&this.network.players.delete(t),this.updateRoster();let s=e?.player?.name||n?.name||"ALLY";this.ui.feed(`${s.toUpperCase()} disconnected from the district.`,"warn","LINK"),this.ui.toast(`${s} left the district.`,"warn",3e3),this.isHost&&this.sendFullState(!0)}onHostChanged(e){if(!this.session)return;this.session.hostId=e;let t=this.network?.isHost;t&&!this.isHost?(this.isHost=!0,this.clearRemoteEnemies(),this.mission?(this.syncShardVisuals(),this.spawnLocalEnemies(),this.sendFullState(!0)):this.startMission(),this.ui.toast("You are now hosting the city. Keep the contract alive.","info",5e3),this.ui.feed("Host migrated to you. Security traffic re-synced.","warn","NETWORK")):!t&&this.isHost&&(this.isHost=!1,this.clearEnemies(),this.ui.toast("Host migrated to your partner.","info",4e3)),this.updateRoster()}updateRoster(){this.session&&this.ui.updateRoster({id:this.session.selfId,name:this.myName,color:this.myColor},[...this.network?.players.values()||[]],this.session.hostId)}updateRemotes(e,t){for(let n of this.remotePlayers.values()){let s=n.pos.x,r=n.pos.z;n.pos.lerp(n.target,1-Math.exp(-e*9)),n.bodyYaw=qo(n.bodyYaw,n.targetYaw,9,e);let o=Math.hypot(n.pos.x-s,n.pos.z-r)/Math.max(e,.001);n.moveSpeed=oi(n.moveSpeed||0,Math.min(o,12),8,e),n.inCar?(n.char.group.visible=!1,n.shadow.visible=!1):(n.char.group.visible=n.alive,n.shadow.visible=n.alive,n.char.group.position.copy(n.pos),n.char.group.rotation.y=n.bodyYaw,n.char.animate(e,t,n.moveSpeed,!0,!1),n.shadow.position.set(n.pos.x,.045,n.pos.z)),n.alive||(n.char.group.visible=!1,n.shadow.visible=!1)}}updatePings(){this.pings=this.pings.filter(e=>this.elapsed-e.born<8)}updateHUD(e,t){if(!this.player)return;this.hudTick+=e,this.ui.setVitals(this.player.health,this.player.stamina),this.currentMode==="foot"&&this.ui.setAmmo(this.player.ammo,this.player.reserve,this.player.reloading>0?1-this.player.reloading/1.35:0);let n=this.renderer.domElement.clientWidth||window.innerWidth,s=this.renderer.domElement.clientHeight||window.innerHeight;this.mission&&this.ui.setMission(this.mission,this.objectiveDistance()),this.ui.setAlert(this.isHost?this.alertCount||0:this.remoteAlertCount||0),this.ui.updateRemoteLabels(this.camera,n,s,[...this.remotePlayers.values()].map(a=>({id:a.id,name:a.name,cssColor:Dm(a.color),position:a.pos,inCar:a.inCar,visible:a.alive}))),this.ui.updatePingLabels(this.camera,n,s,this.pings);let r=[];if(this.mission){for(let a of this.mission.shards)a.collected||r.push({id:`shard-${a.id}`,position:new I(a.x,2.2,a.z),label:"DATA CACHE",className:"world-marker--cache"});(this.mission.phase==="extract"||this.mission.phase==="extracting"||this.mission.phase==="complete")&&r.push({id:"extraction-marker",position:new I(this.mission.extraction.x,2.4,this.mission.extraction.z),label:"EXTRACTION",className:"world-marker--extract"})}if(this.ui.updateLabels(this.camera,n,s,r,e),this.hudTick>.045){this.hudTick=0;let a=this.isHost?this.localEnemies.filter(c=>c.alive):[...this.remoteEnemies.values()].filter(c=>c.alive);this.ui.drawMinimap(this.world,{x:this.player.pos.x,z:this.player.pos.z,rot:this.currentMode==="car"&&this.localCar?this.localCar.yaw:this.player.bodyYaw},[...this.remotePlayers.values()].map(c=>({x:c.pos.x,z:c.pos.z,rot:c.bodyYaw,colorHex:Dm(c.color)})),this.mission,a.map(c=>({x:c.x,z:c.z})),this.pings,performance.now())}performance.now()-this.lastFpsUpdate>700&&(this.lastFpsUpdate=performance.now(),this.ui.setFps(this.fps,this.network?.latency??null));let o=document.pointerLockElement===this.canvas;this.ui.setLockHint(!o&&this.status==="playing"&&!this.chatOpen&&!this.controlsOpen),(this.status==="dead"||this.status==="result"||this.status==="disconnected"||this.paused||this.chatOpen)&&this.ui.setCrosshair(!1)}objectiveDistance(){if(!this.mission||!this.player)return 1/0;if(this.mission.phase==="collect"){let e=1/0;for(let t of this.mission.shards)t.collected||(e=Math.min(e,mn(this.player.pos.x,this.player.pos.z,t.x,t.z)));return e}return this.mission.phase==="extract"||this.mission.phase==="extracting"?mn(this.player.pos.x,this.player.pos.z,this.mission.extraction.x,this.mission.extraction.z):0}positionMenuCamera(e){this.menuAngle+=e*.028;let t=92;this.camera.position.set(Math.sin(this.menuAngle)*t,30+Math.sin(this.menuAngle*.7)*8,Math.cos(this.menuAngle)*t),this.camera.lookAt(0,15,0),this.camera.fov=62,this.camera.updateProjectionMatrix()}updateNetworking(e){!this.session?.online||!this.network?.connected||(this.playerStateTimer+=e,this.playerStateTimer>.08&&(this.playerStateTimer=0,this.sendPlayerState()))}copyInvite(){let e=this.session?.roomCode;if(!e){this.ui.toast("Solo patrols have no room code. Host a city to invite a partner.","info",3600);return}let t=new URL(window.location.href);t.search="",t.hash="",t.searchParams.set("room",e);let n=t.toString(),s=()=>{let r=document.createElement("textarea");r.value=n,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select();try{document.execCommand("copy"),this.ui.toast("Invite link copied. Send it to your partner.","ok",2800)}catch{this.ui.toast(`Room code: ${e}`,"info",5e3)}r.remove()};navigator.clipboard?.writeText?navigator.clipboard.writeText(n).then(()=>this.ui.toast("Invite link copied. Send it to your partner.","ok",2800)).catch(s):s()}leaveGame(){this.ui.setPaused(!1),this.ui.hideDisconnect(),this.ui.hideResult(),this.ui.hideDeath(),this.ui.setControls(!1),this.keys.clear(),this.mouseDown=!1,this.aiming=!1,this.session=null,this.status="menu",this.ignoreUnlock=!0,this.network?.close(),this.network=null,window.location.href=window.location.pathname}update(e,t,n){if(this.elapsed=t,Number.isFinite(n)&&n>1&&(this.fps=n),!this.session||this.status==="menu"){this.positionMenuCamera(e);return}if(this.status==="disconnected")return;if((this.paused||this.chatOpen)&&!this.session.online){this.updateCamera(e,t),this.updateHUD(e,t),this.ui.setLockHint(!1);return}this.updateRemotes(e,t),this.updatePlayer(e,t),this.currentMode==="car"&&this.updateVehicle(e,t),this.updateCamera(e,t),this.updateWeapon(e,t),this.updateInteractions(),this.isHost?this.updateEnemies(e,t):this.updateRemoteEnemies(e,t),this.updateMission(e,t),this.updateCars(e),this.updateShardVisuals(e,t),this.updatePings(),this.updateNetworking(e),this.updateHUD(e,t)}}});var kv=ud(()=>{an();xp();yp();Sp();bp();Ip();Xp();qp();Yp();Nm();var Ll={performance:{cap:1,bloom:.34,bloomRadius:.4,worldQuality:.72,low:!0},balanced:{cap:1.35,bloom:.55,bloomRadius:.5,worldQuality:1,low:!1},cinematic:{cap:2,bloom:.72,bloomRadius:.6,worldQuality:1,low:!1}},Uv="nightfall:quality",Ov=document.getElementById("gameCanvas"),en=new tl;en.setLoading(.04,"INITIALIZING THE DISTRICT");function Il(){return new Promise(i=>requestAnimationFrame(()=>i()))}function Bv(){try{let i=localStorage.getItem(Uv);if(i&&Ll[i])return i}catch{}return"balanced"}async function Fv(){if(!window.WebGL2RenderingContext){en.setLoading(.15,"WEBGL 2 IS REQUIRED"),en.showLanding(),en.showStartError("This browser does not expose WebGL 2. Use a current Chrome, Edge, Firefox or Safari build.");return}let i;try{i=new Wc({canvas:Ov,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1,depth:!0})}catch(U){console.error(U),en.setLoading(.15,"RENDERER UNAVAILABLE"),en.showLanding(),en.showStartError("WebGL could not start. Close other 3D tabs, update your graphics driver, then reload.");return}i.setClearColor(197899,1),i.toneMapping=fs,i.toneMappingExposure=1.06,i.outputColorSpace=Ht,i.shadowMap.enabled=!1,i.info.autoReset=!0;let e=new Zr,t=new Kt(62,window.innerWidth/window.innerHeight,.12,760);t.position.set(0,26,-68),en.setLoading(.2,"ASSEMBLING THE NEON GRID"),await Il(),await Il();let n=Wp(e,i);en.setLoading(.62,"RAISING THE SKYLINE"),await Il();let s=new sl(e),r=new rl;en.setLoading(.72,"CHARGING THE RAIN");let o=Bv(),a=o,c=Ll[o],l=1;i.setPixelRatio(Math.min(window.devicePixelRatio||1,c.cap)),i.setSize(window.innerWidth,window.innerHeight,!1);let h=i.getDrawingBufferSize(new Oe),d=new Nt(h.x,h.y,{type:Vt,samples:2});d.texture.name="nightfall.hdr";let u=new Zc(i,d),f=new Jc(e,t),p=new yr(new Oe(window.innerWidth,window.innerHeight),c.bloom,c.bloomRadius,.74),y=new Kc;u.addPass(f),u.addPass(p),u.addPass(y),u.setSize(window.innerWidth,window.innerHeight),s.setViewport(i.domElement.height,t.fov);function g(){let U=Math.min(window.devicePixelRatio||1,c.cap)*l;i.setPixelRatio(U),i.setSize(window.innerWidth,window.innerHeight,!1),u.setPixelRatio(U),u.setSize(window.innerWidth,window.innerHeight),s.setViewport(i.domElement.height,t.fov)}function m(U){a=Ll[U]?U:"balanced",c=Ll[a],l=1,n.quality=c.worldQuality,n.low=c.low,p.strength=c.bloom,p.radius=c.bloomRadius,g()}m(o),en.setLoading(.84,"BINDING THE RESPONSE GRID"),await Il();let _=new Pl({scene:e,camera:t,renderer:i,world:n,ui:en,effects:s,audio:r,setQuality:m});en.setLoading(.92,"SYNCING THE NETWORK"),await _.init();let T=performance.now(),M=0,w=0,E=60,x=0,b=0;function N(){let U=window.innerWidth,k=window.innerHeight;t.aspect=U/k,t.updateProjectionMatrix(),i.setPixelRatio(Math.min(window.devicePixelRatio||1,c.cap)*l),i.setSize(U,k,!1),u.setPixelRatio(i.getPixelRatio()),u.setSize(U,k),s.setViewport(i.domElement.height,t.fov),en.initMinimap(n)}window.addEventListener("resize",N),document.addEventListener("visibilitychange",()=>{document.hidden||(T=performance.now())});function R(U){requestAnimationFrame(R);let k=(U-T)/1e3;T=U;let H=Math.min(Math.max(k,0),.05);M+=k,w+=1,M>=.5&&(E=w/M,M=0,w=0),_.update(H,U/1e3,E);let P=_.localCar?{x:_.localCar.x,z:_.localCar.z}:_.player?{x:_.player.pos.x,z:_.player.pos.z}:{x:0,z:0};n.update(H,U/1e3,P,t.position),s.update(H),u.render(H),x+=k,(_.status==="playing"||_.status==="dead")&&x>1.1&&(x=0,E<52&&l>.62?(l=Math.max(.62,l-.08),g(),b=0):E>58?(b+=1.1,b>4.5&&l<1&&(l=Math.min(1,l+.04),g(),b=0)):b=0)}window.__nightfall={game:_,world:n,scene:e,camera:t,renderer:i,composer:u,effects:s,applyQuality:m},requestAnimationFrame(R)}Fv().catch(i=>{console.error("Nightfall boot failed",i),en.setLoading(.3,"BOOT FAILURE"),en.showLanding(),en.showStartError(`Boot failure: ${i?.message||"unknown error"}. Reload the page and try again.`)})});kv();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
