export default function handler(req, res) {
  const nombre = req.query.nombre || "anónimo";

  // Mini-reto: simular error si nombre = "error"
  if (String(nombre).toLowerCase() === "error") {
    return res.status(500).json({
      error: "Error simulado en /api/procesar",
      timestamp: new Date().toISOString()
    });
  }

  res.status(200).json({
    resultado: `Nombre procesado: ${String(nombre).toUpperCase()}`,
    timestamp: new Date().toISOString() //timestamp
  });
}
