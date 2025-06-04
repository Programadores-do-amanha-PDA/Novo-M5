import HeaderClassic from "./components/headerClassic";
import HomeButton from "./components/homeButton";
import Title from "./components/title";

export default function Home() {
  return (
    <>
      <HomeButton
        title="Clique"
        width="200px"
        height="100px"
        bk_color="#f1f1f1"
        color="#ff0000"
        personalizado={true}
      ></HomeButton>
      <HeaderClassic></HeaderClassic>
      <Title texto="oijasodijqoewij"></Title>
      <Title texto="sdewij"></Title>
      <Title texto="oiweij"></Title>
      <Title texto="oijqwijqoewij"></Title>
      <Title texto="oijasodi6549859"></Title>
      <HomeButton
        title="Submit"
        width="500px"
        height="30px"
        bk_color="#ff0000"
        color="#f1f1f1"
        personalizado={true}
      ></HomeButton>
      <HomeButton title="Submit" personalizado={false}></HomeButton>
    </>
  );
}
