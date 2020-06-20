const m1 = document.getElementById("m1");
const m2 = document.getElementById("m2");
const m3 = document.getElementById("m3");
const flower1 = document.getElementById("flowers-1");



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

	gift2.classList.toggle("no-active");
	flowers.classList.toggle("no-active");

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

const changeimg3=()=>{
	const flowers=document.getElementsByClassName("flowersgrid3")[0];
	const gift3 = document.getElementById("gift3");

	changeimg(flowers,gift3);
}

const changeimg4=()=>{
	const flowers=document.getElementsByClassName("flowersgrid4")[0];
	const gift4 = document.getElementById("gift4");

	changeimg(flowers,gift4);
}

const changeimg=(flowers,gift)=>{
	gift.classList.toggle("no-active");
	flowers.classList.toggle("no-active");

	//Si NO está activo el regalo: activar el regalo y desactivar flores.

	if(gift.classList.toggle("no-active")){

		gift.classList.remove("no-active");
		flowers.classList.add("no-active");
	}

	//Si SÍ está activo el regalo: desactivar el regalo y activar flores.

	else if(!gift.classList.toggle("no-active")){

		gift.classList.add("no-active");
		flowers[i].classList.remove("no-active");
	}
}

m1.addEventListener("click",changeimg1);
m2.addEventListener("click",changeimg2);
m3.addEventListener("click",changeimg3);
m4.addEventListener("click",changeimg4);

