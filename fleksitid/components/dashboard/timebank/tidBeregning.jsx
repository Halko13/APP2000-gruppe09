// tidBeregning.jsx

export function beregnTimerogMinutter(timer) {
  const totalMinutter = Math.floor(timer * 60);
  const antallTimer = Math.floor(totalMinutter / 60);
  const antallMinutter = totalMinutter % 60;

  return {
    timer: antallTimer,
    minutter: antallMinutter,
  };
}
