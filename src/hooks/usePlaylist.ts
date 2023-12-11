import playlistService from "../services/playlistSerivce";
import { PlaylistContext } from "../context/playlist-context";
import { useContext } from "react";
import { UsersPlaylistsInterface } from "../types/playlistsInterface";

const usePlaylist = () => {
    const { playListIds, setPlayListIds } = useContext(PlaylistContext);

    const getUsersPlaylists = async (userId: string, accessToken: string) => {
        const playlistIds: Array<String> = [];
        const response = await playlistService.getUserPlaylists(accessToken, userId);
        const result: UsersPlaylistsInterface  = response.data;
        console.log(result + " Playlists List");
        result.items.forEach((element: any) => {
            playlistIds.push(element.id);
        });
        setPlayListIds(playlistIds);
        // console.log(playListIds + "This is playlist Ids");
        return result;
    }

    const getPlaylistById = async (accessToken: string, playlistId: string) => {
        const response = await playlistService.playlistById(accessToken, playlistId);
        console.log(response.data);
        const result = response.data;

    }

    return {
        getUsersPlaylists,
        getPlaylistById,
    }
}

export default usePlaylist;