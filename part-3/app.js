const App = () => (
  <div>
    <Person name="Shahab" age={35} hobbies={['Gaming', 'Coding', 'Fucking']}/>
    <Person name="Roohollah" age={15} hobbies={['sushi', 'poanera']}/>
    <Person name="Macarroni and cheese" age={17} hobbies={['cars', 'medalion', 'horses']}/>
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"))