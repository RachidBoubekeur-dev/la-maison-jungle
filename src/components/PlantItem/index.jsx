import CareScale from '../CareScale';
import './index.css';

const PlantItem = ({ id, cover, name, water, light }) => {

    const handleClick = (id) => {
        console.log(`Plant ${id} clicked`);
    };

    return (
        <li key={id} className='lmj-plant-item' onClick={() => handleClick(id)}>
            <img className='lmj-plant-item-cover' src={cover} alt={name} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    );
};

export default PlantItem;