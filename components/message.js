export default function Message(props) {
    var title = props.title.slice(0, 25)+" ...";
    var src = props.src;
    var content = props.content.slice(0, 60)+" ...";

    return (
        <>
        <div className="flex justify-evenly p-5 bg-white rounded-sm ">
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
