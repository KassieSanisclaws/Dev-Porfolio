import AppTheme from "../theme/AppTheme";

export const skillMetrics = [
  'Frontend',
  'Backend',
  'Mobile',
  'DevOps',
  'Database',
  'UI/UX',
  'Game Dev',
  'Git Version Control',
];

export const radarSeries = [
  {
    id: 'kadeem',
    label: 'My Proficiency',
    data: [8, 7, 6, 5, 7, 8, 9, 8],
    color: AppTheme.palette.primary.light,
    valueFormatter: (v: number | null) => `${v}/10`,
  },
  {
    id: 'target',
    label: 'Target Skill Level',
    data: [10, 9, 8, 7, 9, 10, 10, 9],
    color: AppTheme.palette.primary.dark,
    valueFormatter: (v: number | null) => `${v}/10`,
  },
];

export const radar = {
  metrics: skillMetrics,
};