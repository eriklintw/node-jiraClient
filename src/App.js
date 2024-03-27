import { EventEmitter } from "events";
import Subscribers from './subs/Subscribers.js'

const myEmitter = new EventEmitter();
myEmitter.on('ev1', Subscribers.firstFunction);

myEmitter.emit('ev1','abcde')

//Subscribers.firstFunction('abcd')
//let funName = 'firstFunction'
//Subscribers[funName]('wxyz')
