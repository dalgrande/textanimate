# textanimate
It's a package to easily animate texts in React. Inspired in Moving Letters a work of Tobias Ahlin.

## Installation:

```npm i dalgrande-react-textanimate```
or
```yarn add dalgrande-react-textanimate```


## Usage:

Except the Effect 8, all other accept 4 ```props``` which are ```loop, lineColor, color, textSize``` and those who have more than one text you should pass ```text1, text2, ....``` also as props. The others works with ```children```.

```
import { Effect3 } from "dalgrande-react-textanimate";

function App() {
  return (
    <div>
      <Effect3
        loop={true}
        lineColor="olive"
        color="olive"
        textSize={1}        
      >
        Effect 3
      </Effect3>
    </div>
  );
}

export default App;
```
