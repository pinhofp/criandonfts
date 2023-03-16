const canvas = document.getElementById('canvas');
const nftName = document.querySelector('.nft-name');
const nftDescription = document.querySelector('.nft-description');

const colors = ['#ff5722', '#ffc107', '#4caf50', '#2196f3', '#9c27b0'];
const shapes = ['circle', 'triangle', 'square'];
const textures = ['solid', 'striped', 'dotted'];

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
const randomShape = () => shapes[Math.floor(Math.random() * shapes.length)];
const randomTexture = () => textures[Math.floor(Math.random() * textures.length)];

const generateNFT = () => {
  const context = canvas.getContext('2d');
  const color = randomColor();
  const shape = randomShape();
  const texture = randomTexture();

  // Desenha o fundo
  context.fillStyle = color;
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Desenha a forma
  context.beginPath();
  if (shape === 'circle') {
    const radius = Math.min(canvas.width, canvas.height) / 2 - 10;
    context.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
  } else if (shape === 'triangle') {
    context.moveTo(canvas.width / 2, 10);
    context.lineTo(10, canvas.height - 10);
    context.lineTo(canvas.width - 10, canvas.height - 10);
    context.closePath();
  } else {
    const size = Math.min(canvas.width, canvas.height) - 20;
    context.fillRect((canvas.width - size) / 2, (canvas.height - size) / 2, size, size);
  }

  // Aplica a textura
  context.globalCompositeOperation = 'source-atop
