export interface SWContextType {
    page: string;
    changePage: (newPage: string) => void;
  }

export interface FriendProps {
    picture: string,
    pos: number
}

export interface NavItemsProps {
  itemTitle: string
}
