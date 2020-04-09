import React from 'react';
import styled from 'styled-components';
import pi from '../assets/Raspberry_Pi_Logo.svg';

import download from '../assets/download.svg';
import pdf from '../assets/pdf.svg';
import popcorn from '../assets/popcorn.svg';

import television from '../assets/television.svg';
import videoplayer from '../assets/video-player.svg';
import radioantenna from '../assets/radio-antenna.svg';
import brain from '../assets/brain.svg';
type IconProps = {
    type?: 'pi' | 'popcorn' | 'videoplayer' | 'pdf' | 'download' | 'television' | 'radioantenna' | 'brain';
    className?: string;
};

const type2svg = {
    pi,
    popcorn,
    videoplayer,
    pdf,
    download,
    television,
    radioantenna,
    brain,
};
const Image = styled.img`
    height: 3rem;
    margin-right: 1rem;
`;

const Icon = ({ type, className }: IconProps) => {
    const svgKey = type || 'pi';

    return <Image className={className} src={type2svg[svgKey]} />;
};

export default Icon;
