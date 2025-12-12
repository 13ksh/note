let qr;

function makeQR() {
  const text = document.getElementById("text").value.trim();
  const box = document.getElementById("qrcode");

  if (!text) return;

  box.innerHTML = ""; // 기존 QR 제거

  qr = new QRCode(box, {
    text: text,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.L
  });
}
