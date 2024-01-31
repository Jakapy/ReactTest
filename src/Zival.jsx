import Preberivec from "./Preberivec";
import { Profil } from "./Profil";

export function Zival(props) {
  const { image, name, desc, url } = props.data;

  return (
    <div className="zival">
      <img src={image}></img>
      <h3>{name}</h3>
      <p>{desc}</p>
      <Preberivec povezava={url}>Preberi več o {name}</Preberivec>
    </div>
  );
}
