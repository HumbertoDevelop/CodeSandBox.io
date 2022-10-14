import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <h4>
        Pos Mouse:
        {window.addEventListener("mousemove", (e) => {
          return {
            x: e.pageX,
            y: e.pageY
          };
        })}
      </h4>
    </div>
  );
}
