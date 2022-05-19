import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"



 import Chats from "./Chats"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
       
          <Switch>
            { <Route path="/" component={Chats} />}
            
          </Switch>
    
      </Router>
    </div>
  )
}

export default App
