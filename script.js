// Initialisiere den QR-Code-Scanner
const qrCodeReader = new Html5Qrcode("reader");

// Starte den Scanner
qrCodeReader.start(
    { facingMode: "environment" }, // Kamera auf der Rückseite
    {
        fps: 10,                   // Frames pro Sekunde
        qrbox: { width: 250, height: 250 }, // Größe des Scanfeldes
    },
    (decodedText) => {
        // Wenn ein QR-Code erkannt wird
        document.getElementById("output").innerText = `QR Code Inhalt: ${decodedText}`;
    },
    (errorMessage) => {
        // Fehlerbehandlung (optional)
        console.error(errorMessage);
    }
).catch((err) => {
    console.error("Kamera konnte nicht gestartet werden:", err);
});