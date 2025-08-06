"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Grid3X3,
  LayoutGrid,
  Layers,
  Zap,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Square,
  Triangle,
  Maximize,
  Star,
  Code,
  Copy,
  Eye,
  Palette,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react"

const layoutTypes = [
  {
    id: "classic-grid",
    name: "Classic Grid",
    description: "Traditional equal-sized grid layouts",
    icon: Grid3X3,
    variants: [
      { id: "2x2", name: "2×2 Grid", cols: 2, rows: 2, items: 4 },
      { id: "3x2", name: "3×2 Grid", cols: 3, rows: 2, items: 6 },
      { id: "4x2", name: "4×2 Grid", cols: 4, rows: 2, items: 8 },
      { id: "3x3", name: "3×3 Grid", cols: 3, rows: 3, items: 9 },
    ],
  },
  {
    id: "hero-grid",
    name: "Hero + Grid",
    description: "Large hero card with smaller supporting cards",
    icon: Maximize,
    variants: [
      { id: "hero-4", name: "Hero + 4 Cards", layout: "hero-quad" },
      { id: "hero-6", name: "Hero + 6 Cards", layout: "hero-six" },
      { id: "hero-sidebar", name: "Hero + Sidebar", layout: "hero-side" },
      { id: "dual-hero", name: "Dual Hero", layout: "dual-hero" },
    ],
  },
  {
    id: "masonry",
    name: "Masonry Layout",
    description: "Pinterest-style staggered grid with varying heights",
    icon: Layers,
    variants: [
      { id: "masonry-2", name: "2 Columns", cols: 2 },
      { id: "masonry-3", name: "3 Columns", cols: 3 },
      { id: "masonry-4", name: "4 Columns", cols: 4 },
      { id: "masonry-auto", name: "Auto Columns", cols: "auto" },
    ],
  },
  {
    id: "zigzag",
    name: "Zigzag Layout",
    description: "Alternating left-right layout for storytelling",
    icon: Zap,
    variants: [
      { id: "zigzag-standard", name: "Standard Zigzag", items: 4 },
      { id: "zigzag-compact", name: "Compact Zigzag", items: 6 },
      { id: "zigzag-wide", name: "Wide Zigzag", items: 3 },
    ],
  },
  {
    id: "carousel",
    name: "Carousel Layout",
    description: "Horizontal scrolling cards with navigation",
    icon: ChevronRight,
    variants: [
      { id: "carousel-3", name: "3 Visible", visible: 3 },
      { id: "carousel-4", name: "4 Visible", visible: 4 },
      { id: "carousel-auto", name: "Auto Scroll", visible: "auto" },
      { id: "carousel-infinite", name: "Infinite Loop", visible: 3, infinite: true },
    ],
  },
  {
    id: "bento",
    name: "Bento Box",
    description: "Mixed-size cards in a flexible grid system",
    icon: Square,
    variants: [
      { id: "bento-mixed", name: "Mixed Sizes", layout: "mixed" },
      { id: "bento-spotlight", name: "Spotlight", layout: "spotlight" },
      { id: "bento-sidebar", name: "Sidebar Focus", layout: "sidebar" },
    ],
  },
  {
    id: "timeline",
    name: "Timeline Layout",
    description: "Chronological or process-based vertical layout",
    icon: ArrowUpDown,
    variants: [
      { id: "timeline-center", name: "Center Timeline", alignment: "center" },
      { id: "timeline-left", name: "Left Timeline", alignment: "left" },
      { id: "timeline-alternating", name: "Alternating", alignment: "alternating" },
    ],
  },
  {
    id: "pyramid",
    name: "Pyramid Layout",
    description: "Hierarchical layout with decreasing card sizes",
    icon: Triangle,
    variants: [
      { id: "pyramid-3", name: "3 Levels", levels: 3 },
      { id: "pyramid-4", name: "4 Levels", levels: 4 },
      { id: "inverted-pyramid", name: "Inverted", levels: 3, inverted: true },
    ],
  },
]

const cardTypes = [
  { id: "basic", name: "Card + Icon + Text", color: "bg-blue-100 text-blue-600" },
  { id: "feature", name: "Feature Card", color: "bg-green-100 text-green-600" },
  { id: "stats", name: "Statistics Card", color: "bg-purple-100 text-purple-600" },
  { id: "interactive", name: "Interactive Card", color: "bg-orange-100 text-orange-600" },
  { id: "demo", name: "Demo Card", color: "bg-pink-100 text-pink-600" },
  { id: "social", name: "Social Proof", color: "bg-indigo-100 text-indigo-600" },
]

