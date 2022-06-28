  function f() {
        var x = document.getElementById("text").value
        x = x.split(" ", 2)
        var namechar = x[0].charAt(0) + x[1].charAt(0)
        namechar=namechar.toUpperCase()
        var canvas1  = document.getElementById("myCanvas");
        canvas1.addEventListener("click", function() {
            var canvas = document.getElementById("myCanvas");
            image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            var link = document.createElement('a');
            link.download = "myavatar.png";
            link.href = image;
            link.click();        });
        var context = canvas1.getContext("2d");
        context.beginPath();
        const colors = ["#003F63", "#F2B138", "#A6BF4B", "#D94C1A", "#FF665A", "#FFF587", "#3EB595", "#F2ACB9", "#1FFF00", "#FF3534"];

        context.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        context.strokeStyle = "black";
        context.font = "40px arial";
        context.lineWidth = 10;
        context.arc(100, 100, 75, 0, 2 * Math.PI, false);
        context.fill();
        context.beginPath();
        context.fillStyle = "white";
        context.fillText(namechar, 80, 110);
        context.fill();
    }
    
