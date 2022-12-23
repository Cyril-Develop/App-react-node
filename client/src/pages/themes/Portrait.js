import '../../components/gallery/gallery.css'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Gallery from '../../components/gallery/Gallery'

export default function Portrait() {

	const { isLoading, error, data } = useQuery(['themePortrait'], () => 
        axios.get('http://localhost:8080/api/images/portrait')
        .then(res => res.data)     
    )

	return (
		<main className='theme'>
			<div className="theme_content">
                {error ? 
                'Erreur innatendue' : 
                isLoading ? 
                'Chargement' :  
                <Gallery data={data}/>}
			</div>
		</main>
	)
}
