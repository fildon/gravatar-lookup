import * as React from "react";
import { render } from "react-dom";

import md5 from "md5";

const App = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [submittedValue, setSubmittedValue] = React.useState("");
  const onChange = (event: { target: { value: string } }) => {
    setInputValue(event.target.value);
  };
  const onSubmit = (event: { preventDefault: () => unknown }) => {
    event.preventDefault();
    setSubmittedValue(inputValue.trim().toLowerCase());
  };
  return (
    <>
      <h1>Gravatar Lookup</h1>
      <p>
        Enter an email address below to perform a{" "}
        <a href="https://en.gravatar.com/">Gravatar</a> lookup. If no match is
        found, an Identicon is displayed instead.
      </p>
      <form onSubmit={onSubmit}>
        <input type="text" value={inputValue} onChange={onChange}></input>
        <input type="submit" value="Search!" />
      </form>
      <img
        src={`https://www.gravatar.com/avatar/${md5(
          submittedValue
        )}?s=200&d=identicon`}
        alt={`Gravatar for ${submittedValue}`}
      />
    </>
  );
};

render(<App />, document.getElementById("root"));
