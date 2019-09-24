import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

export default compose(
  firestoreConnect(['tests', 'customers', 'charities', 'transactions'])
);
