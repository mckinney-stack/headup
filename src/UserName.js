import { useEffect, useState } from 'react';
import { getDatabase, ref, get } from "firebase/database";
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
  background-color: transparent;
  color: black;
  position: relative;
  border-radius: 4px;
`;

const UserInputShadow = styled.input`
  margin-left: 8px;
  margin-right: -8px;
  background-color: transparent;
  color: lightgrey;
  position: absolute;
  pointer-events: none;
  border-radius: 4px;
`;

function handleSubmit(e) {
  e.preventDefault();
}

export default function UserName({userName, setUserName}) {

  const [userNames, setUserNames] = useState([]);
  const [suggestion, setSuggestion] = useState('');

  useEffect(() => {
    const db = getDatabase();
    get(ref(db, 'users')).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const names = Object.keys(data);
        setUserNames(names);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, [userNames]);

  useEffect(() => {
    if (userName) {
      const match = userNames.find(name => name.startsWith(userName));
      setSuggestion(match ? match : '');
    } else {
      setSuggestion('');
    }
  }, [userName, userNames]);

  return ( 
    <UserNameContainer onSubmit={handleSubmit}>
      <UserHeading>
        <FormattedMessage id="player" />
        <UserInputShadow type="text" value={suggestion} disabled />
        <UserInput 
        type="text" 
        value={userName} 
        onChange={e => setUserName(e.target.value)} 
        onKeyDown={e => {
          if (e.key === 'Tab') {
            e.preventDefault();
            setUserName(suggestion);
          }
        }}
        onClick={() => {if (suggestion) {setUserName(suggestion)}}}
        />
      </UserHeading>
    </UserNameContainer>
  );
};