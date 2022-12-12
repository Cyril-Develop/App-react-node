import './navbar.css'
import Logo from '../../assets/logo.svg'
import ImageIcon from '@mui/icons-material/Image';
import { Link } from 'react-router-dom'
import UploadImg from '../uploadImg/UploadImg'
import { useState } from 'react'

export default function Navbar() {

	const [modal, setModal] = useState(false)

	return (
		<header className='navbar'>
			<Link className='navbar_logo' to='/'>
				<img  src={Logo} alt="Logo - Snapshot" />
			</Link>
			<button className='navbar_btn' onClick={() => setModal(true)}><ImageIcon/> Ajouter une image</button>
			 {modal && <UploadImg setModal={setModal}/>} 
			<nav className='navbar_menu'>
				<ul className='liste'>
					<li className='liste_item'>
						<Link to='/paysage'>Paysage</Link>
					</li>
					<li className='liste_item'>
						<Link to='/portrait'>Portrait</Link>
					</li>
					<li className='liste_item'>
						<Link to='/autre'>Autre</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
