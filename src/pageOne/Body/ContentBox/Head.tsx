import React from "react";
import styled from "@emotion/styled";
import {ReactComponent as LocationSVG} from '../../../icons/location.svg';
import {ReactComponent as ThreeDotSVG} from '../../../icons/threeDot.svg';
import { IConfig } from "../body.config";

export const Head = (config: IConfig) => {
  return (
    <Wrapper>
      <AuthorImage src={config.authorImage} />
      <Text>
        <Name>{config.name}</Name>
        <Container>
          <LocationSVG  />
          <Location>{config.location}</Location>
        </Container>
      </Text>
      <StyledIcon />
    </Wrapper>
  );
};

const AuthorImage = styled.img`
  width: 35px;
  height: 35px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 30px;
`;

const Name = styled.div`
  text-align: left;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: 7px;
  color: #fff;
`;

const Container = styled.div`
  display: flex;
  align-items: top;
  & svg {
    width: 7.79px;
    height: 9.17px;
  }
`;

const Location = styled.div`
  font-size: 12px;
  line-height: 9px;
  margin-left: 5px;
  color: #fff;
`;

const Text = styled.div`
  flex: 1;
  padding-left: 15px;
`;

const StyledIcon = styled(ThreeDotSVG)`
  cursor: pointer;
`;
