import style from '../styles/LeftMarket.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

function valuetext(value: number) {
  return `${value}`;
}

export default function SliderBox() {
  const [value, setValue] = React.useState<number[]>([50, 150]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const [isOpen, setOpen] = React.useState(false);

  const toggleDropdown = () => {
    setOpen(!isOpen);
  };

  const marks = [
    {
      value: 50,
      label: '$50',
    },
    {
      value: 100,
      label: '$100',
    },
    {
      value: 150,
      label: '$150',
    },
    {
      value: 200,
      label: '$200',
    },
  ];
  return (
    <div>
      <h2 className={style.categorySubTitle} onClick={toggleDropdown}>
        By Price <i className={`uil uil-angle-up ${isOpen && 'arrowOpen'}`}></i>
      </h2>
      {isOpen && (
        <Box sx={{ width: 300 }}>
          <Typography id="input-slider" gutterBottom>
            $100.00 - $150.00
          </Typography>
          <Slider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            color="primary"
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            defaultValue={[200]}
            marks={marks}
          />
        </Box>
      )}
    </div>
  );
}
