import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('../home', { replace:true })
    }

    return (
        <>
            <h2>This is About page</h2>
            <button onClick={handleClick}>Redirect to Home</button>
        </>
    )

}

export default About;