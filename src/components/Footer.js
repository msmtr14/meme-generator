import React from 'react';
import { Panel } from 'react-bootstrap';

const FooterLayout = () => {
    return (
        <Panel bsStyle="primary">
            <Panel.Heading>
                <a href="http://leomohi.xyz" target="_blank">
                    Design & Developed by Mohit Singh Baghel
                </a>
            </Panel.Heading>
        </Panel>        
    );
};

export default FooterLayout;