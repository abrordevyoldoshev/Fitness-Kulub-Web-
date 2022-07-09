import React from 'react';
import ProgramsData from '../data/programsData.js'
import RightArrow from '../imge/rightArrow.png'

function Programs() {
    return (

        <div className="Porgrams" id="programs">
            {/*Header section sterted*/}
            <div className="header-programs">
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>To shape your</span>
            </div>
            {/*Header section end*/}
            <div className="program-categories">
                {ProgramsData.map(programs => (
                    <div className='category'>
                        {programs.image}
                        <span>{programs.heading}</span>
                        <span>{programs.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={RightArrow} alt=""/>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Programs;