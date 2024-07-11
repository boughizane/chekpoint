
import React from 'react'

const Navbar = () => {
  return (
    <div>

      <header>
      <div className='logo'>
        <h1>logo</h1>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAeBJREFUSEvF1E2ITmEUB/DfmBosphTFxopS4yulSKQsDJoUFkqUYsdOygplISWrsUIWpmYxiiQzG3YUFgoLJbNgIUUp+Spfz9HzTm/Xve+9r0zO7un5n/M/X//TY5qtZ5rj+68E+3AO82qqfIvTGfsHtKqC5XiE3i5auB53i/gqgodYnQhO4XgNyVkcwTMsw/d2fBnBQVzAJAbwtYZgdsYuwFEE4ZQVCaLfzzEH2zDesEW7UvZX8QmL8brlVyS4jP24hp0Ng7dgt7AVo9hTRrAuD+lzAi3Bqy4JFubqZ2Jq4O0VPMXSLoNWwZ9gRXy2EzxGrOe/sIi1skiwKPXwPubiBnakFf3RkG1Gntt2vEvLsQYvigTxXoV7mIVLiJVtYhfTzA6kNf2IDVmkv/3KdLAliexmVnGILMTWyU7iRBbYZtzppIPW315cyY+4SSMVDJF1ZB9Wiut0TY/lIxbSH8JEgST6HXqJ/gf2TFkSded6GIdSgC/YmNT9IAeJPb+NPpzH4aoe1hHE/3VEtu9TFWtzoDiG/Uk3Y9idZvDzbwnCL7KMm7QJL/M7DlsMcxDfOm1AXQUt38g21jfOcVioPk7Lh7odbkoQcebnWxXtiBm8qQtepYMmfo0x3VTQOGg78Be+ok4ZQDbN4AAAAABJRU5ErkJggg=="/>
      </div>
      
      <form action="/search" method="get">
        <input type="text" name="query" placeholder="Search..."></input>
        <button type="submit">Search</button>
       </form>

      

       <ul>
        <li>Home</li>
        <li>services</li>
        <li>product</li>
        <li>contact</li>
       </ul>

       
       </header>


       </div>

  )
}

export default Navbar
