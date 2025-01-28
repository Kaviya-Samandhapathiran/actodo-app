function Card({color, title, subtitle}) {
    return (
        <div style={{ backgroundColor: color}} className="px-10 py-5 rounded-md text-center flex-grow">
            <h1 className="font-medium text-2xl">{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}

export default Card