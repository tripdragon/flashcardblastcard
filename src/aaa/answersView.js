
export function AnswersView({record}) {
  // debugger
  // let index = 0;
  return (
    <div className="answers-view">
      <h2 className="title">Results</h2>
      {record.map((x,i) => 
        <ul key={i} className="">
          <li>
            
            <div className="left">{x.original.word}</div>
            <div className="results">
              
              <h3>Pick: {x.pick} </h3>
              <h3>Answer: {x.original.answer}</h3>
            </div>
            
            
          </li>
        </ul>
      )}
    </div>
  )
}
