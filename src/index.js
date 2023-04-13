import './style.css';
import LeaderBoard from './modules/addScores.js';

const scores = new LeaderBoard();

scores.submitInput();
scores.refreshScores();
scores.displayScores();
