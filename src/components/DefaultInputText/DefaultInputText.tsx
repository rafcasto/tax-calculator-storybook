import React from "react";
import TextField from '@mui/material/TextField';
import { string } from "prop-types";

interface DefaultInputTextProps {
    id?:string,
    label?:string,
    variant?: 'outlined' | 'filled' | 'standard' ,
    onchange?: (event: object) => void
} 

export const DefaultInputText = ({
    id,
    label,
    variant='standard',...props}:DefaultInputTextProps) => {
    return (<TextField  fullWidth data-testid={id}  id={id} label={label} variant={variant} />)
} 