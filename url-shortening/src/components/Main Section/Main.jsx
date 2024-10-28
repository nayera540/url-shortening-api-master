import NavBar from "../NavBar Section/NavBar"

function Main() {
    return (
        <div className="main-section bg-white h-screen flex flex-col">
            <NavBar />
            <div className="container mx-auto flex-grow flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-40">
                    <div className="main-content">
                        <h1 className="main--title text-[5rem] font-bold text-Very-Dark-Blue leading-[5.7rem]">
                            More than just shorter links
                        </h1>
                        <p className="main-description text-Dark-Gray text-[1.37rem] font-medium mb-[2rem]">
                            Build your brand’s recognition and get detailed insights
                            on how your links are performing.
                        </p>
                        <a href="" className="btn btn-get-started bg-Cyan text-white font-bold py-3 text-[1.25rem] hover:bg-Cyan-hover duration-300 rounded-[7rem] px-9 text-center">
                            Get Started
                        </a>
                    </div>
                    <div className="main-img w-full lg:w-[110%]">
                        <img src="/images/illustration-working.svg" alt="working illustration" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
