import { Hash } from 'react-router-dom';

const CLIENT_ID = "b6bfb308ecc84dc9b83cf5583883e1b0";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL = "http://localhost:3000/dashboard";
const SCOPE = ["user-read-currently-playing", "user-read-playback-state", "user-read-private", "user-read-email"];
const SCOPE_URL_PARAMS = SCOPE.join("%20");

const useAuth = () => {
    
    const login = () => {
        window.location.href = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPE_URL_PARAMS}&response_type=token&show_dialog=true`;
    };

    const getReturnedToken = (hash: Hash) => {
        const stringAfterHashing = hash.substring(1);
        const paramsInUrl = stringAfterHashing.split("&");
        const paramsSplitUp = paramsInUrl.reduce((accumulater: any, currentValue: string) => {
            // console.log(currentValue);
            const [key, value] = currentValue.split("=");
            accumulater[key] = value;

            return accumulater;
        }, {});

        return paramsSplitUp;
    };

    return {
        getReturnedToken,
        login,
    }
}

export default useAuth;