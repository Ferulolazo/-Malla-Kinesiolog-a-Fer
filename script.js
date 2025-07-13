function crearMalla() {
  const contenedor = document.getElementById("malla-container");

  // Agrupar ramos por semestre
  const porSemestre = {};
  ramos.forEach(r => {
    if (!porSemestre[r.semestre]) porSemestre[r.semestre] = [];
    porSemestre[r.semestre].push(r);
  });

  for (let s = 1; s <= 10; s++) {
    const columna = document.createElement("div");
    columna.classList.add("semestre");
    columna.innerHTML = `<h2>Semestre ${s}</h2>`;

    (porSemestre[s] || []).forEach(r => {
      const ramo = document.createElement("div");
      ramo.classList.add("ramo");
      ramo.setAttribute("data-nombre", r.nombre);
      ramo.setAttribute("data-tipo", r.tipo);
      ramo.setAttribute("data-semestre", s);
      ramo.setAttribute("data-creditos", r.creditos);
      ramo.setAttribute("data-prerrequisitos", JSON.stringify(r.prerrequisitos));
      ramo.textContent = r.nombre;

      const popup = document.createElement("div");
      popup.classList.add("creditos-popup");
      popup.textContent = `${r.creditos} SCT`;
      ramo.appendChild(popup);

      ramo.addEventListener("click", () => {
        if (ramo.classList.contains("aprobado")) return;
        ramo.classList.add("aprobado");
        popup.style.display = "block";

        // Activar ramos dependientes
        document.querySelectorAll(".ramo").forEach(other => {
          if (other.classList.contains("aprobado")) return;

          const prereqs = JSON.parse(other.getAttribute("data-prerrequisitos"));
          const nombre = ramo.getAttribute("data-nombre");
          const aprobados = Array.from(document.querySelectorAll(".ramo.aprobado")).map(e => e.getAttribute("data-nombre"));
          if (prereqs.every(p => aprobados.includes(p))) {
            other.style.opacity = "1";
            other.style.pointerEvents = "auto";
          }
        });
      });

      // Inicia desactivado si tiene prerequisitos
      if (r.prerrequisitos.length > 0) {
        ramo.style.opacity = "0.3";
        ramo.style.pointerEvents = "none";
      }

      columna.appendChild(ramo);
    });

    contenedor.appendChild(columna);
  }
}

window.onload = crearMalla;
