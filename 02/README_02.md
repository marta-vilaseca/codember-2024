# 🐱‍💻 Desafío 2: Detectando acceso no deseado

**Creo que ΩMEGA está intentando entrar en el sistema.** Por ahora, es un bebé y **está siguiendo patrones muy sencillos** que podemos detectar pero está intentando crear contraseñas de administrador para acceder a la terminal.

¿Cómo podemos detectar estos intentos de acceso? Está siguiendo estos patrones:

- Sólo usa **letras minúsculas y dígitos**.
- **Nunca usa dígitos después de una letra** (Una vez aparecen letras, la contraseña debe continuar solo con letras)
- **Si usa dígitos, siempre los usa de forma creciente** (si sale un 3, ya no usará después un número menor)
- **Si usa letras, siempre las usa en orden alfabético creciente** (si sale una "b" ya no podrá usar una "a", por ejemplo)

#### Algunos ejemplos para que lo entiendas perfectamente:

```
1234 -> true
abc -> true
a123 -> false (un número después de una letra)
123abc -> true
dbce -> false (una "d" y después una "b")
```

**Accede [a este log.txt](log.txt) con una lista de intentos** y con un programa cuenta cuántos han sido inválidos y cuántos válidos. Envía la respuesta usando el comando submit.

##### Por ejemplo, si hay 10 intentos válidos y 5 inválidos envía el comando `submit 10true5false`
