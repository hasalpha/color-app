import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalette} from './colorHelpers';
import {Switch, Route} from 'react-router-dom';
import PaletteList from './PaletteList';
function App() {
  return (
    <Switch>
      <Route exact path="/" render={()=> <PaletteList palettes={seedColors}/>}/>
      <Route exact path="/palette/:id" render={routerProps=> <Palette {...generatePalette(seedColors.find(palette=>palette.id === routerProps.match.params.id))}/>}/>
    </Switch>
  );
}

export default App;
