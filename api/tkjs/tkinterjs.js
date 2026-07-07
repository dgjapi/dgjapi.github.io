class tk {
	static Tk = function(){return document.body;}
	
	static Frame(master,class_="tk.frame",id="tk",width=100,height=100){
		let a = document.createElement("div");
		a.style.width = width + "px";
		a.style.height = height + "px";
		a.className = class_;
		a.id = id;
		master.appendChild(a);
		return a
	}
	
	static Label(master,class_="tk.label",id="tk",text="hello tkjs!"){
		let a = document.createElement("p");
		a.textContent = text;
		a.className = class_;
		a.id = id;
		master.appendChild(a);
		return a;
	}
	
	static Button(master,class_="tk.button",id="tk",text="hello tkjs!",onclick=function(){alert("hello tkjs!");}){
		let a = document.createElement("button");
		a.textContent = text;
		a.onclick = onclick;
		a.className = class_;
		a.id = id;
		master.appendChild(a);
		return a;
	}
}