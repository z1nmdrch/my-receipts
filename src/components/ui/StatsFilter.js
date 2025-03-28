export default function StatsFilter({ filter, isActive, onClick }) {
    return (
        <button
            className={`stats-filter-button ${isActive ? "active" : ""}`}
            onClick={onClick}
        >
            {filter}
        </button>
    );
}
