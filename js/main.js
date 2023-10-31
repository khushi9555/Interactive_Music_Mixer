(() => {
  // collect the elements we need to interact with
  let instruments = document.querySelectorAll("#musicInstru1 img"),
		  instrumentImg = document.querySelectorAll("#musicInstru2 img"),
      dropZones = document.querySelectorAll(".bird img"),
      resetButton = document.getElementById("reset");


  //function go here
  function startDrag(event) {
    event.dataTransfer.setData("draggedElement", event.target.id);
    let currentEl = event.dataTransfer.getData("draggedElement");
    console.log(`drag`, currentEl);
  }

  function draggedOver(event) {
	 event.preventDefault();
   let currentEl = event.dataTransfer.getData("draggedElement");
   console.log(`dragover`, currentEl);
  }

  function handleDrop(event) {
		event.preventDefault();
		//console.log("dropped this element");
    let currentEl = event.dataTransfer.getData("draggedElement");
		console.log(`dropped this element:`, currentEl);
    this.appendChild(document.querySelector(`#${currentEl}`));
	
	var file_nm = getSoundFile(currentEl);
	var audio = new Audio("sounds/"+file_nm);

	audio.play();

	var dropZone1 = document.getElementById("dropZone1");
	var dropZone2 = document.getElementById("dropZone2");
	var dropZone3 = document.getElementById("dropZone3");
	var dropZone4 = document.getElementById("dropZone4");
	
	var isFull = dropZone1.childNodes.length >= 1 && dropZone2.childNodes.length >= 1 && dropZone3.childNodes.length >= 1 && dropZone4.childNodes.length >= 1;
	
	if(isFull){
		var iframe = document.getElementById('ani');
		iframe.style.display = 'block';
		document.getElementById('temp').style.display = 'none';
	}else{
		var iframe = document.getElementById('ani');
		iframe.style.display = 'none';
		document.getElementById('temp').style.display = 'block';
	}
  }

  function getSoundFile(name) {
	var file_nm = "";
	
	if(name == "Ajaeng"){
		file_nm = "Ajaeng.mp3";
	}else if(name == "Bass"){
		file_nm = "bass_guitar.wav";
	}else if(name == "Daeguem"){
		file_nm = "Daeguem.avi.m4a";
	}else if(name == "Gayageum"){
		file_nm = "gayageum.mp3";
	}else if(name == "Geomungo"){
		file_nm = "Geomungo.m4a";
	}else if(name == "Janggu"){
		file_nm = "Janggu.mp3";
	}else if(name == "Kkwaenggwari"){
		file_nm = "Kkwaenggwari.mp3";
	}else if(name == "Pansori"){
		file_nm = "Pansori.mp4";
	}else if(name == "Piano"){
		file_nm = "Piano.m4a";
	}else if(name == "Piri"){
		file_nm = "Piri.m4a";
	}

	return file_nm;
  }


  //add event handling
  instruments.forEach(piece => piece.addEventListener("dragstart", startDrag));
  instrumentImg.forEach(piece => piece.addEventListener("dragstart", startDrag));

  dropZones.forEach(zone => {
  	zone.addEventListener("dragover", draggedOver);
  	zone.addEventListener("drop", handleDrop);
  	});

  resetButton.addEventListener("click", () => {
  	location.reload();
  	})

})();
