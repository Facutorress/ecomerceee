import styles from "./FlipCard.module.css";

// eslint-disable-next-line react/prop-types
const FlipCard = ({ link, img, backHeader, backDescription }) => {
    return (
        <a
            className={`${styles["flip-card"]} rounded-full w-48 h-48 border-secondaryBorder`}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div
                className={`${styles["flip-card-inner"]} w-full h-full rounded-full relative text-center shadow-md`}
            >
                <div
                    className={`${styles["flip-card-front"]} absolute w-full h-full rounded-full `}
                >
                    <img
                        loading="lazy"
                        src={img}
                        alt={backHeader}
                        className="w-full h-full"
                    />
                </div>
                <div
                    className={`${styles["flip-card-back"]} flex flex-col items-center justify-center absolute w-full h-full rounded-full`}
                >
                    <h1 className="text-xl font-semibold">{backHeader}</h1>
                    <p className="font-medium">+ {backDescription} products</p>
                </div>
            </div>
        </a>
    );
};

export default FlipCard;
