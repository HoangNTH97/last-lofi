import BackgroundVideo from './BackgroundList/BackgroundList';
import './background.scss';
import MusicPlay from '../musicplay/MusicPlay';
import ExteriorDay from '../../assets/Video/ExteriorDay.mp4';
import ExteriorNight from '../../assets/Video/ExteriorNight.mp4';
import ExteriorRainyDay from '../../assets/Video/ExteriorRainyDay.mp4';
import ExteriorRainyNight from '../../assets/Video/ExteriorRainyNight.mp4';
import InteriorDay from '../../assets/Video/InteriorSunnyDay.mp4';
import InteriorNight from '../../assets/Video/InteriorNight.mp4';
import InteriorRainyDay from '../../assets/Video/InteriorRainyDay.mp4';
import InteriorRainyNight from '../../assets/Video/InteriorRainyNight.mp4';

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
