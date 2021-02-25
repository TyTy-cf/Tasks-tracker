
import { Guid } from 'guid-typescript';

export interface Worker {
  guid: Guid;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

