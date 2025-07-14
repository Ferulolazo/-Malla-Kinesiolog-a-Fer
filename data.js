const ramos = [
  {
    nombre: "Bases integradas de química, bioquímica, biología celular y genética",
    semestre: 1,
    creditos: 5,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Física para el estudio de la kinesiología",
    semestre: 1,
    creditos: 3,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Introducción a la kinesiología",
    semestre: 1,
    creditos: 3,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Anatomía estructural y funcional I",
    semestre: 1,
    creditos: 5,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Estructura y función tisular",
    semestre: 1,
    creditos: 4,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Estrategias de búsqueda bibliográfica",
    semestre: 1,
    creditos: 2,
    tipo: "investigacion",
    prerrequisitos: []
  },
  {
    nombre: "Cursos de formación general I",
    semestre: 1,
    creditos: 2,
    tipo: "formacion",
    prerrequisitos: []
  },
  {
    nombre: "Inglés I",
    semestre: 1,
    creditos: 3,
    tipo: "formacion",
    prerrequisitos: []
  },
  {
    nombre: "Fisiología general",
    semestre: 2,
    creditos: 5,
    tipo: "obligatorio",
    prerrequisitos: ["Bases integradas de química, bioquímica, biología celular y genética"]
  },
  {
    nombre: "Neuroanatomía",
    semestre: 2,
    creditos: 5,
    tipo: "obligatorio",
    prerrequisitos: ["Anatomía estructural y funcional I"]
  },
  {
    nombre: "Anatomía estructural y funcional II",
    semestre: 2,
    creditos: 5,
    tipo: "obligatorio",
    prerrequisitos: ["Anatomía estructural y funcional I"]
  },
  {
    nombre: "Introducción al estudio del movimiento humano",
    semestre: 2,
    creditos: 3,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Educación física I",
    semestre: 2,
    creditos: 2,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Biomecánica, evaluación y preparación física I",
    semestre: 2,
    creditos: 3,
    tipo: "obligatorio",
    prerrequisitos: ["Introducción al estudio del movimiento humano"]
  },
  {
    nombre: "Lectura comprensiva de artículos científicos",
    semestre: 2,
    creditos: 2,
    tipo: "investigacion",
    prerrequisitos: []
  },
  {
    nombre: "Cursos de formación general II",
    semestre: 2,
    creditos: 2,
    tipo: "formacion",
    prerrequisitos: []
  },
  {
    nombre: "Inglés II",
    semestre: 2,
    creditos: 3,
    tipo: "formacion",
    prerrequisitos: ["Inglés I"]
  },
  <script src="data.js"></script>
    {
    nombre: "Neurofisiología",
    semestre: 3,
    creditos: 5,
    tipo: "obligatorio",
    prerrequisitos: ["Fisiología general", "Neuroanatomía"]
  },
  {
    nombre: "Fisiología del ejercicio",
    semestre: 3,
    creditos: 5,
    tipo: "obligatorio",
    prerrequisitos: ["Fisiología general"]
  },
  {
    nombre: "Crecimiento, desarrollo y aprendizaje motor",
    semestre: 3,
    creditos: 5,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Educación física II",
    semestre: 3,
    creditos: 2,
    tipo: "obligatorio",
    prerrequisitos: ["Educación física I"]
  },
  {
    nombre: "Biomecánica, evaluación y preparación física II",
    semestre: 3,
    creditos: 5,
    tipo: "obligatorio",
    prerrequisitos: ["Biomecánica, evaluación y preparación física I"]
  },
  {
    nombre: "Kinesiología general",
    semestre: 3,
    creditos: 4,
    tipo: "obligatorio",
    prerrequisitos: ["Introducción a la kinesiología"]
  },
  {
    nombre: "Cursos de formación general III",
    semestre: 3,
    creditos: 2,
    tipo: "formacion",
    prerrequisitos: []
  },
  {
    nombre: "Inglés III",
    semestre: 3,
    creditos: 3,
    tipo: "formacion",
    prerrequisitos: ["Inglés II"]
  },
  {
    nombre: "Control motor",
    semestre: 4,
    creditos: 5,
    tipo: "obligatorio",
    prerrequisitos: ["Neurofisiología"]
  },
  {
    nombre: "Evaluación kinésica funcional I",
    semestre: 4,
    creditos: 5,
    tipo: "obligatorio",
    prerrequisitos: ["Biomecánica, evaluación y preparación física II"]
  },
  {
    nombre: "Kinesiología en ciclo vital",
    semestre: 4,
    creditos: 5,
    tipo: "obligatorio",
    prerrequisitos: ["Crecimiento, desarrollo y aprendizaje motor"]
  },
  {
    nombre: "Psicología y neurociencias del comportamiento",
    semestre: 4,
    creditos: 4,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Educación física III",
    semestre: 4,
    creditos: 2,
    tipo: "obligatorio",
    prerrequisitos: ["Educación física II"]
  },
  {
    nombre: "Salud pública",
    semestre: 4,
    creditos: 3,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Lectura y análisis crítico de estudios científicos",
    semestre: 4,
    creditos: 2,
    tipo: "investigacion",
    prerrequisitos: ["Lectura comprensiva de artículos científicos"]
  },
  {
    nombre: "Cursos de formación general IV",
    semestre: 4,
    creditos: 2,
    tipo: "formacion",
    prerrequisitos: []
  },
  {
    nombre: "Inglés IV",
    semestre: 4,
    creditos: 3,
    tipo: "formacion",
    prerrequisitos: ["Inglés III"]
  },
  {<script src="data.js"></script>
    nombre: "Kinesiología en el adulto y adulto mayor I",
    semestre: 5,
    creditos: 6,
    tipo: "obligatorio",
    prerrequisitos: ["Kinesiología general", "Kinesiología en ciclo vital"]
  },
  {
    nombre: "Kinesiología en el niño I",
    semestre: 5,
    creditos: 6,
    tipo: "obligatorio",
    prerrequisitos: ["Kinesiología general", "Kinesiología en ciclo vital"]
  },
  {
    nombre: "Evaluación kinésica funcional II",
    semestre: 5,
    creditos: 5,
    tipo: "obligatorio",
    prerrequisitos: ["Evaluación kinésica funcional I"]
  },
  {
    nombre: "Electivo profesional I",
    semestre: 5,
    creditos: 3,
    tipo: "electivo",
    prerrequisitos: []
  },
  {
    nombre: "Intervención kinésica I",
    semestre: 5,
    creditos: 4,
    tipo: "obligatorio",
    prerrequisitos: []
  },
  {
    nombre: "Metodología de la investigación cuantitativa",
    semestre: 5,
    creditos: 3,
    tipo: "investigacion",
    prerrequisitos: []
  },
  {
    nombre: "Cursos de formación general V",
    semestre: 5,
    creditos: 2,
    tipo: "formacion",
    prerrequisitos: []
  },
  {
    nombre: "Kinesiología en el adulto y adulto mayor II",
    semestre: 6,
    creditos: 6,
    tipo: "obligatorio",
    prerrequisitos: ["Kinesiología en el adulto y adulto mayor I"]
  },
  {
    nombre: "Kinesiología en el niño II",
    semestre: 6,
    creditos: 6,
    tipo: "obligatorio",
    prerrequisitos: ["Kinesiología en el niño I"]
  },
  {
    nombre: "Psicología clínica y salud mental",
    semestre: 6,
    creditos: 3,
    tipo: "obligatorio",
    prerrequisitos: ["Psicología y neurociencias del comportamiento"]
  },
  {
    nombre: "Electivo profesional II",
    semestre: 6,
    creditos: 3,
    tipo: "electivo",
    prerrequisitos: []
  },
  {
    nombre: "Intervención kinésica II",
    semestre: 6,
    creditos: 4,
    tipo: "obligatorio",
    prerrequisitos: ["Intervención kinésica I"]
  },
  {
    nombre: "Metodología de la investigación cualitativa",
    semestre: 6,
    creditos: 3,
    tipo: "investigacion",
    prerrequisitos: ["Metodología de la investigación cuantitativa"]
  },
  {
    nombre: "Cursos de formación general VI",
    semestre: 6,
    creditos: 2,
    tipo: "formacion",
    prerrequisitos: []
  },
    <script src="data.js"></script>
    {
    nombre: "Práctica profesional I",
    semestre: 7,
    creditos: 12,
    tipo: "obligatorio",
    prerrequisitos: ["Kinesiología en el adulto y adulto mayor II", "Kinesiología en el niño II"]
  },
  {
    nombre: "Electivo profesional III",
    semestre: 7,
    creditos: 3,
    tipo: "electivo",
    prerrequisitos: []
  },
  {
    nombre: "Seminario de grado I",
    semestre: 7,
    creditos: 3,
    tipo: "investigacion",
    prerrequisitos: ["Metodología de la investigación cualitativa"]
  },
  {
    nombre: "Práctica profesional II",
    semestre: 8,
    creditos: 12,
    tipo: "obligatorio",
    prerrequisitos: ["Práctica profesional I"]
  },
  {
    nombre: "Electivo profesional IV",
    semestre: 8,
    creditos: 3,
    tipo: "electivo",
    prerrequisitos: []
  },
  {
    nombre: "Seminario de grado II",
    semestre: 8,
    creditos: 3,
    tipo: "investigacion",
    prerrequisitos: ["Seminario de grado I"]
  },
    <script src="data.js"></script>
    {
    nombre: "Internado profesional I",
    semestre: 9,
    creditos: 15,
    tipo: "obligatorio",
    prerrequisitos: ["Práctica profesional II"]
  },
  {
    nombre: "Internado profesional II",
    semestre: 10,
    creditos: 15,
    tipo: "obligatorio",
    prerrequisitos: ["Internado profesional I"]
  }
];
