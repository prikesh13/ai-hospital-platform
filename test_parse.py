import os
import sys
import glob
import random
import traceback
BASE_DIR = os.path.abspath(".")
sys.path.append(os.path.join(BASE_DIR, "data"))
import process_physionet
RAW_DIR = os.path.join(BASE_DIR, "data", "raw")

psv_files = sorted(glob.glob(os.path.join(RAW_DIR, "*.psv")))
print(f"Found {len(psv_files)} files")
rng = random.Random(42)
for psv_path in psv_files[:1]:
    pid = os.path.basename(psv_path).replace(".psv", "")
    cols = process_physionet.parse_psv(psv_path)
    try:
        row = process_physionet.make_training_row(pid, cols)
        features = [row[f] if row[f] is not None else 0.0 for f in process_physionet.NUMERIC_FEATURES]
        pat = process_physionet.make_patient(pid, cols, rng)
        print("Success for", pid)
    except Exception as e:
        traceback.print_exc()
