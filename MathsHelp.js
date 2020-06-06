//MATHSHELP1.HTML STARTS HERE
function getMean(){
	var one = document.getElementById('mean').value;
	var two = one.split(',');
	var three=0;
	for (var i = 0; i < two.length; i++) {
		three=parseFloat(two[i])+three;
	}
	var four = three/two.length;
	return four
}

function getPOPStdev(){
	var one = document.getElementById('mean').value;
	var two = one.split(',');
	var three=0;
	for (var i = 0; i < two.length; i++) {
		three=parseFloat(two[i])+three;
	}
	var four = three/two.length;
	var five=0;
	for (var i = 0; i < two.length; i++) {
		five=((parseFloat(two[i])-four)**2)+five;
	}
	var six = five/two.length;
	var seven = Math.sqrt(six);
	return seven;
}

function getSAMPStdev(){
	var one = document.getElementById('mean').value;
	var two = one.split(',');
	var three=0;
	for (var i = 0; i < two.length; i++) {
		three=parseFloat(two[i])+three;
	}
	var four = three/two.length;
	var five=0;
	for (var i = 0; i < two.length; i++) {
		five=((parseFloat(two[i])-four)**2)+five;
	}
	var six = five/(two.length-1);
	var seven = Math.sqrt(six);
	return seven;
}


function getPOPVar(){
	var one = document.getElementById('mean').value;
	var two = one.split(',');
	var three=0;
	for (var i = 0; i < two.length; i++) {
		three=parseFloat(two[i])+three;
	}
	var four = three/two.length;
	var five=0;
	for (var i = 0; i < two.length; i++) {
		five=((parseFloat(two[i])-four)**2)+five;
	}
	var six = five/two.length;
	return six;
}

function getSAMPVar(){
	var one = document.getElementById('mean').value;
	var two = one.split(',');
	var three=0;
	for (var i = 0; i < two.length; i++) {
		three=parseFloat(two[i])+three;
	}
	var four = three/two.length;
	var five=0;
	for (var i = 0; i < two.length; i++) {
		five=((parseFloat(two[i])-four)**2)+five;
	}
	var six = five/(two.length-1);
	return six;
}

function getRange(){
	var one = document.getElementById('mean').value;
	var two = one.split(',');
	var arr=[];
	for (var i = 0; i < two.length; i++) {
		var x=parseFloat(two[i]);
		arr.push(x);
		console.log(typeof(x));
	}
	arr.sort(function (a, b) {  return a - b;  });
	console.log(arr);
	var four= arr[0];
	var five= arr[arr.length-1];
	var six=(five-four);
	var eight=arr.length;
	if (arr.length%2!=0) {
		var nine=arr[((arr.length-1)/2)];
	}
	else if(arr.length%2==0){
		var fou=(arr.length/2);
		var nine=(arr[fou])+parseFloat(arr[(fou-1)])/2;
	}
	var q1 = arr[parseInt(0.25*arr.length)];
	var q3 = arr[parseInt(0.75*arr.length)];
	var seven=(q3-q1);
	return "Median: "+nine+"</br>" +"Count: "+eight+"</Br>"+"Min: "+four+"</Br>"+"Max: "+five+"</Br>"+"Q1: "+q1+"</br>"+"Q3: "+q3+"</br>"+"Range: "+six+"</Br>"+"IQR: "+seven+"</br>"
}
function ReturnVal(){
	document.getElementById('answer').innerHTML="Mean: "+getMean() +"</br>"+getRange()+"Sample Standard Deviation: "+getSAMPStdev()+"</br>"+"Population Standard Deviation: "+getPOPStdev()+"</br>"+"Sample Variance: "+getSAMPVar()+"</br>"+"Population Variance: "+getPOPVar()+"</br>";
}
//MATHSHELP2.HTML STARTS HERE
function field1(){
	var one=document.getElementById('xval').value;
	var two= document.getElementById('mean').value;
	var three= document.getElementById('stdev').value;
	var four= document.getElementById('observation').value;
	if (four == ""){
	var five=(parseFloat(one)-parseFloat(two))/parseFloat(three);}
	else if (four != null){
	var five= (parseFloat(one)-parseFloat(two))/(parseFloat(three)/Math.sqrt(parseFloat(four)));}
	if (five < -6.5){
     	var sum= 0.0;
	}
   else if (five > 6.5){
     sum = 1.0;
   }
   else{
   var factK = 1;
   sum      = 0;
   var term     = 1;
   var k        = 0;
   var loopStop = Math.exp(-23);
   while (Math.abs(term) > loopStop) {
     term = 0.3989422804 * Math.pow(-1, k) * Math.pow(five, k) / (2 * k + 1) /
            Math.pow(2, k) * Math.pow(five, k + 1) / factK;
     sum += term;
     k++;
     factK *= k;
   }

   sum += 0.5;
	}
   var output= "Z-Score: "+five+"</br>"+"Probabilty of (X&lt;Z): "+sum+"</br>"+"probabilty of (X&gt;Z): "+(1-sum);
 
	document.getElementById('answer').innerHTML=output;
}

