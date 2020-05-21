import styled from 'styled-components';
import { BaseButton, PrimaryButton } from '../../styles/button';

const ListHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;

  input {
    margin: 0 5px;
    border-radius: 20px;
    width: 100%;
    min-width: 300px;
  }
`;

const AddButton = styled(PrimaryButton)`
  margin: 0 5px;
  border-radius: 20px;

  svg {
    padding-right: 5px;
  }
`;

// Filter styles
const FilterButton = styled(BaseButton)`
  background-color: #f1f8fe;
  color: var(--primary-font-color);
  border: 0.5px solid rgba(0, 74, 98, 0.25);
  border-radius: 20px;
  min-width: 170px;
  margin-right: 20px;

  svg {
    padding-right: 5px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-right: 15px;

  .period {
    input {
      margin: 15px 15px 0 0;
    }
  }

  .situation {
    margin-top: 25px;
    font-weight: 400;

    .p-checkbox {
      margin: 0px 5px 0 5px;
    }
  }

  .buttons {
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;

    button {
      margin-right: 10px;
      border-radius: 20px;
      border: 0.5px solid rgba(0, 74, 98, 0.25);
      background: #f1f8fe;
      color: var(--primary-fontupdate-color);
      height: 40px;
      padding: 5px 10px;
      font-size: 1rem;
      font-weight: 600;
      transition: opacity 0.25s;
    }
    button ~ button {
      background-color: #004a62;
      color: #fff;
    }
  }
`;

export { FilterButton, AddButton, ListHeaderContainer, FilterContainer };