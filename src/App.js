import 'ace-builds/src-noconflict/ace';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import axios from 'axios';
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [idFrame, setIdFrame] = useState(null);
  const postData = async () => {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append('code', `import matplotlib.pyplot as plt
fig, ax = plt.subplots()

fruits = ['apple', 'blueberry', 'cherry', 'orange']
counts = [40, 100, 30, 55]
bar_labels = ['red', 'blue', '_red', 'orange']
bar_colors = ['tab:red', 'tab:blue', 'tab:red', 'tab:orange']

ax.bar(fruits, counts, label=bar_labels, color=bar_colors)

ax.set_ylabel('fruit supply')
ax.set_title('Fruit supply by kind and color')
ax.legend(title='Fruit color')

plt.show()`);
      bodyFormData.append('name', '');
      bodyFormData.append('lang', 'pygame');
      return await axios.post('https://trinket.io/api/trinkets?library=true', bodyFormData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
 )
   } catch (error) {
    return null
   }
  }
  useEffect(() => {
    let { data } = postData()
    setIdFrame(data)
  }, []);

  return (
    <div className="App">
      <div>
        <iframe
          id='tinket'
          title="tinket"
          src={`https://trinket.io/embed/pygame/${idFrame}?outputOnly=true&showInstructions=true`}
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