function field2(){
	var one=document.getElementById('zscore1').value;
	var two= document.getElementById('zscore2').value;
	var three= document.getElementById('zscore3').value;
	if (two =="" && three==""){
		one=parseFloat(one);

		if (one < -6.5){
		console.log(1);
    	var sum= 0.0;
		}
   		else if (one > 6.5){
   		console.log(2);
    	var sum = 1.0;
    	
    	}
   		else{

   		var factK = 1;
   		var sum   = 0;
   		var term  = 1;
   		var k     = 0;
   		var loopStop = Math.exp(-23);
   		while (Math.abs(term) > loopStop) {
     	term = 0.3989422804 * Math.pow(-1, k) * Math.pow(one, k) / (2 * k + 1) /
            Math.pow(2, k) * Math.pow(one, k + 1) / factK;
    	 sum += term;
     	k++;
     	factK *= k;
   		}
   		sum += 0.5;
   		console.log(3);
   		console.log(sum);
   		}
   		var output= "Probabilty of (X&lt;Z): "+sum+"</br>"+"probabilty of (X&gt;Z): "+(1-sum)+"</br>";
   		
   	}
	else if (one ==""){
		two=parseFloat(two);
		three=parseFloat(three);
		if (two < -6.5){
     	var sum= 0.0;
		}
   		if (two > 6.5){
     	var sum = 1.0;
   		}
   		var factK = 1;
   		var sum      = 0;
   		var term     = 1;
   		var k        = 0;
   		var loopStop = Math.exp(-23);
   		while (Math.abs(term) > loopStop) {
     	term = 0.3989422804 * Math.pow(-1, k) * Math.pow(two, k) / (2 * k + 1) /
            Math.pow(2, k) * Math.pow(two, k + 1) / factK;
     	sum += term;
     	k++;
     	factK *= k;
   		}

   		sum += 0.5;
   		if (three < -6.5){
     	var sum2= 0.0;
		}
   		if (three > 6.5){
     	sum2 = 1.0;
   		}
   		var factK = 1;
   		sum2      = 0;
   		var term     = 1;
   		var k        = 0;
   		var loopStop = Math.exp(-23);
   		while (Math.abs(term) > loopStop) {
     	term = 0.3989422804 * Math.pow(-1, k) * Math.pow(three, k) / (2 * k + 1) /
            Math.pow(2, k) * Math.pow(three, k + 1) / factK;
     	sum2 += term;
     	k++;
     	factK *= k;
   		}
   		sum2 += 0.5;
   		var output= "Probabilty of Z-Score: "+(sum2-sum)+"</br>";
 
	}
   
	document.getElementById('answer2').innerHTML=output;
}

