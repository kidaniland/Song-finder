import React from 'react';

const SongLyrics = ({title, lyrics}) => {
    return (
        <section>
            <h2>{title}</h2>
            <blockquote style={{whiteSpace:"pre-wrap"}}>{lyrics}</blockquote>
        </section>
    )
}

export default SongLyrics
