# STRATA (by MatterLab Applied Sciences)

**Tactile Sustainable Architecture Material Specification Workbench & Embodied Carbon Library**

STRATA is an interactive architectural engineering and material specification platform designed for architects, facade engineers, and specification writers. It replaces static manufacturer marketing brochures with empirically verified Environmental Product Declarations (EN 15804+A2), live hygrothermal cross-section simulators, and parametric BIM/Revit schedule bindings.

---

## Core Capabilities

1. **Live Assembly Inspector & Dynamic Cross-Section Sandbox**
   - Inspect multi-layer physical building assemblies (*Pozzolanic Basalt Concrete*, *Compressed Hempcrete Block*, *Charred Shou Sugi Ban Cedar*, *Recycled Kiln-Cast Glass*).
   - Real-time evaluation of Cradle-to-Gate Embodied Carbon ($\text{kgCO}_2\text{e/m}^2$ Modules A1–A3), ASTM E84 Fire Ratings, ISO 354 Acoustic NRC, Thermal R-Value, and Compressive/Tensile Strength.
2. **Three Quantitative Engineering Analyzers**
   - **Lifecycle Carbon & EPD Analyzer**: Compares A1–A3 raw material extraction against A4–A5 site logistics and C1–C4 end-of-life circular recovery.
   - **Acoustic & Hygrothermal Simulator**: Interactive substrate thickness slider computing dynamic thermal R-values and airborne sound reduction ($R_w$ dB).
   - **Global Quarry & Mill Provenance Ledger**: Audits FSC/PEFC chain-of-custody, Cradle-to-Cradle Gold certifications, and zero-VOC off-gassing compliance.
3. **CSI MasterFormat & BIM Interoperability**
   - Export verified material assemblies directly to Autodesk Revit (`.rvt` / `.adsklib`), IFC4, ArchiCAD, and formatted 3-Part CSI MasterFormat project manuals (Divisions 03, 06, and 09).

---

## Aesthetic & Tectonic Design System

- **Palette**:
  - Travertine Alabaster (`#F6F5F0`)
  - Warm Architectural Concrete (`#EAE7DF`)
  - Anodized Bronze / Studio Charcoal (`#181816`)
  - Terracotta Clay Accent (`#C85A32`)
  - Oxidized Copper / Verdigris EPD Green (`#2E6F5E`)
- **Typography**:
  - Headings: `Fraunces` (Editorial Tectonic Serif)
  - Engineering Readouts & CAD Coordinates: `JetBrains Mono`
  - Body Copy: `Inter`

---

## Development & Build

```bash
# Install dependencies
npm install

# Run local development workbench
npm run dev

# Build production bundle & generate sitemap
npm run build
```

---

© 2026 MatterLab Applied Sciences LLC. All rights reserved.
