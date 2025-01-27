import React from 'react'
import CartWidget from './CartWidget'
import '../App.css'

export default function Navbar(){

	return(

				<header>
					<div>
						<a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="header_logo"><path d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z"></path><path d="M8 6h9v2H8z"></path></svg></a>
					</div>
					<nav className="nav">
						<a href="#" className="nav_link">Libros infantiles</a>
						<a href="#" className="nav_link">Ciencia ficción</a>
						<a href="#" className="nav_link">Novelas de intriga</a>
						<a href="#" className="nav_link">Relatos de terror</a>
					</nav>
					<CartWidget />
				</header>

		)
}