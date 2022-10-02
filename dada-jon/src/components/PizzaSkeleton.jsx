import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaSkeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="130" cy="120" r="120" />
    <rect x="0" y="249" rx="5" ry="5" width="280" height="24" />
    <rect x="0" y="288" rx="10" ry="10" width="280" height="82" />
    <rect x="0" y="388" rx="8" ry="8" width="90" height="27" />
    <rect x="116" y="380" rx="20" ry="20" width="156" height="45" />
  </ContentLoader>
);

export default PizzaSkeleton;
