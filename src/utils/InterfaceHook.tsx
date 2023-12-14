import { createContext, useCallback, useContext, useState } from 'react';
import type { ReactNode, FC } from 'react';

interface IHeaderStates{
  showBackground: boolean;
  menuColor: string;
}

interface IFooterStates{
  isVisible: boolean;
}

interface IInterfaceContext {
  switchHeaderState: (state: IHeaderStates) => void;
  headerState: IHeaderStates;
  footerState: IFooterStates;
  showFooter: () => void;
  hideFooter: () => void;
}

const InterfaceContext = createContext<IInterfaceContext>({} as IInterfaceContext);

const InterfaceProvider: FC<ReactNode> = ({ children }) => {
  const [headerState, setHeaderState] = useState<IHeaderStates>({
    showBackground: false,
    menuColor: '#000',
  });

  const [footerState, setFooterState] = useState<IFooterStates>({ isVisible: true });

  const switchHeaderState = useCallback((newState: IHeaderStates) => {
    setHeaderState(newState);
  }, []);

  const showFooter = (): void => {
    setFooterState({
      isVisible: true
    })
  }

  const hideFooter = (): void => {
    setFooterState({
      isVisible: false
    })
  }

  return (
    <InterfaceContext.Provider value={{ switchHeaderState, headerState, footerState, showFooter, hideFooter }}>
      {children}
    </InterfaceContext.Provider>
  )
}

function useInterface(): IInterfaceContext {
  const context = useContext(InterfaceContext);

  if (context === null) {
    throw new Error('Context must be used inside Interface Provider');
  }

  return context;
};

export { InterfaceProvider, useInterface } 