# textanimate
It's a package to easily animate texts in React. Inspired in Moving Letters a work of Tobias Ahlin.

## Installation:

```npm i dalgrande-react-textanimate```
Or
```yarn add dalgrande-react-textanimate```


## Usage:

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
        textShadow="none"
      >
        Effect 3
      </Effect3>
    </div>
  );
}

export default App;
```
