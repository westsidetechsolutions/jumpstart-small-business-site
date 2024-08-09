export interface ButtonProps {
    /** Link for the button if the button is a link */
    link?: string;
    /**
     * Text text that appears inside of the button
     */
    text: string;
    /** Indicates the type of the button */
    type?: "link" | "submit";
    /** Indicates the aesthetic color of the button */
    aesthetic?: "primary" | "secondary";
  }
  
  const Button: React.FC<ButtonProps> = ({ link, text, aesthetic, type, }) => {
    let classes = "btn btn-lg transform transition duration-300 hover:scale-105 ";
    if (aesthetic === "secondary") {
      classes += " btn-secondary";
    } else {
      classes += " btn-primary";
    }
    if (type === "submit") {
      return (
        <button type="submit" className={classes}>
          {text}
        </button>
      )
    }
    return (
      <a href={link} className={classes}>
        {text}
      </a>
    );
  };
  
  export default Button;
  