// On fait une fonction lié à l'id "vert" qui réagie au click
vert.addEventListener("click", function(){
// La fonction change la couleur pour du vert
  text.style.color = "green";
});
// On réutilise la même fonction en changeant les couleurs pour le reste
rouge.addEventListener("click", function(){
  text.style.color = "red";
});
bleu.addEventListener("click", function(){
  text.style.color = "blue";
});
