# Alcancía · diseño

App personal de dinero para iPhone. Una sola página (HTML/CSS/JS sin dependencias), datos solo en el teléfono.

## Idea
"Alcancía vidriada": la pantalla de captura es una ranura de cobalto donde cae una moneda; el resto son paneles de lectura con fondos fríos y mini modales de cristal. Lo primero que se ve es solo la entrada rápida; todo lo demás se alcanza deslizando.

## Estructura
4 paneles deslizables (scroll-snap) con 4 puntos de navegación:
1. **Captura** (cobalto): ranura + teclado + categoría (editables, hasta 8; «Otros» siempre existe). Tocar el «$» cambia a «+» para sumar plata.
2. **Mes**: saldo general, banda por categoría con marca de ritmo, leyenda filtrable de 5 espacios (las 4 con más gasto del mes + «Resto», que abre su detalle), calendario día por día con popover.
3. **Pagos**: total por pagar, tira del estado del saldo (se despliega en una línea día a día que se puede arrastrar), tarjetas de los pagos del día elegido con botón Pagar, y calendario de 5 semanas. Cuotas, frecuencia (cada N meses), «Mes siguiente» para tarjetas de crédito (el cobro cae el mismo día pero un mes después) e historial de «Pagos hechos». Cuando un día (o los atrasados) junta varios pagos, se ven como una pila de tarjetas que se abre en abanico con «Y N más».
4. **Metas**: alcancía de vidrio con líquido, aportes, marcas de avance y ritmo estimado.

## Modelo del dinero
Saldo = entradas − gastos − pagos hechos − aportes a metas. Se arrastra de mes en mes. Los pagos hechos se registran como gastos; los aportes a metas salen del saldo sin sumarse a las barras. El sueldo fijo se suma solo cada mes.

## Tokens (en `:root`, con modo claro y oscuro)
- Fondos por panel: `--bg1` niebla azul, `--bg2` verde azulado, `--bg3` ciruela.
- Acento por panel: `--act1/2/3`. Categorías de datos: `--c1..--c5`.
- Cristal: `--glass`, `--glass-line`, `--glass-solid`, `--ring`. Ámbar para avisos: `--amber`, `--amberf`.
- Entrada de dinero: `--incbg`, `--incink`, `--incmute`.
- Tipografía del sistema (`--sys`), cifras tabulares.

## Componentes
- Ranura (`.slot`) con moneda que cae; teclado numérico propio.
- Selectores compactos de cristal (`.pk`): lista, cuadrícula de días o un campo numérico/texto.
- Mini modales (`.addmod`): pago, aporte, meta, detalle; variante ciruela para Metas.
- Cifras editables con subrayado punteado (`.capbtn`): nombre y objetivo de meta, entradas del mes.
- Avisos con una acción (`.toast`, `.gtoast`): deshacer, guardar respaldo.

## Principios
Pocos botones; un gesto por cosa; sin pantallas de ajustes (se toca la cifra para cambiarla); montos ocultables; movimiento que explica (monedas, barras, marcadores) y que se reduce con `prefers-reduced-motion`; textos en español, tono tranquilo.
