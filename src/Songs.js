import { useSelector, useDispatch  } from "react-redux";
import { useParams } from "react-router";
import { fetchTracks } from "./actions";
import { useEffect } from "react";
import './spinner.css';

export function Songs() {
    const songs = useSelector(state => state.songs);
    const params = useParams();
    const isProgressing = useSelector(state => state.isProgressing);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTracks(params.artist, params.album));
    }, [dispatch]);

    return (
        <div className="Songs">
            <h1>Songs from {params.album}</h1>
            {isProgressing && <div className="spinner" />}
            <ul>
                {songs.map(song => <li>{song}</li>)}
            </ul>
        </div>
    );
}