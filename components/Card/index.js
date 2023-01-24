export default function Card({
    degree = "none",
    colour = "purple",
    font = 0,
    image = 'icon/person.png'
}) {
    return (
        <div style={{ backgroundColor: colour, fontSize: font }}>
            {
                colour === "rgb(255 255 255 / 0%)" ? <img src={'icon/person.png'} width="50" /> :
                colour === "rgb(255 255 255 / 0%)" ? <img src={'icon/personThree.png'} width="50" /> :
                                    <img src={image} width="50" />
            }
            {degree}
        </div>
    )
}