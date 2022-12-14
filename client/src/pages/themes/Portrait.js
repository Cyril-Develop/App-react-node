import '../../components/gallery/gallery.css'
import Gallery from '../../components/gallery/Gallery'

export default function Portrait() {

	const data = [
        {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
        },
        {
            id: 2,
            imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
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
