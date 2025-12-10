/* =====================================================
   CARRUSEL — CONCIERTOS
===================================================== */

const pistaConciertos = document.getElementById("pistaConciertos");
const prevConcierto = document.getElementById("prevConcierto");
const nextConcierto = document.getElementById("nextConcierto");

if (pistaConciertos) {
  let indexConciertos = 0;

  const totalSlidesConciertos = pistaConciertos.children.length;

  function actualizarCarruselConciertos() {
    pistaConciertos.style.transform = `translateX(-${indexConciertos * 300}px)`;
  }

  nextConcierto.addEventListener("click", () => {
    indexConciertos++;
    if (indexConciertos >= totalSlidesConciertos) {
      indexConciertos = 0;
    }
    actualizarCarruselConciertos();
  });

  prevConcierto.addEventListener("click", () => {
    indexConciertos--;
    if (indexConciertos < 0) {
      indexConciertos = totalSlidesConciertos - 1;
    }
    actualizarCarruselConciertos();
  });
}


/* =====================================================
   CARRUSEL — MERCH
===================================================== */

const pistaMerch = document.getElementById("pistaMerch");
const prevMerch = document.getElementById("prevMerch");
const nextMerch = document.getElementById("nextMerch");

if (pistaMerch) {
  let indexMerch = 0;

  const totalSlidesMerch = pistaMerch.children.length;

  function actualizarCarruselMerch() {
    pistaMerch.style.transform = `translateX(-${indexMerch * 280}px)`;
  }

  nextMerch.addEventListener("click", () => {
    indexMerch++;
    if (indexMerch >= totalSlidesMerch) {
      indexMerch = 0;
    }
    actualizarCarruselMerch();
  });

  prevMerch.addEventListener("click", () => {
    indexMerch--;
    if (indexMerch < 0) {
      indexMerch = totalSlidesMerch - 1;
    }
    actualizarCarruselMerch();
  });
}


