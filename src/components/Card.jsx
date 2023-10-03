const Card = ({ title, review, photo }) => {
    return (
        <div className="rounded-md w-96 h-24 overflow-hidden border border-secondaryBorder bg-secondary p-4 flex">
            <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                    src={photo}
                    alt="feedoo client review"
                />
            </div>

            <div className="flex-1 ml-4">
                <h5 className="text-lg font-semibold">{title}</h5>
                <p className="mt-2 text-sm">{review}</p>
            </div>
        </div>
    );
};

export default Card;
