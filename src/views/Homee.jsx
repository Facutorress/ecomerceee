import Card from "../components/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import woman1 from "../assets/woman-1.jpg";
import man1 from "../assets/man-1.jpg";
import man2 from "../assets/man-2.jpg";
import woman2 from "../assets/woman-2.jpg";
import man3 from "../assets/man-3.jpg";
import woman3 from "../assets/woman-3.jpg";
import woman4 from "../assets/woman-4.jpg";


const responsive = {
    xl: {
        breakpoint: { max: 1920, min: 1024 },
        items: 3,
    },
    lg: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
    },
    md: {
        breakpoint: { max: 768, min: 640 },
        items: 1,
    },
    sm: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
};

const clients = [
    {
        title: "Lonnie (Washington)",
        review: "Excellent-Fast service",
        photo: woman1,
    },
    {
        title: "Ariel (California)",
        review: "Great material workmanship and color",
        photo: man1,
    },
    {
        title: "Carl (Los Angeles)",
        review: "Well-made tool at good price. Recommended",
        photo: man2,
    },
    {
        title: "Amanda (Colorado)",
        review: "My daughter absolutely loved it. Thank you",
        photo: woman2,
    },
    {
        title: "Alex (New York)",
        review: "Super quick deliver. Probably going to order another",
        photo: man3,
    },
    {
        title: "Imke (Germany)",
        review: "You made me happy :-)",
        photo: woman3,
    },
    {
        title: "Mari (Missouri)",
        review: "These came quickly and looked even nicer than the picture",
        photo: woman4,
    },
 
];

const Home = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32">
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
                Feedoo LLC{" "}
                <span className="relative whitespace-nowrap text-brand1">
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 418 42"
                        className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                        preserveAspectRatio="none"
                    >
                        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                    </svg>
                    <span className="relative">e commerce</span>
                </span>{" "}
                on Amazon
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
                Your Trusted Partner for E-commerce Success on Amazon
            </p>
            <div className="mt-36 lg:mt-44">
                <p className="font-display text-base text-slate-900 mb-4">
                    Hundreds of clients trust us
                </p>

                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    infinite={true}
                >
                    {clients.map((client, index) => (
                        <Card
                            key={index}
                            title={client.title}
                            review={client.review}
                            photo={client.photo}
                        />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Home;
