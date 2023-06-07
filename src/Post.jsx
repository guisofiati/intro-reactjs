// props: { author: "", content: "" }

export function Post(props) {
  console.log(props);
  return (
    <div>
      <strong>
        <p>{props.author}</p>
      </strong>
      <p>{props.content}</p>
    </div>
  )
}