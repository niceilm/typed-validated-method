interface ValidatedMethodOption {
  name?: string;
  connection?: any;
  mixins?: ((methodOptions: any) => {})[];
  run: (methodArgs?: any) => any;
  validate?: () => any;
  applyOptions?: { wait?: boolean; onResultReceived?: Function; noRetry?: boolean };
}

interface ValidatedMethodCallback {
  (err: Meteor.Error, result?: any): any;
}
/**
 * @link https://github.com/meteor/validated-method
 */
declare module 'meteor/mdg:validated-method' {
  export class ValidatedMethod {
    constructor(options: ValidatedMethodOption);

    name: string;

    // For Test
    _execute(context: any, methodArgs?: any): any;

    call(methodArgs?: any, callback?: ValidatedMethodCallback): any;
  }
}