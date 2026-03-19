

function ProjectElement(props: { project: Project}) {
    const { project } = props;

    switch(project.id) {
        case "plusminus": return <Plusminus />
        case "about": return <ThisPortfolio />
        case "hullaballoon": return <Hullaballoon />
        case "jumpball": return <JumpBall />
        case "toywatch": return <Toywatch />
        case "shadowlings": return <Shadowlings />
        case "valoapp": return <ValoApp />
        case "lotu": return <Lotu />
        case "ohjaustaverkossa": return <Ohjaustaverkossa />
        case "hautahaku": return <Hautahaku />
        case "omahame": return <OmaHame />
        case "lapha": return <Lapha />
        case "timeline": return <TimelineCardGame />
        case "yousort": return <Yousort />
        case "frozenforce": return <FrozenForce />
        case "garden": return <Garden />
        case "sitefolk": return <SiteFolk />
        case "breedafluff": return <BreedAFluff />
        case "sockoff": return <SockOff />
        case "savegamejam": return <SaveGameJam />
        case "pancake": return <Pancake />
        case "famine": return <Famine />
        default: return <p>404</p>
    }
}

import plusminus_image from './images/plusminus.png';
import hullaballoon_image from './images/hullaballoon.png';
import toywatch_image from './images/toywatch.jpg';
import jumpball_image from './images/jumpball.jpg';
import shadowlings_image from './images/shadowlings.png';
import hautahaku_image from './images/hautahaku.png';
import ohjaustaverkossa_image from './images/ohjaustaverkossa.png';
import omahame_image from './images/omahame.png';
import lotu_image from './images/lotu.png';
import lapha_image from './images/lapha.png';
import yousort_image from './images/yousourt.png';
import valoapp_image from './images/valoapp.jpg';
import portfolio_image from './images/portfolio_screen.png';
import frozenforce_image from './images/frozenforce_small.png';
import timeline_image from './images/timeline_small.png';
import garden_image from './images/botanical_small.png';
import sitefolk_image from './images/sitefolk_small.png';
import fluff_image from './images/breedafluff.png';
import sockoff_image from './images/sockoff_logo.jpg';
import savegamejam from './images/savegamejam.png';
import pancake_image from './images/pancake_small.png';
import famine_image from './images/famine.png';

function getProjectImage(project: Project) {
    switch(project.id) {
        case "plusminus": return plusminus_image;
        case "hullaballoon": return hullaballoon_image;
        case "toywatch": return toywatch_image;
        case "jumpball": return jumpball_image;
        case "shadowlings": return shadowlings_image;
        case "valoapp": return valoapp_image;
        case "hautahaku": return hautahaku_image;
        case "ohjaustaverkossa": return ohjaustaverkossa_image;
        case "omahame": return omahame_image;
        case "lotu": return lotu_image;
        case "lapha": return lapha_image;
        case "yousort": return yousort_image;
        case "about": return portfolio_image;
        case "frozenforce": return frozenforce_image;
        case "timeline": return timeline_image;
        case "garden": return garden_image;
        case "sitefolk": return sitefolk_image;
        case "breedafluff": return fluff_image;
        case "sockoff": return sockoff_image;
        case "savegamejam": return savegamejam;
        case "pancake": return pancake_image;
        case "famine": return famine_image;
        default: return placeholders[0];
    }
}

export default ProjectElement;
export { getProjectImage }

import placeholders from "../assets/placeholders";
import Hullaballoon from "./Hullaballoon";
import JumpBall from "./Jumpball";
import Plusminus from "./Plusminus";
import ThisPortfolio from "./ThisPortfolio";
import Toywatch from "./Toywatch";
import Shadowlings from "./Shadowlings";
import TimelineCardGame from "./TimelineCardGame";
import Yousort from "./YouSort";
import ValoApp from "./ValoApp";
import FrozenForce from "./FrozenForce";
import Garden from "./Garden";
import SiteFolk from "./SiteFolk";
import BreedAFluff from "./BreedAFluff";
import SockOff from "./SockOff";
import type { Project } from '../util/useProjects';
import Pancake from './Pancake';
import SaveGameJam from './SaveGameJam';
import Famine from './Famine';
import Lotu from './Lotu';
import Ohjaustaverkossa from './Ohjaustaverkossa';
import Hautahaku from './Hautahaku';
import OmaHame from './OmaHame';
import Lapha from './Lapha';

