# EduQuest

EduQuest is a website of educational browser games, built by the EduQuest team in [Open Project](https://openprojectberkeley.com/) at UC Berkeley.

## Games

- **Formula 1 + 1**: a math race. Answer addition and subtraction questions to move your car past the opponent.
- **MapQuest**: geography quizzes on continents, US states and the countries of each continent, against a timer.
- **WordQuest**: a crossword with clues at four difficulty levels.
- **Moski's Spelling Adventure**: fill in the missing word in a sentence to help Oski climb the hill, with hints after wrong answers.

## Stack

- `frontend/`: Next.js 15, React 18, Tailwind CSS and MUI
- `backend/`: FastAPI service that turns questions and words into speech with [LMNT](https://www.lmnt.com/)

## Run it locally

```bash
cd frontend
npm install
npm run dev
```

Then open http://localhost:3000. The games run without the backend; you only lose the spoken audio.

To turn on voice audio, put an `LMNT_API_KEY` in `backend/.env` and start the API on port 8000:

```bash
cd backend
pipenv install
pipenv run python api.py
```
