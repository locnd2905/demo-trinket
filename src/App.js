import 'ace-builds/src-noconflict/ace';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <iframe
          id='tinket'
          title="tinket"
          src={`https://trinket.io/embed/pygame/d3497e4811?outputOnly=true&showInstructions=true`}
          width="1200"
          allow='autoplay; encrypted-media'
          height="600"
          frameBorder="0"
          marginWidth="0"
          marginHeight="0"
          allowFullScreen></iframe>
      </div>
    </div>

  );
}

export default App;
