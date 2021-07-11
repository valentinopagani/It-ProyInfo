let btmenu = document.querySelector(".bt-menu");
const newLocal = $(document).ready(main);

var contador = 1;
 
function main(){
	$(btmenu).click(function(newLocal){
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			btmenu.src = "https://cdn130.picsart.com/272165724010211.png?type=webp&to=min&r=640";
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
			btmenu.src = "https://icons-for-free.com/iconfiles/png/128/menu+nav+navigation+icon-1320073183300645803.png";
		}
 
	});
};