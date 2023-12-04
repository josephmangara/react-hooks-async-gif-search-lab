
export default function GifList({gifList}){

return (
    <div>
        <ul className="list-unstyled">
            {gifList.map((gifList, index) => (
                <li key={index}>
                    <img src={gifList.images.original.url} alt="dolphin gifs" />
                </li>
            ))}
        </ul>
    </div>
)
}