
let bub=()=>{
	let clustar=" ";
	
	for(var i=0;i<=89;i++){
		let bu=Math.floor(Math.random()*10);
		clustar+=` <div class="bubble"> <h1>${bu}</h1> </div>`
	};
	
	document.getElementById('pbtm').innerHTML=clustar

}
let times=60;
let rn=0;

let bubbleTime=()=>{
	let timesInterval=setInterval(function(){
		if(times>0){
			times--;
			document.querySelector(".times").textContent=times;
		}else{
			clearInterval(timesInterval);
	  document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`
	document.querySelector(".hits").textContent=0;
	document.querySelector(".score").textContent=0;
	}
	},1000)
}

function hits(){
	 rn=Math.floor(Math.random()*5);
	document.querySelector(".hits").textContent=rn;
}

let score=0;
function scores(){
	score+=10;
	document.querySelector(".score").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click",function(details){
	console.log(Number(details.target.textContent));
	let gameStart=(Number(details.target.textContent));
	if(gameStart==rn){
		scores();
		bub();
		hits();
		
	}
})

hits();

bubbleTime();

bub();

scores();
scores();
scores();