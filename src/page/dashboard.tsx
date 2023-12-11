import { useEffect, useContext } from 'react'
import useAuth from '../hooks/useAuth';
import userService from '../services/apiService';
import { UserInterface } from '../types/userInterface';
import usePlaylist from '../hooks/usePlaylist';
import NavigationCol from '../components/organism/navigation';
import LibraryCol from '../components/organism/library';
import { PlaylistContext } from '../context/playlist-context';
import { AuthContext } from '../context/auth-context';

const Dashboard = () => {
    const { getReturnedToken } = useAuth();
    const { getUsersPlaylists } = usePlaylist();
    // const { playListIds } = useContext(PlaylistContext);
    const {
        // accessToken,
        setAccessToken,
        setTokenExpires,
        setTokenType,
        setUserId,
    } = useContext(AuthContext);

    useEffect(() => {
        if (window.location.hash) {
            const {
                access_token,
                expires_in,
                token_type
            } = getReturnedToken(window.location.hash);

            setAccessToken(access_token);
            setTokenExpires(expires_in);
            setTokenType(token_type);

            localStorage.clear();
            localStorage.setItem('accessToken', access_token);
            localStorage.setItem('expiresIn', expires_in);
            localStorage.setItem('tokenType', token_type);
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem("accessToken") != null) {
            const userInfo = async (): Promise<UserInterface | void> => {
                const response = await userService.getUser(localStorage.getItem("accessToken") as string);
                const result = response.data;
                // console.log(result, " This is result");
                
                setUserId(result.id);

                localStorage.setItem("userId", result.id);
            }
            userInfo();
            const playlists = getUsersPlaylists(localStorage.getItem("userId") as string, localStorage.getItem("accessToken") as string);
            console.log(playlists);
        };
        
    }, []);
    return (
        <div className=''>
            <NavigationCol />
            <LibraryCol />
        </div>
    )
}

export default Dashboard;