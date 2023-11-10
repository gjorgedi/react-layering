import { useContext } from "react";
import { DependenciesContext } from "../context/context";

export const useDependencies = () => useContext(DependenciesContext);
