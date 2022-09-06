import React,{Suspense} from 'react'
import { Routes, Route } from 'react-router-dom'
import ViewsRouter from '../src/router/ViewsRouter'
export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loding…</div>}>
        <Routes>
          <Route path='*' element={<ViewsRouter/>}></Route>
        </Routes>
      </Suspense>
    </div>
  )
}