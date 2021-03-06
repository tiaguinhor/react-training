import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import {observe} from './components/Game';

const rootEl = document.body.appendChild(document.createElement('div'));

observe((knightPosition, knightPosition2) =>
  ReactDOM.render(
    <Board knightPosition = {knightPosition} knightPosition2 = {knightPosition2} />, 
    rootEl
  )
);
