import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        height: "auto",
      }}
    >
      <header
        style={{
          width: "100vw",
          height: "10vh",
          backgroundColor: "turquoise",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "32px",
          fontFamily: "sans-serif",
        }}
      >
        <h1>The Iframe Element</h1>
      </header>
      <main
        style={{
          width: "100vw",
          height: "80vh",
          backgroundColor: "paleturquoise",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <section
          style={{
            width: "50vw",
            height: "inherit",
            backgroundColor: "lightcoral",
          }}
        ></section>
        <sidebar
          style={{
            width: "30vw",
            height: "inherit",
            backgroundColor: "lightcoral",
          }}
        >
          <iframe
            src="https://class.kavano.org/class/bondahesh/ardavahishta"
            title="Alocom iframe test"
            allow="camera *;microphone *;fullscreen;"
            width="100%"
            height="700px"
            referrerPolicy="strict-origin"
            frameBorder="0"
            scrolling="no"
            style={{
              padding: "0px",
              margin: "0px",
              display: "flex",
              width: "100%",
              backgroundColor: "transparent",
              overflow: "hidden",
              height: "100%",
            }}
          />
        </sidebar>
      </main>
      <footer
        style={{
          width: "100vw",
          height: "10vh",
          backgroundColor: "burlywood",
        }}
      ></footer>
    </div>
  );
}

export default App;
