const CareScale = ({ careType, scaleValue }) => {

    const range = [1, 2, 3];
    const scaleType = careType === 'water' ? '💧' : '☀️';

    return (
        <div>
            {range.map((rangeElem) => scaleValue >= rangeElem && <span key={rangeElem.toString()}>{scaleType}</span>)}
        </div>
    );
};

export default CareScale;