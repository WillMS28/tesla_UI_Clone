import React, { useState, useRef, useCallback } from "react";

import ModelsContext ,{ CarModel } from "../ModelsContext";

import ModelOverlay from '../ModelOverlay'

import { Container, OverlaysRoot } from './styles'

const ModelsWrapper: React.FC = ({ children }) => {
  const WrapperRef = useRef<HTMLDivElement>(null)

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels(state => [...state, model])
  }, [])

  const unregisterModel = useCallback((modelName:  string) => {
    setRegisteredModels(state => state.filter(model => model.modelName !== modelName))
  }, [])

  const getModelByName = useCallback((modelName: string) => {
    return registeredModels.find(item => item.modelName === modelName) || null
  }, [registeredModels])

  return (
    <ModelsContext.Provider
      value={{
        WrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName
      }}
    >
      <Container ref={WrapperRef}>
        <OverlaysRoot>
          {registeredModels.map(item => (
            <ModelOverlay key={item.modelName} model={item}>{item.overlayNode}</ModelOverlay>
          ))} 
        </OverlaysRoot>

        {children}
      </Container>
    </ModelsContext.Provider>
  )
}

export default ModelsWrapper