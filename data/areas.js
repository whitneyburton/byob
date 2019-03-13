const areas = [
  {
    area: 'Icicle Creek',
    state: 'Washington',
    bestSeason: 'Spring',
    totalBoulders: 292,
    areaPercentage: 35.4,
    nearestCity: 'Leavenworth'
  },
  {
    area: 'Gold Bar',
    state: 'Washington',
    bestSeason: 'Summer',
    totalBoulders: 181,
    areaPercentage: 98.4,
    nearestCity: 'Gold Bar'
  },
  {
    area: 'Index',
    state: 'Washington',
    bestSeason: 'Summer',
    totalBoulders: 62,
    areaPercentage: 10.3,
    nearestCity: 'Index'
  },
  {
    area: 'Joes Valley',
    state: 'Utah',
    bestSeason: 'Spring',
    totalBoulders: 543,
    areaPercentage: 98.2,
    nearestCity: 'Orangeville'
  },
  {
    area: 'Moes Valley',
    state: 'Utah',
    bestSeason: 'Spring',
    totalBoulders: 403,
    areaPercentage: 30.8,
    nearestCity: 'Saint George'
  },
  {
    area: 'Moab',
    state: 'Utah',
    bestSeason: 'Fall',
    totalBoulders: 187,
    areaPercentage: 6.5,
    nearestCity: 'Moab'
  },
  {
    area: 'Little Cottonwood Canyon',
    state: 'Utah',
    bestSeason: 'Summer',
    totalBoulders: 308,
    areaPercentage: 22.6,
    nearestCity: 'Sandy'
  },
  {
    area: 'Nine Mile Hill',
    state: 'Colorado',
    bestSeason: 'Spring',
    totalBoulders: 1908,
    areaPercentage: 97.4,
    nearestCity: 'Grand Junction'
  },
 {
    area: 'Alderfer Park',
    state: 'Colorado',
    bestSeason: 'Summer',
    totalBoulders: 358,
    areaPercentage: 97.3,
    nearestCity: 'Evergreen'
  },
  {
    area: 'Rocky Mountain National Park',
    state: 'Colorado',
    bestSeason: 'Summer',
    totalBoulders: 140,
    areaPercentage: 16.2,
    nearestCity: 'Estes Park'
  },
  {
    area: 'Mt. Evans',
    state: 'Colorado',
    bestSeason: 'Summer',
    totalBoulders: 126,
    areaPercentage: 26.2,
    nearestCity: 'Idaho Springs'
  },
  {
    area: 'Horsetooth Reservoir',
    state: 'Colorado',
    bestSeason: 'Fall',
    totalBoulders: 201,
    areaPercentage: 62.2,
    nearestCity: 'Ft Collins'
  },
  {
    area: 'Poudre Canyon',
    state: 'Colorado',
    bestSeason: 'Summer',
    totalBoulders: 340,
    areaPercentage: 37.7,
    nearestCity: 'Ft Collins'
  },
  {
    area: 'Hueco Tanks',
    state: 'Texas',
    bestSeason: 'Winter',
    totalBoulders: 497,
    areaPercentage: 90.4,
    nearestCity: 'El Paso'
  },
  {
    area: 'Enchanted Rock',
    state: 'Texas',
    bestSeason: 'Winter',
    totalBoulders: 129,
    areaPercentage: 30.7,
    nearestCity: 'Fredericksburg'
  },
  {
    area: 'Vedauwoo',
    state: 'Wyoming',
    bestSeason: 'Summer',
    totalBoulders: 298,
    areaPercentage: 25.4,
    nearestCity: 'Laramie'
  },
  {
    area: 'Red Rocks',
    state: 'Nevada',
    bestSeason: 'Spring',
    totalBoulders: 380,
    areaPercentage: 14.7,
    nearestCity: 'Las Vegas'
  },
  {
    area: 'Joshua Tree',
    state: 'California',
    bestSeason: 'Winter',
    totalBoulders: 1140,
    areaPercentage: 99.7,
    nearestCity: 'Palm Springs'
  },
  {
    area: 'The Tramway',
    state: 'California',
    bestSeason: 'Summer',
    totalBoulders: 469,
    areaPercentage: 99.4,
    nearestCity: 'Palm Springs'
  },
  {
    area: 'Wine Country',
    state: 'California',
    bestSeason: 'Winter',
    totalBoulders: 268,
    areaPercentage: 41.9,
    nearestCity: 'San Francisco'
  },
  {
    area: 'Horse Flats',
    state: 'California',
    bestSeason: 'Spring',
    totalBoulders: 249,
    areaPercentage: 86.2,
    nearestCity: 'Los Angeles'
  },
  {
    area: 'Bishop',
    state: 'California',
    bestSeason: 'Fall',
    totalBoulders: 1290,
    areaPercentage: 49.9,
    nearestCity: 'Bishop'
  },
  {
    area: 'Mammoth Lakes',
    state: 'California',
    bestSeason: 'Summer',
    totalBoulders: 363,
    areaPercentage: 99.7,
    nearestCity: 'Mammoth Lakes'
  },
  {
    area: 'Yosemite Valley',
    state: 'California',
    bestSeason: 'Fall',
    totalBoulders: 210,
    areaPercentage: 21.9,
    nearestCity: 'Mariposa'
  },
  {
    area: 'Lake Tahoe',
    state: 'California',
    bestSeason: 'Summer',
    totalBoulders: 564,
    areaPercentage: 20.4,
    nearestCity: 'Sacramento'
  },
  {
    area: 'Stone Fort',
    state: 'California',
    bestSeason: 'Winter',
    totalBoulders: 299,
    areaPercentage: 99.3,
    nearestCity: 'Chattanooga'
  },
  {
    area: 'Pocatello',
    state: 'Idaho',
    bestSeason: 'Fall',
    totalBoulders: 191,
    areaPercentage: 99,
    nearestCity: 'Pocatello'
  },
  {
    area: 'Squamish',
    state: 'British Columbia',
    bestSeason: 'Summer',
    totalBoulders: 251,
    areaPercentage: 17.9,
    nearestCity: 'Squamish'
  },
  {
    area: 'Arrow Lake',
    state: 'British Columbia',
    bestSeason: 'Summer',
    totalBoulders: 388,
    areaPercentage: 100,
    nearestCity: 'Nelson'
  },
  {
    area: 'Foothills',
    state: 'New Mexico',
    bestSeason: 'Winter',
    totalBoulders: 214,
    areaPercentage: 99.5,
    nearestCity: 'Albuquerque'
  }
];

module.exports = areas;