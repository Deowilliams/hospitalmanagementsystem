import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 167, label: 'BOOKED' ,color:"white"},
  { id: 1, value: 54, label: 'VACANCY' ,color:"rgb(116, 229, 173)"},
  { id: 2, value: 289, label: 'ONGOING' ,color:"rgb(53, 150, 113)"},
];

export default function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={350}
    />
  );
}
