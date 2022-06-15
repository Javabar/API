import { ItemsContainer, Image, Items, Button } from "../css/App.styled";

const Home = ({ error, psychoNauts }) => {
  return (
    <div>
      {error && <p>{error}</p>}
      <h1>Psychonauts</h1>
      <ItemsContainer>
        {psychoNauts.map((psycho) => (
         <Items className="items" key={psycho.id}>
            <h3>{psycho.name}</h3>
            <h3>{psycho.gender}</h3>
            <Image src={psycho.img} alt="animal" />
          </Items>
        ))}
      </ItemsContainer>
      {/* <Button color="white" background="blue">
        New Button
      </Button>
      <Button color="yellow" background="purple">
        New Button
      </Button>
      <Button color="white" background="green">
        New Button
      </Button>{" "} */}
    </div>
  );
};

export default Home;
