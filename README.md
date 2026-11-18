## Tarea Templates

### Ejercicios 1 a 6
- `includes/menu.html`: menú superior con los enlaces de la página.
- `includes/pie.html`: pie de página.
- `principal.html`: plantilla base. Incluye el menú y el pie con `{% include %}` y define los blocks `cabecera` y `contenido`. Carga `static/css/estilo.css`, `static/javascript/tutorial.js` y `static/imagenes/imagen.svg` con `{% static %}`.
- Todas las páginas heredan de `principal.html` con `{% extends %}`.
- Las plantillas de lista (proyectos, tareas completadas, búsqueda de tareas, último comentario, usuarios sin tarea, asignaciones y últimos comentarios de un usuario) incluyen con `{% include %}` una plantilla para el contenido del `for`: `proyecto/proyecto.html`, `tarea/tarea.html`, `comentario/comentario.html`, `usuario/usuario_sin_tarea.html`, `asignacion/asignacion.html` y `comentario/comentario_usuario.html`.

### Ejercicio 7: template tags
`if-elif-else` (estado de la tarea), `for…empty` (todas las listas), `with` (`tarea/tarea.html`), `cycle` (filas pares e impares), `firstof` (descripción de la tarea), `include`, `now` (año del pie) y `url`.

### Ejercicio 8: operadores lógicos
`==`, `!=`, `and`, `or`, `not`, `in`, `>` y `>=` (en `tarea/tarea.html`, `proyecto/proyecto.html` y `usuario/usuario_sin_tarea.html`).

### Ejercicio 9: template filters
`date`, `time`, `title`, `upper`, `lower`, `capfirst`, `length`, `pluralize`, `default`, `truncatechars`, `join`, `cut`, `linebreaksbr` y `yesno`.