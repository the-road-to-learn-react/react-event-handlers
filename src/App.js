import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState('Some text ...');

  function handleClick() {
    setCount(count + 1);
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      Count: {count}
      <hr />
      Text: {text}
      <hr />
      {/* Event Handlers */}
      <div>
        {/* Common Event Handler */}
        <button type="button" onClick={handleClick}>
          Event Handler
        </button>
      </div>
      <div>
        {/* Common Event Handler with actual Event usage */}
        <input type="text" value={text} onChange={handleChange} />
      </div>
      <div>
        {/* Inline Event Handler */}

        <button type="button" onClick={() => setCount(count + 1)}>
          Inline Event Handler
        </button>
      </div>
      <div>
        {/* Callback Event Handler */}

        <SomeComponent onButtonClick={handleClick} />
      </div>
    </div>
  );
}

function SomeComponent({ onButtonClick }) {
  return (
    <button type="button" onClick={onButtonClick}>
      Callback Event Handler
    </button>
  );
}

export default App;
