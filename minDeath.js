const minDeath = (people) => {
    const map = {};
  
    for (let person of people) {
      const by = person.birthYear;
      const dy = person.deathYear;
      if (by in map) {
        map[by] += 1;
      } else {
        map[by] = 1;
      }
      
      if ((dy) in map) {
        map[dy] -= 1;
      } else {
        map[dy] = -1;
      }
    }
  
    let currentPopulation = 0;
    let maxPopulation = [0, 0];
    
    for (const year in map) {
      if (map[year] > 0) {
        currentPopulation += map[year];
      } else if (map[year] < 0) {
        currentPopulation += map[year];
      }
      
      if (maxPopulation[1] < currentPopulation) {
        maxPopulation[1] = currentPopulation;
        maxPopulation[0] = year;
      }
    }
    
  
    return maxPopulation[0];
  }