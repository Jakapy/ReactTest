export default function Preberivec(props) {
  return (
    <a className="vec-informacij" href={props.povezava}>
      <button>{props.children}</button>
    </a>
  );
}