function field3() {
	// Originally found at: http://rangevoting.org/Qnorm.html

/** * @(#)qnorm.js * * Copyright (c) 2000 by Sundar Dorai-Raj
  * * @author Sundar Dorai-Raj
  * * Email: sdoraira@vt.edu
  * * This program is free software; you can redistribute it and/or
  * * modify it under the terms of the GNU General Public License 
  * * as published by the Free Software Foundation; either version 2 
  * * of the License, or (at your option) any later version, 
  * * provided that any use properly credits the author. 
  * * This program is distributed in the hope that it will be useful,
  * * but WITHOUT ANY WARRANTY; without even the implied warranty of
  * * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  * * GNU General Public License for more details at http://www.gnu.org
  * * */
  // ALGORITHM AS 111, APPL.STATIST., VOL.26, 118-121, 1977.
  // Computes z = invNorm(p)
  var p = document.getElementById('Prob').value;
  p = parseFloat(p);
  var split = 0.42;

  var a0 = 2.50662823884;  var a1 = -18.61500062529;  var a2 = 41.39119773534;
  var a3 = -25.44106049637;  var b1 = -8.47351093090;  var b2 = 23.08336743743;
  var b3 = -21.06224101826;  var b4 =  3.13082909833;  var c0 = -2.78718931138;
  var c1 = -2.29796479134;  var c2 =  4.85014127135;  var c3 =  2.32121276858;
  var d1 =  3.54388924762;  var d2 =  1.63706781897;  var q = p - 0.5;  var r, ppnd;

  if (Math.abs(q) <= split) {
    r = q * q;
    ppnd = q * (((a3*r+a2)*r+a1)*r+a0)/((((b4*r+b3)*r+b2)*r+b1)*r+1);
  } else {
    r = p;
    if (q > 0) r = 1 - p;
    if (r > 0) {
      r = Math.sqrt(-Math.log(r));
      ppnd = (((c3*r+c2)*r+c1)*r+c0)/((d2*r+d1)*r+1);
      if (q < 0) ppnd = -ppnd;
    }
    else {
      ppnd = 0;
    }
  }

  document.getElementById('answer3').innerHTML="Z-Score: "+ppnd;
}

//MATHSHELP3.HTML
var confint ={"70%":	1.036,"75%":	1.150,"80%"	:1.282,"85%":	1.440,"90%"	:1.645,
"95%":	1.960,"98%":	2.326,"99%":	2.576,"99.5%":	2.807,"99.9%":	3.291,
"99.99%":	3.891,"99.999%":	4.417};

function field4(){
	var one = parseFloat(document.getElementById('samsize').value);
	var two = parseFloat(document.getElementById('mean').value);
	var three = parseFloat(document.getElementById('stdev').value);
	var four = parseFloat(confint[document.getElementById('conf').value]);
	var five = three/Math.sqrt(one);
	var six = four*five;
	var seven = (two-six)+" : "+(two+six);
	var output="Mean: "+two+"</br>"+
				"Standard Deviation: "+three+"</br>"+
				"Confidence Level: "+four+"</br>"+
				"Point Estimate: "+five+"</br>"+
				"Margin Of Error: "+six+"</br>"+
				"Confidence Interval: ["+seven+"]</br>"
				;
	document.getElementById('answer').innerHTML=output;
}
//MATHSHELP4.HTML
//V8 3.31.1

function field5() {
	var one=document.getElementById('nnn').value;
	var two=1;
	var three=document.getElementById('rrr').value;
	three=one-three;
	var four=1;
	
   for(var i=1;i<=one;i++){
   	two=two*i;
   	
   }
   for(var i=1;i<=three;i++){
   	four=four*i;
   }
   var five = two/four;
   var output= "Permutations, <sub>n</sub>P<sub>r</sub>: "+five;
document.getElementById('answer').innerHTML=output;
};

function field6() {
	var one=document.getElementById('nnnn').value;
	var two=1;
	var three=document.getElementById('rrrr').value;
	var four =one-three;
	var five=1;
	var six=1;
   for(var i=1;i<=one;i++){
   	two=two*i;
   }
   for(var i=1;i<=three;i++){
   	five=five*i;
   }
   for(var i=1;i<=four;i++){
   	six=six*i;
   }
   var seven = two/(five*six);
   var output= "Combinations, <sub>n</sub>C<sub>r</sub>: "+seven;
document.getElementById('answer2').innerHTML=output;
};

