import React, { useState, useMemo } from "react";
import {
  Search,
  SlidersHorizontal,
  ShieldCheck,
  Flame,
  Volume2,
  FileText,
  Download,
  ArrowUpDown,
  Filter,
  CheckCircle2,
  Sparkles,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SpecSheetModal, { SpecMaterial } from "./SpecSheetModal";
import { toast } from "sonner";

export interface CatalogItem extends SpecMaterial {
  division: string;
  divisionCode: string;
  carbonCategory: "sink" | "ultra-low" | "low";
  conductivity: string;
  application: string;
}

const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: "spec-01",
    code: "03 30 00 / STR-CON-01",
    name: "Pozzolanic Basalt Geopolymer Concrete",
    subTitle: "Alkali-activated volcanic pozzolan monolithic matrix",
    division: "Div 03 Concrete",
    divisionCode: "03 30 00",
    embodiedCarbon: 82,
    carbonCategory: "low",
    benchmarkComparison: "68% lower than OPC 42.5 baseline (260 kgCO₂e/m²)",
    fireRating: "ASTM E84 Class A (4-Hour Fire Endurance)",
    acousticNRC: 0.12,
    rValue: 1.45,
    tensileStrength: "48.5 MPa (28-day compressive)",
    leadTime: "2 Weeks (Pre-cast / In-situ mix)",
    density: "2,350 kg/m³",
    conductivity: "λ 0.85 W/m·K",
    epdVerified: true,
    provenance: "Eifel Volcanic Belt, Rhineland Quarry Basin",
    application: "Structural columns, monolithic shear cores, exposed architectural panels",
    description: "Zero Portland cement binder utilizing micronized basaltic pumice activated with sodium metasilicate for extreme marine sulfate resistance.",
    layers: [
      { name: "Silane Water Repellent Seal", depth: "2mm", hatchType: "dots", color: "#B8B19F" },
      { name: "Pozzolanic Basalt Matrix", depth: "180mm", hatchType: "concrete", color: "#75716B" },
      { name: "Basalt Fiber Structural Rebar Grid", depth: "18mm", hatchType: "grid", color: "#C85A32" },
      { name: "Recycled Glass Thermal Underlayment", depth: "50mm", hatchType: "aggregate", color: "#544E47" },
    ],
  },
  {
    id: "spec-02",
    code: "04 20 00 / STR-HMP-02",
    name: "Bio-Composite Hempcrete Monolithic Block",
    subTitle: "Cannabis sativa hurds bonded with hydraulic lime binder",
    division: "Div 04 Masonry",
    divisionCode: "04 20 00",
    embodiedCarbon: -18,
    carbonCategory: "sink",
    benchmarkComparison: "115% carbon negative (sequestration sink vs aerated concrete)",
    fireRating: "EN 13501 Class B-s1,d0 (Zero smoke toxicity)",
    acousticNRC: 0.72,
    rValue: 3.65,
    tensileStrength: "1.8 MPa (Non-loadbearing infill block)",
    leadTime: "3 Weeks (Pre-cured blocks)",
    density: "340 kg/m³",
    conductivity: "λ 0.071 W/m·K",
    epdVerified: true,
    provenance: "Bourgogne Agricultural Cooperative, France",
    application: "Thermal building envelope, breathable infill masonry, interior acoustic partitions",
    description: "High-permeability hygrothermal wall element actively buffering indoor humidity swings while locking atmospheric carbon for the 100-year building lifecycle.",
    layers: [
      { name: "Breathable Lime Render", depth: "15mm", hatchType: "stipple", color: "#EAE7DF" },
      { name: "Monolithic Hempcrete Core", depth: "260mm", hatchType: "organic", color: "#2E6F5E" },
      { name: "Timber Secondary Studwork", depth: "45mm", hatchType: "woodgrain", color: "#B8B19F" },
      { name: "Potassium Silicate Interior Wash", depth: "1mm", hatchType: "solid", color: "#F6F5F0" },
    ],
  },
  {
    id: "spec-03",
    code: "06 20 00 / STR-CED-03",
    name: "Yakisugi Charred Japanese Sugi Cedar",
    subTitle: "Controlled carbonized surface rainscreen envelope",
    division: "Div 06 Wood & Plastics",
    divisionCode: "06 20 00",
    embodiedCarbon: 14,
    carbonCategory: "ultra-low",
    benchmarkComparison: "88% lower than anodized composite facade cladding",
    fireRating: "ASTM E84 Class B (Flame Spread Index 35)",
    acousticNRC: 0.35,
    rValue: 1.15,
    tensileStrength: "34 MPa (Bending modulus)",
    leadTime: "4 Weeks (Hand-kilned)",
    density: "410 kg/m³",
    conductivity: "λ 0.11 W/m·K",
    epdVerified: true,
    provenance: "Yoshino Forestry Guild, Nara Prefecture, Japan",
    application: "Ventilated rainscreen facades, soffits, high-durability exterior cladding",
    description: "Centuries-old carbonization creates a glassy graphite surface layer impenetrable to wood-boring insects, fungal rot, and water penetration without chemical biocides.",
    layers: [
      { name: "Vitrified Carbon Charcoal Crust", depth: "3mm", hatchType: "char", color: "#181816" },
      { name: "Solid Heartwood Sugi Substrate", depth: "22mm", hatchType: "woodgrain", color: "#8E7259" },
      { name: "Ventilated Air Drainage Cavity", depth: "38mm", hatchType: "diagonal", color: "#252420" },
      { name: "Vapor-Permeable Weather Membrane", depth: "0.5mm", hatchType: "dashed", color: "#2E6F5E" },
    ],
  },
  {
    id: "spec-04",
    code: "08 81 00 / STR-GLS-04",
    name: "Recycled Kiln-Cast Architectural Slag Glass",
    subTitle: "Vitrified post-industrial glass & metallurgical slag aggregate",
    division: "Div 08 Openings & Glass",
    divisionCode: "08 81 00",
    embodiedCarbon: 31,
    carbonCategory: "ultra-low",
    benchmarkComparison: "72% lower than virgin float glass with vacuum coating",
    fireRating: "EN 13501 Class A1 (Non-combustible)",
    acousticNRC: 0.08,
    rValue: 0.88,
    tensileStrength: "65 MPa (Flexural tensile)",
    leadTime: "3 Weeks",
    density: "2,500 kg/m³",
    conductivity: "λ 0.95 W/m·K",
    epdVerified: true,
    provenance: "Ruhr Industrial Reclamation Facility, Germany",
    application: "Translucent curtain walls, privacy partitions, cladding panels, light filters",
    description: "Sintered at low eutectic temperatures utilizing 96% diverted waste glass, producing structural translucent slabs with tactile crystalline wave refractions.",
    layers: [
      { name: "UV Protective Low-Iron Glaze", depth: "2mm", hatchType: "solid", color: "#C8E6C9" },
      { name: "Cast Slag Glass Monolith", depth: "32mm", hatchType: "crystalline", color: "#4A6B62" },
      { name: "Recycled EPDM Thermal Gasket", depth: "8mm", hatchType: "crosshatch", color: "#181816" },
    ],
  },
  {
    id: "spec-05",
    code: "09 84 00 / STR-MYC-05",
    name: "Mycelium Bio-Composite Acoustic Core",
    subTitle: "Ganoderma lucidum hyphae cultivated on agricultural grain chaff",
    division: "Div 09 Finishes",
    divisionCode: "09 84 00",
    embodiedCarbon: -8,
    carbonCategory: "sink",
    benchmarkComparison: "128% lower than petroleum polyurethane acoustic foam",
    fireRating: "ASTM E84 Class A (Treated mineralized core)",
    acousticNRC: 0.85,
    rValue: 2.80,
    tensileStrength: "0.45 MPa (Rigid compression core)",
    leadTime: "2 Weeks (Incubation & bake)",
    density: "160 kg/m³",
    conductivity: "λ 0.042 W/m·K",
    epdVerified: true,
    provenance: "MatterLab Bio-Fab Facility, Utrecht, Netherlands",
    application: "Direct-to-deck acoustic ceiling baffles, recording studio absorption panels",
    description: "Fungal root network bio-welds agricultural grain husks into a lightweight porous structure with exceptional mid-to-high frequency sound attenuation and zero toxic VOCs.",
    layers: [
      { name: "Organic Linen Scrim Facing", depth: "1mm", hatchType: "weave", color: "#EAE7DF" },
      { name: "Mycelium Acoustic Matrix", depth: "50mm", hatchType: "spores", color: "#786F60" },
      { name: "Recycled Aluminum Suspension Clip", depth: "12mm", hatchType: "metal", color: "#B8B19F" },
    ],
  },
  {
    id: "spec-06",
    code: "04 22 00 / STR-CEB-06",
    name: "Hydraulic-Stabilized Compressed Earth Brick",
    subTitle: "Subsoil aggregate compressed at 15 MPa with NHL 3.5 lime",
    division: "Div 04 Masonry",
    divisionCode: "04 22 00",
    embodiedCarbon: 19,
    carbonCategory: "ultra-low",
    benchmarkComparison: "81% lower than kiln-fired clay facing brick",
    fireRating: "ASTM E119 (4-Hour Fire Resistance Rating)",
    acousticNRC: 0.18,
    rValue: 1.85,
    tensileStrength: "7.2 MPa (Compressive dry)",
    leadTime: "1 Week (Local hydraulic cure)",
    density: "1,850 kg/m³",
    conductivity: "λ 0.62 W/m·K",
    epdVerified: true,
    provenance: "On-site excavation subsoil / Rhone Valley Clay Bed",
    application: "Loadbearing interior walls, thermal mass partition screens, perimeter envelopes",
    description: "Sun-cured structural earth masonry requiring zero kiln fossil fuel combustion. Excellent thermal storage capacity with high hygroscopic moisture regulation.",
    layers: [
      { name: "Waxed Earth Finishing Paste", depth: "2mm", hatchType: "solid", color: "#C85A32" },
      { name: "Compressed Earth Brick Unit", depth: "140mm", hatchType: "masonry", color: "#8E5438" },
      { name: "Natural Hydraulic Lime Mortar Bed", depth: "10mm", hatchType: "stipple", color: "#EAE7DF" },
    ],
  },
  {
    id: "spec-07",
    code: "06 18 00 / STR-CLT-07",
    name: "European Beech Cross-Laminated Timber (CLT)",
    subTitle: "5-ply hardwood CLT laminated with bio-polyurethane resin",
    division: "Div 06 Wood & Plastics",
    divisionCode: "06 18 00",
    embodiedCarbon: -42,
    carbonCategory: "sink",
    benchmarkComparison: "145% carbon negative (sequestration sink vs reinforced concrete slab)",
    fireRating: "EN 13501 Class B-s1,d0 (Charring rate 0.55 mm/min)",
    acousticNRC: 0.22,
    rValue: 2.10,
    tensileStrength: "115 MPa (Rolling shear & flexure)",
    leadTime: "5 Weeks (CNC milled)",
    density: "520 kg/m³",
    conductivity: "λ 0.13 W/m·K",
    epdVerified: true,
    provenance: "Thuringian Sustained Forestry Trust, Germany",
    application: "Multi-story mass timber floors, structural core shafts, cantilevers",
    description: "Dense European beech hardwood delivers 40% higher shear strength than spruce CLT, allowing reduced structural slab depths and exposed architectural soffits.",
    layers: [
      { name: "Hardwax Oil Satin Sealant", depth: "1mm", hatchType: "solid", color: "#D7B992" },
      { name: "5-Ply Cross-Oriented Beech Lamellas", depth: "160mm", hatchType: "crosslaminated", color: "#9E7B54" },
      { name: "Non-Toxic Bio-Adhesive Glue-line", depth: "0.2mm", hatchType: "line", color: "#181816" },
    ],
  },
  {
    id: "spec-08",
    code: "09 65 00 / STR-CRK-08",
    name: "Expanded Aerated Cork Acoustic Sub-Screed",
    subTitle: "Thermal and impact sound insulation steam-baked from oak bark",
    division: "Div 09 Finishes",
    divisionCode: "09 65 00",
    embodiedCarbon: -22,
    carbonCategory: "sink",
    benchmarkComparison: "160% net carbon sink compared to extruded polystyrene (XPS)",
    fireRating: "EN 13501 Class B2 (Auto-extinguishing cork suberin)",
    acousticNRC: 0.68,
    rValue: 3.40,
    tensileStrength: "0.22 MPa (Elastic compression)",
    leadTime: "2 Weeks",
    density: "120 kg/m³",
    conductivity: "λ 0.038 W/m·K",
    epdVerified: true,
    provenance: "Alentejo Montado Cork Oak Reserves, Portugal",
    application: "Acoustic floor underlayment, green roof insulation, exposed wall acoustic tiles",
    description: "Pure expanded cork granules bonded purely by their own natural resin (suberin) through high-pressure steam heating. Zero chemical additives or petrochemical binders.",
    layers: [
      { name: "Vapor-Tight Protective Foil", depth: "0.2mm", hatchType: "dashed", color: "#B8B19F" },
      { name: "Steam-Expanded Cork Mat", depth: "40mm", hatchType: "cork", color: "#634731" },
      { name: "Recycled Rubber Decoupling Strip", depth: "5mm", hatchType: "solid", color: "#181816" },
    ],
  },
  {
    id: "spec-09",
    code: "07 42 00 / STR-TER-09",
    name: "Extruded Terracotta Rain-Screen Baguette",
    subTitle: "Hollow-chamber solar shading and facade cladding batten",
    division: "Div 07 Thermal & Moisture",
    divisionCode: "07 42 00",
    embodiedCarbon: 24,
    carbonCategory: "ultra-low",
    benchmarkComparison: "76% lower than extruded aluminum solar louvers",
    fireRating: "ASTM E84 Class A (Zero Flame, Zero Smoke)",
    acousticNRC: 0.15,
    rValue: 0.95,
    tensileStrength: "28 MPa (Flexural breaking load)",
    leadTime: "3 Weeks",
    density: "2,100 kg/m³",
    conductivity: "λ 0.72 W/m·K",
    epdVerified: true,
    provenance: "Impruneta Clay Basin, Tuscany, Italy",
    application: "Exterior solar shading louvers, ventilated rainscreen cladding, urban acoustic screens",
    description: "Natural clay extruded through precision steel dies and fired using biogas kilns, offering extreme color permanence and 100-year UV weathering stability.",
    layers: [
      { name: "Natural Matte Terracotta Sinter", depth: "18mm", hatchType: "hollow", color: "#C85A32" },
      { name: "Extruded Internal Acoustic Cavity", depth: "24mm", hatchType: "air", color: "#181816" },
      { name: "Concealed Stainless Steel Fastener", depth: "6mm", hatchType: "metal", color: "#B8B19F" },
    ],
  },
  {
    id: "spec-10",
    code: "08 44 00 / STR-ALU-10",
    name: "Hydro-Smelted Low-Carbon Aluminum Profile",
    subTitle: "Primary aluminum smelted with 100% renewable hydroelectric power",
    division: "Div 08 Openings & Glass",
    divisionCode: "08 44 00",
    embodiedCarbon: 65,
    carbonCategory: "low",
    benchmarkComparison: "75% lower than global average aluminum (180 kgCO₂e/m²)",
    fireRating: "ASTM E84 Class A (Melting point 660°C)",
    acousticNRC: 0.05,
    rValue: 0.12,
    tensileStrength: "240 MPa (Yield strength 6060-T6)",
    leadTime: "4 Weeks (Custom extrusion)",
    density: "2,700 kg/m³",
    conductivity: "λ 160 W/m·K (Thermal break required)",
    epdVerified: true,
    provenance: "Sunndal HydroSmelter, Sunndalsøra, Norway",
    application: "Thermally broken curtain wall mullions, structural glazing frames, skylights",
    description: "Certified low-carbon primary extrusion with 4.0 kg CO₂ per kg Al (cradle-to-gate), fitted with polyamide low-conduction thermal isolators.",
    layers: [
      { name: "25-Micron Architectural Anodizing", depth: "0.025mm", hatchType: "solid", color: "#4E4B46" },
      { name: "Structural 6060 Alloy Extrusion", depth: "65mm", hatchType: "metal", color: "#8E8A83" },
      { name: "Glass-Reinforced Polyamide Strut", depth: "34mm", hatchType: "crosshatch", color: "#181816" },
    ],
  },
  {
    id: "spec-11",
    code: "07 21 00 / STR-WOL-11",
    name: "Treated Sheep's Wool Thermal Batt",
    subTitle: "Carded virgin sheep's wool treated with natural potassium borate",
    division: "Div 07 Thermal & Moisture",
    divisionCode: "07 21 00",
    embodiedCarbon: -6,
    carbonCategory: "sink",
    benchmarkComparison: "118% net sink compared to standard mineral rockwool batt",
    fireRating: "EN 13501 Class B-s1,d0 (Ignition temp > 560°C)",
    acousticNRC: 0.88,
    rValue: 3.85,
    tensileStrength: "0.05 MPa (Resilient fibrous mat)",
    leadTime: "2 Weeks",
    density: "25 kg/m³",
    conductivity: "λ 0.038 W/m·K",
    epdVerified: true,
    provenance: "Cumbria Sheep Pastures & Wool Processing, UK",
    application: "Rafter cavity insulation, stud-wall acoustic damping, internal floor acoustic batts",
    description: "Naturally hygroscopic keratin fibers absorb up to 33% of their dry weight in moisture without losing thermal resistance, purging indoor airborne formaldehyde.",
    layers: [
      { name: "Vapor-Open Paper Scrim", depth: "0.5mm", hatchType: "lines", color: "#EAE7DF" },
      { name: "Carded Sheep's Wool Batt", depth: "140mm", hatchType: "wool", color: "#DCD6C8" },
      { name: "Mineral Borate Flame Retardant", depth: "0.1mm", hatchType: "stipple", color: "#2E6F5E" },
    ],
  },
  {
    id: "spec-12",
    code: "03 40 00 / STR-BIO-12",
    name: "Algae-Grown Calcareous Bio-Cement Tile",
    subTitle: "Microbially precipitated calcium carbonate grown in marine photobioreactors",
    division: "Div 03 Concrete",
    divisionCode: "03 40 00",
    embodiedCarbon: -12,
    carbonCategory: "sink",
    benchmarkComparison: "120% lower than traditional Portland cement mosaic tile",
    fireRating: "ASTM E84 Class A (Non-combustible mineral stone)",
    acousticNRC: 0.10,
    rValue: 1.20,
    tensileStrength: "32 MPa (High abrasion resistance)",
    leadTime: "3 Weeks (Bioreactor harvest)",
    density: "2,200 kg/m³",
    conductivity: "λ 1.10 W/m·K",
    epdVerified: true,
    provenance: "MatterLab Coastal Bioreactor Station, Lisbon, Portugal",
    application: "Heavy-traffic floor pavers, exterior plaza paving, ventilated cladding panels",
    description: "Microalgae biologically induce aragonite crystallization through photosynthesis, sequestering atmospheric CO₂ directly into stone structure without thermal sintering.",
    layers: [
      { name: "Honed Micro-Algal Calcite Surface", depth: "12mm", hatchType: "dots", color: "#5F7D6D" },
      { name: "Recycled Marine Aragonite Substrate", depth: "28mm", hatchType: "concrete", color: "#3B5246" },
      { name: "Plant-Based Polymer Bonding Mortar", depth: "6mm", hatchType: "stipple", color: "#EAE7DF" },
    ],
  },
];

