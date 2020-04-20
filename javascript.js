var m1 = document.getElementById("m1");
var flower1 = document.getElementById("flowers-1");


m1.addEventListener("click",changeimg1);
m2.addEventListener("click",changeimg2);

function changeimg1(){
	if(flower1.getAttribute("src")==="docs/flor.png"){
		flower1.setAttribute("src","docs/gift.png");
	}
	else if(flower1.getAttribute("src")==="docs/gift.png"){
		flower1.setAttribute("src","docs/flor.png");
	}
}

function changeimg2(){
	var flowers=document.getElementsByClassName("flowersgrid2")[0];
	var gift2 = document.getElementById("gift2");

	console.log(gift2.classList.toggle("no-active"));
	console.log(flowers.classList.toggle("no-active"));

	//Si NO está activo el regalo: activar el regalo y desactivar flores.

	if(gift2.classList.toggle("no-active")){

		gift2.classList.remove("no-active");
		flowers.classList.add("no-active");
	}

	//Si SÍ está activo el regalo: desactivar el regalo y activar flores.

	else if(!gift2.classList.toggle("no-active")){

		gift2.classList.add("no-active");
		flowers[i].classList.remove("no-active");
	}
}