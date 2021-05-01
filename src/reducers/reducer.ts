// not yet used in the code

type Action =
  | { type: 'loading' }
  | { type: 'error'; payload: any }
  | { type: 'success'; payload: any };

export const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case 'loading':
      return { status: 'loading', data: undefined, error: null };
    case 'error':
      return { status: 'error', data: undefined, error: action.payload };
    case 'success':
      return { status: 'success', data: action.payload, error: null };
    default:
      throw new Error('invalid action');
  }
};
