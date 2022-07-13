import Logo from "./Logo";
const Footer = () => {
    return (
        <footer className="px-4 sm:px-6 py-6 mt-24 m-10 border-t flex flex-col justify-center items-center">
            <Logo />
            <p className="text-center text-sm text-gray-500 mt-5">© {new Date().getFullYear()} All rights reserved.</p>
        </footer>
    );
};

export default Footer;