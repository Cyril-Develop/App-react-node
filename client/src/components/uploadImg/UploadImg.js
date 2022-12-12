import './uploadImg.css'
import CloseIcon from '@mui/icons-material/Close';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';

export default function UploadImg({setModal}) {

	return (
		<div className='modal_upload'>
			<div className="upload_content">
				<div className="upload_header">
					<button 
						className='modal_header_close'
						aria-label='Fermer la modal' 
						type='button' 
						onClick={() => setModal(false)}>
						<CloseIcon/>
					</button>
				</div>
				<form className='upload_form'>
					<h3>Choisissez un thème :</h3>
					<div className="form_group">
						<div className='form_group_radio'>
							<input type="radio" name='theme' id='paysage' style={{display: 'none'}}/>
							<label htmlFor="paysage">Paysage</label>
						</div>
						<div className='form_group_radio'>
							<input type="radio" name='theme' id='portrait' style={{display: 'none'}}/>
							<label htmlFor="portrait">Portrait</label>
						</div>
						<div className='form_group_radio'>
							<input type="radio" name='theme' id='autre' style={{display: 'none'}}/>
							<label htmlFor="autre">Autre</label>
						</div>
					</div>
					<div className="form_group">
						<label htmlFor="urlExtern">URL de l'image :</label>
						<input type="text" id='urlExtern' />
					</div>
					<p>ou</p>
					<div className="form_group">
						<label htmlFor="image"><ImageSearchIcon/>Choisissez une image</label>
            			<input type="file" id='image' style={{display: 'none'}}/>
						<button type='submit'>Publier</button>
					</div>
				</form>
			</div>
		</div>
	)
}
