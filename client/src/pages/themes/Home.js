import '../../components/gallery/gallery.css'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Gallery from '../../components/gallery/Gallery'

export default function Home() {

    
    const { isLoading, error, data } = useQuery(['images'], () => 
        axios.get('http://localhost:8080/api/images')
            .then(res => res.data)     
    )

  return (
    <main className='home'>
        <div className="home_content">
            {error ? 
            'Erreur innatendue' : 
            isLoading ? 
            'Chargement' :  
            <Gallery data={data}/>}
        </div>
    </main>
  )
}
