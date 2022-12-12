import './uploadImg.css'
import CloseIcon from '@mui/icons-material/Close';

export default function UploadImg({setModal}) {

	return (
		<div className='modal_upload'>
			<div className="upload_content">
				<div className="upload_header">
					<h2>Publier une image</h2>
					<button 
						className='modal_header_close'
						aria-label='Fermer la modal' 
						type='button' 
						onClick={() => setModal(false)}>
						<CloseIcon/>
					</button>
				</div>
				<form className='upload_form'>
					<div className="form_group">
						<label htmlFor="urlExtern">Lien de l'image</label>
						<input type="text" id='urlExtern' />
					</div>
					<div className="form_group">
						<label htmlFor="image">Ajouter une image</label>
            			<input type="file" id='image' style={{display: 'none'}}/>
					</div>
						<button type='submit'>Envoyer</button>
				</form>
			</div>
		</div>
	)
}
