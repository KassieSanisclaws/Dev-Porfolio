import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { SkillCategory } from '../../helpers/SkillsData';

interface Props {
    category: SkillCategory;
}

const FlippingSkillCard = ({ category }: Props) => {
   const [isFlipped, setIsFlipped] = React.useState(false);

    return (
        <Box
      sx={{
        perspective: 1000,
        '&:hover .flip': {
          transform: 'rotateY(180deg)',
        }
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <Box
        className="flip"
        sx={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          position: 'relative',
        }}
      >
        {/* Front */}
        <Card
          sx={{
            backfaceVisibility: 'hidden',
            position: 'absolute',
            width: '100%',
          }}
        >
          <CardContent>
            <Typography 
               variant="h5" 
               gutterBottom
               sx={{
                  textTransform: 'uppercase',
                  color: 'primary.main',
                  fontWeight: 'bold',
                  mb: 1,
               }}>
                {category.title}
            </Typography>
            {category.skills.map(skill => (
              <Typography 
                  key={skill.name}
                  sx={{
                    fontWeight: 'bold',
                  }}>
                    {skill.name}
              </Typography>
            ))}
          </CardContent>
        </Card>

        {/* Back */}
        <Card
          sx={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            position: 'absolute',
            width: '100%',
          }}
        >
          <CardContent>
            <Typography variant="h6">Details</Typography>
            {category.skills.map(skill => (
              <Box key={skill.name} sx={{ mb: 1 }}>
                <Typography variant="subtitle2">{skill.name}</Typography>
                <Typography variant="body2">{skill.description}</Typography>
              </Box>
            ))}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default FlippingSkillCard;