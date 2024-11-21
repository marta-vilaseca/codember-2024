# 🔍 Desafío 3: ¡Siguiendo la pista de la IA ΩMEGA!

**La IA maligna ΩMEGA está causando problemas en el sistema de control de la empresa.** Estamos siguiendo su rastro y necesitamos averiguar **cuántos pasos ha tomado para llegar a la salida** (ya sea por la izquierda o por la derecha).

ΩMEGA cuenta con una **lista de instrucciones de salto.** Cada instrucción indica el número de posiciones que debe moverse en esa misma lista.

- Número positivo: ΩMEGA avanza ese número de posiciones.
- Número negativo: Retrocede ese número de posiciones.
- Cero: Se queda en la misma posición (pero cuenta como movimiento).

> [!IMPORTANT]  
> _Importante:_ Cada vez que ΩMEGA lee una instrucción, incrementa el valor de esa instrucción en 1 después de usarla.

- Si encuentra un 2, avanza 2 posiciones y luego esa instrucción se convierte en 3.
- Si encuentra un 0, se queda en su posición y luego esa instrucción se convierte en 1.
- Si encuentra un -3, retrocede 3 posiciones y luego esa instrucción se convierte en -2.

### Voy a darte un ejemplo.

Entre paréntesis te indicaré la instrucción actual en la que se encuentra ΩMEGA.

##### Lista de instrucciones: 1 2 4 1 -2

```
Inicio: (1) 2 4 1 -2    // → ΩMEGA empieza en la posición 0
Paso 1:  2 (2) 4 1 -2   // → Avanza una posición y la instrucción se convierte en 2
Paso 2:  2 3 4 (1) -2   // → Avanza 2 posiciones y la instrucción se convierte en 3
Paso 3:  2 3 4 2 (-2)   // → Avanza una posición y la instrucción se convierte en 2
Paso 4:  2 3 (4) 2 -1   // → Retrocede dos posiciones y pasa a -1
Paso 5:  2 3 4 2 -1     // → Avanza 4 posiciones y escapa

Resultado: 5
```

##### Otro ejemplo con lista de instrucciones: 0 1 2 3 -1

```
Inicio: (0) 1 2 3 -1   // → ΩMEGA empieza en la posición 0
Paso 1: (1) 1 2 3 -1   // → No avanza pero incrementa la instrucción en 1
Paso 2: 2 (1) 2 3 -1   // → Avanza una posición y la instrucción se convierte en 2
Paso 3: 2 2 (2) 3 -1   // → Avanza una posición y la instrucción se convierte en 2
Paso 4: 2 2 3 3 (-1)   // → Avanza dos posiciones y la instrucción se convierte en 3
Paso 5: 2 2 3 (3) 0    // → Retrocede una posición y la instrucción se convierte en 0
Paso 6: 2 2 3 4 0      // → Avanza tres posiciones y escapa

Resultado: 6
```

##### Otro ejemplo saliendo por la izquierda: 1 -2 5

```
Inicio: (1) -2 5    // → ΩMEGA empieza en la posición 0
Paso 1: 2 (-2) 5    // → Avanza una posición y la instrucción se convierte en 1
Paso 2: 2 -1 5      // → Retrocede dos posiciones y sale por la izquierda

Resultado: 2
```

#### ¡Ten en cuenta que, si la lista empieza por un número negativo, entonces ΩMEGA saldrá por la izquierda en un sólo paso!

Accede a este [trace.txt](trace.txt). Tiene una lista de los movimientos que realizó ΩMEGA separados por salto de línea. **Necesito que calcules los pasos que necesito ΩMEGA para salir de cada instrucción por línea, que sumes todos los resultados y me digas el resultado final de pasos que necesito ΩMEGA en total y el resultado de la última línea, separado por guión.**

_\* Por ejemplo, si necesitó 99 pasos en total sumándo los pasos de cada línea y para la instrucción de la última línea necesitó 13 pasos entonces la solución a enviar sería submit 99-13_
