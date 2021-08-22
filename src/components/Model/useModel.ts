import { useCallback, useContext, useEffect } from "react";

import ModelsContext from "./ModelsContext";

export default function useModel(modelName: string) {
  const { registerModel, unregisterModel, getModelByName } = useContext(ModelsContext)

  // defazendo o model ao sair da tela
  useEffect(() => () => unregisterModel(modelName), [
    modelName, unregisterModel
  ])

  const getModel = useCallback(() => getModelByName(modelName), [getModelByName, modelName])

  return { registerModel, getModel }
}