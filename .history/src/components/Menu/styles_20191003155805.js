import styled from 'styled-components';
import SideNav from '@trendmicro/react-sidenav';
import { FaHome, FaStar, FaChevronUp } from 'react-icons/fa';

export const Container = styled(SideNav)`
  background: #999;
`;

export const Icon = styled(FaHome)`
  margin-top: 15px;
`;

export const IconCPO = styled(FaStar)`
  margin-top: 15px;
`;

export const IconCPP = styled(FaChevronUp)`
  margin-top: 15px;
`;

export const Wrapper = styled.div`
  height: 100%;
  background: #dfdfec;
`;
