import { ReactNode } from "react";

import { AuthProvider } from "./Authentication";
import { PropertiesProvider } from "./Properties";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <PropertiesProvider>{children}</PropertiesProvider>
    </AuthProvider>
  );
};

export default Providers;
