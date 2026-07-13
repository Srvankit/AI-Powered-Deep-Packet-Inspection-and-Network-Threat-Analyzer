function SectionTitle({

    title,

    subtitle

}) {

    return (

        <div className="mb-8">

            <h1

                className="
                text-4xl
                font-bold
                tracking-tight
                text-white
                "

            >

                {title}

            </h1>

            <p

                className="
                mt-2
                text-slate-400
                text-lg
                "

            >

                {subtitle}

            </p>

        </div>

    );

}

export default SectionTitle;