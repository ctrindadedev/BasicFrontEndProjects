const imgs = document.getElementById("img"); //Containar com id img
const img = document.querySelectorAll("#img img"); //Pegar elementos de imagem que estão no container id img
let index = 0;
carroussel = () => {
  index++;
  if (index > img.length - 1) {
    index = 0;
  }
  imgs.style.transform = `translateX(${-index * 500}px)`;
};
setInterval(carroussel, 1800);
