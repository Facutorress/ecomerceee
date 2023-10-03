import { AiOutlineLink } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
                <div className="flex gap-x-2">
                    <p className="mt-6 text-sm text-slate-500 sm:mt-0">
                        Developed by{" "}
                        <a
                            href="https://devdesigns.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            DevDesign
                        </a>
                    </p>
                    <a
                        href="https://devdesigns.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden lg:block"
                    >
                        <AiOutlineLink
                            size="1.2rem"
                            className=" fill-slate-500 group-hover:fill-slate-700"
                        />
                    </a>
                </div>
                <p className="mt-6 text-sm text-slate-500 sm:mt-0 items-center">
                    2023 Feedoo LLC. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
