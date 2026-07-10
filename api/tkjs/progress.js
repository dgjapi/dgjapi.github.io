class Progress {
    constructor(master,class_1,class_2,id_1,id_2,maxwidth,height) {
        this.a = tk.Frame(master,class_1,id_1,maxwidth+4,height+4);
        this.b = tk.Frame(this.a,class_2,id_2,0,height);
        this.b.style.backgroundColor = "#00df1e";
        this.a.style.backgroundColor = "#222222"
        this.a.style.display = "flex";
        this.a.style.alignItems = "center";
        //this.a.style.justifyContent = "center"; 
        this.a.style.position = "relative";
        this.a.style.overflow = "hidden";
        this.maxwidth = maxwidth;
        this.progress = 0;
    }
    reload(){
        this.b.style.width = `${this.progress % 100}%`;
    }
    setProgress(progress){
        this.progress = progress;
        this.reload();
    }
    up(){
        this.progress += 1;
        this.reload();
    }
}