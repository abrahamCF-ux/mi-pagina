const contenedor = document.getElementById("texto-centro");

function agregarTexto(nuevoTexto) {
    const p = document.createElement("p");
    p.innerHTML = nuevoTexto; // <-- innerHTML permite negritas y emojis
    contenedor.appendChild(p);
}

// Aquí agregas tu texto completo con negritas
agregarTexto("El <strong>Club Deportivo Guadalajara</strong>, conocido como <strong>Chivas</strong>, tiene sus raíces en el siglo XX y se originó como el Club Unión el 8 de mayo de 1906. Fundado por <strong>Edgar Everaert</strong> y el galo <strong>Calixte Gas</strong>, el club se inspiró en la bandera de la ciudad de Brujas, Bélgica, y adoptó los colores rojo, blanco y azul. Aunque inicialmente contaba con jugadores de varios países, como mexicanos, suizos y franceses, la política de contar solo con jugadores mexicanos se estableció en la temporada 1943-44, cuando el club ingresó al profesionalismo. Desde entonces, <strong>Chivas</strong> ha sido un símbolo de la identidad mexicana en el fútbol y ha mantenido un fuerte arraigo en el corazón del pueblo mexicano.");