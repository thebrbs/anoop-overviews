const faker = require('faker');
const hipsum = require('hipsteripsum');

const priceRange = [
  '$30 and under',
  '$31 to $50',
  '$50 and over',
];

const generatePriceRange = () => priceRange[Math.floor(Math.random() * 3)];

const diningStyles = [
  'Buffet',
  'Casual dining',
  'Fast casual',
  'Fast food',
  'Fine dining',
  'Premium casual',
];

const generateDiningStyle = () => diningStyles[Math.floor(Math.random() * 6)];

const cuisines = [
  'American',
  'California',
  'Chinese',
  'French',
  'Italian',
  'Mexican',
  'Indian',
  'Japanese',
  'Thai',
];

const generateCuisine = () => cuisines[Math.floor(Math.random() * 9)];

const hoursBrkfstOpen = [
  '06:00am',
  '06:30am',
  '07:00am',
  '07:30am',
  '08:00am',
  '08:30am',
  '09:00am',
];

const hoursBrkfstClose = [
  '10:00am',
  '10:30am',
  '11:00am',
  '11:30am',
];

const generateHoursBrkfst = () => `${hoursBrkfstOpen[Math.floor(Math.random() * 7)]} - ${hoursBrkfstClose[Math.floor(Math.random() * 4)]}`;

const hoursLunchOpen = [
  '11:30am',
  '12:00pm',
  '12:30pm',
  '01:00pm',
];

const hoursLunchClose = [
  '02:00pm',
  '02:30pm',
  '03:00pm',
  '03:30pm',
  '04:00pm',
];

const generateHoursLunch = () => `${hoursLunchOpen[Math.floor(Math.random() * 4)]} - ${hoursLunchClose[Math.floor(Math.random() * 5)]}`;

const hoursDinnerOpen = [
  '05:00pm',
  '05:30pm',
  '06:00pm',
  '06:30pm',
];

const hoursDinnerClose = [
  '08:30pm',
  '09:00pm',
  '09:30pm',
  '10:00pm',
  '10:30pm',
  '11:00pm',
  '11:30pm',
];

const generateHoursDinner = () => `${hoursDinnerOpen[Math.floor(Math.random() * 4)]} - ${hoursDinnerClose[Math.floor(Math.random() * 7)]}`;

const paymentOptions = [
  'AMEX',
  'Bitcoin',
  'Cash',
  'Discover',
  'Gold Bullion',
  'MasterCard',
  'Visa',
];

const generatePaymentOptions = (options) => {
  let result = [];
  let randNum = Math.floor(Math.random() * 7);
  while (options !== 0) {
    result.push(paymentOptions[randNum]);
    // str += `${paymentOptions[randNum]} ,`;
    options--;
    randNum = randNum === 0 ? 6 : randNum - 1;
  }
  return result.join(', ');
}

const dressCodes = [
  'Business Casual',
  'Casual',
  'Casual Elegant',
  'Formal',
  'Jacket Required',
];

const generateDressCode = () => dressCodes[Math.floor(Math.random() * 5)];

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

const generateTagsRestaurants = (rest_id) => {
  const mem = {};
  const result = [];
  let tagsCount = getRandomTagNum() || 1;
  let randomIdx;
  let randomTag;
  while (tagsCount !== 0) {
    randomIdx = getRandomTagNum();
    randomTag = tags[randomIdx];
    if (!mem[randomTag]) {
      mem[randomTag] = true;
      result.push(`{tagName: '${randomTag}', voteCount: ${getRandomTagVotes()}}`);
      tagsCount--;
    }
  }
  return result.join(',');
}

module.exports.generateOverview = (id = 1) => {
  return `(${[
  // rest_id
    id,
  // rest_name
    `'${hipsum.getWords(Math.floor(Math.random() * 3) + 1).replace(/\b\w/g, l => l.toUpperCase())}'`,
  // price_range
    `'${generatePriceRange()}'`,
  // description
    `'${hipsum.get(1)}'`,
  // dining_style
    `'${generateDiningStyle()}'`,
  // cuisine
    `'${generateCuisine()}'`,
  // tot_rating
    Math.floor(Math.random() * 500) + 80,
  // avg_rating
    Math.floor(Math.random() * 5) + 1,
  // hours_of_operation
    `{breakfast: '${generateHoursBrkfst()}', lunch: '${generateHoursLunch()}', dinner: '${generateHoursDinner()}'}`,
  // phone_number
    `'${faker.phone.phoneNumber()}'`,
  // website
    `'${faker.internet.url()}'`,
  // payment_options
    `'${generatePaymentOptions(Math.floor(Math.random() * 7) + 1)}'`,
  // dress_code
    `'${generateDressCode()}'`,
  // executive_chef
    `'${faker.name.findName()}'`,
  // location
    `{lat: '${faker.address.latitude()}', lng: '${faker.address.longitude()}'}`,
  // parking_details
    `'${hipsum.getWords(1).replace(/\b\w/g, l => l.toUpperCase())} ${hipsum.getWords(Math.floor(Math.random() * 10) + 5)}.'`,
  // public_transit
    `'${hipsum.getWords(1).replace(/\b\w/g, l => l.toUpperCase())} ${hipsum.getWords(Math.floor(Math.random() * 10) + 5)}.'`,
    //tags
    `[${generateTagsRestaurants(id)}]`,
  ]
  .join(', ')})`;
};
