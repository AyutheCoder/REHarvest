from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
# import your ML model and preprocessing here

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For dev, restrict in prod!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    # Example: read file and run your ML model
    # image_bytes = await file.read()
    # result = your_predict_function(image_bytes)
    # return {"prediction": result}
    return {"prediction": "dummy result"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
