"use client";
import client from "@/utils/Client";
import { ApolloProvider } from "@apollo/client";
import React, { ReactNode } from "react";

function ClientProvider({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ClientProvider;
