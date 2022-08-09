
import React, { useCallback, useState } from "react";

const App=()=> {
  const [word, setWord] = useState("바다");
  const [value, setValue] = useState("");
  const [fail, setFail] = useState("");

  const onChange = useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>((e) => {
    setValue(e.currentTarget.value);
  },[]);

  const onSubmit = useCallback<(e: React.FormEvent) => void>((e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setWord(value);
      setFail("");
    } else {
      setFail("틀렸습니다!");
      setWord("");
    }
  },[word,value]);

  return (
    <div className="App">
      <head className="App-header">
        <h1>끝말잇기</h1>
      </head>
      <div>
        <div>{word}</div>
        <form>
          <input type="text" value={value} onChange={onChange}></input>
          <button onClick={onSubmit}>입력</button>
        </form>
        <div>{fail}</div>
      </div>
    </div>
  );
}



export default App;
