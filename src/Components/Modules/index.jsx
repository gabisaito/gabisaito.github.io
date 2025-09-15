import React from 'react';
import { Grid } from '@mui/material';

import {
    CardContainer,
    ImageWrapper,
    CardImage,
    Overlay,
    ContentContainer,
    ModuleTitle,
    Title,
    Subtitle,
} from './styles';

export default function Modules({ imageUrl, moduleNumber, title, subtitle }) {
    return (
        <CardContainer>
            <ImageWrapper>
                <CardImage src={imageUrl} alt={title} />
                <Overlay />
                <ModuleTitle>{`Módulo ${moduleNumber}`}</ModuleTitle>
            </ImageWrapper>
            <ContentContainer>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </ContentContainer>
        </CardContainer>
    );
}