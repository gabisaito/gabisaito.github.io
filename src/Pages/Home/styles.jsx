import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

/* Hero */

export const HeroContainer = styled(Box)`
  width: 100%;
  background: linear-gradient(to bottom, #196860 0%, #229C90 100%);
  color: #FFF6E1;
  padding-top: 20px;
  padding-bottom: 50px;
  padding-left: 0;
  padding-right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow-x: hidden;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 40px;
    padding-bottom: 80px;
    padding-left: 50px;
    padding-right: 0;
  }
`;

export const TextSection = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 600px;
  padding: 0 20px;
  
  @media (min-width: 900px) {
    align-items: flex-start;
    text-align: left;
    max-width: 50%;
    padding: 0;
  }
`;

export const ImpactBadge = styled.img`
  height: 40px;
  margin-bottom: 20px;
  
  @media (min-width: 900px) {
    height: 50px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 16px;
  
  @media (min-width: 600px) {
    font-size: 2rem;
  }
  
  @media (min-width: 900px) {
    font-size: 3.5rem;
    line-height: 1.15;
    margin-bottom: 24px;
  }
`;

export const Highlight = styled.span`
  color: #FBA63D;
`;

export const Subtitle = styled.p`
  font-size: 0.8rem;
  line-height: 1.2;
  
  @media (min-width: 600px) {
    font-size: 1rem;
    line-height: 1;
  }

  @media (min-width: 900px) {
    font-size: 1.4rem;
    line-height: 1.3;
  }
`;

export const ImageSection = styled(Box)`
  max-width: 100%;
  width: 100%;
  
  @media (min-width: 900px) {
    max-width: 50%;
    margin-right: 0;
    width: auto;
  }
`;

export const TabletImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

/* Stats */

const textColor = '#196860';
const subStatColor = '#818181';

export const StatsContainer = styled(Box)`
  width: 100%;
  padding: 80px 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: ${textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  
  @media (min-width: 600px) {
    padding: 100px 50px;
  }
`;

export const MainHeadline = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  max-width: 90%; /* Reduzido o max-width para forçar a quebra de linha */
  margin: 0 auto 30px;
  text-align: center;

  background-image: linear-gradient(to right, #1E847A, #303030);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #1E847A;
  
  @media (min-width: 600px) {
    font-size: 2.5rem;
    max-width: 90%;
  }

  @media (min-width: 900px) {
    font-size: 3.5rem;
    max-width: 80%;
    line-height: 1.15;
  }
`;

export const SubHeadline = styled(Typography)`
  font-size: 0.9rem !important;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto 60px;
  text-align: center !important;
  
  @media (min-width: 600px) {
    font-size: 1.1rem !important;
    line-height: 1.6;
  }
`;

export const StatsGrid = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 40px;
  
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 0;
  }
`;

export const StatItem = styled(Box)`
  text-align: center;
  padding: 0 10px;
  
  @media (min-width: 600px) {
    flex: 1;
    min-width: unset;
    max-width: 25%;
  }
`;

export const StatNumber = styled(Typography)`
  font-size: 2.5rem !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
  
  background-image: linear-gradient(to bottom, #1E1E1E 0%, #1E847A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #1E1E1E;
  
  @media (min-width: 600px) {
    font-size: 3.5rem !important;
  }
`;

export const StatDescription = styled(Typography)`
  font-size: 0.8rem !important;
  color: ${subStatColor};
  line-height: 1 !important;
  
  @media (min-width: 600px) {
    font-size: 1rem !important;
  }
`;


/* Benefits */
const textColor_b = '#196860';
const listItemColor_b = '#303030';

export const BenefitContainer_b = styled(Box)`
  width: 100%;
  padding: 60px 20px; 
  background-color: #FFF6E1;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  
  @media (min-width: 600px) {
    padding: 80px 30px; 
  }

  @media (min-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 100px 60px;
  }
`;

export const TextContent_b = styled(Box)`
  text-align: left;
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: 900px) {
    flex: 1;
    margin: 0;
    max-width: 60%;
    padding-right: 40px;
  }
`;

export const MainTitle_b = styled(Typography)`
  font-size: 1.5rem !important;;
  font-weight: 700 !important;;
  line-height: 1.2 !important;;
  margin-bottom: 10px;
  color: ${textColor_b};

  @media (min-width: 600px) {
    font-size: 2rem !important;;
  }
  
  @media (min-width: 900px) {
    font-size: 2.5rem !important;;
  }
`;

export const SubTitle_b = styled(Typography)`
  font-size: 0.9rem !important;
  font-weight: 500 !important;
  line-height: 1.5 !important;
  margin-bottom: 20px !important; 
  color: ${textColor_b};

  @media (min-width: 600px) {
    font-size: 1.2rem !important;
    margin-bottom: 30px !important; 
  }

  @media (min-width: 900px) {
    font-size: 1.4rem !important;
    margin-bottom: 40px !important;
  }
`;

export const BenefitList_b = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const BenefitItem_b = styled.li`
  line-height: 1;
  margin-bottom: 20px;
  color: ${listItemColor_b};

  & span {
    font-size: 0.7rem; /* mobile */
  }

  @media (min-width: 600px) {
    & span {
      font-size: 1rem;
    }
  }

  @media (min-width: 900px) {
    & span {
      font-size: 1.1rem;
    }
  }
`;

export const CheckIcon_b = styled.span`
  color: ${textColor_b};
  margin-right: 10px;
`;

export const HighlightText_b = styled.span`
  font-weight: bold;
`;

export const DetailsImage_b = styled.img`
  display: none;
  
  @media (min-width: 900px) {
    display: block;
    height: 400px;
    width: auto;
    margin-top: 0;
  }
`;

/* Cards */
export const cardBackground1_c = '#229C90';
export const cardBackground3_c = '#303030';
export const cardBackground2_c = '#196860';
export const textColor_c = '#303030';
export const highlightColor_c = '#FBA63D';
export const cardTextColor_c = '#FFF6E1';

export const LearningSectionContainer_c = styled(Box)`
  width: 100%;
  padding: 80px 20px;
  background-color: #ffffffff;
  font-family: 'Poppins', sans-serif;
  text-align: left;
  
  @media (min-width: 900px) {
    padding: 100px 60px;
  }
`;

export const SectionTitle_c = styled(Typography)`
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
  margin-bottom: 10px;
  color: ${textColor_c};

  @media (min-width: 600px) {
    font-size: 2rem !important;
  }
  
  @media (min-width: 900px) {
    font-size: 2.5rem !important;
  }
`;

export const SectionSubtitle_c = styled(Typography)`
  font-size: 0.9rem !important;
  font-weight: 500 !important;
  line-height: 1.5 !important;
  margin-bottom: 20px !important; 
  color: ${textColor_c};

  @media (min-width: 600px) {
    font-size: 1.2rem !important;
    margin-bottom: 30px !important; 
  }

  @media (min-width: 900px) {
    font-size: 1.4rem !important;
    margin-bottom: 40px !important;
  }
`;

export const CardsGrid_c = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 40px;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    align-items: stretch; 
  }
`;

export const Card_c = styled(Box)`
  width: 100%;
  max-width: 400px; 
  padding: 40px !important;
  border-radius: 8px;
  color: ${cardTextColor_c};
  text-align: left;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ background }) => background};
`;

export const CardTitle_c = styled(Typography)`
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  line-height: 1 !important; 
  margin-bottom: 10px !important;
  color: ${highlightColor_c};
`;

export const CardText_c = styled(Typography)`
  font-size: 0.7rem !important; 
  line-height: 1; 
  margin-bottom: 10px !important; 

  @media (min-width: 600px) {
    font-size: 0.9rem !important;
  }

  @media (min-width: 900px) {
    font-size: 0.9rem !important;
  }
`;

export const CardHighlight_c = styled.span`
  font-weight: 700 !important;
  color: ${({ orange }) => (orange ? highlightColor_c : 'inherit')};
`;