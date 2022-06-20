import {useState} from "react";
import Navbar from "./components/navbar/Navbar";
import Form from "./components/form/Form";
import data from "./data/data.json";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import List from "./components/list/List";

function App() {
  const [newData, setNewData] = useState(data)
  return (
    <Router>
  <Navbar />
  <main className="mt-5 container">
    <Switch>
      
      <Route exact path="/form">
      <Form setNewData={setNewData} data={newData}/>
      </Route>
      <Route exact path="/">
      <List data={newData}  />
      </Route>

    </Switch>
   
    
  </main>
  
  </Router>
  )
}

export default App;
