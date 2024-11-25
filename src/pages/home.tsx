import useAuth from '@/hooks/useAuth'

function HomePage() {

    const { user, logout } = useAuth();

    return (
        <div>
            <h1>Home</h1>
            <h1>user data : </h1>
            <div>
                {user ? <div>{user.username} {user.email} {user.internet_identity.toText()}</div> : <div>NULL USER DATA</div>}
            </div>
            <button onClick={logout}> Logout </button>
        </div>
    )
}

export default HomePage