import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props) {

    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername, setEusername] = useState()
    const [epaswword, setEpassword] = useState()


    function handleUNInput(evt) {
        setEusername(evt.target.value)

    }

    function handlePWInput(evt) {
        setEpassword(evt.target.value)
    }

    function addUser() {
        setusers([...users, { username: eusername, password: epaswword }])
        navigate("/")
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi!👋</h1>
                <p>SignUp here :)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="bg-transparent border w-52 rounded-md p-1" placeholder="Username" onChange={handleUNInput}></input>
                    <input type="text" className="bg-transparent border w-52 rounded-md p-1" placeholder="Password" onChange={handlePWInput}></input>
                    <input type="text" className="bg-transparent border w-52 rounded-md p-1" placeholder="Confirm password"></input>

                    <button className="bg-[#F9A306] w-24 p-1 rounded-md" onClick={addUser}>Sign Up</button>
                    <p>Already have an account? <Link to={"/"} className="underline text-violet-900">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup