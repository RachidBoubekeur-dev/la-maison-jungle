const CareScale = ({ careType, scaleValue }) => {

    const range = [1, 2, 3];
    const quantityLabels = {
        1: 'peu',
        2: 'modérement',
        3: 'beaucoup'
    };
    const scaleType = careType === 'water' ? '💧' : '☀️';

    const InfoPlant = () => {
        alert(`Cette plante requiert ${quantityLabels[scaleValue]} ${careType === 'water' ? 'd\'eau' : 'de lumière'} ${scaleType}`);
    };

    return (
        <div onClick={() => InfoPlant()}>
            {range.map((rangeElem) => scaleValue >= rangeElem && <span key={rangeElem.toString()}>{scaleType}</span>)}
        </div>
    );
};

export default CareScale;