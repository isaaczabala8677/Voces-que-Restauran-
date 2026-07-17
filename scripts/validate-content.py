#!/usr/bin/env python3
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "knowledge" / "data" / "unit-content.json"
PUBLIC = ROOT / "docs" / "data" / "unit-content.json"


def load_json(path: Path):
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def has_sensitive_fields(value):
    if isinstance(value, dict):
        for key, item in value.items():
            lowered = key.lower()
            if lowered in {"email", "phone", "address", "phoneNumber", "studentName", "personalData", "contact", "student", "family", "guardian", "password", "token", "secret"}:
                return True
            if has_sensitive_fields(item):
                return True
    elif isinstance(value, list):
        for item in value:
            if has_sensitive_fields(item):
                return True
    elif isinstance(value, str):
        if re.search(r"[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}", value):
            return True
        if re.search(r"\b\d{7,10}\b", value):
            return True
    return False


errors = []

if not SOURCE.exists():
    errors.append(f"No existe el archivo fuente: {SOURCE}")
    sys.exit(1)

if not PUBLIC.exists():
    errors.append(f"No existe el archivo público: {PUBLIC}")
    sys.exit(1)

source_data = load_json(SOURCE)
public_data = load_json(PUBLIC)

if source_data != public_data:
    errors.append("Los archivos JSON fuente y público no coinciden.")

project = source_data.get("project", {})
if not project.get("title"):
    errors.append("El proyecto no tiene título.")
if project.get("totalHours") != 32:
    errors.append("La duración total esperada no es 32 horas.")

moments = source_data.get("learningMoments", [])
if len(moments) != 4:
    errors.append("El JSON debe contener 4 momentos.")

session_count = sum(len(moment.get("sessions", [])) for moment in moments)
if session_count != 16:
    errors.append("El JSON debe contener 16 sesiones en total.")

if has_sensitive_fields(source_data):
    errors.append("Se detectaron campos potencialmente sensibles.")

if errors:
    print("VALIDATION FAILED")
    for error in errors:
        print(f"- {error}")
    sys.exit(1)

print("VALIDATION PASSED")
print(f"- source: {SOURCE}")
print(f"- public: {PUBLIC}")
print(f"- moments: {len(moments)}")
print(f"- sessions: {session_count}")
print(f"- totalHours: {project.get('totalHours')}")
