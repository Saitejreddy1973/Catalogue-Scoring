function calc(h) {
    var count = 0;
    for (var i = 0; i<h ; i++) {
        if (document.getElementById("ph"+(i+1)).value == "") {
            count +=1;
        }
    }
    score = (10 - 0.4*(count))*10;
    var ele = document.getElementById("hidbox");
    ele.style.display = "initial";
    ele.innerHTML = "Your Catalogue Score is "+score+"%";
    document.getElementById("furpr1").ariaValueNow = score;
    document.getElementById("furpr1").style.width = score+"%";
    document.getElementById("furpr").style.display = "initial";
}