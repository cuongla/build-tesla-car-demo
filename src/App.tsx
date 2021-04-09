import React, { useState } from 'react';
import { initialConfig, models } from './data';
import './App.css';
import { IDesign, ISettings } from './interfaces/model.interface';

// components
import Menu from './components/Menu';
import Footer from './components/Footer';
import Settings from './components/Settings';
import Summary from './components/Summary';
import Preview from './components/Preview';
import InteriorPreview from './components/InteriorPreview';

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [config, setConfig] = useState((initialConfig?.['s'] ?? null));

  // const [total, setTotal] = useState(0);
  const selectedModel = models.find(model => model?.key === config?.model);
  const steps = [
    {
      name: "car",
      settings: [
        {
          label: "Select car",
          type: "text",
          prop: "model",
          options: models.map(model => ({
            value: model.key,
            label: model.name
          }))
        },
        {
          label: "Select type",
          type: "text",
          prop: "car_type",
          options: selectedModel?.types ?? [],
          disclaimer_1: "All cars have Dual Motor All-Wheel Drive, adaptive air suspension, premium interior and sound.",
          disclaimer_2: "Tesla All-Wheel Drive has two independent motors that digitally control torque to the front and rear wheels—for far better handling and traction control. Your car can drive on either motor, so you don't need to worry about getting stuck on the road."
        }
      ]
    },
    {
      name: "exterior",
      settings: [
        {
          label: "Select color",
          type: "color",
          prop: "color",
          options: selectedModel?.colors ?? []
        },
        {
          label: "Select wheels",
          type: "image",
          prop: "wheels",
          options: selectedModel?.wheels ?? []
        }
      ]
    },
    {
      name: "interior",
      settings: [
        {
          label: "Select premium interior",
          type: "text",
          prop: "interior_color",
          options: selectedModel?.interiorColors ?? []
        },
        {
          label: "Select interior layout",
          type: "text",
          prop: "interior_layout",
          options: selectedModel?.interiorLayouts ?? []
        },
      ]
    },
    {
      name: "summary"
    }
  ];

  // total price
    const basePrice = selectedModel?.types?.find(
      type => type.value === config?.car_type
    )?.price ?? 0;

    // color price
    const colorPrice = selectedModel?.colors?.find(
      (color: IDesign) => color.value === config?.color
    )?.price ?? 0;

    // wheels price
    const wheelsPrice = selectedModel?.wheels?.find(
      wheels => wheels.value === config?.wheels
    )?.price ?? 0;

    // interior colors price
    const interiorColorPrice = selectedModel?.interiorColors?.find(
      interiorColor => interiorColor.value === config?.interior_color
    )?.price ?? 0;

    // interior layout price
    const interiorLayoutPrice = selectedModel?.interiorLayouts?.find(
      interiorLayout => interiorLayout.value === config?.interior_layout
    )?.price ?? 0;

    const totalPrice = (basePrice + colorPrice + wheelsPrice + interiorColorPrice + interiorLayoutPrice);

  // functions 
  const goToStep = (step: number) => setCurrentStep(step);

  const goToPrevStep = () => {
    const newStep: number = currentStep > 0
      ? currentStep - 1
      : currentStep;

    setCurrentStep(newStep);
  };

  const goToNextStep = () => {
    const newStep = currentStep < steps.length - 1
      ? currentStep + 1
      : currentStep;
    setCurrentStep(newStep);
  };

  const handleChangeModel = (model: 's' | 'x' | 'y') => setConfig(initialConfig[model]);

  const handleOnSelectOption = (prop: string, value: any) => {
    if (prop === "model") {
      handleChangeModel(value);
    }
    else {
      setConfig(prevState => ({
        ...prevState,
        [prop]: value
      }));
    }
  };


  // check current step
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  return (
    <div className="app">
      <Menu
        items={steps.map(step => step.name)}
        selectedItem={currentStep}
        onSelectItem={goToStep}
      />
      <main className="app-content">
        {
          steps[currentStep]?.name === "interior" ? (
            <InteriorPreview
              interior={selectedModel?.interiorColors.find(
                interiorColor => interiorColor.value === config.interior_color
              )}
            />
          ) : (
            <Preview
              config={config}
              models={models}
              showAllModels={isFirstStep}
              showSpecs={!isLastStep}
              onChangeModel={handleChangeModel}
            />
          )
        }
        {
          isLastStep ? (
            <Summary
              config={config}
              models={models}
              totalPrice={totalPrice}
            />
          ) : (
            <Settings
              config={config}
              settings={steps[currentStep].settings as ISettings[]}
              onSelectOption={handleOnSelectOption}
            />
          )
        }
      </main>
      <Footer
        totalPrice={totalPrice}
        disablePrev={isFirstStep}
        disableNext={isLastStep}
        onClickPrev={goToPrevStep}
        onClickNext={goToNextStep}
      />
    </div>
  )
}

export default App;
