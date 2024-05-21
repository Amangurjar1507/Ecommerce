export interface CardBagProps {
  item: ItemProps;
  index: number;
  onClick?: () => void;
  onRemove?: () => void;
  onAdd?: () => void;
  onMinas?: () => void;
  hideCount?: boolean;
  hideBin?: boolean;
  unfavoriteItemLike?: () => void;
}

export interface ItemProps {
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  qty: number;
}
