var elOpenModalBtn = document.querySelector(".open-bt");
var elModal = document.querySelector(".modal");
var elCloseModalBtn = document.querySelector(".close-bt");

elOpenModalBtn.addEventListener("click" , function(){
    elModal.classList.add("modal-open")

});
elCloseModalBtn.addEventListener("click" , function(){
    elModal.classList.remove("modal-open");
});