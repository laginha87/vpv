import React from 'react';
import people from '../../assets/icons/people.svg';

type IconNames = "people";

const IconImages : {[k in IconNames] : string}= {
    "people": people
}

export const Icon = (props : {icon: IconNames}) => {
    return <div className='inline-block'>
        <img className='h-4' src={IconImages[props.icon]} alt=""/>
    </div>
}