// JavaScript Document
var number = /[0-9]/;
var index_counter = 0;
var tablelimit = 6;
var rowStartPoint = 2;

function showAll(){
		var opera = Number(document.getElementById("opera").value) + 1;
		for (k = 0 ; k < tablelimit ; k++){
			var nometabella = "Table"+k;
			var tab = document.getElementById(nometabella);
			tab.style.display = "";
			for ( i = rowStartPoint ; i < tab.rows.length ; i++ ){
				var op_filter = tab.rows[i].cells[opera].innerHTML;
				if( number.test(op_filter)){
					tab.rows[i].style.display = '';
				}else{
					tab.rows[i].style.display = 'none';
				}
			}
		}
		document.getElementById("indice").style.visibility = 'hidden';
	}
	
	function FiltraTabella(){
		var testo = document.getElementById("testo").value.toLowerCase();
		var opera = Number(document.getElementById("opera").value) + 1;
		document.getElementById("indice").style.visibility = 'visible';
		indexShow('#');
		for (k = 0 ; k < tablelimit ; k++){
			var found = false;
			var nometabella = "Table"+k;
			var tab = document.getElementById(nometabella);
			tab.style.display = "";
			index_counter = 0;
			if (testo == ""){		
				for ( i = rowStartPoint ; i < tab.rows.length ; i++ ){
					tab.rows[i].style.display = '';
				}
			}else{
				for ( i = rowStartPoint ; i < tab.rows.length ; i++ ){
					var riga = tab.rows[i].cells;
					var inriga = riga[1].innerHTML;
					var op_filter = riga[opera].innerHTML;
					inriga = inriga.toLowerCase();
					if (inriga.search(testo) == -1 || !number.test(op_filter)){
						tab.rows[i].style.display = 'none';
					}else{
						tab.rows[i].style.display = '';
						found = true;
						indexShow(inriga);
					}
				}
				if ( !found ){
					tab.style.display = "none";
				}
			}
		}
		document.getElementById("testo").value = "";
	}
	
	function AdvanceSearch(){
		var txt = document.getElementById("testo").value.toLowerCase();
		var opera = Number(document.getElementById("opera").value) + 1;
		var len = txt.length-1;
		txt = txt.substring(0,len);
		indexShow('#');
		
		for ( k = 0 ; k < tablelimit ; k++ ){
			var found = false;
			var tabName = "Table" + k;
			var tab = document.getElementById(tabName);
			index_counter = 0;
			tab.style.display = "";
			
			if( txt == ""){
				
				for ( i = rowStartPoint ; i < tab.rows.length ; i++ ){
					
					tab.rows[i].style.display = '';
				}
			}else{
			
				for ( i = rowStartPoint ; i < tab.rows.length ; i++ ){
				
					var riga = tab.rows[i].cells;
					var inriga = riga[1].innerHTML;
					var op_filter = riga[opera].innerHTML;
					inriga = inriga.toLowerCase();
					if ( inriga.search(txt) == 0 & number.test(op_filter)){
						tab.rows[i].style.display = '';
						found = true;
						indexShow(inriga);
					}else{
						tab.rows[i].style.display = 'none';					
					}
				}
				
				if ( !found ){
					tab.style.display = "none";
				}
			}
			
		}
		
		document.getElementById("testo").value = "";
	}
	
	function AdvanceEndSearch(){
		var txt = document.getElementById("testo").value.toLowerCase();
		var opera = Number(document.getElementById("opera").value) + 1;
		var len = txt.length;
		txt = txt.substring(1,len);
		len = len -1;
		indexShow('#');
		
		for ( k = 0 ; k < tablelimit ; k++ ){
			var found = false;
			var tabName = "Table" + k;
			var tab = document.getElementById(tabName);
			index_counter = 0;
			tab.style.display = "";
			
			if( txt == ""){
				
				for ( i = rowStartPoint ; i < tab.rows.length ; i++ ){
					
					tab.rows[i].style.display = '';
				}
			}else{
			
				for ( i = rowStartPoint ; i < tab.rows.length ; i++ ){
				
					var riga = tab.rows[i].cells;
					var inriga = riga[1].innerHTML;
					var op_filter = riga[opera].innerHTML;
					inriga = inriga.toLowerCase();
					inriga = inriga.substring(inriga.length-len,inriga.length);
					if (inriga.search(txt) == 0 & number.test(op_filter)){
						tab.rows[i].style.display = '';
						found = true;
						indexShow(riga[1].innerHTML.toLowerCase());
					}else{
						tab.rows[i].style.display = 'none';					
					}
				}
				if ( !found ){
					tab.style.display = "none";
				}
			}
			
		}
		
		document.getElementById("testo").value = "";
	}
	
	function showTable(tab){
		if (document.getElementById(tab).style.display == ''){
			document.getElementById(tab).style.display = 'none';
		}else{
			document.getElementById(tab).style.display = '';
			}
			
	}
	
	function indexShow(txt){
		var indextable = document.getElementById("indice");
		var index = indextable.getElementsByTagName("p");
		if (txt != "" & txt != "#"){
			document.getElementById("indice").style.display = 'block';
			for(index_counter ; index_counter < index.length ; index_counter++){
				var trunk = index[index_counter].innerHTML.toLowerCase();
				trunk = trunk.substring(0,trunk.search(":"));
				if (txt == trunk){
					index[index_counter].style.display = '';
					index_counter++;
					break;
				}
			}
		}else{
			document.getElementById("indice").style.display = 'none';
		}
		if (txt == "#"){
			for(i = 0 ; i < index.length ; i++){
				index[i].style.display = 'none';
			}
		}
	}
	
	
	function dispatch(){

		var txt = document.getElementById("testo").value.toLowerCase();
		var end = /[?]$/; // che finisce con '?'
		var start = /^[?]/; // che inizia con '?'
		var middle = /[?]/; // che contiene '?'
		var axt = /[*]/; // che inizia con '*'
		
		if (end.test(txt) & !axt.test(txt))
		{
			AdvanceSearch();
		}
		if (start.test(txt)  & !axt.test(txt))
		{
			AdvanceEndSearch();
		}
		if (!end.test(txt) & !start.test(txt) & !middle.test(txt)  & !axt.test(txt))
		{
			FiltraTabella();
		}
		if (axt.test(txt)){
			ShowAsterisk();
		}
	}
	
	//mostra le due righe con gli asterischi
	function ShowAsterisk(){
		var axt = /[*]/; 
		var opera = Number(document.getElementById("opera").value) + 1;
		var indextable = document.getElementById("indice");
		var index = indextable.getElementsByTagName("p");
		for ( k = 0 ; k < tablelimit ; k++ ){
			var found = false;
			var nometabella = "Table"+k;
			var tab = document.getElementById(nometabella);
			
			tab.style.display = "";
			document.getElementById("indice").style.display = 'block';
			
			for ( i = rowStartPoint ; i < tab.rows.length ; i++ ){
				var riga = tab.rows[i].cells;
				var inriga = riga[1].innerHTML;
				var op_filter = riga[opera].innerHTML;
				if (axt.test(inriga) & number.test(op_filter)){
					tab.rows[i].style.display = '';
					found = true;
				}else{
					tab.rows[i].style.display = 'none';
				}
			}
			if ( !found ){
				tab.style.display = "none";
			}
		}
		for(i = 0 ; i < index.length ; i++){
			var trunk = index[i].innerHTML.toLowerCase();
			
			trunk = trunk.substring(0,trunk.search(":"));
			
			if ( axt.test(trunk) ){
				index[i].style.display = '';
			}else{
				index[i].style.display = 'none';
			}
		}
		document.getElementById("testo").value = "";
	}
	
	function hideAll(){
		for(i = 0 ; i < tablelimit ; i++){
			var nometabella = "Table"+i;
			var tab = document.getElementById(nometabella);
			tab.style.display = "none";
		}
	}
	
	function help(){
		 var helper = document.createElement('div');
		 helper.id = 'helper';
		 helper.style.width = '300px';
		 helper.style.height = '100px';
		 helper.style.position = 'absolute';
		 helper.style.top = (tempY) + 'px';
		 helper.style.left = (tempX-300) + 'px';
		 helper.style.backgroundColor = '#1E90FF';
		 helper.style.border = 'double';
		 helper.style.paddingLeft = '10px';
		 helper.style.paddingTop = '10px';
		 helper.style.textAlign = 'left';
		 helper.innerHTML = 'Come si cerca:<br/>\?testo : Trova le parole che iniziano con \'testo\'<br/>testo? : Trova le parole che finiscono con \'testo\'<br/>testo : Trova le parole che contengono \'testo\'';
		 document.body.appendChild(helper);
	}
	
	function hideHelp(){
		var olddiv = document.getElementById('helper');
  		document.body.removeChild(olddiv);
	}
	
	var IE = document.all?true:false
	// If NS -- that is, !IE -- then set up for mouse capture
	if (!IE) document.captureEvents(Event.MOUSEMOVE)
	// Set-up to use getMouseXY function onMouseMove
	document.onmousemove = getMouseXY;
	var tempX = 0;
	var tempY = 0;
	
	function getMouseXY(e) {
	  if (IE) { // grab the x-y pos.s if browser is IE
		tempX = event.clientX + document.body.scrollLeft
		tempY = event.clientY + document.body.scrollTop
	  } else {  // grab the x-y pos.s if browser is NS
		tempX = e.pageX
		tempY = e.pageY
	  }  
	  // catch possible negative values in NS4
	  if (tempX < 0){tempX = 0}
	  if (tempY < 0){tempY = 0}  
	  return true
	}


