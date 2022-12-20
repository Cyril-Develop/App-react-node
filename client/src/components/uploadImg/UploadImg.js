import './uploadImg.css'
import CloseIcon from '@mui/icons-material/Close';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios';

export default function UploadImg({setModal}) {

	const [themeSelected, setThemeSelected] = useState('')
	const [urlExtern, setUrlExtern] = useState('')
	const [urlLocal, setUrlLocal] = useState('')

	const queryClient = useQueryClient()

	const mutation = useMutation((formData) => {
        return axios.post('http://localhost:8080/api/image', formData)}
    ,{
        onSuccess: () => {
        queryClient.invalidateQueries( ['images'] )
        },
    });

	const handleSubmit = e => {
		e.preventDefault()	

		if(themeSelected === '') {
			alert('Veuillez choisir un thème')
			return
		} else if(urlLocal === '' && urlExtern === '') {
			alert('Veuillez choisir une image')
			return
		}

		const formData = new FormData()
		formData.append('categorie', themeSelected)
		formData.append('image', urlLocal !== '' ? urlLocal : urlExtern)
		mutation.mutate(formData)
	}

	return (
		<div className='modal_upload'>
			<div className="upload_content">
				<button 
					className='modal_header_close'
					aria-label='Fermer la modal' 
					type='button' 
					onClick={() => setModal(false)}>
					<CloseIcon/>
				</button>	
				<form className='upload_form'>
					<fieldset className="form_group">
						<legend>Choisissez un thème :</legend>
						<div className='form_group_radio'>
							<input 
								type="radio" 
								name='theme' 
								id='paysage' 
								style={{display: 'none'}} 
								onClick={e => setThemeSelected(e.target.id)}
							/>
							<label htmlFor="paysage">Paysage</label>
						</div>
						<div className='form_group_radio'>
							<input 
								type="radio" 
								name='theme' 
								id='portrait' 
								style={{display: 'none'}}
								onClick={e => setThemeSelected(e.target.id)}
							/>
							<label htmlFor="portrait">Portrait</label>
						</div>
						<div className='form_group_radio'>
							<input 
								type="radio" 
								name='theme' 
								id='autre' 
								style={{display: 'none'}}
								onClick={e => setThemeSelected(e.target.id)}
							/>
							<label htmlFor="autre">Autre</label>
						</div>
					</fieldset>
					<div className="form_group">
						<label htmlFor="urlExtern">URL de l'image :</label>
						<input type="text" id='urlExtern' onChange={e => setUrlExtern(e.target.value)}/>
					</div>
					<p>ou</p>
					<div className="form_group">
						<label htmlFor="image"><ImageSearchIcon/>Choisissez une image</label>
            			<input type="file" id='image' style={{display: 'none'}} onChange={e => setUrlLocal(e.target.files[0])}/>
						<button type='submit' onClick={handleSubmit}>Publier</button>
					</div>
				</form>
			</div>
		</div>
	)
}
