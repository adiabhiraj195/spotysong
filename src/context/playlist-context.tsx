import { createContext, useState, Dispatch, SetStateAction } from "react";

interface PlaylistContextInterface {
    playListIds: Array<String> | null;
    setPlayListIds: Dispatch<SetStateAction<String[] | null>>;
};

const defaultValue = {
    playListIds: null,
    setPlayListIds: () => { },

};

export const PlaylistContext = createContext<PlaylistContextInterface>(defaultValue);

interface PlaylistProviderInterface {
    children: JSX.Element;
}

export const PlaylistProvider = ({ children }: PlaylistProviderInterface) => {
    const [playListIds, setPlayListIds] = useState<Array<String> | null>(defaultValue.playListIds);
    console.log(playListIds)
    return (
        <PlaylistContext.Provider
            value={{
                playListIds,
                setPlayListIds,
            }}
        >
            {children}
        </PlaylistContext.Provider>
    )
}