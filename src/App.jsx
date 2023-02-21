import "./App.css";
import { useState } from "react";

function App() {
  const [mobileLayout, setMobileLayout] = useState(true);

  const handleLayoutChange = () => {
    setMobileLayout(!mobileLayout);
  };

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
        {mobileLayout ? (
          <>
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
                src="https://test.alocom.co/class/kavano/daily"
                title="Alocom iframe test"
                allow="display-capture ;camera *;microphone *;fullscreen;"
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
          </>
        ) : (
          <section style={{ width: "100%", height: "100%", padding: "15px" }}>
            <iframe
              src="https://test.alocom.co/class/kavano/daily"
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
          </section>
        )}
      </main>
      <footer
        style={{
          width: "100vw",
          height: "10vh",
          backgroundColor: "burlywood",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={handleLayoutChange}
          style={{
            width: "130px",
            height: "40px",
            borderRadius: "12px",
            border: "none",
            boxShadow: "2px 3px 4px #adacacad",
            cursor: "pointer",
          }}
        >
          تغییر ریسپانسیو
        </button>
      </footer>
    </div>
  );
}

export default App;
