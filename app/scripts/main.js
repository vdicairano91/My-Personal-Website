console.log('v i n n y');


document.getElementById("aboutTrigger").onclick = function(){
  document.getElementById("mainPhoto").classList.add("hidden");
  document.getElementById("introText").classList.add("hidden");
  
  document.getElementById("aboutText").classList.remove("hidden");
}


document.getElementById("workTrigger").onclick = function(){
  document.getElementById("mainPhoto").classList.add("hidden");
  document.getElementById("introText").classList.add("hidden");
  document.getElementById("workContainer").classList.remove("hidden");
}