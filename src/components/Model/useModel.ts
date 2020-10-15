import { useCallback, useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

export default function useModel(modelName: string) {
  const { registerModel, unregisterModel, getModelByName } = useContext(
    ModelsContext
  );

  const getModel = useCallback(() => getModelByName(modelName), [
    getModelByName,
    modelName,
  ]);
  useEffect(() => {
    return () => unregisterModel(modelName);
  }, [modelName, unregisterModel]);

  return { registerModel, getModel };
}
