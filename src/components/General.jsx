// Button component
const Button = ({ children, onClick, className }) => {
    return (
      <div className={`bg-blueviolet w-20 h-10 flex items-center justify-center rounded-buttonradius ${className}`}>
        <button onClick={onClick}>{children}</button>
      </div>
    );
  };

export { Button };
  