import Header from "./components/Header";

function App() {
  //const name = 'Taqi'; //can write js in here
  // <h2>Hello {name}</h2> this was inside div.
  return (
    // in this return we can only return a single parent element
    // not necessarily a div, can be a paragraph,can be a heading or a fragment.
    
    <div className="container">
      <Header /> 
    </div>
    // if we write an h2 it will not compile.
    //<h2>King</h2>
    

    // <>
    // <h1>This is a fragment</h1>
    // </>
  );
}

export default App;
