import Container from '../components/container';
import Message from '../components/message';

export default function Home() {
  return (
    <Container>
      <Message
        title="AKSAMITKI, czyli ogrodowa ..."
        content="Tym razem kiszę nie tylko opieńki, ale także pozbierane przy okazji kurki i podgrzybki.
          Wyparzony pojemnik, odrobina soli, cukru, cebula i liść laurowy, to wszystko czego oprócz samych grzybów potrzeba do wypełnienia tego arcytrudnego zadania.
          Po rezultat kiszenia podgrzybków i kurek zapraszam na Bloga i Fejsbuka.
          Choć nie przewiduję aby wyszły niesmaczne :)"
        src="/aksamitki.PNG"
      />
    </Container>
  )
}
