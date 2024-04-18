
import '@styles/answers-view.scss';


export function AnswersView({records}) {
  // debugger
  // let index = 0;
  
  // split up the results
  let wins = records.filter(x=>
    x.pick === x.original.answer
  );
  let fails = records.filter(x=>
    x.pick !== x.original.answer
  );
  // debugger

  
  return (
    <div className="answers-view">
      <h2 className="title">Results <span>{wins.length} of / {records.length}</span></h2>
      
      {(wins.length === records.length) && <h2 className="winner-title">SUPER YOU!!!</h2>}
      
      <section className="correct">
        <h2 className="title2">Correct : {wins.length}</h2>
        {wins.map((x,i) => 
          <ul key={i} className="">
            <li>
              
              <section className="left">
                <div>{x.original.word}</div>
                <div className="minititle">{x.original.answer}</div>
              </section>
              <div className="results">
                
                <h3>picked: {x.pick} </h3>
                {/*
                  <h3>Answer: {x.original.answer}</h3>
                */}
              </div>
              
              
            </li>
          </ul>
        )}
      </section>
      
      <section className="wrong">
        <h2 className="title2">Wrong : {fails.length}</h2>
        {fails.map((x,i) => 
          <ul key={i} className="wrong-list">
            <li>
              
              <section className="left">
                <div>{x.original.word}</div>
                <div className="minititle">{x.original.answer}</div>
              </section>
              <div className="results">
                
                <h3>picked: {x.pick} </h3>
                {/*
                  <h3>Answer: {x.original.answer}</h3>
                */}
              </div>
              
              
            </li>
          </ul>
        )}
      </section>
      
      {/*
      {records.map((x,i) => 
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
      */}
    </div>
  )
}
