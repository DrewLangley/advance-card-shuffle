import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css";                                //prime flex

import React, { useState } from "react";
import { FormProvider, useForm } from 'react-hook-form';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';

import Card from './components/Card.jsx';
import CardsCarousel from './components/CardsCarousel.jsx';
import GameSettings from './components/GameSettings.jsx';
import Heading from './components/Heading.jsx';
import ButtonHolder from './App.style.js';
import './App.css';

import play from "./helpers/game.ts";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      playerName: 'Test',
      handSize: 5,
      shuffleType: 'Faro',
      shuffleCount: 10,
    }
  });



  const { handleSubmit } = methods;

  const dealCards = (values) => {
    console.log('values: ', values);
    setLoading(true);

    const { playerName,
      handSize,
      shuffleType,
      shuffleCount, } = values;


    const results = play(playerName, handSize, shuffleType, shuffleCount);
    console.log('results: ', results);
    // const payload = {
    //   ...values,
    //   archived: values.status === 'Inactive',
    //   email: values.email.toLowerCase(),
    // };

    // delete payload.status;
    // createFinancialAdviser(payload)
    //   .then(() => {
    //     Notification.success({
    //       title: 'Success',
    //       message: 'User has been successfully created.',
    //     });
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //     close(true);
    //   });
  };


  return (
    <Card>
      <Heading />

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(dealCards)}>
          <Accordion>
            <AccordionTab header="Game Settings">
              <GameSettings />
            </AccordionTab>

          </Accordion>
          <ButtonHolder className="row grid">
            <Button label="Deal Cards" loading={loading} loadingIcon="pi pi-spin pi-sun" />
          </ButtonHolder>
        </form>
      </FormProvider>

      {!loading && cards.length > 0 && <CardsCarousel />}
    </Card>
  );
}

export default App;
