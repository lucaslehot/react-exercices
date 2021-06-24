import React from "react";
import Layout from "../_lib/Layout";
import NumberPicker from "./NumberPicker";

interface Props { }

export const Exercice3: React.FunctionComponent<Props> = () => {
  return (
    <Layout title='Exercice 3: composition using the "render props" pattern'>
      <NumberPicker />
    </Layout>
  );
};
