let canv = document.getElementById('canvas'),ctx = canv.getContext('2d');
// Hello World gradient
// let 
  grad = ctx.createLinearGradient(0, 0, 500, 0);
  grad.addColorStop('0', 'magenta');
  grad.addColorStop('.50', 'blue');
  grad.addColorStop('.100', 'red');
  ctx.fillStyle =  grad;
  ctx.font = '30px Georgia';
  ctx.fillText('My Name is' + ' Iulian', 10, 50)
