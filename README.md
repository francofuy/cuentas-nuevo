# Alcancía

App personal de dinero para el iPhone: gastos rápidos, saldo del mes, pagos que vienen y metas de ahorro.

- Una sola página (HTML, CSS y JavaScript), sin dependencias ni servidores.
- Tus datos se quedan en tu teléfono (almacenamiento local del navegador). Nada se envía a ningún lado.
- La campana de cada pago crea un evento mensual en Calendario con aviso un día antes y ese día.
- `sw.js` es un service worker mínimo: solo responde las direcciones `__cal/…` con el tipo `text/calendar`, para que iOS ofrezca «Agregar a Calendario».
- Respaldo en archivo desde el menú «···» de la pestaña Mes.
- En el iPhone: ábrela en Safari, toca Compartir y elige «Agregar a inicio».

El diseño está explicado en [DESIGN.md](DESIGN.md).

_Ultima publicacion: 2026-11-11 (pila de tarjetas, categorias editables, Mes siguiente)._
