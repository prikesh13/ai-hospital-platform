#!/usr/bin/env python3
"""
download_physionet.py
Downloads 200 patient PSV files from PhysioNet 2019 Sepsis Challenge
using parallel requests for speed.

Dataset: https://physionet.org/content/challenge-2019/1.0.0/
License: Open Access
"""

import os
import time
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed

BASE_URL = "https://physionet.org/files/challenge-2019/1.0.0/training/training_setA/"
OUT_DIR  = os.path.join(os.path.dirname(__file__), "raw")
N_FILES  = 200
MAX_WORKERS = 10

os.makedirs(OUT_DIR, exist_ok=True)

def download_one(i: int) -> tuple[int, bool, str]:
    fname  = f"p{i:06d}.psv"
    url    = BASE_URL + fname
    out    = os.path.join(OUT_DIR, fname)
    if os.path.exists(out):
        return i, True, "cached"
    try:
        urllib.request.urlretrieve(url, out)
        return i, True, "ok"
    except Exception as e:
        return i, False, str(e)

print(f"Downloading {N_FILES} patient PSV files → {OUT_DIR}")
t0 = time.time()

results = {"ok": 0, "cached": 0, "fail": 0}
with ThreadPoolExecutor(max_workers=MAX_WORKERS) as pool:
    futures = {pool.submit(download_one, i): i for i in range(1, N_FILES + 1)}
    for fut in as_completed(futures):
        idx, ok, msg = fut.result()
        if msg == "cached":
            results["cached"] += 1
        elif ok:
            results["ok"] += 1
            if results["ok"] % 20 == 0:
                print(f"  Downloaded {results['ok']} files…")
        else:
            results["fail"] += 1
            print(f"  ✗ p{idx:06d} — {msg}")

elapsed = time.time() - t0
total   = results["ok"] + results["cached"]
print(f"\nDone in {elapsed:.1f}s  "
      f"| new={results['ok']}  cached={results['cached']}  fail={results['fail']}  "
      f"| total files available: {total}")
