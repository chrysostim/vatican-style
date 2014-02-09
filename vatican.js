function vatican() {

    function killFont() {
        var f = document.getElementsByTagName("font");
        var popcount = 0;
        while (f.length > 0) {
            var fp = f[0].parentElement;
            while (f[0].firstChild) {
                fp.insertBefore(f[0].firstChild, f[0]);
            }
            popcount++;
            console.log(popcount);
            fp.removeChild(f[0]);
        }
    }

    var main = document.createElement("div");
    main.style.position = "relative";
    main.style.textAlign = "left";
    main.style.maxWidth = "800px";
    main.style.height = "auto";
    main.style.backgroundColor = "white";
    main.style.margin = "15px auto 20px";
    main.style.padding = "20px";
    main.style.border = "1px solid rgb(102, 51, 0)";
    main.style.boxShadow = "6px 10px 17px rgba(102, 51, 0, 0.8)";
    main.style.borderRadius = "10px";


    var t = document.getElementsByTagName("table");
    while (t.length > 0) {
        t[0].width = "100%";
        var td = t[0].getElementsByTagName("td");
        for (var i = 0; i < td.length; i++) {
            if (td[i].getAttribute("rowspan") != "2") {
                td[i].width = "100%";
            }
        }
        main.appendChild(t[0]);
    }

    document.body.appendChild(main);

    var p = document.getElementsByTagName("p");
    for (var i = 0; i < p.length; i++) {
        p[i].style.fontSize = "11pt";
        p[i].style.fontFamily = "Tahoma,Verdana,Segoe,sans-serif";
    }
}

vatican();
