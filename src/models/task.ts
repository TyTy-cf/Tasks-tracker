
import { Guid } from 'guid-typescript';
import {Worker} from './worker';

export interface Task {
  guid: Guid;
  name: string;
  time: number;
  worker: Worker;
}
