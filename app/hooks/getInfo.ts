"use server";

interface GitUser {
    login: string; // 'FaithWelton',
    id: number;
    avatar_url: string;
    gravatar_id: string;
    html_url: string;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: string;
    bio: string;
    public_repos: number;
    public_gists: number;
};

export interface Me {
    login: string; // 'FaithWelton',
    avatar_url: string;
    html_url: string;
    name: string;
    location: string;
    bio: string[];
}

const GetInfo = async () => {
    let response;
    try {
        response = await fetch("https://api.github.com/users/FaithWelton");
    } catch (error) {
        console.error(error);
        return null;
    };

    if (!response.ok) return null;

    const result: GitUser = await response.json();
    console.log(result);

    const bio: string[] = [
        "Hello! I’m Faith, a passionate UI designer and full-stack developer with a strong foundation in both design and development.",
        "I graduated from the SET (Software Engineering Technology) program at Conestoga College in 2022, where I honed my skills in web development and design.",
        "In addition to SET, I’ve also completed courses in Business Foundations and Chef Training, giving me a well-rounded perspective on the intersection of technology, business, and user experience.",
        "Throughout my journey, I’ve discovered a deep love for UI design and creating intuitive, visually engaging user interfaces.",
        "As a full-stack developer, I’m equally comfortable working on the front end and the back end, which allows me to create seamless, end-to-end solutions.",
        "I thrive on tackling complex challenges and delivering creative, functional results that prioritize user experience.",
        "I’m excited about the future of design and development and am always eager to learn, grow, and build innovative solutions.",
    ];

    const info: Me = { ...result, bio: bio };

    if (!result) return null;
    return info;
};

export { GetInfo };