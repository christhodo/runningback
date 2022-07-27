export interface Message {
  message: string;
}

export interface BaseEntity {
  id: string | null;
}

export interface Runningback extends BaseEntity {
  title: string;
  description: string;
}

export interface User {
  email: string;
  password: string;
}
