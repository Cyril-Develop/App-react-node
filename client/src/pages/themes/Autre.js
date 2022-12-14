import '../../components/gallery/gallery.css'
import Gallery from '../../components/gallery/Gallery'

export default function Autre() {

	const data = [
        {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1670995985756-0707f0d3b006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
        {
            id: 2,
            imageUrl: 'https://images.unsplash.com/photo-1670968981833-e028025124a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=691&q=80'
        }
    ]

	return (
		<main className='theme'>
			<div className="theme_content">
				<Gallery data={data} />
			</div>
		</main>
	)
}
