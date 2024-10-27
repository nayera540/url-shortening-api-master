import NavBar from "../NavBar Section/NavBar"

function Main() {
    return (
        <div className="main-section bg-white h-[90vh]">
            <NavBar />
            <div className="container mx-auto">
                <div className="column flex justify-center items-center mt-10">
                    <div className="main-content">
                        <h1 className="main--title">
                            More than just shorter links
                        </h1>
                        <p className="main-description">
                            Build your brand’s recognition and get detailed insights
                            on how your links are performing.
                        </p>
                        <a href="" className="btn btn-get-started">
                            Get Started
                        </a>
                    </div>
                    <div className="main-img">
                        <img src="/images/illustration-working.svg" alt="working illustration" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
