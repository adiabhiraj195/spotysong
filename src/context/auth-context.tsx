import { createContext, useState, Dispatch, SetStateAction } from "react";

interface AuthContextInterface {
    accessToken: String | null;
    setAccessToken: Dispatch<SetStateAction<String | null>>;
    tokenType: String | null;
    setTokenType: Dispatch<SetStateAction<String | null>>;
    tokenExpires: Number | null;
    setTokenExpires: Dispatch<SetStateAction<Number | null>>;
    userId: String | null;
    setUserId: Dispatch<SetStateAction<String | null>>
};

const defaultValue = {
    accessToken: null,
    setAccessToken: () => { },
    tokenExpires: null,
    setTokenExpires: () => { },
    tokenType: null,
    setTokenType: () => { },
    userId: null,
    setUserId: () => { },
};

export const AuthContext = createContext<AuthContextInterface>(defaultValue);

interface AuthProviderInterface {
    children: JSX.Element;
}

export const AuthProvider = ({ children }: AuthProviderInterface) => {
    const [accessToken, setAccessToken] = useState<String | null>(defaultValue.accessToken);
    const [tokenType, setTokenType] = useState<String | null>(defaultValue.tokenType);
    const [tokenExpires, setTokenExpires] = useState<Number | null>(defaultValue.tokenExpires);
    const [userId, setUserId] = useState<String | null>(defaultValue.userId);
    // console.log(accessToken + " accessToken");

    return (
        <AuthContext.Provider
            value={{
                accessToken,
                setAccessToken,
                tokenType,
                setTokenType,
                tokenExpires,
                setTokenExpires,
                userId,
                setUserId,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}