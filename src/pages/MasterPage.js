import React from 'react';
import { Link } from 'react-router';
import { LoginLink } from 'react-stormpath';
import DocumentTitle from 'react-document-title';

import Header from './Header';

export default class MasterPage extends React.Component {
	render() {
		return (
			<DocumentTitle title='Churro Co Sys'>
				<div className='MasterPage'>
					<Header />
					{ this.props.children }
				</div>
			</DocumentTitle>	

			);
	}
}