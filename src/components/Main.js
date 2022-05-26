import React from 'react'
import { About } from './About'
import { Education } from './Education'
import { Language } from './Language'
import { Projects } from './Projects'
import { Work } from './Work'
import {Link,Router,Routes,Route,BrowserRouter} from "react-router-dom"
import { Home } from './Home'
import { Navbar } from './Navbar'

export const Main = () => {
  return (
    <>
  <div className="container">

<div className="row">
  <div className="col-xs-12">
<BrowserRouter>
<Navbar/>

<Routes>

  <Route path='/' element ={<Home/>}/>
  <Route path='/about' element ={<About/>}/>
</Routes>
</BrowserRouter>
  
   
  </div>

</div>
  </div>
    
    </>
  )
}

