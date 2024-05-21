 import { NavigationContainer } from '@react-navigation/native';
import { FC } from 'react';
 import RootStack from './stacks/RootStack';

const Route: FC = () => {
  return (
    <NavigationContainer independent={true}  >
      <RootStack />
    </NavigationContainer>
  );
};

export default Route;
