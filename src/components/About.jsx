import about_image from '../project_images/about.jpg'

const About = () => {
    return (
        <div>
            <img src={about_image} alt="about image" />
            <h2 className = "mb-3 mt-3 bg-warning p-2">About <span className=" text-dark heading "><span className = "font-weight-light">data's</span><span className = "italic font-weight-bold">Idea</span>
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-lightning-fill light text-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
            </svg></span>
            </h2>
            <div className="container">
            <div>
                <p>
                    Data's idea has been made to be a community of software developers getting together to help one another out.
                    The software industry relies on collaboration and networked learning.
                    We are to provide a place for that to happen
                </p>
                <p>
                    In future, we are hoping to make our web-app and native-app(still in production) open source, meaning you can inspect every little detail of the code, or chip in yourself! 
                    We are working to make our platform available for anyone to stand up similar communities in any niche or passion 
                </p>
                <p>
                    We beleive in adding value to the ecosystem and hope you ppoke around and like what you see!

                </p>
            </div>
            </div>
        </div>
    )
}

export default About