function field7() {
	var nums=document.getElementById('perm').value;
	nums=nums.split(',');
	var one =document.getElementById('permsub').value;
	console.log(typeof(one));
	if (one==""){
		var permsub=nums.length;
	}
	else{
		var permsub=parseInt(one);
	}
	console.log(typeof(permsub));
    let res = [];
    let used = {};
    let dfs = (prefix = []) => {
        if(prefix.length === permsub) {
            res.push(prefix+"</br>");
            return;
        }
        
        for(let i=0; i<nums.length; i++){
            if(!used[nums[i]]){
                used[nums[i]] = true;
                dfs(prefix.concat(nums[i]));
                used[nums[i]] = false;
            }
        }
    }
    dfs();
    
    document.getElementById('answer3').innerHTML="Permutations, <sub>n</sub>P<sub>r</sub>: "+res.length+"</br> Permutation Array:</br>"+res;
};

const ttable={
	"99.95%":{'1':636.620,'2':31.599,'3':12.924,'4':8.610,'5':6.869,'6':5.959,'7':5.408,'8':5.041,'9':4.781,'10':4.587,'11':4.437,'12': 4.318,'13':4.221,'14':4.140,'15':4.073,'16': 4.015,'17':3.965,'18' :3.922,'19': 3.883,'20':3.850,'21':3.819,'22':3.792,'23':3.768,'24':3.745,'25' :3.725,'26':3.707,'27':3.690,'28':3.674,'29': 3.659,'30':3.646},
	"99.9%":{'1':318.310,'2':22.327,'3':10.215,'4':7.173,'5':5.893,'6': 5.208,'7':4.785,'8':4.501,'9':4.297,'10': 4.144,'11': 4.025,'12':3.930,'13':3.852,'14':3.787,'15': 3.733,'16':3.686,'17': 3.646,'18':3.610,'19': 3.579,'20': 3.552,'21': 3.527,'22':3.505,'23': 3.485,'24':3.467,'25': 3.450,'26':3.435,'27':3.421,'28':3.408,'29':3.396,'30':3.385},
	"99.5%":{'1':63.660,'2':9.925,'3':5.841,'4':4.604,'5':4.032,'6':3.707,'7':3.499,'8': 3.355,'9':3.250,'10':3.169,'11':3.106,'12':3.055,'13': 3.012,'14':2.977,'15': 2.947,'16':2.921,'17': 2.898,'18':2.878,'19':2.861,'20':2.845,'21': 2.831,'22': 2.819,'23':2.807,'24':2.797,'25':2.787,'26': 2.779,'27':2.771,'28':2.763,'29': 2.756,'30':2.750},
	"99%":{'1':31.820,'2':6.965,'3':4.541,'4':3.747,'5':3.365,'6':3.143,'7': 2.998,'8': 2.896,'9': 2.821,'10': 2.764,'11':2.718,'12': 2.681,'13':2.650,'14':2.624,'15':2.602,'16': 2.583,'17':2.567,'18':2.552,'19':2.539,'20':2.528,'21':2.518,'22':2.508,'23':2.500,'24':2.492,'25': 2.485,'26':2.479,'27': 2.473,'28':2.467,'29':2.462,'30': 2.457},
	"97.5%":{'1':12.710,'2':4.303,'3':3.182,'4':2.776,'5':2.571,'6':2.447,'7':2.365,'8':2.306,'9': 2.262,'10': 2.228,'11': 2.201,'12':2.179,'13':2.160,'14':2.145,'15': 2.131,'16':2.120,'17':2.110,'18':2.101,'19': 2.093,'20':2.086,'21':2.080,'22':2.074,'23': 2.069,'24': 2.064,'25': 2.060,'26':2.056,'27': 2.052,'28':2.048,'29':2.045,'30': 2.042},
	"95%":{'1':6.314,'2':2.920,'3':2.353,'4':2.132,'5': 2.015,'6':1.943,'7':1.895,'8':1.860,'9': 1.833,'10':1.812,'11':1.796,'12': 1.782 ,'13':1.771,'14':1.761,'15': 1.753,'16':1.746,'17':1.740,'18':1.734,'19': 1.729,'20': 1.725,'21': 1.721,'22':1.717,'23': 1.714,'24': 1.711,'25': 1.708,'26':1.706,'27':1.703,'28': 1.701,'29': 1.699,'30': 1.697},
	"90%":{'1':3.078,'2':1.886,'3':1.638,'4':1.533,'5':1.476,'6':1.440,'7':1.415,'8':1.397,'9': 1.383,'10':1.372,'11':1.363,'12':1.356 ,'13':1.350,'14':1.345,'15':1.341,'16': 1.337 ,'17': 1.333,'18':1.330,'19': 1.328,'20':1.325,'21':1.323,'22':1.321,'23': 1.319,'24':1.318,'25':1.316,'26':1.315,'27':1.314,'28': 1.313,'29': 1.311,'30':1.310},
	"85%":{'1':1.963,'2':1.386,'3':1.250,'4':1.190,'5':1.156,'6':1.134,'7':1.119,'8':1.108,'9': 1.100,'10':1.093,'11': 1.088,'12': 1.083,'13': 1.079,'14':1.076,'15': 1.074,'16':1.071,'17':1.069,'18':1.067,'19':1.066,'20':1.064,'21':1.063,'22':1.061,'23':1.060,'24':1.059,'25': 1.058,'26':1.058,'27':1.057,'28':1.056,'29':1.055,'30':1.055}
};

