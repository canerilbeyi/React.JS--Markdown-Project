import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const getLocalStorage = () => {
  let list = localStorage.getItem("markdown");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("markdown"));
  } else {
    return "## Markdown";
  }
};
function App() {
  const [markdown, setMarkdown] = useState(getLocalStorage());

  React.useEffect(() => {
    localStorage.setItem("markdown", JSON.stringify(markdown));
  }, [markdown]);
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
