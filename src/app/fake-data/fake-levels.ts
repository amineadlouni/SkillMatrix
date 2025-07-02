import { Level } from "../interfaces";


  export const levels: Level[] = [
    { id: '0', 
    description: 'This is the LEVEL 0 description', 
    questions: [
        { id: '1', text: 'level 0 random question', checked: false },
        { id: '2', text: 'What is your age?', checked: false },
        { id: '3', text: 'What is your occupation?', checked: false }

      ] },

    { id: '1', description: 'This is the LEVEL 1 DESCRIPTION', 
    questions: [
        { id: '1', text: 'What is your name?', checked: false },
        { id: '2', text: 'What is your age?', checked: false },
        { id: '3', text: 'What is your occupation?', checked: false },
        { id: '4', text: 'level 1 random question', checked: false },
        { id: '5', text: 'level 1 random question', checked: false },
        { id: '6', text: 'level 1 random question', checked: false },
        { id: '7', text: 'level 1 random question', checked: false },
        { id: '8', text: 'level 1 random question', checked: false },
        { id: '9', text: 'level 1 random question', checked: false },
        { id: '10', text: 'level 1 random question', checked: false },

    ] },

    { id: '2', description: 'This is the LEVEL 2 DESCRIPTION', 
    questions: [
      { id: '1', text: 'What is your name?', checked: false },
      { id: '2', text: 'What is your age?', checked: false },
      { id: '3', text: 'What is your occupation?', checked: false },
      { id: '4', text: 'level 2 random question', checked: false },
      { id: '5', text: 'level 2 random question', checked: false },
      { id: '6', text: 'level 1 random question', checked: false },
      { id: '7', text: 'level 1 random question', checked: false },
      { id: '8', text: 'level 1 random question', checked: false },
      { id: '9', text: 'level 1 random question', checked: false },
      { id: '10', text: 'level 1 random question', checked: false },
        ] },

    { id: '3', description: 'This is the LEVEL 3 DESCRIPTION', 
    questions: [
      { id: '1', text: 'What is your name?', checked: false },
      { id: '2', text: 'What is your age?', checked: false },
      { id: '3', text: 'What is your occupation?', checked: false },
      { id: '4', text: 'level 1 random question', checked: false },
      { id: '5', text: 'level 1 random question', checked: false },
      { id: '6', text: 'level 1 random question', checked: false },
      { id: '7', text: 'level 1 random question', checked: false },
    ] }
  ];