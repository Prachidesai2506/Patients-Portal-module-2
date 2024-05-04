import react from "react"
import { useLocation,useNavigate } from "react-router-dom"

function Home()
{
    const location=useLocation()
    return(
        <div className="homwpage">
            <h1>Hello {location.state.id}  and welcome to the patients deskboard</h1>
        </div>
    )
}

export default Home