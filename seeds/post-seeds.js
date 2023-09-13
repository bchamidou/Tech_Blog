const { Post } = require('../models');

const postData = [
  {
    title: 'Artificial Intelligence',
    content: 'It has already transformed various industries, including healthcare, finance, and marketing.',
    user_id: 1
    
  },
  {
    title: 'Why web responsive development is import',
    content: 'It allows developers to develop amazing product.',
    user_id: 2
  },
  {
    title: 'New technology',
    content: 'Several new technology tools reel improuve web develpment today.',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
