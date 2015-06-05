// JavaScript Document

var curIndex=0;
var timeInterval=1000;
var arr=[]; 
arr[0]="images/picture1.jpg"; 
arr[1]="images/picture2.jpg"; 
arr[2]="images/picture3.jpg"; 
arr[3]="images/picture4.jpg"; 

setInterval(changeImg,timeInterval); 
function changeImg() {
	var obj=document.getElementById("homearticleimg");     
	if (curIndex==arr.length-1) {
         curIndex=0;     
	}     
	else{          
		curIndex+=1;     
	}      
	obj.src=arr[curIndex]; 
}