export const Header = () => {
    return (
        <header>
            <nav className="w-11/12 h-20 mx-auto flex items-center justify-between">
                <p>Vicent Van Gogh</p>
                <div className="space-y-1 hover:cursor-pointer">
                    <span className="w-8 h-0.5 block rounded bg-black" />
                    <span className="w-8 h-0.5 block rounded bg-black" />
                    <span className="w-8 h-0.5 block rounded bg-black" />
                </div>
            </nav>
        </header>
    )
}
