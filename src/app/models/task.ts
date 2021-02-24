
import { Guid } from 'guid-typescript';

export interface Task {
  guid: Guid;
  name: string;
  time: string;
}
