export interface ButtonProps {
    /** Does this work? */
    link: string;
    /**
     * Text text that appears inside of the button
     */
    text: string;
  }
  
  const Button: React.FC<ButtonProps> = ({ link, text }) => {
    return (
      <a href={link} className="btn btn-primary btn-lg transform transition duration-300 hover:scale-105">
        {text}
      </a>
    );
  };
  
  export default Button;
  