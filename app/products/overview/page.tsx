'use client';

import { ReactNode } from 'react';

interface OverviewProps {
  children: ReactNode;
}

const Overview = ({ children }: OverviewProps) => {
  return <div>{children}</div>;
};

export default Overview;
