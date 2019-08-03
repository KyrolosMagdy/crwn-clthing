import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { compose } from 'redux';

import { selectCollectionFetching } from '../../redux/shop/shop.selectors';
import withSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
	isLoading: selectCollectionFetching
});

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
