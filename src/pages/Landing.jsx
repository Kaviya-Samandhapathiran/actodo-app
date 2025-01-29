import Header from "../components/Header"
import Card from "../components/Card"
import Todocontainer from "../components/Todocontainer"
import { useLocation } from "react-router-dom"

function Landing() {

    const userdetail = useLocation()
    const data = [
        {
          color: "#8272DA",
          title: "23",
          subtitle: "Chennai"
        },
        {
          color: "#FD6663",
          title: "December",
          subtitle: "14:02:38"
        },
        {
          color: "#FCA201",
          title: "Built Using",
          subtitle: "React"
        }]

    return (
        <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 rounded-md">
          <Header name={userdetail.state.user} />
          <div className="flex justify-between flex-wrap gap-5 my-5">
            {
              data.map((datas, index) => (
                <Card key={index} color={datas.color} title={datas.title} subtitle={datas.subtitle} />
              )
              )
            }
          </div>
          <Todocontainer/>
        </div>
      </div>
    )
}

export default Landing