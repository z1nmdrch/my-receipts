export function Button({ onClick, variant = "default", children }) {
    const styles = {
      default: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",
      outline: "border border-gray-500 text-gray-700 px-4 py-2 rounded hover:bg-gray-100",
    };
    return (
      <button onClick={onClick} className={styles[variant]}>
        {children}
      </button>
    );
  }
  