// JavaScript Document
var tablelimit = 5;

function showAll(){
		for (k = 0 ; k < tablelimit ; k++){
			var nometabella = "Table"+k;
			var tab = document.getElementById(nometabella);
			tab.style.display = "";
			for ( i = 4 ; i < tab.rows.length ; i++ ){
				tab.rows[i].style.display = '';
			}
		}
		document.getElementById("indice").style.visibility = 'hidden';
	}
	function FiltraTabella(){
		var testo = document.getElementById("testo").value.toLowerCase();
		document.getElementById("indice").style.visibility = 'visible';
		indexShow(testo);
		for (k = 0 ; k < tablelimit ; k++){
			var found = false;
			var nometabella = "Table"+k;
			var tab = document.getElementById(nometabella);
			tab.style.display = "";

			if (testo == ""){		
				for ( i = 2 ; i < tab.rows.length ; i++ ){
					tab.rows[i].style.display = '';
				}
			}else{
				for ( i = 2 ; i < tab.rows.length ; i++ ){
					var riga = tab.rows[i].cells;
					var inriga = riga[1].innerHTML;
					inriga = inriga.toLowerCase();
					if (inriga.search(testo) == -1){
						tab.rows[i].style.display = 'none';
					}else{
						tab.rows[i].style.display = '';
						found = true;
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
		var len = txt.length-1;
		txt = txt.substring(0,len);
			
		indexShowAdvance(txt);
		
		for ( k = 0 ; k < tablelimit ; k++ ){
			var found = false;
			var tabName = "Table" + k;
			var tab = document.getElementById(tabName);
			
			tab.style.display = "";
			
			if( txt == ""){
				
				for ( i = 2 ; i < tab.rows.length ; i++ ){
					
					tab.rows[i].style.display = '';
				}
			}else{
			
				for ( i = 2 ; i < tab.rows.length ; i++ ){
				
					var riga = tab.rows[i].cells;
					var inriga = riga[1].innerHTML;
			
					inriga = inriga.toLowerCase();
					if ( inriga.search(txt) == 0 ){
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
			
		}
		
		document.getElementById("testo").value = "";
	}
	
	function AdvanceEndSearch(){
		var txt = document.getElementById("testo").value.toLowerCase();
		var len = txt.length;
		txt = txt.substring(1,len);
		len = len -1;
		indexShowEndAdvance(txt);
		
		for ( k = 0 ; k < tablelimit ; k++ ){
			var found = false;
			var tabName = "Table" + k;
			var tab = document.getElementById(tabName);
			
			tab.style.display = "";
			
			if( txt == ""){
				
				for ( i = 2 ; i < tab.rows.length ; i++ ){
					
					tab.rows[i].style.display = '';
				}
			}else{
			
				for ( i = 2 ; i < tab.rows.length ; i++ ){
				
					var riga = tab.rows[i].cells;
					var inriga = riga[1].innerHTML;
			
					inriga = inriga.toLowerCase();
					inriga = inriga.substring(inriga.length-len,inriga.length);
					if (inriga.search(txt) == 0){
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
		if (txt != ""){
			document.getElementById("indice").style.display = 'block';
			for(i = 0 ; i < index.length ; i++){
				var trunk = index[i].innerHTML.toLowerCase();
				trunk = trunk.substring(0,trunk.search(":"));
				if (trunk.search(txt) > -1){
					index[i].style.display = '';
				}else{
					index[i].style.display = 'none';
				}
			}
		}else{
			document.getElementById("indice").style.display = 'none';
		}
	}
	
	function indexShowAdvance(txt){
		var indextable = document.getElementById("indice");
		var index = indextable.getElementsByTagName("p");
		if (txt != ""){
			document.getElementById("indice").style.display = 'block';
			for(i = 0 ; i < index.length ; i++){
				var trunk = index[i].innerHTML.toLowerCase();
				trunk = trunk.substring(0,trunk.search(":"));
				if (trunk.search(txt) == 0){
					index[i].style.display = '';
				}else{
					index[i].style.display = 'none';
				}
			}
		}else{
			document.getElementById("indice").style.display = 'none';
		}
	}
	
	function indexShowEndAdvance(txt){
		var len = txt.length;
		var indextable = document.getElementById("indice");
		var index = indextable.getElementsByTagName("p");
		if (txt != ""){
			document.getElementById("indice").style.display = 'block';
			for(i = 0 ; i < index.length ; i++){
				var trunk = index[i].innerHTML.toLowerCase();
				trunk = trunk.substring(0,trunk.search(":"));
				trunk = trunk.substring(trunk.length-len,trunk.length);
				if (trunk.search(txt) == 0){
					index[i].style.display = '';
				}else{
					index[i].style.display = 'none';
				}
			}
		}else{
			document.getElementById("indice").style.display = 'none';
		}
	}
	
	function hideAll(){
		for ( i = 0 ; i < tablelimit ; i++){
			showTable("Table"+i);
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
		
		var indextable = document.getElementById("indice");
		var index = indextable.getElementsByTagName("p");
		for ( k = 0 ; k < tablelimit ; k++ ){
			var found = false;
			var nometabella = "Table"+k;
			var tab = document.getElementById(nometabella);
			
			tab.style.display = "";
			document.getElementById("indice").style.display = 'block';
			
			for ( i = 2 ; i < tab.rows.length ; i++ ){
				var riga = tab.rows[i].cells;
				var inriga = riga[1].innerHTML;
				if (axt.test(inriga)){
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