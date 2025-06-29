// import logo from './logo.svg';
import './App.css';
// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
import StarPractice from "./components/StarPractice"
import ToDoList from './components/ToDoList';
import ToDoListAdvanced from './components/ToDoListAdvanced';
function App() {

  const RatingChange = (newRating) => {
    console.log("New rating is provided")
  }
  return (
    <div className="App"
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "center",  // vertical centering
      //   alignItems: "center",      // horizontal centering
      //   minHeight: "100vh",        // fill screen
      //   backgroundColor: "black",
      // }}
      >

      {/* // <StarPractice initialValue = {2} onChange={ (value) => RatingChange(value)} /> */}
      < ToDoList />
      <ToDoListAdvanced />
    </div>
  );
}

export default App;
