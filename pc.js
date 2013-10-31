		jugador1=true;
		nom1="";
		nom2="";
		function nombre1()
		{
			var x="Jugador 1 (X) ="+prompt("Ingrese el nombre del jugador 1");
			nom1=x;
			document.getElementById("nombre1").innerHTML=x;
		}
		function nombre2()
		{
			var x="Jugador 2 (0) ="+prompt("Ingrese el nombre del jugador 2");
			nom2=x;
			document.getElementById("nombre2").innerHTML=x;
		}
		function verificar(){
			element_00=document.getElementById('00');
			element_01=document.getElementById('01');
			element_02=document.getElementById('02');
			element_10=document.getElementById('10');
			element_11=document.getElementById('11');
			element_12=document.getElementById('12');
			element_20=document.getElementById('20');
			element_21=document.getElementById('21');
			element_22=document.getElementById('22');
			var gano1=false;
			var gano2=false;
			var snusnu=0;
			var empate=true;
			if (element_00.src.match("star") || element_01.src.match("star") || element_02.src.match("star") || element_10.src.match("star")|| element_11.src.match("star")|| element_12.src.match("star")|| element_20.src.match("star")|| element_21.src.match("star")|| element_22.src.match("star")) {

				empate=false;

			}

			if (element_00.src.match("x") && element_01.src.match("x") && element_02.src.match("x")) {
				gano1=true;
			}
			else if (element_10.src.match("x") && element_11.src.match("x") && element_12.src.match("x")) {
				gano1=true;
			}
			else if(element_20.src.match("x") && element_21.src.match("x") && element_22.src.match("x")){
				gano1=true;
			}
			else if(element_00.src.match("x") && element_10.src.match("x") && element_20.src.match("x")){
				gano1=true;
			}
			else if(element_01.src.match("x") && element_11.src.match("x") && element_21.src.match("x")){
				gano1=true;
			}
			else if(element_02.src.match("x") && element_12.src.match("x") && element_22.src.match("x")){
				gano1=true;
			}
			else if(element_00.src.match("x") && element_11.src.match("x") && element_22.src.match("x")){
				gano1=true;
			}
			else if(element_02.src.match("x") && element_11.src.match("x") && element_20.src.match("x")){
				gano1=true;
			}

			if (element_00.src.match("OS") && element_01.src.match("OS") && element_02.src.match("OS")) {
				gano2=true;
			}
			else if (element_10.src.match("OS") && element_11.src.match("OS") && element_12.src.match("OS")) {
				gano2=true;
			}
			else if(element_20.src.match("OS") && element_21.src.match("OS") && element_22.src.match("OS")){
				gano2=true;
			}
			else if(element_00.src.match("OS") && element_10.src.match("OS") && element_20.src.match("OS")){
				gano2=true;
			}
			else if(element_01.src.match("OS") && element_11.src.match("OS") && element_21.src.match("OS")){
				gano2=true;
			}
			else if(element_02.src.match("OS") && element_12.src.match("OS") && element_22.src.match("OS")){
				gano2=true;
			}
			else if(element_00.src.match("OS") && element_11.src.match("OS") && element_22.src.match("OS")){
				gano2=true;
			}
			else if(element_02.src.match("OS") && element_11.src.match("OS") && element_20.src.match("OS")){
				gano2=true;
			}

			if (gano1) {
				return 1;
			}
			else if(gano2){
				return 2;
			}
			else if(empate){
				return 3;
			}
			else{
				return -1;
			}

		}
		function reiniciar(){
			element_00=document.getElementById('00');
			element_01=document.getElementById('01');
			element_02=document.getElementById('02');
			element_10=document.getElementById('10');
			element_11=document.getElementById('11');
			element_12=document.getElementById('12');
			element_20=document.getElementById('20');
			element_21=document.getElementById('21');
			element_22=document.getElementById('22');
			element_00.src="star.jpg";
			element_01.src="star.jpg";
			element_02.src="star.jpg";
			element_10.src="star.jpg";
			element_12.src="star.jpg";
			element_11.src="star.jpg";
			element_20.src="star.jpg";
			element_21.src="star.jpg";
			element_22.src="star.jpg";

		}
		function changeImage(qwerty)
		{
			if (qwerty == 0) {
				element=document.getElementById('00');
			}

			if (qwerty == 1) {
				element=document.getElementById('01');
			}
			if (qwerty == 2) {
				element=document.getElementById('02');
			}
			if (qwerty == 3) {
				element=document.getElementById('10');
			}
			if (qwerty == 4) {
				element=document.getElementById('11');
			}
			if (qwerty == 5) {
				element=document.getElementById('12');
			}
			if (qwerty == 6) {
				element=document.getElementById('20');
			}
			if (qwerty == 7) {
				element=document.getElementById('21');
			}
			if (qwerty == 8) {
				element=document.getElementById('22');
			}
			if(nom1==nom2 || nom1 == "" || nom2==""){
				alert("Tiene nombres iguales o estan vacios");
			}
			else{
				if (element.src.match("star"))
				{
					if(jugador1){
						element.src="x.jpg";
						jugador1=false;
					}
					else{
						element.src="OS.jpg";
						jugador1=true;
					}
				}
				else
				{
					alert("El lugar esta ocupado");

				}
			}
			var lo_que_paso_paso=verificar();
			if (lo_que_paso_paso == 1) {
				alert(nom1+" Ha ganado el juego!");
				reiniciar();
			}
			else if(lo_que_paso_paso == 2){
				alert(nom2+" Ha ganado el juego!");
				reiniciar();
			}
			else if (lo_que_paso_paso ==3) {
				alert("El juego ha terminado en empate");
				reiniciar();
			}
		}