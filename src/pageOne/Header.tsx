import React from 'react';
import styled from '@emotion/styled';

import { ReactComponent as MobileSignalSVG } from '../icons/mobile_signal.svg';
import { ReactComponent as WifiSVG } from '../icons/wifi.svg';
import { ReactComponent as BatterySVG } from '../icons/battery.svg';
import { ReactComponent as LogoSVG } from '../icons/logo.svg';

export const Header = () => {
  return (
    <Container>
      <Head>
        <ClockNumber>9:41</ClockNumber>
        <IconWrapper>
          <MobileSignalSVG />
          <WifiSVG />
          <BatterySVG />
        </IconWrapper>
      </Head>
      <LogoWrapper>
        <LogoSVG />
      </LogoWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 17.33px;
  padding-left: 33.45px;
  padding-right: 14px;
  background-color: #000;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
`;

const ClockNumber = styled.div`
  color: white;
  font-weight: bold;
`;

const IconWrapper = styled.div`
  display: flex;
  width: 66.66px;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  padding-bottom: 15.67px;
  svg {
    width: 48px;
    height: 20.33px;
  }
`;
