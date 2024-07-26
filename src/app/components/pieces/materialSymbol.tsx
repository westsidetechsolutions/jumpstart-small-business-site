type MaterialSymbolProps = {
    classes?: string,
    symbol: string,
    size?: number,
};

const MaterialSymbol = ({ classes, symbol, size }: MaterialSymbolProps) => {
    return (
        <span 
        className={`material-symbols-rounded ${classes}`} 
        style={size ? { fontSize: size } : {}}
            >
        {symbol}
    </span>
    )
}

export default MaterialSymbol;