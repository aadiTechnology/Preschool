import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';

const DropDown1 = ({ ItemList, ClickItem, Label, DefaultValue}) => {
    return (
        <FormControl fullWidth variant="outlined">
            <InputLabel>{Label}</InputLabel>
            <Select
                value={DefaultValue}
                label={Label}
                onChange={(e) => ClickItem(e.target.value)}
            >

                {ItemList?.map((Item, i) => (
                    <MenuItem value={Item.Value} key={i}>
                        {Item.Name}
                    </MenuItem>
                ))}
            </Select>
    
        </FormControl>
    );
};

export default DropDown1;
