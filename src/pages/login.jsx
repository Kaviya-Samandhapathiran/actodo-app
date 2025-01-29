import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {

    const navigate = useNavigate()
    const [eusername, setEusername] = useState()
    const [epaswword, setEpassword] = useState()
    const [ruser, setRuser] = useState(true)

    const users = props.users



    function handleUNInput(evt) {
        setEusername(evt.target.value)

    }

    function handlePWInput(evt) {
        setEpassword(evt.target.value)
    }

    function checkuser() {
        var userfound = false
        users.forEach(function (item) {
            if (item.username === eusername && item.password === epaswword) {
                userfound = true
                navigate("/landing", { state: { user: eusername } })
            }

        })

        if (userfound === false) {
            setRuser(false)
        }
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi!👋</h1>
                {ruser ? <p>I help you manage your activities after you login :)</p> : <p className="text-red-500">Please Sign up before login</p>}

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="bg-transparent border w-52 rounded-md p-1" placeholder="Username" onChange={handleUNInput}></input>
                    <input type="text" className="bg-transparent border w-52 rounded-md p-1" placeholder="Password" onChange={handlePWInput}></input>

                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkuser}>Login</button>
                    <p>Don't have an account ? <Link to={"/signup"} className="underline text-violet-900">Signup</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login

