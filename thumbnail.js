document.addEventListener("DOMContentLoaded", function(event) {
  if (targetImage.classList.contains("small")) {
    targetImage.addEventListener("click", function() {
    targetImage.classList.remove("small");  
});
} else {
    targetImage.addEventListener("click", function() {
    targetImage.classList.add("small"); 
});
}
});
