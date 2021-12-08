import isEmail from 'validator/lib/isEmail';
import { EmailValidatorProtocolFn } from './email-validator-protocol';

export const emailValidatorFnAdapter: EmailValidatorProtocolFn = (
  value: string,
): boolean => {
  return isEmail(value);
};
