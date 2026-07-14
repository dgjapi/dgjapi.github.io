window.TKJSmsgboxDragIndex = 2;
window.TKJTheme = 0;
window.TKJSElementList = [];

class a648daef0000{
	constructor(master,class_,id) {
		let a = document.createElement("ul");
		a.className = class_;
		a.id = id;
		master.appendChild(a);
		this.a = a;
	}
	appEnd(ele){
		this.a.appendChild(ele);
	}
	deleteEnd(){
		let lastEle = this.a.lastElementChild;
		if (lastEle)
		{
			this.a.removeChild(lastEle);
		}
	}
	getObj(){
		return this.a;
	}
}

class tk {
	static index = 1;
	static Tk = function(){return document.body;}
	static title(tit){
		document.title = tit;
	}

	static update(){
		for (let o of window.TKJSElementList){
			console.log(o);
			console.log(o.tagName);
			console.log(8*"*")
			if (window.TKJSTheme == 1){
				document.body.style.backgroundColor = "#404040"
				if (o.tagName == "BUTTON"){
					o.style.backgroundColor = "#161616";
				}
				if (o.tagName == "P"){
					o.style.color = "#fdfdfd";
				}
			}else if(window.TKJSTheme == 0){
				document.body.style.backgroundColor = "#c4c4c4"
				if (o.tagName == "BUTTON"){
					o.style.backgroundColor = "#a3a3a3";
				}
				if (o.tagName == "P"){
					o.style.color = "#0f0f0f";
				}

			}else if(window.TKJSTheme == 2){
				document.body.style.backgroundColor = "#020202"
				if (o.tagName == "BUTTON"){
					o.style.backgroundColor = "#001aff";
					o.style.border = "2px solid #00fff2"
				}
				if (o.tagName == "P"){
					o.style.color = "#00c41a";
				}

			}else{
				console.log(`ERROR:${window.TKJSTheme}不是标准UI档案`)
			}
		}
	}
	
	static Frame(master,class_="tk.frame",id="tk",width=100,height=100){
		let a = document.createElement("div");
		a.style.width = width + "px";
		a.style.height = height + "px";
		a.className = class_;
		a.id = id;
		master.appendChild(a);
		window.TKJSElementList.push(a);
		return a;
	}
	
	static Label(master,class_="tk.label",id="tk",text="hello tkjs!"){
		let a = document.createElement("p");
		a.textContent = text;
		a.className = class_;
		a.id = id;
		master.appendChild(a);
		window.TKJSElementList.push(a);
		return a;
	}
	
	static Button(master,class_="tk.button",id="tk",text="hello tkjs!",onclick=function(){alert("hello tkjs!");}){
		let a = document.createElement("button");
		a.textContent = text;
		a.onclick = onclick;
		a.className = class_;
		a.id = id;
		master.appendChild(a);
		window.TKJSElementList.push(a);
		return a;
	}

	static Entry(master,class_="tk.entry",id="tk"){
		let a = document.createElement("input");
		a.type = "text";
		a.className = class_;
		a.id = id;
		master.appendChild(a);
		window.TKJSElementList.push(a);
		return a;
	}

	static Image(master,class_,id,src){
		let a = document.createElement("img");
		a.className = class_;
		a.id = id;
		a.src = src;
		master.appendChild(a);
		window.TKJSElementList.push(a);
		return a;
	}

	static Text(master,class_="tk.text",id="tk",width=50,height=50){
		let a = document.createElement("textarea");
		a.style.width = width + "ch";
		a.style.height = height + "em";
		a.className = class_;
		a.id = id;
		master.appendChild(a);
		window.TKJSElementList.push(a);
		return a;
	}

	static Listbox = a648daef0000;
	static ListboxLine(master,class_="tk.textbox",id="tk",ele){
		let a = document.createElement("li");
		a.textContent = ele;
		a.className = class_;
		a.id = id;
		master.appendChild(a);
		window.TKJSElementList.push(a);
		return a;
	}
	static DragFrame(master, class_="tk.dragbox",id="tk") {
    // 1. 创建可拖拽方框
    	let box = document.createElement("div");
    	box.className = class_;
    	box.id = id;
    	box.style.position = "absolute";
    	box.style.width = "153px";
    	box.style.height = "153px";
    	box.style.cursor = "grab";
    	box.style.padding = "8px";
    	box.style.boxSizing = "border-box";
    	box.style.fontSize = "14px";
    	box.style.display = "flex";
    	box.style.alignItems = "center";
    	box.style.justifyContent = "center";
    	box.style.textAlign = "center";
    	box.style.border = "2px solid #00FF00"; // 赛博绿边框
    	master.appendChild(box);

    	let isDragging = false;
    	let offsetX = 0, offsetY = 0;

    	function getPos(e) {
        	if (e.type.includes('touch')) {
            	return { x: e.touches[0].clientX, y: e.touches[0].clientY };
        	}
        	return { x: e.clientX, y: e.clientY };
    	}

    	function startDrag(e) {
			this.style.zIndex = `${++window.TKJSmsgboxDragIndex}`;
			console.log(document.tkjs);
			let tag = e.target.tagName.toLowerCase();
    		if (tag !== "div") {
        		return;
    		}
        	e.preventDefault();
        	isDragging = true;
        	const pos = getPos(e);
        	offsetX = pos.x - box.offsetLeft;
        	offsetY = pos.y - box.offsetTop;
		}

    	function moveDrag(e) {
        	if (!isDragging) return;
        	e.preventDefault();
        	const pos = getPos(e);
        	let left = pos.x - offsetX;
        	let top = pos.y - offsetY;

        	const winW = document.documentElement.clientWidth;
        	const winH = document.documentElement.clientHeight;
        	const boxW = box.offsetWidth;
        	const boxH = box.offsetHeight;

        	left = Math.max(0, Math.min(left, winW - boxW));
        	top = Math.max(0, Math.min(top, winH - boxH));

        	box.style.left = left + 'px';
        	box.style.top = top + 'px';
    	}

    	function endDrag() {
        	isDragging = false;
    	}

    	box.addEventListener('mousedown', startDrag);
    	document.addEventListener('mousemove', moveDrag);
    	document.addEventListener('mouseup', endDrag);

    	box.addEventListener('touchstart', startDrag);
    	document.addEventListener('touchmove', moveDrag);
    	document.addEventListener('touchend', endDrag);
    	document.addEventListener('touchcancel', endDrag);

		window.TKJSElementList.push(box);

    	return box;
	}
}

class tkEvent{
	static getInputValueById(id){
		return document.getElementById(id).value;
	}
	static setInputValueById(id,va){
		document.getElementById(id).value = va;
	}
	static getInputValueByElement(ele){
		return ele.value;
	}
	static getIdByElement(element){
		return element.id;
	}
	static deleteElement(element){
		element.parentNode.removeChild(element);
	}
}

class tkStyle {
	static BackgroundColor(element,colorstr)
	{
		element.style.backgroundColor = colorstr;
	}
	static FontColor(element,colorstr)
	{
		element.style.color = colorstr;
	}
	static BorderRadius(element,sizepx)
	{
		element.style.borderRadius = sizepx + "px";
	}
	static BoxShadow(element,xoffset,yoffset,blur,color)
	{
		element.style.boxShadow = `${xoffset}px ${yoffset}px ${blur}px ${color}`;
	}
	static XCenter(element){
		element.style.display = "flex";
		element.style.justifyContent = "center";
	}
	static YCenter(element){
		element.style.display = "flex";
		element.style.alignContent= "center";
	}
	
}

