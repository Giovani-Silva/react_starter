import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { device } from '../../styles/metrics';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: ${colors.info};
`;
