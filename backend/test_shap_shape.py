import joblib
import shap
import numpy as np

artifact = joblib.load("data/sepsis_model.joblib")
model = artifact["model"]
explainer = shap.TreeExplainer(model)
dummy = np.zeros((1, 28))
s = explainer.shap_values(dummy)
print(type(s))
if isinstance(s, list):
    print("List of length:", len(s))
    print("Element shape:", s[0].shape)
else:
    print("Array shape:", s.shape)
