import {useSelector} from 'react-redux';

const useAddBag = () => {
  const data = useSelector((state: any) => state.ItemList.dataList);
  const filllter = data.filter((item: any) => item.Cart == true);
  const sum = data.reduce(function (prev: any, current: any) {
    return prev + +current.price * current.qty;
  }, 0);

  return {
    filllter,
    sum,
  };
};
export default useAddBag;
