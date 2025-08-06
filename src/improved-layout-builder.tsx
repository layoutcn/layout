"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Grid3X3,
  LayoutGrid,
  Layers,
  Zap,
  Square,
  Maximize,
  Star,
  Code,
  Eye,
  Monitor,
  Smartphone,
  Tablet,
  Sun,
  Moon,
  Palette,
  ArrowLeft,
  Rocket,
  Users,
  Gauge,
  Clock,
  MapPin,
} from "lucide-react";
import { cardRegistry } from "./cards/cardRegistry";
import { Props } from "./cards/interactive/FlipCard";

function RenderCardByName({
  category,
  cardName,
  props,
}: {
  category: string;
  cardName: string;
  props: Props;
}) {
  const Component = cardRegistry[category]?.[cardName];
  if (!Component) return <div>Card not found</div>;
  return Component(props);
}

const layoutTypes = [
  {
    id: "classic-grid",
    name: "Classic Grid",
    description: "Equal-sized grid layouts",
    icon: Grid3X3,
    variants: [
      { id: "2x2", name: "2×2", cols: 2, rows: 2, items: 4 },
      { id: "3x2", name: "3×2", cols: 3, rows: 2, items: 6 },
      { id: "4x2", name: "4×2", cols: 4, rows: 2, items: 8 },
      { id: "2x3", name: "2×3", cols: 2, rows: 3, items: 6 },
    ],
  },
  {
    id: "hero-grid",
    name: "Hero + Grid",
    description: "Large hero with smaller cards",
    icon: Maximize,
    variants: [
      { id: "hero-4", name: "Hero + 4", layout: "hero-quad" },
      { id: "hero-6", name: "Hero + 6", layout: "hero-six" },
      { id: "dual-hero", name: "Dual Hero", layout: "dual-hero" },
    ],
  },
  {
    id: "masonry",
    name: "Masonry",
    description: "Pinterest-style staggered grid",
    icon: Layers,
    variants: [
      { id: "masonry-2", name: "2 Cols", cols: 2 },
      { id: "masonry-3", name: "3 Cols", cols: 3 },
      { id: "masonry-4", name: "4 Cols", cols: 4 },
    ],
  },
  {
    id: "zigzag",
    name: "Zigzag",
    description: "Alternating storytelling layout",
    icon: Zap,
    variants: [
      { id: "zigzag-4", name: "4 Items", items: 4 },
      { id: "zigzag-6", name: "6 Items", items: 6 },
    ],
  },
  {
    id: "bento",
    name: "Bento Box",
    description: "Mixed-size flexible grid",
    icon: Square,
    variants: [
      { id: "bento-mixed", name: "Mixed", layout: "mixed" },
      { id: "bento-spotlight", name: "Spotlight", layout: "spotlight" },
    ],
  },
];

