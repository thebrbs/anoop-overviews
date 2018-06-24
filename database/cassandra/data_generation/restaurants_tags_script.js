const tags = [
  'Banquet',
  'Bar Dining',
  'Business Meals',
  'Casual',
  'Creative Cuisine',
  'Corkage Fee',
  'Fit For Foodies',
  'Fun',
  'Full Bar',
  'Good For A Date',
  'Good For Birthdays',
  'Good For Groups',
  'Great For Brunch',
  'Great For Lunch',
  'Healthy',
  'Neighborhood Gem',
  'Non-Smoking',
  'Quick Bite',
  'People Watching',
  'Special Occasion',
  'Wheelchair Access',
];

const getRandomTagNum = () => Math.floor(Math.random() * (tags.length));

const getRandomTagVotes = () => Math.floor(Math.random() * 150) + 1;

module.exports.generateTagsRestaurants = (rest_id) => {
  const result = {};
  let tagsCount = getRandomTagNum() || 1;
  let randomIdx;
  let randomTag;
  while (tagsCount !== 0) {
    randomIdx = getRandomTagNum();
    randomTag = tags[randomIdx];
    if (!result[randomTag]) {
      result[randomTag] = `${rest_id}|${randomIdx + 1}|${randomTag}|${getRandomTagVotes()}`;
      tagsCount--;
    }
  }
  return Object.values(result).join('\n');
};
