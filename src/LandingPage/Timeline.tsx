import { useEffect, useState } from "react"
import points_data from "./timeline_data.json";
import data from './../data.json';

import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import AwardIcon from '@mui/icons-material/EmojiEvents';
import useInterval from "../useInterval";
import TimelineTech from "./TimelineTech";



interface TimelinePoint {
    year: number,
    description: string,
    icon?: string,
}
interface TimelineTech {
    text: string,
    year: number 
}

function Timeline() {

    const [currentLabel, setCurrentLabel] = useState<string>("Since 2007");
    const [progress, setProgress] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false)
    const [yearRange, setYearRange] = useState<Array<number>>([]);
    const [startTime, setStartTime] = useState<number>(0);
    const [pointsByYear, setPointsByYear] = useState<any>({});
    const [techs, setTechs] = useState<{ [key: string]: any}>({});
    const duration = 5000;

    useInterval(() => {
        setProgress(Math.min(1.0, (Date.now() - startTime) / duration));
    }, isRunning ? 1000 / 60 : null);

    useEffect(() => { 
        const timer = setTimeout(() => { 
            setIsRunning(true); 
            setStartTime(Date.now());
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    // Initialize
    useEffect(() => {
        
        const byYear: { [index: string]: TimelinePoint[] }  = {}
        for (let point in points_data) {
            if (!(points_data[point].year in byYear))
                byYear[points_data[point].year] = [];
            byYear[points_data[point].year].push(points_data[point]);
        }
        setPointsByYear(byYear);

        setYearRange([points_data[0].year, (new Date()).getFullYear()]);

        let techs_by_year: {[key: string]: any} = {}
        for (let i in data.tech) {  
            const tech: TimelineTech = data.tech[i];
            const year = tech.year.toString()
            if(!(year in techs_by_year))
                techs_by_year[year] = []
            techs_by_year[year].push(tech.text)
        }
        setTechs(techs_by_year);

    }, [])

    // Update the timeline
    useEffect(() => {

        if(progress > 1.0) 
            setIsRunning(false)
    }, [progress]);

    const getWidth = () => Math.max(0.05, Math.min(1.0, progress)) * 100
    const getYears = () => Math.ceil((yearRange[1] - yearRange[0]) * progress)

    const getIcon = (id: any) => {
        if (id == "school") return <SchoolIcon sx={{ fontSize: "18px" }}/>;
        if (id == "work") return <WorkIcon sx={{ fontSize: "18px" }}/>;
        if (id == "award") return <AwardIcon sx={{ fontSize: "18px" }}/>;
        return <StarIcon sx={{ fontSize: "18px" }}/>;
    }

    return <>
        <div id="timeline">
            <p className="years_of_exp">{getYears() > 0 ? getYears() : "0+"} years of code, <br /><span>and counting</span></p>
            <p className="point_label">{currentLabel}</p>
            <div id="line" style={{ width: getWidth() + "%" }}>
                {Object.keys(pointsByYear).map((year: any) => {
                    const r = (year - yearRange[0]) / (yearRange[1] - yearRange[0]);
                    if (r <= progress && progress > 0) 
                        return <div className="line_year" style={{ left: (r/progress * 100) + "%"}} >
                            {pointsByYear[year].map((point: any) => { 
                                return <div className="point" onMouseEnter={() => setCurrentLabel(`${point.year}, ${point.description}`)}>{getIcon(point.icon)}</div>
                            })
                        }</div>;
                })}
                {/*data.map((point) => {
                    const r = (point.year - yearRange[0]) / (yearRange[1] - yearRange[0]);

                    if (r <= progress && progress > 0) 
                        return <div className="point" style={{ left: (r/progress * 100) + "%" }}>{getIcon(point.icon)}</div>
                })*/}
                {Object.keys(techs).map((key: string) => {
                    const point = techs[key].reduce((cumul: string, t: string) => cumul + ", " + t);
                    const year = Number(key);
                    const r = (year - yearRange[0]) / (yearRange[1] - yearRange[0]);

                    if (r <= progress && progress > 0) 
                        return <TimelineTech position={r/progress} year={year}>{point}</TimelineTech>
                })}
            </div>
            
        </div>
    
    </>
}

export default Timeline