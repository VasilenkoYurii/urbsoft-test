export interface Products {
  id: number;
  img: string;
  name: string;
  price: string;
  oldPrice: string | null;
  accent: string | null;
  slides: boolean;
  showSlides?: string[];
}

export interface MoreButtonProps {
  text: string;
  fun?: Function;
}

export interface FormValues {
  name: string;
  email: string;
  phone: string;
}

export interface SerchInputProps {
  placeholder: string;
  textForButton: string;
}

export interface InitialState {
  users: {
    _id: string;
    name: string;
    email: string;
    phone: string;
    __v: number;
  }[];
  loader: boolean;
}

export interface UsersState {
  users: {
    _id: string;
    name: string;
    email: string;
    phone: string;
    __v: number;
  }[];
}

export interface PostUserProps {
  name: string;
  email: string;
  phone: string;
}
