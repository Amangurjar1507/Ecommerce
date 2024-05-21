import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ListAction} from '../../../services/redux/Actions/Action';
import {ServicesData} from './constData';

const useHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const data = useSelector((state: any) => state.ItemList.dataList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ListAction(ServicesData));
  }, []);

  const handlePageChange = async (item: unknown, index: number) => {
    setLoading(true);
    try {
      const newData = [...data];
      newData[index].qty = newData[index].qty + 1;
      newData[index].Cart = true;
      await dispatch(ListAction(newData));
      setLoading(false);
    } catch (error) {
      console.error('Error updating the item:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handlePageChange,
    activeIndex,
    setActiveIndex,
    loading,
  };
};
export default useHome;
