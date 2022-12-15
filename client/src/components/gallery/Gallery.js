import './gallery.css'

export default function Gallery({ data }) {

	return (
		<main className='gallery'>
			<div className="gallery_content">
				{data.map(image => (	
					<img src={image.imageUrl} key={image.id} alt="Illustatrion" />
				))}
			</div>
		</main>
	)
}
