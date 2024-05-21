import {useCallback} from 'react';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
const useGetStarted = () => {
  const navigation = useAuthNavigation();

  //** Navigate to signup screen */

  //** Navigate to login screen */
  const onClickLogin = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  return {
    onClickLogin,
  };
};
export default useGetStarted;
