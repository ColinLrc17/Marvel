import React from 'react';

import { getCharacters } from "../api/character-api";
import  {RadarChart, PolarGrid,PolarRadiusAxis,Radar,Legend,PolarAngleAxis} from "recharts";



const CompareCharactersPage = () => {
    
    // change the title of the page
    document.title = "Compare | Marvel App";

    // to be replaced with the real data
    const characters = getCharacters();

    

    // transform the characters to array of label/value objects
    const options = characters.map((character, index) => ({
        value: index,
        label: character.name,
        Image : character.thumbnail.path,
        Extension : character.thumbnail.extension,
        Stats : character.capacities
    }));

    // set the default options to the first two characters
    const [option1, setOption1] = React.useState(options[0]);
    const [option2, setOption2] = React.useState(options[1]);

    const centerStyle = {
        textAlign: 'center',
        width: 500,
    };

    return (
        <>
            
            <h2>Compare characters</h2>
            <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
            <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
            <script src="https://unpkg.com/prop-types/prop-types.min.js"></script>
            <script src="https://unpkg.com/recharts/umd/Recharts.js"></script>
            <p style={centerStyle}>
                <select
                    value={option1.value}
                    onChange={(event) => setOption1(options[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>&nbsp; {/* Fix the ambiguous spacing */}
                with&nbsp;
                <select
                    value={option2.value}
                    onChange={(event) => setOption2(options[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </p>

            <p style={centerStyle}>
                {characters[option1.value].name} vs {characters[option2.value].name}
            </p>
            <p style={centerStyle}>
            <img src={`${option1.Image}/standard_large.${option1.Extension}`} alt={option1.name} />
            <img src={`${option2.Image}/standard_large.${option2.Extension}`} alt={option2.name} />
            </p>
            <RadarChart outerRadius={90} width={730} height={250} data={[characters]}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis angle={30} domain={[0, 10]} />
                <Radar name={option1.name} dataKey={characters.name}  stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name={option2.name} dataKey="name" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
  
        </>
    );
};

export default CompareCharactersPage;