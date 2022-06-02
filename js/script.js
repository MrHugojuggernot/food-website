function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';

}

function countDown() {
    var currentVal = document.getElementById("countDownButton").innerHTML;
    if (currentVal > 0){
        var newVal = currentVal-1;
        document.getElementById("countDownButton").innerHTML = newVal;
        document.title = newVal;

    }



}