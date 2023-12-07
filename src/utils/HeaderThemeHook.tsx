import { createContext, useCallback, useContext, useState } from 'react';
import type { ReactNode, FC } from 'react';

interface IHeaderStates{
  showBackground: boolean;
  menuColor: string;
}

interface IHeaderContext {
  switchState: (state: IHeaderStates) => void;
  state: IHeaderStates;
}

const HeaderContext = createContext<IHeaderContext>({} as IHeaderContext);

const HeaderProvider: FC<ReactNode> = ({ children }) => {
  const [state, setState] = useState<IHeaderStates>({
    showBackground: false,
    menuColor: '#000',
  });

  const switchState = useCallback((newState: IHeaderStates) => {
    setState(newState)
  }, []);

  return (
    <HeaderContext.Provider value={{ switchState, state }}>
      {children}
    </HeaderContext.Provider>
  )
}

function useHeader(): IHeaderContext {
  const context = useContext(HeaderContext);

  if (context === null) {
    throw new Error('Context must be used inside Header.Provider');
  }

  return context;
};

export { HeaderProvider, useHeader } 