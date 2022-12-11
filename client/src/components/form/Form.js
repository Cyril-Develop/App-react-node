import './form.css'

export default function Form() {
  return (
    <form className='form'>
        <div className="form_group">
            <label htmlFor="image">Ajouter une image</label>
            <input type="file" id='image' style={{display: 'none'}}/>
        </div>
    </form>
  )
}