export default function FeatureGridLayoutBuilder() {
  const [selectedLayout, setSelectedLayout] = useState("classic-grid")
  const [selectedVariant, setSelectedVariant] = useState("3x2")
  const [selectedCardType, setSelectedCardType] = useState("basic")
  const [viewMode, setViewMode] = useState("desktop")

  const renderLayoutPreview = (layoutId: string, variantId: string) => {
    const layout = layoutTypes.find((l) => l.id === layoutId)
    const variant = layout?.variants.find((v) => v.id === variantId)

    if (!layout || !variant) return null

    const getCardTypeColor = (index: number) => {
      const cardType = cardTypes.find((c) => c.id === selectedCardType)
      return cardType?.color || "bg-gray-100 text-gray-600"
    }

    switch (layoutId) {
      case "classic-grid":
        return (
          <div
            className={`grid gap-4 p-4 bg-gray-50 rounded-lg`}
            style={{
              gridTemplateColumns: `repeat(${variant.cols}, 1fr)`,
              gridTemplateRows: `repeat(${variant.rows}, 1fr)`,
            }}
          >
            {Array.from({ length: variant.items }).map((_, i) => (
              <div
                key={i}
                className={`aspect-square ${getCardTypeColor(i)} rounded-lg border-2 border-dashed border-current/30 flex items-center justify-center`}
              >
                <div className="text-center">
                  <div className="w-6 h-6 mx-auto mb-2 opacity-60">
                    <Star className="w-full h-full" />
                  </div>
                  <div className="text-xs font-medium">{i + 1}</div>
                </div>
              </div>
            ))}
          </div>
        )

      case "hero-grid":
        return (
          <div className="p-4 bg-gray-50 rounded-lg">
            {variant.layout === "hero-quad" && (
              <div className="grid grid-cols-3 gap-4">
                <div
                  className={`col-span-2 row-span-2 aspect-video ${getCardTypeColor(0)} rounded-lg border-2 border-dashed border-current/30 flex items-center justify-center`}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 opacity-60">
                      <Star className="w-full h-full" />
                    </div>
                    <div className="text-sm font-medium">Hero Card</div>
                  </div>
                </div>
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square ${getCardTypeColor(i + 1)} rounded-lg border-2 border-dashed border-current/30 flex items-center justify-center`}
                  >
                    <div className="text-xs font-medium">{i + 2}</div>
                  </div>
                ))}
              </div>
            )}
            {variant.layout === "hero-six" && (
              <div className="grid grid-cols-4 gap-4">
                <div
                  className={`col-span-2 row-span-2 aspect-square ${getCardTypeColor(0)} rounded-lg border-2 border-dashed border-current/30 flex items-center justify-center`}
                >
                  <div className="text-center">
                    <div className="w-8 h-8 mx-auto mb-2 opacity-60">
                      <Star className="w-full h-full" />
                    </div>
                    <div className="text-xs font-medium">Hero</div>
                  </div>
                </div>
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square ${getCardTypeColor(i + 1)} rounded-lg border-2 border-dashed border-current/30 flex items-center justify-center`}
                  >
                    <div className="text-xs font-medium">{i + 2}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )

      case "masonry":
        const heights = ["h-24", "h-32", "h-28", "h-36", "h-20", "h-40", "h-24", "h-32"]
        return (
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className={`columns-${variant.cols} gap-4 space-y-4`}>
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={`${heights[i]} ${getCardTypeColor(i)} rounded-lg border-2 border-dashed border-current/30 flex items-center justify-center break-inside-avoid`}
                >
                  <div className="text-xs font-medium">{i + 1}</div>
                </div>
              ))}
            </div>
          </div>
        )

      case "zigzag":
        return (
          <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
            {Array.from({ length: variant.items }).map((_, i) => (
              <div key={i} className={`flex gap-4 ${i % 2 === 1 ? "flex-row-reverse" : ""}`}>
                <div
                  className={`flex-1 ${getCardTypeColor(i)} rounded-lg border-2 border-dashed border-current/30 p-4 flex items-center justify-center min-h-[80px]`}
                >
                  <div className="text-center">
                    <div className="text-xs font-medium">Feature {i + 1}</div>
                  </div>
                </div>
                <div className="w-16 bg-white rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div className="w-6 h-6 opacity-40">
                    <Star className="w-full h-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )

      case "carousel":
        return (
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex gap-4 overflow-x-auto pb-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-shrink-0 w-48 aspect-[4/3] ${getCardTypeColor(i)} rounded-lg border-2 border-dashed border-current/30 flex items-center justify-center`}
                >
                  <div className="text-center">
                    <div className="text-xs font-medium">Card {i + 1}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-3">
              <ChevronLeft className="w-6 h-6 text-gray-400" />
              <div className="flex gap-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-primary" : "bg-gray-300"}`} />
                ))}
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        )

      case "bento":
        return (
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-4 grid-rows-3 gap-4 h-64">
              <div
                className={`col-span-2 row-span-2 ${getCardTypeColor(0)} rounded-lg border-2 border-dashed border-current/30 flex items-center justify-center`}
              >
                <div className="text-center">
                  <div className="text-sm font-medium">Large</div>
                </div>
              </div>
              <div
                className={`col-span-1 row-span-1 ${getCardTypeColor(1)} rounded-lg border-2 border-dashed border-current/30 flex items-center justify-center`}
              >
                <div className="text-xs font-medium">2</div>
              </div>
              <div
                className={`col-span-1 row-span-2 ${getCardTypeColor(2)} rounded-lg border-2 border-dashed border-current/30 flex items-center justify-center`}
              >
                <div className="text-xs font-medium">3</div>
              </div>
              <div
                className={`col-span-1 row-span-1 ${getCardTypeColor(3)} rounded-lg border-2 border-dashed border-current/30 flex items-center justify-center`}
              >
                <div className="text-xs font-medium">4</div>
              </div>
              <div
                className={`col-span-2 row-span-1 ${getCardTypeColor(4)} rounded-lg border-2 border-dashed border-current/30 flex items-center justify-center`}
              >
                <div className="text-xs font-medium">Wide</div>
              </div>
              <div
                className={`col-span-1 row-span-1 ${getCardTypeColor(5)} rounded-lg border-2 border-dashed border-current/30 flex items-center justify-center`}
              >
                <div className="text-xs font-medium">6</div>
              </div>
            </div>
          </div>
        )

      case "timeline":
        return (
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2" />
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className={`flex items-center gap-4 mb-6 ${i % 2 === 0 ? "" : "flex-row-reverse"}`}>
                  <div
                    className={`flex-1 ${getCardTypeColor(i)} rounded-lg border-2 border-dashed border-current/30 p-3 flex items-center justify-center min-h-[60px]`}
                  >
                    <div className="text-xs font-medium">Step {i + 1}</div>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-sm z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        )

      case "pyramid":
        return (
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="space-y-4">
              {Array.from({ length: variant.levels }).map((_, level) => {
                const itemsInLevel = variant.inverted ? level + 1 : variant.levels - level
                return (
                  <div key={level} className="flex justify-center gap-4">
                    {Array.from({ length: itemsInLevel }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-16 h-16 ${getCardTypeColor(level * 3 + i)} rounded-lg border-2 border-dashed border-current/30 flex items-center justify-center`}
                      >
                        <div className="text-xs font-medium">{level * 3 + i + 1}</div>
                      </div>
                    ))}
                  </div>
                )
              })}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const renderActualPreview = () => {
    // This would render the actual cards with real content
    return (
      <div className="text-center py-12 text-gray-500">
        <Eye className="w-12 h-12 mx-auto mb-4" />
        <p>Live preview with actual cards will appear here</p>
        <p className="text-sm mt-2">
          {layoutTypes.find((l) => l.id === selectedLayout)?.name} with{" "}
          {cardTypes.find((c) => c.id === selectedCardType)?.name}
        </p>
      </div>
    )
  }

  const currentLayout = layoutTypes.find((l) => l.id === selectedLayout)
  const currentVariant = currentLayout?.variants.find((v) => v.id === selectedVariant)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Feature Grid Layout Builder</h1>
              <p className="text-muted-foreground mt-2">
                Create stunning feature grids with customizable layouts and card types
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button size="sm">
                <Copy className="w-4 h-4 mr-2" />
                Export Code
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Configuration */}
          <div className="lg:col-span-1 space-y-6">
            {/* Layout Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LayoutGrid className="w-5 h-5" />
                  Layout Types
                </CardTitle>
                <CardDescription>Choose your grid layout structure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {layoutTypes.map((layout) => (
                    <Card
                      key={layout.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedLayout === layout.id ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() => {
                        setSelectedLayout(layout.id)
                        setSelectedVariant(layout.variants[0].id)
                      }}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <layout.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm">{layout.name}</h4>
                            <p className="text-xs text-muted-foreground mt-1">{layout.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Variant Selection */}
            {currentLayout && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Layout Variants</CardTitle>
                  <CardDescription>Choose specific configuration</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {currentLayout.variants.map((variant) => (
                      <Button
                        key={variant.id}
                        variant={selectedVariant === variant.id ? "default" : "outline"}
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => setSelectedVariant(variant.id)}
                      >
                        {variant.name}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Card Type Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Card Type</CardTitle>
                <CardDescription>Select card style and functionality</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {cardTypes.map((cardType) => (
                    <Button
                      key={cardType.id}
                      variant={selectedCardType === cardType.id ? "default" : "outline"}
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setSelectedCardType(cardType.id)}
                    >
                      <div className={`w-3 h-3 rounded-full mr-2 ${cardType.color}`} />
                      {cardType.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Responsive Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Responsive Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button
                    variant={viewMode === "desktop" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("desktop")}
                  >
                    <Monitor className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "tablet" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("tablet")}
                  >
                    <Tablet className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "mobile" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("mobile")}
                  >
                    <Smartphone className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Preview */}
          <div className="lg:col-span-3">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Layout Preview</CardTitle>
                    <CardDescription>
                      {currentLayout?.name} - {currentVariant?.name} with{" "}
                      {cardTypes.find((c) => c.id === selectedCardType)?.name}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">{viewMode}</Badge>
                    <Button variant="outline" size="sm">
                      <Code className="w-4 h-4 mr-2" />
                      Generate Code
                    </Button>
                    <Button variant="outline" size="sm">
                      <Palette className="w-4 h-4 mr-2" />
                      Customize
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="skeleton" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="skeleton">Skeleton View</TabsTrigger>
                    <TabsTrigger value="preview">Live Preview</TabsTrigger>
                  </TabsList>
                  <TabsContent value="skeleton" className="mt-6">
                    <div
                      className={`border rounded-lg bg-white transition-all duration-300 ${
                        viewMode === "mobile"
                          ? "max-w-sm mx-auto"
                          : viewMode === "tablet"
                            ? "max-w-2xl mx-auto"
                            : "w-full"
                      }`}
                    >
                      {renderLayoutPreview(selectedLayout, selectedVariant)}
                    </div>
                  </TabsContent>
                  <TabsContent value="preview" className="mt-6">
                    <div
                      className={`border rounded-lg bg-white min-h-[400px] transition-all duration-300 ${
                        viewMode === "mobile"
                          ? "max-w-sm mx-auto"
                          : viewMode === "tablet"
                            ? "max-w-2xl mx-auto"
                            : "w-full"
                      }`}
                    >
                      {renderActualPreview()}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Layout Information */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Layout Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Best Use Cases</h4>
                    <div className="text-sm text-muted-foreground">
                      {selectedLayout === "classic-grid" && "Product features, service benefits, team members"}
                      {selectedLayout === "hero-grid" && "Main feature highlight with supporting details"}
                      {selectedLayout === "masonry" && "Content with varying lengths, blog posts, portfolios"}
                      {selectedLayout === "zigzag" && "Step-by-step processes, storytelling, comparisons"}
                      {selectedLayout === "carousel" && "Multiple products, testimonials, case studies"}
                      {selectedLayout === "bento" && "Dashboard-style layouts, mixed content types"}
                      {selectedLayout === "timeline" && "Process flows, company history, roadmaps"}
                      {selectedLayout === "pyramid" && "Hierarchical information, pricing tiers"}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Responsive Behavior</h4>
                    <div className="text-sm text-muted-foreground">
                      Automatically adapts to smaller screens with stacked layout and optimized spacing
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Customization Options</h4>
                    <div className="text-sm text-muted-foreground">
                      Spacing, colors, card types, content, and interactive elements can all be customized
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
