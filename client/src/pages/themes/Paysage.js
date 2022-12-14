import '../../components/gallery/gallery.css'
import Gallery from '../../components/gallery/Gallery'

export default function Paysage() {

	const data = [
        {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1531121597993-078d1eba89ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
        {
            id: 2,
            imageUrl: 'https://images.unsplash.com/photo-1532953802613-6f66f1f4cc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
		{
            id: 3,
            imageUrl: 'https://images.unsplash.com/photo-1517792844039-e52afb564132?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=682&q=80'
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
