// React Router
  import { BrowserRouter, Routes, Route } from "react-router-dom";
// css from stlyes 
  import './Styles/App.css';
// Components
  import Nav from './Components/Nav.js';
  import Hero from "./Components/Hero";
  import Home from "./Tabs/Home";
  import Works from "./Tabs/Works";
  import Resume from "./Tabs/Resume";
  import Story from "./Tabs/Story";
  import Contact from "./Tabs/Contact";

function App() {
  return (

    <main>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path = '/'        element = {[<Hero    />, < Home    /> ]}/>
            <Route path = '/Works'   element = {< Works   /> }/>
            <Route path = '/Resume'  element = {< Resume  /> }/>
            <Route path = '/Story'   element = {< Story   /> }/>
            <Route path = '/Contact' element = {< Contact /> }/>
          </Routes>
        </BrowserRouter> 
    </main>
  
  );
}

export default App;