const cardCategories = [
  {
    id: "interactive",
    name: "Interactive Cards",
    description: "Cards with dynamic interactions and state changes",
    icon: Zap,
    cards: [
      {
        id: "flip-card",
        name: "Flip Card",
        description: "Click to reveal details",
        preview: "Lightning Fast → Performance Details",
      },
      {
        id: "toggle-comparison",
        name: "Before/After Toggle",
        description: "Switch to compare states",
        preview: "8.7s → 2.1s optimization",
      },
      {
        id: "pricing-calculator",
        name: "Pricing Calculator",
        description: "Interactive slider pricing",
        preview: "50 users = $25/month",
      },
    ],
  },
  {
    id: "demo",
    name: "Demo & Preview Cards",
    description: "Cards showing live demos, code, or device mockups",
    icon: Monitor,
    cards: [
      {
        id: "video-demo",
        name: "Video Demo",
        description: "Embedded video player",
        preview: "2 min product overview",
      },
      {
        id: "code-preview",
        name: "Code Preview",
        description: "Syntax highlighted code",
        preview: "API integration example",
      },
      {
        id: "device-mockup",
        name: "Device Mockup",
        description: "Multi-device showcase",
        preview: "Mobile, Tablet, Desktop",
      },
    ],
  },
  {
    id: "data-viz",
    name: "Data Visualization",
    description: "Cards with charts, metrics, and visual data representation",
    icon: Gauge,
    cards: [
      {
        id: "performance-meter",
        name: "Performance Meter",
        description: "Circular progress gauge",
        preview: "87 performance score",
      },
      {
        id: "analytics-overview",
        name: "Analytics Overview",
        description: "Mini dashboard with charts",
        preview: "1.2K visitors, 3.4% conversion",
      },
      {
        id: "status-monitor",
        name: "Status Monitor",
        description: "System health indicators",
        preview: "API, Security, Performance",
      },
    ],
  },
  {
    id: "social-proof",
    name: "Social Proof Cards",
    description: "Cards showing testimonials, reviews, and user feedback",
    icon: Users,
    cards: [
      {
        id: "user-avatars",
        name: "User Avatar Cluster",
        description: "Customer testimonials with avatars",
        preview: "10,000+ users, 4.9★ rating",
      },
      {
        id: "live-activity",
        name: "Live Activity Feed",
        description: "Real-time user actions",
        preview: "John signed up, Maria completed setup",
      },
      {
        id: "achievement-badge",
        name: "Achievement Badge",
        description: "Awards and recognition",
        preview: "Product of the Year 2024",
      },
    ],
  },
  {
    id: "process",
    name: "Process & Journey Cards",
    description:
      "Cards showing workflows, timelines, and step-by-step processes",
    icon: Clock,
    cards: [
      {
        id: "timeline-process",
        name: "Timeline Process",
        description: "Step-by-step progress",
        preview: "3 simple steps to get started",
      },
      {
        id: "workflow-automation",
        name: "Workflow Automation",
        description: "Automated process flow",
        preview: "Lead → Email → CRM",
      },
      {
        id: "progress-journey",
        name: "Progress Journey",
        description: "Skill level progression",
        preview: "Beginner → Advanced → Expert",
      },
    ],
  },
  {
    id: "contextual",
    name: "Contextual Cards",
    description: "Cards with location, time, or environment-specific content",
    icon: MapPin,
    cards: [
      {
        id: "global-presence",
        name: "Global Presence",
        description: "Location-based information",
        preview: "US, Europe, Asia Pacific 24/7",
      },
      {
        id: "smart-monitoring",
        name: "Smart Monitoring",
        description: "Environmental data",
        preview: "72°F, 45% humidity, Good air quality",
      },
      {
        id: "schedule-optimizer",
        name: "Schedule Optimizer",
        description: "Time-based recommendations",
        preview: "Peak hours: 9AM-11AM",
      },
    ],
  },
];

