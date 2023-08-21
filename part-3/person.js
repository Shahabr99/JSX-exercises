const Person = (props) => {
  let message;
  if(props.age > 18) {
    message = "Please go vote!"
  }else{
    message="You must be 18"
  }

  

  return (
    <div>
      <p>Learn some information about this person</p>
      { props.name.length > 8 ? <span>{props.name.slice(0, 6)}</span> : <span>{props.name}</span> }
      <br></br>
      <span>{props.age}</span>
      <h3>{message}</h3>
      <ul>
        {props.hobbies.map(h => <li>{h}</li>)}
      </ul>
    </div>
  )
}