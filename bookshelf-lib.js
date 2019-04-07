

function VarticalAlignBookHeads() {
    var Boxes = document.getElementsByClassName('LibruaryBookName');
    
    for (var i = 0; i < Boxes.length; i++) {
        Boxes[i].style.height = "auto";
    }

    var Numero;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        /////
        if (Boxes.length % 2 == 0) {
            Numero = Boxes.length / 2;
        } else {
            Numero = Math.floor(Boxes.length / 2 + 1);
        }
    
        for (var u = 0; u < Numero; u++) {
            var Height = 0;
            for (var i = 2 * u; i < 2 * u + 2; i++) {
                if (i < Boxes.length && Boxes[i].offsetHeight > Height) {
                    Height = Boxes[i].offsetHeight;
                }
            }
    
            for (var i = 2 * u; i < 2 * u + 2; i++) {
                if (i < Boxes.length) Boxes[i].style.height = Height + "px";
            }
    
        }
      } else {
          //////////
        if (Boxes.length % 4 == 0) {
            Numero = Boxes.length / 4;
        } else {
            Numero = Math.floor(Boxes.length / 4 + 1);
        }
    
        for (var u = 0; u < Numero; u++) {
            var Height = 0;
            for (var i = 4 * u; i < 4 * u + 4; i++) {
                if (i < Boxes.length && Boxes[i].offsetHeight > Height) {
                    Height = Boxes[i].offsetHeight;
                }
            }
    
            for (var i = 4 * u; i < 4 * u + 4; i++) {
                if (i < Boxes.length) Boxes[i].style.height = Height + "px";
            }
    
        }
      }
    

    
}
