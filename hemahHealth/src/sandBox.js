fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))


  // <Router></Router>
  
// import { BrowserRouter as Router ,Route,Switch,Link} from 'react-router-dom'