function field8(){
	var one=document.getElementById('prob').value;
	var two=document.getElementById('dg').value;
	var output= ttable[one][two];
	document.getElementById('answer').innerHTML=one+"has a probabilty of: "+output;
}
function field9(){
	var one=document.getElementById('xvalue').value;
	var two=document.getElementById('df').value;
	for(var key in ttable) {
    if(ttable[key][two] == one) {
        var output=key;
        console.log(key);
        document.getElementById('answer2').innerHTML=one+" has a Percentage of: "+key;
    }
}
	
}

function field10(){
	var one=document.getElementById('xvalue1').value;
	
	for(var key in ttable) {
		for (var key1 in key){
    if(ttable[key][key1] == one) {
        var output=key;
        console.log(key);
        document.getElementById('answer3').innerHTML=one+" has a Percentage of: "+key+" and a DF of "+key1;
    }
}
}	
}

//MATHSHELP6.HTML
function field11(){
	var one = document.getElementById('Yaxis').value;
	var two = document.getElementById('Xaxis').value;
	var yname= document.getElementById('yname').value;
	var xname = document.getElementById('xname').value;
	var prob = document.getElementById('prob').value;
	var yaxis = one.split(',');
	var xaxis = two.split(',');
	var yaxissum=0, xaxissum=0, yxaxissum=0, xsquaresum=0, ysquaresum=0, n=yaxis.length;
	for(var i=0;i<yaxis.length;i++){
		yaxissum += parseFloat(yaxis[i]);
		xaxissum += parseFloat(xaxis[i]);
		yxaxissum += (parseFloat(yaxis[i])*parseFloat(xaxis[i]));
		xsquaresum += (parseFloat(xaxis[i])**2);
		ysquaresum += (parseFloat(yaxis[i])**2);
	}
	var ystdev=0, xstdev=0;
	var ymean=yaxissum/n, xmean=xaxissum/n;
	for (var i = 0; i < n; i++) {
		ystdev+=((parseFloat(yaxis[i])-ymean)**2);
		xstdev+=((parseFloat(xaxis[i])-xmean)**2);
	}
	var ystdev2 = Math.sqrt(ystdev/(n-1)),
	xstdev2 = Math.sqrt(xstdev/(n-1));
	
	console.log(ystdev);
	var a=(((yaxissum * xsquaresum) - (xaxissum * yxaxissum)) / ((n*(xsquaresum)) - (xaxissum**2)));
	var b=((n*(yxaxissum)) - (xaxissum * yaxissum)) / ((n*(xsquaresum)) - (xaxissum**2));
	var r=((n*yxaxissum)-(yaxissum * xaxissum))/Math.sqrt(((n*xsquaresum)-((xaxissum)**2))*((n*ysquaresum)-((yaxissum)**2)));
	var rsquared=r**2;
	var ssxx =xsquaresum-((xaxissum**2)/n);
	var ssxy = yxaxissum-((xaxissum*yaxissum)/n);
	var ssyy =ysquaresum-((yaxissum**2)/n);
	var sse = ssyy-(b*ssxy);
	var s= Math.sqrt(sse/(n-2));
	var asterr = s*Math.sqrt((1/n)+((xmean**2)/ssxx)),
	bsterr = s/Math.sqrt(ssxx);
	var atstat=a/asterr, btstat=b/bsterr;
	if (n<=30){
		var cv=ttable[prob][n-2];
	}else{
		var cv=confint[prob];
	};
	var al=a-(cv*asterr),au=a+(cv*asterr),bl=b-(cv*bsterr),bu=b+(cv*bsterr);
	var output=yname+" = "+a.toFixed(4) +" + "+b.toFixed(4)+"<sub>"+xname+"</sub></br> correlation coefficient,r: "+r.toFixed(4)+
	"</br>Coefficient of Determination, R<sup>2</sup>: "+rsquared.toFixed(4)+
	"</br>Mean of "+yname+": "+ymean.toFixed(4)+"</br>"+
	"Mean of "+xname+": "+xmean.toFixed(4)+"</br>"+
	"Standard Error :"+s.toFixed(4)+"</br>"+
	"Standard Deviation of "+yname+": "+ystdev2.toFixed(4)+"</br>"+
	"Standard Deviation of "+xname+": "+xstdev2.toFixed(4)+"</br>"+
	"<table><tr><th>ANOVA</th><th><em>df</em></th><th><em>SS</em></th><th><em>MS</em></th><th><em>F</em></th><th>Significance F</th></tr></br>"+
	"<tr><td>Regression</td><td>"+1+"</td><td>"+(ssyy-sse).toFixed(4)+"</td><td>"+((ssyy-sse)/1).toFixed(4)+"</td><td>"+(((ssyy-sse)/1)/(sse/(n-2)).toFixed(4)).toFixed(4)+"</td><td></td></br>"+
	"<tr><td>Residual</td><td>"+(n-2)+"</td><td>"+sse.toFixed(4)+"</td><td>"+(sse/(n-2)).toFixed(4)+"</td><td></td><td></td></br>"+
	"<tr><td>Total</td><td>"+(n-1)+"</td><td>"+ssyy.toFixed(4)+"</td><td></td><td></td><td></td></table></br>"+
	"<table><tr><th>Variable</th><th>Coefficient</th><th>Standard Error</th><th>T Stat</th><th>Lower Limit</th><th>Upper Limit</th></tr></br>"+
	"<tr><td>Intercept</td><td>"+a.toFixed(4)+"</td><td>"+asterr.toFixed(4)+"</td><td>"+atstat.toFixed(4)+"</td><td>"+al.toFixed(4)+"</td><td>"+au.toFixed(4)+"</td></br>"+
	"<tr><td>"+xname+"</td><td>"+b.toFixed(4)+"</td><td>"+bsterr.toFixed(4)+"</td><td>"+btstat.toFixed(4)+"</td><td>"+bl.toFixed(4)+"</td><td>"+bu.toFixed(4)+"</td></table></br>";
	document.getElementById('answer').innerHTML=output;
	console.log(ssxx,ssxy,ssyy,sse,s);
}
