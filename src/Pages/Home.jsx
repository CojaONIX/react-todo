import Navigation from "../Templates/Snippets/Navigation";


const Home = () => {

    return (
        <>
            <Navigation />
            <div className="container">
                <h1>Home</h1>
                <hr/>
                <p>Stranice Home i About ne zahtevaju Login</p>
                <p>Stranica ToDoList zahteva i redirektuje na Login ako korisnik nije logovan.</p>
            </div>
        </>
    )
}

export default Home;