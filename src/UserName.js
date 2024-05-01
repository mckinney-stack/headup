import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const UserNameContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserHeading = styled.label`
  margin-right: 8px;
  font-weight: 700;
  font-size: 0.83em;
`;

const UserInput = styled.input`
  margin-left: 8px;
  margin-right: -8px;
`;

export default function UserName({userName, setUserName, handleSubmit}) {
    return ( 
    <UserNameContainer onSubmit={handleSubmit}>
    <UserHeading>
      <FormattedMessage id="player" />
      <UserInput type="text" value={userName} onChange={e => setUserName(e.target.value)} />
    </UserHeading>
  </UserNameContainer>
  );
};