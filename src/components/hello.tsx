interface Ihello {
  message?:string;
}

const Hello:React.FunctionComponent<Ihello> = (props) => {
  return <h2>{props.message}</h2>
}

export default Hello