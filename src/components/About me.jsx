import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";
import main from "../assets/main.jpg";


const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState('Loading');
    useEffect(() => {
        // const id = Math.floor(Math.random() * 6)+1; //!!!
        const id = 1; //!!!
        fetch(`${base_url}/v1/peoples/${id}`)
        .then(res => res.json())
        .then(data => {
            setAboutMe({
                name: data.name,
                id: data.id,
                birth: data.birth_year,
                gender: data.gender,
                eye_color: data.eye_color,
                hair_color: data.hair_color,
                skin_color: data.skin_color,
                height: data.height,
                // image: data.image,

            });
        })
            .catch(() => setAboutMe('Failed to load About me'));
    },[])

    if (aboutMe) {
        return (
            <div className='far-galaxy'>
                <p> Name: {aboutMe.name} </p>
                <p> ID: {aboutMe.id} </p>
                <p> Birth: {aboutMe.birth} </p>
                <p> Gender: {aboutMe.gender} </p>
                <p> Eye color: {aboutMe.eye_color} </p>
                <p> Hair color: {aboutMe.hair_color} </p>
                <p> Skin color: {aboutMe.skin_color} </p>
                <p> Height: {aboutMe.height} </p>
                {/*<p>{aboutMe.image}</p>*/}
                <img className="w-10  " src={main} alt="Luke Skywalker"/>



            </div>
        )}
    else{
        return (
            <p className='far-galaxy'>
                <span className={'spinner-border-sm spinner-border'}></span>
                <span className={'spinner-grow spinner-grow-sm'}>Loading</span>
            </p>
        )
    }





}

export default AboutMe;

// "birth_year": "string",
//     "created": "string",
//     "edited": "string",
//     "eye_color": "string",
//     "gender": "string",
//     "hair_color": "string",
//     "height": "string",
//     "homeworld": 0,
//     "id": 0,
//     "image": "string",
//     "mass": "string",
//     "name": "string",
//     "skin_color": "string"

