import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Copy,
  Check,
  Download,
  FileText,
  ShieldCheck,
  Layers,
  Flame,
  Volume2,
  Cpu,
  FileCode2,
} from "lucide-react";
import { toast } from "sonner";

export interface SpecMaterial {
  id: string;
  code: string;
  name: string;
  subTitle: string;
  embodiedCarbon: number;
  benchmarkComparison: string;
  fireRating: string;
  acousticNRC: number;
  rValue: number;
  tensileStrength: string;
  leadTime: string;
  density: string;
  epdVerified: boolean;
  provenance: string;
  layers: {
    name: string;
    depth: string;
    hatchType: string;
    color: string;
  }[];
  description: string;
}

interface SpecSheetModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  material: SpecMaterial | null;
}

export const SpecSheetModal: React.FC<SpecSheetModalProps> = ({
  open,
  onOpenChange,
  material,
}) => {
  const [copied, setCopied] = useState(false);

  if (!material) return null;

  const csiDivision = material.id.includes("CON") || material.code.includes("CON")
    ? "SECTION 03 30 53 — GEOPOLYMER CAST-IN-PLACE CONCRETE"
    : material.code.includes("HMP")
    ? "SECTION 04 20 00 — BIO-COMPOSITE HEMPCRETE MASONRY UNITS"
    : material.code.includes("TIM")
    ? "SECTION 06 20 13 — CHARRED CEDAR RAINSCREEN CLADDING"
    : "SECTION 08 81 00 — SINTERED RECYCLED STRUCTURAL GLASS";

  const fullCsiSpec = `CSI MASTERFORMAT 3-PART SPECIFICATION
${csiDivision}
PROJECT MANUAL CODE: STRATA-${material.code}
PROGRAM OPERATOR: MatterLab Applied Sciences (ISO 14025 / EN 15804+A2)

================================================================================
PART 1 - GENERAL
================================================================================

1.1 SECTION INCLUDES
  A. Tactile architectural building assembly: ${material.name}.
  B. Parametric substrate configuration with composite depth:
${material.layers.map((l, i) => `     ${i + 1}. ${l.name} (${l.depth})`).join("\n")}
  C. Associated vapor-permeable sealants, anchors, and rainscreen cavities.

1.2 ENVIRONMENTAL & PERFORMANCE SUBMITTALS
  A. Type III Environmental Product Declaration (EPD) in accordance with ISO 14025 and EN 15804+A2.
     1. Cradle-to-Gate (A1-A3) Global Warming Potential: ${material.embodiedCarbon} kg CO2e/m2.
     2. Benchmark Differential: ${material.benchmarkComparison}.
  B. Reaction-to-Fire Certification: ASTM E84 / EN 13501-1 rated: ${material.fireRating}.
  C. Acoustic Sound Absorption: ASTM C423 / ISO 354 Noise Reduction Coefficient (NRC): ${material.acousticNRC}.
  D. Thermal Resistance: R-${material.rValue} m2·K/W per 100mm depth (ISO 6946).

1.3 QUALITY ASSURANCE & PROVENANCE
  A. Manufacturer/Quarry Provenance: ${material.provenance}.
  B. Chemical Compliance: Zero Living Building Challenge Red List v4.0 chemicals; total VOC < 0.05 g/L.

================================================================================
PART 2 - PRODUCTS
================================================================================

2.1 SYSTEM SPECIFICATION
  A. Model: STRATA-${material.code} (${material.name}).
  B. Nominal Density: ${material.density}.
  C. Structural Strength Threshold: ${material.tensileStrength}.
  D. Lead Time Guarantee: ${material.leadTime} from approved shop drawings.

2.2 FABRICATION TOLERANCES
  A. Thickness variation: +/- 1.0 mm maximum across monolithic face.
  B. Moisture Content: Equilibrium threshold 12% +/- 2% at standard 20°C / 65% RH.

================================================================================
PART 3 - EXECUTION
================================================================================

3.1 EXAMINATION & PREPARATION
  A. Verify structural backing tolerances before hanging primary kerf brackets.
  B. Maintain continuous 35mm ventilated air space behind rainscreen face.

3.2 PROTECTION
  A. Protect finished surfaces from wet masonry wash down and ambient moisture during initial 72-hour cure.
`;

  const bimPayload = {
    schema: "IFC4 / OmniClass Table 23",
    elementCode: material.code,
    name: material.name,
    environmentalProfile: {
      epdVerified: material.epdVerified,
      gwpA1A3: `${material.embodiedCarbon} kgCO2e/m2`,
      vocContent: "<0.05 g/L",
      leedEligibility: ["MR Credit: Environmental Product Declarations", "EQ Credit: Low-Emitting Materials"],
    },
    physics: {
      fireRating: material.fireRating,
      acousticNRC: material.acousticNRC,
      rValue: `R-${material.rValue}`,
      density: material.density,
      strength: material.tensileStrength,
    },
    layers: material.layers.map((l) => ({
      layerName: l.name,
      thickness: l.depth,
      hatchStyle: l.hatchType,
    })),
    provenance: material.provenance,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(fullCsiSpec);
    setCopied(true);
    toast("CSI SPECIFICATION COPIED TO CLIPBOARD", {
      description: "Full 3-Part Project Manual text ready for pasting into project documents.",
      duration: 3500,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadSpec = () => {
    const blob = new Blob([fullCsiSpec], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `STRATA_SPEC_${material.code}.spec.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast("SPECIFICATION FILE DOWNLOADED", {
      description: `STRATA_SPEC_${material.code}.spec.txt generated.`,
      duration: 3000,
    });
  };

  const handleDownloadBim = () => {
    const blob = new Blob([JSON.stringify(bimPayload, null, 2)], {
      type: "application/json;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `STRATA_BIM_PARAMS_${material.code}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast("BIM PARAMETER PAYLOAD DOWNLOADED", {
      description: "Autodesk Revit & IFC4 compatible parameters exported.",
      duration: 3000,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col bg-[#181816] text-[#F6F5F0] border border-[#EAE7DF]/20 shadow-[0_24px_60px_rgba(0,0,0,0.85)] p-0 font-sans">
        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-[#EAE7DF]/15 bg-[#1F1E1B]">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#C85A32]/15 text-[#C85A32] border border-[#C85A32]/30 text-xs font-mono font-medium">
              <span>{material.code}</span>
              <span>•</span>
              <span>CSI 3-Part Spec</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-xs text-[#2E6F5E] bg-[#2E6F5E]/15 border border-[#2E6F5E]/30 px-2.5 py-0.5 rounded-full font-medium">
                <ShieldCheck className="w-3.5 h-3.5" /> EPD Verified (ISO 14025)
              </span>
            </div>
          </div>

          <DialogTitle className="text-xl sm:text-2xl font-serif font-normal text-[#F6F5F0]">
            {material.name}
          </DialogTitle>
          <DialogDescription className="text-xs text-[#EAE7DF]/70 font-sans mt-1">
            {material.subTitle}
          </DialogDescription>
        </div>

        {/* Modal Body with Tabs */}
        <div className="flex-1 overflow-y-auto p-6">
          <Tabs defaultValue="csi-spec" className="w-full">
            <TabsList className="grid grid-cols-3 bg-[#141412] border border-white/5 p-1 mb-6 rounded-xl text-xs font-sans">
              <TabsTrigger
                value="csi-spec"
                className="data-[state=active]:bg-[#C85A32] data-[state=active]:text-white uppercase tracking-wider text-[11px]"
              >
                <FileText className="w-3.5 h-3.5 mr-1.5 hidden sm:inline" />
                CSI 3-Part Spec
              </TabsTrigger>
              <TabsTrigger
                value="properties"
                className="data-[state=active]:bg-[#C85A32] data-[state=active]:text-white uppercase tracking-wider text-[11px]"
              >
                <Layers className="w-3.5 h-3.5 mr-1.5 hidden sm:inline" />
                Physical Matrix
              </TabsTrigger>
              <TabsTrigger
                value="bim-params"
                className="data-[state=active]:bg-[#C85A32] data-[state=active]:text-white uppercase tracking-wider text-[11px]"
              >
                <FileCode2 className="w-3.5 h-3.5 mr-1.5 hidden sm:inline" />
                BIM Payload (IFC4)
              </TabsTrigger>
            </TabsList>

            {/* TAB 1: CSI MasterFormat Full Text */}
            <TabsContent value="csi-spec" className="mt-0">
              <div className="relative">
                <pre className="p-4 rounded-xl bg-[#111110] border border-[#EAE7DF]/15 text-xs text-[#EAE7DF]/90 font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto max-h-[380px]">
                  {fullCsiSpec}
                </pre>
              </div>
            </TabsContent>

            {/* TAB 2: Physical Properties & Test Standards */}
            <TabsContent value="properties" className="mt-0 space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-lg bg-[#1F1E1B] border border-[#EAE7DF]/15">
                  <div className="flex items-center gap-1.5 text-[#C85A32] mb-1">
                    <Flame className="w-4 h-4" />
                    <span className="font-bold">Reaction-to-Fire</span>
                  </div>
                  <div className="text-sm font-bold text-[#F6F5F0]">{material.fireRating}</div>
                  <div className="text-[10px] text-[#B8B19F] mt-0.5">Tested under ASTM E84 / EN 13501-1</div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#1F1E1B] border border-[#EAE7DF]/15">
                  <div className="flex items-center gap-1.5 text-[#2E6F5E] mb-1">
                    <Volume2 className="w-4 h-4" />
                    <span className="font-bold">Acoustic NRC Rating</span>
                  </div>
                  <div className="text-sm font-bold text-[#F6F5F0]">{material.acousticNRC} NRC</div>
                  <div className="text-[10px] text-[#B8B19F] mt-0.5">Tested under ASTM C423 / ISO 354</div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#1F1E1B] border border-[#EAE7DF]/15">
                  <div className="flex items-center gap-1.5 text-[#EAE7DF] mb-1">
                    <Cpu className="w-4 h-4" />
                    <span className="font-bold">Thermal Resistance</span>
                  </div>
                  <div className="text-sm font-bold text-[#F6F5F0]">R-{material.rValue} m²·K/W</div>
                  <div className="text-[10px] text-[#B8B19F] mt-0.5">Per 100mm monolithic depth</div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#1F1E1B] border border-[#EAE7DF]/15">
                  <div className="flex items-center gap-1.5 text-[#B8B19F] mb-1">
                    <Layers className="w-4 h-4" />
                    <span className="font-bold">Structural Strength</span>
                  </div>
                  <div className="text-sm font-bold text-[#F6F5F0]">{material.tensileStrength}</div>
                  <div className="text-[10px] text-[#B8B19F] mt-0.5">Density: {material.density}</div>
                </div>
              </div>

              {/* Stratified Layer Build */}
              <div className="p-4 rounded-lg bg-[#1F1E1B] border border-[#EAE7DF]/15">
                <div className="text-xs font-bold text-[#F6F5F0] uppercase tracking-wider mb-2">
                  Layer Cross-Section Specification:
                </div>
                <div className="space-y-2">
                  {material.layers.map((l, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2 rounded bg-[#181816] border border-white/5"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-sm"
                          style={{ backgroundColor: l.color }}
                        />
                        <span className="text-[#EAE7DF]">{l.name}</span>
                      </div>
                      <span className="text-[#C85A32] font-semibold">{l.depth}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* TAB 3: BIM IFC4 / JSON Parameters */}
            <TabsContent value="bim-params" className="mt-0">
              <pre className="p-4 rounded-xl bg-[#111110] border border-[#EAE7DF]/15 text-xs text-[#2E6F5E] font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto max-h-[380px]">
                {JSON.stringify(bimPayload, null, 2)}
              </pre>
            </TabsContent>
          </Tabs>
        </div>

        {/* Modal Action Bar */}
        <div className="p-4 sm:p-5 bg-[#1F1E1B] border-t border-[#EAE7DF]/15 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#B8B19F]">
            <Button
              size="sm"
              variant="outline"
              onClick={handleCopy}
              className="bg-white text-[#C85A32] hover:bg-[#FAF9F5] hover:text-[#A64522] border border-[#C85A32]/30 font-mono text-xs uppercase font-medium transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 mr-1.5 text-[#2E6F5E]" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 mr-1.5" />
                  Copy Spec Text
                </>
              )}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleDownloadSpec}
              className="bg-white text-[#C85A32] hover:bg-[#FAF9F5] hover:text-[#A64522] border border-[#C85A32]/30 font-mono text-xs uppercase font-medium transition-all"
            >
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Download .spec
            </Button>
          </div>

          <Button
            size="sm"
            onClick={handleDownloadBim}
            className="bg-[#C85A32] hover:bg-[#A64522] text-white font-mono text-xs uppercase tracking-wider"
          >
            <Download className="w-3.5 h-3.5 mr-1.5" />
            Export Revit / IFC4 Payload
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SpecSheetModal;
