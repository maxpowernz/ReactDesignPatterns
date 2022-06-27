import styled from "styled-components";
import { Modal } from "./Modal";

const InnerComponent = styled.div`
  height: 300px;
`;

function App() {
  return (
    <Modal noBackgroundClick>
      <InnerComponent>
        <br />
        Does this piss you off?
      </InnerComponent>
    </Modal>
  );
}

export default App;
