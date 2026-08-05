"""
MedAI Platform — FastAPI Backend
Phase 1 skeleton: routes, models, DB config

⚠️  PROTOTYPE: Not for clinical use.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="MedAI Hospital Intelligence Platform",
    description="AI-powered ICU early warning, resource forecasting, XAI, and digital twin.",
    version="0.1.0",
)

# Allow React dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["Health"])
async def root():
    return {"status": "ok", "service": "MedAI Platform", "version": "0.1.0"}


@app.get("/health", tags=["Health"])
async def health():
    return {"status": "healthy"}


# ---- Placeholder routers (implemented in Phase 2–6) ---- #
# from app.api import patients, predictions, resources, websocket
# app.include_router(patients.router,    prefix="/api/patients",    tags=["Patients"])
# app.include_router(predictions.router, prefix="/api/predictions", tags=["Predictions"])
# app.include_router(resources.router,   prefix="/api/resources",   tags=["Resources"])
# app.include_router(websocket.router,   prefix="/ws",              tags=["WebSocket"])
