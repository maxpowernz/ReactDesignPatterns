import { LeftHandComponent } from "./components/LeftHandComponent";
import { RightHandComponent } from "./components/RightHandComponent";
import { SplitScreen } from "./layouts/SplitScreen";

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={2}>
      <LeftHandComponent name="this is my name" />
      <RightHandComponent message="this is my message" />
    </SplitScreen>
  );
}

export default App;
