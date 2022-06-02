import BackgroundVideo from './BackgroundList/BackgroundList';
import './background.scss';
import MusicPlay from '../musicplay/MusicPlay';
import ExteriorDay from '../../assets/Video/Exterior+-+Day.mp4';
import ExteriorNight from '../../assets/Video/Exterior+-+Night.mp4';
import ExteriorRainyDay from '../../assets/Video/Exterior+-+Rainy+Day.mp4';
import ExteriorRainyNight from '../../assets/Video/Exterior+-+Rainy+Night.mp4';
import InteriorDay from '../../assets/Video/Interior+-+Sunny+Day.mp4';
import InteriorNight from '../../assets/Video/Interior+-+Night.mp4';
import InteriorRainyDay from '../../assets/Video/Interior+-+Rainy+Day.mp4';
import InteriorRainyNight from '../../assets/Video/Interior+-+Rainy+Night.mp4';

const videoList = [
    {
        id: 1,
        name: 'ExteriorDay',
        url: ExteriorDay,
    },
    {
        id: 2,
        name: 'ExteriorNight',
        url: ExteriorNight,
    },
    {
        id: 3,
        name: 'ExteriorRainyDay',
        url: ExteriorRainyDay,
    },
    {
        id: 4,
        name: 'ExteriorRainyNight',
        url: ExteriorRainyNight,
    },
    {
        id: 5,
        name: 'InteriorDay',
        url: InteriorDay,
    },
    {
        id: 6,
        name: 'InteriorNight',
        url: InteriorNight,
    },
    {
        id: 7,
        name: 'InteriorRainyDay',
        url: InteriorRainyDay,
    },
    {
        id: 8,
        name: 'InteriorRainyNight',
        url: InteriorRainyNight,
    },
];

function Background() {
    return (
        <div>
            <BackgroundVideo videoList={videoList} />
            <MusicPlay />
        </div>
    );
}
export default Background;
