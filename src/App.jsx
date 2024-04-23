import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">the wild oasis</Heading>
            <div>
              <Heading as="h2">check in and out</Heading>
              <Button onClick={() => alert("check in")}>check in</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("check out")}
              >
                check out
              </Button>
            </div>
          </Row>
          <Row type="vertical">
            <Heading as="h3">Form </Heading>
            <Input type="number" placeholder="Number of guests" />
            <Input type="number" placeholder="Number of guests" />
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
