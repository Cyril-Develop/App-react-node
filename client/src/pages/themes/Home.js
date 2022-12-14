import '../../components/gallery/gallery.css'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Gallery from '../../components/gallery/Gallery'

export default function Home() {

    // const { isLoading, error, data } = useQuery(['images'], () => 
    //     axios.get('http://localhost:8080/api/images')
    //     .then(res => res.data)     
    // )

    const data = [
        {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1670995985756-0707f0d3b006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
        {
            id: 2,
            imageUrl: 'https://images.unsplash.com/photo-1670968981833-e028025124a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=691&q=80'
        },
        {
            id: 3,
            imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
        },
        {
            id: 4,
            imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
        },
        {
            id: 5,
            imageUrl: 'https://images.unsplash.com/photo-1531121597993-078d1eba89ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
        {
            id: 6,
            imageUrl: 'https://images.unsplash.com/photo-1532953802613-6f66f1f4cc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
        {
            id: 7,
            imageUrl: 'https://images.unsplash.com/photo-1517792844039-e52afb564132?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=682&q=80'
        }
    ]

  return (
    <main className='home'>
        <div className="home_content">
            {/* {error ? 'Erreur innatendue' : isLoading ? 'Chargement' :  data.map(image => (
                <div className="home_image" key={image.id}>
                    <img src={image.imageUrl}  alt="Illustatrion" />
                </div>
            ))} */}
            <Gallery data={data}/>
        </div>
    </main>
  )
}
