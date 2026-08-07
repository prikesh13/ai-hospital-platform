# AI Hospital Platform

MedAI is a prototype hospital intelligence platform with a React/Vite frontend and FastAPI backend. It includes ICU analytics, patient management, synthetic dashboard data, and an ML model for sepsis prediction.

## Key Features

- Admin dashboard with ICU KPIs, occupancy, resource forecasts, and alerts
- Add patient workflow with backend persistence
- Sepsis prediction endpoint backed by a trained model artifact
- Data processing for PhysioNet ICU records and training dataset generation
- Modern React UI with page routing and custom theme styles

## Repository Structure

- `backend/`
  - `app/main.py` - FastAPI backend with health, prediction, and patient endpoints
- `data/`
  - `process_physionet.py` - converts raw PhysioNet `.psv` files into frontend and training data
  - `train_model.py` - trains a `RandomForestClassifier`, evaluates it, and saves `sepsis_model.joblib`
  - `raw/` - downloaded PhysioNet raw patient files
- `frontend/`
  - `package.json` - frontend dependencies and scripts
  - `src/` - React application source
  - `index.css` - shared app styling

## Prerequisites

- Node.js 18+ and npm
- Python 3.10+ (or compatible Python 3 version)
- `pip` for Python dependencies

## Backend Setup

1. Install Python dependencies:

```bash
cd backend
pip install -r ../requirements.txt
```

2. Start the backend server:

```bash
cd backend
python3 -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The backend will be available at `http://localhost:8000`.

## Frontend Setup

1. Install frontend dependencies:

```bash
cd frontend
npm install
```

2. Run the frontend in development mode:

```bash
cd frontend
npm run dev
```

By default, Vite serves the app on `http://localhost:5173` or a similar local port.

## Training the Prediction Model

The backend expects a model artifact at `data/sepsis_model.joblib`.

1. Ensure training data exists at `data/train_data.csv`.
2. Run training:

```bash
cd data
python3 train_model.py
```

3. If training succeeds, the model artifact is saved to `data/sepsis_model.joblib`.

## Processing PhysioNet Data

If raw PhysioNet records are available in `data/raw/`, you can regenerate the frontend dataset and training CSV using:

```bash
cd data
python3 process_physionet.py
```

This script extracts patient features, heuristics, and synthetic dashboard values to support the app.

## API Endpoints

- `GET /` - basic health check
- `GET /health` - service health status
- `POST /predict` - predict sepsis probability using numeric ICU features
- `GET /api/patients` - list manually added patients
- `POST /api/patients` - add and persist a patient record

## Notes

- This project is a prototype and not for clinical use.
- The backend currently stores manually added patients in `data/patients_manual.json`.
- The prediction pipeline uses a `RandomForestClassifier` saved with `joblib`.

## Recommended Workflow

1. Start the backend server.
2. Start the frontend dev server.
3. Open the frontend in the browser and navigate the admin dashboard.
4. Use the add-patient modal to create new records, which are stored on disk.

## License

This repository does not include a license file. Use and modify the code as needed for development and evaluation.
