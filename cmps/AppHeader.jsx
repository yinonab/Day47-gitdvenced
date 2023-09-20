const { NavLink } = ReactRouterDOM

export function AppHeader() {

    return (
        <header className="app-header">
            <h1>Contacts App</h1>
            <nav>
                <NavLink to="/">Home</NavLink> |
                <NavLink to="/contact">Contacts</NavLink> |
                {/* <NavLink to="/about">About</NavLink> | */}
            </nav>

        </header>
    )
}