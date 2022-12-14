import './gallery.css'
import { useState } from 'react'

export default function Gallery({ data }) {

	const [showImage, setShowImage] = useState()





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
