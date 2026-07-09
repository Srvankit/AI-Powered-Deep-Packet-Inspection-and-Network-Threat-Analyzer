import { useContext } from "react";
import { AnalysisContext } from "../context/AnalysisContext";

export function useAnalysis() {

    return useContext(AnalysisContext);

}
