import React, {useState}from 'react';
import './SongForm.css';

const initialForm = {
    artist: "",
    song:""
}

const SongForm = ({handleSearch}) => {
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit =(e) => {
        e.preventDefault();

        if(!form.artist || !form.song){
            alert("Datos incompletos");
            return
        }

        handleSearch(form);

        setForm(initialForm);
    }

    return (
        <div className="div-form">
            <form onSubmit={handleSubmit} className="form">
                <label for="artist" className="form__label">Nombre del intérprete</label>
                <input 
                    className="form__input"
                    type="text" 
                    name="artist" 
                    id="artist"
                    autoComplete="off"
                    placeholder=" "
                    onChange={handleChange}
                    value={form.artist} 
                />
                <label for="song" className="form__label">Nombre de la canción</label>
                <input 
                    className="form__input"
                    type="text" 
                    name="song" 
                    id="song"
                    autoComplete="off"
                    placeholder=" "
                    onChange={handleChange} 
                    value={form.song} 
                />
                <input type="submit" value="buscar"/>
            </form>
        </div>
    )
}

export default SongForm
