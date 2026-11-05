import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Layers,
  Download,
  CheckCircle2,
  Copy,
  Check,
  ShieldCheck,
  Cpu,
  FileCode2,
  Compass,
} from "lucide-react";
import { toast } from "sonner";

interface BimVaultModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface BimPackage {
  id: string;
  code: string;
  name: string;
  system: "Revit" | "ArchiCAD" | "Rhino" | "IFC4";
  version: string;
  size: string;
  carbonGwp: string;
  compliance: string;
  description: string;
}

const BIM_PACKAGES: BimPackage[] = [
  {
    id: "pkg-01",
    code: "STR-RVT-CON",
    name: "Pozzolanic Basalt Geopolymer Concrete Assembly",
    system: "Revit",
    version: "2024–2026 (.rvt / .adsklib)",
    size: "4.2 MB",
    carbonGwp: "82 kgCO2e/m²",
    compliance: "ASTM C1157 / EN 15804",
    description: "Multi-layered monolithic wall family with embedded thermal conductivity and structural compressive parameters.",
  },
  {
    id: "pkg-02",
    code: "STR-IFC-HMP",
    name: "Bio-Composite Hempcrete Monolithic Block",
    system: "IFC4",
    version: "IFC4 Add2 TC1 (ISO 16739)",
    size: "3.8 MB",
    carbonGwp: "-18 kgCO2e/m² (Net Sink)",
    compliance: "Class B-s1,d0 / Glaser Safe",
    description: "Vapor-permeable building element proxy with dynamic moisture buffering coefficient and hygric sorption curves.",
  },
  {
    id: "pkg-03",
    code: "STR-RHI-TIM",
    name: "Charred Shou Sugi Ban Rain-screen System",
    system: "Rhino",
    version: "Rhino 7/8 & Grasshopper (.gh)",
    size: "5.1 MB",
    carbonGwp: "14 kgCO2e/m²",
    compliance: "FSC 100% Chain-of-Custody",
    description: "Parametric facade definition calculating kerf brackets, panel articulation, and solar shading thermal resistance.",
  },
  {
    id: "pkg-04",
    code: "STR-CAD-GLS",
    name: "Sintered Recycled Kiln-Cast Glass Slab",
    system: "ArchiCAD",
    version: "ArchiCAD 27/28 (.lcf)",
    size: "2.9 MB",
    carbonGwp: "34 kgCO2e/m²",
    compliance: "Class A1 Non-Combustible",
    description: "Custom surface texture and physical shading coefficient attributes for curtain wall schedule schedules.",
  },
  {
    id: "pkg-05",
    code: "STR-RVT-EAR",
    name: "Stabilized Rammed Earth Structural Wall",
    system: "Revit",
    version: "Revit 2024–2026 (.rvt)",
    size: "6.4 MB",
    carbonGwp: "22 kgCO2e/m²",
    compliance: "DIN 18940 / LEED v4.1",
    description: "Heavy thermal mass loadbearing envelope family with automated acoustic NRC and volumetric density parameters.",
  },
  {
    id: "pkg-06",
    code: "STR-IFC-MYC",
    name: "Mycelium Acoustic Ceiling & Baffle Grid",
    system: "IFC4",
    version: "IFC4 BuildingElementProxy",
    size: "3.1 MB",
    carbonGwp: "-8 kgCO2e/m²",
    compliance: "ISO 354 (NRC 0.85)",
    description: "High-absorption interior ceiling suspension units with zero VOC off-gassing and Cradle-to-Cradle Gold certificate.",
  },
];

