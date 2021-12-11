export default function HelloMessage(props) {

    return (
        <>
        <div className="flex justify-evenly p-3 bg-white rounded-lg">
            <div>
                <h1 className="font-semibold bg-white">{title}</h1>
                <p>{content}</p>
            </div>
            <div className="flex content-center">
                <img src={src} className="max-h-24"/>
            </div>
        </div>
        </>
    );
}
