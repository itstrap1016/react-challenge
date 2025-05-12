import { useState } from "react";

export default function App() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  return (
    <>
      {reverse ? (
        <div>
          <Field label="Last name" key="last" />
          <Field label="First name" key="first" />
        </div>
      ) : (
        <div>
          <Field label="First name" key="first" />
          <Field label="Last name" key="last" />
        </div>
      )}
      {checkbox}
    </>
  );
}

function Field({ label }) {
  const [text, setText] = useState("");
  return (
    <label>
      {label}:{" "}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  );
}
