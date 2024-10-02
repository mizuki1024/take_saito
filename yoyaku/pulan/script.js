document.querySelectorAll(".reserve-button").forEach(button => {
    button.addEventListener("click", () => {
        alert("プランが予約されました！");
    });
});

document.querySelectorAll(".subscribe-button").forEach(button => {
    button.addEventListener("click", () => {
        alert("サブスクリプションに登録されました！");
    });
});

document.querySelector(".cancel-button").addEventListener("click", () => {
    alert("予約をキャンセルしました。");
});
