import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background-color: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background-color: #230187;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;
export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;
export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #eee;
`;
export const Name = styled.Text`
  font-size: 14px;
  color: #011016;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;
export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const UserActionsButtons = styled.View`
  flex-direction: row;
`;

export const ProfileButton = styled(RectButton)`
  background-color: #230187;
  height: 36px;
  border-radius: 4px;
  margin-top: 10px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const ProfileButtonText = styled.Text`
  font-size: 11px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
export const DeleteButton = styled(RectButton)`
  background-color: #ff3910;
  height: 36px;
  width: 36px;
  border-radius: 4px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;
