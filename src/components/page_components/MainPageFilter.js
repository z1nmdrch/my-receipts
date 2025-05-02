export default function MainPageFilter({isActive, title, onClick}) {
    return (
        <div onClick={onClick} className={isActive ? "main-page-filter-row-item active-filter" : "main-page-filter-row-item"}>
            {title}
        </div>
    )
}