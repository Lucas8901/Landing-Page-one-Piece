function imgSlider(anything){
  document.querySelector('.luffy').src = anything;
}
function changeCircleColor(color){
  const circle = document.querySelector('.circle');
  const btn = document.querySelector('.btn');
  const span = document.querySelector('.span');
  circle.style.background = color;
  btn.style.background = color;
  span.style.color = color;
}