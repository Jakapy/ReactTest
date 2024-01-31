import { Button } from "./Button";
import { Counter } from "./Counter";
import { Zival } from "./Zival";

const animals = [
  {
    name: "Žirafa",
    desc: "Žiráfa je visok afriški sesalec. Natančneje, gre za sodoprstega kopitarja. Je najvišja živa kopenska žival in največji prežvekovalec na Zemlji. Tradicionalno je veljalo, da so žirafe ena vrsta, Giraffa camelopardalis, z devetimi podvrstami.",
    url: "https://sl.wikipedia.org/wiki/%C5%BDirafa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/250px-Giraffe_standing.jpg",
  },
  {
    name: "Slon",
    desc: "Sloni so večja skupina sesalcev, ki tvorijo družina živali Elephantidae v redu trobčarjev. Danes so poznane tri živeče vrste, ki jim grozi izumrtje: afriški gozdni slon, afriški savanski slon in azijski slon. Sloni živijo v podsaharski Afriki, Južni Aziji in Jugovzhodni Aziji.",
    url: "https://sl.wikipedia.org/wiki/Slon",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg",
  },
  {
    name: "Sokol selec",
    desc: "Sokol selec je srednje velik sokol s prišiljenimi perutmi in kratkim repom, ki leti izjemno hitro in je v strmoglavem letu najhitrejše živo bitje na Zemlji (najvišje izmerjene hitrosti presegajo 320 km/h). Leti z upognjenimi perutnicami in hitro zamahuje s krili, vmes pa kratkotrajno drsi skozi zrak. Najvišja hitrost v horizontalnem letu lahko preseže 200 km/h.",
    url: "https://sl.wikipedia.org/wiki/Sokol_selec",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/60/Wanderfalke_greifvogel_Christine_Landes.jpg",
  },
];

export default function App() {
  return (
    <>
      <h1>Živalsko kraljestvo</h1>
      <p>TUkaj bodo predstavljene različne živali</p>
      <Counter></Counter>
      <div className="grid grid-cols-3 gap-5">
        {animals.map((animal) => {
          return <Zival data={animal}></Zival>;
        })}
      </div>
    </>
  );
}
