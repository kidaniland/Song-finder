import React from 'react';
import './SongArtist.css';

const SongArtist = ({artist}) => {
    return (
        <section>
            <h3>{artist.strArtist}</h3>
            <img src={artist.strArtistThumb} alt={artist.strArtist}/>
            <hr/>
            <p>{artist.intBornYear} - {artist.intDiedYear || "Presente"}</p>
            <p>{artist.strCountry}</p>
            <p>{artist.strGenre} - {artist.strStyle}</p>
            <a href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">
                <i class="fas fa-link"></i> Sitio web oficial
            </a>
            <hr/>
            <p className="p-bio">{artist.strBiographyEN}</p>
        </section>
    )
}

export default SongArtist
