import React from 'react';

import { ReactComponent as CheckSVG } from '../../../icons/check.svg';
import { ReactComponent as RateSVG } from '../../../icons/starGroup.svg';
import { ReactComponent as CrossSVG } from '../../../icons/cross.svg';
import { ReactComponent as TopicSVG } from '../../../icons/movieTopic1.svg';

import styled from '@emotion/styled';
import { IConfig } from '../body.config';

export const Inside = (config: IConfig) => {
  return (
    <Body>
      <FlexContainer>
        <Image src={config.image} />
        <MiddleColumn>
          <Title>{config.title}</Title>
          <Year>{config.publishedYear}</Year>
          <Notes>
            {config.notes.map((note: any) => (
              <FlexContainer>
                {note.type === 'strength' ? <CheckSVG /> : <CrossSVG />}
                <NoteText>{note.text}</NoteText>
              </FlexContainer>
            ))}
          </Notes>
        </MiddleColumn>
        <IconWrapper>
          <TopicSVG />
        </IconWrapper>
      </FlexContainer>
      <StyledFlexContainer>
        <AuthorSection>
          <Label>Author:</Label>
          <AuthorText>{config.author}</AuthorText>
        </AuthorSection>
        <RateBox>{config.rate}</RateBox>
        <div>
          <RateStar />
          <RateText>{config.rate >= 4 ? 'Great' : 'Good'}</RateText>
        </div>
      </StyledFlexContainer>
    </Body>
  );
};

const MiddleColumn = styled.div`
  flex: 1;
`;
const Body = styled.div`
  background: #363636;
  box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  padding-right: 21px;
  margin-top: 20px;
`;
const Image = styled.img``;
const Title = styled.div`
  padding-top: 20px;
  font-weight: bold;
  font-size: 12px;
  line-height: 7px;
  color: #fff;
`;
const Year = styled.div`
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 15px;
  color: #fff;
`;
const IconWrapper = styled.div`
  padding-top: 20px;
  & svg {
    width: 11.09px;
    height: 15px;
  }
`;
const NoteText = styled.div`
  padding-left: 7px;
  font-size: 12px;
  line-height: 16px;
  color: #fff;
`;

const Notes = styled.div`
  width: 163px;
  & :first-child {
    margin-bottom: 20px;
  }
`;
const AuthorSection = styled.div`
  color: #fff;
  
`;
const Label = styled.div`
  font-size: 12px;
  line-height: 16px;
  padding-bottom:5px;
`;
const AuthorText = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
`;
const RateBox = styled.div`
  width: 66px;
  height: 66px;
  background: #191919;
  border-radius: 15px;
  color: #ffe500;
  font-weight: bold;
  font-size: 22px;
  line-height: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RateStar = styled(RateSVG)`
  width: 81px;
  height: 15px;
`;
const RateText = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 7px;
  margin-top: 9px;
  color: #fff;
`;
const FlexContainer = styled.div`
  display: flex;
  text-align: start;
`;

const StyledFlexContainer = styled(FlexContainer)`
  padding-left: 20px;
  padding-right: 40px;
  margin-top:-19px;
  padding-bottom: 20px;
  justify-content: space-between;
  align-items: center;
  width: 94%;
`;
