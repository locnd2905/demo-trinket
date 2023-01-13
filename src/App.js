import 'ace-builds/src-noconflict/ace';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className='test'>
        <div style={{ width: "50%", display: 'flex',flexDirection:'column',justifyContent:'flex-start',textAlign:'left' }}>
          <div style={{  display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 'bolder' }}>
              #Project 1
            </span>
            <span >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </span>
          </div>
          <div>
              
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <iframe
            id='tinket'
            title="tinket"
            src={`https://trinket.io/embed/pygame/d3497e4811?outputOnly=true&showInstructions=true`}
            allow='autoplay; encrypted-media'
            frameBorder="0"
            width='100%'
            height='100%'
            marginWidth="0"
            marginHeight="0"
            allowFullScreen></iframe>
        </div>
      </div>
    </div>

  );
}

export default App;
