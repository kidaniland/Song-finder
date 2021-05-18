import React, {useState, useEffect}from 'react';
import {helpHttp} from "../helpers/helpHttp";
import Loader from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';

const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = (data) => {
        //console.log("----->",data);
        setSearch(data);
    }

    useEffect(() => {
        if(search === null) return; //para que no renderice innecesariamente.

        const fetchData = async () => {
            const {artist, song}= search;
            let artistUrl =`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
            let songUrl =`https://api.lyrics.ovh/v1/${artist}/${song}`;

            console.log("--->", artistUrl, songUrl);

            setLoading(true);

            //guardamos as respuesta a cada una de las peticiones
            const [artistRes, songRes] = await Promise.all([
                helpHttp().get(artistUrl), 
                helpHttp().get(songUrl)
            ]);

            console.log("RES-->", artistRes, songRes);
            setBio(artistRes);
            setLyric(songRes);
            setLoading(false);
        };

        fetchData();
    }, [search]) //se ejecutará cuando el valor de search cambie

    return (
        <div className="song-search">
            <h1>Buscador de música</h1>
            {loading && <Loader/>}
            <SongForm handleSearch={handleSearch}/>
            {search && !loading && (
               <SongDetails search={search} lyric={lyric} bio={bio}/> 
            )}
        </div>
    )
}

export default SongSearch

