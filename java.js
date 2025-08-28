const cnt = document.getElementById("cnt");
const reset = document.getElementById("resetbtn");
const decreament = document.getElementById("decreamentbtn");
let count = 0;
reset.onclick = function () {
    count = 0;
    cnt.textContent = count;
}
decreament.onclick = function () {
    if (count > 0) {
        count--;
    }
    cnt.textContent = count;
}
cnt.onclick = function () {
        count++;
        cnt.textContent = count;
}
