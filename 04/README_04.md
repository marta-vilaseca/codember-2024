# 💥 Desafío 4: Evitando el caos en la red

¡La IA maligna ΩMEGA está atacando la red de nodos de la empresa! **Cada nodo tiene un identificador único que es un número entero y está conectado a otros nodos, formando una compleja estructura**.  
ΩMEGA está **destruyendo todas las redes que consten de 3 nodos o más conectados entre sí**. ¡Hay que descubrir qué nodos están a salvo de sus ataques!

### ¿Cómo funciona la red?

La red se representa como una **lista de pares de conexiones entre nodos**. Por ejemplo:

**Entrada:** `[[1, 2], [2, 3], [4, 5]]`
**Esto significa:**

- El nodo 1 está conectado al nodo 2.
- El nodo 2 está conectado al nodo 3.
- El nodo 4 está conectado al nodo 5.

**En este caso:**
Los nodos 1, 2 y 3 forman un grupo conectado.
Los nodos 4 y 5 forman otro grupo conectado.

#### Ejemplo 1

Entrada: `[[1, 2], [2, 3], [4, 5]]`
Redes: `[1, 2, 3]` y `[4, 5]`
ΩMEGA destruye la red `[1, 2, 3]`
Nodos a salvo: `4` y `5`
Salida: `[4, 5]`

#### Ejemplo 2

Entrada: `[[1, 2], [2, 3], [3, 4]]`
Redes: `[1, 2, 3, 4]`
ΩMEGA destruye la red `[1, 2, 3, 4]`
Nodos a salvo: _ninguno_
Salida: `[]`

#### Ejemplo 3

Entrada: `[[4, 6], [7, 9], [10, 12], [12, 16]]`
Redes: `[4, 6]`, `[7, 9]`, `[10, 12, 16]`
ΩMEGA destruye la red `[10, 12, 16]`
Nodos a salvo: `4`, `6`, `7` y `9`
Salida: `[4, 6, 7, 9]`

### ¿Qué debes hacer?

Accede al archivo [network.txt](network.txt), que contiene una **lista de conexiones entre nodos**. Envía la **lista de nodos ordenados de forma ascendente, separado por comas y sin espacios, que se han salvado del ataque**. Por ejemplo, del Ejemplo 1 enviarías a la terminal `submit 4,5`.

#### 👀 **Pista:** Hay 70 nodos a salvo... ¡ahora sólo falta saber cuáles son!
