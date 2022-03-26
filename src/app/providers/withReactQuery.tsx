import React, {Component} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

const withReactquery = (component: Component) => () =>
    (
        <QueryClientProvider client={queryClient}>
            {/*@ts-ignore */}
            {component()}
        </QueryClientProvider>
    );

export default withReactquery;
