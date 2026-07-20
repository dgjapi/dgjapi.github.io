if(typeof tk === 'undefined'){
    console.error("未导入依赖tkinterjs.js文件，无法加载");
    throw new Error("缺少 tkinterjs.js 依赖,引入后再运行");
}

function Attr(conf={}){
    return {
        text:"hello tkjs!",
        class_:"_tk_element_",
        id:`_tk_id_${Math.round(Math.random()*7534)}`,
        width:100,
        height:50,
        onclick:function(){alert("hello tkjs")},
        src:"",
        ...conf
    };
}
class tkc{
    static Tk = function(ele){
        let a = tk.Tk();
        for(let i of ele){
            a.appendChild(i);
        }
    }
	static title(tit){
		document.title = tit;
	}
    static CFrame(conf,ele){
        let a = document.createElement("div");
		a.style.width = conf.width + "px";
		a.style.height = conf.height + "px";
		a.className = conf.class_;
		a.id = conf.id;
        for(let i of ele){
            a.appendChild(i);
        }
		return a;
    }
    static CLabel(conf){
        let a = document.createElement("p");
		a.textContent = conf.text;
		a.className = conf.class_;
		a.id = conf.id;
		return a;
    }
    static CButton(conf)
    {
        let a = document.createElement("button");
		a.textContent = conf.text;
		a.onclick = conf.onclick;
		a.className = conf.class_;
		a.id = conf.id;
		return a;
    }
    static CEntry(conf)
    {
        let a = document.createElement("input");
		a.type = "text";
		a.className = conf.class_;
		a.id = conf.id;
		return a;
    }
    static CImage(conf){
        let a = document.createElement("img");
		a.className = conf.class_;
		a.id = conf.id;
		a.src = conf.src;
		return a;
    }
    static CText(conf){
		let a = document.createElement("textarea");
		a.style.width = conf.width + "ch";
		a.style.height = conf.height + "em";
		a.className = conf.class_;
		a.id = conf.id;
		return a;
    }
}