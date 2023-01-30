import * as yup from 'yup';

export const emailSchema = yup.string().email('Please enter a valid email');
