class messagebox {
    static showinfo(master,title,message){
        let box = tk.DragFrame(master,"msgbox","bsgboxinfo");
        let tit=tk.Label(box,"msgbox.tit","msgboxinfo.tit",title);
        let lab=tk.Label(box,"msgbox.lab","msgboxinfo.lab",message);
        let cancel=tk.Button(box,"msgbox.cancel","msgboxinfo.cancel","退出",function(){tkEvent.deleteElement(box);})

        box.style.display = "flex";
        box.style.flexDirection = "column";
        box.style.width = `300px`;
        box.style.height = `200px`;
        box.style.backgroundColor = "#4e4e4e";
        box.style.alignItems = "flex-start";
        box.style.marginTop = "0px";
        box.style.paddingTop = "0px";

        tit.style.display = "block";
        tit.style.color = "#ffffff";
        tit.style.width = "100%";
        tit.style.padding = "10px 0";
        tit.style.backgroundColor = "#131313";
        tit.style.marginBottom = "auto";

        cancel.style.marginTop = "35px";
        
    }
    static showinput(master,title,message,callback){
        let isSubmit = false;
        let box = tk.DragFrame(master,"msgbox","bsgboxinp");
        let tit=tk.Label(box,"msgbox.tit","msgboxinp.tit",title);
        let lab=tk.Label(box,"msgbox.lab","msgboxinp.lab",message);
        let inp=tk.Entry(box,"msgbox.inp","msgboxinp.inp")
        let cancel=tk.Button(box,"msgbox.cancel","msgboxinfo.cancel","提交",function(){
            isSubmit = true;
            callback(tkEvent.getInputValueByElement(inp));
            tkEvent.deleteElement(box);
        })

        box.style.display = "flex";
        box.style.flexDirection = "column";
        box.style.width = `300px`;
        box.style.height = `200px`;
        box.style.backgroundColor = "#4e4e4e";
        box.style.alignItems = "flex-start";
        box.style.marginTop = "0px";
        box.style.paddingTop = "0px";

        tit.style.display = "block";
        tit.style.color = "#ffffff";
        tit.style.width = "100%";
        tit.style.padding = "10px 0";
        tit.style.backgroundColor = "#131313";
        tit.style.marginBottom = "auto";

        cancel.style.marginTop = "35px";
    }
    static showerror(master,title,message){
        let box = tk.DragFrame(master,"msgbox","bsgboxinfo");
        let tit=tk.Label(box,"msgbox.tit","msgboxinfo.tit",title);
        let lab=tk.Label(box,"msgbox.lab","msgboxinfo.lab",message);
        let cancel=tk.Button(box,"msgbox.cancel","msgboxinfo.cancel","退出",function(){tkEvent.deleteElement(box);})

        box.style.display = "flex";
        box.style.flexDirection = "column";
        box.style.width = `300px`;
        box.style.height = `200px`;
        box.style.backgroundColor = "#4e4e4e";
        box.style.alignItems = "flex-start";
        box.style.marginTop = "0px";
        box.style.paddingTop = "0px";

        tit.style.display = "block";
        tit.style.color = "#ffffff";
        tit.style.width = "100%";
        tit.style.padding = "10px 0";
        tit.style.backgroundColor = "#131313";
        tit.style.marginBottom = "auto";

        cancel.style.marginTop = "35px";

        lab.style.color = "red";
        
    }
}