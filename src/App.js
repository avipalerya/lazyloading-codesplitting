import logo from "./logo.svg";
import "./App.css";
import { Suspense, useState } from "react";
import ComponentOne from "./component/ComponentOne"; //normal import
import ComponentTwo from "./component/ComponentTwo";
const ComponentTwo = React.lazy(() => import("./component/ComponentTwo")); // lazy import

function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="App">
      <ComponentOne />
      {isShow && (
        <Suspense fallback={<h>Loading....</h>}>
          <ComponentTwo />
        </Suspense>
      )}
      <button
        onClick={() => {
          setIsShow(true);
        }}
      >
        Update
      </button>
    </div>
  );
}

export default App;
