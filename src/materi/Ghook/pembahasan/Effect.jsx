import { useEffect, useState } from "react"

const Effect = () => {
    
    let [text, setText] = useState('');
    let [user, setUser] = useState({});
    let [secs, setSecs] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json())
        .then(res => setUser(res))
    }, [])

    useEffect(() =>{   
        localStorage.setItem('text', text);
    })

    useEffect(() => {
        let intervalId = setInterval(() => {
            setSecs(s => s + 1)
        }, 1000);

        return () => {
            clearInterval(intervalId);  
        }
    }, [])

    return (
        <div>
            <textarea cols="30" rows="10" onChange={ (e) => setText(e.target.value) } />
            <p>{user.name}</p>
            <div>Time: {Math.floor(secs / 60)} Minute {secs % 60} Seconds </div>
        </div>
    )
}

export default Effect;