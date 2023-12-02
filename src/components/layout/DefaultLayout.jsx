import React from 'react';
import styled from 'styled-components';

function DefaultLayout(props) {
	return <Layout>{props.children}</Layout>;
}

const Layout = styled.main`
	width: 100%;
	margin: 0 auto;
`;

export default DefaultLayout;
