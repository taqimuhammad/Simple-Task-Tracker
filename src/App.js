import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"

function App() {
  //usestate work
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day : 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at school',
        day : 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Grocery Shopping',
        day : 'Feb 5th at 2:30pm',
        reminder: false,
    }
])
  //const name = 'Taqi'; //can write js in here
  // <h2>Hello {name}</h2> this was inside div.
  return (
    // in this return we can only return a single parent element
    // not necessarily a div, can be a paragraph,can be a heading or a fragment.
    
    <div className="container">
      <Header /> 
      <Tasks tasks={tasks}/>
    </div>
    
    // props --> can pass here and retrieve in Header.
    // can also pass default props by removing title below and adding default in header.js
    // <div className="container">
    //   <Header title = 'Hello'/>       
    // </div>

    // if we write an h2 it will not compile.
    // have to be inside the div or a single parent.
    //<h2>King</h2>
    
    // fragments
    // <>
    // <h1>This is a fragment</h1>
    // </>
  )
};

export default App;
