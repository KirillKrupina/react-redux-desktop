import React from 'react';

const DesktopIconsServiceContext = React.createContext();

export const DesktopIconsServiceProvider = DesktopIconsServiceContext.Provider;
export const DesktopIconsServiceConsumer = DesktopIconsServiceContext.Consumer;

export default DesktopIconsServiceContext;