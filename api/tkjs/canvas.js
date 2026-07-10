class Canvas {
    constructor(master,class_,id,width,height){
        this.a = document.createElement("canvas");
        this.a.className = class_;
        this.a.id = id;
        this.a.width = width;
        this.a.height = height;
        this.a.style.border = "2px solid #111111";

        this.mode = this.a.getContext("2d");
        master.appendChild(this.a);
    }
    create_rectangle(vec,width,height,color="black",fill=false){
        this.mode.beginPath(); 
        this.mode.rect(vec.x,vec.y,width,height);
        if(fill){this.mode.fillStyle = color;this.mode.fill();}
        else{this.mode.strokeStyle = color;this.mode.stroke();}
    }
}

class Vec2d {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}