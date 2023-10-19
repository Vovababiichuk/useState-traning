import './App.css'
import React, { Fragment } from 'react'
import Home from './components/Home/Home.tsx'
import { Home2 } from './components/Home2/Home2.tsx'

const App: React.FC = () => {

const users: number[][] = [
  //...1000000000 users,
  [40, 24],
  [20, 14],
  [10, 8],
  [6, 4],
];

  return (
    <Fragment>
      <Home users={users}/>
      <Home2 />
    </Fragment>
  )
}

export default App
