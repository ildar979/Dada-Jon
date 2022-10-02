import React, { useState } from 'react';

const Categories = () => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const [activCategory, setActiveCategory] = useState(0);

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            onClick={() => setActiveCategory(index)}
            className={activCategory === index ? 'active' : ''}
            key={index}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
