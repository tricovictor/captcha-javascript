function Captcha(mainCaptcha) {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;
    changeVal("txtInput","");
    changeVal("key",code);
    CreaIMG(code);
}

function CreaIMG(texto) {
    var ctxCanvas = document.getElementById('captcha').getContext('2d');
    var fontSize = "20px";
    var fontFamily = "Purisa";
    var fontStyle = "oblique bold";
    var width = 260;
    var height = 50;
    //size
    ctxCanvas.canvas.width = width;
    ctxCanvas.canvas.height = height;
    //background color
    ctxCanvas.fillStyle = "whitesmoke";
    ctxCanvas.fillRect(0, 0, width, height);
    //distortion points
    ctxCanvas.setLineDash([7, 10]);
    ctxCanvas.lineDashOffset = 5;
    ctxCanvas.beginPath();
    var line;
    for (var i = 0; i < (width); i++) {
        line = i * 5;
        ctxCanvas.moveTo(line, 0);
        ctxCanvas.lineTo(0, line);
    }
    ctxCanvas.stroke();
    //text format
    ctxCanvas.direction = 'ltr';
    ctxCanvas.font = fontStyle + " " + fontSize + " " + fontFamily;
    //text position
    var x = (width / 9);
    var y = (height / 3) * 2;
    //text border color
    ctxCanvas.strokeStyle = "yellow";
    ctxCanvas.strokeText(texto, x, y);
    //texto color
    ctxCanvas.fillStyle = "red";
    ctxCanvas.fillText(texto, x, y);
}

function ValidCaptcha() {
    var string1 = removeSpaces(document.getElementById("key").value);
    var string2 = removeSpaces(document.getElementById("txtInput").value);
    if (string1.toLowerCase() == string2.toLowerCase()) {
	     alert("Captcha correcto");
       //here indicate to your code what to do if the captcha is correct
       changeVal("txtInput","");
    }
    else {
	     alert("Vuelva a intentarlo");
       Captcha('mainCaptcha');
    }
}

function changeVal(variable,code){
   var s = document.getElementById(variable);
   s.value = code;
}

function removeSpaces(texto) {
    return texto.replace(/\s/g, '');
}
