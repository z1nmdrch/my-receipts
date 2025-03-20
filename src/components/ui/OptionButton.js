export default function OptionButton(
    {
        isActive,
        onClick,
        button
    } ) {

    return (
        <button type="button" onClick={onClick} className={isActive === true ? "option-button active-button" : "option-button"}>
            {button}
        </button>
    )
};