export default function ImprovedLayoutBuilder() {
  const [selectedLayout, setSelectedLayout] = useState("classic-grid");
  const [selectedVariant, setSelectedVariant] = useState("3x2");
  const [selectedBlock, setSelectedBlock] = useState<number | null>(null);

  const [selectedCardType, setSelectedCardType] = useState("flip-card");

  const [viewMode, setViewMode] = useState("desktop");
  const [previewMode, setPreviewMode] = useState("preview"); // preview or code
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("blue");

  const themes = [
    { id: "blue", name: "Blue", color: "bg-blue-500" },
    { id: "green", name: "Green", color: "bg-green-500" },
    { id: "purple", name: "Purple", color: "bg-purple-500" },
    { id: "orange", name: "Orange", color: "bg-orange-500" },
  ];

  const currentLayout = layoutTypes.find((l) => l.id === selectedLayout);
  const currentVariant = currentLayout?.variants.find(
    (v) => v.id === selectedVariant
  );

  const handleBlockClick = (blockIndex: number) => {
    setSelectedBlock(blockIndex);
  };

  const handleBackToLayouts = () => {
    setSelectedBlock(null);
  };

  const renderIcon = (iconType: string, blockIndex: number) => {
    if (selectedBlock === blockIndex) {
      // Find the selected card and its category
      const selectedCard = cardCategories
        .flatMap((cat) => cat.cards)
        .find((card) => card.id === selectedCardType);

      if (selectedCard) {
        const category = cardCategories.find((cat) =>
          cat.cards.some((card) => card.id === selectedCardType)
        );
        if (category) {
          const IconComponent = category.icon;
          return <IconComponent className="w-full h-full" />;
        }
      }
    }
    return <Star className="w-full h-full" />;
  };

  const getResponsiveGridClasses = (cols: number, viewMode: string) => {
    switch (viewMode) {
      case "mobile":
        return "grid-cols-1";
      case "tablet":
        return cols > 2 ? "grid-cols-2" : `grid-cols-${cols}`;
      case "desktop":
      default:
        return `grid-cols-${Math.min(cols, 4)}`;
    }
  };

  const renderLayoutPreview = (
    layoutId: string,
    variantId: string,
    isInteractive = false
  ) => {
    const layout = layoutTypes.find((l) => l.id === layoutId);
    const variant = layout?.variants.find((v) => v.id === variantId);

    if (!layout || !variant) return null;

    const getBlockStyle = (index: number) => {
      const isSelected = selectedBlock === index;
      const cardType = cardCategories
        .flatMap((cat) => cat.cards)
        .find((card) => card.id === selectedCardType);
      const baseColor = isSelected ? "bg-primary" : "bg-white";
      const textColor = isSelected ? "text-white" : "text-gray-700";
      const borderStyle = isSelected
        ? "border-2 border-primary shadow-lg"
        : "border border-gray-200 hover:border-gray-300";

      return `${baseColor} ${textColor} ${borderStyle} rounded-lg transition-all duration-200 ${
        isInteractive
          ? "cursor-pointer hover:shadow-md hover:-translate-y-0.5"
          : ""
      }`;
    };

    // Website-realistic container with proper max-width and centering
    const getContainerClasses = (viewMode: string) => {
      switch (viewMode) {
        case "mobile":
          return "max-w-sm mx-auto px-4 py-8";
        case "tablet":
          return "max-w-4xl mx-auto px-6 py-12";
        case "desktop":
        default:
          return "max-w-6xl mx-auto px-8 py-16"; // Realistic website section width
      }
    };

    const containerClasses = getContainerClasses(viewMode);
    const gridGap = "gap-6"; // Standard 24px gap

    switch (layoutId) {
      case "classic-grid":
        return (
          <div className={containerClasses}>
            <div
              className={`grid ${gridGap} ${getResponsiveGridClasses(
                variant.cols,
                viewMode
              )}`}
            >
              {Array.from({ length: variant.items }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square ${getBlockStyle(
                    i
                  )} p-6 text-center`} // Square aspect ratio
                  onClick={
                    isInteractive ? () => handleBlockClick(i) : undefined
                  }
                >
                  <div className="h-full flex flex-col justify-center">
                    <div className="w-8 h-8 mx-auto mb-4 opacity-70">
                      {renderIcon("block", i)}
                    </div>
                    <h3 className="font-semibold text-sm mb-2">
                      Feature Title
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Brief description of the feature and its benefits.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "hero-grid":
        return (
          <div className={containerClasses}>
            <div
              className={`grid ${gridGap}`}
              style={{
                gridTemplateColumns: viewMode === "mobile" ? "1fr" : "2fr 1fr",
              }}
            >
              <div
                className={`${
                  viewMode === "mobile" ? "aspect-[4/3]" : "aspect-[4/3]"
                } ${getBlockStyle(0)} p-8 text-center ${
                  viewMode !== "mobile" ? "row-span-2" : ""
                }`}
                onClick={isInteractive ? () => handleBlockClick(0) : undefined}
              >
                <div className="h-full flex flex-col justify-center">
                  <div className="w-12 h-12 mx-auto mb-6 opacity-70">
                    {renderIcon("hero", 0)}
                  </div>
                  <h2 className="font-bold text-lg mb-3">Main Feature</h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Highlight your primary feature with this prominent hero
                    card.
                  </p>
                  <button className="text-xs bg-gray-100 px-3 py-1 rounded">
                    Learn More
                  </button>
                </div>
              </div>

              <div
                className={`grid ${gridGap} ${
                  viewMode === "mobile" ? "grid-cols-1" : "grid-cols-1"
                }`}
              >
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square ${getBlockStyle(
                      i + 1
                    )} p-4 text-center`} // Square supporting cards
                    onClick={
                      isInteractive ? () => handleBlockClick(i + 1) : undefined
                    }
                  >
                    <div className="h-full flex flex-col justify-center">
                      <div className="w-6 h-6 mx-auto mb-3 opacity-70">
                        {renderIcon("block", i + 1)}
                      </div>
                      <h4 className="font-medium text-xs mb-2">
                        Feature {i + 2}
                      </h4>
                      <p className="text-xs text-gray-600">
                        Supporting feature.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "masonry":
        const masonryHeights = ["h-48", "h-56", "h-52", "h-60", "h-44", "h-64"];
        return (
          <div className={containerClasses}>
            <div
              className={`columns-${Math.min(
                variant.cols,
                viewMode === "mobile"
                  ? 1
                  : viewMode === "tablet"
                  ? 2
                  : variant.cols
              )} ${gridGap}`}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`${masonryHeights[i]} ${getBlockStyle(
                    i
                  )} break-inside-avoid mb-6 p-6`}
                  onClick={
                    isInteractive ? () => handleBlockClick(i) : undefined
                  }
                >
                  <div className="text-center">
                    <div className="w-8 h-8 mx-auto mb-4 opacity-70">
                      {renderIcon("block", i)}
                    </div>
                    <h3 className="font-semibold text-sm mb-3">
                      Feature {i + 1}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {i % 3 === 0
                        ? "This is a longer description that explains the feature in more detail and shows how masonry layouts handle varying content lengths beautifully."
                        : i % 3 === 1
                        ? "Medium length description that provides good context about the feature."
                        : "Short and concise feature description."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "zigzag":
        return (
          <div className={containerClasses}>
            <div className="space-y-16">
              {Array.from({ length: Math.min(variant.items, 3) }).map(
                (_, i) => (
                  <div
                    key={i}
                    className={`flex gap-12 items-center ${
                      i % 2 === 1 && viewMode !== "mobile"
                        ? "flex-row-reverse"
                        : viewMode === "mobile"
                        ? "flex-col"
                        : ""
                    }`}
                  >
                    <div
                      className={`flex-1 ${getBlockStyle(i)} p-8`} // Not square for zigzag
                      onClick={
                        isInteractive ? () => handleBlockClick(i) : undefined
                      }
                    >
                      <div className="w-10 h-10 mb-6 opacity-70">
                        {renderIcon("block", i)}
                      </div>
                      <h3 className="font-bold text-xl mb-4">
                        Feature {i + 1}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        Detailed explanation of this feature and how it benefits
                        your users. Perfect for storytelling and step-by-step
                        processes.
                      </p>
                      <button className="text-sm bg-gray-100 px-4 py-2 rounded">
                        Learn More
                      </button>
                    </div>
                    {viewMode !== "mobile" && (
                      <div className="w-40 h-40 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0">
                        <div className="w-12 h-12 opacity-40">
                          <Star className="w-full h-full" />
                        </div>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        );

      case "bento":
        return (
          <div className={containerClasses}>
            <div
              className={`grid gap-6 ${
                viewMode === "mobile"
                  ? "grid-cols-1"
                  : "grid-cols-4 grid-rows-3"
              } h-[500px]`}
            >
              <div
                className={`${
                  viewMode === "mobile"
                    ? "aspect-[4/3]"
                    : "col-span-2 row-span-2"
                } ${getBlockStyle(0)} p-8 text-center`}
                onClick={isInteractive ? () => handleBlockClick(0) : undefined}
              >
                <div className="h-full flex flex-col justify-center">
                  <div className="w-12 h-12 mx-auto mb-6 opacity-70">
                    {renderIcon("block", 0)}
                  </div>
                  <h2 className="font-bold text-lg mb-4">Primary Feature</h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Your most important feature gets the spotlight in this large
                    card format.
                  </p>
                  <button className="text-sm bg-gray-100 px-4 py-2 rounded">
                    Get Started
                  </button>
                </div>
              </div>

              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className={`${
                    viewMode === "mobile"
                      ? "aspect-square"
                      : index === 2
                      ? "col-span-1 row-span-2"
                      : index === 4
                      ? "col-span-2 row-span-1"
                      : "col-span-1 row-span-1"
                  } ${getBlockStyle(index)} p-4 text-center`}
                  onClick={
                    isInteractive ? () => handleBlockClick(index) : undefined
                  }
                >
                  <div className="h-full flex flex-col justify-center">
                    <div className="w-6 h-6 mx-auto mb-3 opacity-70">
                      {renderIcon("block", index)}
                    </div>
                    <h4 className="font-medium text-xs mb-2">
                      Feature {index + 1}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {index === 2
                        ? "Vertical feature with more space."
                        : "Concise feature description."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderCodePreview = () => {
    const gridClass = getResponsiveGridClasses(
      currentVariant?.cols || 3,
      "desktop"
    );
    return (
      <div className="p-4 bg-gray-900 text-green-400 font-mono text-xs rounded-lg h-full overflow-auto">
        <div className="mb-3 text-gray-400">// Generated React Component</div>
        <div>
          <span className="text-blue-400">export default function</span>{" "}
          <span className="text-yellow-400">FeatureGrid</span>
          <span className="text-white">() {"{"}</span>
        </div>
        <div className="ml-3 mt-2">
          <span className="text-blue-400">return</span>{" "}
          <span className="text-white">(</span>
        </div>
        <div className="ml-6 text-purple-400">
          &lt;div className="max-w-6xl mx-auto px-8 py-16"&gt;
        </div>
        <div className="ml-9 text-purple-400">
          &lt;div className="grid {gridClass} gap-6"&gt;
        </div>
        <div className="ml-12 text-gray-400">
          {/* Square cards with proper spacing */}
        </div>
        <div className="ml-9 text-purple-400">&lt;/div&gt;</div>
        <div className="ml-6 text-purple-400">&lt;/div&gt;</div>
        <div className="ml-3 text-white">)</div>
        <div className="text-white">{"}"}</div>
        <div className="mt-3 text-gray-400">
          // Realistic website section with max-width constraint
        </div>
      </div>
    );
  };

  return (
    <div
      className={`h-screen flex flex-col overflow-hidden ${
        isDarkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Top Controls - Fixed height */}
      <div
        className={`flex-shrink-0 border-b ${
          isDarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="px-6 py-3">
          {/* First Row - Theme Controls */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1
                className={`text-xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Feature Grid Builder
              </h1>
              <p
                className={`text-xs mt-1 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Create beautiful feature grids with industry-standard layouts
              </p>
            </div>
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <div className="flex items-center gap-2">
                <Sun
                  className={`w-4 h-4 ${
                    isDarkMode ? "text-gray-400" : "text-yellow-500"
                  }`}
                />
                <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
                <Moon
                  className={`w-4 h-4 ${
                    isDarkMode ? "text-blue-400" : "text-gray-400"
                  }`}
                />
              </div>
              {/* Theme Colors */}
              <div className="flex gap-2">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    className={`w-5 h-5 rounded-full ${theme.color} ${
                      currentTheme === theme.id
                        ? "ring-2 ring-offset-1 ring-gray-400"
                        : ""
                    }`}
                    onClick={() => setCurrentTheme(theme.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Second Row - Preview Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Preview/Code Toggle */}
              <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <Button
                  variant={previewMode === "preview" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setPreviewMode("preview")}
                  className="h-7 px-3 text-xs"
                >
                  <Eye className="w-3 h-3 mr-1" />
                  Preview
                </Button>
                <Button
                  variant={previewMode === "code" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setPreviewMode("code")}
                  className="h-7 px-3 text-xs"
                >
                  <Code className="w-3 h-3 mr-1" />
                  Code
                </Button>
              </div>
            </div>

            {/* Device Preview */}
            <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <Button
                variant={viewMode === "mobile" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("mobile")}
                className="h-7 px-3 text-xs"
              >
                <Smartphone className="w-3 h-3 mr-1" />
                Mobile
              </Button>
              <Button
                variant={viewMode === "tablet" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("tablet")}
                className="h-7 px-3 text-xs"
              >
                <Tablet className="w-3 h-3 mr-1" />
                Tablet
              </Button>
              <Button
                variant={viewMode === "desktop" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("desktop")}
                className="h-7 px-3 text-xs"
              >
                <Monitor className="w-3 h-3 mr-1" />
                Desktop
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area - Flexible height */}
      <div className="flex-1 flex overflow-hidden">
        <div className="flex w-full h-full px-6 py-4 gap-6">
          {/* Sidebar - Fixed width */}
          <div className="w-64 flex-shrink-0">
            <Card
              className={`h-full flex flex-col ${
                isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
              }`}
            >
              {selectedBlock === null ? (
                // Layout Selection
                <>
                  <CardHeader className="flex-shrink-0 pb-3">
                    <CardTitle
                      className={`flex items-center gap-2 text-sm ${
                        isDarkMode ? "text-white" : ""
                      }`}
                    >
                      <LayoutGrid className="w-4 h-4" />
                      Layouts
                    </CardTitle>
                    <CardDescription
                      className={`text-xs ${isDarkMode ? "text-gray-400" : ""}`}
                    >
                      Choose your grid structure
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 overflow-auto space-y-3">
                    {layoutTypes.map((layout) => {
                      const LayoutIcon = layout.icon;
                      return (
                        <Card
                          key={layout.id}
                          className={`cursor-pointer transition-all hover:shadow-md ${
                            selectedLayout === layout.id
                              ? "ring-2 ring-primary shadow-lg"
                              : isDarkMode
                              ? "bg-gray-700 hover:bg-gray-600"
                              : "hover:bg-gray-50"
                          }`}
                          onClick={() => {
                            setSelectedLayout(layout.id);
                            setSelectedVariant(layout.variants[0].id);
                            setSelectedBlock(null);
                          }}
                        >
                          <CardContent className="p-3">
                            <div className="flex items-center gap-3">
                              <LayoutIcon className="w-4 h-4 text-primary flex-shrink-0" />
                              <div className="flex-1 min-w-0">
                                <h4
                                  className={`font-semibold text-xs ${
                                    isDarkMode ? "text-white" : ""
                                  }`}
                                >
                                  {layout.name}
                                </h4>
                                <p
                                  className={`text-xs mt-1 ${
                                    isDarkMode
                                      ? "text-gray-400"
                                      : "text-gray-600"
                                  }`}
                                >
                                  {layout.description}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </CardContent>
                </>
              ) : (
                // Card Type Selection
                <>
                  <CardHeader className="flex-shrink-0 pb-3">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleBackToLayouts}
                        className="p-1"
                      >
                        <ArrowLeft className="w-3 h-3" />
                      </Button>
                      <div>
                        <CardTitle
                          className={`flex items-center gap-2 text-sm ${
                            isDarkMode ? "text-white" : ""
                          }`}
                        >
                          <Palette className="w-4 h-4" />
                          Card Types
                        </CardTitle>
                        <CardDescription
                          className={`text-xs ${
                            isDarkMode ? "text-gray-400" : ""
                          }`}
                        >
                          Block {selectedBlock + 1} selected
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 overflow-auto space-y-3">
                    <div className="space-y-4">
                      {cardCategories.map((category) => {
                        const CategoryIcon = category.icon;
                        return (
                          <div key={category.id}>
                            <div className="flex items-center gap-2 mb-2">
                              <CategoryIcon className="w-4 h-4 text-primary" />
                              <h4
                                className={`font-medium text-xs ${
                                  isDarkMode ? "text-white" : "text-gray-900"
                                }`}
                              >
                                {category.name}
                              </h4>
                            </div>
                            <div className="space-y-2 ml-6">
                              {category.cards.map((card) => (
                                <Card
                                  key={card.id}
                                  className={`cursor-pointer transition-all hover:shadow-sm ${
                                    selectedCardType === card.id
                                      ? "ring-2 ring-primary shadow-lg"
                                      : isDarkMode
                                      ? "bg-gray-700 hover:bg-gray-600"
                                      : "hover:bg-gray-50"
                                  }`}
                                  onClick={() => setSelectedCardType(card.id)}
                                >
                                  <CardContent className="p-3">
                                    <div className="space-y-1">
                                      <h5
                                        className={`font-medium text-xs ${
                                          isDarkMode ? "text-white" : ""
                                        }`}
                                      >
                                        {card.name}
                                      </h5>
                                      <p
                                        className={`text-xs ${
                                          isDarkMode
                                            ? "text-gray-400"
                                            : "text-gray-600"
                                        }`}
                                      >
                                        {card.description}
                                      </p>
                                      <div
                                        className={`text-xs ${
                                          isDarkMode
                                            ? "text-gray-500"
                                            : "text-gray-500"
                                        } italic`}
                                      >
                                        {card.preview}
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </>
              )}
            </Card>
          </div>

          {/* Main Preview Area - Flexible width */}
          <div className="flex-1 min-w-0">
            <Card
              className={`h-full flex flex-col ${
                isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
              }`}
            >
              {/* Layout Variants Header - Fixed height */}
              <CardHeader className="flex-shrink-0 pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle
                      className={`text-lg ${isDarkMode ? "text-white" : ""}`}
                    >
                      {currentLayout?.name}
                    </CardTitle>
                    <CardDescription
                      className={`text-sm ${isDarkMode ? "text-gray-400" : ""}`}
                    >
                      {selectedBlock !== null
                        ? (() => {
                            const selectedCard = cardCategories
                              .flatMap((cat) => cat.cards)
                              .find((card) => card.id === selectedCardType);
                            const category = cardCategories.find((cat) =>
                              cat.cards.some(
                                (card) => card.id === selectedCardType
                              )
                            );
                            return `Block ${selectedBlock + 1}: ${
                              selectedCard?.name || "Card"
                            } (${
                              category?.name || "Category"
                            }) • Realistic website section width`;
                          })()
                        : "Click on any block to customize it • Choose from 18 different card types across 6 categories"}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    {currentLayout?.variants.map((variant) => (
                      <Button
                        key={variant.id}
                        variant={
                          selectedVariant === variant.id ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setSelectedVariant(variant.id)}
                        className="px-3 text-xs"
                      >
                        {variant.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardHeader>

              {/* Preview Content - Flexible height with scroll */}
              <CardContent className="flex-1 p-0 overflow-hidden">
                <div
                  className={`${
                    isDarkMode ? "bg-gray-900" : "bg-gray-50"
                  } rounded-lg h-full overflow-auto`}
                >
                  {previewMode === "preview"
                    ? renderLayoutPreview(selectedLayout, selectedVariant, true)
                    : renderCodePreview()}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
