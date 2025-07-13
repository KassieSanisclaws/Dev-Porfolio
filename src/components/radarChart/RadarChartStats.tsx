import React from 'react';
import { RadarChart } from '@mui/x-charts/RadarChart';
import { Box, Stack, ToggleButtonGroup, ToggleButton, Checkbox, FormControlLabel } from '@mui/material';
import { radar, radarSeries } from '../../helpers/SkillsRadarData';
import { HighlightItemData } from '@mui/x-charts/context';
import { RadarSeriesType } from '@mui/x-charts/models';

const RadarChartStats = () => {
    const [highlightedItem, setHighlightedItem] = React.useState<HighlightItemData | null>(null);
  const [fillArea, setFillArea] = React.useState(false);
  const [hideMark, setHideMark] = React.useState(false);

  const withOptions = (series: Omit<RadarSeriesType, 'type'>[]): RadarSeriesType[] =>
    series.map((item) => ({
      ...item,
      fillArea,
      hideMark,
      type: 'radar',
    }));

  const handleHighlightSeries = (
    _: React.MouseEvent<HTMLElement>,
    newHighlightId: string | null
  ) => {
    setHighlightedItem((prev) =>
      newHighlightId ? { ...prev, seriesId: newHighlightId } : null
    );
  };

  return (
    <Stack 
        spacing={2} 
        alignItems="center" 
        sx={{ 
          width: '100%', 
          }}>
      <ToggleButtonGroup
        value={highlightedItem?.seriesId ?? null}
        exclusive
        onChange={handleHighlightSeries}
        aria-label="Highlight series"
        size="small"
        fullWidth
      >
        {radarSeries.map((series) => (
          <ToggleButton key={series.id} value={series.id}>
            {series.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <Box sx={{ width: '100%' }}>
        <RadarChart
          height={350}
          series={withOptions(radarSeries)}
          radar={radar}
          highlight="series"
          highlightedItem={highlightedItem}
          onHighlightChange={setHighlightedItem}
        />
      </Box>
     <Stack 
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ width: '100%' }}
        alignItems="center"
        >
      <FormControlLabel
        control={
          <Checkbox
            checked={fillArea}
            onChange={(e) => setFillArea(e.target.checked)}
          />
        }
        label="Fill area"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={hideMark}
            onChange={(e) => setHideMark(e.target.checked)}
          />
        }
        label="Hide mark"
      />
      </Stack>
    </Stack>
  );
};

export default RadarChartStats;