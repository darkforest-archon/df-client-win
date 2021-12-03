import React from 'react';
import styled from 'styled-components';
import { TwitterLink } from '../Components/Labels/Labels';
import { Smaller, Text } from '../Components/Text';
import dfstyles from '../Styles/dfstyles';
import {Link} from "../Components/CoreUI";

export function LandingPageRoundArt() {
  return (
    <Container>
      <ImgContainer>
        <LandingPageRoundArtImg src={'/public/round_art/guildw-round1.png'} />
        <Smaller>
          <Text>Art by</Text> <Link to='https://twitter.com/PLAZAES'>@PLAZAES</Link>{' '}
        </Smaller>
      </ImgContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  display: inline-block;
  text-align: right;
`;

const LandingPageRoundArtImg = styled.img`
  width: 750px;
  max-width: 80vw;
  border-radius: 8px;
  border: 1px solid ${dfstyles.colors.borderDark};
`;
