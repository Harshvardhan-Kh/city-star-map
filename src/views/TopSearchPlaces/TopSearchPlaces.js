import TopSearchCard from '../../components/TopSearchCard/TopSearchCard';
import tosearchdata from './../../CityData/topplaces.json'
import React, { useState, useEffect } from "react"; 
import './TopSearchPlaces.css'
import Navbar from '../../components/Navbar/Navbar';
import FamousPlaceCard from '../../components/FamousPlaceCard/FamousPlaceCard';
import { Link } from 'react-router-dom';

const TopSearchPlaces = () => {
    const [topsearch, setTopsearch] = useState(tosearchdata.topsearch);
    const [searchterm, setSearchterm] = useState("");

    useEffect(() => {
        const filtereddata = tosearchdata.topsearch.filter((topsearchplace) => {
            const { placename } = topsearchplace;
            const lowerplacename = placename.toLowerCase()
            return (lowerplacename.includes(searchterm))
        })
        setTopsearch(filtereddata);
    }, [searchterm]);

    const [place, setPlace] =useState(tosearchdata.topsearch)

    return (
        <>
            <Navbar />

            < input type='text'
                placeholder=' Search'
                value={searchterm}
                onChange={(e) => {
                    setSearchterm
                        (e.target.value)
                }}
            />
             <p className='main-heading'>Top Tourist Places Attraction In India</p>

            {/* {
            topsearch.map((elementofsearch,i)=>(
             <TopSearchCard name={elementofsearch.placename} img1={elementofsearch.placeimg[0]} img2={elementofsearch.placeimg[1]} img3={elementofsearch.placeimg[2]} description={elementofsearch.placedescription} history={elementofsearch.placehistory}/>

            ))
        } */}

            <div className="topsearch-container">
                {
                    place.map((placecitydata,i) => {
                        // const {placename ,placeimg,  placedescription } = placecitydata;
                        return (<Link to='/trendingcity'><FamousPlaceCard image={placecitydata.placeimg[0]}  title={placecitydata.placename} description={placecitydata.placedescription} no={i+1} /></Link>)
                    })
                }
            </div>
        </>
    );
}
export default TopSearchPlaces;