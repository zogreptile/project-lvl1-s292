#!/usr/bin/env node
import { askName, initBrainEven } from '..';

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');

const user = askName();

initBrainEven(user);
