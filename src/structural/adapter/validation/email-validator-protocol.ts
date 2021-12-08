export interface EmailValidatorProtocol {
  isEmail: EmailValidatorProtocolFn;
}

export interface EmailValidatorProtocolFn {
  (value: string): boolean;
}
