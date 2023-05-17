import "./App.css";
import RecipeList from "./RecipeList";
import DepartmentList from "./DepartmentList";
import Counter from "./Counter";
import FunctionCounter from "./FunctionCounter";
import NoMatch from "./NoMatch";
import { NavLink, Route, Routes } from "react-router-dom";

const activeLink = "active-link";

function App() {
  return (
    <div className="App">
      <h1>React Route Lessons</h1>
      <div>
        <p>Click on any option below will render the components</p>
      </div>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : undefined)}
          to="/recipes"
        >
          Recipe List
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : undefined)}
          to="/departments"
        >
          Department List
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : undefined)}
          to="/counter"
        >
          Two Counters
        </NavLink>
      </nav>
      <Routes>
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/departments" element={<DepartmentList />} />
        <Route
          path="/counter"
          element={
            <>
              <FunctionCounter />
              <Counter />
            </>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
