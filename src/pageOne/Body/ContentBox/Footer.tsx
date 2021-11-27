import React from 'react';

import { ReactComponent as CommentSVG } from '../../../icons/comment.svg';
import { ReactComponent as MoreSVG } from '../../../icons/arrow.svg';
import { ReactComponent as ClapSVG } from '../../../icons/clap.svg';
import dayjs from 'dayjs';
import styled from '@emotion/styled';
import relativeTime from 'dayjs/plugin/relativeTime';
import { IConfig } from '../body.config';

dayjs.extend(relativeTime);

export const Footer = (config: IConfig) => {
  return (
    <>
      <SubFooter>
        <FlexContainer>
          <ClapSVG />
          <ClapsNum>{config.claps}</ClapsNum>
        </FlexContainer>
        <StyledFlexContainer>
          <CommentSVG/>
          <CommentsNum>{config.comments}</CommentsNum>
        </StyledFlexContainer>
        <CreatedDate>
          posted {dayjs(config.createdDate).toNow(true)} ago
        </CreatedDate>
      </SubFooter>
      <Wrapper>
          <AuthorName>{config.name}</AuthorName>
          <ReadMore>Read the full Review</ReadMore>
          <MoreSVG />
      </Wrapper>
    </>
  );
};

const SubFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 20px;
  margin-top: 22px;
  margin-bottom: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledFlexContainer = styled(FlexContainer)`
  flex: 1;
  margin-left: 10px;
`;

const Wrapper = styled(FlexContainer)`
  margin-left: 30px;
  align-items: center;
`;
const ClapsNum = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 7px;
  color: #fff;
  margin-left: 5px;
`;
const CommentsNum = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 7px;
  color: #fff;
  margin-left: 5px;
`;
const CreatedDate = styled.div`
  font-size: 12px;
  line-height: 7px;
  text-align: right;
  color: #b5b5b5;
`;


const AuthorName = styled.div`
font-size: 14px;
line-height: 7px;
color:#fff;
padding-right: 12px;
`;

const ReadMore = styled.div`
font-size: 12px;
line-height: 7px;
color: #C65656;
padding-right:20px;
display: flex;
align-items: center;
cursor: pointer;
`;

