const variants: { [key: string]: string } = {
    'default': 'bg-hagzi_blue p-3 text-white font-semibold hover:border hover:border-hagzi_blue hover:bg-white hover:text-hagzi_blue transition-colors duration-150 ease-in-out',
    'outline': 'text-hagzi_blue font-semibold border-2 border-hagzi_blue bg-white p-3 hover:bg-hagzi_blue hover:text-white transition-color duration-75 ease-in-out',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof variants;
    className?: string;
    children: React.ReactNode;
}

const Button = ({variant = 'default', className, children, ...props}: ButtonProps) => {
    const baseClass = 'rounded-md';
    const compositeClass = `${baseClass} ${variant ? variants[variant] : ''} ${className}`

    return (
        <button className={compositeClass} {...props}>
            {children}
        </button>
    );
}

export default Button;