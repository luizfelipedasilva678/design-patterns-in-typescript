import { EmailValidatorAdapter } from './validation/email-validator-adpater';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import {
  EmailValidatorProtocol,
  EmailValidatorProtocolFn,
} from './validation/email-validator-protocol';

function validaEmail(emailValidator: EmailValidatorProtocol, email: string) {
  if (emailValidator.isEmail(email)) {
    console.log('É válido');
  } else {
    console.log('Não é válido');
  }
}

validaEmail(new EmailValidatorAdapter(), 'luizomf@gmail.com');

function validaEmailFn(
  emailValidator: EmailValidatorProtocolFn,
  email: string,
) {
  if (emailValidator(email)) {
    console.log('Válido (FN)');
  } else {
    console.log('Não é Válido (FN)');
  }
}

validaEmailFn(emailValidatorFnAdapter, 'luizomf@gmail.com');
