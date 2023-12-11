import useAuth from "../hooks/useAuth";

const LoginPage = () => {
   const { login } = useAuth();

    return (
        <div>
            <h1>click to login</h1>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default LoginPage;