export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  category: string;
}

export interface signUp {
  name: string;
  email: string;
  password: string;
  phone: string;
  DefaultShippingAddress: string;
}

export interface login {
  email: String;
  password: String;
}

export interface cart {
  name: string;
  price: number;
  category: string;
  id: number | undefined;
  quantity: undefined | number;
  productId: number;
  userId: number;
}

export interface priceSummary {
  price: number;
  discount: number;
  tax: number;
  delivery: number;
  total: number;
}

export interface order {
  email: string;
  address: string;
  contact: string;
  totalPrice: number;
  userId: string;
  id: number | undefined;
}
