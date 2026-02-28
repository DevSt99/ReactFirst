import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Page1Content from './components/Section1/Page1Content'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color:'skyblue',
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color:'lightseagreen',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro: '',
      color:'orange',
      tag: 'Underbanked'
    },
    {

      img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro: '',
      color:'pink',
      tag: 'Underwear  '
    },
    {
      img:'https://images.unsplash.com/photo-1748785826435-83c5062a5737?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
      intro:'',
      color:'#656D3F',
      tag:'Average  '
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      {/* <Section2 /> */}
    </div>
  )
}

export default App