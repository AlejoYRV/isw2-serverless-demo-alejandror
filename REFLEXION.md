# Reflexión: Calidad y CI

## ¿Qué tipo de error evita el CI?
Evita que se integre código que rompe el comportamiento esperado. Por ejemplo, si alguien cambia el JSON de salida o deja de convertir el nombre a mayúsculas, las pruebas fallan y el pipeline detiene el merge/push

## ¿Qué tipo de error no evita?
No evita errores que no estén cubiertos por pruebas, ni problemas de entorno (variables, permisos, despliegue, red). Tampoco detecta defectos de integración si solo hay pruebas unitarias

## ¿Qué pasaría si un equipo ignora el CI?
Se acumulan regresiones y errores silenciosos. Se pierde tiempo corrigiendo tarde, baja la confianza en el código, y se vuelve común el “funciona en mi máquina” porque no hay validación automática confiable
