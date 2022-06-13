const contenedorQR = document.getElementById('containerQR');
const formulario = document.getElementById('form');

const QR = new QRCode(containerQR);

formulario.addEventListener('submit', (x) => {
	x.preventDefault();
	QR.makeCode(formulario.link.value);
});