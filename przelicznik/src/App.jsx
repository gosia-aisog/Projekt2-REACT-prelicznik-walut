import { AppStyle, AppHeaderStyle } from "./components/style/AppStyles";

import ConverterApp from "./components/ConverterApp";

function App() {
  return (
    <div style={AppStyle}>
      <header style={AppHeaderStyle}>
        <ConverterApp></ConverterApp>
      </header>
    </div>
  );
}

export default App;
