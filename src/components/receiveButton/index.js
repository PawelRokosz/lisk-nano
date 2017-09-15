import { connect } from 'react-redux';
import copy from 'copy-to-clipboard';

import { dialogDisplayed } from '../../actions/dialog';
import { successToastDisplayed } from '../../actions/toaster';
import ReceiveButton from './receiveButton';

const mapStateToProps = state => ({
  account: state.account,
});

const mapDispatchToProps = dispatch => ({
  successToast: data => dispatch(successToastDisplayed(data)),
  setActiveDialog: data => dispatch(dialogDisplayed(data)),
  copyToClipboard: (...args) => copy(...args),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReceiveButton);
