const App = () => (
  <div>
    <Tweet username="Sean99" name="Shahab" date={new Date().toDateString()} message="Hello World"/>
    <Tweet username="Neda1991" name="Neda" date={new Date().toDateString()} message="Hi back world"/>
    <Tweet username="Rooh099" name="Roohollah" date={new Date().toDateString()} message="Greatest dad ever!"/>
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"))