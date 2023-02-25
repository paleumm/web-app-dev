import React from 'react'
import './App.css';
import Card from "./components/Card"

const App = () => {

  let food1 = {
    type: "อาหารคาว",
    name: "ข้าวผัด",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: "https://img.kapook.com/u/surauch/cook/FriedRicewithCrab.jpg"
  }

  let food2 = {
    type: "อาหารหวาน",
    name: "บัวลอย",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: "https://img.kapook.com/u/2022/wanwanat/1079595941.jpg"
  }

  return (
    <div className='App'>
      <h1 className='title'>โหวตอาหาร</h1>
      <Card food={food1} />
      <Card food={food2} />
    </div >
  )
}

export default App