import React from 'react'
import { Education } from './Education'
import { Header } from './Header'
import { Language } from './Language'
import { Projects } from './Projects'
import { Work } from './Work'
import { Contact } from './Contact'


export const Home = () => {
  return (
      <>
      <Header/>
    <Projects/>
    <Work/>
    <Education/>
    <Language/>
    <Contact/>
      </>
  )
}
