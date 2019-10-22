import React from 'react';
import { CampaignCard } from '../src/components/Home/HomeComponent';
import '../src/tailwind.css';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Storybook Knobs', module);


stories.add('as dynamic variables', () => {
  const name = text('Name', 'Corporação de Vilar');
  const number_of_voluntaries = number('Voluntarios', 89);

  return <div className='p-6 w-full'>
  <CampaignCard campaign={
    {
      name,
      number_of_voluntaries,
      distance: 25,
      percentage_complete: 65,
      end_date: 20,
    }
  } />
</div>;
})