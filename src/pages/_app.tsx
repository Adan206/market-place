import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { NavBar } from "~/components/navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <div className="text-white">
        <NavBar />
        <Component {...pageProps} />;
      </div>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
