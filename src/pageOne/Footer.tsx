import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as HomeSVG } from '../icons/home.svg';
import { ReactComponent as SearchSVG } from '../icons/search.svg';
import { ReactComponent as NotificationSVG } from '../icons/notification.svg';
import { ReactComponent as PlusSVG } from '../icons/plus.svg';
import { ReactComponent as ProfileSVG } from '../icons/profile.svg';

const icons = [
  {
    icon: <HomeSVG />,
    href: '#',
  },
  {
    icon: <SearchSVG />,
    href: '#',
  },
  {
    icon: <NotificationSVG />,
    href: '#',
  },
  {
    icon: <ProfileSVG />,
    href: '#',
  },
];

export const Footer = () => {
  return (
    <Container>
      {icons.map((icon, idx) => {
        return (
          <>
            <IconWrapper>{icon.icon}</IconWrapper>
            {idx === 1 && (
              <PlusIcon>
                <PlusSVG />
              </PlusIcon>
            )}
          </>
        );
      })}
    </Container>
  );
};

const PlusIcon = styled.div`
  position: absolute;
  background: #c65656;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: red;
  border-radius: 50%;
  width: 48px;
  height: 44px;
  top: -13px;
  left: 50%;
  transform: translate(-50%);
  cursor: pointer;
  & svg {
    padding-top: 3px;
  }
`;
const IconWrapper = styled.div`
  padding-right: 49px;
  cursor: pointer;
  &:nth-child(2) {
    padding-right: 140px;
  }
  & svg {
    width: 19px;
    height: 20px;
  }
`;
const Container = styled.div`
  position: relative;
  width: 375px;
  height: 70px;
  background: #191919;
  box-shadow: 0px -10px 15px rgba(0, 0, 0, 0.5);
  display: flex;
  padding: 0 34px;
  align-items: center;
`;
