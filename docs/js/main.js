let loadflg = false;
document.getElementById("iso_opener").addEventListener("change",function(e){
  pcsx_readfile(e.target);
})
document.getElementById("fullscreen_btn").addEventListener("click",function(e){
  Module.goFullscreen()
})
document.getElementById("canvas").addEventListener("contextmenu",function(e){
  e.preventDefault()
})
window.addEventListener("click", function () {
  loadScript();
});
window.addEventListener("keydown", function () {
  loadScript();
});
function loadScript(){
  if (loadflg) return;
  loadflg = true;
  console.log("load script");
  var script = document.createElement("script");
  script.src = "pcsx_ww.js";
  document.body.appendChild(script);
}


