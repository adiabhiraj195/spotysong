import { API } from "./baseApi";

class PlaylistService {
    getUserPlaylists = (accessToken: string, userId: string) => {
        return API.get(`/users/${userId}/playlists`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
    }

    playlistById = (accessToken: string, playlistId: string) => {
        return API.get(`/playlists/${playlistId}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
    }
}

const playlistService = new PlaylistService();
export default playlistService;