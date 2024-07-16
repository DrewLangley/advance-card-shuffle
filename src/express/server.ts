import express, { Application, Request, Response } from "express";
import cors from "cors";
import { play } from "helpers/game";

/**
 * runs the express server for dealing and evaluating hands for FE app
 * started from command line using `yarn start:api` command
 */

const app: Application = express();
const port = 3000;

app.use(cors());

app.get('/play/:name/:hand/:shuffleType/:shuffleCount', async (req: Request, res: Response) => {
  const { name, hand, shuffleType, shuffleCount } = req.params;

  const result = await play(name, Number(hand), Number(shuffleType), Number(shuffleCount));

  res.status(200).send(result);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default { app };