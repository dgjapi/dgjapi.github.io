class Window {
    constructor(master,class_,id,width,height,widget) {
        
        box = tk.DragFrame(master,"msgbox","bsgboxinfo");
        tit=tk.Label(box,"msgbox.tit","msgboxinfo.tit",title);
        lab=tk.Label(box,"msgbox.lab","msgboxinfo.lab",message);

        box.style.display = "flex";
        box.style.width = `${width}px`;
        box.style.height = `${height}px`;
        box.style.backgroundColor = "#dbdbdb";
        box.style.alignItems = "flex-start";
        box.style.flexDirection = "column";

        tit.style.display = "flex";
        tit.style.color = "#ffffff";
        box.style.alignItems = "flex-start";
        box.style.height = "20px";

        this.widget = tk.Frame(box,".widget","#widget",width,height-20);
        this.box = box;
        this.tit = tit;
        this.lab = lab;
    }
    close(){
        tkEvent.deleteElement(box);
    }
}