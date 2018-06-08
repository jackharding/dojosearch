import React from 'react';
import GoogleAnalytics from 'react-ga';

//GoogleAnalytics.initialize('UA-109445151-1');

const withAnalytics = (WrappedComponent) => {
    const trackPage = (page) => {
        if( process.env.NODE_ENV !== 'production' ) return;
        GoogleAnalytics.set({ page });
        GoogleAnalytics.pageview(page);
    };

    return (props) => {
        const page = props.location.pathname;
        trackPage(page);

        return (
            <WrappedComponent {...props} />
        );
    };

};

export default withAnalytics;