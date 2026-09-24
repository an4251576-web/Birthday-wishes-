function openSurprise(){
  document.getElementById("opening").style.display="none";
  document.getElementById("main").classList.remove("hidden");
  startHearts();
  for(let i=0;i<35;i++) setTimeout(createHeart,i*100);
  window.scrollTo({top:0,behavior:"smooth"});
}
function createHeart(){
  const heart=document.createElement("div");
  heart.className="heart";
  const symbols=["💗","💕","💖","✨","🌸","🎀"];
  heart.textContent=symbols[Math.floor(Math.random()*symbols.length)];
  heart.style.left=Math.random()*100+"vw";
  heart.style.animationDuration=(3+Math.random()*3)+"s";
  heart.style.fontSize=(15+Math.random()*20)+"px";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
}
function startHearts(){setInterval(createHeart,900)}
