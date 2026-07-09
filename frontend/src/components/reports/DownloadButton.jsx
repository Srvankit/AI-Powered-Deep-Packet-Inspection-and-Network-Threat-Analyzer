function DownloadButton({

    title,

    color,

    onClick

}) {

    return (

        <button

            onClick={onClick}

            className={`${color} w-full p-4 rounded-xl text-white font-semibold hover:scale-105 duration-200`}

        >

            {title}

        </button>

    );

}

export default DownloadButton;