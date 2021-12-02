import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArtists } from "./actions";
import './spinner.css';


export function Artists() {
    const artists = useSelector(state => state.artists);
    const isProgressing = useSelector(state => state.isProgressing);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchArtists());
    }, [dispatch]);

    return (
        <div className="Artists">
            <h1>ARTISTS</h1>
            {isProgressing && <div className="spinner" />}
            <ul>
                {artists.map(artist => <li><a href={`/${artist}`}>{artist}</a></li>)}
            </ul>
        </div>
    );
}