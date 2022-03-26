import compose from 'compose-function';

import withReactquery from './withReactQuery';
import withRouter from './withRouter';
import withMantine from './withMantine';

export const withHocs = compose(withRouter, withReactquery, withMantine);
