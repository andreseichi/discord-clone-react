import styled from 'styled-components';
import { Add, ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;

  padding: 24px 9.5px 0 0;
  background-color: var(--secondary);
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 6px;

  cursor: pointer;

  &:hover {
    > div svg,
    > div span {
      color: var(--white);
    }
  }
`;

export const ChannelName = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray);

  > span {
    margin-left: 2px;
  }
`;

export const AddCategoryIcon = styled(Add)`
  height: 21px;
  width: 21px;
  color: var(--symbol);
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 12px;
  height: 12px;

  color: var(--gray);
  cursor: pointer;
`;
