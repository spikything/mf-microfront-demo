import React, {useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import counterWrapper from "remote/counterWrapper";
import "./index.scss";

const App = () => {

  const myRef = useRef()

  useEffect(() => {
    counterWrapper(myRef.current)
  }, [])

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: host-react</div>
      <div>Embed SolidJS microfrontend below...</div>
      <div ref={myRef}></div>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
