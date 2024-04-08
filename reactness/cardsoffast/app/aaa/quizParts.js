export function Multichoice() {
  return (
    <div class="quizblock">
    <button>A</button>
    <button>B</button>
    <button>C</button>
    </div>
  );
}


export function Subject({src}) {
  return (
    <div class="subjectblock">
    <img src={src} />
    </div>
  );
}
