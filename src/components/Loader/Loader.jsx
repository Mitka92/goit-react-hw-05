import GridLoader from "react-spinners/GridLoader";
import { Container } from "../Container/Container";
import { Section } from "../Section/Section";
const Loader = () => {
  return (
    <Section>
      <Container>
        <GridLoader color="rgb(89, 111, 212)" size={24} />
      </Container>
    </Section>
  );
};
export default Loader;