export const BimVaultModal: React.FC<BimVaultModalProps> = ({ open, onOpenChange }) => {
  const [selectedSystem, setSelectedSystem] = useState<string>("All");
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const filteredPackages =
    selectedSystem === "All"
      ? BIM_PACKAGES
      : BIM_PACKAGES.filter((p) => p.system === selectedSystem);

  const handleDownload = (pkg: BimPackage) => {
    toast(`DOWNLOADING ${pkg.code}`, {
      description: `${pkg.name} package (${pkg.version}) dispatched to your CAD library folder.`,
      duration: 4000,
    });
  };

  const handleCopyAddIn = () => {
    const snippet = `<StrataAddIn>
  <Version>2.4.0</Version>
  <Endpoint>https://api.matterlab-strata.io/v1/bim-sync</Endpoint>
  <Protocol>ISO-14025-EN-15804</Protocol>
  <SyncMode>Bidirectional-Live</SyncMode>
</StrataAddIn>`;
    navigator.clipboard.writeText(snippet);
    setCopiedSnippet(true);
    toast("ADD-IN MANIFEST COPIED", {
      description: "Revit & ArchiCAD API connection manifest copied to clipboard.",
      duration: 3500,
    });
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col bg-[#181816] text-[#F6F5F0] border border-[#EAE7DF]/20 shadow-[0_24px_60px_rgba(0,0,0,0.85)] p-0 font-sans">
        
        {/* Header */}
        <div className="p-6 pb-4 border-b border-[#EAE7DF]/15 bg-[#1F1E1B]">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#2E6F5E]/15 text-[#2E6F5E] border border-[#2E6F5E]/30 text-xs font-sans font-medium">
              <span className="w-2 h-2 rounded-full bg-[#2E6F5E] animate-pulse" />
              <span>Central BIM Materials Vault</span>
            </div>
            <span className="text-xs text-[#B8B19F] font-mono">
              Revit · ArchiCAD · Rhino · IFC4
            </span>
          </div>

          <DialogTitle className="text-xl sm:text-2xl font-serif font-bold text-[#F6F5F0]">
            Parametric Architectural Material Libraries
          </DialogTitle>
          <DialogDescription className="text-xs text-[#EAE7DF]/75 font-sans mt-1">
            Download certified building assemblies pre-calibrated with verified A1–A3 EPD embodied carbon, thermal R-values, and acoustic attenuation assets.
          </DialogDescription>

          {/* System Filters */}
          <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-[#EAE7DF]/10">
            {["All", "Revit", "ArchiCAD", "Rhino", "IFC4"].map((sys) => {
              const active = selectedSystem === sys;
              return (
                <button
                  key={sys}
                  onClick={() => setSelectedSystem(sys)}
                  className={`px-3 py-1 rounded-lg text-xs font-sans transition-all border ${
                    active
                      ? "bg-[#C85A32] text-white border-[#C85A32] font-medium shadow-sm"
                      : "bg-[#181816] text-[#EAE7DF]/70 border-[#EAE7DF]/15 hover:border-[#EAE7DF]/40"
                  }`}
                >
                  {sys}
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Asset List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="p-4 rounded-xl bg-[#1F1E1B] border border-[#EAE7DF]/15 hover:border-[#C85A32]/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono"
            >
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-[#C85A32]">{pkg.code}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#181816] text-[#EAE7DF] border border-white/10">
                    {pkg.system}
                  </span>
                  <span className="text-[10px] text-[#2E6F5E] font-semibold">
                    {pkg.carbonGwp}
                  </span>
                </div>

                <div className="text-sm font-serif font-bold text-[#F6F5F0]">
                  {pkg.name}
                </div>

                <p className="text-xs font-sans text-[#EAE7DF]/70 max-w-xl">
                  {pkg.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-[10px] text-[#B8B19F] pt-1">
                  <span>FORMAT: {pkg.version}</span>
                  <span>•</span>
                  <span>SIZE: {pkg.size}</span>
                  <span>•</span>
                  <span className="text-[#2E6F5E]">{pkg.compliance}</span>
                </div>
              </div>

              <Button
                size="sm"
                onClick={() => handleDownload(pkg)}
                className="shrink-0 bg-[#252420] hover:bg-[#C85A32] text-[#F6F5F0] hover:text-white border border-[#EAE7DF]/20 font-mono text-xs uppercase tracking-wider transition-all"
              >
                <Download className="w-3.5 h-3.5 mr-1.5" />
                Download Package
              </Button>
            </div>
          ))}
        </div>

        {/* Footer with API snippet */}
        <div className="p-4 sm:p-5 bg-[#1F1E1B] border-t border-[#EAE7DF]/15 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#B8B19F]">
            Direct BIM Add-in integration: Autodesk App Store / ArchiCAD Add-On Manager.
          </div>

          <Button
            size="sm"
            variant="outline"
            onClick={handleCopyAddIn}
            className="border-[#EAE7DF]/20 text-[#EAE7DF] hover:bg-[#EAE7DF]/10 font-mono text-xs uppercase tracking-wider"
          >
            {copiedSnippet ? (
              <>
                <Check className="w-3.5 h-3.5 mr-1.5 text-[#2E6F5E]" />
                Manifest Copied
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 mr-1.5" />
                Copy API Connection Manifest
              </>
            )}
          </Button>
        </div>

      </DialogContent>
    </Dialog>
  );
};

export default BimVaultModal;
