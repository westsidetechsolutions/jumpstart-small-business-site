const Dropdown = () => {
    return (
        <details className="collapse bg-primary text-primary-content">
            <summary className="collapse-title text-xl font-medium">Click to open/close</summary>
            <div className="collapse-content">
                <p>content</p>
            </div>
        </details>
    )
}

export default Dropdown;