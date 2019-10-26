import React from 'react';
import people from '../../assets/icons/people.svg';


export const ICON_NAMES = ['people', 'cenas'] as const;
type IconNames = typeof ICON_NAMES[number];

const IconImages : {[k in IconNames] : string}= {
    "people": people,
    "cenas": people
}

export const Icon = (props : {icon: IconNames}) => {
    return <div className='inline-block'>
        <img className='h-4' src={IconImages[props.icon]} alt=""/>
    </div>
};