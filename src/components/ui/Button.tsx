import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    onClick?: () => void;
}

export default function Button({
    children,
    href,
    variant = 'primary',
    className = '',
    onClick
}: ButtonProps) {
    const baseStyles = "inline-block px-6 py-3 rounded-md font-semibold text-center cursor-pointer transition-all duration-200 border-none font-sans";

    const variants = {
        primary: "bg-primary text-surface hover:bg-[#1e4220] hover:-translate-y-0.5",
        secondary: "bg-secondary text-text hover:bg-[#86a856] hover:-translate-y-0.5",
        outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-surface"
    };

    const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={buttonClass}>
                {children}
            </Link>
        );
    }

    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
}
