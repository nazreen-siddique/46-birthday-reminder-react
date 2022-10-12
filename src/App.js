import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
 const[people,setPeople] = useState(data);
 
  const clearAll = ()=>{
    setPeople([]);
  }
    
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday today</h3>
        <div>
          <List people={people} />

          <button
            onClick={() => {
              clearAll();
            }}
          >
            clear all
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
