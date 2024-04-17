
export function AnswersView({record}) {
  // debugger
  // let index = 0;
  return (
    <div className="answers-view">
    <h2 className="title">Results</h2>
      {record.map((x,i) => 
        <ul key={i} className="">
          <li>
            <h2>Question: {x.name}</h2>
            <h3>pick: {x.pick} | answer: {x.original.answer}</h3>
          </li>
        </ul>
      )}
    </div>
  )
}
