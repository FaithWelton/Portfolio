import { ListProps, MenuItem } from "./types";

export const config = {
    title: "Portfolio",
    description: "",
    defaultUser: {
        username: "FaithWelton",
        avatar_url: "",
        html_url: "",
        name: "Faith Welton",
        location: "Canada",
        email: "faithmadore@hotmail.com",
        bio: [
            "UI Designer | Full-Stack Developer | Problem Solver",
            "Hello! I’m Faith, a passionate UI designer and full-stack developer with a strong foundation in both design and development.",
            "I graduated from the SET (Software Engineering Technology) program at Conestoga College in 2022, where I honed my skills in web development and design.",
            "In addition to SET, I’ve also completed courses in Business Foundations and Chef Training, giving me a well-rounded perspective on the intersection of technology, business, and user experience.",
            "Throughout my journey, I’ve discovered a deep love for UI design and creating intuitive, visually engaging user interfaces.",
            "As a full-stack developer, I’m equally comfortable working on the front end and the back end, which allows me to create seamless, end-to-end solutions.",
            "I thrive on tackling complex challenges and delivering creative, functional results that prioritize user experience.",
            "I’m excited about the future of design and development and am always eager to learn, grow, and build innovative solutions.",
        ],
    },
    warning: ["This website is under active construction!"],
};

export const MenuItems: MenuItem[] = [
    { label: "home", route: "/" },
    { label: "about", route: "/about" },
    { label: "projects", route: "/projects" },
];

export const socialLinks: ListProps[] = [
    { name: "github", description: "", path: "https://github.com/FaithWelton" },
    { name: "linkedin", description: "", path: "https://www.linkedin.com/in/faithwelton/" },
    { name: "email", description: "", path: "mailto:email@faithisa.dev" },
];

export const projects: ListProps[] = [
    { name: "portfolio", description: "Personal Portfolio Website", path: "https://github.com/FaithWelton/PersonalSite2.0" },
    { name: "littlestTaskBot", description: "Telegram Bot that responds to various commands", path: "https://github.com/FaithWelton/LittlestTaskBot" },
    { name: "SET2022Capstone", description: "Digital Form Creation - Capstone Project 2022", path: "https://github.com/FaithWelton/SET2022Capstone" },
];
