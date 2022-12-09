import { useState } from 'react'
import './App.css'
import { Main } from './components/tools/Main'
import { Transition } from './components/tools/Transition'

function App() 
{
  return (
    <main className="App">
      <Transition>
        <Main></Main>
      </Transition>
    </main>
  )
}

export default App
