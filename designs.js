
function changeColor() {
	const color = document.getElementById("colorPicker").value;
	this.style.background = color;
}

function makeGrid() {
	const gridHeight = document.getElementById("input_height").value;
	const gridWidth = document.getElementById("input_width").value;
	const pixelCanvas = document.getElementById("pixel_canvas");
	pixelCanvas.innerText="";
	
	for (let x=0; x<gridHeight; ++x) {
		const row = pixelCanvas.insertRow(-1);
		for (let y=0; y<gridWidth; ++y) {
			const cell = row.insertCell(-1);
			cell.onclick = changeColor;
		}
	}
	event.preventDefault();
}