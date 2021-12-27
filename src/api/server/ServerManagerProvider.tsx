import React from "react"
import ServerManager from "./ServerManager"

interface ServerManagerProviderProps {
   children: React.ReactNode
}

const serverManager = new ServerManager()
const AxiosProviderStateContext = React.createContext(serverManager)

function ServerManagerProvider(props: ServerManagerProviderProps): JSX.Element {
   return (
      <AxiosProviderStateContext.Provider value={serverManager}>
         {props.children}
      </AxiosProviderStateContext.Provider>
   )
}

function useServerManager(): ServerManager {
   const context = React.useContext(AxiosProviderStateContext)
   if (context === undefined) {
      throw new Error("useServerManager must be used within a ServerManagerProvider")
   }
   return context
}

function withServerManager(
   WrappedComponent: typeof React.Component
): React.ElementType {
   return class ServerManager extends React.Component {
      static contextType = AxiosProviderStateContext

      render() {
         return <WrappedComponent serverManager={this.context} {...this.props} />
      }
   }
}

export default ServerManagerProvider

export { ServerManagerProvider, useServerManager, withServerManager }
