# ❕ Desafío 5: ¡Encuentra a ΩMEGA!

La IA maligna ΩMEGA está acorralada. **_Tras revisar todos los nodos sanos de la red en el reto anterior..._ ¡hemos detectado que ΩMEGA se ha escondido en uno!**

No sabemos exactamente cuál es... pero sabemos las reglas que ha seguido ΩMEGA para esconderse.

Necesitamos encontrar los números que cumplen las siguientes condiciones:

- El número es primo.
- La suma de sus dígitos también es un número primo.
- Tu tarea es **escribir un programa que encuentre cuántos números de la lista cumplen con estas condiciones** y determinar cuál es **el tercer número que cumple con ellas al recorrer la lista en orden ascendente**.

#### Ejemplo:

Si tuviéramos la lista: `11,12,13,14`

- `11`: Es primo. 1 + 1 = 2, que es primo. → **Cumple.**
- `12`: No es primo. → _No cumple._
- `13`: Es primo. 1 + 3 = 4, que no es primo. → _No cumple._
- `14`: No es primo. → _No cumple._

En este caso, **solo un número cumple las condiciones, y ese número sería el primero (`11`).**

### ¿Qué debes hacer?

- Analiza la **lista de nodos del resultado del reto anterior** _\*(archivo [spoiler.txt](spoiler.txt))_ y encuentra todos los números que cumplen las condiciones.
- Determina cuántos números cumplen las condiciones.
- Identifica el tercer número que cumple las condiciones al recorrer la lista en orden ascendente.
- Envía el **número total de números que cumplen las condiciones** y el **tercer número encontrado**, separados por un guión. Por ejemplo, si hay 4 números que cumplen y el tercer número es 11, enviarías: `submit 4-11`