const DIVISIONS = [
  "All",
  "Div 03 Concrete",
  "Div 04 Masonry",
  "Div 06 Wood & Plastics",
  "Div 07 Thermal & Moisture",
  "Div 08 Openings & Glass",
  "Div 09 Finishes",
];

const CARBON_FILTERS = [
  { id: "all", label: "All Profiles" },
  { id: "sink", label: "Net Negative (Carbon Sink)" },
  { id: "ultra-low", label: "Ultra-Low (<40 kg)" },
  { id: "low", label: "Low-Carbon (<90 kg)" },
];

export const MaterialCatalogExplorer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("All");
  const [selectedCarbonFilter, setSelectedCarbonFilter] = useState("all");
  const [selectedMaterialForSpec, setSelectedMaterialForSpec] = useState<SpecMaterial | null>(null);
  const [specModalOpen, setSpecModalOpen] = useState(false);

  const filteredItems = useMemo(() => {
    return CATALOG_ITEMS.filter((item) => {
      // Search matching
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.code.toLowerCase().includes(query) ||
        item.division.toLowerCase().includes(query) ||
        item.application.toLowerCase().includes(query) ||
        item.provenance.toLowerCase().includes(query);

      // Division matching
      const matchesDivision =
        selectedDivision === "All" || item.division === selectedDivision;

      // Carbon profile matching
      const matchesCarbon =
        selectedCarbonFilter === "all" ||
        item.carbonCategory === selectedCarbonFilter;

      return matchesSearch && matchesDivision && matchesCarbon;
    });
  }, [searchQuery, selectedDivision, selectedCarbonFilter]);

  const handleOpenSpec = (item: CatalogItem) => {
    setSelectedMaterialForSpec(item);
    setSpecModalOpen(true);
  };

  const handleQuickCopyParam = (item: CatalogItem) => {
    const payload = JSON.stringify(
      {
        materialCode: item.code,
        materialName: item.name,
        embodiedCarbon_A1A3: `${item.embodiedCarbon} kgCO2e/m2`,
        fireRating: item.fireRating,
        density: item.density,
        conductivity: item.conductivity,
        complianceStandard: "ISO 14044 / EN 15804",
      },
      null,
      2
    );
    navigator.clipboard.writeText(payload);
    toast("IFC4 PARAMETER COPIED", {
      description: `${item.name} attributes copied to clipboard for CAD parameter import.`,
      duration: 3500,
    });
  };

  return (
    <section id="specimen-catalog" className="py-24 bg-[#141412] border-t border-[#EAE7DF]/15 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-sans uppercase tracking-widest text-[#C85A32] font-semibold">
            Repository
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#F6F5F0] mt-2">
            Tactile Specimen Catalog
          </h2>
          <p className="mt-3 text-base text-[#EAE7DF]/75 font-sans leading-relaxed">
            Verified low-carbon architectural assemblies with cradle-to-gate LCA metrics, fire ratings, and 3-part CSI specifications.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="max-w-6xl mx-auto mb-8 bg-[#1C1B18] p-5 md:p-6 rounded-2xl border border-[#EAE7DF]/15 shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B8B19F]" />
              <Input
                placeholder="Search assembly, division, or quarry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-[#141412] border-white/10 text-[#F6F5F0] placeholder:text-[#B8B19F]/50 font-sans text-xs focus:border-[#C85A32] rounded-lg"
              />
            </div>

            {/* Carbon Intensity Filter */}
            <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              {CARBON_FILTERS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedCarbonFilter(f.id)}
                  className={`px-3 py-1.5 text-xs font-sans rounded-lg border transition-colors whitespace-nowrap ${
                    selectedCarbonFilter === f.id
                      ? "bg-[#C85A32] text-white border-[#C85A32] font-medium"
                      : "bg-[#141412] text-[#B8B19F] border-white/5 hover:border-white/15"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Division Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-3 border-t border-white/5 no-scrollbar">
            {DIVISIONS.map((div) => (
              <button
                key={div}
                onClick={() => setSelectedDivision(div)}
                className={`px-3 py-1 text-xs font-sans rounded-md transition-colors whitespace-nowrap ${
                  selectedDivision === div
                    ? "bg-[#2E6F5E] text-white font-medium"
                    : "text-[#B8B19F] hover:bg-white/5 hover:text-white"
                }`}
              >
                {div}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="max-w-6xl mx-auto mb-4 flex justify-between items-center text-xs font-sans text-[#B8B19F] px-2">
          <span>
            Showing <strong className="text-[#F6F5F0]">{filteredItems.length}</strong> of {CATALOG_ITEMS.length} assemblies
          </span>
          {(searchQuery || selectedDivision !== "All" || selectedCarbonFilter !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDivision("All");
                setSelectedCarbonFilter("all");
              }}
              className="text-[#C85A32] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Specimen Table (Desktop) / Cards (Mobile) */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto rounded-2xl border border-[#EAE7DF]/15 bg-[#1C1B18] shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-[#141412] text-xs font-sans text-[#B8B19F]">
                  <th className="py-4 px-5">Specimen &amp; CSI Code</th>
                  <th className="py-4 px-4">Division</th>
                  <th className="py-4 px-4">A1–A3 Carbon</th>
                  <th className="py-4 px-4">Fire Rating</th>
                  <th className="py-4 px-4">Conductivity</th>
                  <th className="py-4 px-4">EPD</th>
                  <th className="py-4 px-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs font-sans">
                {filteredItems.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-white/[0.02] transition-colors group"
                  >
                    {/* Name & Code */}
                    <td className="py-4 px-5">
                      <div className="font-serif font-normal text-sm text-[#F6F5F0] group-hover:text-[#C85A32] transition-colors">
                        {item.name}
                      </div>
                      <div className="text-[11px] font-mono text-[#B8B19F]/70 mt-0.5">
                        {item.code}
                      </div>
                    </td>

                    {/* Division */}
                    <td className="py-4 px-4">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#141412] text-[#EAE7DF] border border-white/5">
                        {item.divisionCode}
                      </span>
                    </td>

                    {/* Embodied Carbon */}
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-1.5 font-sans font-semibold">
                        <span
                          className={`text-sm ${
                            item.embodiedCarbon < 0
                              ? "text-[#2E6F5E]"
                              : item.embodiedCarbon <= 40
                              ? "text-[#4A9A84]"
                              : "text-[#C85A32]"
                          }`}
                        >
                          {item.embodiedCarbon > 0 ? `+${item.embodiedCarbon}` : item.embodiedCarbon}
                        </span>
                        <span className="text-[11px] text-[#B8B19F] font-normal">kgCO₂e/m²</span>
                      </div>
                    </td>

                    {/* Fire Rating */}
                    <td className="py-4 px-4">
                      <div className="text-xs text-[#EAE7DF] flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-[#C85A32]" />
                        <span>{item.fireRating.split("(")[0].trim()}</span>
                      </div>
                    </td>

                    {/* Conductivity */}
                    <td className="py-4 px-4 font-mono text-xs text-[#B8B19F]">
                      {item.conductivity}
                    </td>

                    {/* EPD Status */}
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#2E6F5E] font-medium">
                        <ShieldCheck className="w-3.5 h-3.5" /> Type III
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleQuickCopyParam(item)}
                          className="h-8 px-2.5 text-[#B8B19F] hover:text-[#F6F5F0] hover:bg-white/5 text-xs font-sans"
                          title="Copy IFC4 parameter snippet"
                        >
                          IFC4
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleOpenSpec(item)}
                          className="h-8 bg-[#C85A32] hover:bg-[#A64522] text-white text-xs font-sans font-medium px-3 rounded-lg shadow-sm"
                        >
                          <FileText className="w-3.5 h-3.5 mr-1" />
                          Inspect
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-[#1C1B18] border border-[#EAE7DF]/15 space-y-3 shadow-lg"
              >
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <span className="text-[11px] font-mono text-[#B8B19F] block">
                      {item.code}
                    </span>
                    <h3 className="font-serif font-normal text-base text-[#F6F5F0] mt-0.5">
                      {item.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-base font-sans font-bold block ${
                        item.embodiedCarbon < 0
                          ? "text-[#2E6F5E]"
                          : item.embodiedCarbon <= 40
                          ? "text-[#4A9A84]"
                          : "text-[#C85A32]"
                      }`}
                    >
                      {item.embodiedCarbon > 0 ? `+${item.embodiedCarbon}` : item.embodiedCarbon}
                    </span>
                    <span className="text-[10px] text-[#B8B19F]">kgCO₂e/m²</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 text-xs font-sans">
                  <div>
                    <span className="text-[10px] text-[#B8B19F] block">DIVISION</span>
                    <span className="text-[#EAE7DF]">{item.division}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#B8B19F] block">FIRE RATING</span>
                    <span className="text-[#EAE7DF]">{item.fireRating.split("(")[0].trim()}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleQuickCopyParam(item)}
                    className="flex-1 border-[#EAE7DF]/20 text-[#EAE7DF] font-sans text-xs"
                  >
                    Copy IFC4
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => handleOpenSpec(item)}
                    className="flex-1 bg-[#C85A32] hover:bg-[#A64522] text-white font-sans text-xs font-medium"
                  >
                    <FileText className="w-3.5 h-3.5 mr-1" />
                    Inspect Spec
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16 bg-[#1C1B18] rounded-2xl border border-[#EAE7DF]/15 p-6">
              <p className="text-base text-[#EAE7DF] font-serif">No assemblies match your filters.</p>
              <Button
                size="sm"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDivision("All");
                  setSelectedCarbonFilter("all");
                }}
                className="mt-4 bg-[#C85A32] text-white font-sans text-xs"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>

      </div>

      {/* CSI Spec Sheet Modal */}
      <SpecSheetModal
        open={specModalOpen}
        onOpenChange={setSpecModalOpen}
        material={selectedMaterialForSpec}
      />
    </section>
  );
};

export default MaterialCatalogExplorer;
