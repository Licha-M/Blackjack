//cartas ya elegidas
let cartasExcluidas=[];
//globales necesarios
let ValorJugador=0;
let ValorOponente=0;
let carta2=0
let palo2=0;
let as=0;
//dividir
let ValorJugador2=0;
let ValorJugador1=0;
let numdeldivprin=0;
let valpdiv=0;
//rondas
let rondasJugadas=0;
let victorias=0;
let empates=0;
let derrotas=0;
//funciones
function reglas(bot,res){
	if (res==false) {
		div=document.getElementById("reglasl");
		bot.innerHTML="Cerrar";
		bot.style.width="50%";
		bot.setAttribute("onclick", "reglas(this,true)");
		div.style.display="flex";
	}
    else{
		bot.innerHTML="Reglas";
		bot.setAttribute("onclick", "reglas(this,false)");
		div.style.display="none";
		bot.style.width="100%";
	}
}
function limpiar(si,fin) {
	if (si==true) {
		derrotas++;
		ronda();
	}
	document.getElementById("cartasJ").innerHTML="";
	document.getElementById("cartasO").innerHTML="";
	//Borrar imgs del dividi 1
	divi1=document.getElementById("divi1");
	imgs1=divi1.getElementsByTagName("img");
	while (imgs1.length>0) {
		imgs1[0].parentNode.removeChild(imgs1[0]);
	}
	//Borrar imgs del dividi 1
	divi2=document.getElementById("divi2");
	imgs2=divi2.getElementsByTagName("img");
	while (imgs2.length>0) {
		imgs2[0].parentNode.removeChild(imgs2[0]);
	}
	//Variables a 0
	cartasExcluidas=[];
	ValorJugador2=0;
	ValorJugador1=0;
	numdeldivprin=0;
	valpdiv=0;
	ValorJugador=0;
	ValorOponente=0;
	carta2=0;
	palo2=0;
	as=0;
	//Puntajes a 0
	document.getElementById("puntajeJ").value="";
	document.getElementById("puntajeJdivi1").value="";
	document.getElementById("puntajeJdivi2").value="";
	document.getElementById("puntajeO").value="";
	//Botones a 0
	dividirb=document.getElementById("dividirb");
	dividirb.setAttribute("onclick", "");
	dividirb.setAttribute("onmouseover","");
	dividirb.setAttribute("onmouseleave","");
	dividirb.style.backgroundColor="gray";

	pcar=document.getElementById("pcar");
	pcar.setAttribute("onclick", "");
	pcar.setAttribute("onmouseover","");
	pcar.setAttribute("onmouseleave","");
	pcar.style.backgroundColor="gray";

	fi=document.getElementById("fi");
	fi.setAttribute("onclick", "");
	fi.setAttribute("onmouseover","");
	fi.setAttribute("onmouseleave","");
	fi.style.backgroundColor="gray";

	document.getElementById("limp").style.display="none";

	repar=document.getElementById("repar");
	repar.setAttribute("onclick", "comienzo()");
	repar.setAttribute("onmouseover","hover(this,false)");
	repar.setAttribute("onmouseleave","hover(this,true)");
	repar.style.backgroundColor="white";

	document.getElementById("win").style.display="none";
	ronda();

	document.getElementById("cartasJdivi").style.display="none";
	document.getElementById("cartasJ").style.display="flex";
	document.getElementById("te").style.display="inline-block";
	document.getElementById("puntajeJ").style.display="inline-block";

	document.getElementById("puntajeJ22").style.display="none";

	if (fin==true) {
		document.getElementById("win").style.display="flex";
		if (derrotas>empates&&derrotas>victorias) {
			document.getElementById("wintit").innerHTML="Perdiste El Juego";
		}
		else{
			if (victorias>derrotas&&victorias>empates) {
				document.getElementById("wintit").innerHTML="Ganaste El Juego";
			}
			else{
				document.getElementById("wintit").innerHTML="Empate";
			}
		}
		document.getElementById("derVicEmp").style.display="inline-block";
		document.getElementById("puntajeFinal").style.display="none";
		document.getElementById("limpiarWin").style.display="none";
		document.getElementById("limpiarFinal").style.display="inline-block";
	}
}
function alea(min, max) {
    return Math.round(Math.random()*(max-min)+min);
}
function pcarta(divi){
	if (divi!=true){
		if (as==1) {
			as=as-1;
			ValorJugador=ValorJugador-10;
		}
		carta=otra("jugador");
		ValorJugador=+carta+ +ValorJugador;
		puntajeJ=document.getElementById("puntajeJ");
		puntajeJ.value=ValorJugador;
		if (ValorJugador>=21) {
			pcar=document.getElementById("pcar");
			pcar.setAttribute("onclick", "");
			pcar.setAttribute("onmouseover","");
			pcar.setAttribute("onmouseleave","");
			pcar.style.backgroundColor="gray";
			fin(true);
		}
	}
	else{
		if (numdeldivprin==0) {
			if (as==1) {
				as=as-1;
				ValorJugador=ValorJugador-10;
			}
			carta=otra2(0);
			ValorJugador1=+carta+ +ValorJugador1;
			puntajeJ=document.getElementById("puntajeJdivi1");
			puntajeJ.value=ValorJugador1;
			if (ValorJugador1>=21) {
				fin2(true);
			}
		}
		else{
			if (as==1) {
				as=as-1;
				ValorJugador=ValorJugador-10;
			}
			carta=otra2(1);
			ValorJugador2=+carta+ +ValorJugador2;
			puntajeJ=document.getElementById("puntajeJdivi2");
			puntajeJ.value=ValorJugador2;
			if (ValorJugador2>=21) {
				fin2(false,true);
			}
		}
	}
	if (valpdiv==0) {
		dividirb=document.getElementById("dividirb");
		dividirb.setAttribute("onclick", "");
		dividirb.setAttribute("onmouseover","");
		dividirb.setAttribute("onmouseleave","");
		dividirb.style.backgroundColor="gray";
	}
}
function comienzo() {
	rondasJugadas++;
	ronda();
	let num=0;
	carta1=otra("jugador","0",num);
	num=num+1;
	ValorJugador=+carta1+ +ValorJugador;
	if (as==1) {
		as=as-1;
		ValorJugador=ValorJugador-10;
	}
	carta2=otra("jugador","0",num);
	num=num+1;
	ValorJugador=+carta2+ +ValorJugador;

	valpdiv=+ carta1 - +carta2;

	puntajeJ=document.getElementById("puntajeJ");
	puntajeJ.value=ValorJugador;
	//Curpier
	carta=otra("oponente");
	ValorOponente=+carta+ +ValorOponente;
	puntajeO=document.getElementById("puntajeO");
	puntajeO.value=ValorOponente;
	carta=otra("oponente","2doC");
	ValorOponente=+carta+ +ValorOponente;
	//Activar botones
	pcar=document.getElementById("pcar");
	pcar.setAttribute("onclick", "pcarta('jugador')");
	pcar.style.backgroundColor="white";
	pcar.setAttribute("onmouseover","hover(this,false)");
	pcar.setAttribute("onmouseleave","hover(this,true)");

	fi=document.getElementById("fi");
	fi.setAttribute("onclick", "fin()");
	fi.setAttribute("onmouseover","hover(this,false)");
	fi.setAttribute("onmouseleave","hover(this,true)");
	fi.style.backgroundColor="white";

	repar=document.getElementById("repar");
	repar.setAttribute("onclick", "");
	repar.setAttribute("onmouseover","");
	repar.setAttribute("onmouseleave","");
	repar.style.backgroundColor="gray";

	limp=document.getElementById("limp");
	limp.style.display="inline-block";
	limp.setAttribute("onmouseover","hover(this,false)");
	limp.setAttribute("onmouseleave","hover(this,true)");
	limp.setAttribute("onclick","limpiar(true)");
	limp.style.backgroundColor="white";

	if (valpdiv==0) {
		dividirb=document.getElementById("dividirb");
		dividirb.setAttribute("onclick", "dividir()");
		dividirb.setAttribute("onmouseover","hover(this,false)");
		dividirb.setAttribute("onmouseleave","hover(this,true)");
		dividirb.style.backgroundColor="white";
	}
	else{
		dividirb=document.getElementById("dividirb");
		dividirb.setAttribute("onclick", "");
		dividirb.setAttribute("onmouseover","");
		dividirb.setAttribute("onmouseleave","");
		dividirb.style.backgroundColor="gray";
	}
}
function dividir() {
	//Senal
	se1=document.getElementById("senal1");
	se1.style.display="inline-block";
	se2=document.getElementById("senal2");
	se2.style.display="none";
	//Cambio de botones
	div=document.getElementById("cartasJdivi");
	divi=document.getElementById("cartasJ");
	div.style.display="flex";
	divi.style.display="none";
	dividirb=document.getElementById("dividirb");
	dividirb.setAttribute("onclick", "");
	dividirb.setAttribute("onmouseover","");
	dividirb.setAttribute("onmouseleave","");
	dividirb.style.backgroundColor="gray";
	pcar=document.getElementById("pcar");
	pcar.setAttribute("onclick","pcarta(true)");
	pun=document.getElementById("puntajeJ");
	pun2=document.getElementById("te");
	pun.style.display="none";
	pun2.style.display="none";
	fi=document.getElementById("fi");
	fi.setAttribute("onclick","fin2(true)");
	//Dvidir
	ValorJugador=ValorJugador/2;
	p1=document.getElementById("puntajeJdivi1");
	p1.value=ValorJugador;
	p2=document.getElementById("puntajeJdivi2");
	p2.value=ValorJugador;
	ValorJugador1=ValorJugador;
	ValorJugador2=ValorJugador;
}
function otra(para,cu,num) {
	let carta=0;
	let palo=0;
	let valor=0;
	if (para=="jugador"){
		do {
			carta = alea(1, 13);
			palo = alea(1, 4);
		} while (cartasExcluidas.includes(carta + '-' + palo));
		cartasExcluidas.push(carta + '-' + palo);
		if (num<2) {
			if (carta==11||carta==12||carta==13) {
				valor=10;
			}
			else{
				if (carta==1) {
					vt=ValorJugador-11;
					if (vt<0) {
						valor=11;
						as=as+1;
					}
					else{
						valor=1
					}
				}
				else{
					valor=carta;
				}
			}
			cartasJ=document.getElementById("cartasJ");
			img=document.createElement('img');
			img.src="cartas/"+palo+"/"+carta+".png";
			img.alt="carta";
			cartasJ.appendChild(img);
			//Para el dividir
			if (num==0) {
				cartasJ=document.getElementById("divi1");
				img=document.createElement('img');
				img.src="cartas/"+palo+"/"+carta+".png";
				img.alt="carta";
				cartasJ.appendChild(img);
			}//2do dividir
			else{
				cartasJ=document.getElementById("divi2");
				img=document.createElement('img');
				img.src="cartas/"+palo+"/"+carta+".png";
				img.alt="carta";
				cartasJ.appendChild(img);
			}
			return valor;
		}
		else{
			if (carta==11||carta==12||carta==13) {
				valor=10;
			}
			else{
				if (carta==1) {
					vt=ValorJugador-11;
					if (vt<0) {
						valor=11;
						as=as+1;
					}
					else{
						valor=1
					}
				}
				else{
					valor=carta;
				}
			}
			cartasJ=document.getElementById("cartasJ");
			img=document.createElement('img');
			img.src="cartas/"+palo+"/"+carta+".png";
			img.alt="carta";
			cartasJ.appendChild(img);
			return valor;
		}
	}
	else{
		do {
			carta = alea(1, 13);
			palo = alea(1, 4);
		} while (cartasExcluidas.includes(carta + '-' + palo));
		cartasExcluidas.push(carta + '-' + palo);

		if (carta==11||carta==12||carta==13) {
			valor=10;
		}
		else{
			if (carta==1) {
				valor=1;
			}
			else{
				valor=carta;
			}
		}
		if (cu=="2doC") {
			cartasO=document.getElementById("cartasO");
			img=document.createElement('img');
			img.src="cartas/R.png";
			img.setAttribute("id","Ri");
			img.alt="carta";
			cartasO.appendChild(img);
			carta2=carta;
			palo2=palo;
			return valor;
		}
		else{
			cartasO=document.getElementById("cartasO");
			img=document.createElement('img');
			img.src="cartas/"+palo+"/"+carta+".png";
			img.alt="carta";
			cartasO.appendChild(img);
			return valor;
		}
	}
}
function otra2(numdeldiv) {
	do {
		carta = alea(1, 13);
		palo = alea(1, 4);
	} while (cartasExcluidas.includes(carta + '-' + palo));
	cartasExcluidas.push(carta + '-' + palo);
		if (carta==11||carta==12||carta==13) {
			valor=10;
		}
		else{
			if (carta==1) {
				vt=ValorJugador-11;
				if (vt<0) {
					valor=11;
					as=as+1;
				}
				else{
					valor=1
				}
			}
			else{
				valor=carta;
			}
		}
		//Para el dividir
		if (numdeldiv==0) {
			cartasJ=document.getElementById("divi1");
			img=document.createElement('img');
			img.src="cartas/"+palo+"/"+carta+".png";
			img.alt="carta";
			cartasJ.appendChild(img);
		}//2do dividir
		else{
			cartasJ=document.getElementById("divi2");
			img=document.createElement('img');
			img.src="cartas/"+palo+"/"+carta+".png";
			img.alt="carta";
			cartasJ.appendChild(img);
		}
		return valor;
}
function fin(gan) {
	pcar=document.getElementById("pcar");
	pcar.setAttribute("onclick", "");
	pcar.setAttribute("onmouseover","");
	pcar.setAttribute("onmouseleave","");
	pcar.style.backgroundColor="gray";
	fi=document.getElementById("fi");
	fi.setAttribute("onclick", "");
	fi.setAttribute("onmouseover","");
	fi.setAttribute("onmouseleave","");
	fi.style.backgroundColor="gray";
	limp=document.getElementById("limp");
	limp.setAttribute("onclick", "");
	limp.setAttribute("onmouseover","");
	limp.setAttribute("onmouseleave","");
	limp.style.backgroundColor="gray";

	Ri=document.getElementById("Ri");
	Ri.src="cartas/"+palo2+"/"+carta2+".png";
	puntajeO=document.getElementById("puntajeO");
	puntajeO.value=ValorOponente;
	if (gan==true) {
		ganador();
	}
	else{
		while (ValorOponente<=16) {
			carta=otra("oponente");
			ValorOponente=+carta + +ValorOponente;
			puntajeO.value=ValorOponente;
		}
		ganador();
	}
}	
function fin2(comp,comprovacion) {
	if (comp==true) {
		numdeldivprin=1;
		fi=document.getElementById("fi");
		fi.setAttribute("onclick","fin2(false)");
		se1=document.getElementById("senal1");
		se2=document.getElementById("senal2");
		se1.style.display="none";
		se2.style.display="inline-block";
	}
	else{
		se1=document.getElementById("senal1");
		se2=document.getElementById("senal2");
		se1.style.display="none";
		se2.style.display="none";
		pcar=document.getElementById("pcar");
		pcar.setAttribute("onclick", "");
		pcar.setAttribute("onmouseover","");
		pcar.setAttribute("onmouseleave","");
		pcar.style.backgroundColor="gray";
		fi=document.getElementById("fi");
		fi.setAttribute("onclick", "");
		fi.setAttribute("onmouseover","");
		fi.setAttribute("onmouseleave","");
		fi.style.backgroundColor="gray";
		limp=document.getElementById("limp");
		limp.setAttribute("onclick", "");
		limp.setAttribute("onmouseover","");
		limp.setAttribute("onmouseleave","");
		limp.style.backgroundColor="gray";
		Ri=document.getElementById("Ri");
		Ri.src="cartas/"+palo2+"/"+carta2+".png";
		puntajeO=document.getElementById("puntajeO");
		puntajeO.value=ValorOponente;
		if (comprovacion==true) {
			ganador2();
		}
		else{
			while (ValorOponente<=16) {
				carta=otra("oponente");
				ValorOponente=+carta + +ValorOponente;
				puntajeO.value=ValorOponente;
			}
			ganador2();
		}
	}
}
function ganador() {
		//mostrar puntaje
		pJ=document.getElementById("puntajeJ2");
		pO=document.getElementById("puntajeO2");
		pJ.value=ValorJugador;
		pO.value=ValorOponente;
		if (ValorOponente>21&&ValorJugador>21){
			mensajeDeGanar("Punto Muerto");
			empates++;
			ronda();
		}
		else{
			if (ValorJugador>21) {
				mensajeDeGanar("Gana el Crupier");
				derrotas++;
				ronda();
			}
			else{
				if (ValorOponente>21) {
					mensajeDeGanar("Ganaste!!!");
					victorias++;
					ronda();
				}
				else{
					ValorJugador=Math.abs(ValorJugador-21);
					ValorOponente=Math.abs(ValorOponente-21);
					if (ValorJugador<ValorOponente) {
						mensajeDeGanar("Ganaste!!!");
						victorias++;
						ronda();
					} 
					else {
						if (ValorOponente<ValorJugador) {
							mensajeDeGanar("Gana el Crupier");
							derrotas++;
							ronda();
						} 
						else {
							mensajeDeGanar("Punto Muerto");
							empates++;
							ronda();
						}
					}
				}
			}
		}
	limpiarWin=document.getElementById("limpiarWin");
	rondasJugadas++;
	if (rondasJugadas==11) {
		limpiar(false,true);
	}
	else{
		limpiarWin.innerHTML="Ronda "+rondasJugadas;
		rondasJugadas--;
	}
}
function ganador2(){
	pJ=document.getElementById("puntajeJ2");
	pJ2=document.getElementById("puntajeJ22");
	pO=document.getElementById("puntajeO2");
	pJ.value=ValorJugador1;
	pJ2.value=ValorJugador2;
	pO.value=ValorOponente;
	pJ2.style.display="inline-block";
	//Quien gana?
	if (ValorJugador > 21 && ValorJugador2 > 21 && ValorOponente > 21) {
    	mensajeDeGanar("Punto Muerto");
		empates++;
		ronda();
	} else {
	    if (ValorJugador > 21 && ValorJugador2 > 21) {
        	mensajeDeGanar("Gana el Crupier");
			derrotas++;
			ronda();
    	} else {
	        if (ValorJugador > 21) {
        	    mensajeDeGanar("Gana el Crupier");
				derrotas++;
				ronda();
        	} else {
    	        if (ValorJugador2 > 21) {
	                mensajeDeGanar("Gana el Crupier");
					derrotas++;
					ronda();
    	        } else {
	                if (ValorOponente > 21) {
                    	mensajeDeGanar("Ganaste!!!");
						victorias++;
						ronda();
            	    } else {
        	            let diffJ = Math.abs(ValorJugador - 21);
    	                let diffJ2 = Math.abs(ValorJugador2 - 21);
	                    let diffO = Math.abs(ValorOponente - 21);                
	                    if (diffJ < diffO && diffJ2 < diffO) {
    	                    mensajeDeGanar("Ganaste!!!");
							victorias++;
							ronda();
                    	} else {
                	        if (diffJ < diffO) {
            	                mensajeDeGanar("Ganaste!!!");
								victorias++;
								ronda();
    	                    } else {
	                            if (diffJ2 < diffO) {
                                	mensajeDeGanar("Ganaste!!!");
									victorias++;
									ronda();
                        	    } else {
                    	            if (diffO < diffJ && diffO < diffJ2) {
                	                    mensajeDeGanar("Gana el Crupier");
										derrotas++;
										ronda();
	                                } else {
                                    	mensajeDeGanar("Punto Muerto");
										empates++;
										ronda();
                    	            }
                	            }
            	            }
        	            }
    	            }
	            }
	        }
    	}
	}
	limpiarWin=document.getElementById("limpiarWin");
	rondasJugadas++;
	if (rondasJugadas==11) {
		limpiar(false,true);
	}
	else{
		limpiarWin.innerHTML="Ronda "+rondasJugadas;
		rondasJugadas--;
	}
}
function windivire(si){
	if (si==true) {
		redivi=document.getElementById("reglasdediv");
		redivi.style.display="inline-block";
		link=document.getElementById("abrir");
		link.innerHTML="Cerrar";
		link.setAttribute("onclick", "windivire(false)");
	}
	else{
		redivi=document.getElementById("reglasdediv");
		redivi.style.display="none";
		link=document.getElementById("abrir");
		link.innerHTML="¿Como funciona?";
		link.setAttribute("onclick", "windivire(true)");
	}
}
function mensajeDeGanar(para) {
	win = document.getElementById("win");
    win.style.display = "flex";
    wintit = document.getElementById("wintit");
    wintit.innerHTML = para;
}
function hover(para,si) {
	if (si==false) {
		para.style.backgroundColor=" #ccc";
	}
	else{
		para.style.backgroundColor=" white";
	}
}
function ronda() {
	document.getElementById("rondas").innerHTML="Rondas "+rondasJugadas+"/10";
	document.getElementById("dev").innerHTML=derrotas+" Derrotas, "+empates+" Empates, "+victorias+" Victorias";
	document.getElementById("dev2").innerHTML=derrotas+" Derrotas, "+empates+" Empates, "+victorias+" Victorias";
}