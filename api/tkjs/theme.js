window.theme = "light";

function themeUpdate() {
    if (window.theme === "light") {
        document.body.style.backgroundColor = "#efefff";
        for (let ele of document.getElementsByTagName("p")) {
            ele.style.color = "#000001";
        }
        for (let ele of document.getElementsByTagName("button")) {
            ele.style.color = "#000011";
            ele.style.backgroundColor = "#efefff";
        }
        for (let ele of document.getElementsByTagName("input")) {
            ele.style.color = "#000011";
            ele.style.backgroundColor = "#efefff";
            ele.style.borderRadius = "6px";
        }
        for (let ele of document.getElementsByTagName("textarea")) {
            ele.style.color = "#000011";
            ele.style.backgroundColor = "#efefff";
            ele.style.borderRadius = "6px";
        }
    }
    if (window.theme === "dark") {
        document.body.style.backgroundColor = "#383838";
        for (let ele of document.getElementsByTagName("p")) {
            ele.style.color = "#ffffff";
        }
        for (let ele of document.getElementsByTagName("button")) {
            ele.style.color = "#ffffff";
            ele.style.backgroundColor = "#383838";
        }
        for (let ele of document.getElementsByTagName("input")) {
            ele.style.color = "#ffffff";
            ele.style.backgroundColor = "#383838";
            ele.style.borderRadius = "6px";
        }
        for (let ele of document.getElementsByTagName("textarea")) {
            ele.style.color = "#ffffff";
            ele.style.backgroundColor = "#383838";
            ele.style.borderRadius = "6px";
        }
    }
    if (window.theme === "hacker") {
        document.body.style.backgroundColor = "#383838";
        for (let ele of document.getElementsByTagName("p")) {
            ele.style.color = "#00ff08";
        }
        for (let ele of document.getElementsByTagName("button")) {
            ele.style.color = "#00ff08";
            ele.style.backgroundColor = "#383838";
        }
        for (let ele of document.getElementsByTagName("input")) {
            ele.style.color = "#00ff08";
            ele.style.backgroundColor = "#383838";
            ele.style.borderRadius = "6px";
        }
        for (let ele of document.getElementsByTagName("textarea")) {
            ele.style.color = "#00ff08";
            ele.style.backgroundColor = "#383838";
            ele.style.borderRadius = "6px";
        }
    }
    if (window.theme === "glass") {
        document.body.style.background = "#454545";
       

        for (let ele of document.getElementsByTagName("p")) {
            ele.style.color = "#000000";
            ele.style.textShadow = "0 2px 12px rgba(0, 0, 0, 0.3)";
        }

        for (let ele of document.getElementsByTagName("button")) {
            ele.style.background = "rgba(255, 255, 255, 0.12)";
            ele.style.color = "#000000";
            ele.style.border = "1px solid rgba(255, 255, 255, 0.25)";
            ele.style.borderRadius = "8px";
            ele.style.backdropFilter = "blur(8px)";
            ele.style.transition = "0.3s";
            ele.style.cursor = "pointer";
            
        }

        for (let ele of document.getElementsByTagName("input")) {
            ele.style.background = "rgba(255, 255, 255, 0.08)";
            ele.style.color = "#000000";
            ele.style.border = "1px solid rgba(255, 255, 255, 0.2)";
            ele.style.borderRadius = "8px";
            
            ele.style.backdropFilter = "blur(8px)";
            
            ele.style.boxSizing = "border-box";
        }

        for (let ele of document.getElementsByTagName("textarea")) {
            ele.style.background = "rgba(255, 255, 255, 0.08)";
            ele.style.color = "#000000";
            ele.style.border = "1px solid rgba(255, 255, 255, 0.2)";
            ele.style.borderRadius = "8px";
            ele.style.backdropFilter = "blur(8px)";
            ele.style.boxSizing = "border-box";
        }    
    }
    if (window.theme === "neon") {
        document.body.style.backgroundColor = "#f081ff";
        for (let ele of document.getElementsByTagName("p")) {
            ele.style.color = "#4b00d6";
        }
        for (let ele of document.getElementsByTagName("button")) {
            ele.style.color = "#4b00d6";
            ele.style.backgroundColor = "#c7008b7c";
        }
        for (let ele of document.getElementsByTagName("input")) {
            ele.style.color = "#4b00d6";
            ele.style.backgroundColor = "#c7008b7c";
            ele.style.borderRadius = "6px";
        }
        for (let ele of document.getElementsByTagName("textarea")) {
            ele.style.color = "#4b00d6";
            ele.style.backgroundColor = "#c7008b7c";
            ele.style.borderRadius = "6px";
        }
    }
}

function setTheme(t){
    window.theme = t;
    resetTheme();
    themeUpdate();
}
function resetTheme() {
    // 重置 body 样式（保留你之前设置的，全部清空）
    document.body.style.backgroundColor = "";
    document.body.style.background = "";
    document.body.style.minHeight = "";
    document.body.style.margin = "";
    document.body.style.fontFamily = "";
    document.body.style.display = "";
    document.body.style.justifyContent = "";
    document.body.style.alignItems = "";

    // 重置所有 p 标签
    for (let ele of document.getElementsByTagName("p")) {
        ele.style.color = "";
        ele.style.fontSize = "";
        ele.style.textShadow = "";
    }

    // 重置所有 button
    for (let ele of document.getElementsByTagName("button")) {
        ele.style.color = "";
        ele.style.backgroundColor = "";
        ele.style.background = "";
        ele.style.border = "";
        ele.style.borderRadius = "";
        ele.style.padding = "";
        ele.style.backdropFilter = "";
        ele.style.webkitBackdropFilter = "";
        ele.style.transition = "";
        ele.style.cursor = "";
        ele.style.fontSize = "";
        ele.style.fontWeight = "";
        ele.style.width = "";
    }

    // 重置所有 input
    for (let ele of document.getElementsByTagName("input")) {
        ele.style.color = "";
        ele.style.backgroundColor = "";
        ele.style.background = "";
        ele.style.border = "";
        ele.style.borderRadius = "";
        ele.style.padding = "";
        ele.style.backdropFilter = "";
        ele.style.webkitBackdropFilter = "";
        ele.style.outline = "";
        ele.style.width = "";
        ele.style.boxSizing = "";
        ele.style.fontSize = "";
    }

    // 重置所有 textarea
    for (let ele of document.getElementsByTagName("textarea")) {
        ele.style.color = "";
        ele.style.backgroundColor = "";
        ele.style.background = "";
        ele.style.border = "";
        ele.style.borderRadius = "";
        ele.style.padding = "";
        ele.style.backdropFilter = "";
        ele.style.webkitBackdropFilter = "";
        ele.style.outline = "";
        ele.style.width = "";
        ele.style.boxSizing = "";
        ele.style.fontSize = "";
        ele.style.fontFamily = "";
        ele.style.resize = "";
    }

    for (let ele of document.getElementsByTagName("div")) {
        ele.style.background = "";
        ele.style.backdropFilter = "";
        ele.style.webkitBackdropFilter = "";
        ele.style.border = "";
        ele.style.boxShadow = "";
        ele.style.borderRadius = "";
        ele.style.padding = "";
        ele.style.maxWidth = "";
        ele.style.width = "";
        ele.style.textAlign = "";
    }
}
function setThemeBySystem(){
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    {
        setTheme("dark");
    }else{
        setTheme("light");
    }
}