import React from 'react';

import { LeftPanel } from '../components/leftPanel';

export const HomePage = () => {
  return (
    <div className="bg-gray-200 container mx-auto flex flex-col lg:flex-row">
      <div className="lg:w-3/4">
        <LeftPanel />
      </div>
    </div>
  );
};
