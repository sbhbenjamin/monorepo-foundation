export interface User {
  id: number;
  name: string;
  email: string;
}

export interface GetUsersResponse {
  users: User[];
  totalCount: number;
}

export interface GetUsersRequest {
  users: User;
  totalCount: number;
}
