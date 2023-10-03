import background from "../assets/background-about.jpg";
import paisaje from "../assets/paisaje.jpg"
import logo from "../assets/feedoo-logo.png";

     
    const About = () => {
        return (
            <div className="relative overflow-hidden bg-brand1 pb-28 pt-20 sm:py-32" id="about">
                <img
                    src={background}
                    alt=""
                    className="absolute left-1/2 top-1/2 max-w-none translate-x-[-50%] translate-y-[-45%] w-[100%] h-[100%]"
                />
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 relative text-center px-8">
                    <h2 className="font-display text-6xl text-blue-100 tracking-tight mb-8">WHAT IS FEEDOO?</h2>
                    <div className="text-2xl text-blue-100 mb-8 px-4">
                        I began as a software engineer, specialized in databases and
                        Business Intelligence. After a long journey working for
                        several companies in various sectors, I decided to pursue an
                        MBA, where I discovered the beauty of operations.
                    </div>
                    <div className="text-2xl text-blue-100 mb-8 px-4">
                        In 2014, I was invited to be part of a new project: becoming
                        an Amazon Seller. Starting from scratch, I learned all the
                        processes of the Amazon business, from creating a new
                        product to registering a new brand.
                    </div>
                 
                  
                    <div className="relative w-[80%] mx-auto py-12">
                        <img src={paisaje} alt="landscape" className="w-full h-full" />
                        <img
                            src={logo}
                            alt="logo"
                            className="absolute w-[40%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                </div>
            </div>
        );
    };
    
    export default About;
    

