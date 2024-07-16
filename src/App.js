import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css";                                //prime flex

import React, { useState } from "react";
import { FormProvider, useForm } from 'react-hook-form';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';

import axios from "axios";

import CardsCarousel from './components/CardsCarousel.jsx';
import GameSettings from './components/GameSettings.jsx';
import Heading from './components/Heading.jsx';
import { ButtonHolder, Card } from './App.style.js';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [result, setResult] = useState([]);

  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      playerName: 'Test',
      handSize: 5,
      shuffleType: 0,
      shuffleCount: 10,
    }
  });

  const { handleSubmit } = methods;

  const dealCards = (values) => {
    setLoading(true);

    const { playerName,
      handSize,
      shuffleType,
      shuffleCount, } = values;

    axios.get(`http://localhost:3000/play/${playerName}/${handSize}/${shuffleType}/${shuffleCount}`)
      .then(({ data }) => {
        setCards(data.cards);
        setResult(data.result);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      })
      .finally(() => {
        setLoading(false);
      });
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

      {!loading && cards.length > 0 && <CardsCarousel cards={cards} result={result} />}
    </Card>
  );
}

export default App;
