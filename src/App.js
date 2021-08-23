import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalette} from './colorHelpers';
function App() {
  return (
    <div>
      <Palette {...generatePalette(seedColors[1])}/>
    </div>
  );
}

export default App;
