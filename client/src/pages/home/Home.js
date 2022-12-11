import './home.css'
import Form from '../../components/form/Form'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export default function Home() {

    const { isLoading, error, data } = useQuery(['images'], () => 
        axios.get('http://localhost:8080/api/images')
        .then(res => res.data)     
    )

  return (
    <div className='home'>
        <Form />
        <div className="home_content">
            {error ? 'Erreur innatendue' : isLoading ? 'Chargement' :  data.map(image => (
                <div className="home_image" key={image.id}>
                    <img src={image.imageUrl}  alt="Illustatrion" />
                </div>
            ))}
        </div>
    </div>
  )
}
