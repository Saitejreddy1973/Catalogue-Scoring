function calc() {
    var count = 0;
    var h =10;
    console.log(1);
    for (var i = 0; i<h ; i++) {
        if (document.getElementById("cloth"+(i+1)).value == "") {
            count +=1;
        }
    }
    score = (10 - 0.8*(count))*10;
    var ele = document.getElementById("hidbox");
    ele.style.display = "initial";
    console.log(score);
    ele.innerHTML = "Your Catalogue Score is "+score+"%";
    document.getElementById("furpr1").ariaValueNow = score;
    document.getElementById("furpr1").style.width = score+"%";
    document.getElementById("furpr").style.display = "initial";
}
