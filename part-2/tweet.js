const Tweet = ({username, name, date, message}) => {

  return (
    <div>
      <div class="message-section">
        <h3>By {username}:</h3>
        <h4>{name}</h4> <span>{date}</span>
        <p>{message}</p>
      </div>
    </div>
  )
}